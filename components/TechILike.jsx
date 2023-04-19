import tech from "@/data/tech";
import TechLogo from "./TechLogo";

const TechILike = () => {



    return (

        <div className="my-8">
            <h3>Tech jag tycker om</h3>
            <p>Jag gör hemsidor med HTML, CSS och JavaScript, ger dem liv och rörelse med Phaser, och får dem att låta med Tone.js</p>
            <div className="flex justify-between items-center gap-8 my-12">
                {tech.map((item, index) => {

                    return <TechLogo key={`techlogo-${index}`} src={item.imgSrc} alt={item.alt} link={item.link} />

                })}
            </div>

        </div>

    )

}

export default TechILike;