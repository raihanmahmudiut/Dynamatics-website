import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import goldenStar from "../../../public/Icons/golden-star.svg";
import googleIcon from "../../../public/Icons/google.svg";
import clientImage from "../../../public/Images/company-3.png";

const data = [
	{
		clientSays:
			"I've been using Dynamatics for a few months now, and it has truly transformed the way customers interact with my online store. The customizable slide-out cart and the array of upselling and cross-selling widgets have had a significant impact on both user engagement and sales.",
		clientName: "Kya klark",
		clientImage: clientImage,
		clientFrom: "xyz",
		rating: 4.5,
	},
	{
		clientSays:
			"I've been using Dynamatics for a few months now, and it has truly transformed the way customers interact with my online store. The customizable slide-out cart and the array of upselling and cross-selling widgets have had a significant impact on both user engagement and sales.",
		clientName: "Kya klark",
		clientImage: clientImage,
		clientFrom: "xyz",
		rating: 4.5,
	},
	{
		clientSays:
			"I've been using Dynamatics for a few months now, and it has truly transformed the way customers interact with my online store. The customizable slide-out cart and the array of upselling and cross-selling widgets have had a significant impact on both user engagement and sales.",
		clientName: "Kya klark",
		clientImage: clientImage,
		clientFrom: "xyz",
		rating: 4.5,
	},
];

const SigninModal = ({ modalOpen, setModalOpen }) => {
	const [email, setEmail] = useState("");
	const [valid, setValid] = useState(true);

	function closeModal() {
		setModalOpen(false);
	}

	const handleChange = (value) => {
		setPhoneNumber(value);
		setValid(validatePhoneNumber(value));
	};

	const validatePhoneNumber = (phoneNumber) => {
		const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

		return phoneNumberPattern.test(phoneNumber);
	};

	console.log(closeModal);

	const customizeInputStyle = {
		border: "none",
		paddingTop: "0px",
		paddingBottom: "0px",
		fontSize: "14px",
		backgroundColor: "transparent",
	};
	const customizeButtonStyle = {
		border: "none",
		backgroundColor: "transparent",
		width: "",
	};

	const handleSubmit = () => {};

	return (
		<>
			{modalOpen && (
				<div
					class="relative z-10"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
					<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<div class="relative transform overflow-hidden bg-white rounded-3xl text-left shadow-xl transition-all sm:my-8 2xl:w-[50%] xl:w-[70%] lg:w-[90%]  md:w-[80%] w-[100%]">
								<div className="flex flex-col lg:flex-row  justify-between items-stretch">
									<div className="lg:w-1/2 w-full order-2 lg:order-1 bg-white">
										<form
											onSubmit={handleSubmit}
											className="shadow-[0px_4px_80px_0px_#0000001A]  p-8 rounded-xl "
										>
											<div className="space-y-4">
												<h4 className="font-semibold text-center md:text-start">
													Welcome back! 👋
												</h4>

												<div>
													<label className="text-[14px] lg:text-[16px] text-[#B1B1B1]">
														Work Email
													</label>
													<input
														className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-3 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px] placeholder:text-[#374144]"
														type="text"
														name="email"
														id="email"
														value={email}
														placeholder="Write your work email"
													/>
												</div>
												<div>
													<label className="text-[14px] lg:text-[16px] text-[#B1B1B1]">
														Password*
													</label>
													<input
														className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-3 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px] placeholder:text-[#374144]"
														type="password"
														name="password"
														id="password"
														value={email}
														placeholder="Write your password"
													/>

													{!valid && (
														<p className="text-red-500 ">
															At least 8 characters
														</p>
													)}
												</div>

												<button
													type="submit"
													className="w-full bg-[#3A7DFF] rounded-lg p-3 text-white"
												>
													Log in
												</button>
												<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-[#EBEBEB] after:mt-0.5 after:flex-1 after:border-t after:border-[#EBEBEB] dark:before:border-[#EBEBEB] dark:after:border-neutral-500">
													<p className="mx-4 mb-0 text-center font-semibold dark:text-white">
														OR
													</p>
												</div>
												<button
													type="submit"
													className="w-full flex justify-center items-center gap-x-2 rounded-lg p-3 bg-[#F8F8F8] text-[15px] font-medium"
												>
													<Image src={googleIcon} alt="google icon" />
													Continue with google
												</button>
											</div>
											<p className="mt-4">
												Don’t have an account?
												<Link className="ml-2 text-[#3A7DFF]" href="/sign-up">
													Sign up
												</Link>
											</p>
										</form>
									</div>
									<div className="bg-[url('/Images/sign-in.webp')] bg-cover bg-center lg:w-1/2 w-full h-auto relative order-1 lg:order-2">
										<div className="absolute inset-0 bg-black opacity-50 z-10"></div>
										<div className="relative flex justify-center items-center w-full h-full z-20">
											<div
												onClick={closeModal}
												className="absolute top-5 right-5 text-xl cursor-pointer z-50"
											>
												<IoCloseSharp className="text-white" />
											</div>
											<div className="z-20 text-white ">
												<div className=" p-[30px] mt-[40px] rounded-lg text-center">
													<p className="md:text-[20px] xs:text-[18px] text-[17px] font-medium">
														“I&apos;ve been using Dynamatics for a few months
														now, and it has truly transformed the way customers
														interact with my online store. The customizable
														slide-out cart and the array of upselling and
														cross-selling widgets have had a significant impact
														on both user engagement and sales.
													</p>
													<div className="mt-[39px]">
														<div className="text-center mx-auto w-full">
															<Image
																className="w-[60px] h-[60px] rounded-full inline-block"
																src={clientImage}
																alt="company image"
															/>
															<div>
																<p className="md:text-[18px] text-[14px] font-semibold mt-2">
																	Kya klark
																</p>
																<p>
																	<small className="md:text-[14px] text-[12px]">
																		Founder of xyz
																	</small>
																</p>
															</div>
														</div>
														<div className="flex justify-center items-center mt-4">
															<ReactStars
																value={4.5}
																size={20}
																isHalf={true}
																edit={false}
																emptyIcon={
																	<Image src={goldenStar} alt="icon" />
																}
																halfIcon={<Image src={goldenStar} alt="icon" />}
																filledIcon={
																	<Image src={goldenStar} alt="icon" />
																}
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SigninModal;
