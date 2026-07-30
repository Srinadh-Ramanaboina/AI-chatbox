import React, { useState } from "react";
import {
  Paperclip,
  Mic,
  SendHorizontal
} from "lucide-react";
import "./SearchBox.css";

function SearchBox() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;

    console.log("Message:", message);
    setMessage("");
  };

  return (
    <div className="searchbox-container">
      <div className="searchbox">

        <button className="icon-btn">
          <Paperclip size={22} />
        </button>

        <input
          type="text"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />

        <button className="icon-btn">
          <Mic size={22} />
        </button>

        <button className="send-btn" onClick={handleSend}>
          <SendHorizontal size={22} />
        </button>

      </div>
    </div>
  );
}

export default SearchBox;