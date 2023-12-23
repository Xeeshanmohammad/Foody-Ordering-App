import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MockData2 from "../mocks/mockRestaurantListData.json";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import AppStore from "../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import ItemList from "../components/ItemList";
import {Header} from "../components/Header";
import Cart from "../components/Cart";
import { Provider } from "react-redux";


global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => {
       Promise.resolve(MockData2);
    },
  })
);

test("should test out Body components", async () => {
  await act(async () =>
    render(
     <BrowserRouter>
      <Provider store={AppStore}>
        
        <RestaurantMenu/>
       
      </Provider>
     </BrowserRouter>
    )
  );

//   const searchAccordions = screen.getByText("Late Night Cravings (5)")
//   fireEvent.click(searchAccordions)
// expect(screen.getAllByTestId("foodItems").length).toBe(5)
});
