import Dropdown from './Dropdown';

import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import {useState} from "react";

export default async function Page() {
  let data = await fetch('http://localhost:8000/summaries/')
  let summaries = await data.json()
  const processedPosts = await Promise.all(summaries.map(async (summary) => {
    const processedContent = await remark()
      .use(html)
      .process(summary.content);
    const contentHtml = processedContent.toString();
    return <li key={summary.id}>
    <h3><strong>Nombre:</strong>{summary.document_id}</h3>
    <p><strong>Fecha:</strong> {summary.date}</p>
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </li>
  }));

 
  return (
    <div>
      <div className=" text-sky-600 text-5xl lg:text-6xl text-center mb-4 ">
            Resumenes por mes
          </div>
      {/* Pass the summaries as props to the client component */}
      <Dropdown summaries={summaries} />
    </div>
  );
}