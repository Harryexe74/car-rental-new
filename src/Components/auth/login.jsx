import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = ({ toggleAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (validateForm()) {
      if (email === "admin@admin.com" && password === "12345678") {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/"); // Navigate to dashboard
      } else {
        setError("Invalid email or password.");
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://static.toiimg.com/photo/80387978.cms")', // Replace with your image
      }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Sign In</h1>
        <p className="text-gray-300 text-center mb-6">(Admin Login)</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@address.com"
              className="w-full p-3 rounded bg-transparent border border-gray-500 text-white placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="8+ characters required"
              className="w-full p-3 rounded bg-transparent border border-gray-500 text-white placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded"
          >
            Sign In
          </button>

          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>

        <p className="text-gray-300 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/SignUp" className="text-blue-400 hover:text-blue-500 underline"
          onClick={ toggleAuth }>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (email === "admin@admin.com" && password === "12345678") {
//       // Save login state
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/"); // Redirect to dashboard
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default LoginPage;
