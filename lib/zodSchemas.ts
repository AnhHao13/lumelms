import { FileKey } from "lucide-react";
import {z} from "zod";
import { ca } from "zod/v4/locales";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"];
export const courseStatus = ["Draft", "Published", "Archived"] as const;
export const courseCategories = [
    "Development",
    "Business",
    "Finance",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "Design",
    "Marketing",
    "Health & Fitness",
    "Music",
    "Teaching & Academics",
] as const;

export const courseSchema = z.object({
    title: z.string()
    .min(3,{message: "Title must be at least 3 characters long"})
    .max(100,{message: "Title must be at most 100 characters long"}),

    description: z.string().min(3,{message: "Description must be at least 3 characters long"}),

    fileKey: z.string().min(1,{message: "FileKey is required"}),
//.coerce
    price: z.number().min(1, {message: "Price must be positive"}),
//.coerce
    duration: z.number()
    .min(1, {message: "Duration must be at least 1 hour"})
    .max(500, {message: "Duration must be at most 500 hours"}),

    level: z.enum(courseLevels, {message: "Course level is required"}),

    category: z.enum(courseCategories, {message: "Course category is required"}),

    smallDescription: z.string()
    .min(3, {message: "Small description must be at least 3 characters long"})
    .max(200, {message: "Small description must be at most 200 characters long"}),

    slug: z.string().min(3, {message: "Slug must be at least 3 characters long"}),

    status: z.enum(courseStatus, {message: "Course status is required"}),
})

export type CourseSchemaType = z.infer<typeof courseSchema>;