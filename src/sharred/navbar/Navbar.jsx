import { FaChevronDown } from 'react-icons/fa';
import logoImage from '../../assets/logo.png';

const Navbar = () => {
	const navLinks = (
		<>
			<li>
				<a>HOME</a>
			</li>
			<li className='group relative'>
				<a className='cursor-pointer'>
					SERVICES
					<FaChevronDown />
				</a>
				<ul className='p-2 w-56 rounded-none group-hover:block absolute top-8 hidden'>
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
			</li>
			<li className='group/outer relative'>
				<a className='cursor-pointer'>
					SHOP
					<FaChevronDown />
				</a>
				<ul className='p-2 group-hover/outer:block hidden absolute top-8 w-56'>
					<li className='group/inner relative'>
						<a className='cursor-pointer flex justify-between'>
							By Device
							<FaChevronDown />
						</a>
						<ul className='p-2 group-hover/inner:block hidden absolute left-full top-0 w-56'>
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
					</li>
					<li className='group/inner relative'>
						<a className='cursor-pointer flex justify-between'>
							By Category <FaChevronDown />
						</a>
						<ul className='p-2 group-hover/inner:block hidden absolute left-full top-0 w-56'>
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
					</li>
					<li className='group/inner relative'>
						<a className='cursor-pointer flex justify-between'>
							By Brands
							<FaChevronDown />
						</a>
						<ul className='p-2 group-hover/inner:block hidden absolute left-full top-0 w-56'>
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
					</li>
				</ul>
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
					<div tabIndex={0} role='button' className='lg:hidden'>
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
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52'
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
