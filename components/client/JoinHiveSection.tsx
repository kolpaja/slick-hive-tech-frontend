import Image from 'next/image';
import React from 'react';

const JoinHiveSection = () => {
	return (
		<section className='my-16 flex flex-col items-center justify-center text-center gap-8 relative overflow-hidden py-20 px-6 rounded-3xl bg-gradient-to-b from-yellow-300/20 via-amber-500/10 to-black'>
			{/* subtle glow */}
			<div className='absolute w-[400px] h-[400px] bg-yellow-400/20 blur-3xl rounded-full -top-40' />
			<div className='absolute w-[300px] h-[300px] bg-amber-500/20 blur-3xl rounded-full -bottom-40' />

			<h1 className='text-4xl md:text-5xl font-bold font-poppins text-yellow-600 z-10'>Slick Hive Tech is building...</h1>

			<p className='text-gray-500 max-w-2xl text-lg z-10'>
				We are building intelligent bee-inspired systems — automated workflows, smart logistics, and digital ecosystems that move like a hive.
			</p>

			<Image src='/svg/beekeeping.svg' width={520} height={520} alt='bee keeping at slickHiveTech' className='z-10' />

			<div className='flex gap-4 z-10'>
				<button className='bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition'>Join the Hive</button>

				<button className='border border-yellow-400/40 text-yellow-300 px-6 py-3 rounded-xl hover:bg-yellow-400/10 transition'>Notify Me</button>
			</div>
		</section>
	);
};

export default JoinHiveSection;
