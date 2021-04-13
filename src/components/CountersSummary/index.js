import { useContext, useState } from 'react';
import { useQueryClient } from 'react-query';

import CountersContext from '../../context/CountersContext';
import useCountTimes from '../../hooks/useCountTimes';

import RefreshIcon from '../Icons/RefreshIcon';

import {
  SSummary,
  SSummaryItems,
  SSummaryTimes,
  SSummaryButton,
} from './styles';

const CountersSummary = ({ counters = [] }) => {
  const [refresh, setRefresh] = useState(false);

  const { selected } = useContext(CountersContext);
  const { timesLabel, itemsLabel } = useCountTimes({ counters });
  const queryClient = useQueryClient();

  const refreshCounters = async () => {
    setRefresh(true);
    await queryClient.refetchQueries('counters');
    setRefresh(false);
  };

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

      <SSummaryButton
        className={refresh ? 'refreshing' : ''}
        onClick={() => refreshCounters()}>
        <RefreshIcon fill={refresh ? 'var(--app-tint)' : 'var(--black)'} />
        {refresh && <span>Refreshing...</span>}
      </SSummaryButton>
    </SSummary>
  );
};

export default CountersSummary;
