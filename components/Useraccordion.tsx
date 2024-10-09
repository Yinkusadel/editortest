
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ReactNode } from "react";


interface UserAccordionProps {
    triggerText: string;
    content: ReactNode;
    triggerClassName?: string;
}


const UserAccordion: React.FC<UserAccordionProps> = ({ triggerText, content, triggerClassName }) => {
    return (
        <div>
            <div className='flex my-4'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className={`bg-gray-300 h-3 border rounded hover:no-underline flex justify-start w-80 p-4 max-[800px]:w-[450px] ${triggerClassName}`}>
                            {triggerText}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 max-[800px]">
                            {content}
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>

        </div>
    )
}

export default UserAccordion