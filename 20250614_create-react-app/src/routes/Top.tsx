import { Button } from '@mantine/core';
import { NavigateFunction, useNavigate } from 'react-router-dom';

function GradiendOrangeButton({ onClick } :{ onClick :any}) {
    return (
        <Button
            variant="gradient"
            gradient={{ from: 'orange', to: 'yellow', deg: 90 }}
            onClick={onClick}
        >
            Gradient button
        </Button>
    );
}

export const Top = () => {
    const navigate = useNavigate();
    return (
        <>
            <GradiendOrangeButton onClick={() => navigate("/game")} />
        </>
    )
}