const Header = () => {
    return (
        <header className="flex flex-row items-center justify-center p-5">
            <div className="flex-row w-full justify-around items-center sm:flex hidden">
                <a href="#home" className="text-(--primary-blue) font-semibold text-lg">HOME</a>
                <a href="#about" className="text-(--primary-blue) font-semibold text-lg">ABOUT</a>
            </div>
            <div className="w-3xl flex flex-row items-center justify-center">
                <img src="/rblsn.svg" alt="RBLS logo" className="max-w-[40px]" />
            </div>
            <div className="flex-row w-full justify-around items-center sm:flex hidden">
                <a href="#projects" className="text-(--primary-blue) font-semibold text-lg">WORKS</a>
                <a href="" className="text-(--primary-blue) font-semibold text-lg">CONTACT</a>
            </div>
        </header>
    )
}

export default Header