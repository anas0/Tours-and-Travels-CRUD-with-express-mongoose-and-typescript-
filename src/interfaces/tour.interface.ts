interface ITour{
    name: string;
    durationHours: number;
    ratingAverage: number;
    ratingQuantity: number;
    price: number;
    imageCover: string;
    images: string[];
    createAt: Date;
    startDates: Date[];
    startLocation: string;
    locations: string[];
    slug: string;
}

export { ITour }