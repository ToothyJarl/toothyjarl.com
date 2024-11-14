import React, { useEffect, useRef, ReactNode } from 'react'

type FadeInProps = {
    children: ReactNode
    duration?: number
    distance?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    delay?: number
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    duration = 500,
    distance = 10,
    direction = 'up',
    delay = 0,
}) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (element) {
            element.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`
            element.style.opacity = '1'
            element.style.transform = 'translate(0, 0)'

            // Retriggers fade in on component mount
            void element.offsetHeight
        }
    }, [duration, delay])

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
        >
            {children}
        </div>
    )
}

export default FadeIn
