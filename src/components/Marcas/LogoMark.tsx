interface LogoMarkProps {
    // Props
    image: string;
    link: string;
}
export default function LogoMark({image, link}: LogoMarkProps) {
    return(
        <a href={link} className="w-[300px] h-[200px] ">
            <img className="w-full h-full hover:scale-110 duration-200" src={image} alt="Logo" />
        </a>
    )
}