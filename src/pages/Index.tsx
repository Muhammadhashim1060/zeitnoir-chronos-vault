import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Collection } from '@/components/Collection';
import { Vault } from '@/components/Vault';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { AdminPanel } from '@/components/AdminPanel';

const Index = () => {
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);

  const handleAdminAccess = () => {
    setIsAdminPanelOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onAdminAccess={handleAdminAccess} />
      
      <main>
        <Hero />
        <Collection />
        <Vault />
        <About />
        <Contact />
      </main>
      
      <Footer />
      
      <AdminPanel 
        isOpen={isAdminPanelOpen} 
        onClose={() => setIsAdminPanelOpen(false)} 
      />
    </div>
  );
};

export default Index;
