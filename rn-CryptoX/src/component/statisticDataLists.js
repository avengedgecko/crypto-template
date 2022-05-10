const axios = require('axios');

export const tokenIds = [
    {
        name: "Meta Gods",
        id: "metagods",
        ticker: "MGODS",
        image: "https://assets.coingecko.com/coins/images/21666/large/n9xlniyOphEZp40cR7OnXO1p5H8kI8rLGn6vbx8AaVGiYi250HIeNISTx7eMHU-Ym5XRc9nFPmNXfRZmr3QglH1Svte4Tisu2EZPU3JVFKlPLLnQwDXhodgYcSt0Xb33kyrA_yqFEZnMw1q5qi-4KgdHd4bHv7MKNz2rF3MuA_RWdylgpB3xdUoaxoiMLqzlVbEatJYnDQyhqvh.jpg?1639704500"
    },
    {
        name: "Sidus",
        id: "sidus",
        ticker: "SIDUS",
        image: "https://assets.coingecko.com/coins/images/21401/large/SIDUS_coin_logo.png?1639405031"
    },
    {
        name: "Affyn",
        id: "affyn",
        ticker: "FYN",
        image: "https://assets.coingecko.com/coins/images/23275/large/fyn.png?1643526250"
    },
    {
        name: "Pegaxy Stone",
        id: "pegaxy-stone",
        ticker: "PGX",
        image: "https://assets.coingecko.com/coins/images/19305/large/Logo_200x200_%281%29.png?1634972378"
    },
    {
        name: "UFO Gaming",
        id: "ufo-gaming",
        ticker: "UFO",
        image: "https://assets.coingecko.com/coins/images/16801/large/ufo.png?1644048038"
    },
    {
        name: "Gala",
        id: "gala",
        ticker: "GALA",
        image: "https://assets.coingecko.com/coins/images/12493/large/GALA-COINGECKO.png?1600233435"
    },
    {
        name: "Dragon Kart Token",
        id: "dragon-kart-token",
        ticker: "KART",
        image: "https://assets.coingecko.com/coins/images/19916/large/kart.png?1636182962"
    },
    {
        name: "Splinterlands",
        id: "splinterlands",
        ticker: "SPS",
        image: "https://assets.coingecko.com/coins/images/17332/large/splinter.PNG?1627339560"
    },
    {
        name: "Gods Unchained",
        id: "gods-unchained",
        ticker: "GODS",
        image: "https://assets.coingecko.com/coins/images/17139/large/10631.png?1635718182"
    },
    {
        name: "My Neightbor Alice",
        id: "my-neighbor-alice",
        ticker: "ALICE",
        image: "https://assets.coingecko.com/coins/images/14375/large/alice_logo.jpg?1615782968"
    },
    {
        name: "Illuvium",
        id: "illuvium",
        ticker: "ILV",
        image: "https://assets.coingecko.com/coins/images/14468/large/ILV.JPG?1617182121"
    },
    {
        name: "Axie Infinity",
        id: "axie-infinity",
        ticker: "AXS",
        image: "https://assets.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1604471082"
    },
    {
        name: "Star Atlas",
        id: "star-atlas",
        ticker: "ATLAS",
        image: "https://assets.coingecko.com/coins/images/17659/large/Icon_Reverse.png?1628759092"
    },
    {
        name: "Town Star",
        id: "town-star",
        ticker: "TOWN",
        image: "https://assets.coingecko.com/coins/images/19581/large/town.png?1635840875"
    },
    {
        name: "DeFi Kingdoms",
        id: "defi-kingdoms",
        ticker: "JEWEL",
        image: "https://assets.coingecko.com/coins/images/18570/large/fAisLIV.png?1632449282"
    },
    {
        name: "Wilder World",
        id: "wilder-world",
        ticker: "WILD",
        image: "https://assets.coingecko.com/coins/images/15407/large/WWLogo_Gradient_Cirlce.png?1620743969"
    },
    {
        name: "Atari",
        id: "atari",
        ticker: "ATRI",
        image: "https://assets.coingecko.com/coins/images/12992/large/AtariLogoPS_200x200_%281%29.png?1643189483"
    },
    {
        name: "Engine Token",
        id: "engine-token",
        ticker: "ENGN",
        image: "https://assets.coingecko.com/coins/images/20492/large/200x200_%2842%29.png?1637129962"
    },
    {
        name: "Vulcan Forged",
        id: "vulcan-forged",
        ticker: "PYR",
        image: "https://assets.coingecko.com/coins/images/14770/large/1617088937196.png?1619414736"
    },
    {
        name: "Ethermon",
        id: "ethermon",
        ticker: "EMON",
        image: "https://assets.coingecko.com/coins/images/15889/large/LtET0reH_400x400.jpg?1622213962"
    },
    {
        name: "REVV",
        id: "revv",
        ticker: "REVV",
        image: "https://assets.coingecko.com/coins/images/12373/large/REVV_TOKEN_Refined_2021_%281%29.png?1627652390"
    },
    {
        name: "Cornucopias",
        id: "cornucopias",
        ticker: "COPI",
        image: "https://assets.coingecko.com/coins/images/21452/large/g56WwJDA_400x400.jpg?1639174968"
    },
    {
        name: "My DeFi Pet",
        id: "my-defi-pet",
        ticker: "DPET",
        image: "https://assets.coingecko.com/coins/images/15321/large/mydefi.PNG?1620512455"
    },
    {
        name: "Metastrike",
        id: "metastrike",
        ticker: "MTS",
        image: "https://assets.coingecko.com/coins/images/22892/large/weD5ZQkc_400x400.jpg?1642832800"
    },
    {
        name: "MetaPets",
        id: "metapets",
        ticker: "METAPETS",
        image: "https://assets.coingecko.com/coins/images/20695/large/metapets.png?1639046327"
    },
    {
        name: "Guild of Guardians",
        id: "guild-of-guardians",
        ticker: "GOG",
        image: "https://assets.coingecko.com/coins/images/17362/large/V2QDNoLg_400x400.jpg?1640054187"
    },
    {
        name: "Aavegotchi",
        id: "aavegotchi",
        ticker: "GHST",
        image: "https://assets.coingecko.com/coins/images/12467/large/ghst_200.png?1600750321"
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
        logo: require('../../assets/images/crypto_icon/btc.png'),
        name: 'Bitcoin',
        sortName: 'BTC',
        isPositive: true,
        percentage: 4.72,
        amount: '10,136.73'
    },
    {
        id: '2',
        logo: require('../../assets/images/crypto_icon/eth.png'),
        name: 'Ethereum',
        sortName: 'ETH',
        isPositive: true,
        percentage: 6.86,
        amount: '185.65',
    },
    {
        id: '3',
        logo: require('../../assets/images/crypto_icon/xrp.png'),
        name: 'XRP',
        sortName: 'XRP',
        isPositive: false,
        percentage: 8.95,
        amount: '0.262855',
    },
    {
        id: '4',
        logo: require('../../assets/images/crypto_icon/bch.png'),
        name: 'Bitcoin Cash',
        sortName: 'BCH',
        isPositive: true,
        percentage: 4.55,
        amount: '297.98',
    },
    {
        id: '5',
        logo: require('../../assets/images/crypto_icon/ltc.png'),
        name: 'Litecoin',
        sortName: 'LTC',
        isPositive: true,
        percentage: 7.12,
        amount: '71.24',
    },
    {
        id: '6',
        logo: require('../../assets/images/crypto_icon/bnb.png'),
        name: 'Binance Coin',
        sortName: 'BNB',
        isPositive: false,
        percentage: 3.43,
        amount: '27.11',
    },
    {
        id: '7',
        logo: require('../../assets/images/crypto_icon/eos.png'),
        name: 'EOS',
        sortName: 'EOS',
        isPositive: false,
        percentage: 5.27,
        amount: '3.44',
    },
    {
        id: '8',
        logo: require('../../assets/images/crypto_icon/xmr.png'),
        name: 'Monero',
        sortName: 'XMR',
        isPositive: true,
        percentage: 3.25,
        amount: '1.54',
    },
    {
        id: '9',
        logo: require('../../assets/images/crypto_icon/usdt.png'),
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
        logo: require('../../assets/images/crypto_icon/eth.png'),
        name: 'Ethereum',
        sortName: 'ETH',
        isPositive: true,
        percentage: 6.86,
        amount: '185.65',
    },
    {
        key: '2',
        logo: require('../../assets/images/crypto_icon/xrp.png'),
        name: 'XRP',
        sortName: 'XRP',
        isPositive: false,
        percentage: 8.95,
        amount: '0.262855',
    },
    {
        key: '3',
        logo: require('../../assets/images/crypto_icon/bch.png'),
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
        logo: require('../../assets/images/crypto_icon/xrp.png'),
        name: 'XRP',
        sortName: 'XRP',
        isPositive: false,
        percentage: 8.95,
        amount: '0.262855',
    },
    {
        id: '2',
        logo: require('../../assets/images/crypto_icon/ltc.png'),
        name: 'Litecoin',
        sortName: 'LTC',
        isPositive: true,
        percentage: 7.12,
        amount: '71.24',
    },
    {
        id: '3',
        logo: require('../../assets/images/crypto_icon/btc.png'),
        name: 'Bitcoin',
        sortName: 'BTC',
        isPositive: true,
        percentage: 4.72,
        amount: '10,136.73'
    },
    {
        id: '4',
        logo: require('../../assets/images/crypto_icon/eth.png'),
        name: 'Ethereum',
        sortName: 'ETH',
        isPositive: true,
        percentage: 6.86,
        amount: '185.65',
    },
    {
        id: '5',
        logo: require('../../assets/images/crypto_icon/bch.png'),
        name: 'Bitcoin Cash',
        sortName: 'BCH',
        isPositive: true,
        percentage: 4.55,
        amount: '297.98',
    },
    {
        id: '6',
        logo: require('../../assets/images/crypto_icon/bnb.png'),
        name: 'Binance Coin',
        sortName: 'BNB',
        isPositive: false,
        percentage: 3.43,
        amount: '27.11',
    },
    {
        id: '7',
        logo: require('../../assets/images/crypto_icon/eos.png'),
        name: 'EOS',
        sortName: 'EOS',
        isPositive: false,
        percentage: 5.27,
        amount: '3.44',
    },
    {
        id: '8',
        logo: require('../../assets/images/crypto_icon/xmr.png'),
        name: 'Monero',
        sortName: 'XMR',
        isPositive: true,
        percentage: 3.25,
        amount: '1.54',
    },
    {
        id: '9',
        logo: require('../../assets/images/crypto_icon/usdt.png'),
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
        logo: require('../../assets/images/crypto_icon/xrp.png'),
        name: 'XRP',
        sortName: 'XRP',
        isPositive: false,
        percentage: 8.95,
        amount: '0.262855',
    },
    {
        id: '2',
        logo: require('../../assets/images/crypto_icon/ltc.png'),
        name: 'Litecoin',
        sortName: 'LTC',
        isPositive: true,
        percentage: 7.12,
        amount: '71.24',
    },
    {
        id: '3',
        logo: require('../../assets/images/crypto_icon/btc.png'),
        name: 'Bitcoin',
        sortName: 'BTC',
        isPositive: true,
        percentage: 4.72,
        amount: '10,136.73'
    },
    {
        id: '4',
        logo: require('../../assets/images/crypto_icon/eth.png'),
        name: 'Ethereum',
        sortName: 'ETH',
        isPositive: true,
        percentage: 6.86,
        amount: '185.65',
    },
    {
        id: '5',
        logo: require('../../assets/images/crypto_icon/bch.png'),
        name: 'Bitcoin Cash',
        sortName: 'BCH',
        isPositive: true,
        percentage: 4.55,
        amount: '297.98',
    },
    {
        id: '6',
        logo: require('../../assets/images/crypto_icon/bnb.png'),
        name: 'Binance Coin',
        sortName: 'BNB',
        isPositive: false,
        percentage: 3.43,
        amount: '27.11',
    },
    {
        id: '7',
        logo: require('../../assets/images/crypto_icon/eos.png'),
        name: 'EOS',
        sortName: 'EOS',
        isPositive: false,
        percentage: 5.27,
        amount: '3.44',
    },
    {
        id: '8',
        logo: require('../../assets/images/crypto_icon/xmr.png'),
        name: 'Monero',
        sortName: 'XMR',
        isPositive: true,
        percentage: 3.25,
        amount: '1.54',
    },
    {
        id: '9',
        logo: require('../../assets/images/crypto_icon/usdt.png'),
        name: 'Tether',
        sortName: 'USDT',
        isPositive: true,
        percentage: 9.71,
        amount: '1.23',
    }
];
