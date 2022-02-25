// Dependencies
import styled from 'styled-components';
import { styledIf } from '@utils/styled';
import { buttonVariantsId } from '@types/buttons';
import { sizeTypesId } from '@types/sizes';

const isPrimaryButton = (variant) => variant === buttonVariantsId.PRIMARY;

const isSecondaryButton = (variant) => variant === buttonVariantsId.SECONDARY;

const isFlatButton = (variant) => variant === buttonVariantsId.FLAT;

const isSmallButton = (size) => size === sizeTypesId.SMALL;

const isMediumButton = (size) => size === sizeTypesId.MEDIUM;

const isLargeButton = (size) => size === sizeTypesId.LARGE;

export const Caption = styled.div`
  z-index: 2;
`;

export const Layout = styled.button`
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  position: relative;

  transition: all 0.2s linear;
  
  &[disabled] {
    cursor: default;
  }
  
  ${props => (`
    ${styledIf(isSmallButton(props.size), `
      padding: 8px 14px;
      height: 32px;
      min-width: 88px;
      
      ${Caption} {
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: center;
      }
    `)}
    
    ${styledIf(isMediumButton(props.size), `
      padding: 12px 14px;
      min-width: 88px;
      height: 40px;
      
      ${Caption} {
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: center;
      }
    `)}
    
    ${styledIf(isLargeButton(props.size), `
      padding: 20px 14px;
      min-width: 140px;
      height: 72px;
      
      ${Caption} {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0.33px;
      }
    `)}
  
    ${styledIf(isPrimaryButton(props.variant), `
      background: linear-gradient(289.8deg, #149CAD 0%, #4540C1 100%);
      
      &[disabled] {
        opacity: 0.33;
      } 

      &:enabled:before {
        border-radius: inherit;
        background: linear-gradient(312.12deg, #8671F7 14.16%, #7EC9F9 83.59%);
        content: '';    
        display: block;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        opacity: 0;
        width: 100%;
        z-index: 1;
        transition: all 100ms linear;
      }
      
      &:enabled:active {
        &:before {
          opacity: 1;
        }
      }
            
      ${Caption} {
        color: #F3F4F6;
      }
    `)}
  `)}



`;
