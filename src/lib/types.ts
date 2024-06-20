export type ThemeType = "light" | "dark" | "grey" | "transparent";

export type LocationType = "left" | "right" | "middle";

export type AllowedNavType =
	| "/"
	| "uber-mich"
	| "was-biete-ich"
	| "preisliste"
	| "faqs"
	| "galerie"
	| "kontakt";

export type ButtonType = {
	theme: ThemeType;
	text: string;
	switchTheme?: "switchOnSmall" | "";
};

export type ImageType = {
	src: string;
	alt: string;
	location?: LocationType;
};

export type ContentType = {
	header?: string;
	text: string;
	button?: ButtonType | null;
	extra?: JSX.Element | Array<string> | null;
};

export type PriceListType = {
	title: string;
	prices: Array<number>;
};

export type HomeCardType = {
	image: ImageType;
	content: ContentType;
	nav?: AllowedNavType;
	settings: HomeCardSettingType;
};

export type HomeCardSettingType = {
	extraPlaced: boolean;
	headerPlaced: boolean;
	buttonPlaced: boolean;
};

export type FaqCardType = {
	content: ContentType;
};

export type LineType = {
	direction: "vertical" | "horizontal" | "verticalLong" | "horizontalThin";
	theme: ThemeType;
};

export type PriceListCardType = {
	image: ImageType;
	content: ContentType;
	priceList: Array<PriceListType>;
};

export type SectionHeaderType = {
	header: string;
	theme: ThemeType;
	direction: LocationType;
	extra?: string;
};

export type TwoByTwoGridType = {
	leftTop: ImageType | JSX.Element;
	rightTop: ImageType | JSX.Element;
	leftBottom: ImageType | JSX.Element;
	rightBottom: ImageType | JSX.Element;
};
