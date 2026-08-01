import "./Navbar.css";

function Navbar({ sidebarOpen, setSidebarOpen }) {

  return (

    <nav className="navbar">

      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <h2>Spidy AI Study Assistant</h2>

      </div>

      <div className="navbar-right">

        <button className="nav-btn">
          🌙
        </button>

        <button className="nav-btn">
          ⚙️
        </button>

        <button className="nav-btn">
          👤
        </button>

      </div>

    </nav>

  );

}

export default Navbar;