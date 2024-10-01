import {Container} from "@/components/temp/Container";
import {productGridImages} from "@/libs/content";
import {FadeIn, FadeInStagger} from "@/components/temp/FadeIn";
import clsx from "clsx";
import Image from "next/image";
import {faHeart} from "@fortawesome/pro-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProductImageGrid = () => {
  return (
      <div className={'mx-auto  text-left  '}>
          <Container className={'relative'}>
              <FadeInStagger>
                  <div className={' grid  md:grid-cols-2  gap-6'}>
                      <FadeIn
                          className={clsx('space-y-6  max-w-4xl mx-auto')}
                          key={1}>
                          {/*      <Image src={FleshImageTop} alt={'Flesh Hero'}
                                 className={' max-w-2xl rounded-2xl w-full '} />*/}
                          <Image src={productGridImages[1].src} alt={'Flesh Hero'}
                                 className={' max-w-2xl rounded-2xl w-full '} />
                      </FadeIn>
                      <FadeIn
                          className={clsx('space-y-6   max-w-4xl mx-auto')}
                          key={1}>
                          <Image src={productGridImages[0].src} alt={'Flesh Hero'}
                                 className={' max-w-2xl rounded-2xl w-full '} />
                      </FadeIn>

                      {/*{productGridImages.map((item) => {
                          return (
                              <FadeIn
                                  className={clsx(' aspect-square max-w-4xl  ')}
                                  key={item.id}>
                                  <Image src={item.src} fill alt={'Flesh Hero'}
                                         className={'relative rounded-2xl  max-w-2xl w-full'} />
                              </FadeIn>
                          )
                      })}*/}
                  </div>

              </FadeInStagger>
              <div
                  className={'absolute ring-8 ring-white/40 rounded-2xl z-20 left-1/2 p-6 text-xl font-semibold -translate-x-1/2 bg-white space-x-4 shadow-xl top-1/2 -translate-y-1/2'}>
                  <FontAwesomeIcon icon={faHeart} className={'text-red-500 text-2xl'} />
                  <span>Yesss! It's You inside!</span>
              </div>
          </Container>
      </div>
  );
};

export default ProductImageGrid;
