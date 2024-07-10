import FeaturedCard from "@/components/card/featured/FeaturedCard";
import ExpandableCard from "@/components/expandables/ExpandableCard";
import Heading from "@/components/heading/Heading";
import { featuredData } from "@/data";

const MainFeatured = featuredData[0];

function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/**Heading */}
      <Heading number="01" title1="Project" title2="Demo" />
      {/**Main feature card */}
      <FeaturedCard
        active
        title={MainFeatured.title}
        tag={MainFeatured.tag}
        video={MainFeatured.video}
    />
    <div className="mt-24">
        <ExpandableCard/>
    </div>
    </div>
  );
}

export default FeaturedSection;
