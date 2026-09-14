export type Game = {
  slug: string;
  name: string;
  icon: string;
  color: string;
};

export const games: Game[] = [
  { slug: "pubg-mobile", name: "PUBG Mobile", icon: "🎯", color: "bg-yellow-500" },
  { slug: "mobile-legends", name: "Mobile Legends: Bang Bang", icon: "⚔️", color: "bg-blue-600" },
  { slug: "honor-of-kings", name: "Honor of Kings", icon: "👑", color: "bg-purple-600" },
  { slug: "free-fire", name: "Free Fire", icon: "🔥", color: "bg-orange-600" },
  { slug: "king-of-avalon", name: "King of Avalon", icon: "🐉", color: "bg-red-700" },
  { slug: "zynga-poker", name: "Zynga Poker", icon: "♠️", color: "bg-green-700" },
  { slug: "poker-mega", name: "Poker Mega World Billions", icon: "🃏", color: "bg-green-900" },
  { slug: "roblox", name: "Roblox", icon: "🧱", color: "bg-red-500" },
  { slug: "fortnite", name: "Fortnite", icon: "🏆", color: "bg-yellow-400" },
  { slug: "call-of-duty", name: "Call of Duty Mobile", icon: "🔫", color: "bg-gray-800" },
];
