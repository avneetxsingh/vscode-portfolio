import CertificationCard, { Certification } from '@/components/CertificationCard';
import styles from '@/styles/CertificationsPage.module.css';

const certifications: Certification[] = [
  {
    id: '0',
    title: 'Embedded Systems Programming on ARM Cortex-M3/M4 Processor',
    organization: 'Udemy',
    issueDate: 'May 2025',
    url: 'https://www.udemy.com/certificate/UC-0ba1fd38-7b0f-4dd2-97e8-2a8c34583f5e/',
    cover_image: '/certificates/udemy-embedded-systems.png',
  },
  {
    id: '1',
    title: 'Design of Digital Circuits with VHDL Programming',
    organization: 'L&T EduTech - Coursera',
    issueDate: 'Sep 2024',
    url: 'https://coursera.org/share/3f18f08fbab53ddd6bcf1f00fdcb8bf3',
    cover_image: '/certificates/lt-edutech-vhdl.png',
  },
  {
    id: '2',
    title: 'Introduction to Software Engineering',
    organization: 'IBM - Coursera',
    issueDate: 'Sep 2024',
    url: 'https://coursera.org/share/e97e9a05a5df1ff2abf3cbfc427965dd',
    cover_image: '/certificates/ibm-software-engineering.png',
  },
  {
    id: '3',
    title: 'Foundations of Cybersecurity',
    organization: 'Google - Coursera',
    issueDate: 'Jul 2023',
    url: 'https://coursera.org/share/98079da7704575351c2bba611158fef7',
    cover_image: '/certificates/google-cybersecurity.png',
  },
  {
    id: '4',
    title: 'Crash Course on Python',
    organization: 'Google - Coursera',
    issueDate: 'Jul 2023',
    url: 'https://coursera.org/share/ea8b8159ff8f67c3ba8f8df96a2e73d3',
    cover_image: '/certificates/google-python.png',
  },
  {
    id: '5',
    title: 'Introduction to Databases for Back-End Development',
    organization: 'Meta - Coursera',
    issueDate: 'Jul 2023',
    url: 'https://coursera.org/share/60e0c0118a7156e361906e12c925c8cf',
    cover_image: '/certificates/meta-databases.png',
  },
  {
    id: '6',
    title: 'Technical Support Fundamentals',
    organization: 'Google - Coursera',
    issueDate: 'Jun 2023',
    url: 'https://coursera.org/share/d369444e7db30a6a90a20707b8b8e30a',
    cover_image: '/certificates/google-technical-support.png',
  },
];

const CertificationsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Certifications</h1>
      <p className={styles.pageSubtitle}>
        A collection of certifications earned through{' '}
        <span className={styles.highlight}>Coursera</span>,{' '}
        <span className={styles.highlight}>Google</span>,{' '}
        <span className={styles.highlight}>AWS</span>, and more — showcasing continuous learning and growth.
      </p>

      <div className={styles.container}>
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;