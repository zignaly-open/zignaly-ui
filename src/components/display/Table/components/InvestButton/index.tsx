import Typography from "components/display/Typography";
import Button from "components/inputs/Button";
import React from "react";
import { dark } from "theme";
import { BalanceSummary } from "../BalanceSummary";
import { ButtonContainer, Column, IconContainer, Row } from "./styles";
import ArrowLeftIcon from "assets/icons/arrow-right-icon.svg";
import { Gap } from "utils/gap";

const InvestButton = ({ isInvested }: { isInvested: boolean }) => {
  return (
    <Row>
      {!isInvested ? (
        <Column>
          <ButtonContainer>
            <Button size="medium" caption={"Invest"} />
            <Typography variant="h5" color="neutral300">
              10% Success Fee
            </Typography>
          </ButtonContainer>
        </Column>
      ) : (
        <Column>
          <BalanceSummary profit={100} theme={dark} dashboardType={"marketplace"}></BalanceSummary>
        </Column>
      )}
      <IconContainer>
        <ArrowLeftIcon width={40} height={40} color={dark["links"]}></ArrowLeftIcon>
        <Gap gap={10}></Gap>
      </IconContainer>
    </Row>
  );
};

export default InvestButton;
