// Single source of truth for repeated site copy.
// All strings transcribed verbatim from the original pages/* sources extracted
// from the production build's source maps.

export const SITE = {
  name: "AMPSAC City Clean",
  legalName: "AMPSAC City Clean Limited",
  domain: "https://ampsaccleaning.com",
  email: "info@ampsaccityclean.com",
  phones: [
    { label: "+44 7760 313 757", href: "tel:+447760313757" },
    { label: "+44 7576 369 132", href: "tel:+447576369132" },
  ],
  address: {
    line1: "Flat 3, 60 Hastings Street,",
    line2: "LU1 5BE, UK",
  },
  hours: [
    "Monday to Friday: 8AM - 6PM",
    "Saturday: 9AM - 4PM",
    "Sunday: Closed",
  ],
  tally: {
    src: "https://tally.so/r/ja5K5R?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    height: 563,
    title: "AMPSAC - Contact Form",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.2006683891296!2d-0.4177889!3d51.8788397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487649dec2b95511%3A0xb66c9a53a2b9bcc5!2s60%20Hastings%20St%2C%20Luton%20LU1%205BE%2C%20UK!5e0!3m2!1sen!2sus!4v1698427999628!5m2!1sen!2sus",
};

export const NAV = [
  { title: "Home",     path: "/" },
  { title: "Services", path: "/services" },
  { title: "About",    path: "/about" },
  { title: "Contact",  path: "/contact" },
];

// Used by the Home page services section (4 alternating cards).
export const HOME_SERVICES = [
  {
    id: 1,
    title: "Office Cleaning",
    subtitle: "For Businesses & Workplaces",
    description:
      "We provide comprehensive office cleaning services tailored to your specific needs. Our professional team ensures that your workspace is clean, hygienic, and welcoming for both employees and visitors.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/services#office",
    color: "#0077B6",
    features: [
      "Daily scheduling",
      "Disinfection",
      "Carpet cleaning",
      "Restroom sanitization",
      "Kitchen area cleaning",
      "Window cleaning",
    ],
  },
  {
    id: 2,
    title: "Residential Cleaning",
    subtitle: "For Homes & Living Spaces",
    description:
      "Our residential cleaning services give you back your free time while ensuring your home is spotlessly clean. From regular maintenance to deep cleaning, our team will make your home shine from top to bottom.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/services#residential",
    color: "#00B4D8",
    features: [
      "Deep cleaning",
      "Move-in/out service",
      "Kitchen & bathroom",
      "Interior windows",
      "Upholstery cleaning",
      "Floor care",
    ],
  },
  {
    id: 3,
    title: "Commercial Cleaning",
    subtitle: "For Retail & Hospitality",
    description:
      "Maintain a professional image with our commercial cleaning services. We understand the unique needs of different commercial spaces and provide customized cleaning programs that address your specific requirements.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/services#commercial",
    color: "#0096C7",
    features: [
      "Retail stores",
      "Restaurants",
      "Hotels & hospitality",
      "Medical facilities",
      "Educational institutions",
      "Entertainment venues",
    ],
  },
  {
    id: 4,
    title: "Specialized Cleaning",
    subtitle: "For Specific Challenges",
    description:
      "For unique cleaning challenges, we offer specialized services that address specific needs with tailored approaches and appropriate equipment. No job is too difficult for our dedicated specialists.",
    image:
      "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/services#specialized",
    color: "#48CAE4",
    features: [
      "Pressure washing",
      "Graffiti removal",
      "Event cleanup",
      "Industrial cleaning",
      "Disaster recovery",
      "Construction cleanup",
    ],
  },
] as const;

// Used by the Services page (overview cards + detailed sections).
export const SERVICE_DETAILS = [
  {
    id: "office",
    title: "Office Cleaning",
    description:
      "We provide comprehensive office cleaning services tailored to your specific needs. Our professional team ensures that your workspace is clean, hygienic, and welcoming for both employees and visitors.",
    iconName: "office",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Daily, weekly, or monthly cleaning schedules",
      "Complete disinfection of high-touch surfaces",
      "Carpet and upholstery cleaning",
      "Window and glass cleaning",
      "Restroom sanitization and restocking",
      "Kitchen and break room cleaning",
      "Floor cleaning and maintenance",
      "Waste management and recycling services",
    ],
  },
  {
    id: "residential",
    title: "Residential Cleaning",
    description:
      "Our residential cleaning services give you back your free time while ensuring your home is spotlessly clean. From regular maintenance to deep cleaning, we've got your home covered.",
    iconName: "residential",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "One-time deep cleaning",
      "Regular maintenance cleaning",
      "Move-in and move-out cleaning",
      "Kitchen deep cleaning",
      "Bathroom deep cleaning",
      "Interior window cleaning",
      "Refrigerator and oven cleaning",
      "Upholstery and furniture cleaning",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Maintain a professional image with our commercial cleaning services for businesses of all sizes. We understand the unique needs of different commercial spaces and provide specialized cleaning solutions.",
    iconName: "commercial",
    image:
      "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Retail store cleaning",
      "Restaurant and kitchen cleaning",
      "Hotel and hospitality cleaning",
      "Medical facility cleaning",
      "Educational institution cleaning",
      "Gym and fitness center cleaning",
      "Post-construction cleaning",
      "Specialized floor care services",
    ],
  },
  {
    id: "specialized",
    title: "Specialized Cleaning",
    description:
      "For unique cleaning challenges, we offer specialized services that address specific needs with tailored approaches and appropriate equipment.",
    iconName: "specialized",
    image:
      "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Garage and car park cleaning",
      "Pressure washing services",
      "Graffiti removal",
      "End of tenancy cleaning",
      "Event cleanup services",
      "Industrial cleaning",
      "Carpet and upholstery deep cleaning",
      "High-access window cleaning",
    ],
  },
] as const;

