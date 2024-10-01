import React from 'react'
import clsx from 'clsx'

export function Logo({
                         invert = false,
                         className = '',
                     }: React.ComponentPropsWithoutRef<'svg'> & {
    invert?: boolean

}) {
    return (
        <div className={'font-font-logo text-3xl md:text-4xl'}>
            <h1 className={clsx('font-logo font-black', className, invert ? ' text-teal-900' : 'text-slate-900', )}>Clone<span className={clsx(invert ? 'text-teal-500' : 'text-teal-500')}>Flesh</span></h1>
        </div>
    )
}
