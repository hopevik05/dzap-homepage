import oneInch from '../../../Assets/Icons/1inch.svg';
import frontier from '../../../Assets/Icons/frontier.svg';
import graph from '../../../Assets/Icons/graph.svg';
import push from '../../../Assets/Icons/push.svg';
import unmarshal from '../../../Assets/Icons/unmarshal.svg';
import zeroswap from '../../../Assets/Icons/zeroswap.svg';

const ecosystems = [
  {
    logo: unmarshal,
    desc: 'Unmarshal is a Chain-Agnostic blockchain protocol consisting of a network of blockchain indexes to curate customizable data for DeFi applications.',
    type: 'Provider',
    link: 'https://unmarshal.io',
  },
  {
    logo: oneInch,
    desc: '1inch is a DEX aggregator that picks and chooses the cheapest crypto prices across decentralized exchanges.',
    type: 'Provider',
    link: 'https://1inch.io',
  },
  {
    logo: push,
    desc: 'Push is a web3-native communication protocol, enabling cross-chain notifications and messaging for dapps, wallets, and services.',
    type: 'Provider',
    link: 'https://push.org',
  },
  {
    logo: graph,
    desc: 'The Graph is the indexing and query layer of Web3.',
    type: 'Provider',
    link: 'https://thegraph.com',
  },
  {
    logo: zeroswap,
    desc: 'Zeroswap is a multi-chain compatible decentralized exchange aggregator protocol making zero-fee transactions possible.',
    type: 'Taker',
    link: 'https://zeroswap.io',
  },
  {
    logo: frontier,
    desc: 'Frontier is a crypto, DeFi, and NFT-compatible wallet that allows users to interact with Web3 products and services on their mobile devices.',
    type: 'Taker',
    link: 'https://frontier.xyz',
  },
];

export default function Ecosystems() {
  return (
    <div className="ecosystem-container py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="ecosystem-title text-5xl md:text-7xl lg:text-94px text-center">
          ECOSYSTEM
        </p>
        <p className="-mt-1 primary-head text-xl md:text-3xl lg:text-4xl">
          Explore DZap’s ecosystem
        </p>
        <ul className="mx-auto mt-8 md:mt-12 lg:mt-16 mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {ecosystems.map((ecosystem) => (
            <button
            type='button'
            onClick={()=>window.open(ecosystem.link, '_blank')}
              key={ecosystem.type}
              className="rounded-2xl mx-4 md:mx-0 lg:mx-0 ecosystem-item py-6 px-3"
            >
              <div className="flex justify-between">
                <img src={ecosystem.logo} className="pl-3" alt="logo" />
                <p
                  style={ecosystem.type === 'Taker' ? { color: '#00FFA4' } : {}}
                  className="ecosystem-type py-1.5"
                >
                  {ecosystem.type}
                </p>
              </div>
              <p className="ecosystem-desc pt-2 px-3 text-left">{ecosystem.desc}</p>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}
