export type ButtonProps = {
	theme: string;
	text: string;
};

export type ImageProps = {
	src: string;
	alt: string;
	location?: string;
};

export type ContentProps = {
	header: string;
	text: string;
	button?: ButtonProps | null;
	extra?: JSX.Element | string[] | null;
};

export type HomeCardProps = {
	image: ImageProps;
	content: ContentProps;
	nav: string;
	settings: HomeCardSettingProps;
};

export type HomeCardSettingProps = {
	extraPlaced: boolean;
	headerPlaced: boolean;
	buttonPlaced: boolean;
};

export type FaqCardProps = {
	content: ContentProps;
};

export type LineProps = {
	direction: string;
	theme: string;
};

export type PriceListCardProps = {
	image: ImageProps;
	content: ContentProps;
};
