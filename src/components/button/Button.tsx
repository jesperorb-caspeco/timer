import React, { SFC, ReactNode } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  children: ReactNode;
  onClick: any;
}

const Button: SFC<IButtonProps> = ({ children, onClick }): JSX.Element => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
