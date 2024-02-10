import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-secondary py-2.5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-primary text-xl sm:text-2xl font-semibold"
          >
            TechnoFix
          </Link>

          <nav>
            <ul className="flex items-center gap-6">
              <li className="hidden sm:block">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/add-user">Add User</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
