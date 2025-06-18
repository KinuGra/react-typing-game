import { Route, Routes } from "react-router-dom"
import { Top } from "../pages/Top"
import { Game } from "../pages/Game"
import Result from "../pages/Result"
import { LearnJS } from "../pages/LearnJS"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/game" element={<Game />} />
            <Route path="/result" element={<Result />} />
            <Route path="/learnJS" element={<LearnJS />} />
        </Routes>
    )
}