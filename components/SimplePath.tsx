import {Container} from "@/components/temp/Container";
import {simpleSteps, whyItsWorthList} from "@/libs/content";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FadeIn, FadeInStagger} from "@/components/temp/FadeIn";

const SimplePath = () => {
  return (
      <div className={'py-24 border-y border-dashed mb-24'}>
          <Container>
              <h1 className={'text-4xl mb-12 font-black text-slate-700 -tracking-wider'}>It&apos;s that simple!</h1>
              <div className="grid grid-cols-3 gap-12">

                  {simpleSteps.map((item) => {
                      return (
                          <div key={item.title} className={'space-y-6 pr-6'}>
                              <FontAwesomeIcon icon={item.icon}
                                               className={'p-6 bg-teal-50 -translate-x-6 rounded-2xl text-teal-700 text-2xl'} />
                              <h3 className={'text-xl font-semibold text-slate-800'}>{item.title}</h3>
                              <p className={'text-slate-500'}>{item.description}</p>
                          </div>
                      )
                  })}

              </div>

          </Container>
      </div>
  );
};

export default SimplePath;
