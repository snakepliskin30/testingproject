import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  describe('initialize with defaultCount=0 and description="My Counter"', () => {
    const setup = () =>
      render(<Counter defaultCount={0} description="My Counter" />);
    beforeEach(() => {});

    it('renders "Current Count: 0"', () => {
      setup();
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
      expect(screen.getByText(/My Counter/)).toBeInTheDocument();
    });

    it('renders title as "My Counter"', () => {
      setup();
      expect(screen.getByText(/My Counter/)).toBeInTheDocument();
    });

    it("render the increment input", () => {
      setup();
      expect(screen.getByLabelText(/Increment By/)).toBeInTheDocument();
    });

    describe("when + is clicked", () => {
      beforeEach(() => {});

      it("defaultCount=0 and + clicked then counter = 1", () => {
        setup();
        fireEvent.click(
          screen.getByRole("button", {
            name: "+",
          }),
        );
        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
      });
    });

    describe("when - is clicked", () => {
      it("defaultCount=0 and - clicked then counter = -1", () => {
        setup();
        fireEvent.click(
          screen.getByRole("button", {
            name: "-",
          }),
        );
        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
      });
    });
  });
});

describe("increment value of 10 and counter value of 5", () => {
  const setup = async () => {
    render(<Counter defaultCount={5} description="Increment Plus 10" />);
    await user.type(screen.getByRole("spinbutton"), "{selectall}10");
  };
  it("the + button was clicked", async () => {
    await setup();
    await user.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
  });
});
