import { Provider } from 'react-redux';
import AppRoutes from './Routes/AppRoutes';
import { store } from './Store';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
