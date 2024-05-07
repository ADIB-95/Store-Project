import { Navigate, Routes, Route } from "react-router-dom";

//import CardProvider from "./context/CardContext";
//import ProductsProvider from "./context/ProductContext";
import Layout from "./layout/Layout";
import CheckoutPage from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";
import PageNotFound from "./pages/PageNotFound";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    //<CardProvider>
      //<ProductsProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      //</ProductsProvider>
   // </CardProvider>
  );
}

export default App;
