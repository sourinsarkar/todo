import sourinmark from "../assets/images/sourinmark.svg"

function Nav() {
    return(
        <div className="flex items-center justify-between h-20 max-h-20 cuBox px-6 mt-10">
            <div className="flex items-center gap-x-2">
                <a href="https://sourin.in">
                    <img src={sourinmark} alt="Sourin Icon" className="w-6 h-6" />
                </a>
                <p className="tracking-tighter font-semibold text-xl primary-font leading-none">Todo App</p>
            </div>
            <div className="p-2 bg-[#E9ECEF] rounded-full">
                <a href="https://github.com/sourinsarkar/todo" target="_blank"><i className="ri-github-fill ri-xl"></i></a>
            </div>
        </div>
    );
}

export default Nav;