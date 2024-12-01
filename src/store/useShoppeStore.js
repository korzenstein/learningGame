import { create } from "zustand";

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

const useShoppe = create((set, get) => ({
  userChoice: "",
  items: [
    {
      component: <BlackAsh />,
      id: "BlackAsh",
      amount: 22,
      price: 12,
      name: "Black Ash",
      spiel: `Parts of the great Black Ash that was cut down.`,
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
      component: <Branches />,
      id: "Branches",
      amount: 30,
      price: 18,
      name: "Ancient Branches",
      spiel: `The Branches of the Ancient hold a special power`,
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
      component: <Gloves />,
      id: "Gloves",
      amount: 3,
      price: 55,
      name: "Gloves of Leather",
      spiel: `The Gloves of Leather provide protection from elements both earthly and mystical. They also increase casting abilities 3-fold.`,
    },
    {
      component: <MortarPestal />,
      id: "MortarPestal",
      amount: 3,
      price: 85,
      name: "Mortar & Pestle",
      spiel: `This Mortar & Pestle is heavy duty, allowing you to combine ingredients to craft new creations.`,
    },
    {
      component: <Mug />,
      id: "Mug",
      amount: 5,
      price: 22,
      name: "Mug",
      spiel: `Can't have coffee if you've got no mug`,
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
      component: <Rations />,
      id: "Rations",
      amount: 14,
      price: 55,
      name: "Rations",
      spiel: `More food for thought`,
    },
    {
      component: <Sachel />,
      id: "Sachel",
      amount: 2,
      price: 210,
      name: "Travel Sachel",
      spiel: "Can be combined",
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

export default useShoppe;
