import * as React from 'react';
import BirthdayCard from '../../../layouts/BirthdayCard';
import type { BirthdayData } from '../../../lib/birthdays';
import Head from 'next/head';
import Link from 'next/link';
import PageContainer from '../../../components/PageContainer';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getStaticPaths as getBirthdayStaticPaths,
  getStaticProps as getBirthStaticProps,
} from './edit/[id]';

export const getStaticPaths: GetStaticPaths = getBirthdayStaticPaths;
export const getStaticProps: GetStaticProps = getBirthStaticProps;

type Props = {
  birthdayData: BirthdayData;
};

export default function Birthday({ birthdayData }: Props): React.ReactElement {
  const {
    withEdit,
    id,
    name,
    message,
    colour,
    gif_url: gifUrl,
    background_url: backgroundUrl,
  } = birthdayData;
  const [firstLine, ...restOfMessage] = message;
  const firstSpace = firstLine.indexOf(' ');
  const firstWord = firstLine.slice(0, firstSpace);
  const rest = firstLine.slice(firstSpace);
  const backgroundColour = backgroundUrl ? 'bg-white' : '';

  return (
    <>
      <Head>
        <title>Happy Birthday {name}</title>
      </Head>
      <PageContainer backgroundUrl={backgroundUrl}>
        {withEdit ? (
          <Link href={`/happy/birthday/edit/${id}`}>
            <a className="fixed top-0 right-0 p-6">Edit</a>
          </Link>
        ) : null}
        <BirthdayCard
          name={name}
          colour={colour}
          backgroundColour={backgroundColour}
          firstWord={firstWord}
          rest={rest}
          restOfMessage={restOfMessage}
          gifUrl={gifUrl}
        />
      </PageContainer>
    </>
  );
}
