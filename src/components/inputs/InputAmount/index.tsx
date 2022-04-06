// Dependencies
import React from "react";

// Styled Components
import { InputContainer, InputValue, Label, Layout, TokenImage } from "./styles";
import Button, { ButtonVariants } from "../Button";

// Assets
import ETHIcon from "../../../assets/icons/coins/eth.svg";

function InputAmount({
  label = "Amount to Withdraw",
  //tokenImage = ETHIcon,
  //onChange = () => {},
  //currency,
}) {
  return (
    <Layout>
      <Label>{label}</Label>
      <InputContainer>
        <TokenImage src={ETHIcon} />
        <InputValue />
        <Button variant={ButtonVariants.TABLE} onClick={() => {}} caption={"Max"} />
      </InputContainer>
    </Layout>
  );
}

export default InputAmount;
