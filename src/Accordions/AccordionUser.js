import { useState } from 'react'
import './Accordion.css'

function AccordionUser({ title, children }) {
    const [expand, setExpand] = useState(false)

    return (
        <div className={'accordion ' + (expand ? 'expand' : 'collapse')}>
            <p className="categoria" onClick={() => setExpand(!expand)}>
                {title}
            </p>
            {expand && children}
        </div>
    )
}

export default AccordionUser