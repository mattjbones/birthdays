import * as React from 'react';
import BirthdayCard from '../../../../layouts/BirthdayCard';
import type { BirthdayData } from '../../../../lib/birthdays';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import PageContainer from '../../../../components/PageContainer';

import { getAllBirthdayIds, getBirthdayData } from '../../../../lib/birthdays';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBirthdayIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const birthdayData =
    params?.id && !Array.isArray(params.id) && getBirthdayData(params.id);
  return {
    props: {
      birthdayData,
    },
  };
};

type Props = {
  birthdayData: BirthdayData;
};

export default function EditBirthday({
  birthdayData,
}: Props): React.ReactElement {
  const [localCardData, setLocalCardData] = React.useState({
    id: birthdayData.id,
    name: birthdayData.name,
    message: birthdayData.message,
    colour: birthdayData.colour,
    gif_url: birthdayData?.gif_url,
    background_url: birthdayData?.background_url,
  });

  const {
    id,
    name,
    message,
    colour,
    gif_url: gifUrl,
    background_url: backgroundUrl,
  } = localCardData;

  const [firstLine, ...restOfMessage] = message;
  const firstSpace = firstLine.indexOf(' ');
  const firstWord = firstLine.slice(0, firstSpace);
  const rest = firstLine.slice(firstSpace);

  const [showModalFor, setShowModalFor] = React.useState(undefined);

  const backgroundColour = backgroundUrl ? 'bg-white' : '';
  const onItemClick = (target) => console.log({ target });
  const onEditBackgroundClick = () => console.log('edit background');

  const handleModalUpdateClick = (inputValue) => {
    setLocalCardData((data) => ({ ...data, gif_url: inputValue }));
    setShowModalFor(undefined);
  };
  const onAddImage = () => setShowModalFor({ type: 'image' });

  const hoverClass =
    'hover:bg-yellow-200	hover:bg-opacity-25 cursor-pointer rounded-md';

  return (
    <>
      <Head>
        <title>Happy Birthday {name}</title>
      </Head>
      {showModalFor ? (
        <Modal
          type={showModalFor.type}
          onUpdateClick={handleModalUpdateClick}
        />
      ) : null}
      <PageContainer backgroundUrl={backgroundUrl}>
        <Link href={`/happy/birthday/${id}`}>
          <a className="fixed top-0 right-0 p-6 hover:bg-green-200	hover:bg-opacity-25 cursor-pointer hover:border border-green-200 box-border rounded-md">
            Done
          </a>
        </Link>
        <button
          className={`fixed top-0 left-0 p-6 ${hoverClass}`}
          onClick={onEditBackgroundClick}>
          Edit Background Image
        </button>
        {!gifUrl ? (
          <button
            className="fixed top-0 left-0 p-6 ml-56 hover:bg-yellow-200	hover:bg-opacity-25 cursor-pointer rounded-md"
            onClick={onAddImage}>
            Add image / GIF
          </button>
        ) : null}
        <BirthdayCard
          name={name}
          colour={colour}
          backgroundColour={backgroundColour}
          firstWord={firstWord}
          rest={rest}
          restOfMessage={restOfMessage}
          gifUrl={gifUrl}
          hoverClass={hoverClass}
          onClick={onItemClick}
        />
      </PageContainer>
    </>
  );
}

type ModalProps = {
  type: 'image';
  onUpdateClick: (value: string) => void;
};

const Modal = ({ type, onUpdateClick }: ModalProps) => {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className="z-10 fixed h-screen w-screen bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center">
      <div className="p-20 w-6/12	h-4/6 bg-white rounded-md">
        <h1 className={`font-bold text-3xl`}>Edit {type}</h1>
        <input
          type="url"
          id="url"
          name="url"
          placeholder="Enter an image URL e.g. https://media.giphy.com/media/l0ExuxfBIOqXyeCn6/giphy.gif"
          className="w-full my-2"
          onChange={(changeEvent) => setInputValue(changeEvent.target.value)}
        />
        <button onClick={() => onUpdateClick(inputValue)}>Update</button>
      </div>
    </div>
  );
};
