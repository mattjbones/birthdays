import * as React from 'react';
import Anchor from './Anchor';

const Footer = (): React.ReactNode => {
  return (
    <footer className="container border border-b-0 border-r-0 border-l-0 border-gray-300">
      <Anchor href="https://twitter.com/mattjbones">
        Made with ❤️ by @mattjbones
      </Anchor>
    </footer>
  );
};

export default Footer;
