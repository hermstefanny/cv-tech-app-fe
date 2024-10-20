import { useEffect, useState } from 'react';
import Accordion from '@/components/Acordion';

interface Summary {
  id: string;
  document_id: string;
  date: string;
  summary: string;
  content: string;
  problems: string[];
}

// Define the SummariesByMonth interface
interface SummariesByMonth {
  [key: string]: Summary[];
}

export default function Page() {
  const [summariesByMonth, setSummariesByMonth] = useState<SummariesByMonth>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8000/summaries/');
      const summaries: Summary[] = await data.json();

      // Group summaries by month based on the `date` field
      const groupedSummaries: SummariesByMonth = summaries.reduce((acc: SummariesByMonth, summary: Summary) => {
        // Parse the date string directly
        const date = new Date(summary.date); // Use summary.date directly if it's a string

        // Check if the date is valid
        if (!isNaN(date.getTime())) {
          const month = date.toLocaleString('es-ES', { month: 'long' }); // e.g., "noviembre"
          const formattedMonth: string = month.charAt(0).toUpperCase() + month.slice(1);

          if (!acc[formattedMonth]) {
            acc[formattedMonth] = [];
          }
          acc[formattedMonth].push(summary);
        }

        return acc;
      }, {});

      setSummariesByMonth(groupedSummaries);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="text-sky-600 text-5xl lg:text-6xl text-center mb-4">
        Resúmenes por mes
      </div>
      {/* Pass the grouped summaries to the Accordion component */}
      <Accordion summariesByMonth={summariesByMonth} />
    </div>
  );
}