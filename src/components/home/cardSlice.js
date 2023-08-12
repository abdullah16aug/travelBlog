import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCards,createCards,deleteCard ,fetchCardById,updateCards} from "./cardsAPI";

const initialState = {
  cards: [],
  status: "idle",
  selectedCard:null
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
export const updateCardsAsync = createAsyncThunk(
  'card/updateCards',
  async(update)=>{
      const response = await updateCards(update)
      return response.data
  }
);
export const deleteCardAsync = createAsyncThunk(
    'card/deleteCard',
    async(card)=>{
        const response = await deleteCard(card)
        return response.data
    }
);
export const fetchCardByIdAsync = createAsyncThunk(
  'card/fetchCardById',
  async (id) => {
    const response=await fetchCardById(id)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    clearCards: (state) => {
      state.selectedCard = [];
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
      })
      .addCase(deleteCardAsync.pending, (state, action) => {
    state.status = "loading";
      })
      .addCase(deleteCardAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index=state.cards.findIndex(item=>item.id===action.payload.id)
        state.cards.splice(index,1)
      
      })
      .addCase(fetchCardByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCardByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedCard = action.payload;
      })
      .addCase(updateCardsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCardsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.cards.findIndex(item=>item.id===action.payload.id)
        console.log(index,action.payload)
        state.cards.splice(index,1,action.payload)
        // state.cards[state.id]=action.payload;
      })
  },
});

export const { clearCards } = cardSlice.actions;
export const selectCards = (state) => state.card.cards;
export const selectCardById = (state) => state.card.selectedCard;

export default cardSlice.reducer;
