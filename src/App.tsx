import { BrowserRouter, Route, Routes } from 'react-router';

import DashBoard from './features/dashboard/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
