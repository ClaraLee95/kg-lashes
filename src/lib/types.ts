export type Theme = "light" | "dark" | "grey";

export type Location = "left" | "right" | "middle";

export type AllowedNav =
	| "/"
	| "uber-mich"
	| "was-biete-ich"
	| "preisliste"
	| "faqs"
	| "galerie"
	| "kontakt";

export type ButtonProps = {
	theme: Theme;
	text: string;
};

export type ImageProps = {
	src: string;
	alt: string;
	location?: Location;
};

export type ContentProps = {
	header?: string;
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
	nav?: AllowedNav;
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
	theme: Theme;
};

export type PriceListCardProps = {
	image: ImageProps;
	content: ContentProps;
	priceList: Array<PriceListProps>;
};

export type SectionHeaderProps = {
	header: string;
	theme: Theme;
	direction: Location;
	extra?: string;
};
