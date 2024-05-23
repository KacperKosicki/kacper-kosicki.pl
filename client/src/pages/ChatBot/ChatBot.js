import React, { useState, useEffect } from 'react';
import styles from './ChatBot.module.scss';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatBotBackground, setChatBotBackground] = useState('transparent');
  const pageSize = 2; // liczba wiadomości na stronie
  const [currentPage, setCurrentPage] = useState(1);
  const [lastMessageFromUser, setLastMessageFromUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!lastMessageFromUser) return; // Jeśli ostatnia wiadomość nie jest od użytkownika, nie wykonuj niczego
    handleBotResponse(messages[messages.length - 1]?.text);
    setLastMessageFromUser(false); // Po wywołaniu handleBotResponse resetujemy flagę
  }, [messages, lastMessageFromUser]);

  const handleSendMessage = (message) => {
    // Sprawdzamy, czy długość wiadomości nie przekracza 50 znaków
    if (message.length > 50) {
      setErrorMessage('Wiadomość nie może być dłuższa niż 50 znaków!');
      return;
    }
    
    setMessages([...messages, { text: message, sender: 'user' }]);
    setLastMessageFromUser(true); // Ustawiamy flagę, że ostatnia wiadomość jest od użytkownika
    setErrorMessage(''); // Czyścimy komunikat błędu, jeśli użytkownik wprowadził poprawną wiadomość
  };

  const handleBotResponse = (message) => {
    if (!message) return;

    const lowerCaseMessage = message.toLowerCase();
    let botResponse = '';

    if (lowerCaseMessage.includes('koszt') || lowerCaseMessage.includes('cena')) {
      botResponse = 'Koszt wykonania strony zależy od wielu czynników. Możemy omówić szczegóły w prywatnej rozmowie. Przejdź proszę na podstronę "Kontakt", lub jeśli już na niej jesteś, napisz prywatną wiadomość wypełniając formularz kontaktowy oraz zaznacz z podanego pola opcję "Cennik".';
    } else if (lowerCaseMessage.includes('kontakt')) {
      botResponse = 'Możesz skontaktować się z nami pod adresem email@example.com lub telefonicznie pod numerem 123-456-789.';
    } else {
      botResponse = 'Przepraszam, nie rozumiem Twojego pytania. Proszę spróbuj jeszcze raz.';
    }

    setTimeout(() => {
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
    setChatBotBackground(showChatBot ? 'transparent' : 'black');
  };

  const paginatedMessages = messages.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className={styles.chatBot} style={{ backgroundColor: chatBotBackground }}>
      <button className={styles.toggleButton} onClick={toggleChatBot}>
        {showChatBot ? 'Ukryj ChatBota' : 'Porozmawiaj z ChatBotem'}
      </button>

      {showChatBot && (
        <div className={`${styles.chatWindow} ${styles.smallWindow}`}>
          <div className={styles.messagesContainer}>
            {paginatedMessages.map((message, index) => (
              <div key={index} className={`${styles.message} ${styles[message.sender]} ${message.sender === 'user' ? styles.userMessage : styles.botMessage}`}>
                <span className={`${styles.sender} ${message.sender === 'user' ? styles.userText : styles.botText}`}>
                  {message.sender === 'user' ? 'Ty' : 'ChatBot'}
                </span>: {message.text}
              </div>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Napisz wiadomość..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(e.target.value);
                  e.target.value = '';
                }
              }}
            />
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          </div>
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Poprzednie pytanie
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={paginatedMessages.length < pageSize}
            >
              Następne pytanie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;