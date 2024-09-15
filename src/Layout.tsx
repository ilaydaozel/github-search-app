import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main>
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
