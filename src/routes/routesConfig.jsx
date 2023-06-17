import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop, { watchLoader } from '../pages/Shop';
import Contact from '../pages/Contact';
import RootLayout from '../layouts/RootLayout';

export default function routesConfig() {
  return (
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} loader={watchLoader} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  );
}
