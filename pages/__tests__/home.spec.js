import Home from "..";
import renderer from "react-test-renderer";

beforeEach(() => {
  const mockResult = { status: 200, json: () => Promise.resolve() };
  global.fetch = jest.fn(() => Promise.resolve(mockResult));
});

describe("Home screen render", () => {
  test("Initial render works", () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
