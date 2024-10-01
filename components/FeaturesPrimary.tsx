import Image from "next/image";
import {FadeInStagger} from "@/components/temp/FadeIn";
import HeroImg from "@/images/flesh-hero.webp";
import {Container} from "@/components/temp/Container";

const Hero = () => {
  return (
      <Container>
          <FadeInStagger>
              <div className={'py-24 text-center space-y-12'}>
                  <h1 className={'text-7xl font-bold  max-w-3xl mx-auto -tracking-wider'}>A piece of Your favorite <span className={'text-teal-500'}>influencer</span></h1>
                  <p className={'text-lg max-w-xl mx-auto text-slate-500'}>Discover a one-of-a-kind, personalized product that brings you closer to the influencer you adore. Unique, exclusive, just for you.</p>
                  <button className={'py-4 px-8 bg-slate-800 hover:bg-slate-900 rounded-full text-sm font-bold text-white'}>Get Yours Now</button>
                  <Image src={HeroImg} alt={'Flesh Hero'} className={'w-full max-w-2xl mx-auto'} />
              </div>
          </FadeInStagger>
      </Container>
  );
};

export default Hero;
