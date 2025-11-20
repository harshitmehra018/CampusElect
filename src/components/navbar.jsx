import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#86d5cdff' }}>
            <div className="container-fluid">
                <Link to='/'>
                    <img src="/images/birla-logo.png" alt="Birla Logo" width="45" height="40" className="d-inline-block align-text-top me-2" />
                </Link>
                <span className="navbar-brand fw-bold">Birla Institute Of Applied Science</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page" style={{ textDecoration: 'none' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link active" style={{ textDecoration: 'none' }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/election' className="nav-link active" style={{ textDecoration: 'none' }}>Elections</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <button type="button" className="btn me-2">Login</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' style={{ textDecoration: 'none' }}>
                                <button type="button" className="btn btn-primary">Register</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}