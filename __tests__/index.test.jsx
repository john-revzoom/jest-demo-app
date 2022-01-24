import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  
  test("should watch input correctly", () => {
    const { getByTestId } = render(<Home />);

    fireEvent.input(getByTestId("example"), {
      target: {
        value: "test"
      }
    });
  });

})
