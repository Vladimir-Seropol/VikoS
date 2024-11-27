import Contacts from "./Phone_address/contacts";
import YandexMap from "./Yandex map/map";
import s from "./style.module.css";


const OurContacts = () => {
    return (
        <section className={s.section} id="contacts">
            <div className={s.container}>
                <Contacts />
                <YandexMap />
            </div>
        </section>
    );
}

export default OurContacts;