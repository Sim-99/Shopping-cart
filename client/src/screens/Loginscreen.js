import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated to useNavigate for React Router v6
import Swal from "sweetalert2"; // For pop-up notifications

export default function Loginscreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Updated to useNavigate for React Router v6

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Validate login credentials
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            // If login is successful, show a success message and redirect to pizza cart
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have successfully logged in! Redirecting to pizza cart...",
            }).then(() => {
                navigate("/PizzaCart"); 
            });
        } else {
            // Show an error message for invalid credentials
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Invalid credentials. Please try again.",
            });
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login Screen</h1>
            <form onSubmit={handleLogin}>
                <div className="login-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-btn">Login</button>
                <div className="login-link">
                    <a href="/register">Don't have an account? Register here</a>
                </div>
            </form>
        </div>
    );
}