export const CORE_VALUES = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, ensuring thorough cleaning that exceeds expectations. Our attention to detail and commitment to quality set us apart.",
    icon: "\u2726", // ✦
    color: "#0077B6",
  },
  {
    title: "Reliability",
    description:
      "Count on us to deliver consistent, dependable service, arriving on schedule and completing tasks as promised. We value your time and respect our commitments.",
    icon: "\u231A", // ⌚
    color: "#00B4D8",
  },
  {
    title: "Integrity",
    description:
      "We conduct business with honesty and transparency, building trust with our clients through ethical practices. Our word is our bond, and we stand behind our service.",
    icon: "\u2696\uFE0F", // ⚖️
    color: "#0096C7",
  },
  {
    title: "Environmental Responsibility",
    description:
      "Our eco-friendly cleaning methods and products minimize environmental impact while providing effective cleaning. We're committed to a greener, healthier future.",
    icon: "\u{1F331}", // 🌱
    color: "#48CAE4",
  },
] as const;

export const TEAM = [
  {
    name: "Paul Akoto Agyeman",
    position: "CEO",
    image: "/images/teams/CEO.jpeg",
    bio: "Paul founded AMPSAC City Clean with a vision to provide exceptional cleaning services that prioritize health and customer satisfaction.",
  },
  {
    name: "Anita Amissah",
    position: "Secretary",
    image: "/images/teams/Secretary.jpeg",
    bio: "Anita manages the administrative functions of the company, ensuring smooth operations and excellent communication with clients.",
  },
  {
    name: "Samuel King",
    position: "Operations Manager",
    image: "/images/teams/OperationsManager.jpeg",
    bio: "Samuel oversees all cleaning operations, ensuring our teams deliver consistent, high-quality service to every client.",
  },
] as const;

export const TIMELINE = [
  {
    year: "2025",
    title: "Company Founded",
    description:
      "AMPSAC City Clean was established in early 2025 with a vision to provide quality cleaning services with a focus on health and sanitation.",
  },
  {
    year: "2025",
    title: "Core Team Formation",
    description:
      "Our leadership team was established with a CEO, Secretary, and Operations Manager to ensure efficient and effective service delivery.",
  },
  {
    year: "2025",
    title: "Service Development",
    description:
      "We developed our core service offerings including residential, commercial, and specialized cleaning solutions.",
  },
  {
    year: "2025",
    title: "Eco-Friendly Initiative",
    description:
      "From the start, we implemented a comprehensive eco-friendly cleaning program, using sustainable products and methods across all services.",
  },
] as const;

export const HERO_IMAGES = {
  services: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about:    "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  contact:  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
} as const;

export const ABOUT_IMAGE = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
export const HOME_ABOUT_IMAGE = "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
