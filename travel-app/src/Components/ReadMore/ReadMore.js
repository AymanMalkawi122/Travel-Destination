import { useState } from 'react';

function ReadMore(props) {
    let [wantsToReadMore, setReadMore] = useState(true);
    let readMoreToggele =()=>{
        setReadMore(!wantsToReadMore);
    }
    let finalText = wantsToReadMore ? props.text.slice(0, 300) : props.text;
    let read = wantsToReadMore ? " read more" : " read less";
    return (
        <>
            <p>{finalText}
                <span onClick={readMoreToggele}>{read}</span>
            </p>
        </>
    )
}

export default ReadMore;