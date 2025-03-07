import './App.css'

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { ChatProvider } from './Context/context';


function App() {

  return (
    <BrowserRouter>
      <ChatProvider>
        <AppRoutes />
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App