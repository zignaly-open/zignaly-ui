// Dependencies
import React, { useCallback } from "react";
import { useForm, Controller, HTMLFormElement } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Styled Components
import { Layout, Field, Form, Action } from "./styles";
import InputText from "../../inputs/InputText";
import Typography from "../../display/Typography";
import Button from "../../inputs/Button";
import TextButton from "../../inputs/TextButton";

// Types
import { LoginFormProps, LoginFormInputProps } from "./types";

// Validations
import { LoginValidation } from "../../../utils/validations";

function LoginForm({ onSubmit, isLoading, signUpURL, forgotPasswordURL }: LoginFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginValidation),
  });

  const formSubmit = (values: LoginFormInputProps, e: HTMLFormElement) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Layout>
      <Typography variant={"h2"}>Log In</Typography>
      <Form onSubmit={handleSubmit(formSubmit)}>
        <Field>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                label={"Email address:"}
                placeholder={""}
                value={field.value}
                onChange={field.onChange}
                error={errors.email?.message}
              />
            )}
          />
        </Field>
        <Field>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <InputText
                label={"Password:"}
                type={"password"}
                labelAction={{
                  text: "Forgot password?",
                  href: forgotPasswordURL,
                }}
                value={field.value}
                placeholder={""}
                onChange={field.onChange}
                error={errors.password?.message}
              />
            )}
          />
        </Field>
        <Action>
          <Button
            type={"submit"}
            onClick={onSubmit}
            variant={"primary"}
            caption={"LOG IN"}
            size={"large"}
            loading={isLoading}
          />
          <TextButton href={signUpURL} caption={"Sign up"} />
        </Action>
      </Form>
    </Layout>
  );
}

export default LoginForm;
