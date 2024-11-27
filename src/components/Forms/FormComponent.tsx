import React from 'react';
import { FormField } from './types';
import ButtonRed from '../Buttons/btn_red/buttonRed';
import s from "./style.module.css"

interface FormComponentProps {
    fields: FormField[];
    onSubmit: (data: Record<string, string>) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ fields, onSubmit }) => {
    const [formData, setFormData] = React.useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    // Добавим проверку на случай, если fields пустой или undefined
    if (!fields || fields.length === 0) {
        return <div>Нет доступных полей для отображения формы.</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.name} className={s.div}>
                    <label>
                        {field.label}
                        <input className={s.input}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            ))}
            <ButtonRed type="submit" text="Отправить" />
        </form>
    );
};

export default FormComponent;
