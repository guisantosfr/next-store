import { Category } from "./Category";

export type Product = {
    id: number;
    category: Category;
    description: string;
    images: string[];
    price: number;
    slug: string;
    title: string;
    creationAt: Date;
    updatedAt: Date;
}