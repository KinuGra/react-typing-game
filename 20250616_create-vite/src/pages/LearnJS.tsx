import { useEffect } from "react";

export const LearnJS = () => {

    // async, await, try, catch, fetch
    function handleClick() {
        fetchData();
        add();
    }
    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const data = await response.json();
            console.log(data);
            console.log(data.id)
        } catch (error) {
            console.error("返事を受け取れませんでした：", error);
        }
    }

    // try, catch
    const add = async () => {
        try {
            const res = await fetch("https://api/")
            const data = await res.json()
        } catch (error) {
        console.error("エラー：", error);
        } finally {
            console.log("finally")
        }
    }

    return (
        <>
            <div style={styles}>
                <button onClick={handleClick}>ボタン</button>
            </div>
        </>
    )
}

const styles = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
}