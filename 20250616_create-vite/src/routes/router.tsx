import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { Top } from "../pages/Top"
import { Game } from "../pages/Game"
import Result from "../pages/Result"
import { LearnJS } from "../pages/LearnJS"

export const AppRouter = () => {
    const [score, setScore] = useState<number>(0);

    // Game終了時にスコアを設定
    function handleChangeScore(num: number) {
        setScore(num);
    }

    return (
        <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/game" element={<Game handleChangeScore={handleChangeScore} />} />
            <Route path="/result" element={<Result score={score} />} />
            <Route path="/learnJS" element={<LearnJS />} />
        </Routes>
    )
}