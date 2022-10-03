import * as React from "react";

function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  const { color } = props;
  return (
    <svg width={24} height={23} fill="inherit" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24 5.6c0-.88-.771-1.6-1.714-1.6H1.714C.771 4 0 4.72 0 5.6V8h24V5.6zM0 18.5c0 .825.771 1.5 1.714 1.5h20.572c.943 0 1.714-.675 1.714-1.5V11H0v7.5zm7.607-2.25h8.786c.412 0 .75.295.75.656 0 .361-.338.657-.75.657H7.607c-.412 0-.75-.296-.75-.657 0-.36.338-.656.75-.656zm-3.857 0h.643c.412 0 .75.295.75.656 0 .361-.338.657-.75.657H3.75c-.413 0-.75-.296-.75-.657 0-.36.337-.656.75-.656z"
        fill={color}
      />
    </svg>
  );
}

export default WalletIcon;
