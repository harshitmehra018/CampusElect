import GppGoodIcon from '@mui/icons-material/GppGood';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MobileFriendlyTwoToneIcon from '@mui/icons-material/MobileFriendlyTwoTone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Hero() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
            <div className="row">
                <div className="col d-flex justify-content-end p-4">
                    <div className="card shadow-lg pt-4" style={{ width: '18rem', height:'18rem', borderColor:'#ebf3f3ff' ,borderWidth:'3px',backgroundColor:"#ebf3f3ff",borderRadius:'2rem'  }}>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <GppGoodIcon className="mx-auto p-2 shadow-lg" style={{ fontSize: '5rem',backgroundColor:"#86d5cdff",  borderRadius:'1rem'}} />
                        <div className="card-body pt-4">
                            <h4 className="card-title" style={{color:'#000000ff'}}>Secure</h4>
                            <p className="card-text pt-2">End-to-end encryption and secure authentication.</p>
                        </div>
                    </div>

                </div>
                <div className="col p-4">
                    <div className="card shadow-lg pt-4" style={{ width: '18rem', height:'18rem' , borderColor:'#ebf3f3ff' ,borderWidth:'3px',backgroundColor:"#ebf3f3ff" ,borderRadius:'2rem'  }}>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <VisibilityIcon className="mx-auto p-2 shadow-lg" style={{ fontSize: '5rem',backgroundColor:"#86d5cdff",  borderRadius:'1rem' }} />
                        <div className="card-body pt-4">
                            <h4 className="card-title" style={{color:'#000000ff'}}>Transparent</h4>
                            <p className="card-text pt-2">Real-time results and audit trails.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-end p-4">
                    <div className="card shadow-lg pt-4" style={{ width: '18rem', height:'18rem', borderColor:'#ebf3f3ff' ,borderWidth:'3px',backgroundColor:"#ebf3f3ff",borderRadius:'2rem'  }}>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <MobileFriendlyTwoToneIcon className="mx-auto p-2 shadow-lg" style={{ fontSize: '5rem',backgroundColor:"#86d5cdff",  borderRadius:'1rem' }} />
                        <div className="card-body pt-4">
                            <h4 className="card-title" style={{color:'#000000ff'}}>Accessible</h4>
                            <p className="card-text pt-2">Vote form anywhere, anytime.</p>
                        </div>
                    </div>

                </div>
                <div className="col p-4">
                    <div className="card shadow-lg pt-4" style={{ width: '18rem', height:'18rem', borderColor:'#ebf3f3ff' ,borderWidth:'3px',backgroundColor:"#ebf3f3ff" ,borderRadius:'2rem' }}>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <CheckCircleIcon className="mx-auto p-2 shadow-lg" style={{ fontSize: '5rem',backgroundColor:"#86d5cdff",  borderRadius:'1rem' }} />
                        <div className="card-body pt-4">
                            <h4 className="card-title" style={{color:'#000000ff'}}>Reliable</h4>
                            <p className="card-text pt-2">99.9% uptime with cloud infrastructure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
