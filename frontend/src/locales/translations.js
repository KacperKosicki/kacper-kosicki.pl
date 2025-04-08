const translations = {
  pl: {
    home: "Strona Główna",
    about: "O mnie",
    skills: "Umiejętności",
    portfolio: "Portfolio",
    contact: "Kontakt",
    notFound: "Nie znaleziono",
    notFoundText: "Strona, której szukasz, nie istnieje.",
    goBack: "Powrót na stronę główną",
    chatbot: "Porozmawiaj z ChatBotem",

    // ChatBot
    chatbotOpen: "Porozmawiaj z ChatBotem",
    chatbotHide: "Ukryj ChatBota",
    chatbotPlaceholder: "Napisz wiadomość...",
    chatbotMessageTooLong: "Wiadomość nie może być dłuższa niż 50 znaków!",
    chatbotYou: "Ty",
    chatbotPrev: "Poprzednie pytanie",
    chatbotNext: "Następne pytanie",

    chatbotKeywords: {
      cost: "koszt",
      contact: "kontakt",
      error: "błąd",
      collaboration: "współpraca"
    },

    chatbotResponses: {
      cost: "Koszt wykonania strony zależy od wielu czynników. Możemy omówić szczegóły w prywatnej rozmowie. Przejdź proszę na podstronę 'Kontakt', lub jeśli już na niej jesteś, napisz prywatną wiadomość.",
      contact: "Możesz skontaktować się z nami pod adresem kosickikacper1@gmail.com lub telefonicznie pod numerem 799-030-616.",
      error: "Jeśli zauważyłeś błąd na stronie, możesz opisać go w wiadomości prywatnej na podstronie 'Kontakt'.",
      collaboration: "Jestem otwarty na propozycję współpracy. Możemy omówić szczegóły w prywatnej rozmowie.",
      unknown: "Przepraszam, nie rozumiem Twojego pytania. Spróbuj jeszcze raz."
    },

    //Cookies
    cookiesTitle: "Twoje ustawienia cookies",
    cookiesDescription: "Używam plików cookies, aby ulepszyć Twoje doświadczenie na mojej stronie.",
    cookiesNecessary: "Niezbędne (zawsze aktywne)",
    cookiesAnalytics: "Statystyczne (np. Google Analytics)",
    cookiesMarketing: "Marketingowe (np. Facebook Pixel)",
    cookiesSave: "Zapisz ustawienia",

    // Home
    codeHours: "Godzin kodowania",
    projectsCompleted: "Zrealizowanych projektów",
    happyClients: "Zadowolonych klientów",
    yearsExperience: "Lat doświadczenia",

    testimonialsTitle: "Co mówią o mnie inni?",
    testimonial1: "Świetna współpraca! Projekt dostarczony na czas i działa bezbłędnie.",
    testimonial2: "Pełen profesjonalizm i ogromna wiedza. Polecam!",
    client1: "Jan Kowalski",
    client2: "Anna Nowak",

    ctaTitle: "Zainteresowany współpracą?",
    ctaDescription: "Tworzę nowoczesne, wydajne i skalowalne aplikacje webowe.",
    contactMe: "Skontaktuj się ze mną",

    // Hero
    heroTitle: "Cześć! Jestem Kacper.",
    heroPhrases: [
      "Tworzę nowoczesne aplikacje webowe.",
      "Specjalizuję się w React i Node.js.",
      "Buduję skalowalne rozwiązania backendowe.",
      "Programowanie to moja pasja."
    ],
    heroImageAlt: "Zdjęcie profilowe Kacpra Kosickiego",
    viewProjects: "Zobacz projekty",
    contactMe: "Skontaktuj się",

    // AboutMe
    aboutTitle: "O mnie",
    aboutIntro1: "Cześć! Jestem",
    aboutIntro2: "pasjonat programowania i technologii webowych. Ukończyłem Bootcamp Full Stack Developera i rozwijam swoje umiejętności każdego dnia!",
    aboutDescription: "Tworzę nowoczesne, skalowalne i wydajne aplikacje z użyciem najnowszych technologii. Uwielbiam wyzwania i optymalizację kodu!",
    viewProjects: "Zobacz moje projekty",
    aboutImageAlt: "Zdjęcie profilowe Kacpra Kosickiego",

    // Skills
    skillsTitle: "Technologie, których używam",
    skillHtml: "HTML",
    skillHtmlDesc: "Struktura stron internetowych, semantyka, optymalizacja SEO.",
    skillCss: "CSS",
    skillCssDesc: "Stylizacja UI/UX, animacje, preprocesory (SCSS, Tailwind).",
    skillRwd: "RWD",
    skillRwdDesc: "Tworzenie stron w podejściu Mobile-First i adaptacyjne UI.",
    skillBootstrap: "Bootstrap",
    skillBootstrapDesc: "Szybkie budowanie UI przy użyciu gotowych komponentów.",
    skillNpm: "NPM",
    skillNpmDesc: "Zarządzanie paczkami w projektach JS i Node.js.",
    skillGit: "Git",
    skillGitDesc: "Kontrola wersji, GitHub, CI/CD, zarządzanie repozytoriami.",
    skillJs: "JavaScript",
    skillJsDesc: "Dynamiczne aplikacje webowe, ES6+, TypeScript.",
    skillReact: "React",
    skillReactDesc: "Interaktywne SPA, Next.js, hooks, optymalizacja wydajności.",
    skillWebpack: "Webpack",
    skillWebpackDesc: "Bundlowanie, optymalizacja zasobów, konfiguracja projektów.",
    skillMongoDb: "MongoDB",
    skillMongoDbDesc: "Bazy NoSQL, modelowanie danych, Mongoose ORM.",
    skillMongoose: "Mongoose",
    skillMongooseDesc: "Obsługa MongoDB w Node.js, zapytania, optymalizacja indeksów.",
    skillJira: "Jira",
    skillJiraDesc: "Zarządzanie projektami, Agile, Scrum, backlog.",
    skillExpress: "Express",
    skillExpressDesc: "Tworzenie backendu, REST API, middleware, autoryzacja.",
    skillAjax: "AJAX",
    skillAjaxDesc: "Obsługa zapytań asynchronicznych do backendu.",
    skillNode: "Node.js",
    skillNodeDesc: "Backend, API, microservices, WebSockets, NestJS.",
    skillWebsocket: "WebSocket",
    skillWebsocketDesc: "Real-time communication, chat, powiadomienia push.",
    skillRedux: "Redux",
    skillReduxDesc: "Zarządzanie stanem w aplikacjach React.js.",
    skillChatGPT: "Chat GPT",
    skillChatGPTDesc: "Korzystanie z narzędzia Chat GPT.",

    //WhyMe
    whyMeTitle: "Dlaczego ja?",
    whyMeSubtitle: "Poznaj moje podejście i cechy, które sprawiają, że warto ze mną współpracować.",
    innovativeApproach: "Innowacyjne podejście",
    innovativeApproachDesc: "Zawsze poszukuję nowych rozwiązań, aby Twoje projekty były wyjątkowe i nowoczesne.",
    creativity: "Kreatywność",
    creativityDesc: "Tworzę unikalne projekty, które łączą estetykę i funkcjonalność.",
    professionalCode: "Profesjonalny kod",
    professionalCodeDesc: "Stawiam na czysty, zoptymalizowany i responsywny kod, który działa na każdej platformie.",
    collaboration: "Współpraca",
    collaborationDesc: "Cenię sobie dobrą komunikację i zaangażowanie w projekty klientów.",

    // Workflow
    workflowTitle: "Jak wygląda współpraca?",
    workflowStep1Title: "Analiza potrzeb",
    workflowStep1Desc: "Na początku omawiamy Twoje cele i potrzeby, aby zrozumieć wizję projektu.",
    workflowStep2Title: "Dostęp do konfiguratora",
    workflowStep2Desc: "Osoby poważnie zainteresowane otrzymują dostęp do mojego konfiguratora, gdzie mogą samodzielnie przygotować strukturę swojej strony.",
    workflowStep3Title: "Projektowanie & Kodowanie",
    workflowStep3Desc: "Na podstawie konfiguracji tworzę indywidualny projekt graficzny i implementuję kod strony.",
    workflowStep4Title: "Podgląd & Aktualizacje",
    workflowStep4Desc: "Na bieżąco otrzymujesz podgląd gotowych sekcji oraz możesz zgłaszać zmiany — wszystko widoczne w Twoim panelu.",
    workflowStep5Title: "Wdrożenie",
    workflowStep5Desc: "Po zatwierdzeniu wszystkiego uruchamiam stronę na Twojej domenie i konfiguruję hosting.",
    workflowStep6Title: "Wsparcie & Utrzymanie",
    workflowStep6Desc: "Oferuję dalszą pomoc, optymalizację i rozwój Twojej strony w razie potrzeby.",

    //FAQ
    faqTitle: "Najczęściej zadawane pytania",
    faqQuestion1: "Jak wygląda współpraca?",
    faqAnswer1: "Proces zaczynamy od analizy potrzeb, następnie przechodzimy do projektowania i implementacji.",
    faqQuestion2: "Jakie technologie używasz?",
    faqAnswer2: "Specjalizuję się w React, Node.js, MongoDB, a także w Next.js i TypeScript.",
    faqQuestion3: "Czy oferujesz wsparcie po wdrożeniu?",
    faqAnswer3: "Tak! Zapewniam wsparcie techniczne oraz dalszy rozwój projektu.",

    //Contact
    contactTitle: "Skontaktuj się!",
    contactDescription: "Masz pytanie? Chcesz podjąć współpracę? Wypełnij formularz!",

    nameLabel: "Imię:",
    emailLabel: "Email:",
    optionLabel: "Temat:",
    messageLabel: "Wiadomość:",

    placeholderName: "Wpisz swoje imię",
    placeholderEmail: "Wpisz swój email",
    placeholderMessage: "Wpisz swoją wiadomość...",

    selectOption: "Wybierz temat",
    optionPricing: "Cennik",
    optionCollaboration: "Współpraca",
    optionProblem: "Problem ze stroną",
    optionBug: "Błąd",
    optionAdvice: "Porada",

    scheduleAMeeting: "Umów spotkanie",

    sendButton: "Wyślij",
    messageError: "Wiadomość musi zawierać co najmniej 25 znaków.",

    sending: "Wysyłanie...",
    sent: "Wysłano!",

    //Help
    helpButton: "Szybka pomoc",
    helpStep1Title: "Witaj!",
    helpStep1Desc: "Na tej stronie znajdziesz moje portfolio, usługi i sposób kontaktu.",
    helpStep2Title: "Portfolio",
    helpStep2Desc: "Sprawdź moje projekty i zobacz, nad czym pracowałem.",
    helpStep3Title: "Kontakt",
    helpStep3Desc: "Chcesz współpracować? Wypełnij formularz kontaktowy.",
    helpStep4Title: "Chatbot",
    helpStep4Desc: "Masz pytania? Możesz skorzystać z chatbota, który Ci pomoże!",
    helpStep5Title: "Newsletter",
    helpStep5Desc: "Zapisz się, aby otrzymywać informacje o moich nowościach.",
    helpStep6Title: "Gotowe!",
    helpStep6Desc: "Teraz znasz wszystkie funkcje mojej strony! Miłego korzystania!",
    previous: "Wstecz",
    next: "Dalej",
    close: "Zamknij",

    // Footer
    usefulLinks: "Przydatne Linki",
    recentProjects: "Ostatnie Projekty",
    latestPosts: "Najnowsze wpisy",
    newsletter: "Newsletter",
    newsletterText: "Zapisz się, aby otrzymywać najnowsze informacje!",
    emailPlaceholder: "Wpisz swój email",
    subscribe: "Zapisz się",
    findMeOn: "Znajdź mnie na",
    visited: "Odwiedziłeś tę stronę",
    times: "razy",
    allRightsReserved: "Wszelkie prawa zastrzeżone.",
    scrollTop: "Wróć na górę",
    blog: "Blog",
    project1: "Projekt 1 – Aplikacja do zarządzania zadaniami",
    project2: "Projekt 2 – Portfolio React",
    project3: "Projekt 3 – E-commerce z Node.js",
    post1: "React Hooks – przewodnik",
    post2: "Najlepsze praktyki w MongoDB",
    post3: "Next.js vs. React – co wybrać?",
  },

  en: {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    notFound: "Not found",
    notFoundText: "The page you are looking for does not exist.",
    goBack: "Go back to the main page",
    chatbot: "Chat with ChatBot",

    // ChatBot
    chatbotOpen: "Chat with ChatBot",
    chatbotHide: "Hide ChatBot",
    chatbotPlaceholder: "Type a message...",
    chatbotMessageTooLong: "The message cannot be longer than 50 characters!",
    chatbotYou: "You",
    chatbotPrev: "Previous question",
    chatbotNext: "Next question",

    chatbotKeywords: {
      cost: "cost",
      contact: "contact",
      error: "error",
      collaboration: "collaboration"
    },

    chatbotResponses: {
      cost: "The cost of creating a website depends on many factors. We can discuss the details in a private conversation. Please visit the 'Contact' page.",
      contact: "You can contact us at kosickikacper1@gmail.com or by phone at 799-030-616.",
      error: "If you noticed an error on the site, please describe it in a private message on the 'Contact' page.",
      collaboration: "I am open to collaboration proposals. We can discuss the details in a private conversation.",
      unknown: "Sorry, I don't understand your question. Please try again."
    },

    //Cookies
    cookiesTitle: "Your cookie settings",
    cookiesDescription: "I use cookies to improve your experience on my website.",
    cookiesNecessary: "Necessary (always active)",
    cookiesAnalytics: "Analytics (e.g. Google Analytics)",
    cookiesMarketing: "Marketing (e.g. Facebook Pixel)",
    cookiesSave: "Save settings",

    // Home
    codeHours: "Hours of coding",
    projectsCompleted: "Completed projects",
    happyClients: "Happy clients",
    yearsExperience: "Years of experience",

    testimonialsTitle: "What do people say about me?",
    testimonial1: "Great cooperation! The project was delivered on time and works flawlessly.",
    testimonial2: "Full professionalism and great knowledge. I recommend!",
    client1: "John Doe",
    client2: "Anna Smith",

    ctaTitle: "Interested in working together?",
    ctaDescription: "I create modern, efficient, and scalable web applications.",
    contactMe: "Contact me",

    // Hero
    heroTitle: "Hi! I'm Kacper.",
    heroPhrases: [
      "I create modern web applications.",
      "I specialize in React and Node.js.",
      "I build scalable backend solutions.",
      "Programming is my passion."
    ],
    heroImageAlt: "Profile picture of Kacper Kosicki",
    viewProjects: "View Projects",
    contactMe: "Contact Me",

    // AboutMe
    aboutTitle: "About Me",
    aboutIntro1: "Hi! I'm",
    aboutIntro2: "a passionate developer and web technologies enthusiast. I completed a Full Stack Developer Bootcamp and continue improving my skills every day!",
    aboutDescription: "I create modern, scalable, and efficient applications using the latest technologies. I love challenges and code optimization!",
    viewProjects: "View my projects",
    aboutImageAlt: "Profile picture of Kacper Kosicki",

    // Skills
    skillsTitle: "Technologies I use",
    skillHtml: "HTML",
    skillHtmlDesc: "Website structure, semantics, SEO optimization.",
    skillCss: "CSS",
    skillCssDesc: "UI/UX styling, animations, preprocessors (SCSS, Tailwind).",
    skillRwd: "RWD",
    skillRwdDesc: "Mobile-First design and adaptive UI.",
    skillBootstrap: "Bootstrap",
    skillBootstrapDesc: "Quick UI building with pre-made components.",
    skillNpm: "NPM",
    skillNpmDesc: "Package management for JS and Node.js projects.",
    skillGit: "Git",
    skillGitDesc: "Version control, GitHub, CI/CD, repo management.",
    skillJs: "JavaScript",
    skillJsDesc: "Dynamic web applications, ES6+, TypeScript.",
    skillReact: "React",
    skillReactDesc: "Interactive SPA, Next.js, hooks, performance optimization.",
    skillWebpack: "Webpack",
    skillWebpackDesc: "Bundling, asset optimization, project configuration.",
    skillMongoDb: "MongoDB",
    skillMongoDbDesc: "NoSQL databases, data modeling, Mongoose ORM.",
    skillMongoose: "Mongoose",
    skillMongooseDesc: "Handling MongoDB in Node.js, queries, index optimization.",
    skillJira: "Jira",
    skillJiraDesc: "Project management, Agile, Scrum, backlog.",
    skillExpress: "Express",
    skillExpressDesc: "Backend development, REST API, middleware, authentication.",
    skillAjax: "AJAX",
    skillAjaxDesc: "Handling asynchronous requests to the backend.",
    skillNode: "Node.js",
    skillNodeDesc: "Backend, API, microservices, WebSockets, NestJS.",
    skillWebsocket: "WebSocket",
    skillWebsocketDesc: "Real-time communication, chat, push notifications.",
    skillRedux: "Redux",
    skillReduxDesc: "State management in React.js applications.",
    skillChatGPT: "Chat GPT",
    skillChatGPTDesc: "Using Chat GPT as a tool.",

    //WhyMe
    whyMeTitle: "Why Me?",
    whyMeSubtitle: "Discover my approach and qualities that make me a great partner to work with.",
    innovativeApproach: "Innovative Approach",
    innovativeApproachDesc: "I am always looking for new solutions to make your projects unique and modern.",
    creativity: "Creativity",
    creativityDesc: "I create unique projects that combine aesthetics and functionality.",
    professionalCode: "Professional Code",
    professionalCodeDesc: "I focus on clean, optimized, and responsive code that works on every platform.",
    collaboration: "Collaboration",
    collaborationDesc: "I value good communication and engagement in client projects.",

    // Workflow
    workflowTitle: "How does the cooperation work?",
    workflowStep1Title: "Needs Analysis",
    workflowStep1Desc: "We start by discussing your goals and needs to understand the project vision.",
    workflowStep2Title: "Access to Configurator",
    workflowStep2Desc: "If you're seriously interested, you'll get access to my configurator where you can prepare the structure of your website.",
    workflowStep3Title: "Design & Development",
    workflowStep3Desc: "Based on your configuration, I create a personalized design and implement the website code.",
    workflowStep4Title: "Preview & Updates",
    workflowStep4Desc: "You will continuously see the progress of your project and can request changes — everything is visible in your panel.",
    workflowStep5Title: "Deployment",
    workflowStep5Desc: "Once everything is approved, I launch your website on your domain and configure hosting.",
    workflowStep6Title: "Support & Maintenance",
    workflowStep6Desc: "I offer ongoing support, optimization, and further development of your website if needed.",

    //FAQ
    faqTitle: "Frequently Asked Questions",
    faqQuestion1: "How does the cooperation work?",
    faqAnswer1: "We start with a needs analysis, then move on to design and implementation.",
    faqQuestion2: "What technologies do you use?",
    faqAnswer2: "I specialize in React, Node.js, MongoDB, as well as Next.js and TypeScript.",
    faqQuestion3: "Do you offer support after deployment?",
    faqAnswer3: "Yes! I provide technical support and further project development.",

    //Contact
    contactTitle: "Contact me!",
    contactDescription: "Have a question? Want to collaborate? Fill out the form!",

    nameLabel: "Name:",
    emailLabel: "Email:",
    optionLabel: "Subject:",
    messageLabel: "Message:",

    placeholderName: "Enter your name",
    placeholderEmail: "Enter your email",
    placeholderMessage: "Enter your message...",

    selectOption: "Select a subject",
    optionPricing: "Pricing",
    optionCollaboration: "Collaboration",
    optionProblem: "Website issue",
    optionBug: "Bug",
    optionAdvice: "Advice",

    scheduleAMeeting: "Schedule a Meeting",

    sendButton: "Send",
    messageError: "The message must be at least 25 characters long.",

    sending: "Sending...",
    sent: "Sent!",

    //Help
    helpButton: "Quick Help",
    helpStep1Title: "Welcome!",
    helpStep1Desc: "On this site, you'll find my portfolio, services, and contact information.",
    helpStep2Title: "Portfolio",
    helpStep2Desc: "Check out my projects and see what I have worked on.",
    helpStep3Title: "Contact",
    helpStep3Desc: "Want to collaborate? Fill out the contact form.",
    helpStep4Title: "Chatbot",
    helpStep4Desc: "Have questions? You can use the chatbot to assist you!",
    helpStep5Title: "Newsletter",
    helpStep5Desc: "Sign up to receive updates about my latest news.",
    helpStep6Title: "Done!",
    helpStep6Desc: "Now you know all the features of my site! Enjoy your visit!",
    previous: "Back",
    next: "Next",
    close: "Close",

    // Footer
    usefulLinks: "Useful Links",
    recentProjects: "Recent Projects",
    latestPosts: "Latest Posts",
    newsletter: "Newsletter",
    newsletterText: "Sign up to receive the latest updates!",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    findMeOn: "Find me on",
    visited: "You have visited this page",
    times: "times",
    allRightsReserved: "All rights reserved.",
    scrollTop: "Scroll to top",
    blog: "Blog",
    project1: "Task Management App",
    project2: "React Portfolio",
    project3: "E-commerce with Node.js",
    post1: "React Hooks Guide",
    post2: "Best Practices in MongoDB",
    post3: "Next.js vs. React - What to choose?",
  }
};

export default translations;
