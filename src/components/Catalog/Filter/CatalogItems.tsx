import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { ISneakers } from "../../../slices/basketSlice";
import { fetchSneakers } from "../../../slices/sneakersSlice";
import { changeLimit } from "../../../slices/dataSlice";
import CatalogCard from "./CatalogCard";
import ButtonRed from "../../Buttons/btn_red/buttonRed";

interface IProps {
  gender: string;
}

const CatalogItems: FC<IProps> = ({ gender }) => {
  const dispatch = useDispatch<AppDispatch>();
  const sneakers = useSelector<RootState, ISneakers[]>(
    (state) => state.sneakers.data
  );
  const limit = useSelector<RootState, number>((state) => state.data.limit);

  React.useEffect(() => {
    dispatch(
      fetchSneakers({
        priceFrom: 0,
        priceTo: 99999,
        gender: gender,
        sizes: [],
      })
    );
  }, [dispatch, gender, limit]);

  return (
    <CatalogItemsStyle>
      {sneakers.length === 0 ? (
        <h2>Подходящих товаров не найдено</h2>
      ) : (
        <>
      <ul>
        {sneakers
          .filter((_, index) => index < limit)
          .map((item: ISneakers) => (
            <CatalogCard key={item.id} item={item} />
          ))}
      </ul>

      <ButtonRed type="button" onClick={() => dispatch(changeLimit())} disabled={limit >= sneakers.length} text="Показать еще"/>
      </>
      )}
    </CatalogItemsStyle>
  );
};

const CatalogItemsStyle = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
        margin-bottom: 20px;

  }
    li {
    list-style-type: none;
    }
        @media (max-width: 1240px) {
      ul{
         grid-template-columns: repeat(2, 1fr);
      }

    }
    @media (max-width: 910px) {
          ul{
         grid-template-columns: repeat(1, 1fr);
      }

    }

`;

export default CatalogItems;
