"use client";
import Link from 'next/link';
import { useState } from "react";
// Define the Summary interface
interface Summary {
  id: string;
  date: string;
  act_name: string;
}

// Define the SummariesByMonth interface
interface SummariesByMonth {
  [key: string]: Summary[];
}

// Define the props interface for the Accordion component
interface AccordionProps {
  summariesByMonth: SummariesByMonth  | null | undefined;
}

export default function Accordion({ summariesByMonth }: AccordionProps) {
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  if (!summariesByMonth) {
    return <div>Cargando...</div>;
  }

  const monthOrder = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const toggleAccordion = (month: string) => {
    if (openMonth === month) {
      setOpenMonth(null); // Close if clicked again
    } else {
      setOpenMonth(month); // Open the clicked month's section
    }
  };

  return (
    <div key="test" className="grid grid-cols-3 gap-4 p-4">
      {monthOrder.map((month) => (
        summariesByMonth[month] && (
          <div key={month} className="flex flex-col col-span-1">
            {/* Button for each month */}
            <button
              onClick={() => toggleAccordion(month)}
              className={`w-full border rounded p-2 text-white mb-2 ${openMonth === month ? "bg-sky-800" : "bg-sky-600"
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
                    <Link href={`/resumenes/leer_resumen?id=${summary.id}`}>
                    <p>
                        <strong>Nombre:</strong> {summary.act_name}
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
