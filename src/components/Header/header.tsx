import { FC, useState } from "react";
import BURGER from "../../../public/burger.png";
import ButtonRed from "../Buttons/btn_red/buttonRed";
import s from "./style.module.css"
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


interface IProps {
    isOpen: boolean;
    setIsOpen: () => void;
    setIsBasketOpen: () => void;
}
const Header: FC<IProps> = ({ setIsOpen, setIsBasketOpen }) => {
    const basketLength = useSelector<RootState, number>(
        (state) => state.basket.data.length);


    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <header className={s.header} onClick={() => setIsOpen()}>
            <div className={s.container}>
                <Link to="/"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="menu">
                    <span className={s.span}>SneakMax</span>
                </Link>


                <nav className={`${s.nav} ${menuOpen ? s.active : ''}`}>
                    <Link to="catalog"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="menu">
                        Каталог
                    </Link>

                    <Link to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="menu">
                        О нас
                    </Link>

                    <Link to="productSelection"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="menu">
                        Подбор товара
                    </Link>

                    <Link to="ourTeam"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="menu">
                        Наша команда
                    </Link>

                    <Link to="accordion"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="menu">
                        Доставка и оплата
                    </Link>

                    <Link to="contacts"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="menu">
                        Контакты
                    </Link>
                    <button onClick={() => setIsBasketOpen()} className={s.btn_basket}>
                        Корзина <img src="./icons/basket.svg" alt="корзина" />
                        <span className={s.circle}>{basketLength}</span>
                    </button>
                </nav>
                <button className={s.btn_burger} onClick={toggleMenu}>
                    <img src={BURGER} alt="burger" className={s.burger} />
                </button>
            </div>
            <main className={s.cont_2}>
            <div className={s.main}>
                <div className={s.container_main}>
                    <h1 className={s.h1}>
                        Кроссовки известных брендов
                        с доставкой по России и СНГ
                    </h1>
                    <p className={s.paragraph}>Мы продаем кроссовки брендов Nike,
                        Adidas, Puma, Reebok, Converse и
                        многие другие по низким ценам
                    </p>
                    <div className={s.cont_span}>
                        <span className={s.span_back}>
                            SneakMax
                        </span>
                    </div>
                    <div className={s.btn_red}>
                        <Link to="catalog">
                            <ButtonRed
                                text="Перейти к покупкам" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>


        </header>
    );
}

export default Header;
