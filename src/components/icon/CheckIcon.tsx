type Props = {
  width: string;
  height: string;
  fill: string;
};

const CheckIcon = ({ width, height, fill }: Props) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 33 34"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16.0769" cy="17" r="16.0769" fill="#15A091" />
        <path
          d="M8.65723 15.5522L14.6046 24.4201L22.8791 11.4349"
          stroke="white"
          stroke-width="3.09172"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default CheckIcon;
