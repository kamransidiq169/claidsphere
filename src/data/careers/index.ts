import type { Job, Step } from "../types";

export const careersIntro = {
  title: "Discover Inspiring Career Opportunities at Claidsphere",
  body: "Unlock your potential with our exciting career opportunities. At Claidsphere, you'll find a supportive and dynamic environment where you can develop your skills and achieve your career goals.",
  location: "India",
};

export const perks = ["Collaborative culture", "Competitive benefits", "Impactful projects", "Community focused", "Cutting-edge technology", "Inspiring leadership"];

export const recruitment: Step[] = [
  { title: "Application Submission", body: "Submit your application through our online portal with an up-to-date resume tailored to the position; include a cover letter if required." },
  { title: "Initial Screening", body: "A 20–30 minute phone or video call about your experience, your understanding of the role, and your interest in working with us." },
  { title: "First Interview", body: "An initial interview with a member of our HR team — a chance to learn about the company and culture." },
  { title: "Technical/Skill Assessment" },
  { title: "Final Interview" },
];

/**
 * The career page lists four openings while the homepage says "3 jobs" and the
 * footer "2 jobs". Listing shown as published on the career page; counts are not displayed.
 */
export const jobs: Job[] = [
  { title: "Sales account executive", location: "J&K, India", department: "Sales" },
  { title: "General office manager", location: "J&K, India", department: "Software development" },
  { title: "Machine learning specialist", location: "J&K, India", department: "Design" },
  { title: "Senior product manager", location: "J&K, India", department: "Sales" },
];
