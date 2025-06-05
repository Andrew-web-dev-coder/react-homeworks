export interface HeaderLink {
  label: string;
  path: string;
}

export interface FooterLink {
  label: string;
  path: string;
}

export const headerLinks: HeaderLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Menu",
    path: "/menu",
  },
  {
    label: "Company",
    path: "/company",
  },
  {
    label: "Login",
    path: "/login",
  },
];
