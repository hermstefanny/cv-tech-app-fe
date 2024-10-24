'use client';
import Link from 'next/link';
import Image from 'next/image';
import docLinkImg from 'public/link-document.png';
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
          <div className="w-full lg:max-w-6xl rounded-lg shadow-md p-2 overflow-hidden border leading-relaxed mt-4">
          <h3 className =" text text-sky-600 text-xl text-center lg:text-3xl p-2" ><strong>{summary.act_name}</strong></h3>
          <div className="flex flex-col lg:flex-row w-full lg:max-w-6xl items-center  overflow-hidden">
          <div className="lg:w-2/3 w-full flex  p-4 lg:p-4">
          <div>
          <p className = "text-sky-800 font-semibold p-2" ><strong>Fecha:</strong> {new Date(summary.date).toLocaleDateString('es-ES', {day:'numeric', month:'long', year: 'numeric'})}</p>
           <ul>
            {summary.content && summary.content.map((content, index) => ( 
              <div className= "flex flex-wrap p-2 ">
              <li className ="text-sky-800 text-sm md:text-sm lg:text-base  bg-sky-100/80 p-2  lg:p-4 leading-relaxed shadow-md" key={index}>{content}</li>
              </div>
            ))}
          </ul>
          </div>
          </div>
          <div className="lg:w-1/3 w-full flex flex-col items-center p-2 lg:p-4 space-y-4">
          <Image
            src={docLinkImg}
            alt="Ilustracion con el documento saliendo de un laptop"
            className="object-contain max-h-96"
          />
          <button className="border rounded p-2 bg-amber-600 text-white shadow-md mb-2  hover:bg-amber-800 transition ">
            <Link href={summary.document_url} target="_blank" rel="noopener noreferrer">LINK AL DOCUMENTO ORIGINAL</Link>
          </button>          
          </div>

          </div>
          </div>
        
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
        <button className="border rounded p-2 bg-sky-600 text-white mb-2 shadow-md hover:bg-sky-700 transition">
          <Link href="/resumenes">Regresar</Link>
        </button>
      </div>
    </div>
  );
}