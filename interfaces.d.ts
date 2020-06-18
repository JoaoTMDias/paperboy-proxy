export interface ISourcesResponse {
	status: string;
	sources: IAllAvailableNewsSource[];
}

export interface ILatestNewsResponse {
	status: string;
	totalResults: number;
	articles: INewsArticleItem[];
}

export interface IAllAvailableNewsSource {
	id: string;
	name: string;
	description: string;
	url: string;
	category: EAllNewsSourcesCategories;
	language: string;
	country: string;
}

export enum EAllNewsSourcesCategories {
	Business = "business",
	Entertainment = "entertainment",
	General = "general",
	Health = "health",
	Science = "science",
	Sports = "sports",
	Technology = "technology",
}

interface ISource {
	id: string | null;
	name: string;
}

export interface INewsArticleItem {
	source: ISource;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}
