import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import List from './pages/List';
import JsxDemo from './pages/jsxDemo';
import { ComponentsAndprops } from './pages/componentsAndprops';
import { LiftingStateUp } from './pages/liftingStateUp';
// import ChildrenProps from './pages/childrenProps';
import './App.css';

const ChildrenProps = React.lazy(() => import('./pages/childrenProps'));
function ChildrenPropsLazy() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ChildrenProps />
      </Suspense>
    </div>
  );
}

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" default element={<Home />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/jsxDemo" element={<JsxDemo />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/component" element={<ComponentsAndprops />}></Route>
        <Route path="/liftingStateUp" element={<LiftingStateUp />}></Route>
        <Route path="/childrenProps" element={<ChildrenPropsLazy />}></Route>
      </Routes>
    </div>  
  );
}

export default App;
