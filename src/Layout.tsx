import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full flex flex-col min-h-screen justify-between items-center">
      {/* Navbar at the top */}
      <Navbar />
      {/* Child content area */}
      {children}
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
