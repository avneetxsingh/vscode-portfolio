import { useState } from 'react';
import styles from '@/styles/WorkCard.module.css';

export type Work = {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  summary: string;
  details: string[];
  skills: string[];
};

type WorkCardProps = {
  work: Work;
};

const WorkCard = ({ work }: WorkCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.container} ${isExpanded ? styles.expanded : ''}`}
      onClick={toggleExpand}
    >
      <div className={styles.header}>
        <h3 className={styles.role}>
          {work.role} at {work.company}
        </h3>

        {/* ✅ duration + location wrapped inside meta */}
        <div className={styles.meta}>
          <div className={styles.duration}>{work.duration}</div>
          <div className={styles.location}>{work.location}</div>
        </div>
      </div>

      <p className={styles.summary}>{work.summary}</p>

      {isExpanded && (
        <div className={styles.detailsSection}>
          <ul className={styles.detailsList}>
            {work.details.map((detail, idx) => (
              <li key={idx} className={styles.detailItem}>
                <span className={styles.lineNumber}>{idx + 1}</span>
                <span className={styles.detailText}>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.skills}>
        {work.skills.map((skill, idx) => (
          <span key={idx} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>

      <span className={styles.expandIndicator}>
        {isExpanded ? '// Collapse' : '// Expand for details'}
      </span>
    </div>
  );
};

export default WorkCard;