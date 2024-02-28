import { createSlice } from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';
import NewItem from "../interfaces/NewItem";

const initialState: NewItem[]  = Array.from({ length: 9 }, (_, index) => {
    return {
        id: index,
        title: faker.lorem.paragraph(1),
        shortDescription: faker.lorem.paragraphs(1),
        description: faker.lorem.paragraphs({
            min:5,
            max:20,
        },  '\n'),
        image: faker.image.urlPicsumPhotos({width: 1280, height: 720}),
    };
});


export const newssSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
});

