import * as React from "react";

function ProfileIcon(props: React.SVGProps<SVGSVGElement>) {
  const { color } = props;
  return (
    <svg width={16} height={17} fill="inherit" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 8.5c2.2 0 4-1.913 4-4.25C12 1.913 10.2 0 8 0S4 1.913 4 4.25C4 6.587 5.8 8.5 8 8.5zm0 2.125c-2.65 0-8 1.434-8 4.25V15a2 2 0 002 2h12a2 2 0 002-2v-.125c0-2.816-5.35-4.25-8-4.25z"
        fill={color}
      />
    </svg>
  );
}

export default ProfileIcon;
