import * as React from 'react';
import cn from 'classnames';

const wrapText = (text: string, colour: string, isBold: boolean) => (
  <span className={cn(colour, { 'font-bold': isBold })}>{text}</span>
);

type Props = {
  first: string;
  second: string;
  reverse?: boolean;
  colour?: string;
  isBold?: boolean;
};

const TwoToneText = ({
  first,
  second,
  reverse = false,
  colour = 'text-blue-600',
  isBold = false,
}: Props): React.ReactElement =>
  reverse ? (
    <span>
      {wrapText(first, colour, isBold)} {second}
    </span>
  ) : (
    <span>
      {first} {wrapText(second, colour, isBold)}
    </span>
  );

export default TwoToneText;
