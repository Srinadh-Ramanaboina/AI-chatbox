import SearchBox from "../components/Searchbox/Searchbox";

function ChatPage() {
  return (
    <div
      style={{
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

      <div
        style={{
          padding: "40px"
        }}
      >
        <h2>New Chat</h2>

        <br />

        <p>
          Ask anything related to your studies...
        </p>
      </div>

      <SearchBox />

    </div>
  );
}

export default ChatPage;