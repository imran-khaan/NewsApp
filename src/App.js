import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                pageSize={pageSize}
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize={pageSize}
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={pageSize}
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key="health"
                pageSize={pageSize}
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize={pageSize}
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={pageSize}
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={pageSize}
                apiKey={apiKey}
                setProgress={setProgress}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
