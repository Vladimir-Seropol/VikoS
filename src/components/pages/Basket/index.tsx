import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasket, delBasket } from '../../../slices/basketSlice';
import { AppDispatch } from '../../../store';
import { ISneakers } from '../../../slices/sneakersSlice';
import s from "./style.module.css";
import FormComponent from '../../Forms/FormComponent';
import { fieldsFull } from '../../Forms/fields';
import Button_3 from '../../Buttons/btn_3';
import { Link } from 'react-router-dom';

const Basket: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const basketItems = useSelector((state: { basket: { data: ISneakers[] } }) => state.basket.data);
    const [orderNumber] = useState(Math.floor(Math.random() * 10000));

    const handleSubmit = (data: Record<string, string>) => {
        console.log('Данные формы:', data);
    };

    const handleCancelOrder = () => {
        // Действия для отмены заказа: можно очистить корзину или просто показать сообщение
        basketItems.forEach((item: ISneakers) => dispatch(delBasket(item.id)));
        console.log('Заказ отменен');
    };

    useEffect(() => {
        dispatch(fetchBasket());
    }, [dispatch]);

    const handleRemoveItem = (id: number) => {
        dispatch(delBasket(id));
    };

    const totalPrice = basketItems.reduce((total: number, item: { price: number; }) => total + item.price, 0);
    const totalCount = basketItems.length;

    return (
        <section>
            <div className={s.section}>
                <div className={s.container}>
                    <div className={s.cont}>
                        <p className={s.p}>Оформление заказа</p>
                        <p className={s.orderNumber}>Номер заказа: {orderNumber}</p>
                    </div>
                    <div className={s.container_2}>
                        {basketItems.length === 0 ? (
                            <p className={s.basket_void}>Ваша корзина пуста</p>
                        ) : (
                            <div className={s.container_3}>
                                <div className={s.container_4}>
                                    <div className={s.total}>Товаров в заказе :
                                        <p className={s.totalPrice}>{totalCount} шт</p>
                                    </div>
                                    <div className={s.total}>Общая сумма заказа:
                                        <p className={s.totalPrice}>{totalPrice} ₽</p>
                                    </div>
                                    <div className={s.orderDetails}>
                                        Состав заказа
                                    </div>
                                </div>
                                <div className={`${s.detailsContent}`}>
                                    {basketItems.map((item: ISneakers) => (
                                        <div className={s.basketItem} key={item.id}>
                                            <div className={s.img_card}>
                                                <img src={item.imgUrl} alt="sneaker" className={s.img} />
                                            </div>
                                            <div className={s.items}>
                                                <div className={s.cont_gt}>
                                                    <p className={s.gender}>{item.gender}</p>
                                                    <p className={s.title}>{item.title}</p>
                                                </div>
                                                <div>
                                                    <p className={s.price}>{item.price} ₽</p>

                                                </div>
                                            </div>
                                            <div className={s.btn_del}>
                                                <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <FormComponent fields={fieldsFull} onSubmit={handleSubmit} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={s.btn_cancel}>
                        <Link to={"/"}>
                            <Button_3 text='Отменить заказ' onClick={handleCancelOrder} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;
