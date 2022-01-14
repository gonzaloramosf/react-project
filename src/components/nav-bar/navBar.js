import './navBar.css';

export default function NavBar() {
  return (
    <header>
      <div>
        <span id='titulo'> E-commerce </span>
      </div>
      <nav>
        <ul>
          <li><a href='#'>Home</a> </li>
          <li><a href='#'>Products</a> </li>
          <li><a href='#'>Contact</a> </li>
          <li><a href='#'>About us</a> </li>
        </ul>
    </nav>
    </header>
  );
}
