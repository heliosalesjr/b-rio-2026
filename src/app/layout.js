"use client";
import "./globals.css";
import { SidebarProvider } from '@/contexts/SidebarContext';
import Sidebar from '@/components/Sidebar';
import Tutorial from '@/components/Tutorial';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [sidebarForceOpen, setSidebarForceOpen] = useState(undefined);

  const handleSidebarToggle = (shouldOpen) => {
    setSidebarForceOpen(shouldOpen);
  };

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="relative">
            <Sidebar 
              forceOpen={sidebarForceOpen} 
              onToggle={(isOpen) => {
                if (!isOpen) setSidebarForceOpen(undefined);
              }}
            />
            <Tutorial onSidebarToggle={handleSidebarToggle} />
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}