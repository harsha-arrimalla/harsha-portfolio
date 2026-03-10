"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        // Graceful fallback instead of crashing — treat as "not loading"
        return { isLoading: false, setIsLoading: () => {} } as LoadingContextType;
    }
    return context;
}
