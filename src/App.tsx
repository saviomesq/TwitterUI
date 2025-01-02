import "./global.css";
import { Tweet } from "./components/Tweet/Tweet";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Separator } from "./components/Separator/Separator";
function App() {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <main className="timeline">
            <Header title="Home" />
            <form className="new-tweet-form">
              <label htmlFor="tweet">
                <img
                  src="https://github.com/saviomesq.png"
                  alt="Savio Mesquita"
                />
                <textarea id="tweet" placeholder="What's happening?" />
              </label>
              <button type="submit">Tweet</button>
            </form>
            <Separator />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
