import { Link } from "react-router-dom";
import { useState } from "react";

import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleSearch = () => {
    setOpen(!open);
  };

  return (
    <div className="Header">
      <nav className="Header-nav">
        <div className="Header-nav__burger" onClick="showMenu()">
          <svg
            className="Header-nav__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewbox="0 0 24 24"
            aria-label="open the menu"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </div>

        <div className="Header-nav__brand">
          <Link className="Header-nav__homeLink" to="/">
            GOLDEN SHOE
          </Link>
        </div>

        <div className="Header-nav__forms">
          <svg
            className="Header-nav__icon Header-nav__toggleSearch"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewbox="0 0 24 24"
            onClick={toggleSearch}
            open={open}
            aria-label={open ? "hide search field" : "show search field"}
          >
            <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
          </svg>

          <Link className="Header-nav__loginLink" to="login">
            <svg
              className="Header-nav__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewbox="0 0 24 24"
              aria-label="login"
            >
              <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
            </svg>
          </Link>
          <Link className="Header-nav__cartLink" to="cart">
            <svg
              className="Header-nav__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewbox="0 0 24 24"
              aria-label="cart"
            >
              <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
            </svg>
          </Link>
        </div>
      </nav>
      <div
        className="Header-search"
        aria-label="search"
        style={open ? { display: "block" } : { display: "none" }}
      >
        <input
          className="Header-search__field"
          type="text"
          placeholder="What are you looking for?"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewbox="0 0 24 24"
          class="Header-search__icon"
        >
          <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
