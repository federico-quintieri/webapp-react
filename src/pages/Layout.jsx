import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>Ciao sono l'header</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer>
        <h1>Ciao sono il footer</h1>
      </footer>
    </>
  );
}
