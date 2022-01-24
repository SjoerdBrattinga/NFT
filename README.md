Running on http://nft-sjoerdbrattinga.vercel.app/

The website is made with Next.js + Tailwind CSS Example

Type `yarn` on main folder to install the requirements. `yarn dev` to start running on your computer (localhost:3000).

/image_generation has the python code

/contract has the solidity code.

Use remix.ethereum to deploy the smart contract to the Rinkeby testnet.

Replace ADDRESS in config.js with the address of the deployed smart contract. 

To add the collab.land bot to a Discord server follow the tutorial below.
https://collab-land.gitbook.io/collab-land/bots/discord

In the #collabland-config channel type !setup and use the following configuration. 

1. @Member
Network: Rinkeby
Type: ERC721
Token Address: YourContractAddress
Min Tokens: 1

To host the application put this code GitHub a repository. Go to https://vercel.com and log in with github. Select the repository you want to host.

Extra links:

Remix IDE: https://remix.ethereum.org

IPFS Command line reference: https://docs.ipfs.io/reference/cli/#ipfs-add

Pinata Cloud: https://pinata.cloud

IPFS to Arweave: https://ipfs2arweave.com/

Opensea Metadata Standard: https://docs.opensea.io/docs/metadata-standards
