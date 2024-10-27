'use client';
import { TimeContext } from "@/context/TimeContext";
import { ReactNode, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

  return (
    <TimeProvider>
      <div>
        <Header />
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center min-h-screen px-12 pt-20 sm:pt-16">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </TimeProvider>
  );
}
