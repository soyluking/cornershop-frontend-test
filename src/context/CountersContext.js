import { createContext, useState } from 'react';

const CountersContext = createContext({});

export const CountersContextProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  const concatSelected = ({ id, title = null, count = 0 }) => {
    let selectedCounters = selected;

    if (selectedCounters.some(item => item.id === id)) {
      selectedCounters = selectedCounters.filter(item => item.id !== id);
    } else {
      selectedCounters = selected.concat([{ id, title, count }]);
    }

    setSelected(selectedCounters);
  };

  const emptySelected = () => setSelected([]);

  return (
    <CountersContext.Provider
      value={{ selected, concatSelected, emptySelected }}>
      {children}
    </CountersContext.Provider>
  );
};

export default CountersContext;
