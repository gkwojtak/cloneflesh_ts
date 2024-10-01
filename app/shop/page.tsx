import FAQ from "@/components/FAQ";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/pro-solid-svg-icons";
import Link from "next/link";


export default function Page() {
    return (
        <>

            <div className={'pt-24 px-6 max-w-xl text-center mx-auto mb-24'}>
                <div className={'space-y-12 '}>
                    <h1 className={'text-4xl font-bold text-slate-700  -tracking-wider'}>We&apos;re <span
                        className={'text-teal-500'}>Launching</span> Soon</h1>
                    <div className={'space-y-6 text-xl leading-8'}>
                        <p className={'text-slate-600'}>We&apos;re excited to announce that our shop will be opening soon, offering you the chance to purchase exclusive, personalized products directly from us. While the official launch is just around the corner, we understand that you may have questions or want to explore your options now. That&apos;s why we&apos;re here to help!</p>
                        <p className={'text-slate-600'}>
                            Feel free to reach out to us directly for detailed information about our products, pricing, and how the process works. Whether you&apos;re curious about customization options or simply want to be among the first to know when we go live, we’re happy to assist you.
                        </p>
                        <p className={'text-slate-600'}>
                            By contacting us now, you&apos;ll get a head start on understanding everything we offer before the official launch. Stay tuned—exciting new products are coming your way, and we can&apos;t wait to share them with you!
                        </p>
                    </div>
                    <div className={'flex gap-4 justify-center flex-wrap'}>
                        <Link href={'/contact'}
                              className={'py-4 px-8 bg-slate-800 hover:bg-slate-900 rounded-full flex items-center gap-x-4 text-sm font-bold text-white'}>
                            <FontAwesomeIcon icon={faHeart} className={'text-red-500 text-2xl'} />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            <FAQ />
        </>
    );
}
