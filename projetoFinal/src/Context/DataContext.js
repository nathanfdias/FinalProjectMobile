import { createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [info, setInfo] = useState(0);


  return (
    <DataContext.Provider
      value={{
        info,
        setInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};