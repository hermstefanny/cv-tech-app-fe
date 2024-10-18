import Dropdown from './Dropdown';
import Accordion from './Acordion';

import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import {useState} from "react";

export default async function Page() {
  let data = await fetch('http://localhost:8000/summaries/')
  let summaries = await data.json()

 // Group summaries by month based on the `date` field
 const summariesByMonth = summaries.reduce((acc, summary) => {
  // Parse the date string directly
  const date = new Date(summary.date); // Use summary.date directly if it's a string

  // Check if the date is valid
  if (!isNaN(date)) {
    const month = date.toLocaleString('es-ES', { month: 'long' }); // e.g., "noviembre"
    const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    
    if (!acc[formattedMonth]) {
      acc[formattedMonth] = [];
    }
    acc[formattedMonth].push(summary);
  }
  
  return acc;
}, {});

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