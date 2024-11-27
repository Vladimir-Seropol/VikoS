import s from "./style.module.css";
// import WTF from "../../../../public/Wath.png"

interface Contact {
  address: string;
  phoneNumber: string;
}
const ContactCard: React.FC<{ contact: Contact; title: string }> = ({ contact, title }) => {
  const yandexMapsLink = `https://yandex.ru/maps/?text=${encodeURIComponent(contact.address)}`;

  return (
    <div>
      <p className={s.title}>{title}</p>
      <p>
        <a href={"tel:${contact.phoneNumber}"} className={s.aTel}>
          {contact.phoneNumber}</a>
      </p>
      <p>
        <a href={yandexMapsLink} target="_blank" rel="noopener noreferrer" className={s.add}>
          {contact.address}
          {title === "Главный офис" && (
              <span className={s.circli}>?
              <span className={s.tooltip}>Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке, 
              качестве обслуживания и товара просьба задавать в отдел продаж</span></span>
          )}
        </a>
      </p>
    </div>
  );
};

const Contacts: React.FC = () => {
  const mainOffice: Contact = {
    phoneNumber: '+7 800 789 89 89',
    address: 'г. Санкт-Петербург, Комсомольская, 43к1',
  };



  const salesDepartment: Contact = {
    phoneNumber: '+7 800 789 89 89',
    address: 'г. Санкт-Петербург, Комсомольская, 43 к1',
  };

  return (
    <div>
      <ContactCard contact={mainOffice} title="Главный офис" />
      <ContactCard contact={salesDepartment} title="Отдел продаж" />

    </div>
  );
};


export default Contacts;
