import * as React from "react";

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  const { color } = props;
  return (
    <svg width={24} height={23} fill="inherit" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.49 3.256a1 1 0 00-1.18 0l-7.15 5.23a1 1 0 00-.41.808v9.471a1 1 0 001 1h3.607a1 1 0 001-1v-4.627a1 1 0 011-1h3.086a1 1 0 011 1v4.627a1 1 0 001 1h3.608a1 1 0 001-1V9.294a1 1 0 00-.41-.807l-7.15-5.23z"
        fill={color}
      />
    </svg>
  );
}

export default HomeIcon;
