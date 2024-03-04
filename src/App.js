import "./App.css";
import { Header } from "./page/header";
import { LouisPoulsen } from "./page/case/louisPoulsen";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Main } from "./page/main";
import { Lab } from "./page/lab";
import { Image } from "./page/image";

function App() {
  const { params } = useParams();
  console.log("params", params);
  return (
    <div className="App">
      <div id="__nuxt">
        <div id="__layout">
          <div className="relative w-full">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Header />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<Main />} />
                <Route path="/lab">
                  <Route path="" element={<Lab />} />
                  <Route path=":params" element={<Image />} />
                </Route>
                <Route path="/page/louis-poulsen" element={<LouisPoulsen />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
