import React from "react";
import {
  CheckCircleIcon,
  XMarkIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/solid";

interface DialogProps {
  type: string;
  message: string;
}

export const CustomModal: React.FC<DialogProps> = ({ type, message }) => {
  const baseStyle =
    "p-6 m-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100";
  let icon;
  let typeStyle = "";

  switch (type) {
    case "success":
      typeStyle = "text-green-500";
      icon = <CheckCircleIcon className='h-10 w-10' />;
      break;
    case "error":
      typeStyle = "text-red-500";
      icon = <XCircleIcon className='h-10 w-10' />;
      break;
    case "warning":
      typeStyle = "text-yellow-500";
      icon = <ExclamationTriangleIcon className='h-10 w-10' />;
      break;
    case "info":
      typeStyle = "text-blue-500";
      icon = <ShieldExclamationIcon className='h-10 w-10' />;
      break;
    default:
      typeStyle = "text-gray-500";
      icon = <ShieldExclamationIcon className='h-10 w-10' />;
  }

  return (
    <div data-testid='dialogs-container' className={`${baseStyle} max-w-lg`}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className={`mr-4 ${typeStyle}`}>{icon}</div>
          <h3 className='text-lg font-medium'>Modal</h3>
        </div>
        <XMarkIcon className='h-6 w-6 cursor-pointer text-gray-500' />
      </div>
      <div className='mt-4'>
        <p>{message}</p>
      </div>
      <div className='mt-6 flex justify-end'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          OK
        </button>
      </div>
    </div>
  );
};
