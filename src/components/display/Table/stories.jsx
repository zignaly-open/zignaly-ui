// Dependencies
import React from 'react';

// Assets
import OptionsDotsIcon from '@assets/icons/option-dots-icon.svg';
import CheckIcon from '@assets/icons/check-icon.svg';

// Component
import Table from './';
import PriceLabel from '@components/display/PriceLabel';
import PercentageIndicator from '@components/display/PercentageIndicator';
import ConnectionStateLabel from '@components/display/ConnectionStateLabel';

// Types
import { connectionStateTypesId } from '@components/display/ConnectionStateLabel/types';

// Utils
import { shortenHex } from '@utils/web3';
import IconButton from '@components/inputs/IconButton';
import { buttonVariantsId } from '@types/buttons';

export default {
  title: 'Display/Table',
  component: Table
};

const Template = (args) => (
  <Table {...args} />
);

export const Investors = Template.bind({});
Investors.args = {
  columns: [
    {
      Header: 'User ID',
      accessor: 'userId'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Investment',
      accessor: 'investment'
    },
    {
      Header: 'P & L',
      accessor: 'pyd'
    },
    {
      Header: 'P & L Total',
      accessor: 'pydTotal'
    },
    {
      Header: 'Total Fees Paid',
      accessor: 'totalFeesPaid'
    },
    {
      Header: 'Success Fee',
      accessor: 'successFee'
    },
    {
      Header: 'Fees in ZIG',
      accessor: 'feesInZig'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
    {
      Header: (
        <IconButton
          variant={buttonVariantsId.PLACEHOLDER}
          icon={OptionsDotsIcon}
        />
      ),
      accessor: 'action',
      disableSortBy: true
    }
  ],
  data: [
    {
      userId: shortenHex('5f886d29da8e9666b1684c9a'),
      email: 'tec**@zig**.com',
      investment: (
        <PriceLabel
          token={'USDT'}
          value={'1250'}
        />
      ),
      pyd: (
        <PriceLabel
          token={'USDT'}
          value={'37.5'}
          bottomElement={(
            <PercentageIndicator
              value={3}
            />
          )}
        />
      ),
      pydTotal: (
        <PriceLabel
          token={'USDT'}
          value={'145'}
        />
      ),
      totalFeesPaid: (
        <PriceLabel
          token={'USDT'}
          value={'218'}
        />
      ),
      successFee: '10%',
      feesInZig: <img src={CheckIcon} />,
      status: (
        <ConnectionStateLabel
          stateId={connectionStateTypesId.CONNECTED}
        />
      ),
      action: (
        <IconButton
          icon={OptionsDotsIcon}
        />
      )
    }
  ]
};
