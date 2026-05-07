import { getApps } from '@/lib/api';
import { App } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function AppsSection() {
	const res = await getApps({
		page: 1,
		pageSize: 10,
	});

	const apps: App[] = res?.data || [];

	if (!apps.length) {
		return (
			<section className='py-20'>
				<div className='container mx-auto'>
					<p>No apps found.</p>
				</div>
			</section>
		);
	}

	return (
		<section className='py-20 px-4'>
			<div className='container mx-auto'>
				<div className='mb-10'>
					<h2 className='text-4xl font-bold'>Apps</h2>
					<p className='mt-2 text-muted-foreground'>Projects, products and experiments.</p>
				</div>

				<div className='grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 xl:grid-cols-3'>
					{apps.map((app) => {
						const image = app.cover?.formats?.medium?.url || app.cover?.formats?.small?.url || app.cover?.url;

						return (
							<div key={app.id} className='overflow-hidden rounded-2xl border border-orange-200  shadow-lg transition hover:shadow-lg'>
								<div className='relative aspect-video w-full'>
									<Image src={image} alt={app.cover?.alternativeText || app.title} fill className='object-cover' />
								</div>

								<div className='space-y-4 p-5'>
									<div className='flex items-center justify-between gap-2'>
										<h3 className='text-xl font-semibold'>{app.title}</h3>

										<span className='rounded-full border px-3 py-1 text-xs capitalize'>{app.progress}</span>
									</div>

									{app.desc && <p className='line-clamp-3 text-sm text-muted-foreground'>{app.desc}</p>}

									<div className='flex flex-wrap gap-2'>
										{app.techs?.map((tech) => (
											<span key={tech.id} className='rounded-full bg-muted px-3 py-1 text-xs'>
												{tech.title}
											</span>
										))}
									</div>

									<div className='flex items-center justify-between pt-2'>
										{app.links?.length &&
											app.links.map((link) => {
												return (
													<Link key={link.id} href={`${link.href}`} className='text-sm font-medium hover:underline'>
														{link.text} →
													</Link>
												);
											})}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
