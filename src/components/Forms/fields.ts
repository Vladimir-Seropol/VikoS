import { FormField } from './types';

export const fieldsFull: FormField[] = [
    { name: 'name', label: '', type: 'text', required: true, placeholder: 'Ваше имя' },
    { name: 'phone', label: '', type: 'tel', required: true, placeholder: 'Номер телефона' },
    { name: 'email', label: '', type: 'email', required: true, placeholder: 'E-mail' },
];

export const fieldsNamePhone: FormField[] = [
    { name: 'name', label: '', type: 'text', required: true, placeholder: 'Ваше имя' },
    { name: 'phone', label: '', type: 'tel', required: true, placeholder: 'Номер телефона' },
];

export const fieldsNameEmail: FormField[] = [
    { name: 'name', label: '', type: 'text', required: true, placeholder: 'Ваше имя' },
    { name: 'email', label: '', type: 'email', required: true, placeholder: 'E-mail' },
];
