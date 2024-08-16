import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ThemeSwitcher from "./components/ThemeSwitcher";

const categories = [
  {
    name: "Alerts",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Dialogs",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Modals",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Modal Widget Catalog</h1>
      <ThemeSwitcher />
      <div className='flex h-screen w-5/6 bg-blue-500 justify-center pt-24 px-4 rounded-md'>
        <div className='w-5/6'>
          <TabGroup className='w-full'>
            <TabList className='flex gap-4'>
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className='rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/40 data-[hover]:bg-white/20 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white'
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className='mt-3 w-full h-full bg-red-700'>
              {/* {categories.map(({ name, posts }) => (
                <TabPanel key={name} className='rounded-xl bg-white/5 p-3'>
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className='relative rounded-md p-3 text-sm/6 transition hover:bg-white/5'
                      >
                        <a href='#' className='font-semibold text-white'>
                          <span className='absolute inset-0' />
                          {post.title}
                        </a>
                        <ul
                          className='flex gap-2 text-white/50'
                          aria-hidden='true'
                        >
                          <li>{post.date}</li>
                          <li aria-hidden='true'>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li aria-hidden='true'>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))} */}
              Tabs
              <div></div>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </main>
  );
}
