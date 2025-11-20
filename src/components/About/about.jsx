import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

export default function AboutPage() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-100" >
      <div className="row">
        <div className="col d-flex justify-content-end p-3">
          <div className="card shadow-lg mx-auto pt-4 mt-4 " style={{ width: '70rem', height: '45rem', borderColor: '#ebf3f3a2', borderWidth: '3px', borderRadius: '2rem',backgroundColor:"#ebf3f3a2" }}>
            <a href="mailto:your-email@gmail.com">
              <InfoOutlineIcon className="mx-auto p-2 shadow-lg" style={{ fontSize: '5rem', backgroundColor: "#86d5cdff", borderRadius: '1rem', color:"white" }} />
            </a>
            <div className="card-body pt-4">
              <h3 className="card-title" style={{ color: '#000000ff' }}>Application Info</h3>
              <h5 className='text-start'>About Us</h5>
              <p className="mt-2 text-start">Welcome to our platform — a place built on the pillars of security, transparency, accessibility, and reliability. We believe that technology should empower every individual, and our mission is to provide a safe, trustworthy, and seamless digital experience for everyone.</p>
              <h5 className='text-start'>Secure by Design</h5>
              <p className="mt-2 text-start"> Your safety is our highest priority. We use advanced encryption standards, multi-layer protection systems, and continuous monitoring to ensure your data remains secure at every step. Our platform is designed with strict privacy controls and industry-leading security practices to give you complete confidence while using our services.</p>
              <h5 className='text-start'>Transparent in Every Step</h5>
              <p className="mt-2 text-start">We believe that trust is earned through clarity. That’s why we operate with full transparency, openly sharing how our systems work and how your information is handled. No hidden processes, no confusing policies — just honest communication that helps you stay informed and in control.</p>
              <h5 className='text-start'>Accessible for Everyone</h5>
              <p className="mt-2 text-start">Accessibility is at the heart of our vision. Our platform is crafted to be simple to use, regardless of background, skill level, or device. Clean design, intuitive navigation, and inclusive features ensure that every user can interact with our services effortlessly. Whether you are a first-time user or a digital expert, the platform adapts to your needs.</p>
              <h5 className='text-start'>Reliable, Anytime and Every Time</h5>
              <p className="mt-2 text-start">You deserve a platform that works when you need it. With strong infrastructure, consistent performance, and 24/7 availability, we ensure uninterrupted access and smooth functionality. Our commitment to reliability means you can depend on us for accurate, efficient, and timely service — every single time.</p>
            </div>
          </div>
        </div>




        <div className='row pt-4'>
          <div className="col d-flex justify-content-end p-3">
            <div className="card shadow-lg mx-auto pt-4" style={{ width: '25rem', height: '18rem',backdropFilter: 'blur(10px)', borderColor: '#ebf3f3a2', borderWidth: '3px', borderRadius: '2rem',backgroundColor:"#ebf3f3a2" }}>
              <a href="mailto:your-email@gmail.com">
                <PersonIcon className="mx-auto p-2 shadow-lg" style={{ fontSize: '5rem', backgroundColor: "#86d5cdff", borderRadius: '1rem', color:"white" }} />
              </a>
              <div className="card-body pt-4">
                <h4 className="card-title" style={{ color: '#000000ff' }}>Harshit Mehra</h4>
                <EmailIcon className='me-2 shadow-lg' />
                <a href="mailto:harshitmehra018@gmail.com">harshitmehra018@gmail.com</a>
                <p className="mt-4 text-fade">Admin & Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}