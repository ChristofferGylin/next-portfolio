import Button from "@/components/Button";

const Intro = () => {

    return (
        <div className="my-8">
            <p>Hej, jag heter</p>
            <h1>Christoffer Gylin.</h1>
            <h2>Jag tycker om att bygga hemsidor och applikationer.</h2>
            <p>Jag är en kreativ frontendutvecklare som älskar utmaningar, att bygga hemsidor, appar och användargränssnitt, lösa problem och komma på nya spännande lösningar. Jag har alltid varit intresserad av teknik i allmänhet och datorer i synnerhet, och har sedan 7 års ålder använt en dator i princip varje dag. Det var tydligt redan tidigt att datorer var min grej och att det skulle bli en stor del av min framtid...</p>
            <Button className='flex-grow-0' link='/about'>Läs mer om mig</Button>
        </div>
    )

}

export default Intro;