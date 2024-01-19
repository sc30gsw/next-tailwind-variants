import { Button } from './components/Button'
import { Card } from './components/Card'
import { Header } from './components/Header'

const Home = () => {
	return (
		<div>
			<Header color="secondary" />
			<main className="h-screen w-screen">
				<Button size="lg" />
				<Card />
			</main>
		</div>
	)
}

export default Home
