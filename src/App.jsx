import { Mic } from "lucide-react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="hero">

        <h1>What do you want to learn today?</h1>

        <div className="search-box">

          <button className="left-btn">
          </button>

          <input
            type="text"
            placeholder="Ask anything about your studies..."
          />

          <div className="right-buttons">
            <button>🎤</button>
            <button>➤</button>
          </div>

        </div>

      </main>

    </div>
  );
}

export default App;