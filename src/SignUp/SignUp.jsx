import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div style={{
            maxWidth: '400px', 
            margin: '60px auto', 
            padding: '40px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            backgroundColor: '#fff'
          }}>
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '30px', 
              color: '#333', 
              fontFamily: 'Arial, sans-serif',
              fontSize: '25px',
              fontWeight: 'bold'
            }}>Sign Up</h2>
            
            <form>
              {/* Name Field */}
              <div style={{ marginBottom: '20px' }}>
                <label 
                  style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: '#555', 
                    fontSize: '14px', 
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold'
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="Enter your name"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                    color: '#333',
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
      
              {/* Email Field */}
              <div style={{ marginBottom: '20px' }}>
                <label 
                  style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: '#555', 
                    fontSize: '14px', 
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                    color: '#333',
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
      
              {/* Password Field */}
              <div style={{ marginBottom: '20px' }}>
                <label 
                  style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: '#555', 
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold'
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                    color: '#333',
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
      
              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  margin: '20px 0',
                  padding: '12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'Arial, sans-serif',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={e => e.target.style.backgroundColor = '#218838'}
                onMouseOut={e => e.target.style.backgroundColor = '#28a745'}
              >
                Sign Up
              </button>

              <Link to='/login'><p className='font-bold'> Already Registered ? please Log In First.</p></Link>
            </form>
          </div>
    );
};

export default SignUp;