import Link from "next/link";

const MenuLink = ({ link, children }) => {
  return (
    <Link className="border-b-2 border-transparent hover:border-blue-100 transition duration-200 text-blue-200 hover:text-blue-100" href={link}>
      {children}
    </Link>
  );
};

export default MenuLink;
