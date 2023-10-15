import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Homepage = React.lazy(() => import('./Homepage'));

function AppRoutes(): React.ReactElement {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <Homepage />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
