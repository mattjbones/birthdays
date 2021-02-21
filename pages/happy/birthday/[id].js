import Head from 'next/head';
import Image from 'next/image';
import PageContainer from '../../../components/PageContainer';
import TwoToneText from '../../../components/TwoToneText';

import { getAllBirthdayIds, getBirthdayData } from '../../../lib/birthdays';

export async function getStaticPaths() {
  const paths = getAllBirthdayIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const birthdayData = params?.id && getBirthdayData(params.id);
  return birthdayData
    ? {
        props: {
          birthdayData,
        },
      }
    : {};
}

export default function Birthday({ birthdayData }) {
  const {
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
        <div className={`border shadow rounded-md p-8 m-2 ${backgroundColour}`}>
          <h1 className="font-extrabold text-center leading-tight text-3xl sm:text-6xl opacity-90">
            <TwoToneText first="Happy Birthday" second={name} />
          </h1>
          <h2 className="text-xl sm:text-3xl text-center py-2 space-y-2 opacity-90">
            <p>
              <TwoToneText
                first={firstWord}
                second={rest}
                reverse
                colour={colour}
                isBold
              />
            </p>
            <p>{restOfMessage}</p>
          </h2>
          {gifUrl ? (
            <div className="relative align-center flex flex-1 my-4 w-60 h-60 sm:w-96 sm:h-96 m-auto">
              <Image
                objectFit="contain"
                layout="fill"
                loading="lazy"
                src={gifUrl}
              />
            </div>
          ) : null}
        </div>
      </PageContainer>
    </>
  );
}
