// Dependencies
import styled from "styled-components";
import { styledIf } from "utils/styled";
import { IconButtonVariants, IconButtonSizes, DropdownAlignment } from "./";

const isPrimaryButton = (variant: IconButtonVariants) => variant === IconButtonVariants.PRIMARY;

const isSecondaryButton = (variant: IconButtonVariants) => variant === IconButtonVariants.SECONDARY;

const isFlatButton = (variant: IconButtonVariants) => variant === IconButtonVariants.FLAT;

const isSmallButton = (size: IconButtonSizes) => size === IconButtonSizes.SMALL;

const isMediumButton = (size: IconButtonSizes) => size === IconButtonSizes.NORMAL;

const isLargeButton = (size: IconButtonSizes) => size === IconButtonSizes.LARGE;

const isXLargeButton = (size: IconButtonSizes) => size === IconButtonSizes.XLARGE;

export const Icon = styled.img`
  z-index: 2;
  position: relative;
  transition: color 0.2s linear;
`;

export const Container = styled.div<any>`
  position: relative;
  border-radius: 4px;
  transition: all 0.2s linear;
  outline: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Dropdown = styled.div`
  position: absolute;
  background: #12152c;
  white-space: nowrap;
  color: #fff;
  top: 99%;
  box-shadow: 0 4px 6px -2px #00000061;

  ${({ alignment, width }: any) => `
    width: ${width ?? "auto"};
  
    ${styledIf(
      alignment === DropdownAlignment.LEFT,
      `
        left: 0;
        border-radius: 0 4px 4px 4px;
      `,
    )}
    
    ${styledIf(
      alignment === DropdownAlignment.RIGHT,
      `
        right: 0;
        border-radius: 4px 0px 4px 4px;
      `,
    )}
  `}
`;

/**
 * Layout
 */
interface LayoutProps {
  size: IconButtonSizes;
  variant: IconButtonVariants;
  isActiveDropdown: boolean;
}

export const Layout = styled.div`
  position: relative;
  display: inline-flex;
