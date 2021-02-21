import * as React from 'react';
import CSS from 'csstype';
import Head from 'next/head';
import Anchor from './Anchor';

type Props = {
  children: React.ReactNode;
  backgroundUrl?: string;
};
export default function PageContainer({
  children,
  backgroundUrl,
}: Props): React.ReactElement {
  const backgroundStyle: CSS.Properties = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
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
        <main className="flex flex-col py-20 max-w-3xl flex-1 justify-center">
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
