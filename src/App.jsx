import { useState } from "react";
import { Mic, Paperclip, SendHorizontal } from "lucide-react";
import ChatArea from "./components/ChatArea/ChatArea";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="main-layout">

        <Sidebar open={sidebarOpen} />

        <main
          className={`hero ${sidebarOpen ? "" : "full-width"}`}
        >
          <h1>What do you want to learn today?</h1>

          <div className="search-box">

            <button className="left-btn">
              <Paperclip size={20} />
            </button>

            <input
              type="text"
              placeholder="Ask anything about your studies..."
            />

            <div className="right-buttons">

              <button>
                <Mic size={20} />
              </button>

              <button>
                <SendHorizontal size={20} />
              </button>

            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default App;