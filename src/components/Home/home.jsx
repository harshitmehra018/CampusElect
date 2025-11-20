import backgroundImage from '../../assets/background.jpeg';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PollIcon from '@mui/icons-material/Poll';

export default function Home() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100" 
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '20px',
        }} 
        >
            <div className="row w-100 p-5 ">
                <div className="col-5 ">
                    <h1 className="display-4 fw-bold ">Welcome to the Election Portal</h1>
                    <p className="lead ">Your one-stop destination for all election-related information and services.</p>
                    <button type="button" className="btn btn-outline-info me-4"><HowToVoteIcon/>Vote Now</button>
                    <button type="button" className="btn btn-outline-info "><PollIcon/>View Result</button>
                </div>
            </div>
        </div>              
    );
}