export function Question({ question, correctLength } :{question :string, correctLength :number}) {
    return (
        <>
            {question.split("").map((char, index) => (
                <span style={{
                    color: index < correctLength ? "green" : "white",
                    fontWeight: index < correctLength ? "bold" : "normal",
                    fontSize: "50px",
                }} key={index}>
                    {char}
                </span>
            ))}
        </>
    )
}