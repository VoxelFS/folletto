import {getLocations} from "@/actions/getLocations";
import Image from "next/image";

export default async function LocationsDisplay() {

    const locations = await getLocations();

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-7">
            {locations.map((location, index) => (
                <div key={index} className="flex flex-col w-full">
                    <div className="relative h-60">
                        <Image
                            src="/images/location/location_placeholder.png"
                            alt="placeholder image"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h4 className="text-white text-xl font-semibold text-center drop-shadow-md">
                                {location.locationName}
                            </h4>
                        </div>
                    </div>

                    <div className="flex-grow px-2 py-12 bg-primary-brown text-white flex items-center justify-center">
                        <h4 className="text-center">{location.address}</h4>
                    </div>
                </div>
            ))}
        </div>

    );
}