import Button from "components/inputs/Button";
import InputAmount from "components/inputs/InputAmount";
import ModalContainer from "components/modals/ModalContainer";
import React, { useCallback, useState } from "react";
import { InputModalProps, Swap } from "../types";
import { ButtonContainer, IconContainer } from "./styles";
import SwapIcon from "assets/icons/swap-icon.svg";
import { dark } from "theme";
import { Gap } from "utils/gap";

const InputModal = ({
  avaliableCoins,
  continueButtonOnClick = () => {},
  onClickClose = () => {},
  getSwapRate = () => {},
}: InputModalProps) => {
  const [swapFrom, setSwapFrom] = useState<Swap>();
  const [swapTo, setSwapTo] = useState<Swap>();

  const swapFromChanged = useCallback(
    ({ token, value }: Swap) => {
      setSwapFrom({ token: token, value: value });
    },
    [swapFrom],
  );

  const swapToChanged = useCallback(
    ({ token, }: Swap) => {
      console.log(swapFrom);
      const rate = getSwapRate({ swapTo: token, swapFrom: swapFrom, value: swapFrom?.value ?? 0 });
      setSwapTo({ token: token, value: rate });
    },
    [swapTo],
  );

  return (
    <ModalContainer title="Swap Coins" onClickClose={onClickClose}>
      <Gap gap={9} />
      <InputAmount
        label={"Swap from"}
        value={""}
        onChange={(e: any, { value, token }: Swap) => {
          swapFromChanged({ token: token, value: value });
        }}
        tokens={avaliableCoins}
      />
      <IconContainer>
        <SwapIcon width={40} height={40} color={dark["neutral300"]} />
      </IconContainer>
      <InputAmount
        label={"Swap to"}
        value={swapTo?.value ?? ""}
        placeholder={"Amount to recieve"}
        onChange={(e: any, { token }: Swap) => {
          swapToChanged({ token: token });
        }}
        tokens={swapFrom?.token.avaliableSwapPairs ?? avaliableCoins}
      />
      <ButtonContainer>
        <Button
          size="xlarge"
          caption={"Continue to Confirmation"}
          onClick={() => continueButtonOnClick({ swapFrom, swapTo })}
        />
      </ButtonContainer>
    </ModalContainer>
  );
};

export default InputModal;
