export default function Footer() {

    return (
        <footer className="border-t border-white p-6 flex justify-between items-start b-full">
            <div className="flex flex-col space-y-2 text-left text-3xl font-medium">
                <a href="#remindeen" className="hover:underline">Home</a>
                <a href="#preview" className="hover:underline">Preview</a>
                <a href="#gallery" className="hover:underline">Gallery</a>
                <a href="#about" className="hover:underline">About Us</a>
            </div>
            <div className="text-right">
            <p className="text-5xl">Get In Touch</p>
            <h1 className="text-5xl font-bold">SERDADUCODE.@DEV</h1>
            </div>
        </footer>
    );
};
