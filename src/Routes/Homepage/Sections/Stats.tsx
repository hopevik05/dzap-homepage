import divider from '../../../Assets/Designs/x-divider.svg';

const stats = [
  {
    class: 'stats-box1',
    key: 'Trading Volume',
    value: '$6,563,876+',
  },
  {
    class: 'stats-box2',
    key: 'Gas Saved',
    value: '$13,983',
  },
  {
    class: 'stats-box3',
    key: 'Swaps saved',
    value: '4,368',
  },
  {
    class: 'stats-box4',
    key: (
      <>
        Number of <br />
        transactions
      </>
    ),
    value: '6,223',
  },
  {
    class: 'stats-box5',
    key: (
      <>
        Unique wallet <br />
        activity
      </>
    ),
    value: '2,196',
  },
];

export default function Stats() {
  return (
    <div className="stats-container py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <img className="h-1" src={divider} alt="divider" />
        <div className="pt-4 pb-8 md:pt-8 md:pb-16 lg:pt-9 lg:pb-20">
          <p className="stats-head mb-8 text-lg md:text-xl lg:text-2xl">
            - STATS -
          </p>
          <ul className="stats-list grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <li
                className={`${stat.class} rounded-lg h-20 w-36 lg:h-36 lg:w-64 md:h-28 md:w-56 col-span-1 px-1.5 md:px-6 lg:px-6 flex items-center`}
              >
                <div className="flex-1 truncate">
                  <p className="stats-value text-xl md:text-2xl lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="stats-key text-xs lg:text-lg md:text-lg pt-2 lg:pt-4 md:pt-4">
                    {stat.key}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img className="h-1" src={divider} alt="divider" />
      </div>
    </div>
  );
}
