const Header = () => {
    return (
        <header className="sm:sticky top-2 flex flex-row items-center justify-center p-4 backdrop-blur-md bg-white/20 rounded-full border border-(--primary-blue) mt-2 z-99">
            <div className="flex-row w-full justify-around items-center sm:flex hidden">
                <a href="#home" className="text-[var(--primary-blue)] font-semibold text-lg">HOME</a>
                <a href="#about" className="text-[var(--primary-blue)] font-semibold text-lg">ABOUT</a>
            </div>
            <div className="w-3xl flex flex-row items-center justify-center">
                <img src="/rblsn.svg" alt="RBLS logo" className="max-w-[40px]" />
            </div>
            <div className="flex-row w-full justify-around items-center sm:flex hidden">
                <a href="#projects" className="text-[var(--primary-blue)] font-semibold text-lg">WORKS</a>
                <a href="#contact" className="text-[var(--primary-blue)] font-semibold text-lg">CONTACT</a>
            </div>
        </header>
    )
}

export default Header