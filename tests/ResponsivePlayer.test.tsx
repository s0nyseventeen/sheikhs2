import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import ReactPlayer from "react-player/vimeo";

import ResponsivePlayer from "../src/components/ResponsivePlayer";

vi.mock("react-player/vimeo", () => ({
  default: vi.fn(() => <div data-testid="react-player" />),
}));

describe("ResponsivePlayer", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the player container", () => {
    render(<ResponsivePlayer />);
    const container = screen.getByTestId("react-player").parentElement;
    expect(container).toHaveClass("relative");
    expect(container).toHaveClass("pt-[56.25%]");
  });

  it("renders ReactPlayer with correct props", () => {
    render(<ResponsivePlayer />);
    expect(ReactPlayer).toHaveBeenCalledWith(
      expect.objectContaining({
        url: "https://player.vimeo.com/video/1041410776?badge=0&autopause=0&player_id=0&app_id=58479",
        width: "100%",
        height: "100%",
        controls: true,
        light: true,
        playing: true,
        className: "absolute top-0 left-0",
      }),
      {},
    );
  });
});
