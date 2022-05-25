// Dependencies
import React from 'react';

// Components
import {
  Investor,
  InvestorName,
  InvestorData,
  InvestorSuccessFee,
  PendingTransaction,
} from './styles';
import Avatar from "../../display/Avatar";
import ModalContainer from "../ModalContainer";

// Assets
import RefreshIcon from 'assets/icons/refresh-icon.svg';

// Props
import {EditInvestmentWithModalProps} from "./types";
import Typography from "../../display/Typography";

function EditInvestmentWithModal({
  investorName,
  investorPictureUrl,
  investorSuccessFee,
  pendingTransaction = null,
}: EditInvestmentWithModalProps) {
  return (
    <ModalContainer title={'Edit Investment with'}>
      <Investor>
        <Avatar size={'x-large'} image={investorPictureUrl} />
        <InvestorData>
          <InvestorName variant={'h1'} color={'neutral000'}>{investorName}</InvestorName>
          <InvestorSuccessFee variant={'body2'} color={'neutral300'}>{investorSuccessFee}% Success fee</InvestorSuccessFee>
        </InvestorData>
      </Investor>
      {pendingTransaction && (
        <PendingTransaction>
          <RefreshIcon />
          <Typography variant={'body1'} color={'yellow'}>You have {pendingTransaction} pending transaction</Typography>
        </PendingTransaction>
      )}
    </ModalContainer>
  );
}

export default EditInvestmentWithModal;