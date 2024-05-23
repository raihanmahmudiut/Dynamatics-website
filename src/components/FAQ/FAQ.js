"use client";
import Image from "next/image";
import { useState } from "react";

const FAQ = ({ faq }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleAccordionClick = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div>
			<div className="faq-section flex flex-col gap-6 px-2 lg:px-0 w-full  md:w-5/6 xl:w-4/6 mx-auto ">
				{faq.questions.map((faqItem, faqIndex) => (
					<div
						className={`faq-item w-full flex flex-col py-4 bg-[#F8F8F8] rounded-xl `}
						key={faqIndex}
					>
						<div
							className={`question ${
								activeIndex === faqIndex ? "active" : ""
							} flex flex-row justify-between w-full cursor-pointer px-2 lg:px-4 text-[12px] md:text-[15px] lg:text-[18px] font-semibold gap-5 md:gap-10 lg:gap-28 `}
							onClick={() => handleAccordionClick(faqIndex)}
						>
							{faqItem.question}
							<Image
								src={
									activeIndex === faqIndex
										? "/Icons/CaretUp.svg"
										: "/Icons/CaretDown (1).svg"
								}
								width={20}
								height={20}
								alt="open-close"
							/>
						</div>
						<div
							className={`answer px-2  lg:px-4 overflow-hidden transition-all duration-500 text-[12px] md:text-[14px] lg:text-[16px]  ease-in-out ${
								activeIndex === faqIndex ? "h-[100px] py-2" : "h-0"
							}`}
						>
							{faqItem.answer}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
