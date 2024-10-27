'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import { TimeContext } from "@/context/TimeContext";
import { ReactNode, useEffect, useState } from "react";

export const TimeProvider = ({ children }: { children: ReactNode }) => {
  const [startTime, setStartTime] = useState<number | null>(null);

  return (
    <TimeContext.Provider value={{ startTime, setStartTime }}>
      {children}
    </TimeContext.Provider>
  );
};


export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [, setUserId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (!localStorage.getItem('userId')) {
        const generatedUserId = Math.random().toString(36).substring(2, 15);
        localStorage.setItem('userId', generatedUserId);
        setUserId(generatedUserId);
      }
    }
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center min-h-screen px-12 pt-20 sm:pt-16">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
