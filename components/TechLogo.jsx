const TechLogo = ({ src, alt, link }) => {

    return <a href={link}><img src={src} alt={alt} className="w-full" /></a>

}

export default TechLogo;