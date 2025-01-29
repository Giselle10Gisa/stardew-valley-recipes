import '@testing-library/jest-dom';
import Footer from "@/app/components/footer";
import { fireEvent, render, screen } from "@testing-library/react";

beforeEach(() => {
    render(<Footer />);
});

describe('Footer', () => {
    it('should render the image and have link', () => {
        const image = screen.getByRole('img', { name: 'Stardew Valley Logo' });
        expect(image).toBeInTheDocument();

        const link = screen.getByRole('link', { name: 'Stardew Valley Logo' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://www.stardewvalley.net/');
    });

    it('should render the button and handle click', () => {
        fireEvent(screen.getByTestId('pages-button'), new MouseEvent('click', { bubbles: true, cancelable: true }));
        expect(screen.getByTestId('pages-options')).toHaveClass('flex', { exact: false });
    });
});