const axios = require('axios');

export const tokenIds = [
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
]
export async function getData() {
    const res = await axios
    .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24H'
    )
    console.log(res.data[0]);
    const mgod = await axios
    .get(
        'https://api.coingecko.com/api/v3/coins/MGOD?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24H'
    )
    console.log(mgod.data);
    return [mgod.data];
}
export const AllData = [
    {
        id: '1',
        logo: require('../assets/images/crypto_icon/btc.png'),
        name: 'Bitcoin',
        sortName: 'BTC',
        isPositive: true,
        percentage: 4.72,
        amount: '10,136.73'
    },
    {
        id: '2',
        logo: require('../assets/images/crypto_icon/eth.png'),
        name: 'Ethereum',
        sortName: 'ETH',
        isPositive: true,
        percentage: 6.86,
        amount: '185.65',
    },
    {
        id: '3',
        logo: require('../assets/images/crypto_icon/xrp.png'),
        name: 'XRP',
        sortName: 'XRP',
        isPositive: false,
        percentage: 8.95,
        amount: '0.262855',
    },
    {
        id: '4',
        logo: require('../assets/images/crypto_icon/bch.png'),
        name: 'Bitcoin Cash',
        sortName: 'BCH',
        isPositive: true,
        percentage: 4.55,
        amount: '297.98',
    },
    {
        id: '5',
        logo: require('../assets/images/crypto_icon/ltc.png'),
        name: 'Litecoin',
        sortName: 'LTC',
        isPositive: true,
        percentage: 7.12,
        amount: '71.24',
    },
    {
        id: '6',
        logo: require('../assets/images/crypto_icon/bnb.png'),
        name: 'Binance Coin',
        sortName: 'BNB',
        isPositive: false,
        percentage: 3.43,
        amount: '27.11',
    },
    {
        id: '7',
        logo: require('../assets/images/crypto_icon/eos.png'),
        name: 'EOS',
        sortName: 'EOS',
        isPositive: false,
        percentage: 5.27,
        amount: '3.44',
    },
    {
        id: '8',
        logo: require('../assets/images/crypto_icon/xmr.png'),
        name: 'Monero',
        sortName: 'XMR',
        isPositive: true,
        percentage: 3.25,
        amount: '1.54',
    },
    {
        id: '9',
        logo: require('../assets/images/crypto_icon/usdt.png'),
        name: 'Tether',
        sortName: 'USDT',
        isPositive: true,
        percentage: 9.71,
        amount: '1.23',
    }
];

export const WatchlistData = [
    {
        key: '1',
        logo: require('../assets/images/crypto_icon/eth.png'),
        name: 'Ethereum',
        sortName: 'ETH',
        isPositive: true,
        percentage: 6.86,
        amount: '185.65',
    },
    {
        key: '2',
        logo: require('../assets/images/crypto_icon/xrp.png'),
        name: 'XRP',
        sortName: 'XRP',
        isPositive: false,
        percentage: 8.95,
        amount: '0.262855',
    },
    {
        key: '3',
        logo: require('../assets/images/crypto_icon/bch.png'),
        name: 'Bitcoin Cash',
        sortName: 'BCH',
        isPositive: true,
        percentage: 4.55,
        amount: '297.98',
    },
];

export const TopGainerData = [
    {
        id: '1',
        logo: require('../assets/images/crypto_icon/xrp.png'),
        name: 'XRP',
        sortName: 'XRP',
        isPositive: false,
        percentage: 8.95,
        amount: '0.262855',
    },
    {
        id: '2',
        logo: require('../assets/images/crypto_icon/ltc.png'),
        name: 'Litecoin',
        sortName: 'LTC',
        isPositive: true,
        percentage: 7.12,
        amount: '71.24',
    },
    {
        id: '3',
        logo: require('../assets/images/crypto_icon/btc.png'),
        name: 'Bitcoin',
        sortName: 'BTC',
        isPositive: true,
        percentage: 4.72,
        amount: '10,136.73'
    },
    {
        id: '4',
        logo: require('../assets/images/crypto_icon/eth.png'),
        name: 'Ethereum',
        sortName: 'ETH',
        isPositive: true,
        percentage: 6.86,
        amount: '185.65',
    },
    {
        id: '5',
        logo: require('../assets/images/crypto_icon/bch.png'),
        name: 'Bitcoin Cash',
        sortName: 'BCH',
        isPositive: true,
        percentage: 4.55,
        amount: '297.98',
    },
    {
        id: '6',
        logo: require('../assets/images/crypto_icon/bnb.png'),
        name: 'Binance Coin',
        sortName: 'BNB',
        isPositive: false,
        percentage: 3.43,
        amount: '27.11',
    },
    {
        id: '7',
        logo: require('../assets/images/crypto_icon/eos.png'),
        name: 'EOS',
        sortName: 'EOS',
        isPositive: false,
        percentage: 5.27,
        amount: '3.44',
    },
    {
        id: '8',
        logo: require('../assets/images/crypto_icon/xmr.png'),
        name: 'Monero',
        sortName: 'XMR',
        isPositive: true,
        percentage: 3.25,
        amount: '1.54',
    },
    {
        id: '9',
        logo: require('../assets/images/crypto_icon/usdt.png'),
        name: 'Tether',
        sortName: 'USDT',
        isPositive: true,
        percentage: 9.71,
        amount: '1.23',
    }
];

export const TopLosersData = [
    {
        id: '1',
        logo: require('../assets/images/crypto_icon/xrp.png'),
        name: 'XRP',
        sortName: 'XRP',
        isPositive: false,
        percentage: 8.95,
        amount: '0.262855',
    },
    {
        id: '2',
        logo: require('../assets/images/crypto_icon/ltc.png'),
        name: 'Litecoin',
        sortName: 'LTC',
        isPositive: true,
        percentage: 7.12,
        amount: '71.24',
    },
    {
        id: '3',
        logo: require('../assets/images/crypto_icon/btc.png'),
        name: 'Bitcoin',
        sortName: 'BTC',
        isPositive: true,
        percentage: 4.72,
        amount: '10,136.73'
    },
    {
        id: '4',
        logo: require('../assets/images/crypto_icon/eth.png'),
        name: 'Ethereum',
        sortName: 'ETH',
        isPositive: true,
        percentage: 6.86,
        amount: '185.65',
    },
    {
        id: '5',
        logo: require('../assets/images/crypto_icon/bch.png'),
        name: 'Bitcoin Cash',
        sortName: 'BCH',
        isPositive: true,
        percentage: 4.55,
        amount: '297.98',
    },
    {
        id: '6',
        logo: require('../assets/images/crypto_icon/bnb.png'),
        name: 'Binance Coin',
        sortName: 'BNB',
        isPositive: false,
        percentage: 3.43,
        amount: '27.11',
    },
    {
        id: '7',
        logo: require('../assets/images/crypto_icon/eos.png'),
        name: 'EOS',
        sortName: 'EOS',
        isPositive: false,
        percentage: 5.27,
        amount: '3.44',
    },
    {
        id: '8',
        logo: require('../assets/images/crypto_icon/xmr.png'),
        name: 'Monero',
        sortName: 'XMR',
        isPositive: true,
        percentage: 3.25,
        amount: '1.54',
    },
    {
        id: '9',
        logo: require('../assets/images/crypto_icon/usdt.png'),
        name: 'Tether',
        sortName: 'USDT',
        isPositive: true,
        percentage: 9.71,
        amount: '1.23',
    }
];