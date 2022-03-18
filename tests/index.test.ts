import Home from "../pages/index";
jest.mock("../pages/index");

it("should mock home", () => {
  const functionNameMock = jest.fn();
  jest
    .spyOn(Home.prototype, "functionName")
    .mockImplementation(functionNameMock);
});
