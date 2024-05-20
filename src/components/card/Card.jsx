import cardBackground from '../../assets/cardBackground.jpg';
import card1 from '../../assets/card1.png';

const Card = () => {
	return (
		<div className='flex gap-3 justify-center items-center py-10 relative'>
			<div className='w-44 hover:top-2 hover:absolute rounded-md border-slate-100 border-2 h-56 my-12 shadow-xl flex flex-col justify-between py-8 items-center '>
				<div
					className='w-24 cardBackground'
					style={{ backgroundImage: `url(${cardBackground})` }}
				>
					<img className='p-3' src={card1} alt='' />
				</div>
				<div className='font-bold text-lg'>iPhone Repair</div>
			</div>
			{/* <div className='w-44 hover:top-2 hover:absolute rounded-md border-slate-100 border-2 h-56 my-12 shadow-xl flex flex-col justify-between py-8 items-center '>
				<div
					className='w-24 cardBackground'
					style={{ backgroundImage: `url(${cardBackground})` }}
				>
					<img className='p-3' src={card1} alt='' />
				</div>
				<div className='font-bold text-lg'>iPhone Repair</div>
			</div>
			<div className='w-44 hover:top-2 hover:absolute rounded-md border-slate-100 border-2 h-56 my-12 shadow-xl flex flex-col justify-between py-8 items-center '>
				<div
					className='w-24 cardBackground'
					style={{ backgroundImage: `url(${cardBackground})` }}
				>
					<img className='p-3' src={card1} alt='' />
				</div>
				<div className='font-bold text-lg'>iPhone Repair</div>
			</div>
			<div className='w-44 hover:top-2 hover:absolute rounded-md border-slate-100 border-2 h-56 my-12 shadow-xl flex flex-col justify-between py-8 items-center '>
				<div
					className='w-24 cardBackground'
					style={{ backgroundImage: `url(${cardBackground})` }}
				>
					<img className='p-3' src={card1} alt='' />
				</div>
				<div className='font-bold text-lg'>iPhone Repair</div>
			</div>
			<div className='w-44 hover:top-2 hover:absolute rounded-md border-slate-100 border-2 h-56 my-12 shadow-xl flex flex-col justify-between py-8 items-center '>
				<div
					className='w-24 cardBackground'
					style={{ backgroundImage: `url(${cardBackground})` }}
				>
					<img className='p-3' src={card1} alt='' />
				</div>
				<div className='font-bold text-lg'>iPhone Repair</div>
			</div>
			<div className='w-44 hover:top-2 hover:absolute rounded-md border-slate-100 border-2 h-56 my-12 shadow-xl flex flex-col justify-between py-8 items-center '>
				<div
					className='w-24 cardBackground'
					style={{ backgroundImage: `url(${cardBackground})` }}
				>
					<img className='p-3' src={card1} alt='' />
				</div>
				<div className='font-bold text-lg'>iPhone Repair</div>
			</div> */}
		</div>
	);
};

export default Card;
