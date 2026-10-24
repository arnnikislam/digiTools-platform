const NavLink = ({ link }) => {
  return (
    <li>
      <a href={link.href} className="text-[16px]">
        {link.label}
      </a>
    </li>
  );
};

export default NavLink;
