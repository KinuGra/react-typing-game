import { useState, useEffect } from "react";
import { Question } from "./../components/Question";

// 問題リスト
const questions = ["quite", "company", "increase"];

export const Game = () => {
    const [questionNum, setQuestionNum] = useState(
        Math.floor(Math.random() * questions.length)
    );

    const [inputKeys, setInputKeys] = useState<string[]>([]);
    let correctLength = 0;

    useEffect(() => {
        function handleKeyDown(event :KeyboardEvent) {
            if(event.key === questions[questionNum][correctLength]) {
                setInputKeys((prev) => [...prev, event.key]);
                correctLength++;
            }
        }

        // キーボードの入力を監視
        window.addEventListener('keydown', handleKeyDown);

        // コンポーネントが削除されるときにイベント解除
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    return (
        <>
            <Question question={questions[questionNum]} />
            {inputKeys}
        </>
    );
}