import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "./routes"
import App from './App';

hydrateRoot(document.getElementById('root'),<StrictMode>
<RouterProvider router={router}>
  <App />
</RouterProvider>
</StrictMode>);
