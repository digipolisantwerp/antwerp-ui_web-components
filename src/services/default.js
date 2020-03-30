export const cookieConfig = {
	"title": "Welkom!",
	"intro": "Antwerpen.be maakt gebruik van cookies. Aan de hand van die cookies verzamelt en analyseert Antwerpen.be informatie over uw bezoek. Genieten van een optimale A-ervaring? Bevestig met alle cookies toestaan. Stel voorkeuren in en bepaal welke informatie u met Antwerpen deelt. Houd er rekening mee dat bepaalde media enkel beschikbaar zijn indien u de cookies ervan aanvaardt. Antwerpen.be bewaart cookievoorkeuren. U kan ze aanpassen via cookies beheren. Meer weten? Raadpleeg onze Cookieverklaring. Antwerpen.be waardeert uw vertrouwen en wenst u een verrijkende surfervaring toe!",
	"cookieConfig": [
		{
			"name": "Noodzakelijk",
			"showSwitch": false,
			"enabled": true,
			"description": "Noodzakelijke cookies zijn cookies die ervoor zorgen dat alle onderdelen van de website goed werken. Het zijn cookies voor de beveiliging van de website, cookies voor load balancing (i.e. de verdeling van requests aan een webserver over een aantal computers) en cookies voor de aanpassing van de gebruikersinterface (m.n. de taalkeuze en de weergave van zoekresultaten). Deze cookies mogen wij plaatsen zonder dat u hier toestemming voor geeft. Indien u deze website gebruikt aanvaardt u deze noodzakelijke cookies.",
			"open": false,
			"cookies": [
				{
					"cookie": "AOS",
					"type": "Eerste partij",
					"duration": "10 minuten",
					"description": "AOS of het Antwerp Operating System plaatst sessiegebaseerde cookies op uw computer waarmee gebruikers die terugkeren naar antwerpen.be kunnen geïdentificeerd worden. Dit verhoogt het gebruiksgemak: de gebruiker blijft aangemeld en moet per app niet opnieuw aanmelden (Single Sign On)."
				},
				{
					"cookie": "eidToken",
					"type": "Eerste partij",
					"duration": "30 minuten",
					"description": "Het eidToken plaatst sessiegebonden cookies op uw computer waarmee gebruikers die terugkeren naar antwerpen.be kunnen geïdentificeerd worden. Dit verhoogt het gebruiksgemak en zorgt er voor dat de gebruiker bepaalde gegevens niet opnieuw moet ingeven."
				},
				{
					"cookie": "dgp.auth.ssoKey",
					"type": "Eerste partij",
					"duration": "15 minuten",
					"description": "dgp.auth.ssoKey plaatst permanente cookies op uw computer die gebruikt worden om uw laatst gebruikte aanmeldkeuze of het laatst gekozen authenticatiemiddel te onthouden."
				},
				{
					"cookie": "cookieconsent_prod",
					"type": "Eerste partij",
					"duration": "7 dagen",
					"description": "Antwerpen geeft een overzicht van de cookie-informatie die u als gebruiker deelt met antwerpen.be."
				}
			]
		},
		{
			"name": "Analytics",
			"showSwitch": true,
			"enabled": false,
			"description": "",
			"open": false,
			"cookies": [
				{
					"cookie": "Google analytics",
					"type": "Derde partij",
					"duration": "1 minuut tot 2 jaar",
					"description": "Via analytische cookies verzamelt antwerpen.be onder andere informatie over het aantal unieke bezoekers, via welk kanaal de bezoekers komen en hoe bezoekers de website gebruiken. De analyserapporten van Google Analytics geven een inzicht in deze data waardoor de structuur, de navigatie en de inhoud van antwerpen.be telkens verbeterd kunnen worden.",
					"subCookies": [
						{
							"name": "_ga",
							"duration": "2 jaar"
						},
						{
							"name": "_gid",
							"duration": "1 dag"
						},
						{
							"name": "_gat",
							"duration": "1 min"
						}
						
					]
				},
				{
					"cookie": "Hotjar",
					"type": "Derde partij",
					"duration": "sessie - 1 jaar",
					"description": "Hotjar is een analyse- en feedbacktool die ons helpt om te begrijpen hoe antwerpen.be wordt gebruikt. Hotjar plaatst geanonimiseerde cookies op uw computer die toelaten om het gedrag van de bezoeker over de pagina's te volgen en om de bezoekerspeilingen te controleren. ",
					"subCookies": [
						{
							"name": "_hjid",
							"duration": "1 jaar"
						},
						{
							"name": "_hjTLDTest",
							"duration": "sessie"
						},
						{
							"name": "_hjIncludedInSample",
							"duration": "1 jaar"
						},
						{
							"name": "_hjCachedUserAttributes",
							"duration": "sessie"
						}
					]
				}
			]
		},
		{
			"name": "Marketing",
			"showSwitch": true,
			"enabled": false,
			"description": "U dient marketing cookies in te schakelen om video’s af te spelen en artikels te delen met anderen via derde partijen zoals Twitter, LinkedIn en Facebook. Marketing cookies maken het mogelijk het online advertentieaanbod te personaliseren. Op deze manier kunnen wij (en derde partijen) inzicht verkrijgen in campagneprestaties. Dit gebeurt aan de hand van een profiel dat wordt opgesteld op basis van uw klik- en surfgedrag op onze website.",
			"open": false,
			"cookies": [
				{
					"cookie": "Youtube VISITOR_INFO1_LIVE",
					"type": "Derde partij",
					"duration": "5 maanden",
					"description": "Via de dienst YouTube kan u video’s bekijken die we op antwerpen.be plaatsen. YouTube zet mogelijk één of meerdere cookies op uw computer om uw surfgedrag te registreren en om voor u relevante video’s te kunnen suggereren. Deze cookie is wordt gezet door Youtube en is noodzakelijk voor het gebruik van deze functionaliteit."
				},
				{
					"cookie": "Youtube YSC",
					"type": "Derde partij",
					"duration": "sessie",
					"description": "Via de dienst YouTube kan u video’s bekijken die we op antwerpen.be plaatsen. YouTube zet mogelijk één of meerdere cookies op uw computer om uw surfgedrag te registreren en om voor u relevante video’s te kunnen suggereren. Deze cookie is wordt gezet door Youtube en is noodzakelijk voor het gebruik van deze functionaliteit."
				},
				{
					"cookie": "Youtube GPS",
					"type": "Derde partij",
					"duration": "30 minuten",
					"description": "Via de dienst YouTube kan u video’s bekijken die we op antwerpen.be plaatsen. YouTube zet mogelijk één of meerdere cookies op uw computer om uw surfgedrag te registreren en om voor u relevante video’s te kunnen suggereren. Deze cookie is wordt gezet door Youtube en is noodzakelijk voor het gebruik van deze functionaliteit."
				},
				{
					"cookie": "PollDaddy PD_poll",
					"type": "Derde partij",
					"duration": "7 dagen",
					"description": "Via Antwerpen.be verzamelt de stad Antwerpen graag uw mening  of stem om de dienstverlening van de stad te optimaliseren. We gebruiken hiervoor de dienst PolDaddy. Zij plaatsen één of meerdere cookies op uw computer om uw stem bij te houden.  Deze cookie is wordt gezet door PollDaddy en is noodzakelijk voor het gebruik van deze functionaliteit."
				},
				{
					"cookie": "Twitter",
					"type": "Derde partij",
					"duration": "30 dagen",
					"description": "Antwerpen.be integreerde de Twitter widget van Twitter. Als u onze website bezoekt, laadt u automatisch de widget voor weergave en ontvangt Twitter bepaalde informatie zoals uw IP-adres, browsertype, besturingssysteem en het adres van de website waar de widget is geïntegreerd, en plaatst een cookie die uw browser herkent. Twitter kan theoretisch herkennen welke pagina's u op verschillende websites bezocht, op voorwaarde dat de widget daar is geïmplementeerd. Op Twitter's eigen account gebruikt Twitter de gegevens om inhoud voor u op maat te maken op basis van uw bezoeken aan websites van derden, en kan het suggesties geven voor mensen om te volgen op Twitter als u een Twitter-account heeft. Antwerpen.be heeft geen invloed op de gegevens die Twitter verzamelt, verwerkt en gebruikt wanneer u onze website bezoekt."
				},
				{
					"cookie": "Soundcloud sc_anonymous_id",
					"type": "Derde partij",
					"duration": "10 jaar",
					"description": "De dienst Soundcloud biedt originele audiofragmenten aan. Ook antwerpen.be maakt hiervan gebruik. Soundcloud plaatst cookies op uw computer om de gebruikerservaring te verbeteren. Deze cookie is wordt gezet door Soundcloud en is noodzakelijk voor het gebruik van deze functionaliteit."
				},
				{
					"cookie": "Google DoubleClick IDE",
					"type": "Derde partij",
					"duration": "1.5 jaar",
					"description": "Google DoubleClick plaatst automatisch een cookie omdat er YouTube filmpjes embed zijn in antwerpen.be. De cookie trackt over verschillende websites heen welke advertenties er getoond worden in een browser. Zo weet een adverteerder hoe vaak zijn advertentie getoond werd. Noot: op antwerpen.be worden geen advertenties getoond. ",
					"subCookies": [
						{
							"name": "ID",
							"duration": "1.5 jaar"
						},
						{
							"name": "DSID",
							"duration": "1.5 jaar"
						},
						{
							"name": "IDE",
							"duration": "1.5 jaar"
						}
					]
				},
			]
		}
	]
}