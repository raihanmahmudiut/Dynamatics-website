"use client"
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Form = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [message, setMessage] = useState("");
	const [valid, setValid] = useState(true);

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === "name") setName(value);
		else if (name === "email") setEmail(value);
		else if (name === "company") setCompany(value);
		else if (name === "message") setMessage(value);
	};

	const handlePhoneChange = (value) => {
		setPhoneNumber(value);
		setValid(validatePhoneNumber(value));
	};

	const validatePhoneNumber = (phoneNumber) => {
		const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
		return phoneNumberPattern.test(phoneNumber);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission here
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

	return (
		<form
			onSubmit={handleSubmit}
			className="shadow-[0px_4px_80px_0px_#0000001A] p-3 md:p-4 lg:p-8 rounded-xl bg-white"
		>
			<div className="space-y-4">
				<div>
					<label className="text-[14px] lg:text-[16px]">Full Name</label>
					<input
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-3 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px]"
						type="text"
						name="name"
						value={name}
						onChange={handleChange}
						placeholder="Write Your Name"
					/>
				</div>
				<div>
					<label className="text-[14px] lg:text-[16px]">Work Email</label>
					<input
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-3 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px]"
						type="text"
						name="email"
						value={email}
						onChange={handleChange}
						placeholder="Write Your Email"
					/>
				</div>
				<div>
					<label className="text-[14px] lg:text-[16px]">Company name*</label>
					<input
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-3 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px]"
						type="text"
						name="company"
						value={company}
						onChange={handleChange}
						placeholder="Write Your Company Name"
					/>
				</div>
				<div>
					<label className="text-[14px] lg:text-[16px]">Phone Number:</label>
					<PhoneInput
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-2 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px]"
						country={"bd"}
						value={phoneNumber}
						onChange={handlePhoneChange}
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
				<div>
					<label className="text-[14px] lg:text-[16px]">Message</label>
					<textarea
						rows={6}
						cols={10}
						id="message"
						name="message"
						value={message}
						onChange={handleChange}
						className="mt-2 hidden lg:block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-2 rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px]"
						placeholder="Write message"
					></textarea>
					<textarea
						rows={4}
						cols={10}
						id="message"
						name="message"
						value={message}
						onChange={handleChange}
						className="mt-2 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-2 lg:hidden rounded-lg bg-[#F8F8F8] text-[14px] lg:text-[16px]"
						placeholder="Write message"
					></textarea>
				</div>
				<button
					type="submit"
					className="w-full bg-[#3A7DFF] rounded-lg p-3 text-white"
				>
					Send Message
				</button>
			</div>
		</form>
	);
};

export default Form;
