import { useContext } from 'react';

import CountersContext from '../../context/CountersContext';

import RefreshIcon from '../Icons/RefreshIcon';

import {
  SSummary,
  SSummaryItems,
  SSummaryTimes,
  SSummaryButton,
} from './styles';

const CountersSummary = ({ counters }) => {
  const { selected } = useContext(CountersContext);

  const itemsLength = counters.length;
  const itemsLabel = itemsLength === 1 ? 'item' : 'items';
  const timesLabel = itemsLength === 1 ? 'time' : 'times';

  return (
    <SSummary>
      {selected.length ? (
        <SSummaryItems primary>{selected.length} selected</SSummaryItems>
      ) : (
        <>
          <SSummaryItems>
            {itemsLength} {itemsLabel}
          </SSummaryItems>
          <SSummaryTimes>
            {itemsLength} {timesLabel}
          </SSummaryTimes>
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
