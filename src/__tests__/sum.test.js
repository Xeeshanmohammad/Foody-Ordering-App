import { sum } from "../components/sum"

test("sum function can be calculated sum of two numbers",()=>{
    const result = sum(5,5)
    expect(result).toBe(10)
})