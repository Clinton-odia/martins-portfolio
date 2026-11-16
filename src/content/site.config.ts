export interface SiteConfig {
  name: string;
  title: string;
  credential: string;
  headline: string;
  heroSentence: string;
  phdInstitution: string;
  currentRole: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    scholar: string;
    orcid: string;
    researchgate?: string;
    cv: string;
  };
  brand: {
    name: string;
    logo: string;
    vision: string;
  };
  url: string;
}

export const site: SiteConfig = {
  name: "Martins Odiamenhi",
  title: "Dr.",
  credential: "PhD in Electrical & Electronic Engineering",
  headline: "RF Systems, Wireless Power Transfer & Nonlinear Energy Modelling",
  heroSentence: "I design and model systems that turn ambient radio-frequency energy into usable power, from the antenna to the sensor node it keeps alive.",
  phdInstitution: "Edinburgh Napier University",
  currentRole: "TODO(martins): current position / employer, or leave empty",
  email: "TODO(martins): contact email",
  links: {
    linkedin: "TODO(martins): linkedin url",
    github: "TODO(martins): github url",
    scholar: "TODO(martins): google scholar url",
    orcid: "TODO(martins): orcid url",
    researchgate: "TODO(martins): researchgate url",
    cv: "/martins-odiamenhi-cv.pdf",
  },
  brand: {
    name: "Wavemind Systems",
    logo: "/brand/wavemind.svg",
    vision: "Research & Consulting Vision: Wavemind Systems",
  },
  url: "https://TODO-domain.com",
};

