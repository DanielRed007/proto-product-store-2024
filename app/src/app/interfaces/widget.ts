import { AlertType } from "../enums/AlertType";

export interface WidgetSet {
  name: string;
  customLayout: string;
  widget: Widget[];
}

export interface Widget {
  widget: string;
  type: AlertType;
  message: string;
  imageUrl?: string;
}
