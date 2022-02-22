// Dependencies
import React from 'react';
import NumberFormat from 'react-number-format';

// Styled Components
import * as styled from './styles';

const PriceLabel = ({
  value = 0,
  token = 'USDT',
  bottomElement = null
}) => (
  <styled.Layout>
    <styled.Value>
      <NumberFormat
        value={value}
        displayType={'text'}
        thousandSeparator={true}
      />
    </styled.Value>
    <styled.Token>{token}</styled.Token>
    {bottomElement && bottomElement}
  </styled.Layout>
);

export default PriceLabel;
