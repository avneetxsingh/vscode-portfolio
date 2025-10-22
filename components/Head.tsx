import NextHead from 'next/head';

interface CustomHeadProps {
  title?: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  const fullTitle = title ? `${title} | Avneet Singh` : "Avneet Singh | Portfolio";

  return (
    <NextHead>
      {/* Page Title */}
      <title>{fullTitle}</title>

      {/* Meta Description */}
      <meta
        name="description"
        content="Avneet Singh"
      />

      {/* Keywords for SEO */}
      <meta
        name="keywords"
        content="Avneet Singh, portfolio, full stack developer, AI, React, Next.js, FastAPI, LangChain, OpenAI"
      />

      {/* Open Graph (Social Media Preview) */}
      <meta property="og:title" content="Avneet Singh's Portfolio" />
      <meta
        property="og:description"
        content="// Still debugging life… but the code runs fine."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://asingh-vscode-portfolio.vercel.app" />
      <meta property="og:image" content="/portfolio_homepage.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Avneet Singh's Portfolio" />
      <meta
        name="twitter:description"
        content="// Still debugging life… but the code runs fine."
      />
      <meta name="twitter:image" content="/portfolio_homepage.png" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default CustomHead;