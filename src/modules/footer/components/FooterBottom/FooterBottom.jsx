import { Container } from 'shared/components';
import s from './FooterBottom.module.scss';
import OurTeam from '../../../TeamModal/OurTeam/OurTeam';
import { useState } from 'react';

const FooterBottom = () => {
  const [showOurTeamModal, setShowOurTeamModal] = useState(false);

  const handleShowOurTeamModal = (e) => {
    e.preventDefault();
    setShowOurTeamModal(true);
  };

  const handleCloseOurTeamModal = () => {
    setShowOurTeamModal(false);
  };
  return (
    <div className={s.footer}>
      <Container>
        <div className={s.container}>
          <p className={s.text}>© Ірина Прудько | 2024</p>
          <a href="" className={s.link} onClick={handleShowOurTeamModal}>
            created by GoIT
          </a>
        </div>
      </Container>
      {showOurTeamModal && <OurTeam onClose={handleCloseOurTeamModal} />}
    </div>
  );
};

export default FooterBottom;
