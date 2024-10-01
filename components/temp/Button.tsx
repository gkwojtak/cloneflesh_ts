import Link from 'next/link'
import clsx from 'clsx'
import React from "react";

type ButtonProps = {
    invert?: boolean
} & (
    | React.ComponentPropsWithoutRef<typeof Link>
    | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
    )

export function Button({
                           invert = false,
                           className,
                           children,
                           ...props
                       }: ButtonProps) {
    className = clsx(
        className,
        'inline-flex rounded-full px-6 py-3 text-sm font-medium transition',
        invert
            ? 'bg-slate-800 text-white hover:bg-slate-900'
            : 'bg-slate-800 text-white hover:bg-slate-900',
    )

    let inner = <span className="relative top-px">{children}</span>

    if (typeof props.href === 'undefined') {
        return (
            <button className={className} {...props}>
                {inner}
            </button>
        )
    }

    return (
        <Link className={className} {...props}>
            {inner}
        </Link>
    )
}
