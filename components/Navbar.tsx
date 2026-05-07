import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<header className='fixed top-0 left-0 right-0 w-full px-6 z-50 '>
			<nav className='w-full border flex justify-between items-center border-yellow-300 max-w-7xl px-4 py-2 rounded-xl my-2  mx-auto backdrop-blur-lg bg-white/60 '>
				<Link href={'/'} className='flex flex-row gap-2 justify-start items-center'>
					<div className=' bg-white w-fit p-1 rounded-full'>
						<Image src='/png/honeycomb-melting.png' width={36} height={36} alt='slick hive tech icon' />
					</div>
					<h1 className='text-stone-700 font-roboto pt-1 leading-4 text-center font-bold text-xl'>
						Slick Hive
						<br />
						Tech
					</h1>
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
