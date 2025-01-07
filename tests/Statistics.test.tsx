import { vi } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import Statistics from "../src/components/Statistics";

vi.mock("../src/components/icons/ShieldTick", () => ({
  default: () => <span data-testid="icon-shieldtick">ShieldTick Icon</span>,
}));
vi.mock("../src/components/icons/MagicPen", () => ({
  default: () => <span data-testid="icon-magicpen">MagicPen Icon</span>,
}));
vi.mock("../src/components/icons/People", () => ({
  default: () => <span data-testid="icon-people">People Icon</span>,
}));

describe("Statistics", () => {
  beforeEach(() => {
    render(<Statistics />);
  });

  it("renders the correct number of StatisticsItem component items", () => {
    const items = screen.getAllByText(
      /виконаних замовлень|унікальних дизайнів|задоволених клієнтів/,
    );
    expect(items).toHaveLength(3);
  });

  it("renders icons for each statistics", () => {
    expect(screen.getByTestId("icon-shieldtick")).toBeInTheDocument();
    expect(screen.getByTestId("icon-magicpen")).toBeInTheDocument();
    expect(screen.getByTestId("icon-people")).toBeInTheDocument();
  });
});
