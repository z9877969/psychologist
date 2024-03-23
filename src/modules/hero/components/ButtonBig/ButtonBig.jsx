import Button from 'shared/components/BigButton/BigButton';
import s from './ButtonBig.module.scss';
const ButtonBig = () => {
  return (
    <div className={s.bigBox}>
      <Button>Безкоштовна консультація</Button>
    </div>
  );
};
export default ButtonBig;
