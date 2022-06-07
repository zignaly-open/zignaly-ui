import Typography from "components/display/Typography";
import Selector from "components/inputs/Selector";
import { SelectSizes } from "components/inputs/Selector/types";
import React, { useState } from "react";
import ModalContainer from "../../ModalContainer";
import { CoinOption, MyAccountWithdrawModalProps, NetworkOption } from "../types";

const MyAccountWithdrawModal = ({ coins }: MyAccountWithdrawModalProps) => {
  const [coin, setCoin] = useState<CoinOption>();
  const [network, setNetwork] = useState<NetworkOption>();
  const [depositAddress, setDepositAddress] = useState<string>("");
  return (
    <ModalContainer width={784} title="Withdraw Crypto">
      <Typography variant="body1" color="neutral200">
        Withdraw crypto to an external account. To move funds between Zignaly accounts, use a
        transfer instead.
      </Typography>
          <Selector
            label="Coin"
            placeholder={coin?.caption ?? "Select a Coin"}
            onChange={(e: CoinOption) => {
              setCoin(e);
              setNetwork(undefined);
              setDepositAddress("");
            }}
            size={SelectSizes.LARGE}
            value={coin}
            options={coins}
            maxHeight={60}
            transparent={true}
          ></Selector>
    </ModalContainer>
  );
};

export default MyAccountWithdrawModal;
