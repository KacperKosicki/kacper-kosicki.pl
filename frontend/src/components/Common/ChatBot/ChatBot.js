import React, { useState, useEffect, useContext, useCallback } from 'react';
import styles from './ChatBot.module.scss';
import { LanguageContext } from '../../../context/LanguageContext';

const ChatBot = () => {
  const { t } = useContext(LanguageContext);

  const [messages, setMessages] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const pageSize = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [lastMessageFromUser, setLastMessageFromUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleBotResponse = useCallback((message) => {
    if (!message) return;

    const lowerCaseMessage = message.toLowerCase();
    let botResponse = '';

    if (lowerCaseMessage.includes(t.chatbotKeywords.cost)) {
      botResponse = t.chatbotResponses.cost;
    } else if (lowerCaseMessage.includes(t.chatbotKeywords.contact)) {
      botResponse = t.chatbotResponses.contact;
    } else if (lowerCaseMessage.includes(t.chatbotKeywords.error)) {
      botResponse = t.chatbotResponses.error;
    } else if (lowerCaseMessage.includes(t.chatbotKeywords.collaboration)) {
      botResponse = t.chatbotResponses.collaboration;
    } else {
      botResponse = t.chatbotResponses.unknown;
    }

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot' }
      ]);
      setIsTyping(false);
    }, 5000);
  }, [t.chatbotKeywords, t.chatbotResponses]);

  useEffect(() => {
    if (!lastMessageFromUser) return;
    handleBotResponse(messages[messages.length - 1]?.text);
    setLastMessageFromUser(false);
  }, [messages, lastMessageFromUser, handleBotResponse]);

  const handleSendMessage = (message) => {
    if (message.length > 50) {
      setErrorMessage(t.chatbotMessageTooLong);
      return;
    }

    setMessages([...messages, { text: message, sender: 'user' }]);
    setLastMessageFromUser(true);
    setErrorMessage('');
  };

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  const paginatedMessages = messages.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className={styles.chatBot}>
      <button className={styles.toggleButton} onClick={toggleChatBot}>
        {showChatBot ? t.chatbotHide : t.chatbotOpen}
      </button>

      {showChatBot && (
        <div className={`${styles.chatWindow} ${styles.smallWindow}`}>
          <div className={styles.messagesContainer}>
            {paginatedMessages.map((message, index) => (
              <div key={index} className={`${styles.message} ${styles[message.sender]} ${message.sender === 'user' ? styles.userMessage : styles.botMessage}`}>
                <span className={`${styles.sender} ${message.sender === 'user' ? styles.userText : styles.botText}`}>
                  {message.sender === 'user' ? t.chatbotYou : "ChatBot"}
                </span>: {message.text}
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.message} ${styles.botMessage}`}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.chatInput}
              placeholder={t.chatbotPlaceholder}
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
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              {t.chatbotPrev}
            </button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={paginatedMessages.length < pageSize}>
              {t.chatbotNext}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
