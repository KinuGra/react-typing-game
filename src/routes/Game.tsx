import { useState } from "react";
import { Question } from "./../components/Question";

const questions = ["quite", "company", "increase"];

export const Game = () => {
    const [questionNum, setQuestionNum] = useState(
        Math.floor(Math.random() * questions.length)
    );

    return (
        <>
            <Question question={questions[questionNum]} />
        </>
    );
}