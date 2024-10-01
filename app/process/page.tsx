import FAQ from "@/components/FAQ";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container} from "@/components/temp/Container";
import {faHeart} from "@fortawesome/pro-solid-svg-icons";
import {
    faArrowRight,
    faBoxCircleCheck,
    faChartLine,
    faEyeSlash,
    faHeadSideHeart,
    faMoneyBill1Wave,
    faShoppingBag
} from "@fortawesome/pro-light-svg-icons";

import Bento_1 from "@/images/bento_1.webp";
import Bento_2 from "@/images/flesh-top-group-colors.webp";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Container>
                <h1 className={'text-4xl font-bold text-slate-700 text-center -tracking-wider pt-12'}>How it works?</h1>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div
                            className="relative flex h-full bg-teal-50 flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-semibold tracking-tight text-gray-950 max-lg:text-center">
                                    Custom Design Process
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Each model is uniquely crafted based on photographs taken by you, following our detailed guidelines. We work closely with you to ensure the lighting and angles are just right, and we discuss every detail personally to make sure the final product reflects you perfectly.
                                </p>
                            </div>
                            <div
                                className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <Image
                                    className="size-full object-cover object-top"
                                    src={Bento_1}
                                    alt=""
                                />
                            </div>
                        </div>

                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div
                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Affiliate Links and Direct Sales
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    We provide you with custom affiliate links, allowing your fans to purchase directly from your promotion. Additionally, your product can be featured in our store, reaching a wider audience. All sales are tracked and reported monthly, with earnings paid out based on the results.
                                </p>
                            </div>
                            <div
                                className="flex justify-between flex-1 items-center  px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <FontAwesomeIcon className={'text-2xl p-2 bg-teal-100 rounded'} icon={faShoppingBag} />
                                <FontAwesomeIcon className={'p-2 rounded'} icon={faArrowRight} />
                                <FontAwesomeIcon className={'text-2xl p-2 bg-teal-100 rounded'} icon={faChartLine} />
                                <FontAwesomeIcon className={'p-2  rounded'} icon={faArrowRight} />
                                <FontAwesomeIcon className={'text-2xl p-2 bg-teal-100 rounded'} icon={faMoneyBill1Wave}/>
                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div
                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Personalized
                                    Marking & Discreet Packaging</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Every product is individually marked for authenticity and carefully packaged in a
                                    discreet box, ensuring privacy and professionalism. We make sure that your fans
                                    receive a high-quality product without compromising on confidentiality.
                                </p>
                            </div>
                            <div
                                className="flex  flex-1 items-center gap-4 px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">

                                <FontAwesomeIcon className={'text-3xl p-6 bg-slate-100 rounded'} icon={faHeadSideHeart} />
                                <FontAwesomeIcon className={'text-3xl p-6 bg-slate-100 rounded'} icon={faEyeSlash} />
                                <FontAwesomeIcon className={'text-3xl p-6 bg-slate-100 rounded'} icon={faBoxCircleCheck} />

                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div
                            className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div
                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Full Service, No Effort
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    From managing orders to handling all customer interactions, we take care of the
                                    entire process for you. There’s no need to worry about logistics or client
                                    communication—our team has it covered, allowing you to focus on what you do best.
                                </p>
                            </div>
                            <div
                                className="pt-12 relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <Image
                                    className="size-full object-cover object-top"
                                    src={Bento_2}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>


            </Container>

            <div className={'pt-24 mb-24 px-6 max-w-xl text-center mx-auto'}>
                <div className={'space-y-12 '}>

                    <div className={'space-y-6 text-xl leading-8'}>
                        <p className={'text-slate-600'}>We begin by establishing contact to discuss the collaboration and understand your preferences. Together, we gather the necessary materials—primarily photographs—based on our detailed guidelines to create an accurate representation of you. Once everything is prepared, we move on to designing and producing your personalized model, making it ready for sale.</p>
                        <p className={'text-slate-600'}>When the model is complete, you can easily acquire customers by sharing a direct payment link with your audience, or alternatively, we can feature your product in our store to reach a broader audience. From there, we manage the entire order process on your behalf. This includes packaging and shipping every product in discreet, unmarked boxes to protect your customers privacy and ensure a professional experience.</p>
                        <p className={'text-slate-600'}>We provide you with monthly sales reports and process your earnings based on those figures. Your payout terms are individually discussed to suit your preferences. The best part? You don’t have to do any additional work after sharing your link—we handle everything from order fulfillment to customer service.</p>
                        <p className={'text-slate-600'}>We’re always open to feedback and suggestions, and we plan to offer a dashboard in the future where you can track sales and monitor progress in real-time. The entire process is designed to be quick and hassle-free, requiring minimal involvement on your part while delivering maximum results.</p>
                        <p className={'text-slate-600'}>Please note CloneFlesh offer is exclusively for adult content creators.

                        </p>
                    </div>
                    <div className={'flex gap-4 justify-center flex-wrap'}>

                        <Link href={'/contact'}
                              className={'py-4 px-8 bg-slate-800 hover:bg-slate-900 rounded-full flex items-center gap-x-4 text-sm font-bold text-white'}>
                            <FontAwesomeIcon icon={faHeart} className={'text-red-500 text-2xl'} />
                            Create
                            one for me
                        </Link>
                    </div>
                </div>
            </div>

            <FAQ />
        </>
    );
}
