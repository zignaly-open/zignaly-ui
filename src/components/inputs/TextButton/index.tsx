// Dependencies
import { LoaderTypes } from "components/display/Loader";
import * as React from "react";
import { ReactElement } from "react";

// Styled Components
import * as styled from "./styles";
import { ButtonProps } from "./types";

function TextButton({
  caption = "Button",
  leftElement,
  rightElement,
  underline,
  onClick = () => {},
  href,
  disabled = false,
  loading = false,
  rel,
  target,
  className,
}: ButtonProps): ReactElement {
  return (
    <styled.Layout
      className={className}
      underline={underline}
      isLoading={loading}
      withElements={!!leftElement || !!rightElement}
      onClick={onClick}
      disabled={disabled || loading}
      {...(href && {
        href,
        as: "a" as any,
        rel: rel ?? "noopener noreferrer",
        target: target ?? "_blank",
      })}
    >
      <styled.Container>
        <styled.ElementsContainer>
          {leftElement && <styled.LeftElement>{leftElement}</styled.LeftElement>}
          {caption}
          {rightElement && <styled.RightElement>{rightElement}</styled.RightElement>}
        </styled.ElementsContainer>
      </styled.Container>

      {loading && (
        <styled.LoaderContainer>
          <styled.ButtonLoader
            type={LoaderTypes.TAILSPIN}
            color="#9CA3AF"
            ariaLabel="Loader"
          ></styled.ButtonLoader>
        </styled.LoaderContainer>
      )}
    </styled.Layout>
  );
}

export default TextButton;
