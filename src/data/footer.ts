import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Lo mejor en tecnologia para tu laboratorio",
    quickLinks: [
        {
            text: "Inicio",
            url: "/"
        },
        {
            text: "Productos",
            url: "/productos"
        },
        {
            text: "Sobre Nosotros",
            url: "/sobre-nosotros"
        }
    ],
    email: 'address@yoursite.com',
    telephone: '+591 77777777',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}