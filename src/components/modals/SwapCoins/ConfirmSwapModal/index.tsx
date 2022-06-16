import CoinIcon from "components/display/CoinIcon";
import Typography from "components/display/Typography";
import ModalContainer from "components/modals/ModalContainer";
import React from "react";
import { Column } from "utils/column";
import { Row } from "utils/row";
import SwapIcon from "assets/icons/swap-icon.svg";
import { dark } from "theme";
import { Gap } from "utils/gap";
import { Line } from "./styles";

const ConfirmSwapModal = () => {
  const ToFromSwap = () => {
    return (
      <Column width="510px" justifyContent="center">
        <Row width="100%" justifyContent="start">
          <Column gap={16} flex={3} alignItems="start">
            <Typography variant="h2">From</Typography>
            <Row alignItems="center" justifyContent="center" textAlign="center" gap={8}>
              <CoinIcon name={"ETH"} coin={"ETH"} />
              <Typography variant="h1" color="neutral100">
                0.54920999
              </Typography>
              <Typography variant="h3" color="neutral400" weight="medium">
                ETH
              </Typography>
            </Row>
          </Column>
          <Column flex={3} alignItems="center" justifyContent="center">
            <SwapIcon width={40} height={40} color={dark["neutral300"]} />
          </Column>
          <Column gap={16} flex={4} alignItems="start">
            <Typography variant="h2">To</Typography>
            <Row alignItems="center" gap={8}>
              <CoinIcon name={"USDT"} coin={"USDT"} />
              <Typography variant="h1" color="neutral100">
                0.55555555
              </Typography>
            </Row>
          </Column>
        </Row>
        <Gap gap={16} />
        <Line />
        <Gap gap={4} />
        <Row gap={2} justifyContent="start">
          <Typography variant="body1" weight="medium" color="neutral200">
            Rate:
          </Typography>
          <Typography variant="body1" weight="medium" color="neutral000">
            1 ETH = 4640 USDT
          </Typography>
        </Row>
      </Column>
    );
  };

  return (
    <ModalContainer title="Confirm Swap">
      <Column alignItems="center">
        <ToFromSwap />
      </Column>
    </ModalContainer>
  );
};

export default ConfirmSwapModal;
