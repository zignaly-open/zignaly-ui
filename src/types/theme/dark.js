import { connectionStateTypesId } from '@components/display/ConnectionStateLabel/types';

const dark = {
  name: 'dark',

  zigWalletIndicator: {
    valueTextColor: '#FFFFFF',
    levelTextColor: '#706F82',
    tokenTextColor: '#9864EF'
  },

  percentageIndicator: {
    upTextColor: '#26C4C1',
    downTextColor: '#CA3E92'
  },

  connectionStateLabel: {
    textColor: {
      [connectionStateTypesId.CONNECTED]: '#26C4C1',
      [connectionStateTypesId.DISCONNECTED]: '#706F82',
      [connectionStateTypesId.HARD_DISCONNECT]: '#CA3E92',
      [connectionStateTypesId.SOFT_DISCONNECT]: '#F7CF00',
      [connectionStateTypesId.SUSPENDED]: '#E50B5A'
    }
  }
};

export default dark;
