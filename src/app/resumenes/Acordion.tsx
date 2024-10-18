// src/components/Accordion.js
"use client"; // Ensure this is a Client Component

import { useState } from "react";

export default function Accordion({ summariesByMonth }) {
  const [openMonth, setOpenMonth] = useState(null);

  const toggleAccordion = (month) => {
    if (openMonth === month) {
      setOpenMonth(null); // Close if clicked again
    } else {
      setOpenMonth(month); // Open the clicked month's section
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {Object.keys(summariesByMonth).map((month) => (
        <div key={month} className="flex flex-col justify-center col-span-3">
          <button
            onClick={() => toggleAccordion(month)}
            className={`w-full border rounded p-2 text-white mb-2 ${
              openMonth === month ? "bg-sky-800" : "bg-sky-600"
            }`}
          >
            {month}
          </button>
          {openMonth === month && (
            <div className="w-full bg-gray-200 p-2 space-y-2">
              {summariesByMonth[month].map((summary) => (
                <div key={summary.id} className="border p-2">
                  <h3>
                    <strong>Nombre:</strong> {summary.document_id}
                  </h3>
                  <p>
                    <strong>Fecha:</strong> {summary.date}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
