// Dependencies
import React from "react";

// Styled Components
import { Layout, Field, Form, Action } from "./styles";
import InputText from "../../inputs/InputText";
import Typography from "../../display/Typography";
import Button from "../../inputs/Button";
import TextButton from "../../inputs/TextButton";

// Types
import { LoginFormProps } from "./types";

function LoginForm({ onSubmit, isLoading, signUpURL, forgotPasswordURL }: LoginFormProps) {
  return (
    <Layout>
      <Typography variant={"h2"}>Log In</Typography>
      <Form>
        <Field>
          <InputText label={"Email address:"} placeholder={""} />
        </Field>
        <Field>
          <InputText
            label={"Password:"}
            labelAction={{
              text: "Forgot password?",
              href: forgotPasswordURL,
            }}
            placeholder={""}
          />
        </Field>
      </Form>
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
    </Layout>
  );
}

export default LoginForm;
