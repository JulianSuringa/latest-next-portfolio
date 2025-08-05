import "@testing-library/jest-dom";

const originalError = console.error;

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation((msg, ...args) => {
    if (
      typeof msg === "string" &&
      msg.includes("ReactDOMTestUtils.act is deprecated")
    ) {
      // suppress this specific warning
      return;
    }
    originalError(msg, ...args);
  });
});

afterAll(() => {
  // Restore the original implementation to avoid affecting other tests
  (console.error as jest.Mock).mockRestore?.();
});
