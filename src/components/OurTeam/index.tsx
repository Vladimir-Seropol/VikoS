// import TEAM from "../../../public/Team.png";
import TeamCardS from "../WholeTeam";
import s from "./style.module.css"


const OurTeam = () => {
    return (
        <section id="ourTeam" className={s.section}>
            <div className={s.cont_h2}>
                <h2 className={s.h2}>
                    Наша команда
                </h2>
            </div>
            <div className={s.cards}>
                <TeamCardS />
            </div>
        </section>
    );
}

export default OurTeam;