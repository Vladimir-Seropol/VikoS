import krest from "../../../../public/krest.png";
import plus from "../../../../public/+.png";
import s from "./style.module.css";
interface List_FAQsProps {
    name: string;
    question?: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const List_FAQs: React.FC<List_FAQsProps> = ({
    name,  answer, isOpen, onToggle }) =>{
        return(
            <div className={s.container}>
                <span className={s.content} onClick={onToggle}>
                    <p>{name}</p>
                    <img src={isOpen ? krest : plus} alt="toggle icon" className={s.img}/>
                    </span>
                    {isOpen && (
                        <div className={s.div}>
                            <p className={s.answer}>{answer}</p>
                        </div>
                    )}


            </div>
        )
    }
export default List_FAQs;
