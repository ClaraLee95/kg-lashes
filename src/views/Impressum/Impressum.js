import React from "react";
import "./Impressum.scss";
import ImpressumItem from "../../components/ImpressumItem/ImpressumItem";

function Impressum() {
	const items = [
		{
			id: Math.round(Math.random() * 9999),
			header: "KG Aesthetic Lashes",
			class: "Company",
			contents: [
				{ name: "", text: "Address line 1" },
				{ name: "", text: "Address line 2" },
			],
		},
		{
			id: Math.round(Math.random() * 9999),
			header: "Kontakt",
			class: "Contact",
			contents: [
				{ name: "Telefon", text: "+49 163 13 205 91" },
				{ name: "E-Mail", text: "example@email.com" },
				{ name: "Website", text: "www.kg-lashes.de" },
			],
		},
		{
			id: Math.round(Math.random() * 9999),
			header: "Streitschlichtung",
			class: "Laws",
			contents: [
				{
					name: "Haftung für Inhalte",
					text: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
				},
				{
					name: "Haftung für Links",
					text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
				},
				{
					name: "Urheberrecht",
					text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
				},
			],
		},
	];
	const renderItems = items.map((item) => {
		return <ImpressumItem key={item.id} item={item}></ImpressumItem>;
	});
	return (
		<div>
			<div className="impressumContainer">
				<div className="impressumHeader">Impressum</div>
				<div className="impressumText">{renderItems}</div>
			</div>
		</div>
	);
}

export default Impressum;
