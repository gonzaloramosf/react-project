import './NavBar.css';
import '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
  return (
    <header>
      <div>
        <span id='titulo'> <Link to="/"> E-commerce </Link> </span>
      </div>
      <nav>
        <div>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/products'> Products </Link>
            </li>
            <li>
              <Link to='/contact'> Contact </Link>
            </li>
            <li>
              <Link to='/about'> About Us </Link>
            </li>
          </ul>
          <CartWidget/>
        </div>
      </nav>
    </header>
  );
}
