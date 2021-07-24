import React from "react";
import { Link } from "react-router-dom";
import "../../css/Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path,
  icon,
}: {
  children?: any;
  type?: any;
  onClick?: any;
  buttonStyle?: any;
  buttonSize?: any;
  path?: any;
  icon?: string;
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={path} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {icon && <i className={icon} />}
        {children}
      </button>
    </Link>
  );
};
