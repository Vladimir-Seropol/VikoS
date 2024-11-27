import { Link } from "react-scroll";
import s from "./style.module.css";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <span className={s.span}>SneakMax</span>
                <nav className={s.nav}>
                    <Link to="catalog" className="menu">
                        Каталог
                    </Link>

                    <Link to="about" className="menu">
                        О нас
                    </Link>

                    <Link to="productSelection" className="menu">
                        Подбор товара
                    </Link>

                    <Link to="ourTeam" className="menu">
                        Наша команда
                    </Link>

                    <Link to="accordion" className="menu">
                        Доставка и оплата
                    </Link>

                    <Link to="contacts" className="menu">
                        Контакты
                    </Link>
                </nav>
            </div>

        </footer>
    );
}

export default Footer;