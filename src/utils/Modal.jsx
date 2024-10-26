// src/components/Modal.js
import { Button } from "@radix-ui/themes";
import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={modalClasses}>
      <div className="absolute inset-0 bg-gray-500 opacity-50 md:mb-0 "></div>
      <div
        ref={modalRef}
        className="z-20 md:mt-[8vh] mt-[14vh] md:ml-[1vw] bg-white p-4 overflow-y-scroll rounded-lg w-full max-h-[90vh] md:w-[80vw] md:max-h-[80vh] mb-[8vh] "
      >
        {children}
        <div className="flex justify-end">
          <Button
            color="red"
            className="mt-4 p-2 bg-red-500 text-white rounded"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
