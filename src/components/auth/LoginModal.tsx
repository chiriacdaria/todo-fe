import React, { useEffect, useRef } from "react";
import {
  MicrosoftLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { useState } from "react";

interface LoginModalProps {
  onClose: () => void;
  onSignUpClick: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hovered, setHovered] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const validatePassword = (value: string): string => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    }
    return "";
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const validateEmail = (value: string) => {
    const isValid = value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return isValid ? "" : "Enter a valid email address";
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleSignUpClick = () => {
    onClose();
    onSignUpClick();
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (passwordError || emailError) {
      return;
    }
    // Perform login logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              style={{ borderColor: emailError ? "#EA1179" : "" }}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              required
            />
            {emailError && (
              <p style={{ color: "#EA1179" }} className="text-sm">
                {emailError}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              style={{ borderColor: passwordError ? "#EA1179" : "" }}
              className={`mt-1 p-2 w-full border rounded-md`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
            />
            {passwordError && (
              <p style={{ color: "#EA1179" }} className=" text-sm">
                {passwordError}
              </p>
            )}
          </div>
          <div className="mb-2 flex items-center justify-center">
            <button
              type="button"
              style={{
                backgroundColor: hovered ? "#416D19" : "#9bcf53",
                transition: "background-color 0.3s"
              }}
              className="text-white py-2 px-4 rounded-md w-full"
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
              onClick={() => alert("Log In clicked")}
            >
              Log In
            </button>
          </div>

          <div className="my-6 flex items-center justify-center">
            <hr className="w-full border-t border-gray-300 mb-2 mt-2" />
            <span className="text-sm text-gray-500 mx-2">or</span>
            <hr className="w-full border-t border-gray-300 mb-2 mt-2" />
          </div>

          <div className="mb-4 items-center justify-center space-y-2 text-sm">
            <GoogleLoginButton
              text="Log in with Google"
              onClick={() => alert("Hello")}
              style={{
                fontSize: "14px",
                color: "#272829"
              }}
              activeStyle={{ background: "#F5F7F8" }}
            />
            <MicrosoftLoginButton
              text="Log in with Microsoft"
              onClick={() => alert("Hello")}
              style={{
                fontSize: "14px",
                background: "#ffff",
                color: "#272829"
              }}
              activeStyle={{ background: "#F5F7F8" }}
            />
          </div>

          <div className="mb-2 flex items-center justify-center">
            <hr className="w-full border-t border-gray-300 mb-2" />
          </div>

          <div className="mb-2 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
