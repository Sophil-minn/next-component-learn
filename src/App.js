import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';
import List from './pages/List';
import JsxDemo from './pages/jsxDemo';
import { ComponentsAndprops } from './pages/componentsAndprops';
import { LiftingStateUp } from './pages/liftingStateUp';
import { Theme } from './pages/contextDemo';
import { App as ThemeApp} from './pages/contextDemo';
import RefsDemo from './pages/refsDemo';
import HocDemo from './pages/hoc';
import Portals from './pages/portals';
import RenderProps from './pages/renderProps';

import './App.css';

const ChildrenProps = React.lazy(() => import('./pages/childrenProps'));
const DynamicTheme = React.lazy(() => import('./pages/contextDemo'));
function ChildrenPropsLazy() {
  return (
    <div>
      {/* 在 Suspense 组件中渲染 lazy 组件，
      如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。 */}
      <Suspense fallback={<div>Loading...</div>}>
        <ChildrenProps />
      </Suspense>
    </div>
  );
}
function ThemeLazy() {
  return (
    <div>
      {/* 在 Suspense 组件中渲染 lazy 组件，
      如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。 */}
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicTheme />
      </Suspense>
    </div>
  );
}

function App() {

  return (
    <Routes>
      <Route path="/" default element={<Home />} />
      <Route path="/index" element={<Index />} />
      <Route path="/list" element={<List />} />
      <Route path="/jsxDemo" element={<JsxDemo />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/component" element={<ComponentsAndprops />} />
      <Route path="/liftingStateUp" element={<LiftingStateUp />} />
      <Route path="/childrenProps" element={<ChildrenPropsLazy />} />
      <Route path="/context" element={<ThemeLazy />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/theme-demo3" element={<ThemeApp />} />
      <Route path="/refs-demo" element={<RefsDemo />} />
      <Route path="/hoc" element={<HocDemo />} />
      <Route path="/portals" element={<Portals />} />
      <Route path="/renderProps" element={<RenderProps />} />
    </Routes>
  );
}

export default App;
