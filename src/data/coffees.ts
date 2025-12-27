// coffees.ts

import type { Coffee } from "../types";

export const coffees: Record<string, Coffee> = {
  espresso: {
    id: "coffee_01",
    name: "Espresso",
    img: "/espresso.png",
    description:
      "A bold and intense coffee with a rich aroma and a thick crema.",
    tags: ["strong", "classic", "italian"],
    time: {
      amount: 5,
      unit: "min",
    },
    ingredients: [
      { name: "Coffee beans", amount: 18, unit: "g" },
      { name: "Water", amount: 36, unit: "ml" },
    ],
    instructions: [
      {
        text: "Grind half of the coffee beans finely.",
        time: 1,
        uses: [{ ingredient: "Coffee beans", amount: 9 }],
      },
      {
        text: "Preheat the espresso machine and portafilter.",
        time: 1,
        uses: [],
      },
      {
        text: "Add the remaining ground coffee and tamp firmly.",
        time: 1,
        uses: [{ ingredient: "Coffee beans", amount: 9 }],
      },
      {
        text: "Start extraction and let water flow for the first seconds.",
        time: 1.5,
        uses: [{ ingredient: "Water", amount: 18 }],
      },
      {
        text: "Complete the extraction.",
        time: 0.5,
        uses: [{ ingredient: "Water", amount: 18 }],
      },
    ],
  },

  americano: {
    id: "coffee_02",
    name: "Americano",
    img: "/americano.png",
    description:
      "A smooth coffee made by diluting espresso with hot water.",
    tags: ["smooth", "hot"],
    time: {
      amount: 6,
      unit: "min",
    },
    ingredients: [
      { name: "Espresso", amount: 30, unit: "ml" },
      { name: "Hot water", amount: 120, unit: "ml" },
    ],
    instructions: [
      {
        text: "Prepare the first half of the espresso shot.",
        time: 1,
        uses: [{ ingredient: "Espresso", amount: 15 }],
      },
      {
        text: "Finish pulling the espresso shot.",
        time: 1,
        uses: [{ ingredient: "Espresso", amount: 15 }],
      },
      {
        text: "Add half of the hot water.",
        time: 2,
        uses: [{ ingredient: "Hot water", amount: 60 }],
      },
      {
        text: "Top up with the remaining hot water.",
        time: 2,
        uses: [{ ingredient: "Hot water", amount: 60 }],
      },
    ],
  },

  latte: {
    id: "coffee_03",
    name: "Latte",
    img: "/latte.png",
    description:
      "A creamy coffee with a smooth and balanced flavor.",
    tags: ["milky", "smooth"],
    time: {
      amount: 7,
      unit: "min",
    },
    ingredients: [
      { name: "Espresso", amount: 30, unit: "ml" },
      { name: "Milk", amount: 180, unit: "ml" },
    ],
    instructions: [
      {
        text: "Pull the first half of the espresso shot.",
        time: 1,
        uses: [{ ingredient: "Espresso", amount: 15 }],
      },
      {
        text: "Finish extracting the espresso.",
        time: 1,
        uses: [{ ingredient: "Espresso", amount: 15 }],
      },
      {
        text: "Steam half of the milk.",
        time: 2.5,
        uses: [{ ingredient: "Milk", amount: 90 }],
      },
      {
        text: "Pour the milk and finish with the remaining steamed milk.",
        time: 2.5,
        uses: [{ ingredient: "Milk", amount: 90 }],
      },
    ],
  },

  cappuccino: {
    id: "coffee_04",
    name: "Cappuccino",
    img: "/cappuccino.png",
    description:
      "A balanced coffee with equal parts of espresso, milk, and foam.",
    tags: ["frothy", "classic"],
    time: {
      amount: 7,
      unit: "min",
    },
    ingredients: [
      { name: "Espresso", amount: 30, unit: "ml" },
      { name: "Milk", amount: 120, unit: "ml" },
    ],
    instructions: [
      {
        text: "Extract the first part of the espresso.",
        time: 1,
        uses: [{ ingredient: "Espresso", amount: 15 }],
      },
      {
        text: "Complete the espresso extraction.",
        time: 1,
        uses: [{ ingredient: "Espresso", amount: 15 }],
      },
      {
        text: "Steam half of the milk into foam.",
        time: 2.5,
        uses: [{ ingredient: "Milk", amount: 60 }],
      },
      {
        text: "Add the remaining milk and foam.",
        time: 2.5,
        uses: [{ ingredient: "Milk", amount: 60 }],
      },
    ],
  },

  coldBrew: {
    id: "coffee_05",
    name: "Cold Brew",
    img: "/coldbrew.png",
    description:
      "A smooth, low-acidity coffee brewed slowly with cold water.",
    tags: ["cold", "smooth"],
    time: {
      amount: 720, // 12 hours
      unit: "min",
    },
    ingredients: [
      { name: "Coffee grounds", amount: 80, unit: "g" },
      { name: "Cold water", amount: 1000, unit: "ml" },
    ],
    instructions: [
      {
        text: "Add half of the coffee grounds to the container.",
        time: 5,
        uses: [{ ingredient: "Coffee grounds", amount: 40 }],
      },
      {
        text: "Pour half of the cold water over the grounds.",
        time: 5,
        uses: [{ ingredient: "Cold water", amount: 500 }],
      },
      {
        text: "Add the remaining coffee grounds.",
        time: 5,
        uses: [{ ingredient: "Coffee grounds", amount: 40 }],
      },
      {
        text: "Pour the remaining cold water and let steep.",
        time: 705,
        uses: [{ ingredient: "Cold water", amount: 500 }],
      },
    ],
  },
};
