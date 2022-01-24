import { render, fireEvent, act, waitFor  } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '../pages/index'

describe('Home', () => {

  test("should display correct default value in input", () => {
    const { getByTestId } = render(<Home />);

    fireEvent.input(getByTestId("testInput"), {
      target: {
        value: "test"
      }
    });
  });

  test("should display error message when required input is empty", async() => {
    const { getByTestId, findByText } = render(<Home />);

    act(() => {
      fireEvent.click(getByTestId("submitBtn"));
    })

    await waitFor(() =>
      findByText("This field is required")
    )
  })
})
