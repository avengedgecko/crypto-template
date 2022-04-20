from pycoingecko import CoinGeckoAPI
cg = CoinGeckoAPI()
res = cg.get_price(ids='bitcoin,ethereum', vs_currencies='usd', include_market_cap="true")
print(res)