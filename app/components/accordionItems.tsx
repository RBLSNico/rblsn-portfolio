import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionWithCarousel: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <>
            {/* Accordion */}
            <Accordion type="single" collapsible className="text-white px-5">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="cursor-pointer">PageSpeed Optimization</AccordionTrigger>
                    <AccordionContent>
                        {children}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default AccordionWithCarousel;
