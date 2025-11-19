
import React from 'react';
import StarBackground from './components/StarBackground';
import Header from './components/Header';
import MiniGames from './components/MiniGames';
import CarbCalculator from './components/CarbCalculator';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-[100dvh] flex flex-col bg-gradient-to-b from-slate-950 via-[#0a0a20] to-slate-950 overflow-hidden">
      <StarBackground />
      
      {/* Content Wrapper - ensures z-index is above background */}
      <main className="flex-grow flex flex-col w-full max-w-lg mx-auto h-full relative z-10 overflow-y-auto no-scrollbar">
        <Header />
        {/* Calculator is now above */}
        <CarbCalculator />
        {/* MiniGames is at the bottom using mt-auto inside component */}
        <MiniGames />
      </main>

      {/* Subtle decorative glow at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none z-0" />
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
