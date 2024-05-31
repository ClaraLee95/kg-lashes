export type ButtonProps = {
	theme: string;
	text: string;
};

export type ImageProps = {
	src: string;
	alt: string;
	location?: "left" | "right";
};

export type ContentProps = {
	header: string;
	text: string;
	button?: ButtonProps | null;
	extra?: JSX.Element | Array<string> | null;
};

export type PriceListProps = {
	title: string;
	prices: Array<number>;
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
	direction: "vertical" | "horizontal" | "verticalLong" | "horizontalThin";
	theme: "light" | "dark" | "grey";
};

export type PriceListCardProps = {
	image: ImageProps;
	content: ContentProps;
	priceList: Array<PriceListProps>;
};

export type SectionHeaderProps = {
	header: string;
	theme: "dark" | "light";
	direction: "left" | "right" | "middle";
	extra?: string;
};
