import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="px-3 py-2 rounded-md bg-blue-200">{children}</div>;
};

export default Alert;
