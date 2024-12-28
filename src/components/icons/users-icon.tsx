interface IProps {
  width?: string;
  height?: string;
  fill?: string;
}

const UsersIcon = ({ width = "24", height = "24", fill = "white" }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM17 12C18.6569 12 20 10.6569 20 9C20 7.34315 18.6569 6 17 6C15.3431 6 14 7.34315 14 9C14 10.6569 15.3431 12 17 12ZM4.25 14C3.00736 14 2 15.0074 2 16.25V16.5C2 16.5 2 21 8 21C14 21 14 16.5 14 16.5V16.25C14 15.0074 12.9926 14 11.75 14H4.25ZM17.0002 19.5C15.829 19.5 14.9321 19.3189 14.2453 19.0416C14.5873 18.4667 14.7719 17.9142 14.8724 17.4836C14.9328 17.2247 14.9645 17.0027 14.9813 16.8353C14.9897 16.7512 14.9944 16.68 14.997 16.6237C14.9983 16.5955 14.9991 16.5709 14.9996 16.5503L15.0001 16.5222L15.0002 16.5103L15.0002 16.505L15.0002 16.5024C15.0002 16.4992 15.0002 16.5 15.0002 16.5V16.25C15.0002 15.3779 14.6567 14.5861 14.0977 14.0023C14.1316 14.0008 14.1658 14 14.2002 14H19.8002C21.0152 14 22.0002 14.985 22.0002 16.2C22.0002 16.2 22.0002 19.5 17.0002 19.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default UsersIcon;
