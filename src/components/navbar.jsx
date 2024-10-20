import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Foods", path: "/" },
    { label: "Ingridients", path: "/" },
    { label: "Local Culinary", path: "/" },
  ];

  return (
    <nav className="w-full h-[50px] flex justify-between items-center bg-green-300 px-10 font-poppins">
      <Link to={"/"} className="font-bold">
        mealapp
      </Link>
      <div className="w-[400px] h-full md:flex justify-between items-center font-semibold hidden">
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.label} className="list-none">
              <Link to={navLink.path}>{navLink.label}</Link>
            </li>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
