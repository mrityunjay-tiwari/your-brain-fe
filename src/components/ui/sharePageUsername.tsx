interface propTypes {
    username: string,
    text: string
}

export function Username({username,text}: propTypes){
    return <div>
        <h1 className="text-xl md:text-2xl font-light leading-snug"><span className="font-medium tracking-tight text-gray-900"> {username} </span> <span className="opacity-80 italic tracking-wide text-gray-700"> {text} </span> </h1>
    </div>
}