import { memo } from 'react';

import { MetricProps } from '../../@types';
import { metricsVariants } from '../../constants';
import { Text } from '../';

function Metric(props: MetricProps) {
  const { value, variant = 'material' } = props;

  return (
    <div className='flex w-full h-10'>
      <div className='flex w-full h-full items-center shadow-default shadow-text rounded-lg'>
        <div className='w-auto h-auto p-3 bg-primary rounded-tl-lg rounded-bl-lg'>
          <Text
            type='medium'
            color='background-color'
            className='text-base md:text-xl'
            toCenter
          >
            {metricsVariants[variant]}
          </Text>
        </div>

        <div className='w-full h-auto p-3 bg-background-color rounded-tr-lg rounded-br-lg'>
          <Text
            type='semibold'
            color='primary'
            className='text-base md:text-xl'
            toCenter
          >
            {value}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default memo(Metric);
