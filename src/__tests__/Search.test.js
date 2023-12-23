import { fireEvent, render, screen } from "@testing-library/react";
import { Body } from "../../src/components/Body";
import { act } from "react-dom/test-utils";
import MockData from "../mocks/mockRestaurantListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

test("should test out Body components", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
const cardBeforeSearch = screen.getAllByTestId("res-card")
expect(cardBeforeSearch.length).toBe(20)

  const searchButton = screen.getByRole("button", { name: "search" });

  
  const searchinput = screen.getAllByTestId("searchInput")
  if (searchinput.length > 0) {
    fireEvent.change(searchinput[0], { target: { value: "pizza" } });
  }
  fireEvent.click(searchButton)
  const cards = screen.getAllByTestId("res-card")
  expect(cards.length).toBe(3)
  expect(searchButton).toBeInTheDocument();


});


test("should test out top-rated-restaurant components", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  const cardBeforeFilter= screen.getAllByTestId("res-card")
  expect(cardBeforeFilter.length).toBe(20)
  
    const searchButton = screen.getByRole("button", { name: "Top rated restaurant" });
  
    fireEvent.click(searchButton)
    
  
    const cardAfterFilters = screen.getAllByTestId("res-card")
    expect(cardAfterFilters.length).toBe(11)
  
  
  });
