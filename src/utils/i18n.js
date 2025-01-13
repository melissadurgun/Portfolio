import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to my Portfolio": "Welcome to my Portfolio",
      "Hi I'm Melissa ": "Hi I'm Melissa ",
      "HeaderText": "With a keen eye for detail and a love for creating seamless digital experiences, I specialize in developing websites that are not only functional but also visually appealing. Let’s explore my work and see how I can bring your ideas to life!",
      "Scroll Down": "Scroll Down",
      "Download my CV": "Download my CV",
      "Let's connect": "Let's connect",
      "Get to Know": "Get to Know",
      "About Me": "About Me",
      "My Experience": "My Experience",
      "2+ Years": "2+ Years",
      "Projects": "Projects",
      "10+ Completed": "5+ Completed",
      "AboutMeText": "I am a corporate student currently pursuing my Bachelor's Degree in Business Information Science, combining practical experience with academic knowledge to bridge the gap between business and technology. <br />My passion lies in creating innovative solutions, whether it's designing user-friendly websites, optimizing processes, or solving complex problems. <br />I am detail-oriented and thrive on finding efficient, practical answers to challenges. I specialize in data analysis, developing reports used internationally within a large corporation, and am always eager to bring my analytical skills to new challenges. Alongside my data analysis expertise, I have a strong passion for web development, including front-end, back-end, and UI/UX design. <br />I offer a unique combination of skills to help businesses optimize their processes and create user-friendly, efficient digital solutions. <br />Whether you need data-driven insights or a polished web experience, I am committed to delivering high-quality work that meets your needs.",
      "Contact Me":"Contact Me",
      "What Skills I have": "What Skills I have",
      "My Techstack": "My Techstack",
      "Frontend Development": "Frontend Development",
      "Experienced": "Experienced",
      "Intermediate": "Intermediate",
      "Proficient": "Proficient",
      "Backend Development": "Backend Development",
      "What I Offer": "What I Offer",
      "Services": "Services",
      "UX1": "Create user-friendly interfaces based on the needs and behaviors.",
      "UX2": "Develop wireframes and interactive prototypes to visualize design concepts.",
      "UX3": "Design interactive elements to ensure a smooth, engaging experience.",
      "UX4": "Craft visually appealing designs focusing on consistency and brand identity.",
      "UX5": "Ensure responsive designs that adapt seamlessly across different devices.",
      "Web Development": "Web Development",
      "WDev1": "Build responsive websites that provide a seamless experience across devices.",
      "WDev2": "Develop dynamic, user-friendly websites with clean and optimized code.",
      "WDev3": "Integrate APIs and third-party services to extend website functionality.",
      "WDev4": "Ensure website performance, security, and scalability for long-term use.",
      "WDev5": "Design custom databases and structures for efficient data storage and access.",
      "WDev6": "Develop and manage robust backend systems for efficient data handling.",
      "Dat1": "Develop interactive Power BI dashboards and reports for insightful decision-making.",
      "Dat2": "Utilize Power BI Service and Desktop for cloud-based and local reporting.",
      "Dat3": "Leverage DAX and Power Query for complex data transformation and analysis.",
      "Dat4": "Design and implement efficient data models for improved reporting accuracy.",
      "Dat5": "Use C# scripting to automate and enhance data analysis processes.",
      "Get In Touch": "Get In Touch",
      "Contact Me": "Contact Me",
      "Send me a message": "Send me a message",
      "Your Full Name": "Your Full Name",
      "Your Email": "Your Email",
      "Your Message": "Your Message",
      "Send your Message": "Send your Message",
      "Home": "Home",
      "About": "About",
      "Experience": "Experience",
      "Services": "Services",
      "Projects": "Projects",
      "Contact": "Contact",
      "All rights reserved": "All rights reserved",
      "My recent Work": "My recent Work",
      "Projects": "Projects"
    }
  },
  de: {
    translation: {
      "Welcome to my Portfolio": "Willkommen zu meinem Portfolio",
      "Hi I'm Melissa ": "Hi, ich bin Melissa ",
      "HeaderText": "Mit einem scharfen Blick für Details und einer Leidenschaft für die Schaffung nahtloser digitaler Erlebnisse spezialisiere ich mich auf die Entwicklung von Websites, die nicht nur funktional, sondern auch visuell ansprechend sind. Schau dir meine Arbeiten an und sieh, wie ich deine Ideen realisieren kann!",
      "Scroll Down": "Runter scrollen",
      "Download my CV": "Mein Lebenslauf",
      "Let's connect": "Kontaktiere Mich",
      "Get to Know": "Lerne mich kennen",
      "About Me": "Über mich",
      "My Experience": "Meine Erfahrung",
      "2+ Years": "2+ Jahre",
      "Projects": "Projekte",
      "10+ Completed": "5+ Abgeschlossen",
      "AboutMeText": "Ich bin eine duale Studentin und absolviere derzeit meinen Bachelorabschluss in der Wirtschaftsinformatik und praktische Erfahrungen mit akademischem Wissen kombiniert, um die Lücke zwischen Wirtschaft und Technologie zu schließen. <br />Meine Leidenschaft liegt darin, innovative Lösungen zu schaffen, sei es beim Design benutzerfreundlicher Websites, der Optimierung von Prozessen oder der Lösung komplexer Probleme. <br />Ich bin detailorientiert und strebe danach, effiziente und praktische Antworten auf Herausforderungen zu finden. <br />In meiner Tätigkeit spezialisiere ich mich auf die Datenanalyse, entwickle Berichte, die international in großen Unternehmen verwendet werden, und freue mich immer darauf, meine analytischen Fähigkeiten in neuen Herausforderungen einzubringen. <br />Neben meiner Expertise in der Datenanalyse habe ich eine starke Leidenschaft für Webentwicklung, einschließlich Front-End, Back-End und UI/UX-Design. <br />Ich biete eine einzigartige Kombination von Fähigkeiten, um Unternehmen bei der Optimierung ihrer Prozesse und der Schaffung benutzerfreundlicher, effizienter digitaler Lösungen zu unterstützen. Ob du datengetriebene Einblicke oder eine ausgefeilte Web-Erfahrung benötigst, ich liefere jederzeit qualitativ hochwertige Arbeit, die deinen Bedürfnissen entspricht.",
      "Contact Me": "Kontaktiere Mich",
      "What Skills I have": "Welche Fähigkeiten ich habe",
      "My Techstack": "Mein Techstack",
      "Frontend Development": "Frontend Entwicklung",
      "Experienced": "Erfahren",
      "Intermediate": "Fortgeschritten",
      "Proficient": "Kompetent",
      "Backend Development": "Backend Entwicklung",
      "What I Offer": "Was ich biete",
      "Services": "Services",
      "UX1": "Erstellen von benutzerfreundlichen Schnittstellen, die auf die Bedürfnisse und Verhaltensweisen der Nutzer abgestimmt sind.",
      "UX2": "Entwickeln von Wireframes und interaktiven Prototypen zur Visualisierung von Designkonzepten.",
      "UX3": "Gestalten von interaktiven Elementen, um eine reibungslose und ansprechende Benutzererfahrung sicherzustellen.",
      "UX4": "Kreieren von visuell ansprechenden Designs, die Konsistenz und Markenidentität betonen.",
      "UX5": "Sicherstellen von responsiven Designs, die sich nahtlos an verschiedene Geräte anpassen.",
      "Web Development": "Web-Entwicklung",
      "WDev1": "Erstellen von responsiven Webseiten, die eine nahtlose Erfahrung auf verschiedenen Geräten bieten.",
      "WDev2": "Entwickeln von dynamischen, benutzerfreundlichen Webseiten mit sauberem und optimiertem Code.",
      "WDev3": "Integrieren von APIs und Drittanbieter-Diensten zur Erweiterung der Funktionalität der Webseite.",
      "WDev4": "Sicherstellen der Leistung, Sicherheit und Skalierbarkeit der Webseite für eine langfristige Nutzung.",
      "WDev5": "Entwerfen von maßgeschneiderten Datenbanken und Strukturen für eine effiziente Datenspeicherung und -zugriff.",
      "WDev6": "Entwickeln und Verwalten robuster Backend-Systeme für eine effiziente Datenverarbeitung.",
      "Dat1": "Entwickeln von interaktiven Power BI Dashboards und Berichten für fundierte Entscheidungen.",
      "Dat2": "Nutzung von Power BI Service und Desktop für cloud-basierte und lokale Berichterstattung.",
      "Dat3": "Einsatz von DAX und Power Query für komplexe Datenumwandlungen und Analysen.",
      "Dat4": "Entwerfen und Implementieren effizienter Datenmodelle für eine verbesserte Berichtgenauigkeit.",
      "Dat5": "Verwendung von C#-Skripten zur Automatisierung und Verbesserung von Datenanalyseprozessen.",
      "Get In Touch": "Kontaktiere Mich",
      "Contact Me": "Schick' mir Deine Nachricht",
      "Send me a message": "Nachricht senden",
      "Your Full Name": "Dein vollständiger Name",
      "Your Email": "Deine E-Mail",
      "Your Message": "Deine Nachricht",
      "Send your Message": "Nachricht senden",
      "Home": "Startseite",
      "About": "Über mich",
      "Experience": "Erfahrung",
      "Services": "Services",
      "Projects": "Projekte",
      "Contact": "Kontakt",
      "All rights reserved": "Alle Rechte vorbehalten",
      "My recent Work": "Woran ich gearbeitet habe",
      "Projects": "Projekte" 
    }
  }
};

// {t("")}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;