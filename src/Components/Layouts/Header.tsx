import logo from '../../Assets/Logo.svg';
import LaunchDapp from '../Buttons/LaunchDapp';

export default function Header() {
  return (
    <header className="header-container">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
            <img className="w-auto" src={logo} alt="logo" />
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <LaunchDapp />
        </div>
      </nav>
    </header>
  );
}
