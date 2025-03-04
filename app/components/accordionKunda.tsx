import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { IoMdClose } from "react-icons/io";


const AccordionWithCarousel = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Function to close modal
    const closeModal = () => setSelectedImage(null);

    return (
        <>
            {/* Accordion */}
            <Accordion type="single" collapsible className="text-white px-5">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="cursor-pointer">PageSpeed Optimization</AccordionTrigger>
                    <AccordionContent>
                        <Carousel>
                            <CarouselContent className="flex-col md:flex-row">
                                <CarouselItem className="basis-1/2">
                                    <h2 className="text-center py-2">Before</h2>
                                    <img
                                        src="/image/kunda_before.png"
                                        alt="sample works"
                                        className="rounded-xl w-full h-auto cursor-pointer"
                                        onClick={() => setSelectedImage("/image/kunda_before.png")} // Open modal on click
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/2">
                                    <h2 className="text-center py-2">After</h2>
                                    <img
                                        src="/image/kunda_after.png"
                                        alt="sample works"
                                        className="rounded-xl w-full h-auto cursor-pointer"
                                        onClick={() => setSelectedImage("/image/kunda_after.png")} // Open modal on click
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            {/* Full-Screen Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-gray/20 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal} // Close when clicking outside
                >
                    <div>
                        <IoMdClose className="float-end cursor-pointer w-10" onClick={closeModal} />
                        <img
                            src={selectedImage}
                            alt="Full Screen"
                            className="max-w-full max-h-full rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AccordionWithCarousel;
