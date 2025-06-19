import { useNavigate } from 'react-router-dom';
import './Top.css'
import { WhiteCard } from '../components/WhiteCard';

export const Top = () => {
    return (
        <>
            <div className='container bg-_pattern Rectangles'>
                <WhiteCard />
            </div>
        </>
    )
}