import './App.css';
import 'antd/dist/antd.css';
import LayoutAdmin from './PageAdmin/LayoutAdmin';
import LayoutUser from './PageUser/LayoutUser';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './PageUser/Home';
import Productpage from './PageUser/HomePageCategory';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Components/auth/Login';
import ProductDetail from './PageUser/ProductDetail';
import { useEffect } from 'react';
import { getCategories } from './redux/product/action';
import { useDispatch } from 'react-redux';
import UserDetail from './PageUser/UserDetail';
import MyProfile from './PageUser/MyProfile';
import OrderHistory from './PageUser/OrderHistory';
import EditProfile from './PageUser/EditProfile';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutUser />}>
              <Route path="/productpage" element={<Productpage />} />
              <Route path="/productdetail" element={<ProductDetail />} />
              <Route path="/userdetail" element={<UserDetail />}>
                <Route path="/userdetail/myprofile" element={<MyProfile />} />
                <Route
                  path="/userdetail/editprofile"
                  element={<EditProfile />}
                />
              </Route>
              <Route path="orderhistory" element={<OrderHistory />} />
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
