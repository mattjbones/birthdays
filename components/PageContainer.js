import Head from 'next/head';
import Anchor from '../components/Anchor';

export default function PageContainer({ children, backgroundUrl }) {
  const backgroundStyle = backgroundUrl
    ? { 'background-image': `url(${backgroundUrl})` }
    : undefined;
  const footerStyle = backgroundUrl
    ? 'rounded-tl-lg rounded-tr-lg bg-opacity-75'
    : '';
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="min-h-screen flex flex-col px-2 items-center justify-center sm:bg-fixed bg-cover"
        style={backgroundStyle}>
        <main className="flex flex-col py-20 max-w-3xl flex-1 justify-center align-center">
          {children}
        </main>
        <footer
          className={`container border border-b-0 border-r-0 border-l-0 border-gray-300 flex justify-center items-center py-2 bg-white ${footerStyle} italic`}>
          <Anchor href="https://twitter.com/mattjbones">
            Made with ❤️ by @mattjbones
          </Anchor>
        </footer>
      </div>
    </>
  );
}
