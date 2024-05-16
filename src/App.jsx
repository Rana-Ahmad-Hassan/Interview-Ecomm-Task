import SignUpPage from "./pages/signUpPage";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/detailPage";
import AllProducts from "./pages/allProducts";
import CartPage from "./pages/cartPage";
import Footer from "./components/footer/footer";
import PrivateRoutes from "./routes/privateRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Register route without Navbar and Footer */}
          <Route path="/register" element={<SignUpPage />} />

          {/* All other routes with Navbar and Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/product-detail"
            element={
              <>
                <Navbar />
                <DetailPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/all-products"
            element={
              <>
                <Navbar />
                <AllProducts />
                <Footer />
              </>
            }
          />


          <Route element={<PrivateRoutes />}>
            <Route
              path="/cart"
              element={
                <>
                  <Navbar />
                  <CartPage />
                  <Footer />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;