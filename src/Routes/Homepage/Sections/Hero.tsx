import React from 'react';
import audit from '../../../Assets/Icons/audit.svg';
import discord from '../../../Assets/Icons/discord-active.svg';
import gas from '../../../Assets/Icons/gas.svg';
import infinitive from '../../../Assets/Icons/infinitive.svg';
import price from '../../../Assets/Icons/price.svg';
import time from '../../../Assets/Icons/time.svg';
import twitter from '../../../Assets/Icons/twitter-active.svg';
import zeroFee from '../../../Assets/Icons/zero-fee.svg';
import Header from '../../../Components/Layouts/Header';
import { APP_URL } from '../../../Config/AppConfig';
import { SOCIAL } from '../../../Constants/Links';

const offers = [
  {
    icon: gas,
  },
  {
    icon: time,
  },
  {
    icon: zeroFee,
  },
  {
    icon: audit,
  },
  {
    icon: price,
  },
  {
    icon: infinitive,
  },
];

function Hero() {
  return (
    <div className="hero-container">
      <Header />
      <div className="py-14 lg:py-24 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="hero-head text-32px md:text-5xl lg:text-66px">
              Simplifying{' '}
              <span className="hero-head-span block sm:inline-block">
                DeFi Swaps
              </span>
            </h1>
            <p className="mt-2 hero-p text-sm md:text-lg lg:text-text-2xl">
              Batch Swap or start Dollar Cost Averaging (DCA) without hassle.
            </p>
            <div className="mt-10 md:mt-14 lg:mt-18 flex items-center justify-center gap-x-4">
              <button
                onClick={() => window.open(APP_URL, '_blank')}
                className="hero-launch-dapp-btn py-2 text-xs lg:text-sm lg:py-4 w-36 "
                type="button"
              >
                Launch App
              </button>
              <span
                style={{ color: '#C7DEFF' }}
                className="flex items-center lg:text-lg text-sm text-nunito"
              >
                Join the fam{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={SOCIAL.twitter}
                  href={SOCIAL.twitter}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    className="ml-2 w-4 md:w-6 lg:w-6"
                    src={twitter}
                    alt="twitter"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  key={SOCIAL.discord}
                  href={SOCIAL.discord}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <img
                    className="ml-2 w-4 md:w-6 lg:w-6"
                    src={discord}
                    alt="discord"
                  />
                </a>
              </span>
            </div>
            <div className="flex justify-center ">
              <ul className="mt-16 md:mt-20 lg:mt-28 grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {offers.map((offer) => (
                  <li className="col-span-1">
                    <div className="flex w-full items-center justify-between space-x-6">
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <img src={offer.icon} alt="" />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Hero);
