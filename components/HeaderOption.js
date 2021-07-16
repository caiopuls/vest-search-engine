function HeaderOption({ Icon, title, selected }) {
    return (
        <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-[#2978F8] hover:border-[#2978F8] pb-3 cursor-pointer ${selected && "text-[#2978F8] border-[#2978F8]"}`}>
            <Icon className="h-4" />
            <p>{title}</p>
        </div>
    )
}

export default HeaderOption
