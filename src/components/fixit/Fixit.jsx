import { FaChevronRight } from 'react-icons/fa';
import fixit_image from '../../assets/fixit_img.webp';

const Fixit = () => {
	return (
		<div className='flex justify-center items-center py-4'>
			<div>
				<img src={fixit_image} alt='' />
			</div>
			<div className='text-right flex flex-col gap-4'>
				<h1 className='text-5xl font-semibold'>
					We Can Fix it Almost <br /> As Fast As You Can Break It
				</h1>
				<div className='w-32 h-2 bg-[#F96331]'></div>
				<p>
					To solve any kind of problem-related to your Apple devices,
					we have all <br /> kinds of modern technologies, a highly
					developed lab, and skilled <br /> technicians.
				</p>
				<button className='bg-[#F96331] rounded-3xl w-32 text-white p-3'>
					About Us <FaChevronRight />{' '}
				</button>
			</div>
		</div>
	);
};

export default Fixit;
