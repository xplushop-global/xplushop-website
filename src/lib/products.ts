// XPLUS SHOP GLOBAL - Gaming Top-Up Products
// Currency: USD, Starting price $0.30
// Each product requires Player ID + Email

export type GameProduct = {
  id: string;
  game: string;
  gameSlug: string;
  name: string;
  category: string;
  amount: number;
  currency: "UC" | "DIAMONDS" | "TOKEN" | "BILLIONS" | "ROBUX" | "V-BUCKS" | "CP" | "PACK";
  price: number;
  image: string;
  popular?: boolean;
  bonus?: string;
};

export const games = [
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

export const products: GameProduct[] = [
  // 1. PUBG MOBILE - UC 80 to 124000
  { id: "pubg-80uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "80 UC", category: "UC", amount: 80, currency: "UC", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pubg-325uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "325 UC", category: "UC", amount: 325, currency: "UC", price: 4.49, image: "https://i.imgur.com/8QmQpXl.png", bonus: "+25 Bonus" },
  { id: "pubg-660uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "660 UC", category: "UC", amount: 660, currency: "UC", price: 8.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true, bonus: "+60 Bonus" },
  { id: "pubg-1800uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "1800 UC", category: "UC", amount: 1800, currency: "UC", price: 23.99, image: "https://i.imgur.com/8QmQpXl.png", bonus: "+300 Bonus" },
  { id: "pubg-3850uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "3850 UC", category: "UC", amount: 3850, currency: "UC", price: 49.99, image: "https://i.imgur.com/8QmQpXl.png", bonus: "+850 Bonus" },
  { id: "pubg-8100uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "8100 UC", category: "UC", amount: 8100, currency: "UC", price: 99.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true, bonus: "+2100 Bonus" },
  { id: "pubg-12400uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "12400 UC", category: "UC", amount: 12400, currency: "UC", price: 149.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pubg-24900uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "24900 UC", category: "UC", amount: 24900, currency: "UC", price: 299.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pubg-38500uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "38500 UC", category: "UC", amount: 38500, currency: "UC", price: 449.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pubg-81000uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "81000 UC", category: "UC", amount: 81000, currency: "UC", price: 899.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pubg-124000uc", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "124000 UC", category: "UC", amount: 124000, currency: "UC", price: 1299.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "pubg-prime", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "Prime Subscription", category: "Subscription", amount: 1, currency: "PACK", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pubg-prime-plus", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "Prime Plus Subscription", category: "Subscription", amount: 1, currency: "PACK", price: 9.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "pubg-rp-50", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "Royale Pass Elite Lv 1-50", category: "Royale Pass", amount: 1, currency: "PACK", price: 5.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pubg-rp-100", game: "PUBG Mobile", gameSlug: "pubg-mobile", name: "Royale Pass Elite Plus Lv 1-100", category: "Royale Pass", amount: 1, currency: "PACK", price: 13.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },

  // 2. MOBILE LEGENDS
  { id: "ml-80dia", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "80 Diamonds", category: "Diamonds", amount: 80, currency: "DIAMONDS", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-172dia", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "172 Diamonds", category: "Diamonds", amount: 172, currency: "DIAMONDS", price: 2.29, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-344dia", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "344 Diamonds", category: "Diamonds", amount: 344, currency: "DIAMONDS", price: 4.59, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "ml-720dia", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "720 Diamonds", category: "Diamonds", amount: 720, currency: "DIAMONDS", price: 9.29, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-1450dia", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "1450 Diamonds", category: "Diamonds", amount: 1450, currency: "DIAMONDS", price: 18.59, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-5000dia", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "5000 Diamonds", category: "Diamonds", amount: 5000, currency: "DIAMONDS", price: 64.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-12000dia", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "12000 Diamonds", category: "Diamonds", amount: 12000, currency: "DIAMONDS", price: 149.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-124000dia", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "124000 Diamonds", category: "Diamonds", amount: 124000, currency: "DIAMONDS", price: 1299.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-daily", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "Daily Pack", category: "Packs", amount: 1, currency: "PACK", price: 0.30, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-weekly", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "Weekly Pack", category: "Packs", amount: 1, currency: "PACK", price: 1.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "ml-monthly", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "Monthly Pack", category: "Packs", amount: 1, currency: "PACK", price: 7.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-starlight", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "Starlight Membership", category: "Membership", amount: 1, currency: "PACK", price: 7.49, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ml-starlight-plus", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "Starlight Plus Membership", category: "Membership", amount: 1, currency: "PACK", price: 17.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "ml-twilight", game: "Mobile Legends: Bang Bang", gameSlug: "mobile-legends", name: "Twilight Pack", category: "Packs", amount: 1, currency: "PACK", price: 4.99, image: "https://i.imgur.com/8QmQpXl.png" },

  // 3. HONOR OF KINGS
  { id: "hok-80token", game: "Honor of Kings", gameSlug: "honor-of-kings", name: "80 Tokens", category: "Tokens", amount: 80, currency: "TOKEN", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "hok-400token", game: "Honor of Kings", gameSlug: "honor-of-kings", name: "400 Tokens", category: "Tokens", amount: 400, currency: "TOKEN", price: 4.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "hok-800token", game: "Honor of Kings", gameSlug: "honor-of-kings", name: "800 Tokens", category: "Tokens", amount: 800, currency: "TOKEN", price: 9.49, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "hok-2500token", game: "Honor of Kings", gameSlug: "honor-of-kings", name: "2500 Tokens", category: "Tokens", amount: 2500, currency: "TOKEN", price: 29.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "hok-10000token", game: "Honor of Kings", gameSlug: "honor-of-kings", name: "10000 Tokens", category: "Tokens", amount: 10000, currency: "TOKEN", price: 109.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "hok-pass", game: "Honor of Kings", gameSlug: "honor-of-kings", name: "Honor Pass", category: "Pass", amount: 1, currency: "PACK", price: 7.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "hok-pass-plus", game: "Honor of Kings", gameSlug: "honor-of-kings", name: "Honor Pass Plus", category: "Pass", amount: 1, currency: "PACK", price: 15.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },

  // 4. FREE FIRE
  { id: "ff-100dia", game: "Free Fire", gameSlug: "free-fire", name: "100 Diamonds", category: "Diamonds", amount: 100, currency: "DIAMONDS", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ff-310dia", game: "Free Fire", gameSlug: "free-fire", name: "310 Diamonds", category: "Diamonds", amount: 310, currency: "DIAMONDS", price: 2.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ff-520dia", game: "Free Fire", gameSlug: "free-fire", name: "520 Diamonds", category: "Diamonds", amount: 520, currency: "DIAMONDS", price: 4.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "ff-1060dia", game: "Free Fire", gameSlug: "free-fire", name: "1060 Diamonds", category: "Diamonds", amount: 1060, currency: "DIAMONDS", price: 9.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ff-2180dia", game: "Free Fire", gameSlug: "free-fire", name: "2180 Diamonds", category: "Diamonds", amount: 2180, currency: "DIAMONDS", price: 19.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ff-5600dia", game: "Free Fire", gameSlug: "free-fire", name: "5600 Diamonds", category: "Diamonds", amount: 5600, currency: "DIAMONDS", price: 49.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "ff-10000dia", game: "Free Fire", gameSlug: "free-fire", name: "10000 Diamonds", category: "Diamonds", amount: 10000, currency: "DIAMONDS", price: 89.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },

  // 5. KING OF AVALON
  { id: "koa-500dia", game: "King of Avalon", gameSlug: "king-of-avalon", name: "500 Diamonds", category: "Diamonds", amount: 500, currency: "DIAMONDS", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "koa-2500dia", game: "King of Avalon", gameSlug: "king-of-avalon", name: "2500 Diamonds", category: "Diamonds", amount: 2500, currency: "DIAMONDS", price: 4.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "koa-12500dia", game: "King of Avalon", gameSlug: "king-of-avalon", name: "12500 Diamonds", category: "Diamonds", amount: 12500, currency: "DIAMONDS", price: 24.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "koa-50000dia", game: "King of Avalon", gameSlug: "king-of-avalon", name: "50000 Diamonds", category: "Diamonds", amount: 50000, currency: "DIAMONDS", price: 99.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "koa-100000dia", game: "King of Avalon", gameSlug: "king-of-avalon", name: "100000 Diamonds", category: "Diamonds", amount: 100000, currency: "DIAMONDS", price: 199.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },

  // 6. ZYNGA POKER
  { id: "zynga-10b", game: "Zynga Poker", gameSlug: "zynga-poker", name: "10 Billion Chips", category: "Chips", amount: 10, currency: "BILLIONS", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "zynga-50b", game: "Zynga Poker", gameSlug: "zynga-poker", name: "50 Billion Chips", category: "Chips", amount: 50, currency: "BILLIONS", price: 3.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "zynga-200b", game: "Zynga Poker", gameSlug: "zynga-poker", name: "200 Billion Chips", category: "Chips", amount: 200, currency: "BILLIONS", price: 12.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "zynga-1t", game: "Zynga Poker", gameSlug: "zynga-poker", name: "1 Trillion Chips", category: "Chips", amount: 1000, currency: "BILLIONS", price: 49.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "zynga-10t", game: "Zynga Poker", gameSlug: "zynga-poker", name: "10 Trillion Chips", category: "Chips", amount: 10000, currency: "BILLIONS", price: 399.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "zynga-100t", game: "Zynga Poker", gameSlug: "zynga-poker", name: "100 Trillion Chips", category: "Chips", amount: 100000, currency: "BILLIONS", price: 2999.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },

  // 7. POKER MEGA WORLD
  { id: "pmw-10b", game: "Poker Mega World Billions", gameSlug: "poker-mega", name: "10 Billion Chips", category: "Chips", amount: 10, currency: "BILLIONS", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pmw-100b", game: "Poker Mega World Billions", gameSlug: "poker-mega", name: "100 Billion Chips", category: "Chips", amount: 100, currency: "BILLIONS", price: 5.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "pmw-1t", game: "Poker Mega World Billions", gameSlug: "poker-mega", name: "1 Trillion Chips", category: "Chips", amount: 1000, currency: "BILLIONS", price: 45.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "pmw-100t", game: "Poker Mega World Billions", gameSlug: "poker-mega", name: "100 Trillion Chips", category: "Chips", amount: 100000, currency: "BILLIONS", price: 2999.99, image: "https://i.imgur.com/8QmQpXl.png" },

  // 8. ROBLOX - Standard Robux
  { id: "rbx-40r", game: "Roblox", gameSlug: "roblox", name: "40 Robux", category: "Robux", amount: 40, currency: "ROBUX", price: 0.49, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "rbx-80r", game: "Roblox", gameSlug: "roblox", name: "80 Robux", category: "Robux", amount: 80, currency: "ROBUX", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "rbx-400r", game: "Roblox", gameSlug: "roblox", name: "400 Robux", category: "Robux", amount: 400, currency: "ROBUX", price: 4.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "rbx-800r", game: "Roblox", gameSlug: "roblox", name: "800 Robux", category: "Robux", amount: 800, currency: "ROBUX", price: 9.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "rbx-1700r", game: "Roblox", gameSlug: "roblox", name: "1700 Robux", category: "Robux", amount: 1700, currency: "ROBUX", price: 19.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "rbx-4500r", game: "Roblox", gameSlug: "roblox", name: "4500 Robux", category: "Robux", amount: 4500, currency: "ROBUX", price: 49.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "rbx-10000r", game: "Roblox", gameSlug: "roblox", name: "10000 Robux", category: "Robux", amount: 10000, currency: "ROBUX", price: 99.99, image: "https://i.imgur.com/8QmQpXl.png" },

  // 9. FORTNITE - V-Bucks
  { id: "fn-100v", game: "Fortnite", gameSlug: "fortnite", name: "100 V-Bucks", category: "V-Bucks", amount: 100, currency: "V-BUCKS", price: 0.79, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "fn-500v", game: "Fortnite", gameSlug: "fortnite", name: "500 V-Bucks", category: "V-Bucks", amount: 500, currency: "V-BUCKS", price: 3.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "fn-1000v", game: "Fortnite", gameSlug: "fortnite", name: "1000 V-Bucks", category: "V-Bucks", amount: 1000, currency: "V-BUCKS", price: 7.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "fn-2800v", game: "Fortnite", gameSlug: "fortnite", name: "2800 V-Bucks", category: "V-Bucks", amount: 2800, currency: "V-BUCKS", price: 19.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "fn-5000v", game: "Fortnite", gameSlug: "fortnite", name: "5000 V-Bucks", category: "V-Bucks", amount: 5000, currency: "V-BUCKS", price: 31.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "fn-13500v", game: "Fortnite", gameSlug: "fortnite", name: "13500 V-Bucks", category: "V-Bucks", amount: 13500, currency: "V-BUCKS", price: 79.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },

  // 10. CALL OF DUTY
  { id: "cod-80cp", game: "Call of Duty Mobile", gameSlug: "call-of-duty", name: "80 CP", category: "CP", amount: 80, currency: "CP", price: 0.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "cod-400cp", game: "Call of Duty Mobile", gameSlug: "call-of-duty", name: "400 CP", category: "CP", amount: 400, currency: "CP", price: 4.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "cod-800cp", game: "Call of Duty Mobile", gameSlug: "call-of-duty", name: "800 CP", category: "CP", amount: 800, currency: "CP", price: 9.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
  { id: "cod-2000cp", game: "Call of Duty Mobile", gameSlug: "call-of-duty", name: "2000 CP", category: "CP", amount: 2000, currency: "CP", price: 24.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "cod-8000cp", game: "Call of Duty Mobile", gameSlug: "call-of-duty", name: "8000 CP", category: "CP", amount: 8000, currency: "CP", price: 99.99, image: "https://i.imgur.com/8QmQpXl.png" },
  { id: "cod-battle-pass", game: "Call of Duty Mobile", gameSlug: "call-of-duty", name: "Battle Pass", category: "Pass", amount: 1, currency: "PACK", price: 4.99, image: "https://i.imgur.com/8QmQpXl.png", popular: true },
];

// Checkout requires ID + Email
export type TopUpForm = {
  playerId: string;
  email: string;
  serverId?: string;
  productId: string;
};
