import { CiGlobe } from "react-icons/ci";

import Logo from "./icons/Logo";

export default function Header() {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between items-center py-5 text-xl">
        <a href="#" className="ml-5">
          <Logo color={"#1C1C1C"} />
        </a>
        <nav>
          <ul className="flex items-center gap-12">
            {["Про шейхів", "Портфоліо", "Наші послуги"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-600 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-gray-600 transition"
          >
            <span>
              <CiGlobe size={16} />
            </span>
            <span>UA</span>
          </a>
        </div>
      </div>
    </header>
  );
}
