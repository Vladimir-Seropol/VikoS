import React from "react";
import s from "./style.module.css";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const Button_3: React.FC<ButtonProps> = ({text, onClick, disabled = false, type = "button"  }) => {
    return (
        <button className={s.button} onClick={onClick} disabled={disabled} type={type}>
        {text}
    </button>
    );
};

export default Button_3;