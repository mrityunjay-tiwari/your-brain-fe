interface propsTypes {
    height: number,
    width: number
}

export function Logo({height,width} :propsTypes) {
    return <div>
        <img onClick={() => {window.location.reload()}} src="https://ik.imagekit.io/mrityunjay/your%20brain%20(3).png?updatedAt=1751972742652" height={height} width={width}/>
    </div>
}