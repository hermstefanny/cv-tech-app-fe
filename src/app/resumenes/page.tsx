import { remark } from 'remark';
import html from 'remark-html';



export default async function Page() {
  let data = await fetch('http://localhost:8000/summaries/')
  let summaries = await data.json()
  console.log(summaries)
  const processedPosts = await Promise.all(summaries.map(async (summary) => {
    const processedContent = await remark()
      .use(html)
      .process(summary.content);
    const contentHtml = processedContent.toString();
    return <li key={summary.id}>
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
  }));
  return (
    <div>
      <h1 className = "text-white text-6xl">
      Resumenes
      </h1>
      <ul>
      {processedPosts}
      </ul>
    </div>
  )
}