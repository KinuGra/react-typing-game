import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={styles} onClick={() => navigate('/')}>
                    戻る
                </div>
            </div>
        </>
    )
}

const styles: React.CSSProperties = {
    backgroundColor: "blue",
    borderRadius: "20px",
    width: "200px",
    padding: "10px",
    textAlign: "center",
    color: "white",
}