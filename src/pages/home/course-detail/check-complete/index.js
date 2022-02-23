import React, { memo } from 'react';
import {CheckCompleteWrapper} from './style';
import Chart from '@/components/check-complete/chart'
import Tables from '@/components/check-complete/tables'
export default memo(function CheckComplete() {
  return (
    <CheckCompleteWrapper>
      <Chart/>
      <Tables/>
    </CheckCompleteWrapper>
  );
});
