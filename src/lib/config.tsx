import { IconsList } from "./icons";

interface IConfig {
  /**
   * Base URL of your website.
   */
  baseUrl: string;
  /**
   * Social media links.
   */
  social: {
    /**
     * GitHub username.
     */
    github: string;
    /**
     * X (twitter) username.
     */
    x?: string;
    /**
     * Telegram username.
     */
    telegram?: string;
  };
  /**
   * Full name.
   */
  name: string;
  /**
   * Welcome message. This will be displayed on the
   * home page.
   */
  welcome?: string;
  /**
   * About you. This can be a string or JSX element.
   */
  bio: string | JSX.Element;
  /**
   * Contact email.
   */
  email: string;
  /**
   * Navigation items. This will be displayed in the
   * header.
   */
  navItems?: {
    name: string;
    href: string;
  }[];
  /**
   * Projects that you want to showcase.
   */
  projects?: {
    title: string;
    description: string;
    link?: string;
    stackIcons?: (keyof typeof IconsList)[];
  }[];
  /**
   * Link to your CV. If you put your CV in the public
   * folder, you can just start with "/". For example,
   * if your CV is in the root of the public folder, you
   * can just put "/cv.pdf".
   */
  cv?: string;
  /**
   * Metadata for the website.
   */
  metadata: {
    /**
     * Default title of the website.
     */
    title: string;
    /**
     * Description of the website.
     */
    description: string;
    /**
     * Open Graph image link. If you start with "/" it
     * will be appended to the base URL.
     */
    ogImage?: string;
    /**
     * Favicon link. If you start with "/" it will be
     * appended to the base URL.
     */
    favicon?: string;
  };
  /**
   * for analytics tracking we use loglib. (https:/
   * loglib.io). Create free account and get the
   * loglibId from the dashboard.
   */
  analytics?: string;
}

export const config: IConfig = {
  baseUrl:
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000",
  name: "Nahom Tensaebirhan",
  welcome: "Hey there 👋🏽",
  bio: <p>I'm Nahom. I'm a software engineer and I love building things.</p>,
  social: {
    github: "oddegen",
    telegram: "Phgoat",
  },
  email: "nahomtensae@gmail.com",
  projects: [
    {
      title: "snippets",
      description: "A code snippet notes app",
      link: "https://github.com/oddegen/snippets",
      stackIcons: ["javascript", "nextJs", "tailwind", "typescript"],
    },
    {
      title: "tinyrouter",
      description: "A light weight router in Go",
      link: "https://github.com/oddegen/tinyrouter",
      stackIcons: ["go"],
    },
    {
      title: "mazs",
      description: "A maze algorithm visualizer",
      link: "https://github.com/oddegen/mazs",
      stackIcons: ["javascript", "nextJs", "tailwind", "typescript"],
    },
    {
      title: "pickMe",
      description: "A windows terminal based colorpicker",
      link: "https://github.com/oddegen/pickMe",
      stackIcons: ["c", "cpp"],
    },
    {
      title: "dotfiles",
      description: "Linux rice files",
      link: "https://github.com/oddegen/dotfiles",
      stackIcons: ["linux", "terminal", "c"],
    },
  ],
  metadata: {
    title: "Nahom's Portfolio",
    description: "Personal website of Nahom",
    ogImage: "/api/og",
  },
};
