import {Container} from "@/components/temp/Container";
import {whyItsWorthList} from "@/libs/content";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FadeIn, FadeInStagger} from "@/components/temp/FadeIn";

const FeaturesPrimary = () => {
  return (
      <div className={'bg-teal-100 mx-auto max-w-[1560px] to-white rounded-[40px] py-24 font-poppins'}>
          <Container>
              <div className={'grid grid-cols-1 pb-24 gap-24 '}>
                  <div className={'space-y-12 max-w-4xl mx-auto'}>
                      <h1 className={'text-4xl font-bold text-slate-700 -tracking-wider'}>Say Yessss!</h1>
                      <div className={'space-y-6 md:pr-32'}>
                          <p className={'text-slate-600 '}>Your influence goes beyond the screen, offering a
                              personalized experience that brings your fans closer to you. Each item is crafted
                              with meticulous attention to detail, ensuring it perfectly captures your essence.</p>
                          <p className={'text-slate-600 '}>This isn’t just something you own - This isn’t just
                              something your fans own—it’s a piece of your world, designed exclusively for them.
                              It’s developed to deepen their connection with you in a way that’s both meaningful
                              and memorable.</p>
                          <button
                              className={'py-4 px-8 bg-slate-800 hover:bg-slate-900 rounded-full text-sm font-bold text-white'}>Ready?
                              Let’s Get Started
                          </button>
                      </div>
                  </div>
              </div>
          </Container>
          <div className={'mx-auto text-left md:border-t border-teal-700/20  '}>
              <Container>
                  <FadeInStagger className="mx-auto text-left grid md:grid-cols-2">
                      {whyItsWorthList.slice(0, 2).map((item) => {
                          return (

                                  <FadeIn className={'space-y-6 mb-12 md:mb-0 md:p-12 border-teal-700/20 max-w-4xl mx-auto md:odd:border-r'}
                                            key={item.title}>
                                  <FontAwesomeIcon icon={item.icon}
                                                   className={' p-4 bg-white rounded-full text-teal-700 text-2xl'} />
                                  <h1 className={'text-lg text-slate-700 font-semibold -tracking-wider'}>{item.title}</h1>
                                  <p className={'text-slate-900/80'}>{item.description}</p>
                                  </FadeIn>

                          )
                      })}
                  </FadeInStagger>
              </Container>
          </div>
          <div className={'mx-auto text-left md:border-y border-teal-700/20  '}>
              <Container>
                  <FadeInStagger className="mx-auto text-left grid md:grid-cols-2">
                      {whyItsWorthList.slice(2, 4).map((item, index) => {
                          return (
                              <FadeIn className={'space-y-6 mb-12 md:mb-0 md:p-12 border-teal-700/20 max-w-4xl mx-auto md:odd:border-r'}
                                      key={item.title}>
                                  <FontAwesomeIcon icon={item.icon}
                                                   className={' p-4 bg-white rounded-full text-teal-700 text-2xl'} />
                                  <h1 className={'text-lg text-slate-700 font-semibold -tracking-wider'}>{item.title}</h1>
                                  <p className={'text-slate-900/80'}>{item.description}</p>
                              </FadeIn>
                          )
                      })}
                  </FadeInStagger>
              </Container>


          </div>
      </div>
  );
};

export default FeaturesPrimary;
