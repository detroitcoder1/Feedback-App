
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import { FeedbackProvider } from "./Context/FeedBackContent";
import AboutPage from "./pages/About";
import AboutIconLink from "./components/aboutIconLink";



function App() {

  

  

  return (
      <FeedbackProvider>
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm />
                <FeedbackStats/>
                <FeedBackList
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
