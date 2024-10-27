import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TimeContextType {
    startTime: number | null;
    setStartTime: React.Dispatch<React.SetStateAction<number | null>>;
}

export const TimeContext = createContext<TimeContextType | undefined>(undefined);



export const useTime = () => {
    const context = useContext(TimeContext);
    if (!context) {
        throw new Error('useTime must be used within a TimeProvider');
    }
    return context;
};

