import LINE from "../../../public/Line.png";
import IMG from "../../../public/about.png";
import s from "./style.module.css";


const About = () => {
    return (
        <section id="about" className={s.section}>
            <div className={s.container}>
                <div className={s.content}>
                    <h2 className={s.h2}>Пара слов о нас</h2>
                    <p className={s.paragraph}>Спорт держит нас в форме. Учит дисциплине. Объединяет нас.
                        Через спорт мы можем менять жизни. В том числе с
                        помощью воодушевляющих историй спортсменов.
                        Чтобы помочь тебе подняться и двигаться вперед.
                    </p>
                    <span className={s.span}>
                        SneakMax
                        <img src={LINE} />
                    </span>
                </div>
                <img src={IMG} className={s.img}/>

            </div>
        </section>
    );
}

export default About;