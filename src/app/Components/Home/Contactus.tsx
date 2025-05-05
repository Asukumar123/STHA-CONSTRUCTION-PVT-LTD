import Image from "next/image";
import ContactForm from "../ContactUs/contact-form";
import { Toaster } from "react-hot-toast";

export default function Contactus() {
    return (
        <div className="flex   gap-6 p-4 overflow-hidden relative h-[600px] ">
 <Image
                    src="/Assets/Connect.png"
                    alt="Banner Image"
                  
                    className="object-cover"
                    width={700}
                    height={600}
                />
                <div>

                <ContactForm />
                <Toaster />
                </div>
        </div>
      
    );
}
// ujua irkw udkf ivne