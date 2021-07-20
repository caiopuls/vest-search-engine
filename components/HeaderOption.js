function HeaderOption({ Icon, title, selected }) {
    return (
        <div className={`flex items-center space-x-1 border-b-4 border-transparent transition-all hover:text-white hover:border-white pb-3 cursor-pointer ${selected && "text-white border-white font-semibold"}`}>
            <Icon className="h-4" />
            <p>{title}</p>
        </div>
    )
}

export default HeaderOption
