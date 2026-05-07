import { SLICK_HIVE_TECH } from '@/constants';
import { getAutoApps } from '@/lib/automation';
import { Auto } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiCpu, FiCheckCircle, FiLayers, FiMonitor, FiDatabase, FiZap, FiShield, FiRefreshCw, FiArrowRight } from 'react-icons/fi';

const features = [
	'Automated form filling',
	'Smart field validation',
	'Multi-step workflow execution',
	'Keyboard & mouse automation',
	'Excel & document parsing',
	'Data synchronization',
	'Error detection & retry system',
	'Batch processing',
];

const capabilities = [
	'Native desktop interaction',
	'OCR-assisted workflows',
	'Human interaction simulation',
	'Cross-application automation',
	'Legacy software automation',
];

const tech = ['Electron', 'Nut.js', 'Node.js', 'OCR Engine', 'Workflow Queue', 'React.js', 'Vite.js'];

const DesktopAutomationSection = async () => {
	const res = await getAutoApps({
		page: 1,
		pageSize: 10,
	});

	const apps: Auto[] = res?.data || [];

	if (!apps.length) {
		return (
			<section className='py-20'>
				<div className='container mx-auto'>
					<p>No apps found.</p>
				</div>
			</section>
		);
	}

	const currentAuto = apps[0];

	return (
		<section className='space-y-10'>
			{/* HERO IMAGE */}
			<div className='relative w-full min-h-[70vh] overflow-hidden rounded-3xl'>
				<Image alt='automation' fill priority className='object-cover' src={currentAuto.cover?.formats?.medium?.url ?? currentAuto.cover?.url} />

				{/* overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80' />

				{/* content */}
				<div className='relative z-10 max-w-7xl mx-auto h-[70vh] px-6 flex flex-col justify-center'>
					<p className='text-orange-300 uppercase tracking-[0.3em] text-sm mb-4'>Automation</p>

					<h1 className='text-white text-5xl md:text-7xl font-bold max-w-4xl leading-tight'>Repetitive Workflows Automated</h1>

					<p className='mt-6 text-white/80 text-lg max-w-2xl'>Custom systems, internal tools and operational workflow automation for modern businesses.</p>
				</div>
			</div>

			<div className='flex flex-col gap-6 items-start w-full'>
				<section className='relative overflow-hidden bg-black rounded-2xl py-24 text-white'>
					{/* Glow */}
					<div className='absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl' />

					<div className='relative mx-auto max-w-7xl px-6'>
						{/* Hero */}
						<div className='grid items-center gap-16 lg:grid-cols-2'>
							{/* Left */}
							<div>
								<div className='mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur'>
									<FiCpu />
									Enterprise Automation Platform
								</div>

								<h2 className='max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl'>
									Automate
									<span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'> repetitive workflows</span> at scale
								</h2>

								<p className='mt-6 max-w-2xl text-lg leading-8 text-zinc-400'>
									Intelligent desktop automation platform built for enterprise workflows, legacy systems, form submissions, OCR processing, and large-scale task
									execution.
								</p>

								{/* Stats */}
								<div className='mt-10 grid grid-cols-3 gap-4'>
									<div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur'>
										<div className='text-3xl font-black text-cyan-400'>90%</div>
										<div className='mt-1 text-sm text-zinc-400'>Time Reduction</div>
									</div>

									<div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur'>
										<div className='text-3xl font-black text-cyan-400'>100K+</div>
										<div className='mt-1 text-sm text-zinc-400'>Automated Tasks</div>
									</div>

									<div className='rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur'>
										<div className='text-3xl font-black text-cyan-400'>24/7</div>
										<div className='mt-1 text-sm text-zinc-400'>Workflow Execution</div>
									</div>
								</div>

								{/* CTA */}
								<div className='mt-10 flex flex-wrap gap-4'>
									<Link
										href={currentAuto?.links[0].href || SLICK_HIVE_TECH.myWhatsAppURL}
										target='_blank'
										className='group inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400'
									>
										Start Automation
										<FiArrowRight className='transition group-hover:translate-x-1' />
									</Link>

									{/* <button className='rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10'>
										View Architecture
									</button> */}
								</div>
							</div>

							{/* Right */}
							<div className='relative'>
								<div className='rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl'>
									<div className='mb-8 flex items-center justify-between'>
										<div>
											<h3 className='text-2xl font-bold'>Automation Engine</h3>
											<p className='mt-1 text-sm text-zinc-400'>Workflow orchestration & desktop interaction</p>
										</div>

										<div className='rounded-2xl bg-cyan-500/20 p-4 text-cyan-400'>
											<FiZap size={28} />
										</div>
									</div>

									<div className='space-y-4'>
										{features.map((item, i) => (
											<div
												key={i}
												className='flex items-center gap-4 rounded-2xl border border-white/5 bg-black/30 p-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/5'
											>
												<div className='rounded-xl bg-cyan-500/10 p-2 text-cyan-400'>
													<FiCheckCircle />
												</div>

												<span className='text-zinc-200'>{item}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Capabilities */}
						<div className='mt-32'>
							<div className='mb-12 max-w-2xl'>
								<h3 className='text-4xl font-black'>Advanced Automation Capabilities</h3>

								<p className='mt-4 text-lg leading-8 text-zinc-400'>
									Designed to automate complex desktop and browser workflows even in environments without APIs or modern integrations.
								</p>
							</div>

							<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-5'>
								{capabilities.map((item, i) => (
									<div
										key={i}
										className='group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/5'
									>
										<div className='mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-cyan-400'>
											{i === 0 && <FiMonitor size={24} />}
											{i === 1 && <FiShield size={24} />}
											{i === 2 && <FiRefreshCw size={24} />}
											{i === 3 && <FiLayers size={24} />}
											{i === 4 && <FiDatabase size={24} />}
										</div>

										<h4 className='text-lg font-semibold text-white'>{item}</h4>
									</div>
								))}
							</div>
						</div>

						{/* Tech Stack */}
						<div className='mt-32 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10'>
							<div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between'>
								<div className='max-w-2xl'>
									<h3 className='text-4xl font-black'>Built with modern desktop technologies</h3>

									<p className='mt-4 text-lg leading-8 text-zinc-400'>
										Combining automation engines, OCR systems, desktop interaction, workflow queues, and scalable frontend architecture.
									</p>
								</div>

								<div className='flex max-w-3xl flex-wrap gap-4'>
									{tech.map((item, i) => (
										<div key={i} className='rounded-2xl border border-white/10 bg-black/40 px-5 py-3 text-sm font-medium text-zinc-300 backdrop-blur'>
											{item}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default DesktopAutomationSection;
