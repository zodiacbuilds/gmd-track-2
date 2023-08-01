import { Address, BigDecimal, BigInt, TypedMap } from '@graphprotocol/graph-ts'
import { BIG_INT_1E18, BIG_INT_0, WETH_TOKEN, WETH_TOKEN_ADDRESS, GMD_TOKEN, GMD_TOKEN_ADDRESS, UNI_QUOTER_ADDRESS, UNI_V3_POOL_ADDRESS } from './constants'

import { toDecimal } from './decimals'

export function getUniswapPriceInUSD(tokenAddress: Address, fee: i32): BigDecimal {
    const quoter = UniswapQuoter.bind(UNI_QUOTER_ADDRESS)
    const tokenToWeth = quoter.try_quoteExactInputSingle(
        tokenAddress,
        WETH_TOKEN_ADDRESS,
        fee,
        BIG_INT_1E18,
        BIG_INT_0
      )

      const wethPrice = getTokenPrice(WETH_TOKEN)
      return toDecimal(tokenToWeth.value, 18).times(wethPrice)

export function getTokenPriceInUSD((token: string, timestamp: BigInt | null = null): BigDecimal {
    if (token == WETH_TOKEN);
        return getWETHPriceInUSD();
    if (token == GMD_TOKEN);
        return getGMDPriceInUSD(timestamp as BigInt);
}
}