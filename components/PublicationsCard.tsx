import Image from 'next/image';
import { VscEye, VscHeart, VscComment } from 'react-icons/vsc';

import styles from '@/styles/PublicationsCard.module.css';

export interface Publication {
  id: string;
  title: string;
  description: string;
  url: string;
  cover_image: string;
  page_views_count?: number; // Reads
  public_reactions_count?: number; // Citations
  comments_count?: number; // Recommendations
  journal?: string; // NEW
  date?: string; // NEW
}

interface PublicationsCardProps {
  publication: Publication;
}

const PublicationsCard = ({ publication }: PublicationsCardProps) => {
  return (
    <a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {/* Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={publication.cover_image || '/images/fallback.jpg'}
          alt={publication.title}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className={styles.image}
        />

        {publication.page_views_count !== undefined && (
          <div className={styles.viewsBadge}>
            <VscEye /> {publication.page_views_count.toLocaleString()} Reads
          </div>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{publication.title}</h3>

        {publication.journal && publication.date && (
          <p className={styles.meta}>
            {publication.journal} • {publication.date}
          </p>
        )}

        <p className={styles.description}>{publication.description}</p>

        <div className={styles.footer}>
          {/* Stats */}
          <div className={styles.stats}>
            {publication.public_reactions_count !== undefined && (
              <div className={styles.stat}>
                <VscHeart className={styles.icon} />{' '}
                {publication.public_reactions_count} Citations
              </div>
            )}
            {publication.comments_count !== undefined && (
              <div className={styles.stat}>
                <VscComment className={styles.icon} />{' '}
                {publication.comments_count} Recs
              </div>
            )}
          </div>

          {/* Read More button */}
          <span className={styles.readMore}>Read More →</span>
        </div>
      </div>
    </a>
  );
};

export default PublicationsCard;