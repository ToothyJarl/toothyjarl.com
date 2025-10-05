import { useEffect, useMemo, useState } from 'react'

type LoaderProps = {
    name?: string
    duration?: number
    onFinish?: () => void
}

export default function Loader({ name = 'toothyjarl', duration = 1600, onFinish }: LoaderProps) {
    const letters = useMemo(() => name.split(''), [name])
    const [progress, setProgress] = useState(0)
    const [target, setTarget] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        let raf = 0
        let mounted = true
        const tick = () => {
            setProgress((prev) => {
                const next = prev + (target - prev) * 0.15
                return Math.min(1, next)
            })
            if (mounted) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => {
            mounted = false
            cancelAnimationFrame(raf)
        }
    }, [target])

    useEffect(() => {
        let mounted = true
        let imgLoaded = 0
        const imgs = Array.from(document.images) as HTMLImageElement[]
        const imgTotal = imgs.length

        const updateTarget = () => {
            const imgProgress = imgTotal ? imgLoaded / imgTotal : 1
            let t = imgProgress * 0.7
            setTarget((prev) => Math.max(prev, t))
        }

        imgs.forEach((img) => {
            if (img.complete) return
            const handle = () => {
                imgLoaded++
                updateTarget()
                img.removeEventListener('load', handle)
                img.removeEventListener('error', handle)
            }
            img.addEventListener('load', handle)
            img.addEventListener('error', handle)
        })
        updateTarget()

        if ((document as any).fonts?.ready) {
            ;(document as any).fonts.ready.then(() => {
                if (mounted) setTarget((prev) => Math.max(prev, 0.95))
            })
        }

        const onLoad = () => setTarget(1)
        if (document.readyState === 'complete') onLoad()
        else window.addEventListener('load', onLoad)

        if (imgTotal === 0) {
            const start = performance.now()
            const dur = Math.max(200, duration)
            const fallback = (ts: number) => {
                const p = Math.min(1, (ts - start) / dur)
                setTarget((prev) => Math.max(prev, p))
                if (p < 1) requestAnimationFrame(fallback)
            }
            requestAnimationFrame(fallback)
        }

        return () => {
            mounted = false
            window.removeEventListener('load', onLoad)
        }
    }, [duration])

    useEffect(() => {
        if (progress >= 0.995) {
            const timer = setTimeout(() => {
                setVisible(false)
                onFinish?.()
            }, 250)
            return () => clearTimeout(timer)
        }
    }, [progress, onFinish])

    if (!visible) return null
    const revealed = Math.floor(progress * letters.length)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
            <div className="text-center p-6">
                {/* Name */}
                <div className="text-xl font-semibold tracking-tight mb-4 text-muted-foreground">
                    {letters.map((l, i) => (
                        <span
                            key={i}
                            className={`inline-block transition-opacity duration-150 ${
                                i < revealed ? 'opacity-100' : 'opacity-20'
                            }`}
                        >
                            {i < revealed ? l : ''}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
