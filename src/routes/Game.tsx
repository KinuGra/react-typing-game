import { useState, useEffect } from "react";
import { Question } from "./../components/Question";

// 問題リスト
const questions = ["quite", "company", "increase"];

export const Game = () => {
    const [questionNum, setQuestionNum] = useState(
        Math.floor(Math.random() * questions.length)
    );

    const [inputKeys, setInputKeys] = useState<string[]>([]);
    const [correctLength, setCorrectLength] = useState<number>(0);

    /** 問題の再抽選処理 */
    const handleLottery = () => {
        setQuestionNum(Math.floor(Math.random() * questions.length))
    }

    console.log(inputKeys, correctLength)

    useEffect(() => {
        function handleKeyDown(event :KeyboardEvent) {
            if(event.key === questions[questionNum][correctLength]) {
                setInputKeys((prev) => [...prev, event.key]);
                setCorrectLength((prev) => prev + 1);
            }
        }

        // キーボードの入力を監視
        window.addEventListener('keydown', handleKeyDown);

        // コンポーネントが削除されるときにイベント解除
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [correctLength, questionNum]) // []のままではcorrectLengthが正常にカウントされない

    useEffect(() => {
        if(questions[questionNum].length === correctLength) {
            handleLottery();
            setCorrectLength(0);
            setInputKeys(['']);
        }
    }, [correctLength])

    return (
        <>
            <Question question={questions[questionNum]} correctLength={correctLength} />
            <div>
                inputKeys : {inputKeys}
            </div>
            <div>
                correctLength : {correctLength}, questionLength : {questions[questionNum].length}
            </div>
        </>
    );
}