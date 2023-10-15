import discord from '../../Assets/Icons/discord.svg';
import medium from '../../Assets/Icons/medium.svg';
import telegram from '../../Assets/Icons/telegram.svg';
import twitter from '../../Assets/Icons/twitter.svg';
import { SOCIAL } from '../../Constants/Links';

// const navigation = [
//   { name: 'Help', href: '#' },
//   { name: 'Blog', href: '#' },
//   { name: 'Terms', href: '#' },
//   { name: 'Privacy', href: '#' },
// ];

const socials = [
  {
    icon: twitter,
    link: SOCIAL.twitter,
  },
  { 
    icon: telegram,
    link: SOCIAL.telegram,
  },
  {
    icon: discord,
    link: SOCIAL.discord,
  },
  {
    icon: medium,
    link: SOCIAL.medium,
  },
];

export default function Footer() {
  return (
    <footer className="footer-container border-t border-gray-700">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="text-white -m-1.5 p-1.5">
            DZap © {new Date().getFullYear()}
          </span>
        </div>
        {/* <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div> */}
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <div className="flex justify-center space-x-4 md:order-2">
            {socials.map((item) => (
              <a
                key={item.link}
                target="_blank"
                rel="noreferrer"
                href={item.link}
                className="text-gray-400 hover:text-gray-500"
              >
                <img src={item.icon} className="sm:h-6 sm:w-6 w-4 h-4" alt="socials" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
}
