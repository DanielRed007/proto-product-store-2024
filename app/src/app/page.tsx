import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { CustomAlert } from "./components/CustomAlert";
import { CustomModal } from "./components/CustomModal";
import { CustomCard } from "./components/CustomCard";
import { widgetData } from "./data/data";

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
      <div className='flex h-auto w-5/6 bg-gray-800 dark:bg-gray-950 justify-center pt-24 px-4 pb-24 rounded-md'>
        <div className='w-5/6'>
          <TabGroup className='w-full'>
            <TabList className='flex gap-4'>
              {widgetData.map(({ name }) => (
                <Tab
                  key={name}
                  className='rounded-md py-1 px-3 text-sm/6 font-semibold text-white bg-gray-700 focus:outline-none'
                  data-testid={name}
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className='mt-3 w-full h-full bg-gray-700 rounded-md'>
              {widgetData.map(({ name, widget, customLayout }) => (
                <TabPanel
                  key={name}
                  className={`${customLayout} rounded-md bg-white/5 p-3`}
                >
                  {widget.map((w, i) => {
                    const Component =
                      widgetComponents[
                        w.widget as keyof typeof widgetComponents
                      ];
                    if (Component) {
                      return <Component key={i} {...w} />;
                    }
                    return null;
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
