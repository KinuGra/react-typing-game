import { useNavigate } from 'react-router-dom';
import './Top.css'
import { WhiteCard } from '../components/WhiteCard';

export const Top = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='container'>
                <WhiteCard />
            </div>
        </>
    )
}