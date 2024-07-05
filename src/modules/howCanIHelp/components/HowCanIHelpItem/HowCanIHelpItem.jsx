import { useCallback } from 'react';
import formatThousands from 'format-thousands';
import { Picture, BigButton as Button } from 'shared/components';
import { useModal } from 'context/ModalProvider';
import { ModalConsultation } from 'modules/modalConsultation';
import s from './HowCanIHelpItem.module.scss';

const HowCanIHelpItem = ({ title, descr, price, imageUrl }) => {
  const showModal = useModal();

  const handleClick = useCallback(() => {
    showModal(<ModalConsultation />);
  }, [showModal]);

  const formatedPrice = formatThousands(price);

  return (
    <div className={s.container} onClick={handleClick}>
      <div className={s.content}>
        <Picture className={s.img} defaultImage={imageUrl} />
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{descr}</p>
        <p className={s.price}>{`від ${formatedPrice} грн`}</p>
      </div>
      <Button className={s.button} onClick={handleClick}>
        Записатися
      </Button>
    </div>
  );
};

export default HowCanIHelpItem;
