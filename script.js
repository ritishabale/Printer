/* ============================================
   3D Multi-Language Website - JavaScript
   Printer & Common Service Center
   ============================================ */

// ===== LANGUAGE DATA =====
const translations = {
    mr: {
        // Site Title
        siteTitle: "आपले सरकार सेवा केंद्र - स्वरा झेरॉक्स",
        
        // Navigation
        centerName: "आपले सरकार सेवा केंद्र",
        navHome: "मुख्यपृष्ठ",
        navAbout: "आमच्याबद्दल",
        navServices: "सेवा",
        navGallery: "गॅलरी",
        navContact: "संपर्क",
        
        // Hero Section
        authorizedCenter: "सरकार अधिकृत केंद्र",
        heroTitle: "आपले सरकार सेवा केंद्र",
        heroSubtitle: "स्वरा झेरॉक्स",
        heroTagline: "कॉमन सर्विस सेंटर (CSC) - Digital India",
        exploreServices: "सेवा पहा",
        contactUs: "संपर्क करा",
        location: "कोळोसे, ता. महाड, जि. रायगड, महाराष्ट्र",
        scrollDown: "खाली स्क्रोल करा",
        
        // About Section
        aboutTitle: "आमच्याबद्दल",
        aboutSubtitle: "विश्वासू सेवा, आधुनिक तंत्रज्ञान",
        aboutCard1Title: "सरकार अधिकृत",
        aboutCard1Desc: "आम्ही Digital India, CSC, UIDAI आणि MahaIT यांनी अधिकृत केलेले केंद्र आहोत.",
        aboutCard2Title: "जलद सेवा",
        aboutCard2Desc: "आम्ही तुमचा मौल्यवान वेळ वाचवण्यासाठी द्रुत आणि कार्यक्षम सेवा देतो.",
        aboutCard3Title: "अनुभवी कर्मचारी",
        aboutCard3Desc: "प्रशिक्षित आणि अनुभवी कर्मचारी तुम्हाला सर्वोत्तम मार्गदर्शन देतात.",
        aboutCard4Title: "योग्य किमती",
        aboutCard4Desc: "सर्व सेवा स्वस्त आणि पारदर्शक किमतीत उपलब्ध.",
        
        // Services Section
        servicesTitle: "आमच्या सेवा",
        servicesSubtitle: "सर्व सरकारी आणि प्रिंटिंग सेवा एकाच ठिकाणी",
        govServicesTitle: "सरकारी सेवा",
        printServicesTitle: "प्रिंटिंग आणि झेरॉक्स सेवा",
        
        // Government Services
        service1: "आधार नवीन नोंदणी",
        service1Desc: "नवीन आधार कार्ड नोंदणी",
        service2: "आधार अपडेट",
        service2Desc: "नाव, पत्ता, फोटो अपडेट",
        service3: "मोबाईल लिंकिंग",
        service3Desc: "आधारशी मोबाईल नंबर जोडणी",
        service4: "आधार डाउनलोड",
        service4Desc: "e-आधार डाउनलोड आणि प्रिंट",
        service5: "PAN Card",
        service5Desc: "नवीन PAN कार्ड आणि सुधारणा",
        service6: "पासपोर्ट सेवा",
        service6Desc: "पासपोर्ट अर्ज आणि नूतनीकरण",
        service7: "मतदार ओळखपत्र",
        service7Desc: "नवीन आणि सुधारणा",
        service8: "ड्रायव्हिंग लायसन्स",
        service8Desc: "लर्निंग आणि परमानेंट",
        service9: "Food License",
        service9Desc: "खाद्य परवाना अर्ज",
        service10: "Shop Act License",
        service10Desc: "दुकान परवाना नोंदणी",
        service11: "उत्पन्न दाखला",
        service11Desc: "Income Certificate",
        service12: "जात दाखला",
        service12Desc: "Caste Certificate",
        service13: "अधिवास दाखला",
        service13Desc: "Domicile Certificate",
        service14: "जन्म दाखला",
        service14Desc: "Birth Certificate",
        service15: "मृत्यू दाखला",
        service15Desc: "Death Certificate",
        service16: "वयोवृद्ध दाखला",
        service16Desc: "Senior Citizen Certificate",
        service17: "EWS दाखला",
        service17Desc: "आर्थिकदृष्ट्या दुर्बल घटक",
        service18: "राष्ट्रीयत्व दाखला",
        service18Desc: "Nationality Certificate",
        service19: "शेतकरी विमा",
        service19Desc: "Farmer Insurance Scheme",
        service20: "आयुष्मान भारत",
        service20Desc: "PMJAY Health Card",
        service21: "पेन्शन योजना",
        service21Desc: "PMSYM Pension Scheme",
        service22: "शिष्यवृत्ती अर्ज",
        service22Desc: "Scholarship Forms",
        service23: "कॉलेज प्रवेश",
        service23Desc: "College Admission Forms",
        service24: "ऑनलाईन फॉर्म",
        service24Desc: "सर्व सरकारी फॉर्म भरणे",
        
        // Printing Services
        printService1: "झेरॉक्स / फोटोकॉपी",
        printService1Desc: "उच्च दर्जाचे फोटोकॉपी",
        printService2: "कलर प्रिंटिंग",
        printService2Desc: "रंगीत आणि कृष्ण-धवल प्रिंट",
        printService3: "ऑनलाईन फॉर्म प्रिंट",
        printService3Desc: "सर्व प्रकारचे फॉर्म प्रिंट",
        printService4: "ID कार्ड प्रिंटिंग",
        printService4Desc: "PVC कार्ड प्रिंटिंग",
        printService5: "लॅमिनेशन",
        printService5Desc: "दस्तऐवज लॅमिनेशन",
        printService6: "स्कॅनिंग",
        printService6Desc: "उच्च रिझोल्यूशन स्कॅनिंग",
        
        // Why Choose Us
        whyChooseTitle: "आम्हाला का निवडावे?",
        whyChooseSubtitle: "तुमच्या सेवेसाठी आम्ही सर्वोत्तम",
        feature1Title: "प्रामाणिकता",
        feature1Desc: "सर्व काम पारदर्शकतेने आणि प्रामाणिकपणे केले जाते.",
        feature2Title: "जलद सेवा",
        feature2Desc: "तुमचा वेळ महत्त्वाचा आहे, त्यामुळे आम्ही द्रुत काम करतो.",
        feature3Title: "अचूकता",
        feature3Desc: "प्रत्येक कामात शतप्रतिशत अचूकता राखली जाते.",
        feature4Title: "सहाय्य",
        feature4Desc: "प्रत्येक पायरीवर तुम्हाला मार्गदर्शन आणि सहाय्य.",
        
        // Gallery
        galleryTitle: "फोटो गॅलरी",
        gallerySubtitle: "आमच्या केंद्राचे चित्र",
        
        // Contact
        contactTitle: "संपर्क साधा",
        contactSubtitle: "आम्ही तुमच्या सेवेसाठी सज्ज आहोत",
        phoneLabel: "फोन / WhatsApp",
        emailLabel: "ईमेल",
        addressLabel: "पत्ता",
        fullAddress: "कोळोसे, ता. महाड, जि. रायगड, महाराष्ट्र, भारत",
        timingLabel: "कामाचे वेळ",
        timingText: "सोमवार - शनिवार: 9:00 AM - 7:00 PM<br>रविवार: बंद",
        
        // Footer
        footerDesc: "सरकार अधिकृत सेवा केंद्र - Digital India, CSC, UIDAI",
        quickLinksTitle: "द्रुत दुवे",
        rightsReserved: "सर्व हक्क राखीव"
    },
    
    hi: {
        // Site Title
        siteTitle: "आपले सरकार सेवा केंद्र - स्वरा जेरॉक्स",
        
        // Navigation
        centerName: "आपले सरकार सेवा केंद्र",
        navHome: "मुख्यपृष्ठ",
        navAbout: "हमारे बारे में",
        navServices: "सेवाएं",
        navGallery: "गैलरी",
        navContact: "संपर्क",
        
        // Hero Section
        authorizedCenter: "सरकार अधिकृत केंद्र",
        heroTitle: "आपले सरकार सेवा केंद्र",
        heroSubtitle: "स्वरा जेरॉक्स",
        heroTagline: "कॉमन सर्विस सेंटर (CSC) - Digital India",
        exploreServices: "सेवाएं देखें",
        contactUs: "संपर्क करें",
        location: "कोलोसे, ता. महाड, जि. रायगड, महाराष्ट्र",
        scrollDown: "नीचे स्क्रॉल करें",
        
        // About Section
        aboutTitle: "हमारे बारे में",
        aboutSubtitle: "विश्वसनीय सेवा, आधुनिक प्रौद्योगिकी",
        aboutCard1Title: "सरकार अधिकृत",
        aboutCard1Desc: "हम Digital India, CSC, UIDAI और MahaIT द्वारा अधिकृत केंद्र हैं।",
        aboutCard2Title: "त्वरित सेवा",
        aboutCard2Desc: "हम आपका बहुमूल्य समय बचाने के लिए तेज और कुशल सेवा प्रदान करते हैं।",
        aboutCard3Title: "अनुभवी कर्मचारी",
        aboutCard3Desc: "प्रशिक्षित और अनुभवी कर्मचारी आपको सर्वोत्तम मार्गदर्शन देते हैं।",
        aboutCard4Title: "उचित मूल्य",
        aboutCard4Desc: "सभी सेवाएं सस्ती और पारदर्शी कीमतों पर उपलब्ध।",
        
        // Services Section
        servicesTitle: "हमारी सेवाएं",
        servicesSubtitle: "सभी सरकारी और प्रिंटिंग सेवाएं एक ही स्थान पर",
        govServicesTitle: "सरकारी सेवाएं",
        printServicesTitle: "प्रिंटिंग और जेरॉक्स सेवाएं",
        
        // Government Services
        service1: "आधार नया पंजीकरण",
        service1Desc: "नया आधार कार्ड पंजीकरण",
        service2: "आधार अपडेट",
        service2Desc: "नाम, पता, फोटो अपडेट",
        service3: "मोबाइल लिंकिंग",
        service3Desc: "आधार से मोबाइल नंबर जोड़ना",
        service4: "आधार डाउनलोड",
        service4Desc: "e-आधार डाउनलोड और प्रिंट",
        service5: "PAN Card",
        service5Desc: "नया PAN कार्ड और सुधार",
        service6: "पासपोर्ट सेवा",
        service6Desc: "पासपोर्ट आवेदन और नवीनीकरण",
        service7: "वोटर आईडी",
        service7Desc: "नया और सुधार",
        service8: "ड्राइविंग लाइसेंस",
        service8Desc: "लर्निंग और परमानेंट",
        service9: "Food License",
        service9Desc: "खाद्य लाइसेंस आवेदन",
        service10: "Shop Act License",
        service10Desc: "दुकान लाइसेंस पंजीकरण",
        service11: "आय प्रमाण पत्र",
        service11Desc: "Income Certificate",
        service12: "जाति प्रमाण पत्र",
        service12Desc: "Caste Certificate",
        service13: "अधिवास प्रमाण पत्र",
        service13Desc: "Domicile Certificate",
        service14: "जन्म प्रमाण पत्र",
        service14Desc: "Birth Certificate",
        service15: "मृत्यु प्रमाण पत्र",
        service15Desc: "Death Certificate",
        service16: "वरिष्ठ नागरिक प्रमाण पत्र",
        service16Desc: "Senior Citizen Certificate",
        service17: "EWS प्रमाण पत्र",
        service17Desc: "आर्थिक रूप से कमजोर वर्ग",
        service18: "राष्ट्रीयता प्रमाण पत्र",
        service18Desc: "Nationality Certificate",
        service19: "किसान बीमा",
        service19Desc: "Farmer Insurance Scheme",
        service20: "आयुष्मान भारत",
        service20Desc: "PMJAY Health Card",
        service21: "पेंशन योजना",
        service21Desc: "PMSYM Pension Scheme",
        service22: "छात्रवृत्ति आवेदन",
        service22Desc: "Scholarship Forms",
        service23: "कॉलेज प्रवेश",
        service23Desc: "College Admission Forms",
        service24: "ऑनलाइन फॉर्म",
        service24Desc: "सभी सरकारी फॉर्म भरना",
        
        // Printing Services
        printService1: "जेरॉक्स / फोटोकॉपी",
        printService1Desc: "उच्च गुणवत्ता वाली फोटोकॉपी",
        printService2: "कलर प्रिंटिंग",
        printService2Desc: "रंगीन और श्याम-श्वेत प्रिंट",
        printService3: "ऑनलाइन फॉर्म प्रिंट",
        printService3Desc: "सभी प्रकार के फॉर्म प्रिंट",
        printService4: "ID कार्ड प्रिंटिंग",
        printService4Desc: "PVC कार्ड प्रिंटिंग",
        printService5: "लैमिनेशन",
        printService5Desc: "दस्तावेज़ लैमिनेशन",
        printService6: "स्कैनिंग",
        printService6Desc: "उच्च रेज़ोल्यूशन स्कैनिंग",
        
        // Why Choose Us
        whyChooseTitle: "हमें क्यों चुनें?",
        whyChooseSubtitle: "आपकी सेवा के लिए हम सर्वश्रेष्ठ",
        feature1Title: "प्रामाणिकता",
        feature1Desc: "सभी काम पारदर्शिता और ईमानदारी से किया जाता है।",
        feature2Title: "त्वरित सेवा",
        feature2Desc: "आपका समय महत्वपूर्ण है, इसलिए हम तेजी से काम करते हैं।",
        feature3Title: "सटीकता",
        feature3Desc: "हर काम में सौ प्रतिशत सटीकता बनाए रखी जाती है।",
        feature4Title: "सहायता",
        feature4Desc: "हर कदम पर आपको मार्गदर्शन और सहायता।",
        
        // Gallery
        galleryTitle: "फोटो गैलरी",
        gallerySubtitle: "हमारे केंद्र की तस्वीरें",
        
        // Contact
        contactTitle: "संपर्क करें",
        contactSubtitle: "हम आपकी सेवा के लिए तैयार हैं",
        phoneLabel: "फोन / WhatsApp",
        emailLabel: "ईमेल",
        addressLabel: "पता",
        fullAddress: "कोलोसे, ता. महाड, जि. रायगड, महाराष्ट्र, भारत",
        timingLabel: "कार्य समय",
        timingText: "सोमवार - शनिवार: 9:00 AM - 7:00 PM<br>रविवार: बंद",
        
        // Footer
        footerDesc: "सरकार अधिकृत सेवा केंद्र - Digital India, CSC, UIDAI",
        quickLinksTitle: "त्वरित लिंक",
        rightsReserved: "सर्वाधिकार सुरक्षित"
    },
    
    en: {
        // Site Title
        siteTitle: "Aaple Sarkar Seva Kendra - Swara Xerox",
        
        // Navigation
        centerName: "Aaple Sarkar Seva Kendra",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navGallery: "Gallery",
        navContact: "Contact",
        
        // Hero Section
        authorizedCenter: "Government Authorized Center",
        heroTitle: "Aaple Sarkar Seva Kendra",
        heroSubtitle: "Swara Xerox",
        heroTagline: "Common Service Center (CSC) - Digital India",
        exploreServices: "Explore Services",
        contactUs: "Contact Us",
        location: "Kolose, Taluka Mahad, Dist. Raigad, Maharashtra",
        scrollDown: "Scroll Down",
        
        // About Section
        aboutTitle: "About Us",
        aboutSubtitle: "Trusted Service, Modern Technology",
        aboutCard1Title: "Government Authorized",
        aboutCard1Desc: "We are an authorized center by Digital India, CSC, UIDAI and MahaIT.",
        aboutCard2Title: "Fast Service",
        aboutCard2Desc: "We provide quick and efficient service to save your valuable time.",
        aboutCard3Title: "Experienced Staff",
        aboutCard3Desc: "Trained and experienced staff provide you the best guidance.",
        aboutCard4Title: "Fair Pricing",
        aboutCard4Desc: "All services available at affordable and transparent prices.",
        
        // Services Section
        servicesTitle: "Our Services",
        servicesSubtitle: "All Government and Printing Services at One Place",
        govServicesTitle: "Government Services",
        printServicesTitle: "Printing and Xerox Services",
        
        // Government Services
        service1: "Aadhaar New Enrollment",
        service1Desc: "New Aadhaar Card Registration",
        service2: "Aadhaar Update",
        service2Desc: "Name, Address, Photo Update",
        service3: "Mobile Linking",
        service3Desc: "Link Mobile Number with Aadhaar",
        service4: "Aadhaar Download",
        service4Desc: "e-Aadhaar Download and Print",
        service5: "PAN Card",
        service5Desc: "New PAN Card and Correction",
        service6: "Passport Services",
        service6Desc: "Passport Application and Renewal",
        service7: "Voter ID",
        service7Desc: "New and Correction",
        service8: "Driving License",
        service8Desc: "Learning and Permanent",
        service9: "Food License",
        service9Desc: "Food License Application",
        service10: "Shop Act License",
        service10Desc: "Shop License Registration",
        service11: "Income Certificate",
        service11Desc: "Income Certificate",
        service12: "Caste Certificate",
        service12Desc: "Caste Certificate",
        service13: "Domicile Certificate",
        service13Desc: "Domicile Certificate",
        service14: "Birth Certificate",
        service14Desc: "Birth Certificate",
        service15: "Death Certificate",
        service15Desc: "Death Certificate",
        service16: "Senior Citizen Certificate",
        service16Desc: "Senior Citizen Certificate",
        service17: "EWS Certificate",
        service17Desc: "Economically Weaker Section",
        service18: "Nationality Certificate",
        service18Desc: "Nationality Certificate",
        service19: "Farmer Insurance",
        service19Desc: "Farmer Insurance Scheme",
        service20: "Ayushman Bharat",
        service20Desc: "PMJAY Health Card",
        service21: "Pension Scheme",
        service21Desc: "PMSYM Pension Scheme",
        service22: "Scholarship Forms",
        service22Desc: "Scholarship Forms",
        service23: "College Admission",
        service23Desc: "College Admission Forms",
        service24: "Online Forms",
        service24Desc: "Fill All Government Forms",
        
        // Printing Services
        printService1: "Xerox / Photocopy",
        printService1Desc: "High Quality Photocopy",
        printService2: "Color Printing",
        printService2Desc: "Color and Black-White Print",
        printService3: "Online Form Print",
        printService3Desc: "All Types of Form Print",
        printService4: "ID Card Printing",
        printService4Desc: "PVC Card Printing",
        printService5: "Lamination",
        printService5Desc: "Document Lamination",
        printService6: "Scanning",
        printService6Desc: "High Resolution Scanning",
        
        // Why Choose Us
        whyChooseTitle: "Why Choose Us?",
        whyChooseSubtitle: "We are the best for your service",
        feature1Title: "Authenticity",
        feature1Desc: "All work is done with transparency and honesty.",
        feature2Title: "Fast Service",
        feature2Desc: "Your time is important, so we work quickly.",
        feature3Title: "Accuracy",
        feature3Desc: "Hundred percent accuracy is maintained in every work.",
        feature4Title: "Support",
        feature4Desc: "Guidance and assistance at every step.",
        
        // Gallery
        galleryTitle: "Photo Gallery",
        gallerySubtitle: "Pictures of Our Center",
        
        // Contact
        contactTitle: "Contact Us",
        contactSubtitle: "We are ready for your service",
        phoneLabel: "Phone / WhatsApp",
        emailLabel: "Email",
        addressLabel: "Address",
        fullAddress: "Kolose, Taluka Mahad, District Raigad, Maharashtra, India",
        timingLabel: "Working Hours",
        timingText: "Monday - Saturday: 9:00 AM - 7:00 PM<br>Sunday: Closed",
        
        // Footer
        footerDesc: "Government Authorized Service Center - Digital India, CSC, UIDAI",
        quickLinksTitle: "Quick Links",
        rightsReserved: "All Rights Reserved"
    }
};

