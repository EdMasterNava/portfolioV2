import React from 'react';
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './pages/Home';
import TheRollRoster from './pages/TheRollRoster';
import './pages/modules/styles/body.css';

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/therollroster",
      element: <TheRollRoster />
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}






// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/therollroster" element={<TheRollRoster />} />
//       </Routes>
//     </>
//   );
// }

// export default App;