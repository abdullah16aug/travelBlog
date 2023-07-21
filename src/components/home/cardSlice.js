import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCards,createCards } from "./cardsAPI";

const initialState = {
  cards: [],
  status: "idle",
};
export const fetchCardsAsync = createAsyncThunk(
  "card/fetchCards",
  async () => {
    const response = await fetchCards();
    return response.data;
  }
);
export const createCardsAsync = createAsyncThunk(
    'card/createCards',
    async(card)=>{
        const response = await createCards(card)
        return response.data
    }
);
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    clearCards: (state) => {
      state.cards = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsAsync.pending, (state, action) => {
    state.status = "loading";
      })
      .addCase(fetchCardsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cards = action.payload;
      })
      .addCase(createCardsAsync.pending, (state, action) => {
    state.status = "loading";
      })
      .addCase(createCardsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cards += action.payload;
      });
  },
});

export const { clearCards } = cardSlice.actions;
export const selectCards = (state) => state.card.cards;
export default cardSlice.reducer;
