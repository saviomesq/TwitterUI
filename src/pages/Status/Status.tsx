import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Status.css";
const answers = [
  "Explorando novas tecnologias!",
  "Adoro programar!",
  "Hoje é um ótimo dia para codar!",
  "React facilita muito o desenvolvimento!",
];
export const Status = () => {
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet
        content="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis distinctio non, sed illo officia! Tenetur optio exercitationem dolorem nulla magni ipsam animi libero dolores nisi, pariatur debitis saepe mollitia?
"
      />
      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/saviomesq.png" alt="Savio Mesquita" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answers, index) => (
        <Tweet key={index} content={answers} />
      ))}
    </main>
  );
};
