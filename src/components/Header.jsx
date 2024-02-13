import './Header.css'

export default function Header() {
	return (
		<div className='navbar'>
			<nav>
				<a href='#'>
					<h2>davo.dev</h2>
				</a>
				<ul className='nav-links'>
					<li><a href='#' className='nav-link'>Home</a></li>
					<li><a href='#' className='nav-link'>About</a></li>
					<li><a href='#' className='nav-link'>Projects</a></li>
					<li><a href='#' className='nav-link'>Contact</a></li>
				</ul>
			</nav>
		</div>
	)
}