// Dependencies
import React, { useCallback, useState, useEffect } from "react";
import { parseUnits } from "@ethersproject/units";
import NumberFormat from "react-number-format";
import { BigNumber, utils } from "ethers";

// Styled Components
import {
  InputContainer,
  InputValue,
  Label,
  Layout,
  TokenImage,
  BalanceContainer,
  BalanceLabel,
  BalanceValue,
} from "./styles";
import Button, { ButtonSizes, ButtonVariants } from "../Button";

// Assets
import ETHIcon from "../../../assets/icons/coins/eth.svg";

// Types
type InputAmountProps = {
  label: string;
  token: {
    image: string;
    name: string;
  };
  value: BigNumber;
  balance: number | string;
  onChange: Function;
  disabled: boolean;
};

function InputAmount({
  label = "Amount to Withdraw",
  token = {
    image: ETHIcon,
    name: "ETH",
  },
  value = BigNumber.from(0),
  balance,
  onChange,
  disabled = false,
}: InputAmountProps) {
  // Hooks
  const [inputValue, setInputValue] = useState("");

  /** ================= *
   *   Layout Effects
   *  ================= */
  useEffect(() => {
    if (value.gt(balance)) {
      onClickMaxValue();
    }
  }, [balance]);

  /** ================= *
   *   Methods
   *  ================= */
  const handleTextChange = useCallback(
    (e) => {
      const value = e.target.value;

      if (value === "") {
        onChange(BigNumber.from(0));
        setInputValue(value);
        return;
      }

      let bigNumberValue;
      try {
        bigNumberValue = parseUnits(value, 18);
      } catch (e) {
        return;
      }

      if (balance && bigNumberValue.gt(balance)) {
        return;
      }

      const decimals = value.toString().split(".")[1]?.length ?? 0;

      if (decimals <= 18) {
        const number = BigNumber.from(parseUnits(value === "" ? "0.0" : value, 18));
        setInputValue(value);
        onChange(number);
      }
    },
    [balance],
  );

  const onClickMaxValue = useCallback(() => {
    if (!disabled) {
      setInputValue(utils.formatUnits(BigNumber.from(balance)));
      onChange(BigNumber.from(balance));
    }
  }, [disabled, onChange, balance]);

  return (
    <Layout>
      <Label>{label}</Label>
      <InputContainer>
        <TokenImage src={token.image} />
        <InputValue
          value={inputValue}
          type={"text"}
          placeholder={"0.0"}
          onChange={handleTextChange}
          disabled={disabled}
        />
        <Button
          variant={ButtonVariants.TABLE}
          size={ButtonSizes.SMALL}
          onClick={onClickMaxValue}
          caption={"Max"}
        />
      </InputContainer>
      <BalanceContainer>
        <BalanceLabel>Balance:</BalanceLabel>
        <BalanceValue>
          <NumberFormat
            value={utils.formatUnits(balance)}
            displayType={"text"}
            suffix={` ${token.name}`}
            thousandSeparator={true}
          />
        </BalanceValue>
      </BalanceContainer>
    </Layout>
  );
}

export default InputAmount;
