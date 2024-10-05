import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import Button from "../src/components/Button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
  });

  it("applies plain style when plain prop is true", () => {
    render(<Button plain>Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass(
      "border-2 border-black border-solid px-14 text-xl",
    );
  });

  it("applies rounded style when rounded prop is true", () => {
    render(<Button rounded>Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass("rounded-full");
  });

  it("applies both plain and rounded styles when both props are true", () => {
    render(
      <Button plain rounded>
        Click Me
      </Button>,
    );
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass(
      "border-2 border-black border-solid px-14 text-xl",
    );
    expect(button).toHaveClass("rounded-full");
  });

  it("does not apply plain and rounded styles when props are false", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).not.toHaveClass(
      "border-2 border-black border-solid px-14 text-xl",
    );
    expect(button).not.toHaveClass("rounded-full");
  });
});
