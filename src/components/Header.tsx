import "./Header.css"

interface HeaderProps {
	changeTheme: () => void
}

function Header({ changeTheme }: HeaderProps) {
	return (
		<div className="header-component">
			<div className="left-header">
				<h1>Soumyadeep Mondal</h1>
			</div>
			<div className="right-header">
				<button onClick={() => changeTheme()}>Toggle Dark</button>
			</div>
		</div>
	)
}

export default Header
