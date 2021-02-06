import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';

test('renders links', () => {
  render(
    <Router>
      <Navbar />
    </Router>);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
})

test('Links route correctly', () => {
  render(
    <Router>
      <Navbar />
    </Router>);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
})
