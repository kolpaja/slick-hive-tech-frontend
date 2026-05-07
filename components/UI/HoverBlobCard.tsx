'use client';

import { useState, useEffect, useRef } from 'react';

export default function HoverBlobCard() {
	const [target, setTarget] = useState({ x: 0, y: 0 });
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [isInside, setIsInside] = useState(false);

	const requestRef = useRef<number>(null);

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setTarget({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	// Animate blob smoothly toward target
	useEffect(() => {
		const animate = () => {
			setPos((prev) => {
				const speed = 0.1; // më e lartë = ndjek më shpejt
				return {
					x: prev.x + (target.x - prev.x) * speed,
					y: prev.y + (target.y - prev.y) * speed,
				};
			});
			requestRef.current = requestAnimationFrame(animate);
		};

		requestRef.current = requestAnimationFrame(animate);
		return () => {
			if (requestRef.current) cancelAnimationFrame(requestRef.current);
		};
	}, [target]);

	return (
		<div
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsInside(true)}
			onMouseLeave={() => setIsInside(false)}
			className='relative group w-96 h-60 p-6 rounded-xl bg-neutral-900 overflow-hidden'
		>
			{/* Blob following mouse */}
			{isInside && (
				<div
					className='absolute w-60 h-60 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-3xl opacity-40 pointer-events-none'
					style={{
						transform: `translate(${pos.x - 120}px, ${pos.y - 120}px)`,
					}}
				/>
			)}

			{/* Content */}
			<div className='relative text-white'>
				<h2 className='text-xl font-bold'>Build multi-step agents</h2>
				<p className='mt-2 text-sm opacity-80'>Create agentic systems on a single screen.</p>
				<button className='mt-4 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700'>Explore AI →</button>
			</div>
		</div>
	);
}