`;

export const ViewPort = styled.button<LayoutProps>`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 2px;
  outline: none;

  position: relative;
  user-select: none;
  background: transparent;

  transition: all 0.1s linear;

  &[disabled] {
    cursor: default;
  }

  ${({ size, variant, isActiveDropdown }: any) => `
    ${styledIf(
      isSmallButton(size),
      `
      ${Icon} {
        width: 14px;
        height: 14px;
      }
      
      ${Container} {
        width: 34px;
        height: 30px;
      }
    `,
    )}
    
  ${styledIf(
    isMediumButton(size),
    `     
      ${Icon} {
        width: 14px;
        height: 14px;
      }
      
      ${Container} {
        width: 42px;
        height: 36px;
      }
    `,
  )}
    
  ${styledIf(
    isLargeButton(size),
    `     
      ${Icon} {
        width: 18px;
        height: 18px;
      }
      
      ${Container} {
        width: 56px;
        height: 48px;
      }
    `,
  )}

  ${styledIf(
    isXLargeButton(size),
    `     
      ${Icon} {
        width: 24px;
        height: 24px;
      }
      
      ${Container} {
        width: 68px;
        height: 60px;
      }
    `,
  )}
  
  ${styledIf(
    isPrimaryButton(variant),
    `
      ${Container} {
        background: linear-gradient(289.8deg, #149CAD 0%, #4540C1 100%);
      }
      
      &:enabled:focus:not(:focus-visible) {
        outline: 0;
        box-shadow: none;
      }
      
      &:enabled:focus:focus-visible {
        background: linear-gradient(121.21deg, #A600FB 10.7%, #6F06FC 31.3%, #4959F5 60.13%, #2E8DDF 76.19%, #12C1C9 89.78%);
      
        ${Container} {
          border: 1px solid white;
          background: linear-gradient(289.8deg, #149CAD 0%, #4540C1 100%);
        }
      }
            
      &[disabled] {
        opacity: 0.33;
      } 

      &:enabled {
        ${Container} {
          &:before {
            border-radius: inherit;
            background: linear-gradient(312.12deg, #8671F7 14.16%, #7EC9F9 83.59%);
            content: '';    
            display: block;
            height: 100%;
            position: absolute;
            top: 0; 
            left: 0;
            opacity: 0;
            width: 100%;
            z-index: 1;
            transition: all 100ms linear; 
          }
        }
      }
      
      &:enabled:active {
        ${Container} {
          &:before {
            opacity: 1;
          }
        }
      }
            
      ${Icon} {
        color: #F3F4F6;
      }
    `,
  )}
    
  ${styledIf(
    isSecondaryButton(variant),
    `
      ${Container} {
        transition: all 0.2s linear;
        border: 1px solid #4A4958;
        background: rgba(12, 13, 33, 0.8);
             
        &:enabled:hover {
          border: 1px dashed #4A4958;
          background: linear-gradient(289.8deg, rgba(20, 156, 173, 0.16) 0%, rgba(69, 64, 193, 0.16) 100%);
        
          ${Icon} {
            color: #fff;
            text-shadow: 0px 12px 16px rgba(25, 25, 39, 0.36);
          }
        }
      }
      
      &:enabled:focus:not(:focus-visible) {
        outline: 0;
        box-shadow: none;
      }
     
      &:enabled:focus:focus-visible {
        background: linear-gradient(289.8deg, #149CAD 0%, #4540C1 100%);
      
        ${Container} {
          border: 1px solid white;
          background: #040618;
                  
          &:before {
            background: linear-gradient(289.8deg, rgba(20, 156, 173, 0.16) 0%, rgba(69, 64, 193, 0.16) 100%);
            opacity: 1;
          }
        }
        
        ${Icon} {
          color: #fff;
        }
      }
            
      &[disabled] {
        opacity: 0.33;
      } 

      &:enabled {
        ${Container} {
          &:before {
            border-radius: inherit;
            background: linear-gradient(289.8deg, rgba(20, 156, 173, 0.48) 0%, rgba(69, 64, 193, 0.48) 100%);
            content: '';    
            display: block;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            width: 100%;
            z-index: 1;
            transition: all 50ms linear; 
          }
        }
      }
      
      &:enabled:active {
        padding: 2px;
        background: linear-gradient(289.8deg, #149CAD 0%, #4540C1 100%);
        
        ${Container} {
          border: none;
          background: #040618;
          
          &:before {
            opacity: 1;
          }
        }
        
        ${Icon} {
          top: 0px;
          left: 0px;
        }
      }
            
      ${Icon} {
        color: #9CA3AF;
        letter-spacing: 2px;
      }
    `,
  )}
  
  ${styledIf(
    isFlatButton(variant),
    `
      ${Container} {
        transition: all 0.2s linear;
        border: 1px solid transparent;
        background: rgba(12, 13, 33, 0.8);
             
        &:enabled:hover {
          border: 1px dashed #4A4958;
          background: linear-gradient(289.8deg, rgba(20, 156, 173, 0.16) 0%, rgba(69, 64, 193, 0.16) 100%);
          transition: all 0.1s linear;
          
          ${Icon} {
            color: #fff;
            text-shadow: 0px 12px 16px rgba(25, 25, 39, 0.36);
          }
        }
      }
      
      &:enabled:focus:not(:focus-visible) {
        outline: 0;
        box-shadow: none;
      }
     
      &:enabled:focus:focus-visible {
        background: linear-gradient(289.8deg, #149CAD 0%, #4540C1 100%);
      
        ${Container} {
          border: 1px solid white;
          background: #040618;
                  
          &:before {
            background: linear-gradient(289.8deg, rgba(20, 156, 173, 0.16) 0%, rgba(69, 64, 193, 0.16) 100%);
            opacity: 1;
          }
        }
        
        ${Icon} {
          color: #fff;
        }
      }
            
      &[disabled] {
        opacity: 0.33;
      } 

      &:enabled {
        ${Container} {
          &:before {
            border-radius: inherit;
            background: linear-gradient(289.8deg, rgba(20, 156, 173, 0.48) 0%, rgba(69, 64, 193, 0.48) 100%);
            content: '';    
            display: block;
            height: 100%;
            position: absolute;
            top: 0; 
            left: 0;
            opacity: 0;
            width: 100%;
            z-index: 1;
            transition: all 0.1s linear;
          }
        }
      }
      
      &:enabled:active {
        padding: 2px;
        background: linear-gradient(289.8deg, #149CAD 0%, #4540C1 100%);
        
        ${Container} {
          border: none;
          background: #040618;
          
          &:before {
            opacity: 1;
          }
        }
        
        ${Icon} {
          top: 0px;
          left: 0px;
        }
      }
            
      ${Icon} {
        color: #9CA3AF;
        letter-spacing: 2px;
      }
    `,
  )}  
  
  ${styledIf(
    isActiveDropdown,
    ` 
      background: #12152c;      
      padding: 2px;
      border-radius: 4px 4px 0 0;
             
      &:enabled:active {
        padding: 2px;
        background: #12152c;
      }
 
      ${Container} {
        background: #12152c;
        
        &:before {
          opacity: 0 !important;
        }
      }
    `,
  )}
  `}
`;
