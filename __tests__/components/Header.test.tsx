import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

// ✅ MOCK 1: next/link (unwraps the link for test simplicity)
jest.mock("next/link", () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  );
});

// ✅ MOCK 2: Logo is a NAMED export
jest.mock("@/components/Logo", () => ({
  Logo: () => <div data-testid="mock-logo">JS</div>,
}));

// ✅ MOCK 3: MainNav is a DEFAULT export
jest.mock("@/components/MainNav", () => ({
  MainNav: () => <nav data-testid="mock-main-nav" />,
}));

// ✅ MOCK 4: ThemeToggleButton is a DEFAULT export
jest.mock("@/components/ThemeToggleButton", () => () => (
  <button data-testid="mock-theme-toggle">Toggle</button>
));

describe("Header Component", () => {
  it("renders logo and Portfolio text", () => {
    render(<Header />);

    expect(screen.getByTestId("mock-logo")).toHaveTextContent("JS");
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  it("renders nav and toggle button", () => {
    render(<Header />);
    expect(screen.getByTestId("mock-main-nav")).toBeInTheDocument();
    expect(screen.getByTestId("mock-theme-toggle")).toBeInTheDocument();
  });

  it("logo is wrapped with a link", () => {
    render(<Header />);
    const logo = screen.getByTestId("mock-logo");
    const link = logo.closest("a");

    // Debug if something goes wrong
    expect(logo).toBeInTheDocument();
    expect(link).not.toBeNull();
    expect(link).toHaveAttribute("href", "/");
  });
});
