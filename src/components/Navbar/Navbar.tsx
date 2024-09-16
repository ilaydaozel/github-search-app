/**
 * `Navbar` is a functional component that renders a navigation bar.
 * 
 * It includes a link to the home page with some styling and hover effects.
 * The navigation bar has a background color, padding, and a shadow for a subtle 3D effect.
 * 
 */
const Navbar = () => {
    return (
      <nav className="flex justify-between items-center bg-bgColor px-8 py-4 w-full shadow-sm">
        <a href="/" className="text-textColor-600 font-semibold text-md transition-transform duration-500 hover:translate-y-1 hover:text-primary">Home</a>
      </nav>
    )
};

export default Navbar;
