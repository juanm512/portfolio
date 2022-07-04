import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import proyectsData from "../proyectsData";

function SingleProyect() {
    let params = useParams();

    const [proyect, setProyect] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            const proyectFound = proyectsData.find(p => p.name === params.proyectName);
            setProyect(proyectFound);
        }, 2000);
    }, [])

    const getIconForLanguage = (language) => {
        switch (language) {
            case "JavaScript":
                return <i className="icon brands text-[2rem] rounded-full fa fa-js-square"></i>;
            case "HTML":
                return <i className="icon brands text-[2rem] rounded-full fa fa-html5"></i>;
            case "CSS":
                return <i className="icon brands text-[2rem] rounded-full fa fa-css3-alt"></i>;
            case "React":
                return <i className="icon brands text-[2rem] rounded-full fa fa-react"></i>;
            case "NodeJS":
                return <i className="icon brands text-[2rem] rounded-full fa fa-node-js"></i>;
            default: 
                return language;
        }
    }

    return ( 
        <section className="wrapper alt style1">
        {proyect ? (
            <>
            <div className="mx-auto md:w-8/12 p-4">
                <h1 className="text-5xl font-bold link"><a rel="noreferrer" target="_blank" href={proyect.url}>{proyect.title}</a></h1>
                <p className="py-6">{proyect.date}</p>
                <p className="py-6">{proyect.description}</p>

            </div>              
            <div className="mx-auto md:w-8/12 mockup-code p-4">                
                {/* <pre><code>Languages used in this proyect:</code></pre> */}
                    {proyect.FrontEnd && 
                    <>
                    <pre data-prefix=">"><code>FrontEnd Languages used:</code></pre>
                    {proyect.FrontEnd.map(lang=>(
                        <pre className="pt-2" data-prefix="-" key={"FrontEnd"+lang}><code>{getIconForLanguage(lang)}</code></pre>
                    ))}
                    </>
                    }
                    
                    {proyect.BackEnd &&
                    <>
                    <pre></pre>
                    <pre data-prefix=">"><code>BackEnd Languages used:</code></pre>
                    {proyect.BackEnd.map( (lang) =>(
                        <pre className="pt-2" data-prefix="-" key={"BackEnd"+lang}><code>{getIconForLanguage(lang)}</code></pre>
                    ))}
                    </>
                    }

                    {proyect.Libraries &&
                    <>
                    <pre></pre>
                    <pre data-prefix=">"><code>Libraries used inside the proyect:</code></pre>
                    {proyect.Libraries.map( (lib) =>(
                        <div key={lib.npmInstall}>
                        <pre className="pt-2" data-prefix="-" key={lib.npmInstall}><code>{lib.npmInstall}</code></pre>
                        <pre className="pt-0 break-all" data-prefix=" -" key={lib}><code className=" whitespace-pre-line break-all">{lib.description}</code></pre>
                        </div>
                    ))}
                    </>
                    }
            </div>
            
            <h1 className="text-3xl font-bold mx-auto md:w-8/12 mt-16" id="gallery">Proyect Gallery: </h1>
            
            <div className="mx-auto md:w-8/12 p-4">
            <p>
            (hold <kbd className="kbd kbd-sm">SHIFT</kbd> + <kbd className="kbd kbd-sm">mouseWheel</kbd> to see more images)
            </p>
            <div className="carousel rounded-box w-fit">
                {proyect.gallery.length > 0 ? proyect.gallery.map( (img, index) =>(
                    
                    <div key={"#item" + index+1} id={"#item" + index+1} className="carousel-item">
                        <img loading="lazy"  src={img} className="w-full rounded-0" alt={img} />
                    </div> 
                    
                
                ))
                :
                <>
                <h1 className="text-1xl font-bold mx-auto md:w-8/12 mt-16">
                    Proyect Gallery is empty, if you want to see more go to the proyect deploy page or contact me.
                </h1>
                </>
                }
            </div>
            </div>
            <p className="text-1xl font-semibold mx-auto md:w-8/12 mt-24">
                <a rel="noreferrer" className="link link-primary" href={proyect.url} target="_blank">Proyect deploy</a> 
                {proyect.github && <> and <a rel="noreferrer" className="link link-primary" href={proyect.github} target="_blank">Github page</a></>}
            </p>

            </>
        ) : <div className="flex"><button className="btn loading mx-auto">Searching proyect data, maybe don't exist</button></div> }    

        </section>
     );
}

export default SingleProyect;