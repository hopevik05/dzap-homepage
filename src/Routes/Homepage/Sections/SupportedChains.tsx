import iconArbitrum from '../../../Assets/Icons/arbitrum.svg';
import iconBinance from '../../../Assets/Icons/binance.svg';
import iconEthereum from '../../../Assets/Icons/ethereum.svg';
import iconOptimism from '../../../Assets/Icons/optimism.svg';
import iconPolygon from '../../../Assets/Icons/polygon.svg';
import iconZkSync from '../../../Assets/Icons/zk-sync.svg';

export default function SupportedChains() {
  const chains = [
    { name: 'Ethereum', icon: iconEthereum },
    { name: 'BSC Chain', icon: iconBinance },
    { name: 'Polygon', icon: iconPolygon },
    { name: 'Arbitrum', icon: iconArbitrum },
    { name: 'Optimism', icon: iconOptimism },
    { name: 'zkSync Era', icon: iconZkSync },
  ];

  return (
    <div className="supported-chains-container">
      <span className="lg:hidden flex justify-center pt-5 -mb-3 lg:text-xl text-lg live-on-txt">
        Live on~
      </span>
      <div className="mx-auto flex justify-center py-6 lg:py-3">
        <span className="hidden lg:flex flex items-center mr-8 lg:text-xl text-lg live-on-txt">
          Live on~
        </span>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-x-8">
          {chains.map((chain) => (
            <div key={chain.name} className="flex items-center">
              <img
                className="w-8 lg:w-12 md:w-10"
                src={chain.icon}
                alt={chain.name}
              />
              <p className="ml-2 chain-name text-lg lg:text-xl md:text-base">
                {chain.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* div className="wrapper">
        {chains.map((chain) => (
          <div key={chain.name} className="flex items-center">
            <img
              className="w-8 lg:w-12 md:w-10"
              src={chain.icon}
              alt={chain.name}
            />
            <p className="ml-2 chain-name text-lg lg:text-2xl md:text-xl">
              {chain.name}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
