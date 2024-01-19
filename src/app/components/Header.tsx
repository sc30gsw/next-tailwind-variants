import React, { FC } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const header = tv(
	{
		slots: {
			root: 'bg-red-300',
			container: 'max-w-3xl mx-auto bg-red-400 flex justify-between',
			logo: '',
			actions: 'flex gap-4',
			signUp: 'bg-green-500',
			signIn: 'bg-blue-500',
		},
		variants: {
			type: {
				fluid: {
					container: 'max-w-full',
				},
			},
			hidden: {
				true: {
					actions: 'hidden',
				},
				false: {
					actions: 'flex',
				},
			},
			color: {
				primary: {
					signUp:
						'bg-blue-500 hover:bg-blue-700 shadow-lg rounded-full text-white dark:bg-blue-900',
					signIn:
						'bg-blue-500 hover:bg-blue-700 shadow-lg rounded-full text-white dark:bg-blue-900',
				},
				secondary: {
					signUp:
						'bg-purple-500 hover:bg-purple-500 shadow-lg rounded-full text-white dark:bg-purple-900',
					signIn:
						'bg-purple-500 hover:bg-purple-500 shadow-lg rounded-full text-white dark:bg-purple-900',
				},
			},
		},
		// 複数slotに同じスタイルを当てられる
		compoundSlots: [
			{
				slots: ['signUp', 'signIn'],
				class: 'py-1 px-4',
			},
		],
	},
	{ responsiveVariants: ['sm'] },
)

type HeaderVariants = VariantProps<typeof header>

export const Header: FC<HeaderVariants> = ({ type, color }) => {
	const { root, container, logo, actions, signUp, signIn } = header({
		type,
		color,
		hidden: {
			initial: true,
			sm: false,
		},
	})
	return (
		<header className={root()}>
			<div className={container()}>
				<div className={logo()}>ロゴ</div>
				<div className={actions()}>
					<button type="button" className={signUp()}>
						新規登録
					</button>
					<button type="button" className={signIn()}>
						ログイン
					</button>
				</div>
			</div>
		</header>
	)
}
