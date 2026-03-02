import React, { ReactNode, useEffect } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div className="fixed inset-0 z-9999 bg-black/50 flex justify-center items-center">
          <div className="focus:outline-none relative p-4">
            <div className="relative border border-secondary/10 rounded-lg bg-background text-left shadow-xl overflow-hidden p-2 max-w-full top-0">
              <div className="flex w-full justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-2 py-2 text-gray-600 hover:text-gray-200 transition duration-300"
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>

              <div className="p-2 max-h-[calc(100vh-160px)] overflow-auto">
                {children}
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
