import { BackButton } from "../components/backButton";
import { MantineTable } from "../components/MantineTable";

const Result = ({ score }: { score: number }) => {
    const elements = [
        {score: 7, name: "Cerium"},
        {score: 100, name: "Yttrium"},
    ];

    return (
        <>
            ダミーデータ
            <MantineTable elements={elements} />
            <div style={{backgroundColor: "yellow",}}>
                スコア：{score}
            </div>
            <BackButton />
        </>
    )
}
export default Result;