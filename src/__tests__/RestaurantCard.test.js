import { render, screen } from "@testing-library/react"
import { RestaurantCard, withRestaurantLabel } from "../components/RestaurantCard"
import MockData from "../mocks/mockdata.json"
import "@testing-library/jest-dom"

describe('withRestaurantLabel Higher-Order Component', () => {
  
  
  
  const WrappedComponent = withRestaurantLabel(RestaurantCard);
  test('displays "BestSeller" label when wrapped with withRestaurantLabel HOC', () => {
     render(<WrappedComponent resData = {MockData}/>);
      const named = screen.getByText("BestSeller")
      expect(named).toBeInTheDocument();
    });

    test("Should test restuarant card", ()=>{

        render(<RestaurantCard resData = {MockData}/>)
    
        const name = screen.getByText("Pikwik Since 1991")
        expect(name).toBeInTheDocument()
    
    })
})