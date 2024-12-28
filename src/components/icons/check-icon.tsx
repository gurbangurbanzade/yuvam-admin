interface IProps {
  width?: string;
  height?: string;
  fill?: string;
}

const CheckIcon = ({
  width = "72",
  height = "72",
  fill = "#6750A4",
}: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.591 38.909C12.7123 38.0303 11.2877 38.0303 10.409 38.909C9.53033 39.7877 9.53033 41.2123 10.409 42.091L23.909 55.591C24.7877 56.4697 26.2123 56.4697 27.091 55.591L60.091 22.591C60.9697 21.7123 60.9697 20.2877 60.091 19.409C59.2123 18.5303 57.7877 18.5303 56.909 19.409L25.5 50.818L13.591 38.909Z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckIcon;
