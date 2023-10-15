import { useState } from 'react';
import batchBuy from '../../../Assets/Designs/batch-buy.svg';
import batchSell from '../../../Assets/Designs/batch-sell.svg';
import dca from '../../../Assets/Designs/dca.svg';
import xDivider from '../../../Assets/Designs/x-divider.svg';
import yDivider from '../../../Assets/Designs/y-divider.svg';
import iconBatchBuyActive from '../../../Assets/Icons/batch-buy-active.svg';
import iconBatchBuy from '../../../Assets/Icons/batch-buy.svg';
import iconBatchSellActive from '../../../Assets/Icons/batch-sell-active.svg';
import iconBatchSell from '../../../Assets/Icons/batch-sell.svg';
import iconDCAActive from '../../../Assets/Icons/dca-active.svg';
import iconDCA from '../../../Assets/Icons/dca.svg';
import Button from '../../../Components/Buttons/Button';

const buttons = [
  {
    id: 'bs',
    activeIcon: iconBatchSellActive,
    icon: iconBatchSell,
    name: 'Batch Sell',
    desc: 'Swap multiple tokens for one in a single transaction.',
  },
  {
    id: 'by',
    activeIcon: iconBatchBuyActive,
    icon: iconBatchBuy,
    name: 'Batch buy',
    desc: 'Swap one token for multiple in a single transaction.',
  },
  {
    id: 'dca',
    activeIcon: iconDCAActive,
    icon: iconDCA,
    name: 'DCA',
    desc: 'Auto-invest or auto-sell tokens periodically.',
  },
];

const features: { [key: string]: any } = {
  bs: batchSell,
  by: batchBuy,
  dca,
};

export default function Features() {
  const [activeBtnId, setActiveBtnId] = useState('bs');

  const mobileView = (
    <div className="sm:hidden mt-4 md:mt-24 lg:mt-36">
      <div>
        {buttons.map((button, index) => (
          <div className="px-4">
            <img
              className="md:w-96 lg:w-full"
              src={features[button.id]}
              alt="batch sell"
            />
            <div className="flex mt-6 justify-center">
              <img src={button.activeIcon} alt={button.id} className="h-9" />
              <p className="feature-btn-active-text text-xl pl-2 flex justify-center my-2">
                {button.name}
              </p>
            </div>
            <p className="feature-p">{button.desc}</p>
            {index + 1 < buttons.length && (
              <img className="h-4 w-96 mt-5 mb-8" src={xDivider} alt="divider" />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const desktopView = (
    <div className="hidden sm:flex mt-10 md:mt-24 lg:mt-24 px-8 items-center justify-between">
      <div>
        {buttons.map((button) => {
          const isActive = activeBtnId === button.id;
          return (
            <Button
              onClick={() => setActiveBtnId(button.id)}
              className={`${
                isActive ? 'feature-btn-active' : 'feature-btn'
              } my-2 px-4 md:w-56 lg:w-64 pt-4 pb-6`}
            >
              <img
                src={isActive ? button.activeIcon : button.icon}
                alt={button.id}
                className="mx-auto"
              />
              <p
                className={`${
                  isActive ? 'feature-btn-active-text' : 'feature-btn-text'
                } flex justify-center my-2`}
              >
                {button.name}
              </p>
              <span>{button.desc}</span>
            </Button>
          );
        })}
      </div>
      <img
        className="absolute left-0 right-0 mx-auto"
        src={yDivider}
        alt="divider"
      />
      <div>
        <img
          className="md:w-96 lg:w-full"
          src={features[activeBtnId]}
          alt="batch sell"
        />
      </div>
    </div>
  );
  return (
    <div className="features-container py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="feature-title text-52px md:text-7xl lg:text-94px">
            Features
          </p>
          <p className="primary-head text-xl md:text-3xl lg:text-4xl -mt-2">
            What makes DZap a unique DEX?
          </p>
        </div>
        {desktopView}
        {mobileView}
      </div>
    </div>
  );
}
