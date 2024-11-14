import { Button } from '@/components/ui/button'

const SkillButton = ({
    icon: Icon,
    color,
}: {
    icon: React.ElementType
    name: string
    color: string
}) => (
    <Button
        className="w-20 h-20"
        variant="outline"
        size="icon"
        style={
            {
                '--glow-color': color,
            } as React.CSSProperties
        }
    >
        <Icon
            className={`w-20 h-20 mb-2 transition-colors duration-200 group-hover:text-[var(--glow-color)]`}
        />
    </Button>
)

export default SkillButton
