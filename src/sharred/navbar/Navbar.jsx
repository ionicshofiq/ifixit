import logoImage from '../../assets/logo.png';

const Navbar = () => {
	const navLinks = (
		<>
			<li>
				<a>HOME</a>
			</li>
			<li>
				<details>
					<summary>SERVICES</summary>
					<ul className='p-2'>
						<li>
							<a>iPhone Repair</a>
						</li>
						<li>
							<a>iPad Repair</a>
						</li>
						<li>
							<a>Mac Repair</a>
						</li>
						<li>
							<a>Apple Watch Repair</a>
						</li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>SHOP</summary>
					<ul className='p-2'>
						<li>
							<details>
								<summary>By Device</summary>
								<ul className='p-2'>
									<li>
										<a>iPhone</a>
									</li>
									<li>
										<a>iPad</a>
									</li>
									<li>
										<a>Macbook</a>
									</li>
									<li>
										<a>Apple Watch</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>By Category</summary>
								<ul className='p-2'>
									<li>
										<a>case & protection</a>
									</li>
									<li>
										<a>Display</a>
									</li>
									<li>
										<a>Battery</a>
									</li>
									<li>
										<a>Headphones & Speaker</a>
									</li>
									<li>
										<a>Power and Cables</a>
									</li>
									<li>
										<a>Mouse & keypad</a>
									</li>
									<li>
										<a>Wearables</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary>By Brands</summary>
								<ul className='p-2'>
									<li>
										<a>Apple</a>
									</li>
									<li>
										<a>Anker</a>
									</li>
									<li>
										<a>Baykron</a>
									</li>
									<li>
										<a>iFixit</a>
									</li>
									<li>
										<a>Mcdodo</a>
									</li>
									<li>
										<a>Aspor</a>
									</li>
									<li>
										<a>JBL</a>
									</li>
									<li>
										<a>UGREEN</a>
									</li>
									<li>
										<a>ACEFAST</a>
									</li>
									<li>
										<a>Zeblaze</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</details>
			</li>
			<li>
				<a>BLOG</a>
			</li>
			<li>
				<a>ABOUT</a>
			</li>
			<li>
				<a>CONTACT US</a>
			</li>
		</>
	);

	return (
		<div className='navbar bg-base-100 max-w-screen-xl mx-auto'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
					>
						{navLinks}
					</ul>
				</div>
				<a className=''>
					<img className='h-12' src={logoImage} />
				</a>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{navLinks}</ul>
			</div>
			<div className='navbar-end'>
				<a className='btn'>Button</a>
			</div>
		</div>
	);
};

export default Navbar;
