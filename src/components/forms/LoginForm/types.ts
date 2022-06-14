export type LoginFormProps = {
  onSubmit: any;
  signUpURL: string;
  forgotPasswordURL: string;
  isLoading: boolean;
};

export type LoginFormInputProps = {
  email: string;
  password: string;
};
