import React, { lazy, Suspense } from 'react';

const PlayPage = lazy(() => import('./Play'));

const App: React.FC<{}> = () => (
  <Suspense fallback={<div />}>
    <PlayPage />
  </Suspense>
);

export default App;
