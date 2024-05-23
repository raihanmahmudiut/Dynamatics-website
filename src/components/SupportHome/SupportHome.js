"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import supportrectangle from "../../../public/Images/rectangle-support.svg";
import supportimage from "../../../public/Images/support-home-image.svg";
import skeleton from "../../../public/Images/support-skeleton.svg";
import styles from "./SupportHome.module.css";

const SupportHome = () => {
	const [showSecondText, setShowSecondText] = useState(false);
	const [counterOn, setCounterOn] = useState(false);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<ScrollTrigger
			onEnter={() => {
				setCounterOn(true);
				const timer = setTimeout(() => {
					setShowSecondText(true);
				}, 2500);

				return () => clearTimeout(timer);
			}}
			onExit={() => {
				setCounterOn(false);
				setShowSecondText(false);
			}}
		>
			<div className="relative">
				<Image src={supportimage} alt="support image" />

				<Image
					src={skeleton}
					alt="support skeleton"
					className="absolute -left-0 md:-left-12 lg:-left-2 xl:-left-16 bottom-12 shadow-xl"
				/>
				{counterOn && (
					<div className="bg-brandBlue font-semibold rounded-t-xl rounded-r-xl text-white w-36 p-4 absolute top-16 right-2 lg:-right-20">
						<p className={`${styles.typewriter} ${styles.animtypewriter}`}>
							Hello,👋 Anas
						</p>
					</div>
				)}

				{showSecondText && counterOn && (
					<>
						{" "}
						<Image
							src={supportrectangle}
							alt="support rectangle"
							className="absolute right-[180px]  lg:right-[46px] top-[200px] "
						/>
						<div className="bg-brandBlue font-semibold rounded-t-xl rounded-r-xl text-white w-48 p-4 absolute top-36 right-2  lg:-right-[126px]">
							<p className={`${styles.typewriter} ${styles.animtypewriter}`}>
								How can I help you?
							</p>
						</div>
					</>
				)}
			</div>
		</ScrollTrigger>
	);
};

export default SupportHome;
