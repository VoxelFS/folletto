import { CollectionConfig } from 'payload';

const Drinks: CollectionConfig = {
    slug: "drinks",
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: "drink"
    },
    fields: [
        {
            name: "drinkPhoto",
            label: "Drink Photo",
            type: "upload",
            relationTo: "media",
            required: true,
            displayPreview: true
        },
        {
            name: "drink",
            label: "Drink Name",
            type: "text",
            required: true,
            admin: {
                placeholder: "Please enter a drink name."
            },
        },
        {
            name: "drinkCategory",
            label: "Drink Category",
            type: "relationship",
            relationTo: "categories",
            required: true
        },
    ]
};

export default Drinks;