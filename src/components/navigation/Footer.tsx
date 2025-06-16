import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-background-black text-white flex flex-col py-8 px-20">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="w-fit md:max-w-1/4">
                    <p><b>Address:</b> B:Hive Building, Smales Farm, Takapuna, Auckland, 1140</p>
                    <p><b>Phone:</b> +64 21 051 8765</p>
                    <p><b>Email:</b> andrew@folletto.co.nz</p>
                </div>
                <Image
                    src="/images/svg/folletto_logo.png"
                    alt="folletto logo"
                    height={130}
                    width={130}
                />
            </div>
            <div className="my-3 w-full h-0.5 bg-white"></div>
            <div>
                <p>&copy; 2025 Folletto Caffè. All rights reserved.</p>
            </div>
        </footer>
    );
}