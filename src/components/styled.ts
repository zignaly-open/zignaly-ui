// Dependencies
import styled from "styled-components";

// Types
import { buttonVariantsId } from "types/buttons";
import { sizeTypesId } from "types/sizes";

export const ButtonGroup = styled.div`
  display: grid;

  ${(props: any) => `
    grid-template-columns: repeat(${props.children.length}, minmax(0%, 100%));
    gap: 8px;
  `}
`;

export const Button = styled.button<{ size: sizeTypesId; variant: buttonVariantsId }>`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  user-select: none;
  white-space: nowrap;

  &[disabled] {
    cursor: default;
  }
`;
