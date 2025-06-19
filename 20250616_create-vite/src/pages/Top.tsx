import { useNavigate } from 'react-router-dom';
import './Top.css'
import { WhiteCard } from '../components/WhiteCard';
import { Button } from '@mantine/core';

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

export const Top = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='container bg-_pattern Rectangles'>
                <WhiteCard>
                    <h1 style={{color: "white", backgroundColor :"#f4a460", borderRadius: "20px", padding :"10px"}}>React Typing Game</h1>
                    <GradiendOrangeButton onClick={() => navigate("/game")} />
                </WhiteCard>
            </div>
        </>
    )
}