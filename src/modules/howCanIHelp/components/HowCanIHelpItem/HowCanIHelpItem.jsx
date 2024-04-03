import { Picture } from 'shared/components';
import s from './HowCanIHelpItem.module.scss';
import Button from 'shared/components/BigButton/BigButton';
import { useCallback } from 'react';
import { useModal } from 'context/ModalProvider';
import { ModalConsultation } from 'modules/modalConsultation';

const HowCanIHelpItem = ({ title, text, price, ...props }) => {
  const showModal = useModal();

  const handleClick = useCallback(() => {
    showModal(<ModalConsultation />);
  }, [showModal]);

  const thousends = Math.floor(price / 1000);
  const priceFormat =
    thousends > 0
      ? '' + thousends + ' ' + (price - thousends * 1000)
      : '' + price;

  return (
    <div className={s.container} onClick={handleClick}>
      <div className={s.content}>
        <Picture className={s.img} {...props} />
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{text}</p>
        <p className={s.price}>{`від ${priceFormat} грн`}</p>
      </div>
      <Button className={s.button} onClick={handleClick}>
        Записатися
      </Button>
    </div>
  );
};

export default HowCanIHelpItem;
