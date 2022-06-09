export type AuthVerifyModalProps = {
  hasEmailVerified?: boolean;
  hasAsk2FA?: boolean;
  ask2FA?: boolean;
  isUnknownDevice?: boolean;
  isDisabled?: boolean;
  isLoadingEmailVerifyInput?: boolean;
  isLoadingTwoFAVerifyInput?: boolean;

  // Handlers
  onClickClose: Function;
  onReSendCode: Function;
  onTwoFactorSubmit: Function;
  onEmailSubmit: Function;
};
