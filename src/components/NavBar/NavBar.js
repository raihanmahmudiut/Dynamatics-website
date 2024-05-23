"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CaretDown from "../../../public/Icons/CaretDown.svg";
import Logo from "../../../public/Icons/Logo.svg";
import Hamburger from "../../../public/Icons/hamburger-menu.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import ResourceModal from "../ResourceModal/ResourceModal";
import SigninModal from "../SigninModal/SigninModal";

const NavBar = () => {
	let [isOpen, setIsOpen] = useState(false);
	const pathName = usePathname();

	const [resourceModal, setResourceModal] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	useEffect(() => {
		// Function to close dropdowns when clicked outside
		const handleClickOutside = (event) => {
			if (!resourceModal && !event.target.closest(".resource-modal")) {
				setResourceModal(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};
	const isActive = (pathname) => {
		return pathName.includes(pathname);
	};
	return (
		<div className="w-full maxWidth mx-auto z-50 pt-2 xl:px-0 px-4 rounded-2xl  ">
			<div className="bg-white flex flex-row h-[60px] justify-between items-center shadow-md rounded-2xl px-[10px] py-[6px]">
				<div className="flex flex-row gap-4">
					<Image
						src={Hamburger}
						alt="menu"
						className="lg:hidden cursor-pointer"
						onClick={toggleMobileMenu}
					/>
					<Link href="/">
						<Image src={Logo} alt="logo" />
					</Link>
				</div>
				<div className="relative z-50">
					<MobileMenu
						mobileMenuOpen={mobileMenuOpen}
						setMobileMenuOpen={setMobileMenuOpen}
						openModal={openModal}
					/>
				</div>
				<div
					className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25 z-20 overflow-hidden  ${
						mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				></div>
				<div className="hidden lg:block">
					<ul className="flex flex-row gap-0 font-semibold text-[14px]">
						<li
							className={
								isActive("/how_it_works")
									? "bg-[#F8F8F8] border-2 border-[#EBEBEB] rounded-[100px] px-4 py-2"
									: "px-4 py-2 border-2 border-transparent"
							}
						>
							<Link href="/how_it_works">How It Works</Link>
						</li>
						<li
							className={
								isActive("/features")
									? "bg-[#F8F8F8] border-2 border-[#EBEBEB] rounded-[100px] px-4 py-2"
									: "px-4 py-2 border-2 border-transparent"
							}
						>
							<Link href="/features">Features</Link>
						</li>
						<li
							className={
								isActive("/widgets")
									? "bg-[#F8F8F8] border-2 border-[#EBEBEB] rounded-[100px] px-4 py-2"
									: "px-4 py-2 border-2 border-transparent"
							}
						>
							<Link href="/widgets">Widgets</Link>
						</li>
						<li
							className={
								isActive("/resources")
									? "bg-[#F8F8F8] border-2 border-[#EBEBEB] rounded-[100px] px-4 py-2"
									: "px-4 py-2 border-2 border-transparent"
							}
						>
							<div className="relative">
								<div
									className="flex flex-row items-end  gap-2 resource-modal cursor-pointer"
									onClick={() => setResourceModal(!resourceModal)}
								>
									Resources
									<Image
										src={CaretDown}
										alt="logo"
										className="resource-modal w-[20px]"
									/>
								</div>

								{resourceModal && (
									<div className="absolute z-60 top-12 -right-64 hidden lg:block">
										<ResourceModal setResourceModal={setResourceModal} />
									</div>
								)}
							</div>
						</li>
						<li
							className={
								isActive("/pricing")
									? "bg-[#F8F8F8] border-2 border-[#EBEBEB] rounded-[100px] px-4 py-2"
									: "px-4 py-2 border-2 border-transparent"
							}
						>
							<Link href="/pricing">Pricing</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-row gap-4">
					<button
						onClick={openModal}
						className="bg-[#ECF8FF] hidden md:block border-brandBlue border-[1px] w-24 h-10 rounded-lg text-[15px] font-medium"
					>
						Sign In
					</button>

					<a
						href="https://apps.shopify.com/navidium-cart-and-upsells"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-brandBlue flex items-center justify-center rounded-lg w-28 h-10 text-white text-[15px] font-medium"
					>
						Install
					</a>
				</div>
			</div>
			<SigninModal modalOpen={isOpen} setModalOpen={setIsOpen} />
		</div>
	);
};

export default NavBar;
