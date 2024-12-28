interface IProps {
  width?: string;
  height?: string;
  fill?: string;
}

const CloseIcon = ({
  width = "19",
  height = "18",
  fill = "#6750A4",
}: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.75 4.8075L13.6925 3.75L9.5 7.9425L5.3075 3.75L4.25 4.8075L8.4425 9L4.25 13.1925L5.3075 14.25L9.5 10.0575L13.6925 14.25L14.75 13.1925L10.5575 9L14.75 4.8075Z"
        fill={fill}
      />
    </svg>
  );
};

export default CloseIcon;
