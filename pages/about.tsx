import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Avneet Singh</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey there! I’m a Computer Science student at the University of Toledo who’s 
              endlessly curious about how technology can make life easier, smarter, and more fun.
            </p>
            <p className={styles.paragraph}>
              My journey into tech started with a simple fascination for how things work, which quickly turned 
              into a passion for coding and problem-solving. For me, coding isn’t just about writing 
              functions — it’s about solving problems that matter to people.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I’ve gained hands-on experience across system administration, middleware development, 
              and automation engineering, working on projects that range from supporting 500+ users 
              with IT solutions to building Python-based tools that streamlined workflows 
              and reduced manual effort by 70%. 
            </p>
            <p className={styles.paragraph}>
              My work has focused on improving system reliability, enhancing productivity, 
              and creating scalable solutions that align with both technical and business needs.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}> 
                I’ve had the pleasure of contributing to impactful publications like{' '}
                <span className={styles.highlight}>Journal of Decision Systems</span>,{' '}
                <span className={styles.highlight}>Journal of Chinese Economic and Business Studies</span>,{' '}
                <span className={styles.highlight}>Advances in Healthcare Information Systems</span>, and more — 
                exploring themes in AI, healthcare, blockchain, and innovation.
              </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Outside of projects, I love collaborating, sharing ideas, and learning from others. 
              If you’re someone who’s passionate about tech, creativity, or just building cool things, 
              we already have something in common — let’s connect!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
