"use client";
import Link from 'next/link';
import { useState } from "react";

// INTERFACES
interface Summary {
  id: string;
  date: string;
  act_name: string;
  document_id: string;
}

interface SummariesByMonth {
  [key: string]: Summary[];
}

interface AccordionProps {
  summariesByMonth: SummariesByMonth | null | undefined;
}

export default function Accordion({ summariesByMonth }: AccordionProps) {
  const [opennedMonth, setOpennedMonth] = useState<string | null>(null);

  if (!summariesByMonth) {
    return <div>Cargando...</div>;
  }

  const monthSpNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const toggleAccordion = async (month: string) => {
    if (opennedMonth === month) {
      setOpennedMonth(null); 
    } else {
      setOpennedMonth(month); 
    }
    const date = new Date().toISOString();
    const action = `Click on MES_${month} button`;
    const sessionId = localStorage.getItem("sessionId");
    await fetch("/api/actions", {
      body: JSON.stringify({
        sessionId,
        date,
        action,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const handleClickDoc = async (doc_id: string) => {
    const date = new Date().toISOString();
    const action = `Click on RESUMEN_${doc_id}`;
    const sessionId = localStorage.getItem("sessionId");
    await fetch("/api/actions", {
      body: JSON.stringify({
        sessionId,
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
      {monthSpNames.map((month) => (
        summariesByMonth[month] && (
          <div key={month} className="flex flex-col  aspect-w-1  w-full sm:w-52 flex-grow">

            <button
              onClick={() => toggleAccordion(month)}
              className={`w-full border rounded p-2  text-white mb-2 ${opennedMonth === month ? "bg-sky-800" : "bg-sky-600  hover:bg-sky-700 transition shadow-inner"
                }`}
            >
              {month}
            </button>

            {opennedMonth === month && (
              <div className="w-full p-2 flex flex-col gap-2 border leading-relaxed mt-0 shadow-md">
                {summariesByMonth[month].slice().sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((summary) => (
                    <div key={summary.id}>
                      <button className="min-w-full min-h-full text-center text-base p-1  bg-sky-200 border rounded-md text-sky-800 hover:bg-blue-300 transition shadow-lg">
                        <Link onClick={() => handleClickDoc(summary.document_id)} href={`/resumenes/leer_resumen?id=${summary.id}`}>
                          <p className="text text-sm"><strong >{summary.act_name}: </strong> </p>
                          <p className="text text-sm">{new Date(summary.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</p>
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
