import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List_FAQs from './list_faqs/List_FAQs.tsx';
import s from "./style.module.css";

interface FAQ {

    id: number;
    name: string;
    question: string;
    answer: string;
}

const Accordion: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get<FAQ[]>('https://544217b57cf9969b.mokky.dev/faqs_List');
      setFaqs(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={s.section} id='accordion'>
      <h2>Часто задаваемые вопросы</h2>
      {faqs.map((faq: FAQ) => (
        <List_FAQs
          key={faq.id} 
          name={faq.name} 
          question={faq.question} 
          answer={faq.answer} 
          isOpen={openIndex === faq.id} 
          onToggle={() => toggleAccordion(faq.id)}
        />
      ))}
    </section>
  );
};

export default Accordion;
