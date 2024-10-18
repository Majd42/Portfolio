export interface NavItemType {
  name: string;
  icon: JSX.Element;
  href: string;
}

export interface project {
    id: number;
    image: string;
    title: string;
    tech: string;
    link: string;
  };



  export interface ISkill {
   
    id: number;
    name: string;
    percentage: number;
  
  }

  export interface Event {
  id: number;
  period: string;
  title: string;
  place: string;
  body: string;
}
export type Pages = "About" | "Resume" | "Works" | "Contact";