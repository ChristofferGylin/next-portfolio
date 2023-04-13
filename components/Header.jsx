import MenuLink from "./MenuLink";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-slate-500 text-slate-100 h-36 p-4">
      <h1 className="text-4xl">CHRISTOFFER GYLIN</h1>
      <nav className="flex h-full items-end">
        <ul className="flex gap-4">
          <MenuLink link="/">START</MenuLink>
          <MenuLink link="/cv">CV</MenuLink>
          <MenuLink link="/portfolio">PORTFOLIO</MenuLink>
          <MenuLink link="/contact">CONTACT</MenuLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
