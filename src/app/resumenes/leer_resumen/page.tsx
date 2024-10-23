'use client';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Summary {
  id: string;
  document_id: string;
  act_name: string;
  date: string;
  document_url: string;
  content: string[];
}

function SummaryPage() {
  const [processedSummary, setProcessedSummary] = useState<JSX.Element>();
  const searchParams = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const summaryId = searchParams.get('id');
        const response = await fetch(`/api/summaries?id=${summaryId}`);
        const resp = await response.json();
        const summary: Summary = resp.summary;
        const data = <div>
          <h3><strong>{summary.act_name}</strong></h3>
          <p><strong>Fecha:</strong> {new Date(summary.date).toLocaleDateString()}</p>
          <p><strong>Resumen:</strong></p>
          <ul>
            {summary.content && summary.content.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>

        </div>
        setProcessedSummary(data)
      } catch (error) {
        console.error('Error fetching summaries:', error);
      }
    };

    fetchData();
  }, []);
  return <div>
    {processedSummary}
  </div>
}

export default function Page() {
  return (
    <div>
      <h1 className="text-white text-6xl">
        Resumenes
      </h1>
      <Suspense fallback={<div>Cargando...</div>}>
        <SummaryPage />
      </Suspense>
      <div className="flex justify-center mt-6 p-4">
        <button className="border rounded p-2 bg-sky-600 text-white mb-2 hover:bg-sky-700 transition">
          <Link href="/resumenes">Regresar</Link>
        </button>
      </div>
    </div>
  );
}