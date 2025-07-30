interface propsTypes {
    height?: number,
    width?: number,
    height2?: number,
    width2?: number
}

export function Logo({height,width, height2, width2} :propsTypes) {
    return <div>
        <div className="hidden sm:inline"><img onClick={() => {window.location.reload()}} src="https://ik.imagekit.io/mrityunjay/your%20brain%20(3).png?updatedAt=1751972742652" height={height} width={width}/></div>
        <div className="md:hidden lg:hidden"><img onClick={() => {window.location.reload()}} src="https://ik.imagekit.io/mrityunjay/your%20brain%20(5).png?updatedAt=1753872556947" height={height2} width={width2}/></div>
    </div>
}