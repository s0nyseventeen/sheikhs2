import { vi } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import Header from "../src/components/Header";

vi.mock("../src/components/icons/Logo", () => ({
  default: () => <div data-testid="mockedLogo" />,
}));

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders Logo component", () => {
    expect(screen.getByTestId("mockedLogo")).toBeInTheDocument();
  });

  it("renders Language link", () => {
    expect(screen.getByText("Language")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    const links = ["Про шейхів", "Портфоліо", "Наші послуги"];
    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });
});
