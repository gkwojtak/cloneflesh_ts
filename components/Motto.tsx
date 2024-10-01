import clsx from "clsx";
import {Logo} from "@/components/Logo";
import {Container} from "@/components/temp/Container";
import {FadeIn} from "@/components/temp/FadeIn";
import {ReactNode} from "react";

export default function Motto({ children }: { children: ReactNode }) {
  return (

      <div
          className={clsx(
              'relative isolate bg-white py-16 sm:py-24',
          )}
      >

          <Container>
              <FadeIn>
                  <figure className="mx-auto max-w-4xl">
                      <blockquote
                          className="relative font-display text-2xl font tracking-tight text-slate-800 sm:text-2xl">
                          <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                              {children}
                          </p>
                      </blockquote>
                      <figcaption className="mt-10 space-y-8">
                          <div className={'w-12 h-[2px] bg-slate-200'} />
                          <Logo className={'text-2xl'} />
                      </figcaption>
                  </figure>
              </FadeIn>
          </Container>
      </div>

  );
}
