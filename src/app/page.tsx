import { tv } from 'tailwind-variants'
import { Button } from './components/Button'
import { Card } from './components/Card'

const header = tv({
	slots: {
		root: 'bg-red-300',
		container: 'max-w-3xl mx-auto bg-red-400 flex justify-between',
		logo: '',
		actions: 'flex gap-4',
		signUp: 'bg-green-500',
		signIn: 'bg-blue-500',
	},
	compoundSlots: [
		{
			slots: ['signUp', 'signIn'],
			class: 'py-1 px-4',
		},
	],
})

const Home = () => {
	const { root, container, logo, actions, signUp, signIn } = header()
	return (
		<div>
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
			<main className="h-screen w-screen">
				<Button size="lg" />
				<Card />
			</main>
		</div>
	)
}

export default Home
