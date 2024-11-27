import IMG from "../../../../public/cardOne.png"
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { ISneakers } from "../../../slices/sneakersSlice";
import { postBasket } from "../../../slices/basketSlice"; 
import s from "./style.module.css";
import StarRating from "./StarRating";
import ButtonRed from "../../Buttons/btn_red/buttonRed";
import { AppDispatch } from "../../../store";

interface ModalProductPageProps {
    sneaker: ISneakers;
  }

  const ModalProductPage: FC<ModalProductPageProps> = ({ sneaker }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
    if (!sneaker) return <p>Загрузка...</p>;
  
    const handleSizeChange = (size: number) => {
      setSelectedSize(size);
    };
  
    const handleOrder = () => {
      if (selectedSize) {
        const itemWithSize = { ...sneaker, selectedSize };
        dispatch(postBasket(itemWithSize));
        alert(`Товар с размером ${selectedSize} добавлен в корзину!`);
      } else {  
        alert("Пожалуйста, выберите размер.");
      }
    };

    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.cont_1}>
                    <div className={s.img}>
                        <img src={sneaker.imgUrl} alt={sneaker.title} />
                    </div>
                    <div className={s.description_1}>
                        <div className={s.productInfo}>
                            <p className="paragraph">Артикул: {sneaker.vendorСode}</p>
                            <span className="paragraph">В наличии: <p className={s.number}>{sneaker.inStock}шт</p></span>
                        </div>
                        <div>
                            <p className={s.gen_tit}>{sneaker.gender} {sneaker.title}</p>
                        </div>
                        <div className={s.stars}>
                            <StarRating stars={sneaker.stars} />
                        </div>
                        <div className={s.sizes}>
                            <p className="paragraph">Выберите размер:</p>
                            <div className={s.size}>
                                {sneaker.sizes.map((size) => (
                                    <label key={size} className={s.sizeOption}>
                                        <input
                                            type="radio"
                                            name="size"
                                            value={size}
                                            checked={selectedSize === size}
                                            onChange={() => handleSizeChange(size)}
                                            className={s.hiddenRadio} // класс для скрытия стандартной радиокнопки
                                        />
                                        <span className={s.customRadio}>{size}</span> {/* Кастомный элемент */}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className={s.price}>
                            <h2>{sneaker.price}</h2>
                            <p className="paragraph">{sneaker.oldPrice}</p>
                        </div>
                        <div className={s.btn_red}>
                            <ButtonRed onClick={handleOrder} text="Заказать" />
                        </div>
                        <div className={s.menu}>
                            <p className="menu"><img src={IMG} /> Бесплатная доставка до двери</p>
                            <p className="menu"><img src={IMG} /> Оплата заказа при получении</p>
                            <p className="menu"><img src={IMG} /> Обмен в течении двух недель</p>
                        </div>
                    </div>
                </div>
                <div className={s.cont_2}>
                    <div className={s.description_snk}>
                        <h3>Описание</h3>
                        <p className={s.des_snek}>{sneaker.description}</p>
                    </div>
                    <div className={s.description_snks}>
                        <h3>Характеристики</h3>
                        <span className={s.p}>
                            <p className="paragraph">Пол: {sneaker.gender}</p>
                            <p className="paragraph">Цвета: {sneaker.color}</p>
                            <p className="paragraph">Состав: {sneaker.compound}</p>
                            <p className="paragraph">Страна: {sneaker.country}</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModalProductPage;
