import { FC, useEffect, useState } from "react";
import s from "./style.module.css";
import { Team } from "../types/teams";
import CardTeam from "../oneTeam";


const TeamCardS: FC = () => {
    const [items, setItems] = useState<Team[]>([]);

    const fetchTeam = async () => {
        try {
            const response = await fetch("https://40d0dfd8940e86b7.mokky.dev/Cards_team");

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
        }
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    return (
        <div>
            <div className={s.cards}>
                {items.map(item => (
                    <CardTeam key={item.id} card={item} />
                ))}
            </div>

        </div>
    );
};

export default TeamCardS;