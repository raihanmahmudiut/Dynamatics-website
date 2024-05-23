import Image from "next/image";
import CountUp from "react-countup";
import salesIcon from "../../../public/Icons/sales-cart-icon.svg";
import upArrow from "../../../public/Images/Up-arrow.svg";

const Sales = () => {
	return (
		<div className="w-full p-4 pr-10 bg-white rounded-3xl flex flex-row gap-6 items-center justify-center">
			<div className="bg-[#F8F8F8] w-fit p-2 rounded-lg">
				<Image src={salesIcon} alt="sales-icon" className="w-10 h-10" />
			</div>
			<div className="flex flex-col gap-2 w-full">
				<p className="font-semibold">Sales</p>
				<div className="flex flex-row items-center justify-center gap-10">
					<h4 className="font-bold w-[80px]">
						$<CountUp end={25321} duration={2} />
					</h4>
					<div className="flex flex-row gap-2 items-center bg-[#E7FFEB] rounded-xl px-2 py-1">
						<Image src={upArrow} className="w-6 " alt="up arrow" />
						<p className="text-[#00C767] font-semibold text-[16px] w-[70px]">
							<CountUp end={30.2} decimals={2} duration={2} />%
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sales;
