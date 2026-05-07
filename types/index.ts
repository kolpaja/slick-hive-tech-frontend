export enum AppType {
	WEB = 'web',
	NATIVE = 'native',
	BOTH = 'both',
}

export enum AppProgress {
	IDEA = 'idea',
	BUILDING = 'building',
	PRODUCTION = 'production',
}

export interface AppLink {
	id: number;
	text?: string;
	href?: string;
	type?: string;
	icon: string;
}

export interface Tech {
	id: number;
	documentId?: string;
	title?: string;
	slug?: string;
}

export interface UserProfile {
	id: number;
	documentId?: string;
	username?: string;
	fullName?: string;
}

export interface Media {
	id: number;
	documentId?: string;
	url: string;
	alternativeText?: string;
	caption?: string;
	width?: number;
	height?: number;
	formats?: Record<string, any>;
}

export interface App {
	id: number;
	documentId?: string;

	title: string;
	type?: AppType;

	slug: string;
	desc?: string;

	cover: Media;

	content?: string;

	progress: AppProgress;

	started?: string; // ISO date
	published?: string; // ISO date

	isLive: boolean;

	links?: AppLink[];

	techs?: Tech[];

	user_profile?: UserProfile;

	createdAt?: string;
	updatedAt?: string;
	publishedAt?: string;
}

export enum AutomationCategory {
	DESKTOP_APP = 'desktop_app',
	AUTOMATION = 'automation',
	RPA = 'rpa',
	SCRAPING = 'scraping',
	AI_AGENT = 'ai_agent',
	WORKFLOW = 'workflow',
}

// types/auto.ts

export interface Media {
	id: number;
	name?: string;
	url: string;
	mime?: string;
	size?: number;
}

export interface Auto {
	id: number;

	title: string;
	desc: string;

	cover?: Media | null;

	tutorial?: Media[];

	content?: string;

	video_url?: string;

	category: AutoCategoryEnum;

	auto_status?: AppProgress;

	links: AppLink[];

	slug: string;

	createdAt?: string;
	updatedAt?: string;
	publishedAt?: string;
}

export enum AutoCategoryEnum {
	DESKTOP_APP = 'desktop_app',
	AUTOMATION = 'automation',
	RPA = 'rpa',
	SCRAPING = 'scraping',
	API_AGENT = 'api_agent',
	WORKFLOW = 'workflow',
}
