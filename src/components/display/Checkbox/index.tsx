// Dependencies
import React from "react";

import CheckIcon from "assets/icons/check.svg";

// Styles
import * as styled from "./styles";

export interface CheckboxProps {
  label?: string;
  className?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  label, className, checked, onChange
}: CheckboxProps) => {
  // return (
  //   <label class="container">Three
  //     <input type="checkbox">
  //       <span class="checkmark"></span>
  //   </label>
  // )
  const checkedProp = checked ? "checked" : 'unchecked';

  return (
    <>
      <styled.Test className="test">One
        <input type="checkbox" {...checkedProp} />
        <span className="checkmark"></span>
      </styled.Test>

      <styled.Label
        className={className}
      >
        {label}
        <styled.Input type="checkbox" {...checkedProp} onChange={onChange} />
        <styled.Checkmark>
          {checked && <styled.Icon src={CheckIcon} />}
        </styled.Checkmark>
      </styled.Label>
    </>
  );
};

export default Checkbox;
