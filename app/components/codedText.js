import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function randChar() {

    const chars2 = "♫♬♪♩_";
    const c = chars2[Math.floor(Math.random() * chars2.length)];
    return c;
}

const CodedText = ({ text, text2, fromRight, className, href, onClick }) => {
    const textRef = useRef(null);
    const containerRef = useRef(null);

    const colors = {
        startColor: '#2dd4bf',
        startBackground: 'transparent',
        endColor: '#f9fafb',
    };

    useEffect(() => {
        const t = textRef.current;
        const container = containerRef.current;
        if (!t || !container) return;

        const textString = typeof text === 'string' ? text : '';
        const text2String = typeof text2 === 'string' ? text2 : '';

        const arr1 = textString.length > 0 ? textString.split('') : text2String.split('');
        const arr2 = arr1.map(() => randChar());


        const computedStyle = window.getComputedStyle(t);
        const width = t.offsetWidth;
        const height = t.offsetHeight;

        gsap.set(container, {
            width: width,
            height: height,
            display: 'inline-block',
        });


        gsap.set(t, {
            color: colors.endColor,
            background: 'transparent',
            width: 'auto',
            position: 'relative',
        });

        const handlePointerOver = () => {
            const tl = gsap.timeline();
            let step = 0;

            tl.fromTo(
                t,
                {
                    innerHTML: arr2.join(''),
                    color: colors.startColor,
                    background: colors.startBackground,
                },
                {
                    duration: arr1.length / 12,
                    ease: 'power4.in',
                    delay: 0.1,
                    color: colors.endColor,
                    background: 'transparent',
                    onUpdate: () => {
                        const p = Math.floor(tl.progress() * arr1.length);
                        if (step !== p) {
                            step = p;
                            arr1.forEach((_, i) => (arr2[i] = randChar()));
                            let pt1 = arr1.join('').substring(0, p);
                            let pt2 = arr2.join('').substring(0, arr2.length - p);
                            if (fromRight) {
                                pt1 = arr2.join('').substring(0, arr2.length - p);
                                pt2 = arr1.join('').substring(arr1.length - p);
                            }
                            t.innerHTML = pt1 + pt2;
                        }
                    }
                }
            );
        };

        container.addEventListener('pointerover', handlePointerOver);

        return () => {
            container.removeEventListener('pointerover', handlePointerOver);
        };
    }, [text, text2, fromRight]);

    return (
        <span
            ref={containerRef}
            className={`codedText-container inline-block`}
            onClick={onClick}
        >
            <span
                ref={textRef}
                className={`codedText ${fromRight ? 'fromRight' : ''} ${className} 
            transition-colors`}
                style={{ color: colors.endColor }}
            >
                {text || text2}
            </span>
        </span>
    );
};

export default CodedText;