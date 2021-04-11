import { createContext, useState } from 'react';

const CountersContext = createContext({});

export const CountersContextProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  const concatSelected = counter => setSelected(selected.concat(counter));

  return (
    <CountersContext.Provider value={{ selected, concatSelected }}>
      {children}
    </CountersContext.Provider>
  );
};

export default CountersContext;
