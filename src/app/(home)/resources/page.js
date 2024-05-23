import CTA from "@/components/CTA/CTA";
import HeroSection from "@/components/HeroSection/HeroSection";
import ResourceTab from "@/components/ResourceTab/ResourceTab";

const page = () => {
	return (
		<div>
			<section className="heroSectionBg pb-[100px] pt-[130px]">
				<div className="container mx-auto px-5 sm:px-0 maxWidth">
					<HeroSection
						title={"Blog"}
						description={
							"Engage with Ideas and Inspiration - Your Source for Compelling Stories and Insights; Our Blog"
						}
						page={"blog"}
					/>
				</div>
			</section>
			<section>
				<div className="container mx-auto my-14">
					<div className="max-w-2xl mx-auto mb-4 text-center px-4 lg:px-0">
						<p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#3A7DFF] font-medium uppercase">
							Categories
						</p>
					</div>
					<ResourceTab />
				</div>
			</section>
			<section>
				<div className="container mx-auto my-14 px-4 lg:px-0 maxWidth">
					<CTA />
				</div>
			</section>
		</div>
	);
};

export default page;
