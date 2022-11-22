import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BlackAsh: {
    amount: 22,
    price: 12,
    name: 'Travel Sachel',
    spiel: `If you are looking to upgrade, this Travel Sachel will allow you to double your capicty for carrying items.`
  },
  Book: {
    amount: 1,
    price: 305,
    name: 'Book of Spells',
    spiel: 'Can be combined',
  },
  Branches: {
    amount: 30,
    price: 18,
    name: 'Branches of the Ancient',
    spiel: `The Branches of the Ancient hold a special power`,
  },
  Coffee: {
    amount: 22,
    price: 8,
    name: 'Coffee',
    spiel: `It's coffee and it's great - drink up!`,
  },
  Gloves: {
    amount: 3,
    price: 55,
    name: 'Gloves of Leather',
    spiel: `The Gloves of Leather will provide protection from the elements both earthly and mystical. They also increase you casting abilities 3-fold.`,
  },
  MortarPestel: {
    amount: 3,
    price: 85,
    name: 'Mortar & Pestel',
    spiel: `This Mortar & Pestel are heavy duty, allowing you to combine ingredients to craft new creations.`,
  },
  Mug: {
    amount: 5,
    price: 22,
    name: 'Mug',
    spiel: `Can't have coffee if you've got no mug`
  },
  Mushrooms: {
    amount: 50,
    price: 5,
    name: 'Magic Mushrooms',
    spiel: 'Magic Mushrooms can be eaten to good effect'
  },
  Pencil: {
    amount: 38,
    price: 5,
    name: 'pencil',
    spiel: `Keep track of your stories with this here pencil`
  },
  Sachel: {
    amount: 2,
    price: 210,
    name: 'Travel Sachel',
    spiel: 'Can be combined'
  },
  shears: {
    amount: 4,
    price: 66,
    name: 'Shears',
    spiel: `Cut through the densist of brush with this here shears`
  },
  VialA: {
    amount: 2,
    price: 106,
    name: 'Vial of ether',
    spiel: `This 'Vial of ether' will restore all health`
  },
  VialB: {
    amount: 1,
    price: 82,
    name: 'Vial of elixer',
    spiel: `This 'Vial of elixer' will restore all stamina`
  },
  VialC: {
    amount: 1,
    price: 201,
    name: 'Vial of tears',
    spiel: `This 'Vial of tears' will restore your soul`
  },
  WhiteWillow: {
    amount: 44,
    price: 12,
    name: 'White Willow',
    spiel: `Pieces of the white willow provide healing powers`
  },


};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.VialC += 1;
    },
    decrement: (state) => {
      state.VialC -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = storeSlice.actions;
export default storeSlice.reducer;