import { createContext, useContext, useState, ReactNode } from "react";

export type ScenarioId = "INT-4821" | "INT-4822" | "INT-4823";

interface ScenarioContextType {
  activeTicket: ScenarioId;
  setActiveTicket: (id: ScenarioId) => void;
}

const ScenarioContext = createContext<ScenarioContextType>({
  activeTicket: "INT-4821",
  setActiveTicket: () => {},
});

export const ScenarioProvider = ({ children }: { children: ReactNode }) => {
  const [activeTicket, setActiveTicket] = useState<ScenarioId>("INT-4821");
  return (
    <ScenarioContext.Provider value={{ activeTicket, setActiveTicket }}>
      {children}
    </ScenarioContext.Provider>
  );
};

export const useScenario = () => useContext(ScenarioContext);
