import "./Header.css"

interface HeaderProps {
	changeThemeButton: () => void
}

function Header({ changeThemeButton }: HeaderProps) {
	return (
		<div className="header-component">
			<div className="left-header">
				<h1>Soumyadeep Mondal</h1>
			</div>
			<div className="right-header">
				<button onClick={() => changeThemeButton}>Toggle Dark</button>
			</div>
		</div>
	)
}

export default Header
