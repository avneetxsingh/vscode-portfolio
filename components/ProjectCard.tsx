import Image from 'next/image';
import { Project } from '@/types';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {/* Project Preview Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className={styles.image}
        />
      </div>

      {/* Project Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <span className={styles.link}>View Project →</span>
      </div>
    </a>
  );
};

export default ProjectCard;