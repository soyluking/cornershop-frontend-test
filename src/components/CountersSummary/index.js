import { useContext } from 'react';

import CountersContext from '../../context/CountersContext';
import useCountTimes from '../../hooks/useCountTimes';

import RefreshIcon from '../Icons/RefreshIcon';

import {
  SSummary,
  SSummaryItems,
  SSummaryTimes,
  SSummaryButton,
} from './styles';

const CountersSummary = ({ counters }) => {
  const { selected } = useContext(CountersContext);
  const { timesLabel, itemsLabel } = useCountTimes({ counters });

  return (
    <SSummary>
      {selected.length ? (
        <SSummaryItems primary>{selected.length} selected</SSummaryItems>
      ) : (
        <>
          <SSummaryItems>{itemsLabel}</SSummaryItems>
          <SSummaryTimes>{timesLabel}</SSummaryTimes>
        </>
      )}

      <SSummaryButton>
        <RefreshIcon fill='var(--black)' />
        <span>Refreshing...</span>
      </SSummaryButton>
    </SSummary>
  );
};

export default CountersSummary;
