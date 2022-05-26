// Dependencies
import React, {useState} from 'react';
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
  Actions,
  Inline
} from './styles';
import Avatar from "../../display/Avatar";
import ModalContainer from "../ModalContainer";
import Typography from "../../display/Typography";
import TextButton from "../../inputs/TextButton";
import Button from "../../inputs/Button";
import Table from "../../display/Table";
import DateLabel from "../../display/Table/components/DateLabel";
import PriceLabel from "../../display/Table/components/PriceLabel";

// Assets
import RefreshIcon from 'assets/icons/refresh-icon.svg';
import BTCIcon from 'assets/icons/coins/btc.svg?url';
import PlusIcon from 'assets/icons/plus-icon.svg';
import ArrowRightIcon from 'assets/icons/arrow-right-icon.svg';
import ArrowLeftIcon from 'assets/icons/arrow-left-icon.svg';

// Props
import {EditInvestmentWithModalProps, viewsIds} from "./types";

function EditInvestmentWithModal({
  investorName,
  investorPictureUrl,
  investorSuccessFee,
  pendingTransaction = null,
  amountInvested = 0,
  coin = {
    image: BTCIcon,
    name: 'BTC'
  },
}: EditInvestmentWithModalProps) {
  // Hooks
  const theme: any = useTheme();
  const [currentState, setCurrentState] = useState(viewsIds.EDIT_INVESTMENT);

  if (currentState === viewsIds.PENDING_TRANSACTIONS) {
    return (
      <ModalContainer
        onGoBack={() => setCurrentState(viewsIds.EDIT_INVESTMENT)}
        title={'Edit Investment with'}
      >
        <Table
          columns={[
            {
              Header: "Date",
              accessor: "date",
            },
            {
              Header: "Amount",
              accessor: "amount",
            },
            {
              Header: "Type",
              accessor: "type",
            },
            {
              Header: "Status",
              accessor: "status",
            }
          ]}
          data={[
            {
              date: <DateLabel date={new Date()} />,
              amount: <PriceLabel value={10000} coin={'USDT'} />,
              type: 'Investment',
              status: 'Processing in 24 hrs',
              action: (
                <TextButton
                  caption={'Cancel'}
                  onClick={() => setCurrentState(viewsIds.PENDING_TRANSACTIONS)}
                />
              ),
            }
          ]}
          hideOptionsButton={false}
          isUserTable={true}
        />

        <Actions>
          <Button
            leftElement={(
              <ArrowLeftIcon
                color={'#fff'}
                width={'20px'}
                height={'20px'}
              />
            )}
            onClick={() => setCurrentState(viewsIds.EDIT_INVESTMENT)}
            size={'large'}
            caption={'Back'}
          />
        </Actions>
      </ModalContainer>
    );
  }

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
          <Inline>
            <RefreshIcon />
            <Typography variant={'body1'} color={'yellow'}>You have {pendingTransaction} pending transaction</Typography>
          </Inline>
          <div>
            <TextButton
              rightElement={(
                <ArrowRightIcon
                  width={'22px'}
                  height={'22px'}
                  color={theme['links']}
                />
              )}
              caption={'View'}
              onClick={() => setCurrentState(viewsIds.PENDING_TRANSACTIONS)}
            />
          </div>
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