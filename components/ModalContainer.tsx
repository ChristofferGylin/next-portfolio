import { ReactNode } from "react"

const ModalContainer = ({children}: { children: ReactNode}) => {

    if (!children) {
        return <></>
    }

    return (
        <div className="fixed w-screen h-screen flex bg-blue-700">
            {children}
        </div>
    )
}

export default ModalContainer