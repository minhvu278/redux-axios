import './App.css';
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
      <Router>
          <Header />
          <div className="App">
              <Routes>
                  <Route exact path="/" element={<ProductListing />}/>
                  <Route exact path="/product/:productId" element={<ProductDetail />}/>
                  <Route>Not Found</Route>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
