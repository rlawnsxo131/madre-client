import { Route, Routes } from 'react-router-dom';
import Core from './components/common/Core';
import ErrorBoundary from './components/error/ErrorBoundary';
import Layout from './components/base/Layout';
import { HomePage, MadreStoryPage, NotFoundPage, TestPage2 } from './pages';

interface AppProps {}

function App(props: AppProps) {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="madre-story" element={<MadreStoryPage />} />
          <Route path="notice" element={<div>notice</div>} />
          <Route path="guide" element={<div>guide</div>} />
          <Route path="policy" element={<div>policy</div>} />
          <Route path="notifications" element={<div>notifications</div>} />
        </Route>
        <Route path="/@:displayName" element={<Layout />}>
          <Route index element={<div>user info</div>} />
        </Route>
        <Route path="/test" element={<TestPage2 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Core />
    </ErrorBoundary>
  );
}

export default App;
