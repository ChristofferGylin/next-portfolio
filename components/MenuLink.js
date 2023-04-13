import Link from "next/link";

const MenuLink = ({ link, children }) => {
  return (
    <Link className="hover:underline" href={link}>
      {children}
    </Link>
  );
};

export default MenuLink;
