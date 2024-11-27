import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ISneakers {
  color: string;
  compound: string;
  country: string;
  description: string;
  gender: string;
  id: number;
  imgUrl: string;
  inStock: number;
  oldPrice: number;
  price: number;
  sizes: number[];
  stars: number;
  title: string;
  vendorСode: string;
  selectedSize?: number;
}

const BASE_URL: string = "https://8906813ca59d8ea5.mokky.dev";

export const fetchBasket = createAsyncThunk<ISneakers[]>(

  "basket/fetchBasket", 
  async (): Promise<ISneakers[]> => { 
    try {
      const { data } = await axios.get<ISneakers[]>(`${BASE_URL}/basket/`);

      return data; 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log("Failed to fetch:"); 
      return []; 
    }
  }
);

export const postBasket = createAsyncThunk<ISneakers, ISneakers>(
  "basket/postBasket",
  async (item) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/basket`, item);
      return data;
    } catch (error) {
      console.error("Failed to post basket:", error);
      throw new Error("Failed to post basket");
    }
  }
);

export const delBasket = createAsyncThunk<number, number>(
  "basket/delBasket", 
  async (id) => { 
    try {
      await axios.delete(`${BASE_URL}/basket/${id}`);

      return id; 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error("Failed to delete basket"); 
    }
  }
);

interface IState {
  data: ISneakers[]; 
}
const initialState: IState = {
  data: [], 
};

export const basketSlice = createSlice({
  name: "basket", 
  initialState,   
  reducers: {},   
  extraReducers: (builder) => {
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.data = action.payload; 
    });

    builder.addCase(postBasket.fulfilled, (state, action) => {
      state.data.push(action.payload); 
    });

    builder.addCase(delBasket.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload); 
    });
  },
});

export default basketSlice.reducer;
