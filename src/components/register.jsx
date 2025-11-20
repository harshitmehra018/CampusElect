import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: Add backend API call here
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 pt-5" style={{ backgroundImage: `url('/images/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="card shadow-lg rounded-3 p-5" style={{ width: '100%', maxWidth: '600px', backdropFilter: 'blur(10px)', backgroundColor:"#ebf3f3a2" , borderColor: '#ebf3f3a2', borderWidth: '2px' }}>
        <div className="card-header shadow-lg border-0 rounded-3" style={{ backgroundColor: '#86d5cdff' }}>
          <h3 className="card-title text-center mb-2 mt-2 fs-3 fw-semibold ">Signup</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Roll Number</label>
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
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
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  aria-label="Toggle confirm password visibility"
                  onClick={() => {
                    const el = document.getElementById("confirmPassword");
                    if (el) el.type = el.type === "password" ? "text" : "password";
                  }}
                >
                  <span aria-hidden="true">👁️</span>
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Confirm Password</label>
              <div className="input-group">
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword || ''}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  aria-label="Toggle confirm password visibility"
                  onClick={() => {
                    const el = document.getElementById("confirmPassword");
                    if (el) el.type = el.type === "password" ? "text" : "password";
                  }}
                >
                  <span aria-hidden="true">👁️</span>
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">Create Account</button>
          </form>
          <p className="text-center text-sm mt-3">Already have an account? 
            <Link to='/login'>
            <a href="/login" className="text-decoration-none">Login</a>
            </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
