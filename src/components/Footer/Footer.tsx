/**
 * A footer component that displays the author's information and copyright notice.
 * 
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className="text-center text-textColor-500 p-6">
      <p>
        Made by 
        <a 
          className="font-semibold text-primary" 
          href="https://ilayda-ozel.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {' '}İlayda Özel
        </a>
      </p>
      <p>©{new Date().getFullYear()} GitHub Repo Search</p>
    </footer>
  );
};

export default Footer;
