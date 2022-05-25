// Dependencies
import React from 'react';
import {useTheme} from "styled-components";

// Components
import {
  Investor,
  InvestorName,
  InvestorData,
  InvestorSuccessFee,
  PendingTransaction,
  Field,
  Row,
  AmountInvested,
  TokenImage,
  TokenValue,
  Actions
} from './styles';
import Avatar from "../../display/Avatar";
import ModalContainer from "../ModalContainer";
import Typography from "../../display/Typography";
import TextButton from "../../inputs/TextButton";
import Button from "../../inputs/Button";

// Assets
import RefreshIcon from 'assets/icons/refresh-icon.svg';
import BTCIcon from 'assets/icons/coins/btc.svg?url';
import PlusIcon from 'assets/icons/plus-icon.svg';
import ArrowRightIcon from 'assets/icons/arrow-right-icon.svg';

// Props
import {EditInvestmentWithModalProps} from "./types";
import Theme from "../../../theme/theme";

function EditInvestmentWithModal({
  investorName,
  investorPictureUrl,
  investorSuccessFee,
  pendingTransaction = null,
  amountInvested = 0,
  coin = {
    image: BTCIcon,
    name: 'BTC'
  }
}: EditInvestmentWithModalProps) {
  // Hooks
  const theme: Theme = useTheme();

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
      <Field>
        <Row>
          <Typography variant={'inputm'}>Amount Invested</Typography>
          <AmountInvested>
            <TokenImage src={coin.image} />
            <TokenValue>
              <Typography variant={'bigNumber'} color={'neutral100'}>{amountInvested}</Typography>
              <Typography variant={'h3'} color={'neutral400'}>{coin.name}</Typography>
            </TokenValue>
          </AmountInvested>
        </Row>
        <Row>
          Input Here
        </Row>
      </Field>

      <Actions>
        <TextButton
          leftElement={(
            <PlusIcon
              width={'22px'}
              height={'22px'}
              color={theme['links']}
            />
          )}
          caption={'Invest more'}
        />
        <Button
          size={'large'}
          caption={'Add to Investment'}
        />
        <TextButton
          rightElement={(
            <ArrowRightIcon
              width={'22px'}
              height={'22px'}
              color={theme['links']}
            />
          )}
          caption={'Withdraw Investment'}
        />
      </Actions>
    </ModalContainer>
  );
}

export default EditInvestmentWithModal;