// ===== LANGUAGE SWITCHING =====
let currentLang = 'mr'; // Default language is Marathi

function changeLanguage(lang) {
    currentLang = lang;
    
    // Update page language attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            // Check if it's a title or meta tag
            if (element.tagName === 'TITLE') {
                element.textContent = translations[lang][key];
            } else if (element.innerHTML.includes('<br>')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// ===== NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    
    // Add shadow to navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .service-card, .feature-card, .gallery-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===== 3D TILT EFFECT ON CARDS =====
document.querySelectorAll('.service-card, .about-card, .feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ===== GALLERY MODAL =====
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        
        // Create modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: zoom-out;
            animation: fadeIn 0.3s;
        `;
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
            box-shadow: 0 0 50px rgba(255,255,255,0.2);
            animation: zoomIn 0.3s;
        `;
        
        modal.appendChild(img);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => {
            modal.style.animation = 'fadeOut 0.3s';
            setTimeout(() => modal.remove(), 300);
        });
    });
});

// ===== NUMBER COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
    }
    
    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes zoomIn {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes slideInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});

// ===== WHATSAPP BUTTON CLICK TRACKING =====
document.querySelector('.fab-btn.whatsapp')?.addEventListener('click', () => {
    console.log('WhatsApp button clicked');
});

