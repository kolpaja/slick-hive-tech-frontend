import JoinHiveSection from '@/components/client/JoinHiveSection';
import AppsSection from '@/components/server/AppsSection';
import DesktopAutomationSection from '@/components/server/DesktopAutomationSection';
import { SLICK_HIVE_TECH } from '@/constants';
import { hero } from '@/constants/hive';
import { tech } from '@/constants/tech';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
	return (
		<>
			<section
				className='bg-cover pb-44 px-6 py-10 '
				style={{
					backgroundImage: "url('/bg/hive-bg.jpg')",
				}}
			>
				<div className='flex justify-center items-center flex-col gap-4 max-w-7xl w-full  mx-auto h-full bg-cover relative'>
					<div className='w-full flex flex-col md:flex-row items-center gap-6 justify-between md:gap-10 p-4'>
						<div className=' flex flex-col gap-4'>
							<h1 className='text-4xl md:text-6xl font-heading font-bold text-white font-po text-start drop-shadow-2xl max-w-[600px]'>{hero.slogan1}</h1>
							<p className='w-full md:w-[600px] text-xl italic md:text-xl text-slate-900 text-start  max-w-2xl shadow-xl p-4 rounded-2xl relative'>
								<Image src='/png/bee.png' className='bg-cover absolute -top-2 -left-6' alt='bee hive at @slickHiveTech' width={44} height={44} />
								{hero.slogan2}
							</p>
							<Link
								href={SLICK_HIVE_TECH.myWhatsAppURL}
								target='_blank'
								className='backdrop-blur-md text-2xl bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/30 max-w-[320px] hover:cursor-pointer hover:scale-105
						
						'
							>
								{hero.cta1}
							</Link>
						</div>

						<div>
							<Image src={'/svg/hero.svg'} className='' width={500} height={500} alt='slick hive animation' />
						</div>
					</div>
				</div>
			</section>

			<section className='max-w-7xl mx-auto w-full flex flex-col gap-10 my-10  justify-center items-center relative -top-40'>
				<h1 className='text-center w-fit  font-poppins text-3xl md:text-4xl text-slate-100 uppercase font-bold relative '>
					From Idea to Impact
					<Image src='/png/smiling.png' className='bg-cover absolute -top-14 right-[145px]' alt='bee hive at @slickHiveTech' width={60} height={60} />
				</h1>
				<div className='flex flex-col md:flex-row justify-around items-center gap-8 w-full mx-auto'>
					{tech.steps.map((step) => {
						return (
							<div
								key={step.key}
								className='w-[300px] h-fit px-6 py-8 rounded-2xl border backdrop-blur-lg bg-white/20 shadow-xl flex flex-col justify-center items-center gap-4 transition-all duration-300 hover:bg-white/20 border-yellow-200'
							>
								<div className='ring ring-amber-400	 bg-yellow-100 w-[80px] h-[80px] rounded-full flex justify-center items-center shadow-md shadow-amber-300'>
									<Image src={step.icon} className='w-11 h-11' width={44} height={44} alt={step.title} />
								</div>
								<h2 className='text-2xl text-amber-400 font-bold'>{step.title}</h2>
								<p className='text-base font-light leading-snug tracking-wide text-gray-600'>{step.desc}</p>
							</div>
						);
					})}
				</div>
			</section>

			<section className='max-w-7xl w-full  mx-auto '>
				<AppsSection />

				<DesktopAutomationSection />

				<JoinHiveSection />
			</section>
		</>
	);
};

export default HomePage;
