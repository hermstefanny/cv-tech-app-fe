// src/components/Accordion.js
"use client"; // Ensure this is a Client Component
import Link from 'next/link';
import { useState } from "react";

export default function Accordion({ summariesByMonth }) {
  const [openMonth, setOpenMonth] = useState(null);

  const monthOrder = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const toggleAccordion = (month) => {
    if (openMonth === month) {
      setOpenMonth(null); // Close if clicked again
    } else {
      setOpenMonth(month); // Open the clicked month's section
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {monthOrder.map((month) => (
        summariesByMonth[month] && (
        <div key={month} className="flex flex-col col-span-1">
          {/* Button for each month */}
          <button
            onClick={() => toggleAccordion(month)}
            className={`w-full border rounded p-2 text-white mb-2 ${
              openMonth === month ? "bg-sky-800" : "bg-sky-600"
            }`}
          >
            {month}
          </button>
          {/* Accordion content that expands below the button */}
          {openMonth === month && (
            <div className="w-full bg-gray-200 p-2 space-y-2">
              {summariesByMonth[month].map((summary) => (
                <div key={summary.id} className="border p-2">
                  <button className="text-left">
                  <Link href="/resumenes/leer_resumen"><p>
                    <strong>Nombre:</strong> {summary.document_id}
                  </p> 
                  <p>
                    <strong>Fecha:</strong> {summary.date}
                  </p>
                  </Link>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        )
      ))}
    </div>
  );
}
