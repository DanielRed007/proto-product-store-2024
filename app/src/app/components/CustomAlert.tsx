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
      typeStyle = "text-green-500 dark:text-green-700";
      break;
    case "error":
      typeStyle = "text-red-500 dark:text-red-700";
      break;
    case "warning":
      typeStyle = "text-yellow-500 dark:text-yellow-700";
      break;
    case "info":
      typeStyle = "text-blue-500 dark:text-blue-700";
      break;
  }

  return (
    <div
      className={`${baseStyle} bg-gray-500 dark:bg-gray-800 flex items-center justify-center`}
    >
      {type === "success" ? (
        <CheckCircleIcon className={`h-10 w-10 ${typeStyle}`} />
      ) : type === "error" ? (
        <XCircleIcon className={`h-10 w-10 ${typeStyle}`} />
      ) : type === "warning" ? (
        <ExclamationTriangleIcon className={`h-10 w-10 ${typeStyle}`} />
      ) : (
        type === "info" && (
          <ShieldExclamationIcon className={`h-10 w-10 ${typeStyle}`} />
        )
      )}

      <div className={`h-20 w-px bg-gray-400 ml-5 mr-2`}></div>

      <div className='p-3 mx-2'>{message}</div>

      <XMarkIcon className='h-10 w-10 text-gray-300 dark:bg-gray-800' />
    </div>
  );
};
