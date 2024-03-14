import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import IconPage from './pages/IconPage';
import { BASE_URL } from './utils/constant';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          duration: 1500,
          style: {
            padding: '12px 24px',
            color: 'var(--color-black-50)',
            background: 'var(--color-black-700)',
          },
        }}
      />
      <BrowserRouter basename={`/${BASE_URL}`}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={`/linear/arrow`} />} />
            <Route path={`/:type`} element={<IconPage />} />
            <Route path={`/:type/:category`} element={<IconPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
