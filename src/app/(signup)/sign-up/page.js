"use client";

import SignupForm from "@/components/SignupForm/SignupForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../../../public/Images/signup-logo.svg";
import "../../../globals.css";

const page = () => {
	const router = useRouter();
	return (
		<div className="bg-[url('/Images/signup-bg.webp')] bg-cover bg-center w-full h-lvh">
			<div className="relative">
				<div className="text-white absolute md:top-20 md:left-16 top-8 left-7">
					<button
						className="inline-flex items-center gap-x-2"
						onClick={() => router.back()}
					>
						<FiArrowLeft />
						Go back
					</button>
				</div>
				<div className="w-screen h-screen flex justify-center items-center xl:px-0 px-6">
					<div className="xl:w-[80%] lg:w-[90%] w-full">
						<div className="flex flex-col md:flex-row justify-between items-center md:gap-y-0 gap-y-8">
							<div className="w-full md:w-[50%] flex justify-center items-center">
								<Image src={logo} alt="" className="w-40 lg:w-72" />
							</div>
							<div className="w-full xl:w-[30%] lg:w-[50%] md:w-[50%]">
								<SignupForm title="Create your Account!" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
