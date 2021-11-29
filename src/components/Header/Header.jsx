import { Link } from "react-router-dom";
import { useState } from "react";

import "./Header.css";

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideSearchOpen, setSlideSearchOpen] = useState(false);

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const toggleSlide = () => {
    setSlideOpen(!slideOpen);
  };

  const closeSlide = () => {
    setSlideOpen(false);
  };

  const openSlideSearch = () => {
    setSlideSearchOpen(true);
  };

  const closeSlideSearch = () => {
    setSlideSearchOpen(false);
  };

  return (
    <div className="Header">
      <nav className="Header-nav">
        <div
          className="Header-nav__burger"
          onClick={toggleSlide}
          open={slideOpen}
          aria-label={slideOpen ? "hide slide menu" : "show slide menu"}
        >
          {slideOpen ? (
            <svg
              className="Header-nav__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          ) : (
            <svg
              className="Header-nav__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          )}
        </div>

        <div className="Header-nav__brand">
          <Link className="Header-nav__homeLink" to="/">
            GOLDEN SHOE
          </Link>
        </div>

        <div className="Header-nav__forms">
          <div
            className="Header-nav__openSearch"
            onClick={openSearch}
            open={searchOpen}
            aria-label="show search field"
            style={searchOpen ? { display: "none" } : { display: "" }}
          >
            <svg
              className="Header-nav__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
          </div>

          <Link className="Header-nav__loginLink" to="login">
            <svg
              className="Header-nav__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
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
              viewBox="0 0 24 24"
              aria-label="cart"
            >
              <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
            </svg>
          </Link>
        </div>
      </nav>

      <div
        className="Header-search"
        style={searchOpen ? { display: "block" } : { display: "none" }}
      >
        <input
          className="Header-search__field"
          type="text"
          placeholder="What are you looking for?"
          aria-label="search field"
        />
        <svg
          className="Header-search__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
        </svg>
        <div className="Header-search__close" onClick={closeSearch}>
          close search field
        </div>
      </div>

      <nav
        className="Header-slideMenu"
        style={slideOpen ? { left: "0%" } : { left: "-100%" }}
      >
        <Link className="Header-slideMenu__item" to="men" onClick={closeSlide}>
          Men
        </Link>
        <Link
          className="Header-slideMenu__item"
          to="women"
          onClick={closeSlide}
        >
          Women
        </Link>
        <Link
          className="Header-slideMenu__item"
          to="stores"
          onClick={closeSlide}
        >
          Stores
        </Link>
        <Link
          className="Header-slideMenu__item"
          to="careers"
          onClick={closeSlide}
        >
          Careers
        </Link>
        <Link className="Header-slideMenu__item" to="FAQ" onClick={closeSlide}>
          FAQ
        </Link>

        {/* <hr className="Header-slideMenu__divider" /> */}

        <Link
          className="Header-slideMenu__item Header-slideMenu__login"
          to="login"
          onClick={closeSlide}
        >
          <svg
            className="Header-slideMenu__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
          </svg>
        </Link>

        <div
          className="Header-slideMenu__item"
          onClick={openSlideSearch}
          open={slideSearchOpen}
          aria-label="show search field"
          style={slideSearchOpen ? { display: "none" } : { display: "" }}
        >
          <svg
            className="Header-slideMenu__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
          </svg>
        </div>

        <div
          className="Header-search"
          style={slideSearchOpen ? { display: "block" } : { display: "none" }}
        >
          <input
            className="Header-search__field"
            type="text"
            placeholder="What are you looking for?"
            aria-label="search field"
          />

          <svg
            className="Header-search__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
          </svg>

          <div className="Header-search__close" onClick={closeSlideSearch}>
            close search field
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
