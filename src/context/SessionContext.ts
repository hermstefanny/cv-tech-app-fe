import { createContext, useContext } from 'react';

interface SessionContextType {
  sessionId: string | null;
  setSessionId: (sessionId: string | null) => void;
}

export const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};