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

type ButtonProps = VariantProps<typeof button>

export const Button: FC<ButtonProps> = (props) => {
	return (
		<button
			type="button"
			className={button({
				color: {
					initial: 'primary',
					sm: 'secondary',
					lg: 'success',
					xl: 'error',
				},
				size: props.size,
			})}
		>
			Click Me
		</button>
	)
}
