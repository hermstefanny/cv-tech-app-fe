"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

interface Summary {
  id: string;
  document_id: string;
  date: string;
  summary: string;
  content: string;
  problems: string[];
}

export default function Page() {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [processedPosts, setProcessedPosts] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8000/summaries/');
      const summaries: Summary[] = await data.json();
      setSummaries(summaries);

      const processedPosts = await Promise.all(
        summaries.map(async (summary) => {
          const processedContent = await remark().use(html).process(summary.content);
          const contentHtml = processedContent.toString();
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
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </li>
          );
        })
      );
      setProcessedPosts(processedPosts);
    };

    fetchData();
  }, []);

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