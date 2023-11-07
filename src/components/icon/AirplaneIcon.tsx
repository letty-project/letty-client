type Props = {
  width: string;
  height: string;
  fill: string;
};

const AirplaneIcon = ({ width, height, fill }: Props) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 76 59"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M73.3313 0.253105C75.2701 0.843053 75.8577 2.91241 74.579 4.4785C72.816 6.62452 71.0522 8.76279 69.2884 10.9011C67.5247 13.0393 65.7609 15.1776 63.9979 17.3236C58.4953 24.0175 52.992 30.7037 47.4886 37.3899C41.9852 44.076 36.4818 50.7622 30.9792 57.4561C29.729 58.9881 28.1664 59.2995 26.9167 58.2658C26.2587 57.7365 26.0302 57.0396 25.8872 56.2402C24.525 47.6458 23.1597 39.0204 21.8291 30.4229C21.7207 29.6514 21.3844 29.1528 20.8242 28.6452C17.584 25.6969 14.351 22.7401 11.118 19.7832C7.88489 16.8264 4.65181 13.8695 1.4116 10.9212C0.467362 10.0762 -0.041219 9.12535 0.410054 7.89164C0.861327 6.65792 1.83738 6.21695 3.10275 6.12274L3.47115 6.09129C26.0374 4.16453 48.6036 2.23778 71.1385 0.314135C71.3195 0.296188 71.5032 0.266297 71.6874 0.236325C72.2422 0.146081 72.8014 0.0551064 73.3028 0.287227L73.3313 0.253105ZM30.3777 49.9263C40.8182 37.2521 51.2006 24.614 61.6092 11.944L62.0987 11.3481C61.8086 11.3143 61.6254 11.3951 61.4422 11.4758L61.4422 11.4758C50.1729 17.3806 38.872 23.2884 27.5996 29.1622C27.0847 29.4323 27.0176 29.7206 27.1014 30.2442C27.606 33.4029 28.1098 36.554 28.6136 39.705C29.1169 42.8526 29.6201 46.0002 30.1242 49.1556C30.1282 49.1966 30.1306 49.2378 30.1329 49.2793C30.1445 49.4837 30.1565 49.6949 30.3777 49.9263ZM9.23622 10.7709C9.35563 11.139 9.57521 11.3088 9.78952 11.4746C9.82234 11.5 9.85503 11.5253 9.88723 11.5512L23.8707 24.3381C24.3616 24.7901 24.718 24.8486 25.3246 24.5381C32.3367 20.8423 39.3639 17.1698 46.3879 13.499C50.4972 11.3514 54.6055 9.20441 58.7091 7.05358C58.7711 7.01887 58.8353 6.98884 58.9003 6.9584C59.1201 6.85546 59.3497 6.7479 59.5405 6.43921C42.7303 7.88729 25.9833 9.32912 9.23622 10.7709Z"
          fill={fill}
        />
        <path
          d="M73.3313 0.253105C75.2701 0.843053 75.8577 2.91241 74.579 4.4785C72.816 6.62452 71.0522 8.76279 69.2884 10.9011C67.5247 13.0393 65.7609 15.1776 63.9979 17.3236C58.4953 24.0175 52.992 30.7037 47.4886 37.3899C41.9852 44.076 36.4818 50.7622 30.9792 57.4561C29.729 58.9881 28.1664 59.2995 26.9167 58.2658C26.2587 57.7365 26.0302 57.0396 25.8872 56.2402C24.525 47.6458 23.1597 39.0204 21.8291 30.4229C21.7207 29.6514 21.3844 29.1528 20.8242 28.6452C17.584 25.6969 14.351 22.7401 11.118 19.7832C7.88489 16.8264 4.65181 13.8695 1.4116 10.9212C0.467362 10.0762 -0.041219 9.12535 0.410054 7.89164C0.861327 6.65792 1.83738 6.21695 3.10275 6.12274L3.47115 6.09129C26.0374 4.16453 48.6036 2.23778 71.1385 0.314135C71.3195 0.296188 71.5032 0.266297 71.6874 0.236325C72.2422 0.146081 72.8014 0.0551064 73.3028 0.287227L73.3313 0.253105ZM30.3777 49.9263C40.8182 37.2521 51.2006 24.614 61.6092 11.944L62.0987 11.3481C61.8086 11.3143 61.6254 11.3951 61.4422 11.4758L61.4422 11.4758C50.1729 17.3806 38.872 23.2884 27.5996 29.1622C27.0847 29.4323 27.0176 29.7206 27.1014 30.2442C27.606 33.4029 28.1098 36.554 28.6136 39.705C29.1169 42.8526 29.6201 46.0002 30.1242 49.1556C30.1282 49.1966 30.1306 49.2378 30.1329 49.2793C30.1445 49.4837 30.1565 49.6949 30.3777 49.9263ZM9.23622 10.7709C9.35563 11.139 9.57521 11.3088 9.78952 11.4746C9.82234 11.5 9.85503 11.5253 9.88723 11.5512L23.8707 24.3381C24.3616 24.7901 24.718 24.8486 25.3246 24.5381C32.3367 20.8423 39.3639 17.1698 46.3879 13.499C50.4972 11.3514 54.6055 9.20441 58.7091 7.05358C58.7711 7.01887 58.8353 6.98884 58.9003 6.9584C59.1201 6.85546 59.3497 6.7479 59.5405 6.43921C42.7303 7.88729 25.9833 9.32912 9.23622 10.7709Z"
          stroke="none"
        />
      </svg>
    </>
  );
};
export default AirplaneIcon;
