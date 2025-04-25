import { LocateIcon, MailPlus, MapPinned, Phone, Twitter } from "lucide-react";
import contact from "../../public/assets/images/contact.png"
function Contact() {
    return ( 

        <div className="md:px-20 px-3 mt-4 min-h-[70vh]">
            <h1 className="text-xl font-semibold mb-4">Contact</h1>
            <div className="flex sm:flex-row flex-col gap-4">
            <img className=" max-h-[300px] max-w-[400px] object-contain border border-gray-200 shadow bg-gray-50" src={contact} alt="" />
           <div className="flex flex-col gap-5 bg-gray-50 flex-1 p-3 border border-gray-200 shadow">
            <div className="flex gap-5 items-center text-sm ">
            <MapPinned />
                <p>Shopsitry Online serveice</p>
            </div>
            <div className="flex gap-5 items-center text-sm ">
            <Phone />
                <p>+918881343598</p>
            </div>
            <div className="flex gap-5 items-center text-sm ">
            <MailPlus />
                <p>bytewizar404@gmail.com</p>
            </div>
            <div className="flex gap-5 items-center text-sm ">
            <Twitter />
                <p>@nishant74088</p>
            </div>
           </div>
            </div>
          
        </div>
     );
}

export default Contact;