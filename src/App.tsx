import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Error from '@components/common/Error/Error';
import Login from '@components/common/Login/Login';
import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';
import { useResetError } from '@hooks/common/useResetError';
import BottomNav from '@components/layout/BottomNav/BottomNav';

function App() {
  const { handleErrorReset } = useResetError();

  return (
    <ErrorBoundary Fallback={Error} onReset={handleErrorReset}>
      <Login>
        <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '100dvh' }}>
          <main
            style={{ flex: '1 1 0%', margin: '49px 0 56px 0', overflowY: 'auto', width: '100%' }}
          >
            <Outlet />
          </main>
        </div>
        <BottomNav />
      </Login>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ErrorBoundary>
  );
}

export default App;
