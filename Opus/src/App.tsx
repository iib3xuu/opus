import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Documentation = React.lazy(() => import('./pages/Documentation').then(module => ({ default: module.Documentation })));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks').then(module => ({ default: module.HowItWorks })));
const Legal = React.lazy(() => import('./pages/Legal').then(module => ({ default: module.Legal })));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#121212] text-white">
        <Navigation />
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingScreen />}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/legal" element={<Legal />} />
              </Routes>
            </motion.div>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;