import React, { lazy, Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const Blog = lazy(() => import("./components/Blog"));
const Comments = lazy(() => import("./components/Comments"));



function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h4 style={{textAlign: 'center'}}>Loading...</h4>}>
        <Blog />
      </Suspense>
      <Suspense fallback={<h4 style={{textAlign: 'center'}}>Loading...</h4>}>
        <Comments />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
