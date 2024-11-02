import React, { useState } from 'react';

function InlineToCSS() {
    const [inlineCSS, setInlineCSS] = useState('');
    const [cssOutput, setCssOutput] = useState('');

    const convertInlineCSSToCSS = (inlineCssString) => {
        try {
            const normalizedCSS = inlineCssString
                .replace(/'/g, '"')              
                .replace(/([a-zA-Z0-9]+):/g, '"$1":'); 

        
            const inlineCSSObj = JSON.parse(normalizedCSS);

       
            const cssRules = Object.keys(inlineCSSObj)
                .map((property) => {
                    const cssProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
                    return `  ${cssProperty}: ${inlineCSSObj[property]};`;
                })
                .join('\n');

            return `.my-class {\n${cssRules}\n}`;
        } catch (error) {
            return 'Error: Invalid inline CSS object format';
        }
    };

    const handleConvert = () => {
        const result = convertInlineCSSToCSS(inlineCSS);
        setCssOutput(result);
    };

    return (
        <div style={{ width: '100vw', boxSizing: 'border-box', overflow: 'hidden' }}>
            <h2>Inline CSS to Regular CSS Converter</h2>

            <div style={{ display: 'flex', gap: '80px', width: '100vw', overflow: 'hidden', justifyContent: 'center   ' }}>

                <textarea
                    placeholder="Enter inline CSS object (e.g. { color: 'red', fontSize: '16px' })"
                    value={inlineCSS}
                    onChange={(e) => {
                        setCssOutput('')
                        setInlineCSS(e.target.value)}}
                    style={{
                        width: '35%',
                        minHeight: '50vh',
                        padding: '10px',
                        fontSize: '16px',
                        fontFamily: 'monospace',
                        lineHeight: '1.5',
                        backgroundColor: '#282c34',
                        color: '#61dafb',
                        border: 'none',
                        borderRadius: '5px',
                        overflow: 'auto',
                        resize: 'none',
                    }}
                />

                <div
                    style={{
                        width: '35%',
                        minHeight: '50vh',
                        padding: '10px',
                        fontSize: '16px',
                        lineHeight: '1.5',
                        backgroundColor: '#202020',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        overflow: 'auto',
                        resize: 'none',
                    }}
                ><code>{ !cssOutput ? inlineCSS != '' ? "Press the Button to see Output": "Input field is Empty. Please type your inline query." : cssOutput}</code></div>
                <button style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} onClick={ () => {handleConvert()}}>Convert</button>

            </div>
        </div>
    );
}

export default InlineToCSS;


