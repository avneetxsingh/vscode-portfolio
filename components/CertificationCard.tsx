import Image from 'next/image';
import { VscMortarBoard } from 'react-icons/vsc';

import styles from '@/styles/CertificationsCard.module.css';

export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  url: string;
  cover_image: string;
}

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
  return (
    <a
      href={certification.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {/* Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={certification.cover_image || '/images/certificate-fallback.jpg'}
          alt={certification.title}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className={styles.image}
        />
        <div className={styles.badge}>
          <VscMortarBoard /> {certification.organization}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{certification.title}</h3>
        <p className={styles.issueDate}>Issued: {certification.issueDate}</p>
        <span className={styles.viewMore}>View Certificate →</span>
      </div>
    </a>
  );
};

export default CertificationCard;