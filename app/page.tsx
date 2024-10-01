import Hero from "@/components/Hero";
import FeaturesPrimary from "@/components/FeaturesPrimary";
import Motto from "@/components/Motto";
import SimplePath from "@/components/SimplePath";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (

      <>
          <Hero />

<SimplePath />

          <FeaturesPrimary />
          <Motto>
              We believe in creating more than just products—we craft experiences that bring you closer to the influencers you admire. Each item is a carefully curated piece of their world, designed to deepen your connection and make every interaction more meaningful. Let us help you hold onto those moments and cherish the bonds that matter most.
          </Motto>
          <FAQ/>
      </>

  );
}
