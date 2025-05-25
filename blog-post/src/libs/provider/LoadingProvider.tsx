// app/providers/LoadingProvider.tsx
"use client";

import { useState, createContext, useContext, ReactNode } from "react";

type LoadingContextType = {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && <GlobalLoader />}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f0f]/90 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16">
          {/* Animated spinner with yellow accent */}
          <div className="absolute inset-0 rounded-full border-4 border-[#2a2a2a]"></div>
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-white font-medium">Loading...</p>
      </div>
    </div>
  );
};