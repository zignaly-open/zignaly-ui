// Dependencies
import React from "react";
import Typography from "..";

// Types
import { componentByVariants } from "../types";

type TextVariationsTypes = {
  texts: {
    variant?: keyof typeof componentByVariants;
  }[];
};

export function TextVariations({ texts }: TextVariationsTypes) {
  return (
    <div className="text-variation-list">
      {texts.map((text, index: number) => (
        <Typography key={`--${index.toString()}`} variant={text.variant}>
          Example Text
        </Typography>
      ))}
    </div>
  );
}
