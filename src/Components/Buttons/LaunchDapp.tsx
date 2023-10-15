import { APP_URL } from '../../Config/AppConfig';

export default function LaunchDapp() {
  return (
    <button
      onClick={() => window.open(APP_URL, '_blank')}
      className="btn-launch-dapp"
      type="button"
    >
      Launch App
    </button>
  );
}
