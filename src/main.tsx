import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Route/route';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')!).render(
  <StrictMode>

      <Provider store={store}>
         <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
         <Toaster position="top-right" reverseOrder={false} />
         <div className='inter-font'>
      <RouterProvider router={router} />
    </div>
         </PersistGate>
      </Provider>
    
  </StrictMode>
)
