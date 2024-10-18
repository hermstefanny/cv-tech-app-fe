"use client"; // Client component

import { useState } from "react";

export default function Dropdown({ summaries }) {
  // State to manage the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  export default function Accordion({ summaries }) {
    // State to track which month is currently open
    const [openMonth, setOpenMonth] = useState(null);
  
    // Function to toggle the accordion section
    const toggleAccordion = (month) => {
      if (openMonth === month) {
        setOpenMonth(null); // Close if clicked again
      } else {
        setOpenMonth(month); // Open the clicked month's section
      }
    };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* Button with dropdown */}
      <div className="flex flex-col justify-center ">
        <button
          onClick={toggleMenu}
          className="row-span-3 w-full border rounded p-2 bg-sky-800 text-white mb-2">
          Enero
        </button>
        {/* Dropdown menu that appears when the button is clicked */}
        {isOpen && (
          <div className="relative w-full bg-gray-200 p-2 space-y-2 mt-1">
            {summaries.map((summary) => (
              <div key={summary.id} className="border p-2">
                <h3><strong>Acta:</strong> {summary.document_id} {summary.date}</h3>
            
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Other grid buttons */}
      <div className="flex flex-col justify-center">
          <button className="w-full border rounded p-2 bg-sky-600 text-white mb-2  ">
                Febrero
          </button>
      </div>
      <div className="flex flex-col justify-center">
          <button className="w-full border rounded p-2 bg-sky-600 text-white mb-2  ">
                Marzo
          </button>
      </div>
      <div className="flex flex-col justify-center">
          <button className="w-full border rounded p-2 bg-sky-600 text-white mb-2  ">
                Abril
          </button>
      </div>
      <div className="flex flex-col justify-center">
          <button className="w-full border rounded p-2 bg-sky-600 text-white mb-2  ">
                Mayo
          </button>
      </div>
      <div className="flex flex-col justify-center">
          <button className="w-full border rounded p-2 bg-sky-600 text-white mb-2  ">
                Junio
          </button>
      </div>
      <div className="flex flex-col justify-center">
          <button className="w-full border rounded p-2 bg-sky-600 text-white mb-2  ">
                Julio
          </button>
      </div>
      <div className="flex flex-col justify-center">
          <button className="w-full border rounded p-2 bg-sky-600 text-white mb-2  ">
                Agosto
          </button>
      </div>
      <div className="flex flex-col justify-center">
          <button className="w-full border rounded p-2 bg-sky-600 text-white mb-2  ">
                Septiembre
          </button>
      </div>
      </div>

  );
}
