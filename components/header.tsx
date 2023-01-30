import Head from 'next/head';

interface HeaderProps {
  title: string;
  content: string;
}

const Header = ({ title, content }: HeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/disco.png" />
    </Head>
  );
};

export default Header;
