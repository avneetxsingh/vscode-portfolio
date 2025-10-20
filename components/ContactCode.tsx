import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'info.avneetsingh@gmail.com',
    href: 'mailto:info.avneetsingh@gmail.com',
  },
  {
    social: 'github',
    link: 'avneetxsingh',
    href: 'https://github.com/avneetxsingh',
  },
  {
    social: 'linkedin',
    link: 'Avneet Singh',
    href: 'https://www.linkedin.com/in/avneetxsingh/',
  },
  {
    social: 'orcid',
    link: '0009-0009-6743-4333',
    href: 'https://orcid.org/0009-0009-6743-4333',
  },
  {
    social: 'researchgate.net',
    link: 'Avneet_Singh',
    href: 'https://www.researchgate.net/profile/Avneet-Singh-13?ev=hdr_xprf',
  }
  // {
  //   social: 'twitter',
  //   link: 'iamnitinr',
  //   href: 'https://www.twitter.com/iamnitinr',
  // },
  // {
  //   social: 'telegram',
  //   link: 'iamnitinr',
  //   href: 'https://t.me/iamnitinr',
  // },
  // {
  //   social: 'peerlist',
  //   link: 'nitinranganath',
  //   href: 'https://peerlist.io/nitinranganath',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
