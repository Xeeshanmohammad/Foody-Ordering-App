import { render,  screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Should load all contact us page", ()=>{
  // beforeAll(()=>{
  //   console.log("before all");
  // })
  // beforeEach(()=>{
  //   console.log("before Each");
  // })

  // afterAll(()=>{
  //   console.log("After all");
  // })
  // afterEach(()=>{
  //   console.log("After Each");
  // })

  test("Should load contactus page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
  });
  test("Should button contactus page", () => {
    render(<Contact />);
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  });
  
  test("Should Fullname contactus page", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("Fullname")
    expect(name).toBeInTheDocument()
  });
  
  test("Should load 2 input boxes in contactus page", () => {
    render(<Contact />);
    const getInput = screen.getAllByRole("textbox")
    expect(getInput.length).toBe(2)
  });
})
