interface propsType {
    siz : Number
}

export function BrainIcon(props : propsType) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-${props.siz}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5a2.25 2.25 0 00-4.5 0v2.25A2.25 2.25 0 003 9a2.25 2.25 0 001.5 2.121v.258A2.25 2.25 0 003 13.5a2.25 2.25 0 001.5 2.121V18a2.25 2.25 0 004.5 0V4.5zm6 0a2.25 2.25 0 014.5 0v2.25A2.25 2.25 0 0121 9a2.25 2.25 0 01-1.5 2.121v.258A2.25 2.25 0 0121 13.5a2.25 2.25 0 01-1.5 2.121V18a2.25 2.25 0 01-4.5 0V4.5zM13.5 8.25l3-1.5m-3 4.5l3 1.5m-3 4.5l3 1.5" />
</svg>

}