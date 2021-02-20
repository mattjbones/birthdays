const Anchor = ({ href, text, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text || children}
  </a>
);
export default Anchor;
