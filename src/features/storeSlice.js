import { createSlice } from "@reduxjs/toolkit";

import VialA from "../stages/Left/shoppeItems/VialA";
import VialB from "../stages/Left/shoppeItems/VialB";
import VialC from "../stages/Left/shoppeItems/VialC";
import Gloves from "../stages/Left/shoppeItems/Gloves";
import Mug from "../stages/Left/shoppeItems/Mug";
import Pencil from "../stages/Left/shoppeItems/Pencil";
import Branches from "../stages/Left/shoppeItems/Branches";
import WhiteWillow from "../stages/Left/shoppeItems/WhiteWillow";
import BlackAsh from "../stages/Left/shoppeItems/BlackAsh";
import Book from "../stages/Left/shoppeItems/Book";
import Coffee from "../stages/Left/shoppeItems/Coffee";
import Shears from "../stages/Left/shoppeItems/Shears";
import Rations from "../stages/Left/shoppeItems/Rations";
import Mushrooms from "../stages/Left/shoppeItems/Mushrooms";
import MortarPestal from "../stages/Left/shoppeItems/MortarPestal";
import Sachel from "../stages/Left/shoppeItems/Sachel";

const initialState = {
  userChoice: "",
  items: [
     {
    component: <BlackAsh />,
    id: "BlackAsh",
    amount: 22,
    price: 12,
    name: 'Black Ash',
    spiel: `Parts of the great Black Ash that was cuty down.`
  },
  {
    component: <Book />,
    id: "Book",
    amount: 1,
    price: 305,
    name: 'Book of Spells',
    spiel: 'Can be combined',
  },
 {
  component: <Branches />,
  id: "Branches",
    amount: 30,
    price: 18,
    name: 'Ancient Branches',
    spiel: `The Branches of the Ancient hold a special power`,
  },
   {
    component: <Coffee />,
    id: "Coffee",
    amount: 22,
    price: 8,
    name: 'Coffee',
    spiel: `It's coffee and it's great - drink up!`,
  },
  {
    component: <Gloves />,
    id: "Gloves",
    amount: 3,
    price: 55,
    name: 'Gloves of Leather',
    spiel: `The Gloves of Leather will provide protection from the elements both earthly and mystical. They also increase you casting abilities 3-fold.`,
  },
   {
    component: <MortarPestal />,
    id: "MortarPestal",
    amount: 3,
    price: 85,
    name: 'Mortar & Pestel',
    spiel: `This Mortar & Pestel are heavy duty, allowing you to combine ingredients to craft new creations.`,
  },
   {
    component: <Mug />,
    id: 'Mug',
    amount: 5,
    price: 22,
    name: 'Mug',
    spiel: `Can't have coffee if you've got no mug`
  },
   {
    component: <Mushrooms />,
    id: "Mushrooms",
    amount: 50,
    price: 5,
    name: 'Magic Mushrooms',
    spiel: 'Magic Mushrooms can be eaten to good effect'
  },
   {
    component: <Pencil />,
    id: "Pencil",
    amount: 38,
    price: 5,
    name: 'pencil',
    spiel: `Keep track of your stories with this here pencil`
  },
  {
    component: <Rations />,
    id: "Rations",
    amount: 14,
    price: 55,
    name: 'rations',
    spiel: `More food for thougt`
  },
   {
    component: <Sachel />,
    id: "Sachel",
    amount: 2,
    price: 210,
    name: 'Travel Sachel',
    spiel: 'Can be combined'
  },
   {
    component: <Shears />,
    id: "Shears",
    amount: 4,
    price: 66,
    name: 'Shears',
    spiel: `Cut through the densist of brush with this here shears`
  },
   {
    component: <VialA />,
    id: "VialA",
    amount: 2,
    price: 106,
    name: 'Vial of ether',
    spiel: `This 'Vial of ether' will restore all health`
  },
  {
    component: <VialB />,
    id: "VialB",
    amount: 1,
    price: 82,
    name: 'Vial of elixer',
    spiel: `This 'Vial of elixer' will restore all stamina`
  },
  {
    component: <VialC />,
    id: "VialC",
    amount: 1,
    price: 201,
    name: 'Vial of tears',
    spiel: `This 'Vial of tears' will restore your soul`
  },
   {
    component: <WhiteWillow />,
    id: "WhiteWillow",
    amount: 44,
    price: 12,
    name: 'White Willow',
    spiel: `Pieces of the white willow provide healing powers`
  },
  ]
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    // increment: (state, action) => {
    //   state.VialC += 1;
    // },
    // decrement: (state) => {
    //   state.VialC -= 1;
    // },
    chooseItem(state, action) {
      state.userChoice = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {  chooseItem } = storeSlice.actions;
export default storeSlice.reducer;