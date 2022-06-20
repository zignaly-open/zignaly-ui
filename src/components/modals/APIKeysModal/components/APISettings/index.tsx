import Typography from "components/display/Typography";
import CheckBox from "components/inputs/CheckBox";
import InputText from "components/inputs/InputText";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Gap } from "utils/gap";
import { CheckBoxContainer, Layout } from "./styles";

// Types
import { APISettingsProps } from "./types";

const APISettings = ({
  spot = false,
  margin = false,
  futures = false,
  whitelistIps = "",
}: APISettingsProps) => {
  const { register, control, watch } = useFormContext();
  const restrictIp = watch("restrictIp");

  return (
    <Layout>
      <Typography variant="h3" weight="regular" color="neutral200">
        API Settings:
      </Typography>
      <Gap gap={8} />
      <CheckBoxContainer>
        <CheckBox value={true} label="Enable reading" />
        <Controller
          control={control}
          name="margin"
          defaultValue={margin}
          render={({ field: { onChange, value } }) => (
            <CheckBox onChange={onChange} value={value} label="Enable margin trading" />
          )}
        />
      </CheckBoxContainer>
      <Gap gap={12} />
      <CheckBoxContainer>
        <Controller
          control={control}
          name="spot"
          defaultValue={spot}
          render={({ field: { onChange, value } }) => (
            <CheckBox onChange={onChange} value={value} label="Enable spot trading" />
          )}
        />
        <Controller
          control={control}
          name="futures"
          defaultValue={futures}
          render={({ field: { onChange, value } }) => (
            <CheckBox onChange={onChange} value={value} label="Enable futures" />
          )}
        />
      </CheckBoxContainer>
      <Gap gap={16} />
      <Typography variant="h3" weight="regular" color="neutral200">
        Restrict IP:
      </Typography>
      <Gap gap={8} />
      <CheckBox label="Unrestricted" />
      <Gap gap={12} />
      <Controller
        control={control}
        name="restrictIp"
        defaultValue={whitelistIps}
        render={({ field: { onChange, value } }) => (
          <CheckBox
            onChange={onChange}
            value={value}
            label="Restrict access to trusted IPs only (recommended)"
          />
        )}
      />
      {restrictIp && (
        <>
          <Gap gap={16} />
          <Typography variant="h3" weight="regular" color="neutral200">
            IP Addresses
          </Typography>
          <div>
            <Typography variant="h4" weight="regular" color="neutral200">
              When entering more than one IP address, please separate them with spaces.
            </Typography>
          </div>
          <Gap gap={2} />
          <InputText multiline={true} defaultValue={whitelistIps} {...register("whitelistIps")} />
        </>
      )}
    </Layout>
  );
};

export default APISettings;
