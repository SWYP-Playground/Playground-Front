import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Error from '@components/common/Error/Error';
import Login from '@components/common/Login/Login';
import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';
import { useResetError } from '@hooks/common/useResetError';

function App() {
  return (
    <ErrorBoundary Fallback={Error} onReset={useResetError}>
      <Login>
        <main>
          <Outlet />
        </main>
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
