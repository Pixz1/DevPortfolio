import './Header.css'

export default function Header() {
	return (
		<div className='navbar'>
			<nav>
				<a href='#'>
					<h2>davo.dev</h2>
				</a>
				<ul>
					<li><a href='#'>Home</a></li>
					<li><a href='#'>About</a></li>
					<li><a href='#'>Projects</a></li>
					<li><a href='#'>Contact</a></li>
				</ul>
			</nav>
		</div>
	)
}