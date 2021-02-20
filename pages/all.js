import Head from 'next/head';
import Link from 'next/link';
import PageContainer from '../components/PageContainer';
import TwoToneText from '../components/TwoToneText';
import { getSortedBirthdaysData } from '../lib/birthdays';

export async function getStaticProps() {
  const allBirthdaysData = getSortedBirthdaysData();
  return {
    props: {
      allBirthdaysData,
    },
  };
}

export default function AllBirthdays({ allBirthdaysData }) {
  return (
    <>
      <Head>
        <title>All Birthdays</title>
      </Head>
      <PageContainer>
        <h1 className="text-center leading-tight text-6xl">
          <TwoToneText first="All" second="Birthdays" />
        </h1>
        <section>
          <ul>
            {allBirthdaysData.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </section>
      </PageContainer>
    </>
  );
}
