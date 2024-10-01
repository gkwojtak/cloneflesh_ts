import Hero from "@/components/Hero";
import FeaturesPrimary from "@/components/FeaturesPrimary";
import OurMotto from "@/components/OurMotto";
import {Container} from "@/components/temp/Container";
import {simpleSteps} from "@/libs/content";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SimplePath from "@/components/SimplePath";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (

      <>
          <Hero />

<SimplePath />

          <FeaturesPrimary />
          <OurMotto />
          <FAQ/>
      </>

  );
}
