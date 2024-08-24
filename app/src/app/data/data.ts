import { AlertType } from "../enums/AlertType";
import { WidgetSet } from "../interfaces/widget";

export const widgetData: WidgetSet[] = [
  {
    name: "Alerts",
    customLayout: "",
    widget: [
      {
        widget: "alert",
        type: AlertType.Info,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        widget: "alert",
        type: AlertType.Success,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        widget: "alert",
        type: AlertType.Error,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        widget: "alert",
        type: AlertType.Warning,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
    ],
  },
  {
    name: "Dialogs",
    customLayout: "grid grid-cols-2",
    widget: [
      {
        widget: "modal",
        type: AlertType.Info,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        widget: "modal",
        type: AlertType.Success,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        widget: "modal",
        type: AlertType.Error,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        widget: "modal",
        type: AlertType.Warning,
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
    ],
  },
  {
    name: "Cards",
    customLayout: "grid grid-cols-2",
    widget: [
      {
        widget: "card",
        type: AlertType.Info,
        message: "This is a second alert",
        imageUrl: "https://via.placeholder.com/600x400",
      },
      {
        widget: "card",
        type: AlertType.Success,
        message: "This is a second alert",
        imageUrl: "https://via.placeholder.com/600x400",
      },
      {
        widget: "card",
        type: AlertType.Error,
        message: "This is a second alert",
        imageUrl: "https://via.placeholder.com/600x400",
      },
      {
        widget: "card",
        type: AlertType.Warning,
        message: "This is a second alert",
        imageUrl: "https://via.placeholder.com/600x400",
      },
    ],
  },
];
