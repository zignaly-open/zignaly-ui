// Dependencies
import React, {useMemo} from 'react';

// Styled Components
import {
  Layout,
  Header,
  Title,
  Body,
  CloseButton,
} from './styles';

// Assets
import CloseIcon from "assets/icons/close-icon.svg";

// Types
import {
  ModalContainerProps
} from './types';

function ModalContainer({
  onClose,
  children,
  title = null,
  customHeaderAction = null,
}: ModalContainerProps) {
  const renderHeaderAction = useMemo(
    () =>
      !customHeaderAction ? (
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      ) : (
        customHeaderAction
      ),
    [customHeaderAction]
  );

  return (
    <Layout>
      <Header>
        <Title>{title}</Title>
        {renderHeaderAction}
      </Header>
      <Body>{children}</Body>
    </Layout>
  );
}

export default ModalContainer;