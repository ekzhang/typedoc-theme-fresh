/** This value is important! */
export const value = 42;

/** @namespace */
export const beans = {
  /** The color of the beans */
  color: "brown",
  /** The taste of the beans */
  taste: "delicious",
  /** The size of the beans */
  size: "medium",
  /** The shape of the beans */
  shape: "oval",
  /** The origin of the beans */
  origin: "Colombia",
  /** The roast level of the beans */
  roastLevel: "medium-dark",
  /** The grind size of the beans */
  grindSize: "fine",
  /** The brewing method for the beans */
  brewingMethod: "espresso",
  /** The caffeine content of the beans */
  caffeineContent: "high",
  /** The aroma of the beans */
  aroma: "rich",

  /** Bake some beans */
  bake(size: number): string {
    return `Baking ${size} beans`;
  },
};
