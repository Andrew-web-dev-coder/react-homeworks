export interface FooterLink {
  label: string;
  path: string;
}
export type FooterLinks = Record<string, FooterLink[]>;

export const footerLinks: FooterLinks = {
  Company: [
    { label: "Delivery Info", path: "#" },
    { label: "FAQ", path: "#" },
    { label: "Support", path: "#" },
    { label: "Home", path: "#" },
  ],
  Template: [
    { label: "Style Guide", path: "https://www.google.com/" },
    { label: "Changelog", path: "https://www.google.com/" },
    { label: "Licence", path: "https://www.google.com/" },
    { label: "Webflow University", path: "https://www.google.com/" },
  ],
  Flowbase: [
    { label: "Twitter", path: "#" },
    { label: "GitHub", path: "#" },
  ],
};
