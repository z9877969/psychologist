import { Picture } from 'shared/components';

export default function SliderCertif({ text, ...props }) {
  return (
    <div>
      <Picture {...props} />
      <p>{text}</p>
    </div>
  );
}
