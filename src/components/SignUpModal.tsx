import React from "react";
import {
  MicrosoftLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { useState } from "react";

interface SignUpModalProps {
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hovered, setHovered] = useState(false);

  const validatePassword = (value: string): string => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return "Password must contain at least one special character";
    } else if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    return "";
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleRepeatPasswordChange = (value: string) => {
    setRepeatPassword(value);
    setRepeatPasswordError(value === password ? "" : "Passwords do not match");
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

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();

    if (passwordError || repeatPasswordError || emailError) {
      return;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md "
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Repeat Password
            </label>
            <input
              type="password"
              className={`mt-1 p-2 w-full border rounded-md`}
              style={{ borderColor: passwordError ? "#EA1179" : "" }}
              placeholder="Repeat your password"
              value={repeatPassword}
              onChange={(e) => handleRepeatPasswordChange(e.target.value)}
              required
            />
            {repeatPasswordError && (
              <p style={{ color: "#EA1179" }} className=" text-sm">
                {repeatPasswordError}
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
              onClick={() => alert("Sign In clicked")}
            >
              Sign In
            </button>
          </div>
          <div className="mb-2 flex items-center justify-center">
            <span className="text-sm text-gray-500">or</span>
          </div>

          <div className="mb-4 items-center justify-center space-y-2 text-sm">
            <GoogleLoginButton
              text="Sign up with Google"
              onClick={() => alert("Hello")}
              style={{ fontSize: "14px" }}
            />
            <MicrosoftLoginButton
              text="Sign up with Microsoft"
              onClick={() => alert("Hello")}
              style={{ fontSize: "14px" }}
            />
          </div>

          <div className="mb-2 flex items-center justify-center">
            <hr className="w-full border-t border-gray-300 mb-2" />
          </div>

          <div className="mb-2 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => alert("Navigate to login page")}
              >
                Log In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
