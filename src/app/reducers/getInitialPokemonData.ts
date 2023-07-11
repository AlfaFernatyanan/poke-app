import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsRoute } from "../../utils/constans";
import axios from "axios";
export const getInitialPokemonData = createAsyncThunk(
  "pokemon/InitialData",
  async () => {
    try {
      const { data } = await axios.get(pokemonsRoute);
      return data.results;
    } catch (err) {
      console.log(err);
    }
  }
);
