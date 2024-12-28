import React from "react";

interface IProps {
  width?: string;
  height?: string;
  fill?: string;
}

const CompletedRegistrationsIcon: React.FC<IProps> = ({
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
        d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM13.77 12.6225C12.6975 11.3175 10.095 10.875 9 10.875C7.905 10.875 5.3025 11.3175 4.23 12.6225C3.465 11.6175 3 10.365 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 10.365 14.535 11.6175 13.77 12.6225ZM6.375 7.125C6.375 5.67 7.545 4.5 9 4.5C10.455 4.5 11.625 5.67 11.625 7.125C11.625 8.58 10.455 9.75 9 9.75C7.545 9.75 6.375 8.58 6.375 7.125Z"
        fill={fill}
      />
    </svg>
  );
};

export default CompletedRegistrationsIcon;