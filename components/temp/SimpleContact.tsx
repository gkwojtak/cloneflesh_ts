import clsx from 'clsx'
import React from "react";
import Link from "next/link";

function Office({
                    name,
                    children,
                    invert = false,
                }: {
    name: string
    children: React.ReactNode
    invert?: boolean
}) {
    return (
        <address
            className={clsx(
                'text-sm not-italic space-y-2',
                invert ? 'text-teal-800' : 'text-neutral-600',
            )}
        >
            <strong className={invert ? 'text-teal-800' : 'text-neutral-950'}>
                {name}
            </strong>
            <br />
            <Link href={`mailto:${children}`}>{children}</Link>
        </address>
    )
}

export function SimpleContact({
                            invert = false,
                            ...props
                        }: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
    return (
        <ul role="list" {...props}>
            <li>
                <Office name="Influencers" invert={invert}>
                    influ@cloneflesh.com
                </Office>
            </li>
            <li>
                <Office name="Shopping" invert={invert}>
                    shop@cloneflesh.com
                </Office>
            </li>
        </ul>
    )
}
