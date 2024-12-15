
import { Link } from "react-router-dom";

import './index.css';

const HeaderMenu = () => {
    return (
        <nav className="header-menu">
          <a className="njs-icon" href="https://namjulee.github.io/njs-lab-public/" target="_blank" rel="noreferrer noopener">ⓝ</a>
          <ul>
            <li>
              <Link to="/">index</Link>
            </li>
            <li>
              <Link to="/class">class</Link>
            </li>

          </ul>
        </nav>
    );
  };
  
  export default HeaderMenu;