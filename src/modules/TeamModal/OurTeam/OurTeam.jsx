import { ModalBackdrop } from 'shared/components';
import ScrollBar from '../../frequentlyAskedQuestions/components/ScrollBar/ScrollBar';
import DeveloperCard from '../DeveloperCard/DeveloperCard';
import s from './OurTeam.module.scss';
import developersData from '../data';
import { sprite } from 'shared/icons';

const OurTeam = ({ onClose }) => {
  return (
    <ModalBackdrop onClose={onClose}>
      <div className={s.container}>
        <div>
          <button className={s.closeButton} onClick={onClose}>
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#icon-cross`}></use>
            </svg>
          </button>
        </div>

        <h2 className={s.title}>Команда, яка створила сайт</h2>

        <ScrollBar>
          <div className={s.cardsContainer}>
            {developersData.map((developer, index) => (
              <DeveloperCard key={index} developer={developer} />
            ))}
          </div>
        </ScrollBar>
      </div>
    </ModalBackdrop>
  );
};

export default OurTeam;
