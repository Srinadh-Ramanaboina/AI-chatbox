import SearchBox from "../components/Searchbox/Searchbox";

function Home() {
  return (
    <div className="home-page">

      <div className="hero">

        <h1>Welcome to Spidy AI Study Assistant</h1>

        <p>
          Learn faster with AI. Ask questions, upload PDFs,
          generate notes, solve problems, and prepare for exams.
        </p>

        <SearchBox />

      </div>

    </div>
  );
}

export default Home;