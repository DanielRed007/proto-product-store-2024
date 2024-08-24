import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Page from "../app/page";
import { ThemeProvider } from "@/app/context/ThemeContext";

function renderMainPage() {
  return render(
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

describe("Home Page Tests - Widget Tabs", () => {
  beforeEach(() => {
    renderMainPage();
  });

  it("renders widget page", () => {
    const pageTitle = screen.getByText("Widget Catalog #1");

    expect(pageTitle).toBeInTheDocument();
  });

  it("renders alerts tab", () => {
    const alertsTab = screen.getByTestId("Alerts");

    fireEvent.click(alertsTab);

    waitFor(() => {
      const alertsContainer = screen.getByTestId("alerts-container");
      expect(alertsContainer).toBeInTheDocument();
    });
  });

  it("renders dialogs tab", () => {
    const dialogsTab = screen.getByTestId("Dialogs");

    fireEvent.click(dialogsTab);

    waitFor(() => {
      const dialogsContainer = screen.getByTestId("dialogs-container");
      expect(dialogsContainer).toBeInTheDocument();
    });
  });

  it("renders cards tab", () => {
    const cardsTab = screen.getByTestId("Cards");

    fireEvent.click(cardsTab);

    waitFor(() => {
      const cardsContainer = screen.getByTestId("cards-container");
      expect(cardsContainer).toBeInTheDocument();
    });
  });
});
