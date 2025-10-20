import WorkCard, { Work } from '@/components/WorkCard';
import styles from '@/styles/WorkPage.module.css';

const workData: Work[] = [
  {
    id: '1',
    role: 'IT Support Specialist (Level 2)',
    company: 'The University of Toledo College of Engineering',
    duration: 'October 2023 – Present',
    location: 'Toledo, OH',
    summary:
      'Optimized Windows/Linux environments with automation and proactive monitoring, supporting 500+ users.',
    details: [
      'Delivered IT support to 500+ users by installing, configuring, and maintaining desktops, laptops, and peripherals across the engineering department.',
      'Optimized Windows/Linux environments through security patching, automation, and performance monitoring, ensuring secure and reliable operations.',
      'Implemented proactive system monitoring and troubleshooting that reduced downtime by 30% and improved service reliability.',
      'Collaborated with cross-functional teams to deploy applications, manage Active Directory, ensuring compliance with cybersecurity, and licensing agreements.',
    ],
    skills: ['Windows', 'Linux', 'Automation', 'Active Directory', 'Cybersecurity'],
  },
  {
    id: '2',
    role: 'Software Engineer Intern',
    company: 'KPIT Technologies Limited',
    duration: 'June 2025 – August 2025',
    location: 'Novi, MI',
    summary:
      'Built Python-based middleware systems for DUT communication and real-time control.',
    details: [
      'Engineered Python-based communication interfaces for DUT systems, enabling real-time power mode control and system health monitoring.',
      'Designed and extended a scalable middleware library, adding argument parsing, error handling, and modular structures to support flexible system integration.',
      'Enhanced system reliability by implementing robust exception handling and validation mechanisms across middleware components.',
      'Streamlined development workflows through effective use of Git for version control, branching strategies, and collaborative task management.',
      'Contributed to cross-functional projects, ensuring seamless integration between hardware control systems, middleware, and testing frameworks.',
    ],
    skills: ['Python', 'Middleware', 'Error Handling', 'Git', 'Integration'],
  },
  {
    id: '3',
    role: 'Software Developer Intern',
    company: 'KPIT Technologies Limited',
    duration: 'June 2024 – August 2024',
    location: 'Novi, MI',
    summary:
      'Automated ECU reporting and improved middleware compliance through Python tools.',
    details: [
      'Developed automated Python tools (Pandas, PyQt5) to generate middleware configuration reports, cutting manual ECU state tracking efforts by 70%.',
      'Implemented and validated data integration workflows for ECU activation/deactivation logic, boosting diagnostic accuracy and compliance with OEM middleware standards.',
      'Optimized ECU monitoring processes by automating repetitive reporting tasks, reducing error rates and improving consistency across test environments.',
      'Enhanced system reliability through rigorous validation of middleware configuration data, ensuring robust communication between components.',
      'Delivered cross-functional support by aligning automation solutions with engineering and diagnostic teams, improving overall workflow efficiency.',
    ],
    skills: ['Python', 'Pandas', 'PyQt5', 'Automation', 'Validation'],
  },
  {
    id: '4',
    role: 'Web Developer Intern',
    company: 'Softage Information Technology Limited',
    duration: 'June 2023 – July 2023',
    location: 'Gurugram, India',
    summary:
      'Built responsive web apps with HTML, CSS, and JavaScript while ensuring cross-browser compatibility.',
    details: [
      'Developed and maintained web applications using HTML, CSS, JavaScript, and related technologies, ensuring robust functionality and scalability.',
      'Implemented responsive design principles and ensured cross-browser compatibility, improving user accessibility and experience across devices.',
      'Collaborated with cross-functional engineering teams, driving a 30% reduction in system downtime and boosting overall productivity.',
      'Participated in peer code reviews, delivering constructive feedback that enhanced code quality, maintainability, and team learning.',
      'Contributed to continuous improvement initiatives, streamlining workflows and supporting the deployment of reliable, user-friendly applications.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    id: '5',
    role: 'Student Manager',
    company: 'Chartwells Higher Education Services',
    duration: 'September 2022 – September 2023',
    location: 'Toledo, OH',
    summary:
      'Led operations and training at Chartwells, improving efficiency and customer satisfaction.',
    details: [
      'Delivered exceptional customer service with in-depth product/menu knowledge, maintaining a consistent 4/5 satisfaction rating.',
      'Accelerated onboarding efficiency by providing structured training, reducing new team member ramp-up time by 50%.',
      'Fostered a collaborative, customer-first team culture, improving service quality and team performance.',
      'Balanced leadership and frontline responsibilities, ensuring smooth daily operations while directly engaging with customers.',
      'Enhanced team productivity by streamlining workflows, improving service speed, and reducing customer wait times.',
    ],
    skills: ['Leadership', 'Customer Service', 'Training', 'Operations'],
  },
];

const WorkPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Career</h1>
      <p className={styles.pageSubtitle}>
        I’ve had the privilege of contributing across{' '}
        <span className={styles.highlight}>Software Engineering</span>,{' '}
        <span className={styles.highlight}>IT Support</span>, and{' '}
        <span className={styles.highlight}>Research</span>, building skills line by line.
      </p>
      <div className={styles.container}>
        {workData.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
};


export default WorkPage;