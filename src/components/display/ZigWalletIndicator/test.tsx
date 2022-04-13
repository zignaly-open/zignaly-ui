// @ts-nocheck
// Dependencies
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Component
import ZigWalletIndictator from ".";

describe("components/display/ZigWalletIndictator", () => {
  describe("renders", () => {
    it("ZigWalletIndictator with small size", () => {
      const { container } = render(
        <ZigWalletIndictator size={"small"}>Example Test</ZigWalletIndictator>,
      );

      const tag = container.querySelector("div");
      expect(tag).toBeVisible();

      expect(container.firstChild.classList.contains("small")).toBe(true);
    });
    it("ZigWalletIndictator with medium size", () => {
      const { container } = render(
        <ZigWalletIndictator zigs={9}>Example Test</ZigWalletIndictator>,
      );

      const tag = container;
      expect(tag).toBeVisible();

      expect(container).toBe("aa");
    });
    it("ZigWalletIndictator with large size", () => {
      const { container } = render(
        <ZigWalletIndictator size={"large"}>Example Test</ZigWalletIndictator>,
      );

      const tag = container.querySelector("div");
      expect(tag).toBeVisible();

      expect(container.firstChild.classList.contains("large")).toBe(true);
    });

    it("ZigWalletIndictator with hash", () => {
      const { container } = render(
        <ZigWalletIndictator hash="0xmyHash">Example Test</ZigWalletIndictator>,
      );

      const tag = container.querySelector("div");
      expect(tag).toBeVisible();
    });

    it("ZigWalletIndictator with image", () => {
      render(<ZigWalletIndictator image="image">Example Test</ZigWalletIndictator>);

      const tag = screen.getByRole("img");
      expect(tag).toBeVisible();

      expect(tag).toHaveAttribute("src", "image");
    });
  });
});
