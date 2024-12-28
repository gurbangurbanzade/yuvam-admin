import React from "react";

interface IProps {
  width?: string;
  height?: string;
  fill?: string;
}

const PendingUserIcon: React.FC<IProps> = ({
  width = "18",
  height = "18",
  fill = "#6750A4",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.5 6C10.5 5.175 9.825 4.5 9 4.5C8.175 4.5 7.5 5.175 7.5 6C7.5 6.825 8.175 7.5 9 7.5C9.825 7.5 10.5 6.825 10.5 6ZM13.5 12.75C13.35 12.2175 11.025 11.25 9 11.25C6.975 11.25 4.65 12.2175 4.5 12.7575V13.5H13.5V12.75ZM3 12.75C3 10.755 6.9975 9.75 9 9.75C11.0025 9.75 15 10.755 15 12.75V15H3V12.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default PendingUserIcon;
