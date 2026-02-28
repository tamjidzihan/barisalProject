interface HeroTitleProps {
    headingtext: string
}

const HeroTitle = ({ headingtext }: HeroTitleProps) => {
    return (
        <div className="w-full text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#006747] leading-tight mb-4 tracking-tight">
                {headingtext}
            </h2>
            <div className="h-1.5 w-24 bg-[#8a173f] rounded-full mt-2 mx-auto md:mx-0 opacity-80"></div>
        </div>
    )
}

export default HeroTitle;