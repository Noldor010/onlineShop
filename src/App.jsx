import 'react-bootstrap/dist/react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Mainlayout from './components/layouts/Mainlayout'
import SingleProduct from './page/SingleProduct'
import Home from './page/Home'
import ShopingCart from './page/ShopingCart'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
        <Route index element={<Home />} />
        <Route path="ShopingCart" element={<ShopingCart />} />
        <Route path="SingleProduct/:id" element={<SingleProduct/>} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App