import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import CloseIcon from "../../../public/Icons/Closed.png";
import shopifystoreaction from "../../../public/Images/shopifystoreaction.png";
import ResourceModal from "../ResourceModal/ResourceModal";

function MobileMenu({ setMobileMenuOpen, mobileMenuOpen, openModal }) {
	useEffect(() => {
		const handleEscape = (event) => {
			if (event.keyCode === 27 && mobileMenuOpen) {
				setMobileMenuOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [mobileMenuOpen, setMobileMenuOpen]);

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<div
			className={`lg:hidden fixed top-0 left-0 w-4/5 h-screen bg-white z-50 text-black mobile-menu transition-transform transform ${
				mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
			}`}
			style={{
				transitionProperty: "transform",
				transitionDuration: "0.3s",
				transitionTimingFunction: "ease-in-out",
			}}
		>
			<div className="p-3 flex flex-col justify-between h-full overflow-y-auto">
				<div className="flex flex-col h-full">
					<div className="flex flex-row justify-between px-3 w-full items-center relative z-20">
						<button
							className="text-black text-lg flex flex-row items-center"
							onClick={closeMobileMenu}
						>
							<Image src={CloseIcon} alt="close-menu" width={30} height={30} />
						</button>
						<button
							className="bg-[#ECF8FF] border-brandBlue border-[1px] w-24 h-10 rounded-lg text-[15px] font-medium"
							onClick={() => {
								if (openModal) {
									openModal();
									closeMobileMenu();
								}
							}}
						>
							Sign In
						</button>
					</div>
					<div className="flex flex-col  mt-4 overflow-y-auto">
						<Link href="/how_it_works" onClick={closeMobileMenu}>
							<div className="p-3 rounded-full hover:bg-[#EBEBEB] font-medium text-lg relative z-20">
								How It Works
							</div>
						</Link>
						<Link href="/features" onClick={closeMobileMenu}>
							<div className="p-3 rounded-full hover:bg-[#EBEBEB] font-medium text-lg relative z-20">
								Features
							</div>
						</Link>
						<Link href="/widgets" onClick={closeMobileMenu}>
							<div className="p-3 rounded-full hover:bg-[#EBEBEB] font-medium text-lg relative z-20">
								Widgets
							</div>
						</Link>
						<details className="group " close>
							<summary className="flex cursor-pointer list-none items-center justify-start gap-4  text-lg font-medium  hover:bg-[#EBEBEB] p-3 rounded-full text-black">
								Resources
								<div className="text-secondary-500">
									<svg
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="block h-5 w-5 transition-all duration-300 group-open:rotate-90"
									>
										<path
											d="M1 1L6 6L1 11"
											stroke="black"
											strokeWidth="1.7"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</summary>
							<div
								className={`py-4 text-black ${
									mobileMenuOpen ? "block" : "hidden"
								}`}
							>
								<ResourceModal mobileMenuOpen={mobileMenuOpen} />
							</div>
						</details>
						<Link href="/pricing" onClick={closeMobileMenu}>
							<div className="p-3 rounded-full hover:bg-[#EBEBEB] font-medium text-lg relative z-20">
								Pricing
							</div>
						</Link>
						<Link href="https://apps.shopify.com/navidium-cart-and-upsells">
							<Image src={shopifystoreaction} alt="shopify" />
						</Link>
					</div>
				</div>
				<div className="flex flex-col self-baseline">
					<p className="text-[17px] leading-5 px-3 mt-2">
						© 2024 dynamatics. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}

export default MobileMenu;
