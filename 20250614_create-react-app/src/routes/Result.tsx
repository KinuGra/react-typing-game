import { MantineTable } from "../components/MantineTable";

const Result = () => {
    const elements = [
        {score: 7, name: "Cerium"},
        {score: 100, name: "Yttrium"},
    ];

    return (
        <>
            ダミーデータ
            <MantineTable elements={elements} />
        </>
    )
}
export default Result;