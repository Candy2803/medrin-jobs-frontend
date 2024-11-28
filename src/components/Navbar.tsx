/** @format */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, Settings, LogOut } from "lucide-react";
import AuthModal from "./auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, logOut } from "../state";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showAuthModal, setShowAuthModal] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const { isAuthenticated, user } = useSelector(
		(state: { auth: AuthState }) => state.auth
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const navigation = [
		{ name: "Home", path: "/" },
		{ name: "Find a job", path: "/jobs" },
		{ name: "Employers", path: "/employers" },
		{ name: "Blog", path: "/blog" },
		{ name: "Pricing", path: "/pricing" },
		{ name: "Contact", path: "/contact" },
	];

	const handlePostJob = () => {
		if (!isAuthenticated) {
			setShowAuthModal(true);
		} else {
			navigate("/employer/post-job");
		}
	};

	const handleLogout = () => {
		dispatch(logOut());
		localStorage.clear();
		navigate("/");
	};

	return (
		<>
			<nav className='bg-white shadow-sm fixed w-full z-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between h-16'>
						<div className='flex items-center'>
							<Link to='/' className='flex items-center'>
								<img
									src='/logo.jpg'
									className='h-12 w-12'
									alt=''
								/>
							</Link>

							<div className='hidden md:ml-8 md:flex md:space-x-4'>
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.path}
										className='text-gray-700 hover:text-blue-600 px-3 py-2'>
										{item.name}
									</Link>
								))}
							</div>
						</div>

						<div className='hidden md:flex items-center space-x-4'>
							{isAuthenticated ? (
								<div className='relative'>
									<button
										onClick={() =>
											setShowProfileMenu(!showProfileMenu)
										}
										className='flex items-center space-x-2 text-gray-700 hover:text-blue-600'>
										<User className='h-5 w-5' />
										<span className='hidden lg:block'>
											{user?.name}
										</span>
									</button>

									{showProfileMenu && (
										<div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50'>
											{user?.role === "employer" && (
												<>
													<Link
														to='/employer/dashboard'
														className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
														Dashboard
													</Link>
													<Link
														to='/employer/jobs'
														className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
														My Jobs
													</Link>
													<Link
														to='employer/settings'
														className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
														<Settings className='h-4 w-4 inline mr-2' />
														Settings
													</Link>
												</>
											)}
											{user?.role === "jobseeker" && (
												<>
													<Link
														to='/jobseeker/dashboard'
														className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
														Dashboard
													</Link>
													<Link
														to='/jobseeker/applications'
														className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
														My Applications
													</Link>
													<Link
														to='jobseeker/profile'
														className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
														<Settings className='h-4 w-4 inline mr-2' />
														Profile
													</Link>
												</>
											)}

											<button
												onClick={handleLogout}
												className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'>
												<LogOut className='h-4 w-4 inline mr-2' />
												Logout
											</button>
										</div>
									)}
								</div>
							) : (
								<button
									onClick={() => setShowAuthModal(true)}
									className='text-gray-700 hover:text-blue-600 px-4 py-2'>
									Login / Register
								</button>
							)}

							{isAuthenticated && user?.role === "employer" && (
								<button
									onClick={handlePostJob}
									className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap'>
									Post a Job
								</button>
							)}
						</div>

						<div className='flex md:hidden items-center'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								className='text-gray-700 hover:text-blue-600 p-2'>
								{isOpen ? (
									<X className='h-6 w-6' />
								) : (
									<Menu className='h-6 w-6' />
								)}
							</button>
						</div>
					</div>
				</div>

				{isOpen && (
					<div className='md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.path}
									className='block px-3 py-2 text-gray-700 hover:text-blue-600'
									onClick={() => setIsOpen(false)}>
									{item.name}
								</Link>
							))}

							{isAuthenticated ? (
								<>
									{user?.role === "employer" && (
										<>
											<Link
												to='/employer/dashboard'
												className='block px-3 py-2 text-gray-700 hover:text-blue-600'
												onClick={() =>
													setIsOpen(false)
												}>
												Dashboard
											</Link>
											<Link
												to='/employer/jobs'
												className='block px-3 py-2 text-gray-700 hover:text-blue-600'
												onClick={() =>
													setIsOpen(false)
												}>
												My Jobs
											</Link>
										</>
									)}
									{user?.role === "jobseeker" && (
										<>
											<Link
												to='/jobseeker/dashboard'
												className='block px-3 py-2 text-gray-700 hover:text-blue-600'
												onClick={() =>
													setIsOpen(false)
												}>
												Dashboard
											</Link>
											<Link
												to='/jobseeker/applications'
												className='block px-3 py-2 text-gray-700 hover:text-blue-600'
												onClick={() =>
													setIsOpen(false)
												}>
												My Applications
											</Link>
										</>
									)}
									<button
										onClick={() => {
											handleLogout();
											setIsOpen(false);
										}}
										className='block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600'>
										Logout
									</button>
								</>
							) : (
								<button
									onClick={() => {
										setShowAuthModal(true);
										setIsOpen(false);
									}}
									className='block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600'>
									Login / Register
								</button>
							)}

							{isAuthenticated && user?.role === "employer" && (
								<button
									onClick={() => {
										handlePostJob();
										setIsOpen(false);
									}}
									className='block w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
									Post a Job
								</button>
							)}
						</div>
					</div>
				)}
			</nav>

			<AuthModal
				isOpen={showAuthModal}
				onClose={() => setShowAuthModal(false)}
				initialView={isAuthenticated ? "login" : "user-type"}
			/>
		</>
	);
};

export default Navbar;
