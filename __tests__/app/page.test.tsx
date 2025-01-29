import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Page from '../../app/page';

const page = <Page />;

beforeEach(() => {
    render(page);
});

describe('Page render', () => {
    it('should find text', () => {
        expect(screen.getByText('Recipes')).toBeInTheDocument();
    });

    it('should render the button', () => {
        const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
        expect(dashboardLink).toBeInTheDocument();
        expect(dashboardLink).toHaveAttribute('href', '/pages/dashboard');
    
        fireEvent.click(dashboardLink);
    });

    it('should render the image', () => {
        const image = screen.getByRole('img', { name: 'Stardew valley logo' });
        expect(image).toBeInTheDocument();
    });

    it('renders initial confetti', () => {
        const confetti = screen.getAllByText(/🌸|🌿|🍁|❄️/);
        expect(confetti).toHaveLength(20);
    });
});
