// Dependencies
import React from 'react';

// Assets
import OptionsDotsIcon from '@assets/icons/option-dots-icon.svg';
import EditPenIcon from '@assets/icons/edit-pen-icon.svg';
import CloseIcon from '@assets/icons/close-icon.svg';

// Component
import Table from './';
import TableButton from '@components/inputs/TableButton';
import { ButtonGroup } from '@components/styled';
import { shortenHex } from '@utils/web3';
import PriceLabel from '@components/display/PriceLabel';
import PercentageIndicator from '@components/display/PercentageIndicator';

import ConnectionStateLabel from '@components/display/ConnectionStateLabel';
import { connectionStateTypesId } from '@components/display/ConnectionStateLabel/types';

export default {
  title: 'Display/Table',
  component: Table
};

const Template = (args) => (
  <Table {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
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
        <div style={{ textAlign: 'right' }}>
          <img src={OptionsDotsIcon} />
        </div>
      ),
      accessor: 'action',
      disableSortBy: true
    }
  ],
  data: [
    {
      userId: shortenHex('0xc3B2CFa1684dd33e8Ea8F657122f42b288d32852'),
      email: 'tec**@zig**.com',
      investment: (
        <PriceLabel
          token={'USDT'}
          value={'5000'}
        />
      ),
      pyd: (
        <PriceLabel
          token={'USDT'}
          value={'145'}
          bottomElement={(
            <PercentageIndicator
              value={10}
            />
          )}
        />
      ),
      pydTotal: (
        <PriceLabel
          token={'USDT'}
          value={'1500'}
        />
      ),
      totalFeesPaid: (
        <PriceLabel
          token={'USDT'}
          value={'1250'}
        />
      ),
      successFee: (
        <PriceLabel
          token={'USDT'}
          value={'1250'}
        />
      ),
      feesInZig: (
        <PriceLabel
          token={'USDT'}
          value={'1250'}
        />
      ),
      status: (
        <ConnectionStateLabel stateId={connectionStateTypesId.CONNECTED} />
      ),
      action: (
        <ButtonGroup>
          <TableButton
            icon={EditPenIcon}
            caption={'Edit'}
          />
          <TableButton
            icon={CloseIcon}
            caption={'Remove'}
          />
        </ButtonGroup>
      )
    }
  ]
};
