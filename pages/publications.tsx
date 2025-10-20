import PublicationsCard, { Publication } from '@/components/PublicationsCard';
import styles from '@/styles/PublicationsPage.module.css';

const publications: Publication[] = [
  {
    id: '1',
    title: 'ChatGPT: Systematic Review, Applications, and Agenda for Multidisciplinary Research',
    description: 'A comprehensive review of ChatGPT applications across diverse fields.',
    url: 'https://doi.org/10.1080/14765284.2023.2210482',
    cover_image: '/Publications/GPTsystemReview.png',
    page_views_count: 2445, // Reads
    public_reactions_count: 97, // Citations
    comments_count: 5, // Recommendations
    journal: 'AI & Society',
    date: '2023',
  },
  {
    id: '2',
    title: 'ChatGPT in Marketing: Innovative Pathways, Decision Systems, and Forward Perspectives',
    description: 'Examines how AI tools like ChatGPT are shaping decision-making and marketing strategies.',
    url: 'https://doi.org/10.1080/12460125.2024.2438615',
    cover_image: '/Publications/GPTmarketing.png',
    page_views_count: 409,
    public_reactions_count: 2,
    comments_count: 1,
    journal: 'Journal of Marketing Innovation',
    date: '2024',
  },
  {
    id: '3',
    title: 'Blockchain and ESG',
    description: 'Analyzes blockchain applications for sustainability reporting and ESG practices.',
    url: 'https://doi.org/10.4324/9781003378341-2',
    cover_image: '/Publications/blockchain.png',
    page_views_count: 104,
    public_reactions_count: 0,
    comments_count: 1,
    journal: 'Routledge Handbook of ESG',
    date: '2024',
  },
  {
    id: '4',
    title: 'Empowering Patients in Healthcare Technology',
    description: 'Discusses patient-centric approaches in emerging healthcare technologies.',
    url: 'https://doi.org/10.4018/979-8-3693-7630-0.ch014',
    cover_image: '/Publications/Patients.png',
    page_views_count: 55,
    public_reactions_count: 1,
    comments_count: 0,
    journal: 'Handbook of Research on Digital Transformation',
    date: '2023',
  },
  {
    id: '5',
    title: 'Transforming Healthcare: The Role of Generative AI in Personalized Treatment Recommendations',
    description: 'Presents advancements in healthcare information systems and administration.',
    url: 'https://doi.org/10.4018/979-8-3693-7452-8.ch011',
    cover_image: '/Publications/Healthcare.png',
    page_views_count: 45,
    public_reactions_count: 3,
    comments_count: 0,
    journal: 'Advances in Healthcare Information Systems',
    date: '2023',
  },
  {
    id: '6',
    title: 'Transformative Pedagogy: ChatGPT as a Catalyst for Educational Innovation',
    description: 'Explores how AI reshapes education by enabling interactive and adaptive learning.',
    url: 'https://doi.org/10.1108/978-1-83549-852-120251008',
    cover_image: '/Publications/Pedagogy.png',
    page_views_count: 26,
    public_reactions_count: 0,
    comments_count: 0,
    journal: 'Emerald Publishing – Education Futures',
    date: '2025',
  },
];

const PublicationsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Publications</h1>
      <p className={styles.pageSubtitle}>
        I’ve had the pleasure of contributing to impactful journals and book chapters in{' '}
        <span className={styles.highlight}>AI</span>,{' '}
        <span className={styles.highlight}>Healthcare</span>,{' '}
        <span className={styles.highlight}>Marketing</span>, and{' '}
        <span className={styles.highlight}>Blockchain</span>.
      </p>
      <div className={styles.container}>
        {publications.map((publication) => (
          <PublicationsCard key={publication.id} publication={publication} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Publications' },
  };
}

export default PublicationsPage;

// import PublicationsCard, { Publication } from '@/components/PublicationsCard';
// import styles from '@/styles/PublicationsPage.module.css';

// type OrcidGroup = {
//   ['work-summary']: OrcidWorkSummary[];
// };

// type OrcidWorkSummary = {
//   ['put-code']: number;
//   title?: { title?: { value?: string } };
//   type?: string;
//   journalTitle?: { value?: string };
//   url?: { value?: string };
//   ['publication-date']?: { year?: { value?: string } };
//   externalIds?: {
//     ['external-id']?: {
//       ['external-id-type']?: string;
//       ['external-id-value']?: string;
//       ['external-id-url']?: { value?: string };
//     }[];
//   };
// };

// const ORCID_ID = '0009-0009-6743-4333';

// // Build external link preference
// function externalUrlFromWork(w: OrcidWorkSummary): string {
//   const ids = w.externalIds?.['external-id'] ?? [];
//   const doi = ids.find(
//     (id) => (id['external-id-type'] || '').toLowerCase() === 'doi' && id['external-id-value']
//   );
//   if (doi) return `https://doi.org/${doi['external-id-value']}`;
//   const anyWithUrl = ids.find((id) => id['external-id-url']?.value);
//   if (anyWithUrl) return anyWithUrl['external-id-url']!.value!;
//   if (w.url?.value) return w.url.value;
//   return `https://orcid.org/${ORCID_ID}/work/${w['put-code']}`;
// }

// // Build short description
// function buildDescription(w: OrcidWorkSummary): string {
//   const type = (w.type || '')
//     .replace(/_/g, ' ')
//     .toLowerCase()
//     .replace(/\b\w/g, (c) => c.toUpperCase());
//   const journal = w.journalTitle?.value;
//   const year = w['publication-date']?.year?.value;
//   return [type, journal, year].filter(Boolean).join(' • ') || 'Publication';
// }

// function mapOrcidWorkToPublication(
//   w: OrcidWorkSummary
// ): { publication: Publication; sortYear: number } | null {
//   const title = w.title?.title?.value?.trim();
//   if (!title) return null;

//   const url = externalUrlFromWork(w);
//   const description = buildDescription(w);
//   const yearString = w['publication-date']?.year?.value || '0';
//   const sortYear = parseInt(yearString, 10) || 0;

//   const publication: Publication = {
//     id: String(w['put-code']),
//     title,
//     description,
//     url,
//     cover_image: '/images/publication-placeholder.jpg', // fallback
//   };

//   return { publication, sortYear };
// }

// export async function getStaticProps() {
//   try {
//     const res = await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`, {
//       headers: { Accept: 'application/json' },
//     });

//     if (!res.ok) {
//       console.error('ORCID fetch failed:', res.status, await res.text());
//       return { props: { publications: [] as Publication[], title: 'Publications' }, revalidate: 3600 };
//     }

//     const data = await res.json();
//     const groups: OrcidGroup[] = data?.group ?? [];

//     const mapped = groups
//       .flatMap((g) => g['work-summary'] ?? [])
//       .map((w) => mapOrcidWorkToPublication(w))
//       .filter(Boolean) as { publication: Publication; sortYear: number }[];

//     const publications: Publication[] = mapped
//       .sort((a, b) => (b.sortYear - a.sortYear) || a.publication.title.localeCompare(b.publication.title))
//       .map((x) => x.publication);

//     return {
//       props: { publications, title: 'Publications' },
//       revalidate: 3600,
//     };
//   } catch (err) {
//     console.error('ORCID fetch error:', err);
//     return { props: { publications: [] as Publication[], title: 'Publications' }, revalidate: 3600 };
//   }
// }

// interface PublicationsPageProps {
//   publications: Publication[];
// }

// const PublicationsPage = ({ publications }: PublicationsPageProps) => {
//   return (
//     <div className={styles.layout}>
//       <h1 className={styles.pageTitle}>My Publications</h1>
//       <p className={styles.pageSubtitle}>
//         Pulled live from my{' '}
//         <a
//           href={`https://orcid.org/${ORCID_ID}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.highlight}
//         >
//           ORCID Profile
//         </a>
//         .
//       </p>
//       <div className={styles.container}>
//         {publications.length === 0 ? (
//           <p style={{ opacity: 0.7 }}>No publications found (check ORCID visibility settings).</p>
//         ) : (
//           publications.map((publication) => (
//             <PublicationsCard key={publication.id} publication={publication} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default PublicationsPage;