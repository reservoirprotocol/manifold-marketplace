<<<<<<< HEAD
import { mainnet, Chain } from 'wagmi/chains'
=======
import { constants } from 'ethers'
import { mainnet } from 'wagmi/chains'
<<<<<<< HEAD
>>>>>>> 382da30 (resolve conflicts)
=======
>>>>>>> 27b9acf (resolve conflicts)

//CONFIGURABLE: The default export controls the supported chains for the marketplace. Removing
// or adding chains will result in adding more or less chains to the marketplace.
// They are an extension of the wagmi chain objects

type ReservoirChain = Chain & {
  lightIconUrl: string
  darkIconUrl: string
  reservoirBaseUrl: string
  proxyApi: string
  routePrefix: string
  apiKey?: string
  coingeckoId?: string
  collectionSetId?: string
  community?: string
}

export const DefaultChain: ReservoirChain = {
  ...mainnet,
  // Any url to display the logo of the chain in light mode
  lightIconUrl: '/icons/eth-icon-dark.svg',
  // Any url to display the logo of the chain in dark mode
  darkIconUrl: '/icons/eth-icon-light.svg',
  // The base url of the reservoir api, this is used in the app when
  // directly interacting with the reservoir indexer servers (in the api proxy for example)
  // or when prefetching server side rendered data
  reservoirBaseUrl: 'https://api.reservoir.tools',
  // Used on the client side portions of the marketplace that need an api key added
  // Prevents the api key from being leaked in the clientside requests
  // If you'd like to disable proxying you can just change the proxyApi to the reservoirBaseUrl
  // Doing so will omit the api key unless further changes are made
  proxyApi: '/api/reservoir/ethereum',
  // A prefix used in the asset specific routes on the app (tokens/collections)
  routePrefix: 'ethereum',
  // Reservoir API key which you can generate at https://reservoir.tools/
  // This is a protected key and displays as 'undefined' on the browser
  // DO NOT add NEXT_PUBLIC to the key or you'll risk leaking it on the browser
  apiKey: process.env.ETH_RESERVOIR_API_KEY,
  // Coingecko id, used to convert the chain's native prices to usd. Can be found here:
  // https://www.coingecko.com/en/api/documentation#operations-coins-get_coins_list
  coingeckoId: 'ethereum',
  collectionSetId: process.env.NEXT_PUBLIC_ETH_COLLECTION_SET_ID,
  community: process.env.NEXT_PUBLIC_ETH_COMMUNITY,
}

export default [DefaultChain]
