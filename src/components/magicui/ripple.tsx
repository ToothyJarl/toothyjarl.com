import React, { CSSProperties } from 'react'

interface RippleProps {
    mainCircleSize?: number
    mainCircleOpacity?: number
    numCircles?: number
    top?: number
    left?: number
}

const Ripple = React.memo(function Ripple({
    mainCircleSize = 210,
    mainCircleOpacity = 0.24,
    numCircles = 8,
    top = 0,
    left = 0
}: RippleProps) {
    return (
        <div
            className="absolute flex items-center justify-center [mask-image:linear-gradient(to_bottom,white,transparent)]"
            style={
                {
                    top: `${top}px`,
                    left: `${left}px`,
                    width: '100%',
                    height: '100%'
                } as CSSProperties
            }
        >
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 70
                const opacity = mainCircleOpacity - i * 0.03
                const animationDelay = `${i * 0.06}s`
                const borderStyle = i === numCircles - 1 ? 'dashed' : 'solid'
                const borderOpacity = 5 + i * 5

                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:${i}]`}
                        style={
                            {
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity,
                                animationDelay,
                                borderStyle,
                                borderWidth: '1px',
                                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%) scale(1)'
                            } as CSSProperties
                        }
                    />
                )
            })}
        </div>
    )
})

Ripple.displayName = 'Ripple'

export default Ripple
