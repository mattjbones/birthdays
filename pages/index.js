import Head from 'next/head';
import Link from 'next/link';
import PageContainer from '../components/PageContainer';
import TwoToneText from '../components/TwoToneText';

export default function Home() {
  return (
    <>
      <Head>
        <title>Birthdays</title>
      </Head>
      <PageContainer>
        <h1 className="text-center leading-tight text-6xl">
          <TwoToneText first="Happy" second="Birthday!" />
        </h1>
      </PageContainer>
    </>
  );
}
