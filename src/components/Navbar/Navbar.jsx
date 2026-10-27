import NavLink from "./NavLink";

const Navbar = ({ cartProducts }) => {
  // navbar link items
  const navLinks = [
    { id: 1, label: "Products", href: "#products" },
    { id: 2, label: "Features", href: "#features" },
    { id: 3, label: "Pricing", href: "#pricing" },
    { id: 4, label: "Testimonials", href: "#testimonials" },
    { id: 5, label: "FAQ", href: "#faq" },
  ];
  const link = navLinks.map((link) => (
    <NavLink key={link.id} link={link}></NavLink>
  ));
  return (
    <nav className="container mx-auto sticky top-0 z-50">
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
          <a className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{link}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <div className="indicator">
            <svg
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />{" "}
            </svg>
            {cartProducts.length !== 0 && (
              <span className="badge badge-sm indicator-item text-[#4f39f6] font-bold">
                {cartProducts.length}
              </span>
            )}
          </div>
          <a href="/">Login</a>
          <button className="hidden md:block btn border-none text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
