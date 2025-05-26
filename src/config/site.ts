export interface SiteConfig {
  name: string;
  description: string;
  logo: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  services: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    image?: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  location: {
    title: string;
    address: string;
    mapUrl: string;
  };
  businessHours: {
    title: string;
    timezone: string;
    hours: Array<{
      day: string;
      hours: string;
      isClosed?: boolean;
    }>;
  };
  pricing: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      price?: string;
      description: string;
      features: string[];
      isPopular?: boolean;
      ctaText?: string;
      ctaLink?: string;
    }>;
  };
}

// Configuration par défaut
export const defaultConfig: SiteConfig = {
  name: "Votre Entreprise",
  description: "Description de votre entreprise",
  logo: "/images/logo.svg",
  contact: {
    email: "contact@example.com",
    phone: "+33 1 23 45 67 89",
    address: "123 rue Example, 75000 Paris"
  },
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  },
  services: {
    title: "Nos Services",
    description: "Découvrez nos services professionnels",
    items: [
      {
        title: "Service 1",
        description: "Description du service 1",
        icon: "service-1"
      },
      {
        title: "Service 2",
        description: "Description du service 2",
        icon: "service-2"
      },
      {
        title: "Service 3",
        description: "Description du service 3",
        icon: "service-3"
      }
    ]
  },
  testimonials: [
    {
      name: "Jean Dupont",
      role: "Client",
      content: "Excellent service, je recommande !",
      image: "/images/testimonials/client-1.jpg"
    }
  ],
  cta: {
    title: "Prêt à commencer ?",
    description: "Contactez-nous dès aujourd'hui",
    buttonText: "Nous contacter",
    buttonLink: "/contact"
  },
  location: {
    title: "Où nous trouver ?",
    address: "",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d681.8279356223373!2d1.4435910478987883!3d43.59642817429952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x12aebd354cd82053%3A0x9114815fa5d578fd!2s31%20Rue%20Pharaon%2C%2031000%20Toulouse!3m2!1d43.596462599999995!2d1.4441392!5e0!3m2!1sfr!2sfr!4v1748268790996!5m2!1sfr!2sfr"
  },
  businessHours: {
    title: "Horaires d'ouverture",
    timezone: "Europe/Paris",
    hours: [
      { day: "Lundi", hours: "8h30 - 17h00" },
      { day: "Mardi", hours: "8h30 - 17h00" },
      { day: "Mercredi", hours: "8h30 - 17h00" },
      { day: "Jeudi", hours: "8h30 - 17h00" },
      { day: "Vendredi", hours: "8h30 - 17h00" },
      { day: "Samedi", hours: "8h30 - 18h00" },
      { day: "Dimanche", hours: "10h00 - 16h00" }
    ]
  },
  pricing: {
    title: "Nos Tarifs",
    description: "Découvrez nos différentes formules adaptées à vos besoins",
    items: [
      {
        title: "Formule Basique",
        price: "À partir de 99€",
        description: "Idéal pour démarrer",
        features: [
          "Fonctionnalité 1",
          "Fonctionnalité 2",
          "Fonctionnalité 3"
        ],
        ctaText: "Choisir cette formule",
        ctaLink: "/contact"
      },
      {
        title: "Formule Pro",
        price: "À partir de 199€",
        description: "Notre formule la plus populaire",
        features: [
          "Tout de la formule Basique",
          "Fonctionnalité 4",
          "Fonctionnalité 5",
          "Fonctionnalité 6"
        ],
        isPopular: true,
        ctaText: "Choisir cette formule",
        ctaLink: "/contact"
      },
      {
        title: "Formule Premium",
        price: "Sur mesure",
        description: "Solution personnalisée",
        features: [
          "Tout de la formule Pro",
          "Fonctionnalité 7",
          "Fonctionnalité 8",
          "Fonctionnalité 9",
          "Support prioritaire"
        ],
        ctaText: "Nous contacter",
        ctaLink: "/contact"
      }
    ]
  }
}; 