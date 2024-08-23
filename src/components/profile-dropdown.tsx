import { ReactNode, useState, useEffect } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Github, Twitter, Mail } from 'lucide-react'

interface ProfileDropdownProps {
    children: ReactNode
}

function ProfileDropdown({ children }: ProfileDropdownProps) {
    const [side, setSide] = useState<'left' | 'top'>('left')

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) {
                setSide('top')
            } else {
                setSide('left')
            }
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent side={side} sideOffset={15} className="w-56">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <a
                            href="https://github.com/ToothyJarl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center w-full"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            <span className="mr-2">GitHub</span>
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a
                            href="https://twitter.com/ToothyJarl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center w-full"
                        >
                            <Twitter className="mr-2 h-4 w-4" />
                            <span className="mr-2">Twitter</span>
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a href="mailto:aidanhgill@gmail.com" className="flex items-center w-full">
                            <Mail className="mr-2 h-4 w-4" />
                            <span className="mr-2">Contact</span>
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown
