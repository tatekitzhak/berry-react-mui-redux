import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// project imports
import App from 'App';
import ReduxStoreWrapper from '@/store';

// style + assets
import '@/assets/scss/style.scss';
import config from './config';
// console.log('process.env:',process.env.NODE_ENV == "development" ? "localhost": 123);

// ==============================|| REACT DOM RENDER  ||============================== //
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <>
        <ReduxStoreWrapper>
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>
            
        </ReduxStoreWrapper>
    </>
);
