import { sprite } from 'shared/icons';
import s from './InstagramIcon.module.scss';

const InstagramIcon = () => {
  return (
    <a
      className={s.instagram}
      target="_blank"
      href="https://www.instagram.com/ira_voytovych?igsh=Z3NnZzJ5b2ZyazRo&utm_source=qr"
    >
      <svg
        className={s.icon}
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 26 26"
        fill="none"
      >
        <use
          className={s.gradientPath}
          fill="url(#paint0_radial_57682_221)"
          xlinkHref={`${sprite}#icon-instagram-great`}
        ></use>

        <defs>
          <radialGradient
            id="paint0_radial_57682_225"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(6.90625 28.0025) rotate(-90) scale(25.7679 23.9662)"
          >
            <stop style={{ stopColor: '#f8edc1' }} />
            <stop offset="0.1" style={{ stopColor: '#f8edc1' }} />
            <stop offset="0.5" style={{ stopColor: '#f6c6c0' }} />
            <stop offset="1" style={{ stopColor: '#f8c2ee' }} />
          </radialGradient>
          <radialGradient
            id="paint0_radial_57682_220"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(6.90625 28.0025) rotate(-90) scale(25.7679 23.9662)"
          >
            <stop style={{ stopColor: '#f6e7ad' }} />
            <stop offset="0.1" style={{ stopColor: '#f6e7ad' }} />
            <stop offset="0.5" style={{ stopColor: '#f3afa6' }} />
            <stop offset="1" style={{ stopColor: '#f59be3' }} />
          </radialGradient>
          <radialGradient
            id="paint0_radial_57682_229"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(6.90625 28.0025) rotate(-90) scale(25.7679 23.9662)"
          >
            <stop style={{ stopColor: '#f6e396' }} />
            <stop offset="0.1" style={{ stopColor: '#f6e396' }} />
            <stop offset="0.5" style={{ stopColor: '#f9a297' }} />
            <stop offset="1" style={{ stopColor: '#f789e1' }} />
          </radialGradient>
          <radialGradient
            id="paint0_radial_57682_226"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(6.90625 28.0025) rotate(-90) scale(25.7679 23.9662)"
          >
            <stop style={{ stopColor: '#fae075' }} />
            <stop offset="0.1" style={{ stopColor: '#fae075' }} />
            <stop offset="0.5" style={{ stopColor: '#fc7361' }} />
            <stop offset="1" style={{ stopColor: '#c74aae' }} />
          </radialGradient>
          <radialGradient
            id="paint0_radial_57682_221"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(6.90625 28.0025) rotate(-90) scale(25.7679 23.9662)"
          >
            <stop style={{ stopColor: '#FFDD55' }} />
            <stop offset="0.1" style={{ stopColor: '#FFDD55' }} />
            <stop offset="0.5" style={{ stopColor: '#FF543E' }} />
            <stop offset="1" style={{ stopColor: '#C837AB' }} />
          </radialGradient>
        </defs>
      </svg>
    </a>
  );
};

export default InstagramIcon;
