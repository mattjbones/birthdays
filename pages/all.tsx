import * as React from 'react';
import Head from 'next/head';
import PageContainer from '../components/PageContainer';
import TwoToneText from '../components/TwoToneText';
import { getSortedBirthdaysData } from '../lib/birthdays';
import { GetStaticProps } from 'next';
import { BirthdayData } from '../lib/birthdays';

export const getStaticProps: GetStaticProps = async () => {
  const allBirthdaysData = getSortedBirthdaysData();
  return {
    props: {
      allBirthdaysData,
    },
  };
};
type Props = {
  allBirthdaysData: BirthdayData[];
};

export default function AllBirthdays({
  allBirthdaysData,
}: Props): React.ReactElement {
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
