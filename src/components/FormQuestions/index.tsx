import IMG1 from "../../../public/form1.png";
import IMG2 from "../../../public/form2.png";
import IMG3 from "../../../public/form3.png";
import IMG4 from "../../../public/form4.png";
import IMG5 from "../../../public/form5.png";
import IN from "../../../public/in.png";
import { fieldsNamePhone } from "../Forms/fields";
import FormComponent from "../Forms/FormComponent";

import s from "./style.module.css";


const FormQuestion = () => {

    const handleSubmit = (data: Record<string, string>) => {
        console.log('Данные формы:', data);
    };


    return (
        <section className={s.section}>
            <div className={s.form}>
                <h2 className={s.h2}>Есть вопросы?</h2>
                <p className={s.paragraph}>Заполните форму и наш менеджер свяжется с вами</p>
                <FormComponent fields={fieldsNamePhone} onSubmit={handleSubmit}  />
            </div>
            <div className={s.img_cont}>
                <div className={s.in}>
                    <img src={IN} alt="" />
                </div>
                <div className={s.img}>

                    <div className={s.cont_1}>
                        <img src={IMG1} />
                        <img src={IMG2} />
                    </div>
                    <img src={IMG3} className={s.cont_2} />
                    <div className={s.cont_3}>
                        <img src={IMG4} />
                        <img src={IMG5} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormQuestion;