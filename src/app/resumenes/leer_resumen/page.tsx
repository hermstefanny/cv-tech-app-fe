import { db } from '@/db';
import Link from 'next/link';

export default async function Page() {
  const summaries = await db.summary.findMany();
  const processedPosts = await Promise.all(
    summaries.map(async (summary) => {
      return (
        <li key={summary.id}>
          <h3>{summary.document_id}</h3>
          <p><strong>Fecha:</strong> {summary.date}</p>
          <p><strong>Resumen Corto:</strong> {summary.summary}</p>
          <p><strong>Problemas:</strong></p>
          <ul>
            {summary.problems && summary.problems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </li>
      );
    })
  );

  return (
    <div>
      <h1 className="text-white text-6xl">
        Resumenes
      </h1>
      <ul>
        {processedPosts}
      </ul>
      <div className="flex justify-left mt-4">
        <button className="border rounded p-2 bg-sky-400 text-white mb-2">
          <Link href="/resumenes">Regresar</Link>
        </button>
      </div>
    </div>
  );
}