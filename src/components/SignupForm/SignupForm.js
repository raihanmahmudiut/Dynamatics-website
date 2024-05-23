"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import googleIcon from "../../../public/Icons/google.svg";

const SignupForm = ({ title }) => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [valid, setValid] = useState(true);

	const handleChange = (value) => {
		setPhoneNumber(value);
		setValid(validatePhoneNumber(value));
	};

	const validatePhoneNumber = (phoneNumber) => {
		const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

		return phoneNumberPattern.test(phoneNumber);
	};

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
		<form
			onSubmit={handleSubmit}
			className="shadow-[0px_4px_80px_0px_#0000001A]  p-8 rounded-xl bg-white h-2/3"
		>
			<div className=" space-y-2 lg:space-y-4">
				<h4 className="font-semibold">{title}</h4>
				<div>
					<label className="text-[14px] lg:text-[16px] text-[#B1B1B1]">
						Full Name*
					</label>
					<input
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full p-2 lg:p-3 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px] placeholder:text-[#374144]"
						type="text"
						name="name"
						id="name"
						value={name}
						placeholder="Write your Name"
					/>
				</div>

				<div>
					<label className="text-[14px] lg:text-[16px] text-[#B1B1B1]">
						Company name*
					</label>
					<input
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full p-2 lg:p-3  rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px] placeholder:text-[#374144]"
						type="text"
						name="company"
						id="company"
						value={company}
						placeholder="Write your company Name"
					/>
				</div>
				<div>
					<label className="text-[14px] lg:text-[16px] text-[#B1B1B1]">
						Work Email
					</label>
					<input
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full p-2 lg:p-3  rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px] placeholder:text-[#374144]"
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
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full p-2 lg:p-3  rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px] placeholder:text-[#374144]"
						type="password"
						name="password"
						id="password"
						value={email}
						placeholder="Write your password"
					/>

					{!valid && <p className="text-red-500 ">At least 8 characters</p>}
				</div>
				<div>
					<label className="text-[14px] lg:text-[16px] text-[#00070B] font-medium">
						Phone Number
					</label>
					<PhoneInput
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full lg:px-3 py-2 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px]"
						country={"bd"}
						value={phoneNumber}
						onChange={handleChange}
						placeholder={"Type the phone number"}
						inputStyle={customizeInputStyle}
						buttonStyle={customizeButtonStyle}
						inputProps={{
							required: true,
						}}
					/>

					{!valid && (
						<p className="text-red-500">Please enter a valid phone number.</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full bg-[#3A7DFF] rounded-lg p-3 text-white"
				>
					Sign up
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
				Already have an account?
				<Link className="ml-2 text-[#3A7DFF]" href="/">
					Log in
				</Link>
			</p>
		</form>
	);
};

export default SignupForm;
