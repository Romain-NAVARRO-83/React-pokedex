import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Pokedex</h1>
      <nav>
        <ul>
          <li>
            <NavLink type="button" to="/teams">
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink type="button" to="/">
              Pokemons
            </NavLink>
          </li>
          <li>
            <NavLink type="button" to="/types">
              Types
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
