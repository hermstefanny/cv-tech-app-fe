'use client';

import Accordion from '@/components/Acordion';
import { useEffect, useState } from 'react';

// INTERFACES
interface Summary {
  id: string;
  document_id: string;
  date: string;
  act_name: string;
  content: string[];
  document_url: string;
}
interface SummariesByMonth {
  [key: string]: Summary[];
}


export default function Page() {
  const [groupedSummaries, setGroupedSummaries] = useState<SummariesByMonth | null>();

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch("/api/summaries");
      const responseJson = await response.json();
      const summaries = responseJson.summaries;

      const groupedSummaries: SummariesByMonth = summaries.reduce((acc: SummariesByMonth, summary: Summary) => {

        const date = new Date(summary.date);

        if (!isNaN(date.getTime())) {
          const month = date.toLocaleString('es-ES', { month: 'long', timeZone: 'UTC' });
          const formattedMonth: string = month.charAt(0).toUpperCase() + month.slice(1);

          if (!acc[formattedMonth]) {
            acc[formattedMonth] = [];
          }
          acc[formattedMonth].push(summary);
        }
        return acc;
      }, {});
      setGroupedSummaries(groupedSummaries);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-sky-600 text-2xl sm:text-sm  lg:text-4xl text-center mb-4">
        Sesiones del Concejo Metropolitano del año del 2024
      </h1>

      <Accordion summariesByMonth={groupedSummaries} />
    </div>
  );
}
