import { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ISneakers } from "../../../slices/sneakersSlice";
import { postBasket } from "../../../slices/basketSlice";
import { AppDispatch } from "../../../store";
import Modal from "../../Modals/Modal";
import ModalProductPage from "../../pages/Product";

interface IProps {
  item: ISneakers;
}

const CatalogCard: FC<IProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <CatalogCardStyle>
      <div className="options">
        <button className="btn" onClick={handleOpenModal}>
          <img src="./public/sneaker.png" alt="sneaker" />
        </button>
        <button className="add" onClick={() => dispatch(postBasket(item))}>
          <img src="./public/basket.png" alt="add to basket" />
        </button>
      </div>
      <picture>
        <img src={item.imgUrl} alt={item.title} />
      </picture>
      <h3>{item.title}</h3>
      <p>{item.price} ₽</p>
      <p>{item.gender}</p>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalProductPage sneaker={item} />
      </Modal>
    </CatalogCardStyle>
  );
};

const CatalogCardStyle = styled.li`
  position: relative;

  .options {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background: rgba(255, 255, 255, 0.6);
    opacity: 0;
    transition: all 200ms linear;

    button {
      width: 80px;
      height: 80px;
      border-radius: 50%;

        &:hover {
          background-color: rgb(49, 52, 60);
        }
      }
    }
    &:hover .options {
      opacity: 1;
    }

  picture {
    max-width: 280px;
    height: 293px;
    display: inline-block;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin-bottom: 6px;
    color: rgb(68, 75, 88);
  }

  p {
    color: rgb(68, 75, 88);
  }
`;

export default CatalogCard;
