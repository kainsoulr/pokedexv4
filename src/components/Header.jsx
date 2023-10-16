import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header id="header" className='container-header'>
				<Link to='/'>
					<img
						src={`../../pokedex-logo.png`}
						alt='Logo Pokedex'
						className='logo'
					/>
				</Link>
			</header>
    )
}