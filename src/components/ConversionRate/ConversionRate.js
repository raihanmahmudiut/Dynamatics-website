import Image from "next/image";
import CountUp from "react-countup";
import conversionrateIcon from "../../../public/Icons/conversionrate-icon.svg";
import upArrow from "../../../public/Images/Up-arrow.svg";

const ConversionRate = () => {
	return (
		<div className="w-full p-4 pr-10 bg-white rounded-3xl flex flex-row gap-6 items-center justify-center">
			<div className="bg-[#F8F8F8] w-fit p-2 rounded-lg">
				<Image
					src={conversionrateIcon}
					alt="ConversionRate-icon"
					className="w-10 h-10"
				/>
			</div>
			<div className="flex flex-col gap-1 w-full">
				<p className="font-semibold">Conversion rate</p>
				<div className="flex flex-row items-center justify-center gap-10">
					<h4 className="font-semibold w-[80px]">
						<CountUp end={60.7} decimals={1} duration={2} />%
					</h4>
					<div className="flex flex-row gap-2 items-center bg-[#E7FFEB] rounded-xl px-2 py-1">
						<Image src={upArrow} className="w-6 " alt="up arrow" />
						<p className="text-[#00C767] font-semibold text-[16px] w-[70px]">
							<CountUp end={55.2} decimals={2} duration={2} />%
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConversionRate;
