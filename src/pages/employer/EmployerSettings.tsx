/** @format */

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
// import { employerService } from '../../services/mockEmployerService';
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setEmployerData } from "@/state/employerSlice";

const EmployerSettings = () => {
	const dispatch = useDispatch();
	// const employer = employerService.getCurrentUser();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		companyName: "",
		phoneNumber: "",
		companyWebsite: "",
		industry: "",
		companySize: "",
		companyLocation: "",
	});
	useEffect(() => {
		// Fetch user data when the component mounts
		const fetchUserData = async () => {
			try {
				const authData = JSON.parse(
					localStorage.getItem("persist:auth") || "{}"
				);
				const token = authData.auth
					? JSON.parse(authData.auth)?.token
					: null;

				if (!token) {
					throw new Error("Authentication token is missing.");
				}
				console.log(token);
				const response = await axios.get(
					"https://medrin-jobs-backend-nn38.onrender.com/employer/profile",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				setFormData({
					name: response.data.name,
					email: response.data.email,
					companyName: response.data.companyName,
					phoneNumber: response.data.phoneNumber,
					companyWebsite: response.data.companyWebsite,
					industry: response.data.industry,
					companySize: response.data.companySize,
					companyLocation: response.data.companyLocation,
				});
				dispatch(setEmployerData(response.data));
				console.log(response.data);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, []);
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const authData = JSON.parse(
				localStorage.getItem("persist:auth") || "{}"
			);
			const token = authData.auth
				? JSON.parse(authData.auth)?.token
				: null;

			if (!token) {
				throw new Error("Authentication token is missing.");
			}
			const response = await axios.put(
				"https://medrin-jobs-backend-nn38.onrender.com/employer/update-details",
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				toast.success("Profile updated successfully!");
			} else {
				console.error("Failed to update profile.");
			}
		} catch (error: any) {
			console.error("Error updating profile:", error.message);
		}
	};

	return (
		<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<div className='mb-8'>
				<h1 className='text-2xl font-bold text-gray-900'>
					Account Settings
				</h1>
				<p className='text-gray-600'>
					Manage your employer profile and preferences
				</p>
			</div>

			<form onSubmit={handleSubmit} className='space-y-8'>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-lg font-semibold text-gray-900 mb-4'>
						Personal Information
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Full Name
							</label>
							<input
								type='text'
								value={formData.name}
								onChange={(e) =>
									setFormData({
										...formData,
										name: e.target.value,
									})
								}
								className='w-full border border-gray-300 rounded-md p-2'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Email Address
							</label>
							<input
								type='email'
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
								className='w-full border border-gray-300 rounded-md p-2'
							/>
						</div>
					</div>
				</div>

				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-lg font-semibold text-gray-900 mb-4'>
						Company Information
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Company Name
							</label>
							<input
								type='text'
								value={formData.companyName}
								onChange={(e) =>
									setFormData({
										...formData,
										companyName: e.target.value,
									})
								}
								className='w-full border border-gray-300 rounded-md p-2'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Phone Number
							</label>
							<input
								type='tel'
								value={formData.phoneNumber}
								onChange={(e) =>
									setFormData({
										...formData,
										phoneNumber: e.target.value,
									})
								}
								className='w-full border border-gray-300 rounded-md p-2'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Website
							</label>
							<input
								type='url'
								value={formData.companyWebsite}
								placeholder='https://www.example.com'
								onChange={(e) =>
									setFormData({
										...formData,
										companyWebsite: e.target.value,
									})
								}
								className='w-full border border-gray-300 rounded-md p-2'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Industry
							</label>
							<select
								value={formData.industry}
								onChange={(e) =>
									setFormData({
										...formData,
										industry: e.target.value,
									})
								}
								className='w-full border border-gray-300 rounded-md p-2'>
								<option value=''>Select industry</option>
								<option value='technology'>Technology</option>
								<option value='healthcare'>Healthcare</option>
								<option value='finance'>Finance</option>
								<option value='education'>Education</option>
								<option value='other'>Other</option>
							</select>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Company Size
							</label>
							<select
								value={formData.companySize}
								onChange={(e) =>
									setFormData({
										...formData,
										companySize: e.target.value,
									})
								}
								className='w-full border border-gray-300 rounded-md p-2'>
								<option value=''>Select size</option>
								<option value='1-10'>1-10 employees</option>
								<option value='11-50'>11-50 employees</option>
								<option value='51-200'>51-200 employees</option>
								<option value='201-500'>
									201-500 employees
								</option>
								<option value='501+'>501+ employees</option>
							</select>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Location
							</label>
							<input
								type='text'
								value={formData.companyLocation}
								onChange={(e) =>
									setFormData({
										...formData,
										companyLocation: e.target.value,
									})
								}
								className='w-full border border-gray-300 rounded-md p-2'
							/>
						</div>
					</div>
				</div>

				<div className='flex justify-end'>
					<button
						type='submit'
						className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center'>
						<Save className='h-5 w-5 mr-2' />
						Save Changes
					</button>
				</div>
			</form>
		</div>
	);
};

export default EmployerSettings;
