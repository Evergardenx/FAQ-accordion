import { useState } from "react";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";

export default function Question({ question, answer }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <article onClick={() => setIsShowing(!isShowing)}>
      <div className="question">
        <h2>{question}</h2>
        <button>
          {isShowing ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </button>
      </div>
      {isShowing && <p>{answer}</p>}
    </article>
  );
}
