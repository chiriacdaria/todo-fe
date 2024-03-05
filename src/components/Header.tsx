// src/Header.tsx
import React, { useState } from "react";
import SignUpModal from "./auth/SignUpModal";
import LoginModal from "./auth/LoginModal";

const Header: React.FC = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleSignUpModalClose = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <header className="bg-gray-100 border-b p-4 flex justify-between items-center">
      <div className="text-2xl font-semibold text-gray-900">NotesMe</div>

      <div className="flex space-x-4">
        <button
          className="bg-gray-100 text-gray-800 px-4 py-1 rounded border border-gray-300 hover:bg-gray-200"
          onClick={handleLoginClick}
        >
          LogIn
        </button>
        <button
          className="bg-gray-100 text-gray-800 px-4 py-1 rounded border border-gray-300 hover:bg-gray-200"
          onClick={handleSignUpClick}
        >
          SignUp
        </button>
      </div>

      {isSignUpModalOpen && (
        <SignUpModal
          onClose={handleSignUpModalClose}
          onLogInClick={handleLoginClick}
        />
      )}

      {isLoginModalOpen && (
        <LoginModal
          onClose={handleLoginModalClose}
          onSignUpClick={handleSignUpClick}
        />
      )}
    </header>
  );
};

export default Header;
