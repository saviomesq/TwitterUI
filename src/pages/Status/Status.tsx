import "./Status.css";
import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../components/Header/Header";
import { FormEvent, useState, KeyboardEvent } from "react";
import { Separator } from "../../components/Separator/Separator";
import { PaperPlaneRight } from "phosphor-react";
// import { Textarea } from "../../components/Textarea/Textarea";

export const Status = () => {
  const [newAnswer, setNewAnswer] = useState("");
  const [answer, setAnswer] = useState([
    "Explorando novas tecnologias!",
    "Adoro programar!",
    "Hoje é um ótimo dia para codar!",
    "React facilita muito o desenvolvimento!",
  ]);
  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswer([newAnswer, ...answer]);
    setNewAnswer("");
  }
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      createNewAnswer(event as unknown as FormEvent);
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet
        content="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis distinctio non, sed illo officia! Tenetur optio exercitationem dolorem nulla magni ipsam animi libero dolores nisi, pariatur debitis saepe mollitia?
"
      />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/saviomesq.png" alt="Savio Mesquita" />
          {/* <Textarea placeholder="Post your reply" /> */}
          <textarea
            id="tweet"
            placeholder="Post your reply"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
            style={{ overflow: "hidden", resize: "none" }}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Reply</span>
        </button>
      </form>
      {answer.map((answers, index) => (
        <Tweet key={index} content={answers} />
      ))}
    </main>
  );
};
