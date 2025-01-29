import '@testing-library/jest-dom';
import Navbar from "@/app/components/navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from 'next-themes';
import React from 'react';

beforeEach(() => {
    render(
        <ThemeProvider>
            <Navbar />
        </ThemeProvider>
    );
});

jest.mock('next-themes', () => ({
    ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useTheme: () => {
        const [theme, setTheme] = React.useState('light');
        return { theme, setTheme };
    }
}));

describe('Navbar', () => {
    it('should render the image and have link', () => {
        const image = screen.getByRole('img', { name: 'Strawberry icon from stardew valley' });
        expect(image).toBeInTheDocument();

        const link = screen.getByRole('link', { name: 'Strawberry icon from stardew valley' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
    });

    it('should render the button and handle click', () => {
        const button = screen.getByTestId('theme-button');
        const icon = screen.getByTestId('theme-icon');

        expect(button).toBeInTheDocument();
        expect(icon).toBeInTheDocument();

        expect(button).toHaveClass('justify-start', { exact: false });
        expect(icon).toHaveClass('pi-sun');

        fireEvent.click(button);
        fireEvent.click(button);

        expect(button).toHaveClass('justify-end', { exact: false });
        expect(icon).toHaveClass('pi-moon');
    })
});