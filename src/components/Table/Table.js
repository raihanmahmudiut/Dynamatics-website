import Image from "next/image";
import check from "../../../public/Icons/checkblue.svg";
import dash from "../../../public/Icons/dash.svg";

const Table = () => {
	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto lg:overflow-x-hidden sm:mx-0.5 lg:mx-0.5">
				<div className="py-2 inline-block min-w-full ">
					<div className="rounded-lg max-h-[490px] pr-6 ">
						<table className="mx-auto w-[1200px] border-collapse border border-slate-200 ">
							<thead className="bg-[#ECF8FF] border-b sticky top-0 ">
								<tr>
									<th
										scope="col"
										className="space-y-2 text-sm font-medium text-gray-900 pl-6 py-4 text-left border lg:w-[400px] border-slate-100"
									>
										<h5>Features</h5>
										<p className="text-[12px] md:text-[14px]">
											All charges are billed in USD. Recurring and usage-based
											charges are billed every 30 days.
										</p>
									</th>
									<th
										scope="col"
										className="space-y-2 text-sm font-medium text-gray-900 py-4 text-center border border-slate-100"
									>
										<h5>Starter</h5>
										<p className="text-[12px] md:text-[14px]">Free</p>
										<button className="bg-[#3A7DFF] px-2 py-2 text-white rounded-lg text-[12px] md:text-[14px] ">
											Choose Plan
										</button>
									</th>
									<th
										scope="col"
										className="space-y-2 text-sm font-medium text-gray-900 py-4 text-center border border-slate-100"
									>
										<h5>Basic</h5>
										<p className="text-[12px] md:text-[14px]">$29/mo</p>
										<button className="bg-[#3A7DFF] px-2 py-2 text-white rounded-lg text-[12px] md:text-[14px] ">
											Choose Plan
										</button>
									</th>
									<th
										scope="col"
										className="space-y-2 text-sm font-medium text-gray-900 py-4 text-center border border-slate-100"
									>
										<h5>Growth</h5>
										<p className="text-[12px] md:text-[14px]">$49/mo</p>
										<button className="bg-[#3A7DFF] px-2 py-2 text-white rounded-lg text-[12px] md:text-[14px] ">
											Choose Plan
										</button>
									</th>
									<th
										scope="col"
										className="space-y-2 text-sm font-medium text-gray-900 py-4 text-center border border-slate-100"
									>
										<h5>Scale</h5>
										<p className="text-[12px] md:text-[14px]">$99/mo</p>
										<button className="bg-[#3A7DFF] px-2 py-2 text-white rounded-lg text-[12px] md:text-[14px] ">
											Choose Plan
										</button>
									</th>
									<th
										scope="col"
										className="space-y-2 text-sm font-medium text-gray-900 py-4 text-center border border-slate-100"
									>
										<h5>Advanced</h5>
										<p className="text-[12px] md:text-[14px]">$199/mo</p>
										<button className="bg-[#3A7DFF] px-2 py-2 text-white rounded-lg text-[12px] md:text-[14px] ">
											Choose Plan
										</button>
									</th>
									<th
										scope="col"
										className="space-y-2 text-sm font-medium text-gray-900 py-4 text-center border border-slate-100"
									>
										<h5>Enterprice</h5>
										<p className="text-[12px] md:text-[14px]">$399/mo</p>
										<button className="bg-[#3A7DFF] px-2 py-2 text-white rounded-lg text-[12px] md:text-[14px] ">
											Choose Plan
										</button>
									</th>
								</tr>
							</thead>
							<tbody className="h-[530px] overflow-y-scroll">
								<tr className="bg-white border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										Total Orders a Month
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										Up to 50 orders
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										Up to 500 orders
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										Up to 1000 orders
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										Up to 2000 orders
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										Up to 5000 orders
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										Unlimited
									</td>
								</tr>

								<tr className="bg-[#ECF8FF] border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										14-Day Free Trial
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
								<tr className="bg-white border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										All Features Included
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
								<tr className="bg-[#ECF8FF] border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										Up to 50 Total Orders a Month
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
								<tr className="bg-white border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										30-Day Money Back Guarantee
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
								<tr className="bg-white border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										Free Expert Installation
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
								<tr className="bg-[#ECF8FF] border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										Live chat support
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
								<tr className="bg-white border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										Includes Checkout Bumps & Dynamic Content
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
								<tr className="bg-[#ECF8FF] border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										Features
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
								<tr className="bg-white border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										Features
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={dash} alt="" />
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<Image className="mx-auto" src={check} alt="" />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;
