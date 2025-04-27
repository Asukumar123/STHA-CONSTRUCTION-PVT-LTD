import Image from 'next/image';
import ArchitecturalDesign from '../../../Components/Services/architecture-design';
import InnovativeEngineeringSolutions from '../../../Components/Services/engineering-solutions';
import WorksCatalogue from '../../../Components/Services/works-catalogue';

export default function Page() {
    return (
        <div className='bg-white'>
            <Image src="/Assets/Services.png" 
             alt="Modern construction project"
            
            width={1920} height={1080}
             className="hidden bg-blue-100 lg:block object-cover" />
               <ArchitecturalDesign />
               <InnovativeEngineeringSolutions />
               <WorksCatalogue />
        </div>

    );
}