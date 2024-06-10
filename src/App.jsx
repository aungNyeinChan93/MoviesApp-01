import { Route, Routes } from "react-router";
import ShareLayout from "./components/ShareLayout";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import ErrorPage from "./components/ErrorPage";
import Popular from "./components/Popular"
function App() {
  return (
    <div className="App">
      {/* <h1>Movies App with react-redux</h1> */}

      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="/popular" element={<Popular/>} />
          <Route path="/movie/detail/:id" element={<MovieDetail />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
