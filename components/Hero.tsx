import {Instagram} from "lucide-react";
import '../app/globals.css';


const Hero = () => {
    return (
        <div className={"flex flex-col justify-end items-center h-[90vh] md:h-screen text-white"}>

            {/* Partie 1 - texte + logo*/}
            <div className={"text-center w-[100wh] h-full flex items-center justify-center flex-col gap-2"}>
                <h1 className={"font-Chemre_italic text-[clamp(2.5rem,7vw,8rem)]"}>LAUNCHING SOON!</h1>
                <h2 className={"font-FuturaPT_book text-[clamp(1.5rem,2vw,3rem)]"}>Embrace Being Yourself</h2>
                <a href={'#'}>
                    {/*<Image src={instagram} alt={'icon_instagram'}></Image>*/}
                    <Instagram className={'size-[2rem] md:size-[3rem]'} />
                </a>
            </div>

            {/* Partie 2 - formulaire */}
            <div className={"text-center flex flex-col justify-center gap-3 mb-4"}>
            <h3 className={'font-FuturaPT_book text-normal'}>Be the first to know. Sign up for early access.</h3>
            <form className={"flex gap-2 justify-center"}>
                <input type="text" placeholder="Enter your email" className={"px-4 py-2"}></input>
                <button className={'bg-orange-300 px-4 py-2'}>NOTIFY ME</button>
            </form>
            <h3 className={'font-FuturaPT_book text-normal'}>
                <a href="#" className="underline hover:text-orange-400 transition duration-300">
                    Press & Influencers - Contact Us
                </a>
            </h3>
            </div>
        </div>
    );
}

export default Hero;
