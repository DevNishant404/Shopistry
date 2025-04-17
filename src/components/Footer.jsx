import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <footer className="bg-slate-900 mt-5">
            <div className=" flex flex-col sm:flex-row justify-between md:px-30 px-3 py-3 items-center">
                <h3 className="text-white font-bold text-2xl">Subscribe Our Newsletter</h3>
                <form action="">
                    <div className="bg-white flex w-[40%]p-1 rounded">
                        <input className="flex-1 px-2 py-1 border-none outline-none" type="text" placeholder="Enter your Email" />
                        <input className="bg-gray-300 rounded-full px-2 cursor-pointer hover:bg-gray-400 transition duration-150" type="submit" />
                    </div>
                </form>
            </div>
            <div className="bg-slate-800 grid md:grid-cols-4 grid-cols-2 gap-4 py-2 md:px-30 px-3 text-white">
                <div className="flex flex-col items-start gap-1">
                <Link to={"/"} className="text-white  font-extrabold rounded  text-xl">Shopistry</Link>
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio iste fugiat modi odit dolore. Hic qui vel aspernatur voluptatem necessitatibus?</p>
                <div className="flex gap-2">
                <Link><Facebook size={40} className="bg-white text-black rounded-md"></Facebook></Link>
                <Link><Twitter size={40} className="bg-white text-black rounded-md"></Twitter></Link>
                <Link><Instagram size={40} className="bg-white text-black rounded-md"></Instagram></Link>
                </div>

                </div>
                <div className="flex flex-col items-start gap-1">
                <h3 className="text-white  font-extrabold rounded  text-xl">Pages</h3>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/faqs"}>FAQs</Link>
                <Link to={"/contact"}>Contact</Link>
                </div>
                <div>
                <h3 className="text-white  font-extrabold rounded  text-xl">Category</h3>
                    <ul>
                        <li>Laptos</li>
                        <li>Glasses</li>
                        <li>Phones</li>
                        <li>Cloths</li>
                    </ul>
                </div>
                <div>
                <h3 className="text-white  font-extrabold rounded  text-xl">Location</h3>
                    <ul>
                        <li>Lucknow <br />Uttarpradesh</li>
                        <li>India</li>
                        <li>+918881343598</li>
                        <li></li>
                        <li>Cloths</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="text-center py-2 text-gray-200">Copyright &copy; 2025 Online Prodcut</p>
            </div>
        </footer>
     );
}

export default Footer;