import Image from "next/image";
import Link from "next/link";
import resourceModalImage from "../../../public/Images/resource-modal-image.png";
const ResourceModal = ({ mobileMenuOpen, setResourceModal }) => {
	return (
		<div
			className={`flex justify-center resource-modal shadow-sm items-center ${
				mobileMenuOpen ? "w-full" : "w-[755px]"
			} h-fit rounded-lg`}
		>
			<div
				className={`bg-white rounded-lg  h-fit flex ${
					mobileMenuOpen ? "flex-col" : "flex-row"
				} items-center justify-center`}
			>
				<div className="flex flex-col w-full lg:w-1/2 ">
					<div className="mb-4   px-6  flex flex-col gap-2">
						<Link
							href="/resources"
							onClick={() => setResourceModal(false)}
							className="hover:bg-[#F8F8F8] px-3 py-[10px] rounded-lg flex flex-col gap-2"
						>
							{" "}
							<h4 className="font-semibold">Blog</h4>
							<p className=" font-normal text-[14px] text-[#374144]">
								Unlock the Power of Personalization to Boost Conversions and
								Delight Customers.
							</p>{" "}
						</Link>
					</div>
					<div className="mb-4   px-6  flex flex-col gap-2">
						<Link
							href="/contact_us"
							onClick={() => setResourceModal(false)}
							className="hover:bg-[#F8F8F8] px-3 py-[10px] rounded-lg flex flex-col gap-2"
						>
							<h4 className="font-semibold">Support</h4>

							<p className=" font-normal text-[14px] text-[#374144]">
								Unlock the Power of Personalization to Boost Conversions and
								Delight Customers.
							</p>
						</Link>
					</div>
					<div className="mb-4   px-6  flex flex-col gap-2">
						<Link
							href="/help_center"
							onClick={() => setResourceModal(false)}
							className="hover:bg-[#F8F8F8] px-3 py-[10px] rounded-lg flex flex-col gap-2"
						>
							<h4 className="font-semibold">Help Center</h4>
							<p className=" font-normal text-[14px] text-[#374144]">
								Unlock the Power of Personalization to Boost Conversions and
								Delight Customers.
							</p>{" "}
						</Link>
					</div>
				</div>
				<div className="flex flex-col w-4/5 lg:w-1/2  bg-[#D0EEFF] rounded-lg lg:rounded-r-lg ">
					<div className="p-2 lg:p-5 flex flex-col gap-2">
						<p className="bg-[#ECF8FF] rounded-lg w-fit px-2 py-1">Article</p>
						<Image src={resourceModalImage} alt="Article" className="mb-4" />
						<h6 className="text-[15px] font-semibold mb-4">
							Dynamatic is not just an app; it&apos;s a toolkit for e-commerce
							success.
						</h6>
						<h6 className="mb-4 text=[14px] font-normal">
							Stay tuned for more spotlights as we continue to explore how each
							feature.{" "}
							<span>
								<a
									href="/resources/blog"
									className="text-blue-500"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p>Read More...</p>
								</a>
							</span>
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourceModal;
