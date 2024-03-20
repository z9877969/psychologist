import { Container } from 'shared/components';
import s from './Consultation.module.scss';
import {
  consultationDesc,
  consultationDesc2x,
  consultationMob,
  consultationMob2x,
  consultationTab,
  consultationTab2x,
} from 'modules/ConsultationInfo/images/consultation';
import { problems } from 'modules/ConsultationInfo/data';

const Problems = ({ arrey }) => {
  return (
    <ul className={s.problems}>
      {arrey.map(({ id, text }) => {
        return (
          <li className={s.problem} key={id}>
            <span className={s.id}>{id}.</span>
            <span className={s.itemText}>{text}</span>
          </li>
        );
      })}
    </ul>
  );
};

const Consultation = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.consultationInfo}>
          <div className={s.thumb}>
            <picture>
              <source
                media="(min-width: 1444px)"
                srcSet={`${consultationDesc} 1x, ${consultationDesc2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${consultationTab} 1x, ${consultationTab2x} 2x`}
              />
              <img
                className={s.img}
                srcSet={`${consultationMob} 1x, ${consultationMob2x} 2x`}
                src={consultationMob}
                alt="psyshologist avatar"
                width={343}
              />
            </picture>
          </div>
          <div className={s.content}>
            <h2 className={s.title}>Проблеми, з якими я працюю</h2>
            <p className={s.text}>
              Під час зустрічі ви зможете розповісти, що спонукало вас
              звернутися, а я поділюся з вами своїм баченням нашої майбутньої
              роботи.
            </p>
            <div className={s.problemsWrapper}>
              <Problems arrey={problems.slice(0, 4)} />
              <Problems arrey={problems.slice(4)} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Consultation;