// ===== FORM VALIDATION (if needed in future) =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== ACCESSIBILITY =====
document.addEventListener('keydown', (e) => {
    // Close mobile menu on ESC
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('🎉 आपले सरकार सेवा केंद्र - Website Loaded Successfully!');
console.log('📞 Contact: 9922393331');
console.log('📧 Email: girishgaikar831@gmail.com');

// ============================================
// SCROLL-BASED 3D PRINTER ANIMATION SYSTEM
// ============================================

class PrinterScrollAnimation {
    constructor() {
        this.printer = document.querySelector('.printer-container');
        this.printerImage = document.querySelector('.printer-image');
        this.shadow = document.querySelector('.printer-shadow');
        this.heroSection = document.querySelector('.hero');
        
        this.scrollProgress = 0;
        this.lastScrollY = 0;
        this.ticking = false;
        
        this.init();
    }
    
    init() {
        if (!this.printer) return;
        
        // Bind scroll event with RAF for smooth performance
        window.addEventListener('scroll', () => {
            this.lastScrollY = window.pageYOffset;
            
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.updatePrinterPosition();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
        
        // Initial position
        this.updatePrinterPosition();
        
        // Trigger paper ejection on scroll milestones
        this.setupPaperEjection();
    }
    
    updatePrinterPosition() {
        const scrollY = this.lastScrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Calculate scroll progress (0 to 1)
        this.scrollProgress = scrollY / (windowHeight * 2);
        this.scrollProgress = Math.min(Math.max(this.scrollProgress, 0), 1);
        
        // Smooth easing function
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(this.scrollProgress);
        
        // Calculate transformations
        const translateY = easedProgress * 120; // Move down 120% of viewport
        const scale = 1 - (easedProgress * 0.6); // Scale from 1 to 0.4
        const rotate = easedProgress * 5; // Rotate up to 5 degrees
        const opacity = 1 - (easedProgress * 0.7); // Fade from 1 to 0.3
        
        // Apply transformations - use translateY only since printer is absolute positioned
        this.printer.style.transform = `
            translateY(calc(-50% + ${translateY}vh)) 
            scale(${scale})
            rotateX(${rotate}deg)
        `;
        this.printer.style.opacity = opacity;
        
        // Update shadow (stretch as printer moves)
        if (this.shadow) {
            const shadowScale = 1 + (easedProgress * 0.5);
            const shadowOpacity = 0.5 - (easedProgress * 0.3);
            this.shadow.style.transform = `
                translateX(-50%) 
                scaleX(${shadowScale})
            `;
            this.shadow.style.opacity = shadowOpacity;
        }
        
        // Hide printer completely after certain scroll point
        if (scrollY > windowHeight * 2) {
            this.printer.style.opacity = 0;
            this.printer.style.pointerEvents = 'none';
        } else {
            this.printer.style.pointerEvents = 'auto';
        }
        
        // Add subtle motion blur effect
        if (this.scrollProgress > 0.1 && this.printerImage) {
            const blurAmount = Math.min(this.scrollProgress * 2, 1.5);
            this.printerImage.style.filter = `drop-shadow(0 20px 60px rgba(6, 30, 41, 0.4)) blur(${blurAmount}px)`;
        } else if (this.printerImage) {
            this.printerImage.style.filter = 'drop-shadow(0 20px 60px rgba(6, 30, 41, 0.4))';
        }
    }
    
    setupPaperEjection() {
        // Simplified for image-based printer
        // Can add custom effects here if needed
    }
}

// ============================================
// PARALLAX DEPTH EFFECT
// ============================================

class ParallaxEffect {
    constructor() {
        this.layers = document.querySelectorAll('.hero-badge, .hero-badges, .hero-cta');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            this.layers.forEach((layer, index) => {
                const speed = (index + 1) * 0.2;
                const yPos = -(scrollY * speed);
                layer.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// ============================================
// ENHANCED SCROLL EFFECTS
// ============================================

function addScrollEffects() {
    // Fade in content as printer moves
    const sections = document.querySelectorAll('.about, .services, .why-choose');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });
}

// ============================================
// PRINTER INTERACTION EFFECTS
// ============================================

function addPrinterInteractions() {
    // Image-based printer - interactions can be added if needed
    const printerImage = document.querySelector('.printer-image');
    
    if (printerImage) {
        // Optional: Add hover effect
        printerImage.addEventListener('mouseenter', () => {
            printerImage.style.transform = 'scale(1.05)';
        });
        
        printerImage.addEventListener('mouseleave', () => {
            printerImage.style.transform = 'scale(1)';
        });
    }
}

// ============================================
// SMOOTH SCROLL PERFORMANCE
// ============================================

function optimizeScrollPerformance() {
    // Add will-change to animated elements
    const animatedElements = document.querySelectorAll('.printer-container, .printer-shadow, .hero-content');
    
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        animatedElements.forEach(el => {
            el.style.willChange = 'transform, opacity';
        });
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            animatedElements.forEach(el => {
                el.style.willChange = 'auto';
            });
        }, 200);
    });
}

// ============================================
// INITIALIZE ALL ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Disable scroll animations on mobile/tablet devices
    const isMobile = window.innerWidth <= 1024;
    
    // Initialize printer scroll animation (only on desktop)
    if (!isMobile) {
        const printerAnimation = new PrinterScrollAnimation();
        // Initialize parallax effects
        const parallax = new ParallaxEffect();
    } else {
        // On mobile, ensure printer is visible with proper styling
        const printer = document.querySelector('.printer-container');
        if (printer) {
            printer.style.transform = 'none';
            printer.style.opacity = '1';
            printer.style.position = 'relative';
        }
    }
    
    // Add scroll effects
    addScrollEffects();
    
    // Add printer interactions
    addPrinterInteractions();
    
    // Optimize performance
    optimizeScrollPerformance();
    
    // Handle window resize to maintain printer visibility
    window.addEventListener('resize', () => {
        const printer = document.querySelector('.printer-container');
        const isMobileView = window.innerWidth <= 1024;
        
        if (isMobileView && printer) {
            printer.style.transform = 'none';
            printer.style.opacity = '1';
            printer.style.position = 'relative';
        }
    });
    
    // Add loading animation
    setTimeout(() => {
        const printer = document.querySelector('.printer-container');
        if (printer) {
            printer.style.opacity = '1';
            printer.style.transition = 'opacity 1s ease-out';
        }
    }, 300);
    
    console.log('✨ 3D Printer scroll animation initialized!');
});
