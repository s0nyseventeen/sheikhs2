import { useState } from "react";

interface LogoColor {
  color: string;
}

export default function Logo({ color }: LogoColor) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="block" role="button">
      <svg
        width="80"
        height="29"
        viewBox="0 0 80 29"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: isHovered ? "url(#gradient)" : color }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
            <stop offset="0%" stopColor="#FF0F9F" />
            <stop offset="100%" stopColor="#913AFF" />
          </linearGradient>
        </defs>
        <g clipPath="url(#clip0_191_236)">
          <path d="M22.9574 1.13H19.5875V11.175H16.2527V1.13H12.8828V27.87H16.2527V14.5H19.5875V27.87H22.9574V1.13Z" />
          <path d="M40.5441 1.13H37.2093V27.87H40.5441V1.13Z" />
          <path d="M34.5415 1.13H33.2427H26.1518V27.87H33.2427H34.5415V24.51H33.2427H29.5217V14.5H33.2427V11.175H29.5217V4.49H33.2427H34.5415V1.13Z" />
          <path d="M5.01975 0.744995C4.77402 0.744995 4.56341 0.779995 4.31768 0.779995C3.96665 0.814995 3.65072 0.919995 3.3348 1.025C3.19438 1.06 3.08907 1.095 2.98376 1.165C1.57964 1.795 0.526547 3.01999 0.140412 4.48999C0.0702062 4.90999 0 5.32999 0 5.74999V9.80999C0 10.195 0.0351031 10.58 0.140412 10.965C0.175516 11.035 0.175516 11.105 0.210619 11.175C0.245722 11.35 0.315928 11.49 0.386134 11.63C0.491444 11.875 0.596753 12.085 0.702062 12.295C0.772269 12.435 0.877578 12.575 0.982887 12.715C0.982887 12.75 1.01799 12.75 1.05309 12.785C1.64985 13.555 2.45722 14.15 3.3699 14.5C3.89645 14.675 4.4581 14.78 5.01975 14.78C5.79201 14.78 6.45897 15.27 6.7047 15.97C6.7749 16.145 6.81 16.355 6.81 16.53V23.04C6.81 23.25 6.7749 23.425 6.7047 23.6C6.56428 23.95 6.31856 24.265 6.00263 24.51C5.89732 24.58 5.82712 24.615 5.72181 24.65C5.51119 24.755 5.26547 24.79 5.01975 24.79C4.77402 24.79 4.5283 24.72 4.31768 24.65C4.21237 24.615 4.10706 24.545 4.03686 24.51C3.72093 24.3 3.47521 23.985 3.3348 23.6C3.26459 23.425 3.22949 23.215 3.22949 23.04V17.895H0V23.25C0 23.705 0.0702062 24.125 0.175516 24.58C0.596753 26.085 1.72005 27.345 3.15928 27.905C3.72093 28.15 4.35279 28.255 5.01975 28.255C5.6867 28.255 6.31856 28.115 6.88021 27.905C8.31944 27.31 9.44274 26.085 9.86398 24.58C9.96929 24.16 10.0395 23.705 10.0395 23.25V15.69C10.0395 15.305 10.0044 14.92 9.89908 14.535C9.86398 14.465 9.86398 14.395 9.82887 14.325C9.79377 14.15 9.72356 14.01 9.65336 13.87C9.54805 13.625 9.44274 13.415 9.33743 13.205C9.26722 13.065 9.16191 12.925 9.0566 12.785C9.0566 12.75 9.0215 12.75 8.9864 12.715C8.38964 11.945 7.58227 11.35 6.66959 11C6.14305 10.825 5.5814 10.72 5.01975 10.72C4.24748 10.72 3.58052 10.23 3.3348 9.52999C3.26459 9.35499 3.22949 9.14499 3.22949 8.96999V5.95999C3.22949 5.74999 3.26459 5.57499 3.3348 5.39999C3.44011 5.04999 3.65072 4.76999 3.93155 4.55999C4.24748 4.315 4.59851 4.21 5.01975 4.21C5.44098 4.21 5.79201 4.34999 6.10794 4.55999C6.17815 4.595 6.24835 4.66499 6.28346 4.69999C6.45897 4.87499 6.63449 5.11999 6.7047 5.36499C6.7749 5.53999 6.81 5.74999 6.81 5.92499V7.63999H10.0746V5.74999C10.0746 5.32999 10.0044 4.90999 9.93418 4.52499C9.68846 3.64999 9.23212 2.845 8.60026 2.215C8.17903 1.795 7.65248 1.445 7.09083 1.165C6.98552 1.095 6.84511 1.06 6.7398 1.025C6.42387 0.919995 6.10794 0.849995 5.75691 0.779995C5.51119 0.779995 5.26547 0.744995 5.01975 0.744995Z" />
          <path d="M66.8714 1.13H63.5015V11.175H60.1667V1.13H56.7968V27.87H60.1667V14.5H63.5015V27.87H66.8714V1.13Z" />
          <path d="M74.9803 0.744995C74.7345 0.744995 74.5239 0.779995 74.2782 0.779995C73.9272 0.814995 73.6112 0.919995 73.2953 1.025C73.19 1.06 73.0496 1.095 72.9443 1.165C71.5401 1.795 70.487 3.01999 70.1009 4.48999C69.9956 4.87499 69.9605 5.29499 69.9605 5.71499V9.77499C69.9605 10.16 69.9956 10.545 70.1009 10.93C70.136 11 70.136 11.07 70.1711 11.175C70.2062 11.35 70.2764 11.49 70.3466 11.63C70.4519 11.875 70.5573 12.085 70.6626 12.295C70.7328 12.435 70.8381 12.575 70.9434 12.715C70.9785 12.75 70.9785 12.75 71.0136 12.785C71.6104 13.555 72.4177 14.15 73.3304 14.5C73.8569 14.675 74.4186 14.78 74.9803 14.78C75.7525 14.78 76.4195 15.27 76.6652 15.97C76.7354 16.145 76.7705 16.355 76.7705 16.53V23.04C76.7705 23.25 76.7354 23.425 76.6652 23.6C76.5248 23.985 76.2791 24.265 75.9631 24.51C75.8578 24.58 75.7876 24.615 75.6823 24.65C75.4717 24.755 75.226 24.79 74.9803 24.79C74.7345 24.79 74.4888 24.72 74.2782 24.65C74.1729 24.615 74.0676 24.545 73.9974 24.51C73.6814 24.3 73.4357 23.985 73.2953 23.6C73.2251 23.425 73.19 23.215 73.19 23.04V17.895H69.9254V23.25C69.9254 23.705 69.9956 24.16 70.1009 24.58C70.5222 26.12 71.6455 27.345 73.0847 27.905C73.6463 28.15 74.2782 28.255 74.9451 28.255C75.6121 28.255 76.244 28.115 76.8056 27.905C78.2448 27.31 79.3681 26.085 79.7894 24.58C79.8947 24.16 79.9649 23.74 79.9649 23.25V15.69C79.9649 15.305 79.9298 14.92 79.8245 14.535C79.7894 14.465 79.7543 14.395 79.7543 14.29C79.7192 14.115 79.649 13.975 79.5788 13.835C79.4734 13.59 79.3681 13.38 79.2628 13.17C79.1926 13.03 79.0873 12.89 78.982 12.75C78.9469 12.715 78.9469 12.715 78.9118 12.68C78.315 11.91 77.5077 11.315 76.595 10.965C76.0684 10.79 75.5068 10.685 74.9451 10.685C74.1729 10.685 73.5059 10.195 73.2602 9.49499C73.19 9.31999 73.1549 9.10999 73.1549 8.93499V5.92499C73.1549 5.71499 73.19 5.53999 73.2602 5.36499C73.3655 5.04999 73.5761 4.73499 73.8569 4.52499C74.1729 4.27999 74.5239 4.17499 74.9451 4.17499C75.3664 4.17499 75.7174 4.31499 76.0333 4.52499C76.1036 4.55999 76.1738 4.62999 76.2089 4.66499C76.3844 4.83999 76.5248 5.08499 76.6301 5.32999C76.7003 5.50499 76.7354 5.71499 76.7354 5.88999V7.60499H80V5.74999C80 5.32999 79.9298 4.90999 79.8596 4.52499C79.6139 3.64999 79.1575 2.845 78.5257 2.215C78.1044 1.795 77.5779 1.445 77.0162 1.165C76.9109 1.095 76.7705 1.06 76.6652 1.025C76.3493 0.919995 76.0333 0.849995 75.6823 0.779995C75.4717 0.779995 75.226 0.744995 74.9803 0.744995Z" />
          <path d="M53.9184 1.13H50.5836V7.85001C50.5836 7.85001 50.5836 7.88501 50.5836 7.92001C50.5485 9.70501 49.0742 11.175 47.2839 11.175H47.2488V1.13H43.8789V27.835H47.2137V14.85H47.2488C48.9688 14.85 50.373 16.145 50.5485 17.825V27.345V27.835H53.8833V18.14C53.8833 18.035 53.8833 17.965 53.8833 17.86C53.8482 17.44 53.778 17.02 53.6727 16.635C53.3918 15.585 52.6547 14.64 52.5494 14.535C51.8473 13.66 51.075 13.135 50.5485 12.855C51.9526 12.505 52.9706 11.84 53.3567 11.175C53.5322 10.895 53.6376 10.545 53.6376 10.545C53.778 10.16 53.8482 9.74001 53.8482 9.32001V1.13H53.9184Z" />
        </g>
      </svg>
    </span>
  );
}
