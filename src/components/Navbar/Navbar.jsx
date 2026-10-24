import { BsCart } from "react-icons/bs";

const Navbar = () => {
  // navbar link items
  const navLinks = [
    { id: 1, label: "Products", href: "#products" },
    { id: 2, label: "Features", href: "#features" },
    { id: 3, label: "Pricing", href: "#pricing" },
    { id: 4, label: "Testimonials", href: "#testimonials" },
    { id: 5, label: "FAQ", href: "#faq" },
  ];
  const link = navLinks.map((link) => (
    <li>
      <a href={link.href} className="text-[16px]">
        {link.label}
      </a>
    </li>
  ));
  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="font-bold text-xl md:text-2xl text-[#4f39f6]">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{link}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <a className="text-2xl">
            <BsCart />
          </a>
          <a href="/">Login</a>
          <button className="btn hidden md:block bg-[#4f39f6] rounded-[99px] text-white">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
