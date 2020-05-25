import { Image } from "./image";

export class Product {
    Id: number
    Title: string
    Code: string
    CategoryTitle: string
    CategoryTitleUrl: string
    CategoryId: number
    GoldWeight: string
    GoldPrice: string
    BrilliantWeight: string
    Dollar: string
    Price: string
    Description: string
    CreateDate: Date
    ImageUrl: string
    ThumbImageUrl: string
    ProductImages: Image[]
    Tags: string
    TagList: Array<{name:string , url: string}>
}
