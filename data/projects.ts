// types/project.ts (or in your central types file)
export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
}

// data/projects.ts
export const projects: Project[] = [
  {
    title: 'RAG OpenPDF AI ChatBot',
    description:
      'AI-powered chatbot using RAG with a FastAPI backend and React frontend. Uses LangChain for conversational flows, OpenAI models for reasoning, and FAISS for fast vector search.',
    image: '/projects/RAG.png', // replace with ragPromo.png once you generate the promo
    link: 'https://github.com/avneetxsingh/RAG-PDF-CHATBOT',
    slug: 'rag-openpdf-chatbot',
  },
  {
    title: 'Network Report Generation Tool',
    description:
      'Python desktop application with a PyQt5 GUI for automated network reports. Uses Pandas for data analysis and Excel export with charts and templates.',
    image: '/projects/networkReport.png',
    link: 'https://github.com/avneetxsingh/AI-DATA-COLLECTION-PLATFORM-PRIVATE',
    slug: 'network-report-tool',
  },
  {
    title: 'Animated Personal Portfolio Website',
    description:
      'Interactive portfolio built with React, Tailwind CSS, and styled-components. Features animations, responsive design, and a project showcase.',
    image: '/projects/personalPortfolio.png',
    link: 'https://github.com/avneetxsingh/Personal-Portfolio',
    slug: 'personal-portfolio',
  },
  {
    title: 'AI Training Data Collection Platform',
    description:
      'Web platform for AI training data collection using Django. Supports uploads, annotation, user roles, and DBMS for managing large datasets.',
    image: '/projects/AI.png',
    link: 'https://github.com/avneetxsingh/AI-Data-Collection-Platform',
    slug: 'ai-data-collection-platform',
  },
  {
    title: 'WhatsApp Automation Bot',
    description:
      'Automation tool built with Python and PyAutoGUI for WhatsApp. Features scheduling, keyword responses, and contact management.',
    image: '/projects/whatsappAutomation.png',
    link: 'https://github.com/avneetxsingh/WhatsApp-Automation-Bot',
    slug: 'whatsapp-automation-bot',
  },
  {
    title: 'Hospital Management System',
    description:
      'Hospital management system built with Python and MySQL. Includes patient registration, appointments, billing, and inventory modules.',
    image: '/projects/HospitalMng.png',
    link: 'https://github.com/avneetxsingh/AI-DATA-COLLECTION-PLATFORM-PRIVATE',
    slug: 'hospital-management-system',
  },
];