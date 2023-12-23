import { fireEvent, render, screen } from "@testing-library/react";
import {Header} from "../components/Header";
import { Provider } from "react-redux";
import AppStore from "../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe("Test Header components", ()=>{
    it("Should test header components", () => {
        render(
          <BrowserRouter>
            <Provider store={AppStore}>
              <Header />
            </Provider>
          </BrowserRouter>
        );
        
        const Loginbutton = screen.getByRole("button", {name :"Login"});
        fireEvent.click(Loginbutton)
        
        const logoutButton = screen.getByRole("button", {name :"Logout"});
        expect(logoutButton).toBeInTheDocument();

        const navItem = screen.getByRole("link", {name : "Home"});
        expect(navItem).toBeInTheDocument();
      
      });
      
      it("Should test cartItems components", () => {
          render(
              <BrowserRouter>
              <Provider store={AppStore}>
                <Header />
              </Provider>
              </BrowserRouter>
          );
          
          // const CartItems = screen.getByText("Cart :0");
          // expect(CartItems).toBeInTheDocument();
          // /Also use regex
          const CartItems = screen.getByText(/Cart/);
          expect(CartItems).toBeInTheDocument();
        
        
        });


})