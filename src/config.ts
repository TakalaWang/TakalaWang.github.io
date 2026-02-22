import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: "Takala's Blog",
    subtitle: "A passionate ML Researcher and Developer && Forever Cataholic",
  lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
      hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
      fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'Anna Creator',              // Credit text to be displayed
      url: 'https://www.canva.com/p/annacreator/?utm_medium=referral&utm_source=creator_share&utm_campaign=creator_share'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    LinkPreset.Curriculum,
    {
      name: "GitHub",
      url: "https://github.com/TakalaWang",
      external: true,
    },
    {
      name: "CV",
      url: "https://www.self.so/TakalaWang",
      external: true,
    }
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "Takala",
  department: "Senior @ NTNU-CSIE",
  bio: "A passionate ML Researcher and Developer && Forever Cataholic",
  email: "ccwangtakala@gmail.com",
  website: "https://TakalaWang.github.io/",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/TakalaWang",
    },
    {
      name: "Instagram",
      icon: "fa6-brands:instagram",
      url: "https://www.instagram.com/takala_1128/",
    },
    {
      name: "Facebook",
      icon: "fa6-brands:square-facebook",
      url: "https://www.facebook.com/Takala1128/",
    },
    {
      name: "LinkedIn",
      icon: "fa6-brands:linkedin", 
      url: "https://www.linkedin.com/in/takalawang/",
    },
    // Visit https://icones.js.org/ for icon codes
    // You will need to install the corresponding icon set if it's not already included
    // `pnpm add @iconify-json/<icon-set-name>`
  ],
}

export const default_about_page_lang: string = "zh_tw";
export const default_curriculum_semester: string = "114-2";

export const achievements: {time: string, content: string}[] = [
    {
        time: "2022-01 ~ 2022-07",
        content: "2022 師大資工營活動股員",
    },
    {
        time: "2022-08 ~ 2022-09",
        content: "伯樂大學堂輔導員",
    },
    {
        time: "2022-09 ~ 2022-10",
        content: "ICPC 銅牌獎 with Bogay, s.heng",
    },
    {
        time: "2022-07 ~ 2023-06",
        content: "38th 師大資工系學會114級會員代表",
    },
    {
        time: "2022-07 ~ 2023-06",
        content: "38th 師大資工系學會地下活動股員",
    },
    {
        time: "2023-01 ~ 2023-07",
        content: "2023 師大資工營活動股長",
    },
    {
        time: "2023-07 ~ 2023-08",
        content: "客語語音辨識競賽 第二名 wtih Howard, Jacob",
    },
    {
        time: "2023-07 ~ 2023-09",
        content: "Cool English TTS 系統開發 wtih Howard, Jacob",
    },
    {
        time: "2023-09 ~ 2023-10",
        content: "ICPC 銅牌獎 with Panda, twdanielcheng",
    },
    {
        time: "2023-09 ~ 2023-10",
        content: "NPCP 第四名 with Panda, twdanielcheng",
    },
    {
        time: "2023-07 ~ 2024-06",
        content: "專題：英語語音口說評測系統之發展 wtih Howard, Jacob",
    },
    {
        time: "2023-07 ~ 2024-06",
        content: "39th 師大資工系學會活動股員",
    },
    {
        time: "2023-08 ~ 2024-06",
        content: "紀博文程式設計 (一)(二)TA",
    },
    {
        time: "2023-09 ~ 2024-06",
        content: "GDG on campus Tech Speaker",
    },
    {
        time: "2024-06 ~ 2024-07",
        content: "師大海狸營助教",
    },
    {
        time: "2021-09 ~ 2025-06",
        content: "資工系 114 級班代",
    },
    {
        time: "2021-09 ~ 2025-06",
        content: "師大資工系羽球隊隊員",
    },
    {
        time: "2021-02 ~ 2025-06",
        content: "師大資工系排球隊",
    },
    {
        time: "2024-07 ~ 2025-06",
        content: "40th 師大資工系學會114級會員代表",
    },
    {
        time: "2024-08 ~ 2025-06",
        content: "張鈞法程式設計 (一)(二)TA",
    },
    {
      time: "2024-09 ~ 2025-06",
      content: "Hinagiku 師生討論平台開發 with Jacob, Howard, Sky, Buffett, Ryanlinjui, meowtheway_mk2",
    },
    {
        time: "2025-02 ~ 2025-06",
        content: "南港高中、和平高中實習老師",
    },
    {
        time: "2025-02 ~ 2025-07",
        content: "2025 師大資工營教學股長 with NZ Hugo",
    },
    {
      time: "2025-02 ~ 2025-08",
      content: "SLaTE 2025 paper Accepted",
    }, 
    {
        time: "2025-07 ~ 2025-08",
        content: "Acer RD Intern",
    },
].reverse();

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
