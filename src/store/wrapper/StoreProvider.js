import {Provider} from 'react-redux';
import store, {persistor} from '../store';
import {PersistGate} from 'redux-persist/integration/react';

const StoreProvider = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
