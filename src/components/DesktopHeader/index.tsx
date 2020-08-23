import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C5603AQGauuHdA_p0YQ/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=ZNZjhU8TgltLkK8MsmZFZqX8FPsrb0ws-kSrvdtw-_Y" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
