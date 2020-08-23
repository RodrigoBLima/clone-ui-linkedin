import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C5603AQGauuHdA_p0YQ/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=ZNZjhU8TgltLkK8MsmZFZqX8FPsrb0ws-kSrvdtw-_Y" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
