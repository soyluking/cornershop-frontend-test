import { createContext, useState } from 'react';

const CountersContext = createContext({});

export const CountersContextProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  const checkCounterBeforeAdd = counter => {
    const selectedCounters = selected;

    if (selectedCounters.some(item => item.id === counter.id))
      return selectedCounters.filter(item => item.id !== counter.id);

    return selectedCounters.concat(counter);
  };

  const concatSelected = counter => setSelected(checkCounterBeforeAdd(counter));

  return (
    <CountersContext.Provider value={{ selected, concatSelected }}>
      {children}
    </CountersContext.Provider>
  );
};

export default CountersContext;
