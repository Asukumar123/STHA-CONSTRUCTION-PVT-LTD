import Image from 'next/image';

export default function Page() {
    return (
        <div>
            <Image src="/Assets/About.png" 
             alt="Modern construction project"
            
            width={1920} height={1080}
             className="hidden bg-blue-100 lg:block object-cover" />
        </div>
    );
}