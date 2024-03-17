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
	button: JSX.Element;
};

export type CardProps = {
	image: ImageProps;
	content: ContentProps;
};
