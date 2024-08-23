import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { CustomAlert } from "./components/CustomAlert";
import { AlertType } from "./enums/AlertType";
import { CustomModal } from "./components/CustomModal";
import { CustomCard } from "./components/CustomCard";

const widgetData = [
  {
    name: "Alerts",
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
        message: "This is a another alert",
      },
      {
        widget: "modal",
        type: AlertType.Error,
        message: "This is a another alert",
      },
      {
        widget: "modal",
        type: AlertType.Warning,
        message: "This is a another alert",
      },
    ],
  },
  {
    name: "Cards",
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

const widgetComponents: Record<string, React.FC<any>> = {
  alert: CustomAlert,
  modal: CustomModal,
  card: CustomCard,
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-7xl text-white'>Widget Catalog #1</h1>
      <ThemeSwitcher />
      <div className='flex h-screen w-5/6 bg-gray-800 dark:bg-gray-950 justify-center pt-24 px-4 rounded-md'>
        <div className='w-5/6'>
          <TabGroup className='w-full'>
            <TabList className='flex gap-4'>
              {widgetData.map(({ name }) => (
                <Tab
                  key={name}
                  className='rounded-md py-1 px-3 text-sm/6 font-semibold text-white bg-gray-700 focus:outline-none'
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className='mt-3 w-full h-full bg-gray-700 rounded-md'>
              {/* {widgetData.map(({ name, widget }) => (
                <TabPanel key={name} className='rounded-md bg-white/5 p-3'>
                  {widget.map((w, i) => (
                    <CustomAlert key={i} type={w.type} message={w.message} />
                  ))}
                </TabPanel>
              ))} */}
              {/* Tabs */}
              {widgetData.map(({ name, widget }) => (
                <TabPanel key={name} className='rounded-md bg-white/5 p-3'>
                  {widget.map((w, i) => {
                    const Component =
                      widgetComponents[
                        w.widget as keyof typeof widgetComponents
                      ];
                    if (Component) {
                      return <Component key={i} {...w} />;
                    }
                    return null; // Fallback for unknown widget types
                  })}
                </TabPanel>
              ))}
              <div></div>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </main>
  );
}
