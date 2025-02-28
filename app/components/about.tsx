const AboutSection = () => {
    return (
        <section id="about" className="flex flex-col justify-center items-center">
            <h1 className="text-(--primary-blue) text-2xl font-semibold text-center">About Me</h1>
            <div className="m-0 flex items-center justify-center p-10 flex-col gap-10 md:flex-row">
                <div className="w-full items-center justify-center flex">
                    <img src="/rblsnico_img.jpg" className="max-w-[250px] rounded-full"></img>
                </div>
                <div className="w-full">
                    <p className="text-center sm:text-start">
                        I am Gabriel Nicolas Labutap Robles, I graduated from National University Laguna with a Bachelor’s Degree in Information Technology in 2024. I am a passionate Web Developer with a strong foundation in full-stack development, specializing in WordPress, JavaScript, PHP, and modern web frameworks.

                        I am always eager to improve my skills, knowledge, to expand my abilities so that I can contribute to meaningful projects.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default AboutSection
