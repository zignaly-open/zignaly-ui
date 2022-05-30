// Dependencies
import * as React from "react";
import { useState } from "react";

// Styled Components
import { Bar, Dot, DotContainer, Label, Layout, Line, TextContainer } from "./styles";
import { InvestSliderProps } from "./types";

const InvestSlider = ({
  className,
  max = 100,
  min = 0,
  style,
  initialValue,
  onChange = () => {},
}: InvestSliderProps) => {
  const [value, setValue] = useState<number>(
    initialValue ? ((initialValue - min) / (max - min)) * 100 : 0,
  );
  const [enabled, setEnabled] = useState<boolean>(false);

  const sliderRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const rect = sliderRef.current?.getBoundingClientRect();
    const minPosition = 0;
    const maxPosition = rect?.width;
    window.onmousemove = (ev: MouseEvent): any => {
      if (enabled) {
        let position = 0;
        let absolutePosition = value;
        if (rect != null && maxPosition != null) {
          position = ev.clientX - rect.x;
          if (position < minPosition) {
            absolutePosition = min;
          } else if (position > maxPosition) {
            absolutePosition = max;
          } else {
            absolutePosition = Math.round((position / maxPosition) * (max - min) + min);
          }
          absolutePosition = Math.round(absolutePosition * (1 / 5)) / (1 / 5);
          setValue(absolutePosition);
          onChange(absolutePosition);
        }
        window.onmouseup = () => {
          setEnabled(false);
        };
      }
    };
  }, [enabled]);

  return (
    <Layout style={style} className={className}>
      <TextContainer>
        <Label variant="body2" weight="demibold" color="neutral200">
          Reinvest
        </Label>
        <Label variant="body2" weight="demibold" color="highlighted">
          {value}%
        </Label>
      </TextContainer>
      <Bar ref={sliderRef}>
        <Line variant="left"></Line>
        <Line variant="middle"></Line>
        <Line variant="right"></Line>
        <DotContainer onMouseDown={() => setEnabled(true)} value={value}>
          <Dot />
        </DotContainer>
      </Bar>
      <TextContainer>
        <Label variant="body2" weight="demibold" color="neutral200">
          Withdraw
        </Label>
        <Label variant="body2" weight="demibold" color="highlighted">
          {100 - value}%
        </Label>
      </TextContainer>
    </Layout>
  );
};

export default InvestSlider;