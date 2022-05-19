import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Layout} from './components';

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
};
