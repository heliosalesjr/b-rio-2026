"use client";
import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [viewedComponents, setViewedComponents] = useState(new Set());

  const markAsViewed = (componentId) => {
    setViewedComponents(prev => new Set([...prev, componentId]));
  };

  const isViewed = (componentId) => {
    return viewedComponents.has(componentId);
  };

  return (
    <SidebarContext.Provider value={{
      markAsViewed,
      isViewed
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);