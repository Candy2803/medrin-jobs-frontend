/** @format */

export interface JobApplication {
	id: string;
	jobId: string;
	userId: string;
	status: "pending" | "approved" | "rejected";
	appliedAt: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	resumeUrl: string;
	coverLetterUrl?: string;
	summary?: string;
}

// Add other existing interfaces...
