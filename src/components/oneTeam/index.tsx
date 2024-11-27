import { FC } from "react";
import s from "./style.module.css"
import { Team } from "../types/teams";

type Props = {
    card: Team;
};

const CardTeam: FC<Props> = ({ card }) => {
    return (
        <div className={s.container}>

            {card.imgUrl && <img src={card.imgUrl} alt={card.name} className={s.img} />}
            <p className="paragraph">{card.name} </p>
            <p className="price">{card.role}</p>
        </div>
    );
}

export default CardTeam;