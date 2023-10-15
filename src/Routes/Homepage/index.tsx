import React from 'react';
import '../../Assets/Css/Homepage.scss';
import MainAppLayout from '../../Components/Layouts/MainAppLayout';
import HomepageComponents from './Components';

function BettingPage() {
  return (
    <MainAppLayout>
      <HomepageComponents />
    </MainAppLayout>
  );
}
export default React.memo(BettingPage);
