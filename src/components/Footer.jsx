export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center p-5  text-white">
            <div className="flex flex-col md:flex-row md:justify-between w-full max-w-6xl">
                <div className="flex flex-col space-y-2 text-center md:text-left">
                    <a href="#remindeen" className="hover:underline">Home</a>
                    <a href="#preview" className="hover:underline">Preview</a>
                    <a href="#gallery" className="hover:underline">Gallery</a>
                    <a href="#about" className="hover:underline">About Us</a>
                </div>
                <div className="text-center md:text-right mt-4 md:mt-0">
                    <p className="text-lg font-bold">Get In Touch</p>
                    <h1 className="text-2xl font-bold">SERDADUCODE.@DEV</h1>
                </div>
            </div>
        </footer>
    );
};
