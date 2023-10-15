import chandrashekhar from '../../../Assets/Images/chandrashekhar.svg';
import eric from '../../../Assets/Images/eric.svg';
import gaurav from '../../../Assets/Images/gaurav.svg';
import manohar from '../../../Assets/Images/manohar.svg';
import ravindra from '../../../Assets/Images/ravindra.svg';
import shreedhar from '../../../Assets/Images/shreedhar.svg';

const investors = [
  {
    name: 'Eric Clark Su',
    about: 'ExNetwork',
    pp: eric,
  },
  {
    name: 'Ravindra Kumar',
    about: 'Frontier',
    pp: ravindra,
  },
  {
    name: 'Gaurav Gupta',
    about: 'OneRare',
    pp: gaurav,
  },
  {
    name: 'Chandrashekar Ramu',
    about: 'ZeroSwap Labs',
    pp: chandrashekhar,
  },
  {
    name: 'Manohara K',
    about: 'Unmarshal',
    pp: manohar,
  },
  {
    name: 'Shreedhar Shreenivasa',
    about: 'Nexter Finance',
    pp: shreedhar,
  },
];

export default function Investors() {
  return (
    <div className="investors-container py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="investors-title text-52px md:text-7xl lg:text-94px">
            INVESTORS
          </p>
          <p className="mt-1 primary-head text-xl md:text-3xl lg:text-4xl">
            Meet with our Angel Investors
          </p>
        </div>
        <ul className="grid grid-cols-2 mt-8 md:mt-12 lg:mt-16 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {investors.map((investor) => (
            <li
              key={investor.name}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow"
            >
              <div className="flex flex-1 flex-col">
                <img
                  className="mx-auto md:h-24 md:w-24 lg:h-40 lg:w-40 h-16 w-16 flex-shrink-0 rounded-full"
                  src={investor.pp}
                  alt=""
                />
                <p className="mt-6 investors-name text-sm sm:text-lg">
                  {investor.name}
                </p>
                <p className="mt-1 investors-about text-xs sm:text-base">
                  {investor.about}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {/* <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {investors.map((investor) => (
            <li
              key={investor.name}
              className="rounded-2xl bg-gray-800 px-8 py-10"
            >
              {investor.name}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
