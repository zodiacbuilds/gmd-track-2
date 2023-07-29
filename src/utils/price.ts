import { Address, BigDecimal, BigInt, TypedMap } from '@graphprotocol/graph-ts'

import { toDecimal } from '../utils/decimals'

UNI_QUOTER_ADDRESS = 
WETH_ADDRESS =
BIG_INT_1E18 =
BIG_INT_0 = 

export function getUniswapPriceInUSD(tokenAddress: Address, fee: i32): BigDecimal {
    const quoter = UniswapQuoter.bind(UNI_QUOTER_ADDRESS)
    const tokenToWeth = quoter.try_quoteExactInputSingle(
        tokenAddress,
        WETH_ADDRESS,
        fee,
        BIG_INT_1E18,
        BIG_INT_0
      )

      const wethPrice = getTokenPrice(WETH_TOKEN)
      return toDecimal(tokenToWeth.value, 18).times(wethPrice)
}