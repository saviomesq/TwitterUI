import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Timeline.css";
const tweets = [
  "Hello, World!",
  "I am building a Twitter clone!",
  "This is my first tweet!",
  "I am learning React!",
];

export const Timeline = () => {
  return (
    <main className="timeline">
      <Header title="Home" />
      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/saviomesq.png" alt="Savio Mesquita" />
          <textarea id="tweet" placeholder="What's happening?" />
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
