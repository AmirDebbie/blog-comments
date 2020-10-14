import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Blog from './components/Blog';
const Comments = lazy(() => import("./components/Comments"));

function App() {
  return (
    <ErrorBoundary>
      <Blog />
      <Suspense fallback={<h4 style={{textAlign: 'center'}}>Loading...</h4>}>
        <Comments />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
