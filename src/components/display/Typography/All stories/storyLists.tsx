import React, { ReactElement } from "react";
import Typography from "..";

type TextVariationsTypes = {
   texts: React.ReactNode[],
}

type TextVariantItem = {
    variant: string,
}

export function TextVariations({texts}: TextVariationsTypes) {

    return (
        <div className="text-variation-list">
          {texts.map((text: TextVariantItem, index) => (
            <Typography key={`--${index.toString()}`} variant={text.variant} >Example text</Typography>
          ))}
        </div>
      );
}