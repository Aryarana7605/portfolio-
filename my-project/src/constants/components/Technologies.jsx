import {RiReactjsLine} from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

const Technologies = () => {
  return <div>
    <div className="border-b border-neutral-800  pb-24">
    <h1 className="my-20 text-center text-4xl">Technologies</h1>
    <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostman className="text-7xl text-orange-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithubSquare className="text-7xl text-white"/>
        </div>
    </div>
    </div>
  </div>
}

export default Technologies
