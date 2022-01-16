import './navBar.css';
import '../CartWidget/CartWidget';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
  return (
    <header>
      <div>
        <span id='titulo'> E-commerce </span>
      </div>
      <nav>
        <div>
          <ul>
            <li><a href='#'>Home</a> </li>
            <li><a href='#'>Products</a> </li>
            <li><a href='#'>Contact</a> </li>
            <li><a href='#'>About us</a> </li>
          </ul>
          <CartWidget/>
        </div>
      </nav>
    </header>
  );
}
