import logo from '../../logo.svg';

export const Navbar = () => {
	return (
		<header className='bg-cyan-800 flex flex-wrap justify-between items-center shadow-lg shadow-primary-content'>
			<p className='font-bold text-5xl px-10'>Todo</p>
			<img src={logo} className='App-logo' alt='logo' />
		</header>
	);
};
