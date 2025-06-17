import { CollectionConfig } from 'payload';

const Location: CollectionConfig = {
    slug: "locations",
    access: {
        read: () => true
    },
    fields: [
        {
            name: "locationName",
            label: "Store Location",
            type: "text",
            admin: {
                placeholder: "Enter the location of your store.",
            },
            required: true,
        },
        {
            name: "address",
            label: "Store Address",
            type: "text",
            admin: {
                placeholder: "Enter the address of your store.",
            },
            required: true,
        },
    ]
}

export default Location;