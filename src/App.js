
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./component/home";
import News from "./component/news";
import NewsCategory from "./component/newsCategory";
import Details from "./component/details";
function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
     

        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/" element={<News/>}/>
            <Route path="/details" element={<Details/>} />
            <Route path="/:topic" element={<NewsCategory/>}/>
            <Route path="/:topic/details" element={<Details/>}/>
          </Route>
          <Route path="*" element={<>page not found.</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
