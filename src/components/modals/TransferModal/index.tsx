// Dependencies
import React, { useCallback, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";

// Components
import ModalContainer from "../ModalContainer";
import IconButton from "../../inputs/IconButton";
import Button from "../../inputs/Button";
import Loader from "../../display/Loader";
import InputAmount from "../../inputs/InputAmount";
import Typography from "../../display/Typography";

// Styled Components
import {
  Actions,
  Body,
  Description,
  ToContainer,
  ToOutline,
  ToValue,
  TypographyBalance,
} from "./styles";

// Assets
import { SwapVertIcon } from "../../../index";

function TransferModal({
  balances = BigNumber.from(0),
  onClickClose = () => {},
}): React.ReactElement {
  // Vars
  const theme: any = useTheme();
  const balance = ethers.utils.parseEther("100").toString();

  // State
  const [fromTradingAccount, setFromTradingAccount] = useState(true);
  const [amount, setAmount] = useState(0);

  const {
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: any) =>
    useCallback(() => {
      // TODO: If you are going to call an API, use react-redux dispatch and create the sagas in state/sagas.
      console.log(data);
    }, []);

  return (
    <ModalContainer width="large" title={"Transfer Funds"} onClickClose={onClickClose}>
      <Description>Transfer coins between my profit sharing accounts.</Description>
      {balances ? (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Body>
            <InputAmount
              placeholder={"Amount"}
              fullWidth={true}
              label={fromTradingAccount ? "From Trading Account" : "From Disconnection Account"}
              tokens={[
                {
                  id: "usdt",
                  balance,
                },
              ]}
              onChange={(e: any) => setAmount(e.target.value)}
              value={/* TODO: Put values here */ BigNumber.from("0")}
            />
            <IconButton
              size="large"
              type="button"
              icon={<SwapVertIcon width={"22px"} height={"33px"} color={theme["neutral300"]} />}
              variant="secondary"
              onClick={() => {
                setFromTradingAccount(!fromTradingAccount);
              }}
            />
            <ToContainer>
              <ToOutline>
                <TypographyBalance variant="h2" color={"neutral300"}>
                  {fromTradingAccount ? "To Disconnection Account:" : "To Trading Account:"}
                </TypographyBalance>
                <ToValue>
                  {amount || "--"}
                  <span>USDT</span>
                </ToValue>
              </ToOutline>
              <Typography>
                Available Balance:
                <TypographyBalance variant="body2" color="neutral000">
                  80 USDT
                </TypographyBalance>
              </Typography>
            </ToContainer>
          </Body>
          <Actions>
            <Button caption={"Transfer Now"} disabled={!isValid} size="xlarge" type="submit" />
          </Actions>
        </form>
      ) : (
        <Loader color={"#fff"} ariaLabel={"Loading"} />
      )}
    </ModalContainer>
  );
}

export default TransferModal;
