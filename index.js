//1. Import coingecko-api
const CoinGecko = require('coingecko-api');
const axios = require('axios');
//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();


//3. Make calls
var logos = async() => {
    let ids = tokenIds.map(x => x.id);

    for (id of ids) {
        try {
            console.log("\n" + id)
            let data = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
            console.log(data.data.image.large)
        } catch (e) {

        }
    //     console.log("\n")
    }
  //   console.log(coins)
  };

  
//3. Make calls
var func = async() => {
  let ids = tokenIds.map(x => x.id);
  let data = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids.join()}&include_market_cap=true&include_24hr_change=true&vs_currencies=usd`);
  let coins = [];
  let i = 0;
  for (key of Object.keys(data.data)) {
    const obj = {
        name : tokenIds.find( x => x.id === key).name,
        ticker : tokenIds.find( x => x.id === key).ticker,
        id : key,
        usd : data.data[key].usd,
        change_24hr : data.data[key].usd_24h_change
    }
    coins.push(obj)
  }
//   console.log(coins)
};

const tokenIds = [
    {
        name: "Meta Gods",
        id: "metagods",
        ticker: "MGODS"
    },
    {
        name: "Sidus",
        id: "sidus",
        ticker: "SIDUS"
    },
    {
        name: "Thetan Arena",
        id: "theta-arena",
        ticker: "THG"
    },
    {
        name: "Affyn",
        id: "affyn",
        ticker: "FYN"
    },
    {
        name: "Pegaxy Stone",
        id: "pegaxy-stone",
        ticker: "PGX"
    },
    {
        name: "UFO Gaming",
        id: "ufo-gaming",
        ticker: "UFO"
    },
    {
        name: "Gala",
        id: "gala",
        ticker: "GALA"
    },
    {
        name: "Dragon Kart Token",
        id: "dragon-kart-token",
        ticker: "KART"
    },
    {
        name: "Splinterlands",
        id: "splinterlands",
        ticker: "SPS"
    },
    {
        name: "Gods Unchained",
        id: "gods-unchained",
        ticker: "GODS"
    },
    {
        name: "My Neightbor Alice",
        id: "my-neighbor-alice",
        ticker: "ALICE"
    },
    {
        name: "Mines of Delarnia",
        id: "mines-of-delarnia",
        ticker: "DAR"
    },
    {
        name: "Illuvium",
        id: "illuvium",
        ticker: "ILV"
    },
    {
        name: "CryptoBlades",
        id: "crypto-blades",
        ticker: "SKILL"
    },
    {
        name: "Axie Infinity",
        id: "axie-infinity",
        ticker: "AXS"
    },
    {
        name: "Star Atlas",
        id: "star-atlas",
        ticker: "ATLAS"
    },
    {
        name: "Town Star",
        id: "town-star",
        ticker: "TOWN"
    },
    {
        name: "DeFi Kingdoms",
        id: "defi-kingdoms",
        ticker: "JEWEL"
    },
    {
        name: "Wilder World",
        id: "wilder-world",
        ticker: "WILD"
    },
    {
        name: "Atari",
        id: "atari",
        ticker: "ATRI"
    },
    {
        name: "Engine Token",
        id: "engine-token",
        ticker: "ENGN"
    },
    {
        name: "Vulcan Forged",
        id: "vulcan-forged",
        ticker: "PYR"
    },
    {
        name: "Ethermon",
        id: "ethermon",
        ticker: "EMON"
    },
    {
        name: "REVV",
        id: "revv",
        ticker: "REVV"
    },
    {
        name: "Cornucopias",
        id: "cornucopias",
        ticker: "COPI"
    },
    {
        name: "My DeFi Pet",
        id: "my-defi-pet",
        ticker: "DPET"
    },
    {
        name: "Plants vs Undead",
        id: "plants-vs-undead-token",
        ticker: "PVU"
    },
    {
        name: "Metastrike",
        id: "metastrike",
        ticker: "MTS"
    },
    {
        name: "MetaPets",
        id: "metapets",
        ticker: "METAPETS"
    },
    {
        name: "Guild of Guardians",
        id: "guild-of-guardians",
        ticker: "GOG"
    },
    {
        name: "Aavegotchi",
        id: "aavegotchi",
        ticker: "GHST"
    }
];
logos().then()
