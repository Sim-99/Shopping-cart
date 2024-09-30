// Registerscreen.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Registerscreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const register = () => {
        if (!email.includes('@')) {
            Swal.fire({
                icon: "error",
                title: "Invalid email format",
                text: "Please include '@' in the email address.",
            });
        } else if (password.length < 8) {
            Swal.fire({
                icon: "error",
                title: "Password too short",
                text: "Password must be at least 8 characters long.",
            });
        } else if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Passwords do not match",
                text: "Please make sure both passwords match.",
            });
        } else {
            const user = {
                name,
                email,
                password // In practice, hash passwords before storing
            };
            localStorage.setItem("user", JSON.stringify(user));

            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "You have successfully registered! Redirecting to login...",
            }).then(() => {
                navigate("/login");
            });
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Register Form</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={register} className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    );
}
