import Image from "next/image";
import Link from "next/link";
import arrowblue from "../../../public/Icons/arrowblue.svg";
const FeaturedCard = ({ item, page }) => {
	const { subHeading, heading, description, listItem } = item;

	const showButton =
		subHeading === "Growth" ||
		subHeading === "Upsell" ||
		subHeading === "Support";
	return (
		<div className="md:py-[60px] pl-[0px] flex flex-col gap-5">
			<p className="uppercase  text-[#3A7DFF] inline-block font-medium rounded-full">
				{subHeading && subHeading}
			</p>
			<h2 className="font-semibold xl:text-[44px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[22px] md:my-[16px] my-[12px] leading-tight">
				{heading}
			</h2>
			<p className="text-[#374144] md:mb-[16px] mb-[10px]">{description}</p>
			<ul
				className={`flex ${
					page === "feature" ? "flex-col" : "flex-wrap"
				}   gap-x-5`}
			>
				{listItem?.map((item, index) => (
					<div
						key={index}
						className="md:text-[15px] text-[13px] list-inside md:mb-[16px] mb-[8px] flex items-center gap-2"
					>
						<Image src={item.icon} alt="feature icon" />
						<li>{item.title}</li>
					</div>
				))}
			</ul>
			{showButton && (
				<Link
					href="/widgets"
					type="button"
					className="flex flex-row rounded-xl bg-[#ECF8FF] text-brandBlue p-[14px] items-center gap-2 w-fit"
				>
					<div className="text-start">
						<p className="text-[12px] md:text-[14px] lg:text-[15px] font-medium">
							Explore widgets
						</p>
					</div>
					<Image src={arrowblue} alt="" className="w-4 h-4" />
				</Link>
			)}
		</div>
	);
};

export default FeaturedCard;
