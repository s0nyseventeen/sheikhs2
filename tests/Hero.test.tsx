import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import Hero from "../src/components/Hero";

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it("renders the main heading", () => {
    const heading = screen.getByText("Lorem ipsum dolor sit amet, consectetu");
    expect(heading).toBeInTheDocument();
  });

  it("renders the main info paragraph", () => {
    const paragraph = screen.getByText(/Mauris congue bibendum dapibus/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the Button component", () => {
    const button = screen.getByRole("button", { name: /дізнатися більше/i });
    expect(button).toBeInTheDocument();
  });

  it("renders the image with correct attributes", () => {
    const image = screen.getByAltText(/not found/i);
    expect(image).toBeInTheDocument();
    expect(image).toBeInTheDocument("src", "src/assets/ezgif-2-51ffbb6c5c.gif");
  });
});
