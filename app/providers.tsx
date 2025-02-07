'use client';

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}
