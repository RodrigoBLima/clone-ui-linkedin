import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGauuHdA_p0YQ/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=ZNZjhU8TgltLkK8MsmZFZqX8FPsrb0ws-kSrvdtw-_Y"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Rodrigo Barbosa</h1>
        <h2>Full Stack | Python | JavaScript | React | React Native</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">34</span>
        </div>
        <div className="key-value">
          <span className="key">Conexões</span>
          <span className="value">120</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
