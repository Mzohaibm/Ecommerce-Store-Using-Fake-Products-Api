import React from 'react'
import { RotatingLines } from "react-loader-spinner"
const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center  rounded-lg shadow-lg">
                <RotatingLines
                    height="150"
                    width="150"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                />
            </div>
        </div>

    )
}

export default Loader