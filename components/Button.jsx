import Link from "next/link";

const Button = ({ link, children }) => {

    const btn = <button className="flex justify-center items-center w-full md:w-auto bg-slate-700 hover:bg-slate-600 text-blue-200 hover:text-blue-100 py-4 md:py-2 px-6 rounded-xl text-lg border border-slate-500 transition duration-150">{children}</button>;

    if (link) {

        return <Link className="md:inline-block" href={link}>{btn}</Link>

    }

    return btn;

}

export default Button;