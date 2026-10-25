import { SocialLink, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Education", href: "#education", sectionId: "education" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
  { label: "Activity", href: "#github", sectionId: "github" },
];

export const socialsData: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/tonmoybiswas07",
    iconName: "github",
  },
  {
    platform: "Twitter",
    url: "https://x.com/TonmoyBiswas945",
    iconName: "twitter",
  },
  {
    platform: "Facebook",
    url: "https://web.facebook.com/tonmoy.biswas.7564",
    iconName: "facebook",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/___b.tonmoy/",
    iconName: "instagram",
  },
];
