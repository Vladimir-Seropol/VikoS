import { FC } from "react";
import styled from "styled-components";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "./CatalogFilter";

interface IProps {
  setValue: UseFormSetValue<IFormData>;
}

const genders = [
  {
    value: "Мужской",
    label: "male",
  },
  {
    value: "Женский",
    label: "female",
  },
];

const GenderFilter: FC<IProps> = ({ setValue }) => {
  return (
    <GenderFilterStyle>
      <h4>Пол</h4>
      <div className="filter">
        {genders.map((gender) => (
          <div key={gender.label}>
            <input
              type="radio"
              id={gender.label}
              name="gender"
              onChange={() => setValue("gender", gender.value)}
            />
            <label htmlFor={gender.label}>{gender.value}</label>
          </div>
        ))}
      </div>
    </GenderFilterStyle>
  );
};

const GenderFilterStyle = styled.div`
  margin-bottom: 20px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }

    input {
      visibility: hidden;
      position: absolute;
    }

    label {
      position: relative;
      height: 24px;
      line-height: 24px;
      padding-left: 34px;

      &::before {
        content: "";
        width: 24px;
        height: 24px;
        border: 1px solid rgb(219, 187, 169);
        border-radius: 4px;
        position: absolute;
        left: 0;
      }
    }

    input:checked + label::before {
      background: url("/icons/check.svg") no-repeat center;
    }
  }
`;

export default GenderFilter;
