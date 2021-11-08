export type image = {
	id: string
	owner: string
	secret: string
	server: string
	farm: number
	title: string
	ispublic: number
	isfriend: number
	isfamily: number
};

export type photoContextType = {
	images: image[]
	loading: boolean
	runSearch: (query: string) => void
};
