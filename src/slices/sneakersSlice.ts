import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ISneakers {
  color: string;        // Цвет кроссовок
  compound: string;     // Материал верха
  country: string;      // Страна производства
  description: string;  // Описание кроссовок
  gender: string;       // Пол (мужской/женский)
  id: number;           // Уникальный идентификатор
  imgUrl: string;       // URL изображения
  inStock: number;      // Количество на складе
  oldPrice: number;     // Старая цена
  price: number;        // Текущая цена
  sizes: number[];      // Доступные размеры
  stars: number;        // Рейтинг (звезды)
  title: string;        // Название модели
  vendorСode: string;   // Код производителя
  selectedSize?: number;
}

interface IParams {
  priceFrom: number;    // Минимальная цена
  priceTo: number;      // Максимальная цена
  gender: string;       // Пол (мужской/женский)
  sizes: number[];      // Массив доступных размеров
}

const BASE_URL: string = "https://ba0b0ee5a203b738.mokky.dev";

export const fetchSneakers = createAsyncThunk<ISneakers[], IParams>(

  "sneakers/fetchSneakers",
  async (params, { rejectWithValue }) => {
    try {

      const sizesQuery = params.sizes
        .map((value) => `sizes[]=${value}`)

        .join("&");

        const { data } = await axios.get<ISneakers[]>(
        `${BASE_URL}/sneakers?price[from]=${params.priceFrom}&price[to]=${params.priceTo
        }${params.gender ? `&gender=${params.gender}` : ""}${params.sizes.length ? `&${sizesQuery}` : ""
        }`
      );

      localStorage.setItem("sneakers", JSON.stringify(data));

      return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log(`Failed to fetch:`);
      return rejectWithValue("Failed to fetch sneakers");
    }
  }
);

interface IState {
  data: ISneakers[];
}

const initialState: IState = {
  data: JSON.parse(localStorage.getItem("sneakers") || "[]"),
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default sneakersSlice.reducer;
