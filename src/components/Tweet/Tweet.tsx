import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";
import { Link } from "react-router-dom";
interface TweetProps {
  content: string;
}
export const Tweet = (content: TweetProps) => {
  return (
    <Link to="/tweet" className="tweet">
      <img src="https://github.com/saviomesq.png" alt="Savio Mesquita" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Sávio Mesquita</strong>
          <span>@saviomesq</span>
        </div>
        <p>{content.content}</p>
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
    </Link>
  );
};
