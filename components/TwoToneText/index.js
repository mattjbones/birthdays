import cn from 'classnames';

const wrapText = (text, colour, isBold) => (
  <span className={cn(colour, { 'font-bold': isBold })}>{text}</span>
);

const TwoToneText = ({
  first,
  second,
  reverse = false,
  colour = 'text-blue-600',
  isBold = false,
}) =>
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
