import { create } from "zustand";

import SachelImage from "containers/Left/shoppeItems/Sachel.png";
import GloveImage from "containers/Left/shoppeItems/Glove.png";
import MortarImage from "containers/Left/shoppeItems/Mortar.png";
import MugImage from "containers/Left/shoppeItems/Mug.png";
import BranchesImage from "containers/Left/shoppeItems/Branches.png";
import BlackAshImage from "containers/Left/shoppeItems/BlackAsh.png";
import RationsImage from "containers/Left/shoppeItems/Rations.png";


import VialA from "containers/Left/shoppeItems/VialA";
import VialB from "containers/Left/shoppeItems/VialB";
import VialC from "containers/Left/shoppeItems/VialC";
import Pencil from "containers/Left/shoppeItems/Pencil";
import WhiteWillow from "containers/Left/shoppeItems/WhiteWillow";
import Book from "containers/Left/shoppeItems/Book";
import Coffee from "containers/Left/shoppeItems/Coffee";
import Shears from "containers/Left/shoppeItems/Shears";
import Mushrooms from "containers/Left/shoppeItems/Mushrooms";

const useShoppeStore = create((set, get) => ({
  userChoice: "",
  items: [
    {
      component: BlackAshImage,
      id: "BlackAsh",
      amount: 22,
      price: 12,
      name: "Black Ash",
      spiel: `Parts of the great Black Ash that was cut down.`,
      x: 1000,
      y: 350,
      height: 580,
      width: 200
    },
    {
      component: <Book />,
      id: "Book",
      amount: 1,
      price: 305,
      name: "Book of Spells",
      spiel: "Can be combined",
    },
    {
      component: BranchesImage,
      id: "Branches",
      amount: 30,
      price: 18,
      name: "Ancient Branches",
      spiel: `The Branches of the Ancient hold a special power`,
      x: 450,
      y: 100,
      height: 280,
      width: 350
    },
    {
      component: <Coffee />,
      id: "Coffee",
      amount: 22,
      price: 8,
      name: "Coffee",
      spiel: `It's coffee and it's great - drink up!`,
    },
    {
      component: GloveImage,
      id: "Gloves",
      amount: 3,
      price: 55,
      name: "Gloves of Leather",
      spiel: `The Gloves of Leather provide protection from elements both earthly and mystical. They also increase casting abilities 3-fold.`,
      x: 450,
      y: 1000,
      height: 280,
      width: 250
    },
    {
      component: MortarImage,
      id: "MortarPestal",
      amount: 3,
      price: 85,
      name: "Mortar & Pestle",
      spiel: `This Mortar & Pestle is heavy duty, allowing you to combine ingredients to craft new creations.`,
      x: 550,
      y: 380,
      height: 190,
      width: 220
    },
    {
      component: MugImage,
      id: "Mug",
      amount: 5,
      price: 22,
      name: "Mug",
      spiel: `Can't have coffee if you've got no mug`,
      x: 750,
      y: 890,
      height: 200,
      width: 300
    },
    {
      component: <Mushrooms />,
      id: "Mushrooms",
      amount: 50,
      price: 5,
      name: "Magic Mushrooms",
      spiel: "Magic Mushrooms can be eaten to good effect",
    },
    {
      component: <Pencil />,
      id: "Pencil",
      amount: 38,
      price: 5,
      name: "Pencil",
      spiel: `Keep track of your stories with this here pencil`,
    },
    {
      component: RationsImage,
      id: "Rations",
      amount: 14,
      price: 55,
      name: "Rations",
      spiel: `More food for thought`,
      x: 190,
      y: 1230,
      height: 300,
      width: 700
    },
    {
      component: SachelImage,
      id: "Sachel",
      amount: 2,
      price: 210,
      name: "Travel Sachel",
      spiel: "Can be combined",
      x: 80,
      y: 80,
      height: 700,
      width: 400
    },
    {
      component: <Shears />,
      id: "Shears",
      amount: 4,
      price: 66,
      name: "Shears",
      spiel: `Cut through the densest of brush with these shears`,
    },
    {
      component: <VialA />,
      id: "VialA",
      amount: 2,
      price: 106,
      name: "Vial of Ether",
      spiel: `This 'Vial of Ether' will restore all health`,
    },
    {
      component: <VialB />,
      id: "VialB",
      amount: 1,
      price: 82,
      name: "Vial of Elixir",
      spiel: `This 'Vial of Elixir' will restore all stamina`,
    },
    {
      component: <VialC />,
      id: "VialC",
      amount: 1,
      price: 201,
      name: "Vial of Tears",
      spiel: `This 'Vial of Tears' will restore your soul`,
    },
    {
      component: <WhiteWillow />,
      id: "WhiteWillow",
      amount: 44,
      price: 12,
      name: "White Willow",
      spiel: `Pieces of the white willow provide healing powers`,
    },
  ],

  chooseItem: (itemID) => set({ userChoice: itemID }),
}));

export default useShoppeStore;
