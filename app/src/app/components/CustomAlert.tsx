import React from "react";
import { AlertType } from "../enums/AlertType";
import {
  CheckCircleIcon,
  XMarkIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/solid";

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
      typeStyle = "green";
      break;
    case "error":
      typeStyle = "red";
      break;
    case "warning":
      typeStyle = "yellow";
      break;
    case "info":
      typeStyle = "blue";
      break;
  }

  return (
    <div
      className={`${baseStyle} bg-gray-800 flex items-center justify-center`}
    >
      {type === "success" ? (
        <CheckCircleIcon className={`h-10 w-10 text-${typeStyle}-500`} />
      ) : type === "error" ? (
        <XCircleIcon className={`h-10 w-10 text-${typeStyle}-500`} />
      ) : type === "warning" ? (
        <ExclamationTriangleIcon
          className={`h-10 w-10 text-${typeStyle}-500`}
        />
      ) : (
        type === "info" && (
          <ShieldExclamationIcon
            className={`h-10 w-10 text-${typeStyle}-500`}
          />
        )
      )}

      <div className={`h-20 w-px bg-gray-500 ml-5 mr-2`}></div>

      <div className='p-3 mx-2'>{message}</div>

      <XMarkIcon className='h-10 w-10 text-gray-500' />
    </div>
  );
};
