const backgroundImage = {
  clear:
    "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80",

  clouds:
    "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=1600&q=80",

  rain: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80",

  haze: "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=1600&q=80",

  snow: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=1600&q=80",

  default:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
};
export function getBackgroundUrl(condition) {
  if (!condition) return backgroundImage.default;
  const key = condition.toLowerCase();
  return backgroundImage[key] || backgroundImage.default;
}
