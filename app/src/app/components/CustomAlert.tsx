import React from "react";
import { AlertType } from "../enums/AlertType";

interface AlertProps {
  type: AlertType;
  message: string;
  // widget: string;
}

export const CustomAlert: React.FC<AlertProps> = ({ type, message }) => {
  const baseStyle = "p-4 m-4 rounded-md text-white";
  let typeStyle = "";

  switch (type) {
    case "success":
      typeStyle = "bg-green-500";
      break;
    case "error":
      typeStyle = "bg-red-500";
      break;
    case "warning":
      typeStyle = "bg-yellow-500";
      break;
    case "info":
      typeStyle = "bg-blue-500";
      break;
  }

  return <div className={`${baseStyle} ${typeStyle}`}>{message}</div>;
};
