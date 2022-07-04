import { Link } from "react-router-dom";

import MercadoServiceImg from "../images/logo_cuadrado_black.png";
import TakeaRiskImg from "../images/takearisk.png";
import DonateloImg from "../images/donateloImg.png";

import guesspokemonImg from "../images/guesspokemonImg.png";
import portfolioImg from "../images/portfolioImg.png";
import wordlecloneImg from "../images/wordlecloneImg.jpg";
import giftslistImg from "../images/giftslistImg.png";
import calendariointeractivoImg from "../images/calendariointeractivoImg.png";

function Proyects() {
    return ( 
        <section id="work" className="wrapper alt style1">
        <div className="inner">
            <h2 className="major">My work and proyects</h2>
            <br/>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                    <h1 className="text-5xl font-bold">Mercado Service</h1>
                    <p className="py-6">Personal proyect to find profesionals easier than usually and an e-commerce for profesionals stuffs.</p>
                    <Link to="/mercadoservice" className="btn btn-primary">View more data and link</Link>
                    </div>
                    <img loading="lazy" src={MercadoServiceImg} alt="MS" className="max-w-[300px] rounded-lg shadow-2xl" />
                </div>
            </div>
            <br/>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                    <h1 className="text-5xl font-bold">Take a Risk</h1>
                    <p className="py-6">Web3 proyect for Axie Infinity tournaments with SLP inscriptions and more features!.</p>
                    <Link to="/takearisk" className="btn btn-primary">View more data and link</Link>
                    </div>
                    <img loading="lazy" src={TakeaRiskImg} alt="TAR" className="max-w-[300px] rounded-lg shadow-2xl" />
                </div>
            </div>
            <br/>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                    <h1 className="text-5xl font-bold">Donatelo</h1>
                    <p className="py-6">Web3 Website to donate to streamers and show alerts live.</p>
                    <Link to="/donatelo" className="btn btn-primary">View more data and link</Link>
                    </div>
                    <img loading="lazy" src={DonateloImg} alt="AGG" className="max-w-[300px] rounded-lg shadow-2xl" />
                </div>
            </div>
            <br/>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img loading="lazy" src={portfolioImg} alt="portfolio" className="max-w-[300px] min-h-[300px] object-cover rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-3xl font-bold">This Portfolio</h1>
                    <p className="py-6">My website portfolio, i made it with React, React Router Dom, Tailwind and Daisyui.</p>
                    <Link to="/thisportfolio" className="btn btn-primary">View more data about it</Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img loading="lazy" src={guesspokemonImg} alt="guesspokemon" className="max-w-[300px] min-h-[300px] object-cover rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-3xl font-bold">Guess Pokemon Challenge</h1>
                    <p className="py-6">Guess a random pokemon just for her silhouette. The pokemon is given by an "API" (.tsx file simule the api).</p>
                    <Link to="/guesspokemon" className="btn btn-primary">View more data and link</Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img loading="lazy" src={wordlecloneImg} alt="pic1" className="max-w-[300px] min-h-[300px] object-cover rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-3xl font-bold">Wordle Clone (Spanish version)</h1>
                    <p className="py-6">Copy of the famous wordle game, where you have to guess an unknown random word.</p>
                    <Link to="/wordleclone" className="btn btn-primary">View more data and link</Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img loading="lazy" src={giftslistImg} alt="giftslist" className="max-w-[300px] min-h-[300px] object-cover rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-3xl font-bold">Gifts List</h1>
                    <p className="py-6">(similar to a todo app) A simple form with multiple inputs to fill to add a gift to the list.</p>
                    <Link to="/giftslist" className="btn btn-primary">View more data and link</Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img loading="lazy" src={calendariointeractivoImg} alt="pic1" className="max-w-[300px] min-h-[300px] object-cover rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-3xl font-bold">Interactive calendar</h1>
                    <p className="py-6">Calendar website to use later on another proyects with turns. Old proyect </p>
                    <Link to="/calendariointeractivo" className="btn btn-primary">View more data and link</Link>
                    </div>
                </div>
            </div>
            <br/>
            {/* <section className="features">
                <article>
                    <a rel="noreferrer" target="_blank" href="https://juanm512.github.io/cDAIchallenge/views/index.html" className="image"><img loading="lazy" loading="lazy" src="../images/cdai_challenge.png" alt="" /></a>
                    <h3 className="major">cDAI Challenge</h3>
                    <p>Challenge || Web3 integration and interactions with cDAI contrat to know account balance, transfer cDAI and transactions history.</p>
                    <a rel="noreferrer" target="_blank" href="https://juanm512.github.io/cDAIchallenge/views/index.html" className="special pt-4">Open page</a>
                </article>
                <article>
                    <a rel="noreferrer" target="_blank" href="https://juanm512.github.io/calendario-interactivo/" className="image"><img loading="lazy" loading="lazy" src="../images/calendario-interactivo.png" alt="" /></a>
                    <h3 className="major">Interactive calendar</h3>
                    <p>Calendar website to use later on another proyects with turns.</p>
                    <a rel="noreferrer" target="_blank" href="https://juanm512.github.io/calendario-interactivo/" className="special pt-4">Open page</a>
                </article>
                <article>
                    <a rel="noreferrer" target="_blank" href="https://juanm512.github.io/fliped-game/" className="image"><img loading="lazy" loading="lazy" src="../images/cardgame.png" height="300px" alt="" /></a>
                    <h3 className="major">Memory game</h3>
                    <p>The clasic memory game with cards.</p>
                    <a rel="noreferrer" target="_blank" href="https://juanm512.github.io/fliped-game/" className="special pt-4">Open page</a>
                </article>
            </section> */}

        </div>
    </section>
     );
}

export default Proyects;