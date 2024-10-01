import FAQ from "@/components/FAQ";
import ProductImageGrid from "@/components/ProductImageGrid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {productDetails} from "@/libs/content";
import {Container} from "@/components/temp/Container";
import {FadeIn, FadeInStagger} from "@/components/temp/FadeIn";
import Motto from "@/components/Motto";
import {faArrowProgress, faHeart} from "@fortawesome/pro-solid-svg-icons";
import {faArrowRight} from "@fortawesome/pro-light-svg-icons";


export default function Page() {
    return (
        <>
            <ProductImageGrid />
            <div className={'pt-24 max-w-xl text-center mx-auto'}>
                <div className={'space-y-12 '}>
                    <h1 className={'text-4xl font-bold text-slate-700  -tracking-wider'}><span
                        className={'text-teal-500'}>Flesh</span> relfecting Yourself!</h1>
                    <div className={'space-y-6 text-xl leading-8'}>
                        <p className={'text-slate-600'}>Handcrafted for each influencer separately, high-end adult
                            product Flesh gives them a really unique and personal bond. More specifically, designed for
                            the creators on paywall platforms, the flesh is the direct reflection of an influencer
                            form—an intimate and exclusive thing for their fans.</p>
                        <p className={'text-slate-600'}>
                            Available in a range of colors with matte and glossy finishes, Flesh meets individualized
                            preferences. The product is lightweight because the feasibility of use is made from quality
                            synthetic material. It is designed for easy cleaning/maintenance by being taken apart,
                            ensuring longevity in use. This targets only the adult users; this is a new way for
                            influencers to interact with their fans.
                        </p>
                    </div>
                    <div className={'flex gap-4 justify-center flex-wrap'}>
                        <button
                            className={'py-4 px-8 bg-slate-800 hover:bg-slate-900 rounded-full flex items-center gap-x-4 text-sm font-bold text-white'}>
                            <FontAwesomeIcon icon={faHeart} className={'text-red-500 text-2xl'} />
                            Create
                            one for me
                        </button>
                        <button
                            className={'py-4 px-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center gap-x-4 text-sm font-bold text-slate-800'}>
                            Check the process
                            <FontAwesomeIcon icon={faArrowProgress} className={'text-teal-500 text-xl'} />
                        </button>
                    </div>
                </div>
            </div>

            <div className={'py-24 mt-24 bg-gradient-to-b from-slate-100  to-white rounded-[40px]'}>
                <FadeIn>
                <div className="mx-auto  text-left border-y border-slate-200">

                        <Container>
                            <div className="mx-auto max-w-6xl text-left grid grid-cols-1 sm:grid-cols-2">
                                {productDetails.map((item, index) => (
                                    <div

                                        className={`p-12 space-y-6 items-center border border-slate-200 hover:bg-slate-200/40
                                ${index % 2 !== 1 ? 'sm:border-r-0' : ''}
                                ${index < 2 ? 'sm:border-t-0' : ''}
                                ${index === 0 ? 'border-t-0' : ''}
                                ${index !== productDetails.length - 1 ? 'border-b-0' : ''}
                                ${index >= 2 ? 'mt-[-1px]' : ''} last:border-b-0`}
                                        key={item.title}
                                    >
                                        <FontAwesomeIcon icon={item.icon}
                                                         className="p-4 bg-white rounded-full text-teal-700 text-2xl" />
                                        <h1 className="text-lg text-slate-700 font-semibold -tracking-wider">{item.title}</h1>
                                        <p className="text-slate-900/80">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </Container>

                    </div>
                </FadeIn>
            </div>
                        <Motto
            >

                Feel a deeper connection with your audience, where intimacy meets innovation and every little detail is
                hand-crafted to reflect your real essence. More than just products, they're a bridge between you and
                those who admire you, designed to bring your unique presence into their world like never before.</Motto>
            <FAQ />
        </>
    );
}
