import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionWithCarousel: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Accordion type="single" collapsible className="px-5 pb-5">
            <AccordionItem value="item-1" className="border-2 border-[var(--border-brutal)] bg-[var(--background)]">
                <AccordionTrigger className="cursor-pointer font-[family-name:var(--font-ibm-plex-mono)] text-xs font-bold uppercase tracking-widest px-4 hover:no-underline">
                    [+] PAGESPEED_OPTIMIZATION
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionWithCarousel;
