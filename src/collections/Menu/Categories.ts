import { CollectionConfig } from 'payload';

const Categories: CollectionConfig = {
    slug: "categories",
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: "category"
    },
    fields: [
        {
            name: "category",
            label: "Category",
            type: "text",
            admin: {
                placeholder: "Please enter a new categories."
            },
            required: true,
        },
    ]
};

export default Categories