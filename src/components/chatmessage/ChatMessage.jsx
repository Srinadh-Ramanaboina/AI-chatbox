import "./ChatMessage.css";

function ChatMessage({ sender, message }) {
  return (
    <div
      className={
        sender === "user"
          ? "message user-message"
          : "message ai-message"
      }
    >
      <div className="avatar">
        {sender === "user" ? "👤" : "🤖"}
      </div>

      <div className="message-content">
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;