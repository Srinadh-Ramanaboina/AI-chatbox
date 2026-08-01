import "./ChatArea.css";
import ChatMessage from "../ChatMessage/ChatMessage";

function ChatArea() {
  return (
    <div className="chat-area">

      {/* Welcome Section */}
      <div className="welcome-screen">

        <h1>👋 Welcome to Spidy AI</h1>

        <p>
          Ask questions, upload PDFs, generate notes,
          solve coding problems and learn faster with AI.
        </p>

      </div>

      {/* Chat Messages */}
      <div className="messages">

        <ChatMessage
          sender="user"
          message="What is Binary Search?"
        />

        <ChatMessage
          sender="ai"
          message="Binary Search is an efficient searching algorithm that works on sorted arrays."
        />

        <ChatMessage
          sender="user"
          message="Can you give me Java code?"
        />

        <ChatMessage
          sender="ai"
          message="Sure! Here's a simple Java implementation of Binary Search..."
        />

      </div>

    </div>
  );
}

export default ChatArea;