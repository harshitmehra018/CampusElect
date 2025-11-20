import { useState } from "react";
import { Link } from "react-router-dom";


export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: Add backend API call here
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundImage: `url('/images/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="card shadow-lg rounded-3 p-5" style={{ width: '100%', maxWidth: '500px', backdropFilter: 'blur(10px)',borderColor:'#ebf3f3a2',borderWidth:'2px', backgroundColor:"#ebf3f3a2" }}>
        <div className="card-header border-0 text-center rounded-3 shadow-lg" style={{ backgroundColor: '#86d5cdff' }} >
          <h3 className="card-title text-center mb-2 mt-2 fs-3 fw-semibold ">Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁️
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Login As</label>
              <select
                name="role"
                value={formData.role || "voter"}
                onChange={handleChange}
                className="form-control"
              >
                <option value="voter">Voter</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
          </form>
          <p className="text-center text-sm mt-3">Don't have an account? 
            <Link to='/register'>
            <a href="/Register" className="text-decoration-none">Register</a>
            </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
