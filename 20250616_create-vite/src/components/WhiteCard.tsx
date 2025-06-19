import { Button } from '@mantine/core';
import type { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom'

function GradiendOrangeButton({ onClick } :{ onClick :any}) {
    return (
        <Button
            variant="gradient"
            gradient={{ from: 'orange', to: 'yellow', deg: 90 }}
            onClick={onClick}
            styles={{
                root: {
                    fontSize: "20px",
                }
            }}
            size="sm"
            radius="lg"
        >
            Game Start
        </Button>
    );
}

export const WhiteCard = () => {
    const navigate = useNavigate();

    return (
        <>
            <div style={styles}>
                <h1 style={{color: "white", backgroundColor :"#f4a460", borderRadius: "20px", padding :"10px"}}>React Typing Game</h1>
                <GradiendOrangeButton onClick={() => navigate("/game")} />
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