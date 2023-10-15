import { ReactNode } from 'react';
import '../../Assets/Css/Layout.scss';
import Footer from './Footer';

export default function MainAppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
