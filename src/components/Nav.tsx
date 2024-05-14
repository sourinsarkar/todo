import { Bars2Icon } from "@heroicons/react/24/outline";
import sourinmark from "../assets/images/sourinmark.svg"

function Nav() {
    return(
        <div className="flex items-center justify-between h-20 max-h-20 cuBox px-6 mt-10">
            <img src={sourinmark} alt="Sourin Icon" className="w-6 h-6" />
            <div className="px-3 py-1 bg-[#E9ECEF] rounded-full">
                <Bars2Icon className="w-6 h-6" />
            </div>
        </div>
    );
}

export default Nav;