import React from "react";
import FloatingDock from "../components/FloatingDock";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";

const Footer = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Search",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/search",
    },
    {
      title: "Issue",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Team-5XA/cold-recog/issues",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Team-5XA",
    },
  ];

  return (
    <footer className="w-full fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center bg-white bg-opacity-0 z-50">
      <FloatingDock items={links} />
    </footer>
  );
};

export default Footer;
