import { Route } from 'react-router-dom';

// layouts
import RootLayout from '../layouts/RootLayout';
import ShopLayout from '../layouts/ShopLayout';

// pages
import Shop, { watchLoader } from '../pages/Shop';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import WatchDetails, { fullDetailsWatchLoader } from '../pages/WatchDetails';

export default function routesConfig() {
  return (
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Shop />} loader={watchLoader} />
        <Route path=":id" element={<WatchDetails />} loader={fullDetailsWatchLoader} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Route>
  );
}
