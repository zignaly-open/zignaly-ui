// Dependencies
import React, { useCallback, useState } from "react";

// Styled Components
import { Layout, InputContainer, InputValue, Side, Label } from "./styles";
import { InputTextProps } from "./types";

import ErrorMessage from "components/display/ErrorMessage";

function InputText(
  {
    error = null,
    disabled = false,
    placeholder = "Please enter a value",
    label = "Withdraw address",
  }: InputTextProps,
  inputRef: React.Ref<any>,
) {
  const [inputValue, setInputValue] = useState("");

  const handleTextChange = useCallback((e: any) => {
    const value = e.target.value;

    setInputValue(value);
    return;
  }, []);
  return (
    <Layout withError={!!error} disabled={disabled}>
      <Label>{label}</Label>
      <InputContainer>
        <Side>
          <InputValue
            ref={inputRef}
            onChange={handleTextChange}
            placeholder={placeholder}
            value={inputValue}
            disabled={disabled}
            type={"text"}
          />
        </Side>
      </InputContainer>

      {/* Show error Messages */}
      {error && <ErrorMessage text={error} />}
    </Layout>
  );
}

export default React.forwardRef(InputText);
