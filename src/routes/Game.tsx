import { useState, useEffect } from "react";
import { Question } from "./../components/Question";
import { Timer } from "./../components/Timer"
import { EndModal } from "../components/EndModal";
import { useNavigate } from "react-router-dom";

// 問題リスト
const questions = ["quite", "company", "increase", "This is a pen."];

export const Game = () => {
    const navigate = useNavigate();

    const [questionNum, setQuestionNum] = useState(
        Math.floor(Math.random() * questions.length)
    );
    const [inputKeys, setInputKeys] = useState<string[]>([]);
    const [correctLength, setCorrectLength] = useState<number>(0);
    const [showEndModal, setShowEndModal] = useState<boolean>(false);

    // キーボードからの入力
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

    /** 問題の再抽選処理 */
    const handleLottery = () => {
        setQuestionNum(Math.floor(Math.random() * questions.length))
    }
    // 正解なら次の問題へ
    useEffect(() => {
        if(questions[questionNum].length === correctLength) {
            handleLottery();
            setCorrectLength(0);
            setInputKeys(['']);
        }
    }, [correctLength])

    /** ゲーム終了時の処理 */
    function handleEnd() {
        setShowEndModal(false);
        navigate("/result");
    }

    // 残り時間を管理
    const [time, setTime] = useState<number>(5);
    useEffect(() => {
        const timerId = setInterval(() => setTime((prev) => prev - 1), 1000);

        // 制限時間0による終了処理
        if(time <= 0) {
            clearInterval(timerId);
            setShowEndModal(true); // 終了モーダル表示
            setTimeout(() => handleEnd(), 3000);
        }

        /*
        returnに関数を書くとクリーンアップ関数として動作
        StrictModeではバグを早期発見するために副作用を2回実行する機能があるため
        2秒ずつ減る。returnを書けば2回目のuseEffectを呼ぶ前に前のタイマーを停止してくれる。
        */
        return (() => clearInterval(timerId)) // アンマウント、再レンダリング
    }, [time])

    return (
        <>
            <Timer time={time} />
            <Question question={questions[questionNum]} correctLength={correctLength} />
            <EndModal showEndModal={showEndModal} />

            <div>
                inputKeys : {inputKeys}
            </div>
            <div>
                correctLength : {correctLength}, questionLength : {questions[questionNum].length}
            </div>
        </>
    );
}