"use client";

import {useRef, useState} from "react";
import {Container} from "@/components/temp/Container";
import {faqItems} from "@/libs/content";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/pro-solid-svg-icons";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-4  font-semibold text-left  border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span className={'text-sm'}>
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
      <div className={'bg-teal-100 mx-auto max-w-[1560px] to-white rounded-[40px] py-24 font-poppins'}>
          <Container>
              <div className={'grid lg:grid-cols-2 '}>
                  <div className={'space-y-12 max-w-4xl mx-auto pb-24'}>
                      <h1 className={'text-4xl font-bold text-slate-700 -tracking-wider'}>Your questions answered.</h1>
                      <div className={'space-y-6 md:pr-32'}>
                          <p className={'text-slate-600 '}>We know that entering into a new partnership comes with questions. That’s why we’ve compiled
                              the most common inquiries to help you understand how our process works and how we ensure a
                              seamless experience for you. From how we craft and personalize each product to how we handle
                              logistics, we’re here to make sure you feel confident and supported every step of the way.</p>
                          <p className={'text-slate-600 '}> If
                              you have any other questions, feel free to reach out to us—we’re here to help you succeed</p>

                          <Link href={'/contact'}
                                className={'py-4 px-8 bg-slate-800 hover:bg-slate-900 rounded-full inline-flex items-center gap-x-4 text-sm font-bold text-white'}>
                              <FontAwesomeIcon icon={faHeart} className={'text-red-500 text-2xl'} />
                              Contact Us
                          </Link>
                      </div>
                  </div>


                  <div className="lg:p-8 bg-white rounded-3xl max-w-7xl mx-auto ">
                      <ul className="mx-auto bg-white/5 divide-y divide-dashed divide-slate-300 p-6 md:p-8 rounded-2xl basis-1/2 max-w-3xl">
                          {faqItems.map((item, i) => (
                              <FaqItem key={i} item={item} />
                          ))}
                      </ul>
                  </div>
              </div>
          </Container>
      </div>
  );
};

export default FAQ;
