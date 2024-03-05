// GenericModal.tsx
import React, { ReactNode } from "react";

interface GenericModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  modalName: string;
  buttonText: string;
  onButtonClick?: () => void;
  children: ReactNode;
}

const GenericModal: React.FC<GenericModalProps> = ({
  isOpen,
  onDismiss,
  modalName,
  buttonText,
  onButtonClick,
  children
}) => {
  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      e.preventDefault();

      onDismiss();
    }
  };

  const handleDismissClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDismiss();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <div className="p-4 bg-white w-80 rounded shadow-md">
            <p className="text-lg font-semibold mb-4">{modalName}</p>
            {children}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                onClick={handleDismissClick}
              >
                Dismiss
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
                onClick={onButtonClick}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenericModal;
