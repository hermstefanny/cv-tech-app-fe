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
  summariesByMonth: SummariesByMonth | null | undefined;
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

  const toggleAccordion = async (month: string) => {
    if (openMonth === month) {
      setOpenMonth(null); // Close if clicked again
    } else {
      setOpenMonth(month); // Open the clicked month's section
    }
    const date = new Date().toISOString();
    const action = `Click on MES de ${month} button`;
    let userId = localStorage.getItem("userId");
    await fetch("/api/actions", {
      body: JSON.stringify({
        userId,
        date,
        action,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const handleClickDoc = async (act_name: string) => {
    const date = new Date().toISOString();
    const action =`Click on acta ${act_name}`;
    let userId = localStorage.getItem("userId");
    await fetch("/api/actions", {
        body: JSON.stringify({
            userId,
            date,
            action,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });

}

  return (
    <div key="test" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {monthOrder.map((month) => (
        summariesByMonth[month] && (
          <div key={month} className="flex flex-col  aspect-w-1  w-full sm:w-52 flex-grow">
            {/* Button for each month */}
            <button
              onClick={() => toggleAccordion(month)}
              className={`w-full border rounded p-2  text-white mb-2 ${openMonth === month ? "bg-sky-800" : "bg-sky-600  hover:bg-sky-700 transition shadow-inner"
                }`}
            >
              {month}
            </button>
            {/* Accordion content that expands below the button */}
            {openMonth === month && (
              <div className="w-full p-2 flex flex-col gap-2 border leading-relaxed mt-0 shadow-md">
                {summariesByMonth[month].map((summary) => (
                  <div key={summary.id}>
                    <button className="min-w-full min-h-full text-center text-base p-1  bg-sky-200 border rounded-md text-sky-800 hover:bg-blue-300 transition shadow-lg">
                      <Link onClick={() => handleClickDoc(summary.act_name)} href={`/resumenes/leer_resumen?id=${summary.id}`}>
                        <p className="text text-sm"><strong >{summary.act_name}: </strong> </p>
                        <p className="text text-sm">{new Date(summary.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
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
