import { ReactNode } from "react";

interface Props {

    // children is a special prop that all components support. It's a way of passing data from parent to child
    // children: string;

    // if we want to pass HTML content, we can use ReactNode
    children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert