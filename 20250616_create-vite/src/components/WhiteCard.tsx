import type { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom'

export const WhiteCard = ({ children } :{children :any}) => {
    const navigate = useNavigate();

    return (
        <>
            <div style={styles}>
                {children}
            </div>
        </>
    )
}

const styles :CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffefd5",
    borderRadius: "30px",
    width: "60%",
    height: "50%",
}