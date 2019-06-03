import React, { lazy, Suspense } from 'react';

export const PlayPage = lazy(() => import('./PlayPage'));

const App: React.FC<{}> = () => (
  <Suspense fallback={<div />}>
    <PlayPage />
  </Suspense>
);

export default App;
