import Logo from "./icons/Logo";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-5">
      <a href="#" className="ml-5">
        <Logo color={"royalblue"} />
      </a>
      <nav>
        <ul className="flex items-center gap-12">
          <li>
            <a href="#">Про шейхів</a>
          </li>
          <li>
            <a href="#">Портфоліо</a>
          </li>
          <li>
            <a href="#">Наші послуги</a>
          </li>
        </ul>
      </nav>
      <div className="mr-5">
        <a href="#">Language</a>
      </div>
    </div>
  );
}
