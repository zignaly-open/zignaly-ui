// Dependencies
import React from "react";
import ReactCodeInput from "react-verification-code-input";

// Types
import { InputCodeProps } from "./types";

// Styled Components
import { Layout } from "./styles";

function InputCode({ fields, loading, onComplete, autoFocus = false }: InputCodeProps) {
  return (
    <Layout>
      <ReactCodeInput
        className={"input-box"}
        fields={fields}
        loading={loading}
        autoFocus={autoFocus}
        onComplete={onComplete}
      />
    </Layout>
  );
}

export default InputCode;
