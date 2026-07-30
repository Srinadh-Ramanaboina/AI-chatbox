import "./Navbar.css";

function Navbar() {

  const handleMenu = () => {
    console.log("Menu clicked");
    // Open sidebar here
  };

  const handleTheme = () => {
    console.log("Theme clicked");
    // Toggle dark/light mode here
  };

  const handleSettings = () => {
    console.log("Settings clicked");
    // Navigate to Settings page
  };

  const handleProfile = () => {
    console.log("Profile clicked");
    // Open profile page
  };

  return (
    <nav className="navbar">

      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={handleMenu}
        >
          ☰
        </button>

        <h2>Spidy AI Study Assistant</h2>

      </div>

      <div className="navbar-right">

        <button
          className="nav-btn"
          onClick={handleTheme}
          title="Theme"
        >
          🌙
        </button>

        <button
          className="nav-btn"
          onClick={handleSettings}
          title="Settings"
        >
          ⚙️
        </button>

        <button
          className="nav-btn"
          onClick={handleProfile}
          title="Profile"
        >
          👤
        </button>

      </div>
      

    </nav>
  );
}

export default Navbar;