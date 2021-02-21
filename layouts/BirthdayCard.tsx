import * as React from 'react';
import Image from 'next/image';
import TwoToneText from '../components/TwoToneText';

type Props = {
  backgroundColour?: string;
  colour?: string;
  name: string;
  firstWord: string;
  rest: string;
  restOfMessage: string[];
  gifUrl?: string;
  hoverClass?: string;
  onClick?: (Event) => void;
};

export default function BirthdayCard({
  backgroundColour,
  colour,
  name,
  firstWord,
  rest,
  restOfMessage,
  gifUrl,
  hoverClass,
  onClick,
}: Props): React.ReactElement {
  return (
    <div className={`border shadow rounded-md p-8 m-2 ${backgroundColour}`}>
      <h1
        className={`font-extrabold text-center leading-tight text-3xl sm:text-6xl opacity-90 ${hoverClass}`}
        onClick={onClick}>
        <TwoToneText first="Happy Birthday" second={name} />
      </h1>
      <h2
        className={`text-xl sm:text-3xl text-center py-2 space-y-2 opacity-90 ${hoverClass}`}
        onClick={onClick}>
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
        <div
          className={`relative align-center flex flex-1 my-4 w-60 h-60 sm:w-96 sm:h-96 m-auto ${hoverClass}`}
          onClick={onClick}>
          <Image
            objectFit="contain"
            layout="fill"
            loading="lazy"
            src={gifUrl}
          />
        </div>
      ) : null}
    </div>
  );
}
