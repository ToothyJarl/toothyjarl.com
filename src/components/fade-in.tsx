import React, { useEffect, useRef, ReactNode } from 'react'

type FadeInProps = {
    children: ReactNode
    duration?: number
    distance?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    delay?: number
    className?: string
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    duration = 500,
    distance = 10,
    direction = 'up',
    delay = 0,
    className = '',
}) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (element) {
            // Reset the initial state
            element.style.opacity = '0'
            element.style.transform = getInitialTransform()

            // Force a reflow
            void element.offsetHeight

            // Set up the transition
            element.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`

            // Trigger the animation in the next frame
            requestAnimationFrame(() => {
                element.style.opacity = '1'
                element.style.transform = 'translate(0, 0)'
            })
        }
    }, [duration, delay, direction, distance])

    const getInitialTransform = (): string => {
        switch (direction) {
            case 'up':
                return `translateY(${distance}px)`
            case 'down':
                return `translateY(-${distance}px)`
            case 'left':
                return `translateX(${distance}px)`
            case 'right':
                return `translateX(-${distance}px)`
            default:
                return `translateY(${distance}px)`
        }
    }

    return (
        <div
            ref={ref}
            style={{
                opacity: 0,
                transform: getInitialTransform(),
            }}
            className={className}
        >
            {children}
        </div>
    )
}

export default FadeIn
