import React, { FC } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv(
	{
		base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
		variants: {
			color: {
				primary: 'bg-blue-500 hover:bg-blue-700',
				secondary: 'bg-purple-500 hover:bg-purple-700',
				success: 'bg-green-500 hover:bg-green-700',
				error: 'bg-red-500 hover:bg-red-500',
			},
			size: {
				sm: 'text-sm',
				md: 'text-base',
				lg: 'px-4 py-3 text-lg',
			},
		},
		compoundVariants: [
			{
				size: ['sm', 'md'],
				class: 'px-3 py-1',
			},
		],
		defaultVariants: {
			size: 'md',
			color: 'primary',
		},
	},
	{ responsiveVariants: ['sm', 'md', 'lg', 'xl'] },
)

const buyButton = tv({
	extend: button,
	base: [
		'text-sm',
		'text-white',
		'rounded-lg',
		'shadow-lg',
		'uppercase',
		'tracking-wider',
		'bg-blue-500',
		'hover:bg-blue-600',
		'shadow-blue-500/50',
		'dark:bg-blue-500',
		'dark:hover:bg-blue-600',
	],
})

type ButtonProps = VariantProps<typeof button>

export const Button: FC<ButtonProps> = (props) => {
	return (
		<div className="flex items-center gap-3">
			<button
				type="button"
				className={button({
					color: {
						initial: 'primary',
						sm: 'secondary',
						lg: 'success',
						xl: 'error',
					},
					// class or classNameでオーバーライド可能
					class: 'h-20 shadow-lg',
					size: props.size,
				})}
			>
				Click Me
			</button>
			<button type="button" className={buyButton()}>
				Buy button
			</button>
		</div>
	)
}
