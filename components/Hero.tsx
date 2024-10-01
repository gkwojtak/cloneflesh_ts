import Image from "next/image";
import {FadeInStagger} from "@/components/temp/FadeIn";
import HeroImg from "@/images/flesh-hero.webp";
import {Container} from "@/components/temp/Container";
import Link from "next/link";

const Hero = () => {
  return (
      <Container>
          <FadeInStagger>
              <div className={'py-24 text-center space-y-12'}>
                  <h1 className={'text-7xl font-bold  max-w-3xl mx-auto -tracking-wider'}>A piece of Your favorite <span className={'text-teal-500'}>influencer</span></h1>
                  <p className={'text-lg max-w-xl mx-auto text-slate-500'}>Create a one-of-a-kind, personalized product that brings your fans closer to you. Unique, exclusive, and crafted just for them, reflecting the true essence of who you are.</p>

                  <div className={'flex'}>
                      <Link href={'/contact'}
                            className={'py-4 justify-center self-center mx-auto px-8 bg-slate-800 hover:bg-slate-900 rounded-full flex items-center gap-x-4 text-sm font-bold text-white'}>
                          Get Yours Now
                      </Link>
                  </div>
                  <Image src={HeroImg} alt={'Flesh Hero'} className={'w-full max-w-2xl mx-auto'} />
              </div>
          </FadeInStagger>
      </Container>
  );
};

export default Hero;
