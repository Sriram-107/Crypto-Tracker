import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface CryptoState {
    id? : number,
    name? : string,
    price? : number,
    price_change? : number,
    volume? : number,
    crypto_image?:string,
    symbol? : string
    
}

interface CryptoListState {
cryptoList: CryptoState[],
status? : 'idle' | 'loading' | 'success' | 'failed', 
    error? : string | null
}
const initialState : CryptoListState = {
    cryptoList :[],
    status : 'idle',
    error : null
}
export const fetchCryptoList = createAsyncThunk(
    'fetch/crypto',
      async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const mappedData : CryptoState[] = response.data.map((item : any) => {
        return{
    id : item.market_cap_rank,
    name : item.name,
    price: item.current_price,
    price_change : item.price_change_24h,
    volume : item.total_volume,
    crypto_image:item.image,
    symbol : item.symbol
        }
      })
      console.log(response.data)
      console.log(mappedData)
      return mappedData; // This will be the `action.payload` in the fulfilled reducer
    } catch (error: any) {
      // Use rejectWithValue to pass a custom error message or object
      return rejectWithValue(error.message || 'Failed to fetch users');
    }
  }
)
export const cryptListSlice = createSlice({
    name : "currencyList",
    initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder.addCase(fetchCryptoList.pending,(state) => {
            state.status = 'loading';
        }).addCase(fetchCryptoList.fulfilled,(state,action:PayloadAction<CryptoState[]>) => {
            state.status = 'success';
            state.cryptoList = action.payload;
        }).addCase(fetchCryptoList.rejected,(state) => {
            state.status = 'failed';
        })
    },
});

export default cryptListSlice.reducer;
