export default function FollettoFeatures() {

    const info = [
        {
            title: "ACCURATE",
            description: "Implementation of a 100% consistent recipe through accurate proportions of water, syrup and ice."
        },
        {
            title: "VARIETY",
            description: "A variety of 17 different drink options are available."
        },
        {
            title: "REASONABLE",
            description: "We provide the best experience to our customers at a reasonable price."
        },
        {
            title: "FAST OPERATION",
            description: "Average preparation time per cup is 50 seconds."
        },
    ]

    return (
        <div className="flex flex-col items-center">
            <h5 className="font-shining-star text-2xl">A menu that makes it special and premium.</h5>
            <div className="flex-col flex items-center gap-y-3 mb-7">
                <h3 className="text-primary-brown">Premium Unmanned Beverage</h3>

                <div className="w-32 h-1 bg-primary-brown "></div>
            </div>
            <div className="flex justify-between gap-10 flex-wrap mx-auto justify-center">
                {info.map((item, i) => (
                    <div className="flex flex-col px-6 py-12 text-center w-[250px] md:w-[300px] h-[200px] md:h-[250px] bg-background-white" key={i}>
                        <h4 className="tracking-wide text-primary-brown">{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12