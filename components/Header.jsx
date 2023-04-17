import MenuLink from "./MenuLink";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-slate-600/50 backdrop-blur-sm text-slate-100 h-36 p-4 sticky border-b border-slate-900/50">
      <h1 className="text-4xl">CHRISTOFFER GYLIN</h1>
      <nav className="flex h-full items-end">
        <ul className="flex gap-4">
          <MenuLink link="/">START</MenuLink>
          <MenuLink link="/about">OM MIG</MenuLink>
          <MenuLink link="/cv">CV</MenuLink>
          <MenuLink link="/portfolio">PORTFOLIO</MenuLink>
          <MenuLink link="/contact">KONTAKT</MenuLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
