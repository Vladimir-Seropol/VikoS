export interface FormField {
    name: string; // имя поля, используемое в качестве ключа
    label: string; // отображаемая метка для поля
    type: string; // тип поля (text, email, tel и т.д.)
    placeholder: string; // текст подсказки для ввода
    required?: boolean; // флаг для обязательных полей
    options?: string[]; // для выпадающих списков или радио-кнопок
    validationPattern?: string; // шаблон для регулярного выражения валидации
    errorMessage?: string; // сообщение об ошибке при неверном вводе
}
