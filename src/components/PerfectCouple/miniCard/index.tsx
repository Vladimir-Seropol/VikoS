import FK from "../../../../public/fotoKr.png";
import s from "./style.module.css";

const MiniCard = () => {
    return (
        <div className={s.container}>
            <div className={s.cont}>
                <img src={FK} className={s.img} alt="кеды" />
                <label>
                    <input type="checkbox" />
                    <span></span>
                    кеды
                </label>
            </div>
            <div className={s.cont}>
                <img src={FK} className={s.img}/>
                <label>
                    <input type="checkbox" />
                    <span></span>
                    кеды
                </label>
            </div>
            <div className={s.cont}>
                <img src={FK} className={s.img} />
                <label>
                    <input type="checkbox" />
                    <span></span>
                    кеды
                </label>
            </div>
            <div className={s.cont}> 
                <img src={FK} className={s.img} />
                <label>
                    <input type="checkbox" />
                    <span></span>
                    кеды
                </label>
            </div>
            <div className={s.cont}>
                <img src={FK} className={s.img}/>
                <label>
                    <input type="checkbox" />
                    <span></span>
                    кеды
                </label>
            </div>
            <div className={s.cont}>
                <img src={FK} className={s.img}/>
                <label>
                    <input type="checkbox" />
                    <span></span>
                    кеды
                </label>
            </div>

        </div>

    );
}

export default MiniCard;