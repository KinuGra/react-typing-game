import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import './Top.css'

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
            <div className='container'>
                <GradiendOrangeButton onClick={() => navigate("/game")} />
            </div>
        </>
    )
}