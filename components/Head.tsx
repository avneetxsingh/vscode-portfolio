import Head from 'next/head';
import Image from 'next/image';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content=""
      />
      <meta
        name="keywords"
        content="vscode-portfolio"
      />
      <meta property="og:title" content="Avneet Singh's Portfolio" />
      <meta
        property="og:description"
        content="//Still debugging life… but the code runs fine."
      />
      <meta property="og:image" content= '/portfolio_homepage.png'/>
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Avneet Singh',
};
