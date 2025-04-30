import Image from "next/image";
import ContactForm from "../ContactUs/contact-form";

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
                </div>
        </div>
      
    );
}