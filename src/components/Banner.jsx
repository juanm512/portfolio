import Logo from '../images/Carta.jpg';


const Banner = () => {
    return (
        <section id="banner">
        <div className="inner">
            <div className="logo">
                <img className='rounded-full h-[50px]' style={{objectFit: "cover"}} width="50px" height="50px" src={Logo} alt="logo" />
                <h2>Juan Manuel Vila - Full-Stack Developer</h2>
            </div>
            
            <p>Hello, I'm Juan Manuel and I’m from Argentina. My relationship with Web development started when I was 19 years old, and has become my life-long love.
             On this website, you’ll discover a little of what is my passion for this world.</p>
        </div>
        </section>
    );
}

export default Banner;