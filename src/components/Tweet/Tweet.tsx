import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";
export const Tweet = () => {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/saviomesq.png" alt="Savio Mesquita" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Sávio Mesquita</strong>
          <span>@saviomesq</span>
        </div>
        <p>
          Calling all developers! <br />
          📣 Innovate with our real-time and historical data on the X API.{" "}
          <br />
          Get started with Pro
        </p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
};
