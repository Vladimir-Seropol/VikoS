import IMG from "../../../public/Rectangle 45.png";
import s from "./style.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.css";
import MiniCard from "./miniCard";
import { useEffect, useState } from "react";
import Button_3 from "../Buttons/btn_3";
import FormComponent from "../Forms/FormComponent";
import { fieldsNameEmail } from "../Forms/fields";

function SlideNextButton() {
    const swiper = useSwiper();
    const [isLastSlide, setIsLastSlide] = useState(false);
    useEffect(() => {
        const handleSlideChange = () => {
            setIsLastSlide(swiper.isEnd);
        };
        swiper.on('slideChange', handleSlideChange);
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);
    const handleClick = () => {
        swiper.slideNext();
    };
    if (isLastSlide) return null;

    return (
        <Button_3 text="Следующий шаг" onClick={handleClick} />
    );
};


const PerfectCouple: React.FC = () => {

    const handleSubmit = (data: Record<string, string>) => {
        console.log('Данные формы:', data);
    };
    return (
        <section id="productSelection" className={s.container}>
            <div className={s.cont}>
                <Swiper className="myswiper">
                    <SwiperSlide>
                        <div>
                            <h2 className={s.h2}>
                                Мы подберем идеальную пару для вас
                            </h2>
                            <p className={s.p}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>
                        </div>
                        <div className={s.cont_2}>
                            <h3 className={s.h3}>Какой тип кроссовок рассматриваете?</h3>
                            <MiniCard />
                        </div>
                        <div className={s.btn}>
                            <span>1 из 3</span>
                            <SlideNextButton />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2 className={s.h2}>
                                Мы подберем идеальную пару для вас
                            </h2>
                            <p className={s.p}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>
                        </div>
                        <div className={s.cont_2}>
                            <h3 className={s.h3}>Какой размер вам подойдет?</h3>
                            <div className={s.inputs}>
                                <div>
                                    <label>
                                        <input type="checkbox" />
                                        <span></span>
                                        менее 36
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" />
                                        <span></span>
                                        36-38
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" />
                                        <span></span>
                                        39-41
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" />
                                        <span></span>
                                        42-44
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" />
                                        <span></span>
                                        45 и больше
                                    </label>
                                </div>
                            </div>
                            <div>
                                <img className={s.img} src={IMG} alt="" />
                            </div>

                        </div>
                        <div className={s.btn}>
                            <span>2 из 3</span>
                            <SlideNextButton />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2 className={s.h2}>
                                Мы подберем идеальную пару для вас
                            </h2>
                            <p className={s.p}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>
                        </div>
                        <div className={s.cont_2}>
                            <h3 className={s.h3}>Уточните какие-либо моменты</h3>
                            <div className={s.form}>
                                <textarea name="#" id="" placeholder="Введите сообщение"></textarea>
                            </div>

                        </div>
                        <div className={s.btn}>
                            <span>3 из 3</span>
                            <SlideNextButton />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2 className={s.h2}>
                                Ваша подборка готова!
                            </h2>
                            <p className={s.p_2}>Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог</p>
                        </div>
                        <div className={s.cont_3}>
                            <div className={s.form_2}>
                                <p className={s.text}>Получить предложение</p>
                                <p className={s.text_2}>Получите подборку подходящих для вас моделей на почту</p>
                                <FormComponent fields={fieldsNameEmail} onSubmit={handleSubmit} />                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section >
    );
}

export default PerfectCouple;