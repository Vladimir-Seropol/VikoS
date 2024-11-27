import { FC } from "react";
import styled from "styled-components";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import SizesFilter from "./SizesFilter";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchSneakers } from "../../../slices/sneakersSlice";
import { AppDispatch } from "../../../store";
import { getBaseLimit } from "../../../slices/dataSlice";
import { useNavigate } from "react-router-dom";

interface IProps {
  setGender: (gender: string) => void;
  gender?: string;
}

export interface IFormData {
  startPrice: number;
  endPrice: number;
  gender: string;
  sizes: number[];
}



const CatalogFilter: FC<IProps> = ({ setGender }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, setValue } = useForm<IFormData>({

    defaultValues: {
      startPrice: 0,
      endPrice: 99999,
      gender: "",
      sizes: [],
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setGender(data.gender);

    dispatch(
      fetchSneakers({
        priceFrom: data.startPrice,
        priceTo: data.endPrice,
        gender: data.gender,
        sizes: data.sizes,
      })
    );
  };

  const navigate = useNavigate();

  const handleReload = () => {
    navigate('/');
    window.location.reload();
  };


  return (
    <CatalogFilterStyle
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h3>Подбор по параметрам</h3>
      </div>
      <PriceFilter register={register} setValue={setValue} />
      <GenderFilter setValue={setValue} />
      <SizesFilter setValue={setValue} />
      <button type="submit" onClick={() => dispatch(getBaseLimit())}>
        Применить
      </button>
      <button
        type="reset"
        onClick={() => {
          handleReload();
          setValue("startPrice", 0);
          setValue("endPrice", 99999);
          setValue("gender", "");
          setValue("sizes", []);
          dispatch(
            fetchSneakers({
              priceFrom: 0,
              priceTo: 99999,
              gender: "",
              sizes: [],
            })
          );
          dispatch(getBaseLimit()); 
        }}
      >
        Сбросить
      </button>
    </CatalogFilterStyle>
  );
};

const CatalogFilterStyle = styled.form`
  background: #FFF4EE;
  border-radius: 4px;
  padding: 15px 20px 20px;
  max-width: 280px;
  height: fit-content;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfiled;
    -moz-appearance: textfield;
    background-color:  #FFF4EE;
  }

  h3 {
    margin-bottom: 15px;
    font-family: "IntroBook";
    color: #444B58;
    font-size: 24px;
    line-height: 29px;
  }
  h4 {
    color: #444B58;
    margin-bottom: 20px;
    text-align: left;
font-family: "IntroBook";
font-size: 16px;
font-weight: 400;
line-height: 16px;
  }

  button[type="submit"] {
    color: #FFFFFF;
    font-family: "Intro", sans-serif;
    font-size: 16px;
    line-height: 16px;
    border-radius: 4px;
    background-color: #444B58;
    padding: 22px 48px;
    width: 100%;
    margin-bottom: 20px;

    &:hover {
      background: rgb(49, 52, 60);
    }

    &:active {
      background: rgba(49, 52, 60, 0.97);
    }
  }

  button[type="reset"] {
    color: rgb(68, 75, 88);
    font-family: "Intro", sans-serif;
    font-size: 16px;
    line-height: 16px;
    width: 100%;
    text-transform: lowercase;

    &:hover {
      color: rgba(68, 75, 88, 0.8);
    }
  }
`;

export default CatalogFilter;
