import { useState, useRef } from 'react'
import useOutsideAlerter from '../Hooks/useOutsideAlerter'
import './Accordion.css'

function Accordion({ title, children }) {
    const [expand, setExpand] = useState(false)
    const accordionRef = useRef(null)
    useOutsideAlerter(accordionRef, expand, setExpand)

    return (
        <div ref={accordionRef} className={'accordion ' + (expand ? 'expand' : 'collapse')}>
            <p className="categoria" onClick={() => setExpand(!expand)}>
                {title}
            </p>
            {expand && children}
        </div>
    )
}

export default Accordion