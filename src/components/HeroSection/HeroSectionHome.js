"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import stars from "../../../public/Icons/hero-home-stars.svg";
import shopifylogo from "../../../public/Icons/shopifylogo.svg";
import homevideothumbnail from "../../../public/Images/home-video-thumbnail.webp";
// import homewhiteplaceholder from "../../../public/Images/home-video-white-placeholder.webp";
import playbutton from "../../../public/Images/play-button.svg";
import videobg from "../../../public/Images/video-bg.webp";
import OurCustomersSlider from "../OurCustomersSlider/OurCustomersSlider";
import styles from "./HeroSectionHome.module.css";

const HeroSectionHome = () => {
	const [isFullVisible, setIsFullVisible] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef(null);

	const togglePlay = () => {
		if (videoRef.current.paused) {
			videoRef.current.play();
			setIsPlaying(true);
		} else {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};
	const handlePLayClick = () => {
		setIsFullVisible(!isFullVisible);
		setIsPlaying(true);
	};

	useEffect(() => {
		if (isFullVisible) {
			videoRef.current.play();
			setIsPlaying(true);
		}
	}, [isFullVisible]);

	return (
		<div className="">
			<div
				className="w-full absolute top-0 heroSectionBg h-[800px] md:h-[1000px] lg:h-[1120px]
				z-0"
			></div>
			<div className={` w-full ${isFullVisible ? "" : "heroSectionBg"} z-0`}>
				<div className="z-10 relative max-w-[1000px] mx-auto flex flex-col justify-center items-center gap-14 xl:px-0 px-4">
					<div className="flex flex-col max-w-[944px] mx-auto  justify-center items-center gap-8">
						<h1 className="text-center font-semibold leading-[38px] md:leading-[50px] lg:leading-[76px]">
							Supercharge Your Sales with Personalized Upsells!
						</h1>
						<h5 className="text-center font-semibold leading-[20px] md:leading-[23px] lg:leading-[27px] md:w-[40%] w-full">
							&quot;Let&apos;s Unlock the Power of Personalization: Transform{" "}
							the Strategies for Client Delight&quot;
						</h5>
						<div className="flex flex-row gap-4 justify-center">
							<button className="bg-brandBlue rounded-xl w-36 h-12 text-white text-[15px] font-medium">
								<Link href="/contact_us">
									<h5 className="font-semibold">Get Started</h5>
								</Link>
							</button>
							<button className=" border-[#B1B1B1] border-[1px] w-44 h-12 rounded-xl text-[15px] font-medium">
								<Link href="sign-up">
									<h5 className="font-semibold">Sign up for free</h5>
								</Link>
							</button>
						</div>
						<div className="flex flex-row items-center justify-center gap-4">
							<Image className="w-[30%]" src={stars} alt="stars" />
							<h6>Based on 300+ reviews on</h6>
							<Image src={shopifylogo} alt="shopifylogo" />
						</div>
					</div>
					<div
						className={`relative bottom-0 left-1/2 transform -translate-x-1/2 border-t-4 border-r-4 border-l-4 ${
							isFullVisible
								? " border-b-4 rounded-2xl h-[708px]"
								: "border-b-1 rounded-t-2xl"
						}  border-[#3A7DFF] `}
					>
						<div
							className={`relative overflow-hidden ${
								isFullVisible
									? "h-[700px]"
									: " h-[478px] md:[585px] lg:h-[504px]"
							}  `}
						>
							<Image
								src={videobg}
								alt="videobg"
								className={`${
									isFullVisible ? "rounded-xl" : "rounded-t-xl"
								}  h-[700px]`}
							/>
							{isFullVisible && (
								<button
									className="absolute top-4 right-6 z-50"
									onClick={() => setIsFullVisible(false)}
								>
									<div className="relative">
										<div className="bg-[#F8F8F8] pl-3 pr-6 py-[6px] rounded-full">
											Skip video
										</div>
										<div className="absolute -top-3 -right-6">
											<svg
												width="62"
												height="62"
												viewBox="0 0 62 62"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g filter="url(#filter0_d_1345_8201)">
													<path
														d="M15 31C15 19.9543 23.9543 11 35 11C46.0457 11 55 19.9543 55 31C55 42.0457 46.0457 51 35 51C23.9543 51 15 42.0457 15 31Z"
														fill="white"
													/>
													<path
														d="M29.3431 25.3431L40.6568 36.6569"
														stroke="#374144"
														stroke-width="1.5"
														stroke-linecap="round"
													/>
													<path
														d="M40.6569 25.3431L29.3432 36.6569"
														stroke="#374144"
														stroke-width="1.5"
														stroke-linecap="round"
													/>
												</g>
												<defs>
													<filter
														id="filter0_d_1345_8201"
														x="0"
														y="0"
														width="62"
														height="62"
														filterUnits="userSpaceOnUse"
														color-interpolation-filters="sRGB"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feColorMatrix
															in="SourceAlpha"
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															result="hardAlpha"
														/>
														<feOffset dx="-4" />
														<feGaussianBlur stdDeviation="5.5" />
														<feComposite in2="hardAlpha" operator="out" />
														<feColorMatrix
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
														/>
														<feBlend
															mode="normal"
															in2="BackgroundImageFix"
															result="effect1_dropShadow_1345_8201"
														/>
														<feBlend
															mode="normal"
															in="SourceGraphic"
															in2="effect1_dropShadow_1345_8201"
															result="shape"
														/>
													</filter>
												</defs>
											</svg>
										</div>
									</div>
								</button>
							)}
							<div className="w-full h-fit flex  justify-center px-2">
								{isFullVisible ? (
									<div className="absolute top-12">
										<div className={`relative  rounded-[20px]`}>
											<video
												ref={videoRef}
												className={`rounded-[20px] border-[3.5px]  border-[#F580FF] ${styles.bgVid}`}
												src="/Video/home-page.mp4"
												height="611"
												width="344"
												poster="/Images/home-video-white-placeholder.webp"
											/>
											{isPlaying ? (
												<button
													className="absolute bottom-4 right-4 w-50 h-50 flex items-center justify-center "
													onClick={togglePlay}
												>
													<svg
														width="50"
														height="50"
														viewBox="0 0 50 50"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z"
															fill="#374144"
														/>
														<path
															d="M17 20C17 18.5858 17 17.8787 17.4393 17.4393C17.8787 17 18.5858 17 20 17C21.4142 17 22.1213 17 22.5607 17.4393C23 17.8787 23 18.5858 23 20V30C23 31.4142 23 32.1213 22.5607 32.5607C22.1213 33 21.4142 33 20 33C18.5858 33 17.8787 33 17.4393 32.5607C17 32.1213 17 31.4142 17 30V20Z"
															stroke="white"
															stroke-width="1.5"
														/>
														<path
															d="M27 20C27 18.5858 27 17.8787 27.4393 17.4393C27.8787 17 28.5858 17 30 17C31.4142 17 32.1213 17 32.5607 17.4393C33 17.8787 33 18.5858 33 20V30C33 31.4142 33 32.1213 32.5607 32.5607C32.1213 33 31.4142 33 30 33C28.5858 33 27.8787 33 27.4393 32.5607C27 32.1213 27 31.4142 27 30V20Z"
															stroke="white"
															stroke-width="1.5"
														/>
													</svg>
												</button>
											) : (
												<button
													className="absolute bottom-4 right-4 w-50 h-50 flex items-center justify-center"
													onClick={togglePlay}
												>
													<svg
														width="50"
														height="50"
														viewBox="0 0 50 50"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z"
															fill="#374144"
														/>
														<path
															fill-rule="evenodd"
															clip-rule="evenodd"
															d="M35.99 24.7773C35.9219 23.8388 35.4205 22.9278 34.4859 22.394L20.4878 14.3994C18.4878 13.2571 16 14.7013 16 17.0044V32.9937C16 35.2968 18.4878 36.741 20.4878 35.5988L34.4859 27.6041C35.4205 27.0703 35.9219 26.1593 35.99 25.2208C36.0226 25.0751 36.0226 24.9231 35.99 24.7773Z"
															fill="white"
														/>
														<path
															d="M31.8906 25.846C31.5371 27.189 29.8667 28.138 26.5257 30.0361C23.296 31.8709 21.6812 32.7884 20.3798 32.4196C19.8418 32.2671 19.3516 31.9776 18.9562 31.5787C18 30.6139 18 28.7426 18 25C18 21.2574 18 19.3861 18.9562 18.4213C19.3516 18.0225 19.8418 17.7329 20.3798 17.5804C21.6812 17.2117 23.296 18.1291 26.5257 19.9639C29.8667 21.862 31.5371 22.811 31.8906 24.154C32.0365 24.7084 32.0365 25.2916 31.8906 25.846Z"
															stroke="white"
															stroke-width="1.5"
															stroke-linejoin="round"
														/>
													</svg>
												</button>
											)}
										</div>
									</div>
								) : (
									<div className="absolute bottom-0 ">
										<Image
											src={homevideothumbnail}
											alt="homevideothumbnail"
											className="w-[376px]"
										/>
										<Image
											src={playbutton}
											alt="playbutton"
											className={`w-24 inset-32 lg:inset-36 absolute z-40 cursor-pointer ${
												isFullVisible ? "hidden" : "block"
											}`}
											onClick={handlePLayClick}
										/>
									</div>
								)}
							</div>
							{!isFullVisible && (
								<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-t-xl"></div>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto mt-20 maxWidth xl:px-0 px-4">
				<OurCustomersSlider
					subHeading={"our customers"}
					title={"Installed by 10,000+ Shopify stores"}
					desc={
						"Join successful entrepreneurs who've seen real results. Our app delivers increased sales, higher satisfaction, and improved conversion rates."
					}
				/>
			</div>
		</div>
	);
};

export default HeroSectionHome;
