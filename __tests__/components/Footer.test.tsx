import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer"; // Uses @ alias
import "@testing-library/jest-dom";

jest.mock("@/components/icons/linkedin", () => () => {
  return <svg data-testid="icon-linkedin" />;
});

jest.mock("@/components/icons/facebook", () => () => (
  <svg data-testid="icon-facebook" />
));
jest.mock("@/components/icons/instagram", () => () => (
  <svg data-testid="icon-instagram" />
));
jest.mock("@/components/icons/twitter", () => () => (
  <svg data-testid="icon-twitter" />
));

jest.mock("@/data/socials.json", () => [
  { name: "facebook", href: "https://facebook.com" },
  { name: "instagram", href: "https://instagram.com" },
  { name: "twitter", href: "https://twitter.com" },
  { name: "linkedin", href: "https://linkedin.com" },
]);

describe("Footer component", () => {
  it("renders copyright and privacy link", () => {
    render(<Footer />);

    expect(
      screen.getByText(/Copyright ©2025 All rights reserved/i)
    ).toBeInTheDocument();

    const privacyLink = screen.getByRole("link", { name: /privacy policy/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "/privacy-policy");
  });

  it("renders correct number of social links", () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole("link");
    // 4 socials + 1 privacy policy = 5 links total
    expect(socialLinks).toHaveLength(5);
  });
  it("renders all social icons with correct test ids", () => {
    render(<Footer />);
    expect(screen.getByTestId("icon-facebook")).toBeInTheDocument();
    expect(screen.getByTestId("icon-instagram")).toBeInTheDocument();
    expect(screen.getByTestId("icon-twitter")).toBeInTheDocument();
    expect(screen.getByTestId("icon-linkedin")).toBeInTheDocument();
  });

  it("renders all social links with correct hrefs", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    // The first four links are socials, the last is privacy policy
    expect(links[0]).toHaveAttribute("href", "https://facebook.com");
    expect(links[1]).toHaveAttribute("href", "https://instagram.com");
    expect(links[2]).toHaveAttribute("href", "https://twitter.com");
    expect(links[3]).toHaveAttribute("href", "https://linkedin.com");
    expect(links[4]).toHaveAttribute("href", "/privacy-policy");
  });

  it("opens social links in a new tab", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    // Only social links should have target="_blank"
    expect(links[0]).toHaveAttribute("target", "_blank");
    expect(links[1]).toHaveAttribute("target", "_blank");
    expect(links[2]).toHaveAttribute("target", "_blank");
    expect(links[3]).toHaveAttribute("target", "_blank");
    // Privacy policy should not have target="_blank"
    expect(links[4]).not.toHaveAttribute("target", "_blank");
  });
});
