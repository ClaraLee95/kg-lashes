export type ButtonProps = {
	theme: string;
	text: string;
};

export type ImageProps = {
	location: string;
	src: string;
	alt: string;
};

export type ContentProps = {
	header: string;
	text: string;
	button: ButtonProps;
	extra?: JSX.Element | null;
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
