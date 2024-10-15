import NavBar from "./components/NavBar";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MealType from "./pages/MealType";
import Cuisine from "./pages/Cuisine";
import Favourites from "./pages/Favourites";
import Search from "./pages/Search";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealtype" element={<MealType />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/fav" element={<Favourites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
