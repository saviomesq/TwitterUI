import "./Timeline.css";
import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../components/Header/Header";
import { FormEvent, useState, KeyboardEvent } from "react";
import { Separator } from "../../components/Separator/Separator";
// import { Textarea } from "../../components/Textarea/Textarea";

export const Timeline = () => {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Hello, World!",
    "I am building a Twitter clone!",
    "This is my first tweet!",
    "I am learning React!",
  ]);
  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      createNewTweet(event as unknown as FormEvent);
    }
  }
  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/saviomesq.png" alt="Savio Mesquita" />
          {/* <Textarea placeholder="What is happening?!" /> */}
          <textarea
            id="tweet"
            placeholder="What is happening?"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
            style={{ overflow: "hidden", resize: "none" }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet, index) => (
        <Tweet key={index} content={tweet} />
      ))}
    </main>
  );
};
