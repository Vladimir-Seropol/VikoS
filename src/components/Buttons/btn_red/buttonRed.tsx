import React from "react";
import s from "./style.module.css";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const ButtonRed: React.FC<ButtonProps> = ({text, onClick, disabled = false, type = "button"  }) => {
    return (
        <button className={s.button} onClick={onClick} disabled={disabled} type={type}>
        {text}
    </button>
    );
};

export default ButtonRed;