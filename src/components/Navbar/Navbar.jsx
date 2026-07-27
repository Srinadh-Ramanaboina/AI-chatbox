import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-left">

        <button className="menu-btn">
          ☰
        </button>

        <h2>Spidy AI Study Assistant</h2>

      </div>

      <div className="navbar-right">

        <button>🌙</button>

        <button>⚙️</button>

        <button>👤</button>

      </div>

    </nav>
  );
}

export default Navbar;