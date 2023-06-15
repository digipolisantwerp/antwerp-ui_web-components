export const cookieConfig = {
	"title": "Welkom!",
	"intro": "Antwerpen.be maakt gebruik van cookies. Aan de hand van die cookies verzamelt en analyseert Antwerpen.be informatie over uw bezoek. Genieten van een optimale A-ervaring? Bevestig met alle cookies toestaan. Stel voorkeuren in en bepaal welke informatie u met Antwerpen deelt. Houd er rekening mee dat bepaalde media enkel beschikbaar zijn indien u de cookies ervan aanvaardt. Antwerpen.be bewaart cookievoorkeuren. U kan ze aanpassen via cookies beheren. Meer weten? Raadpleeg onze <a href='https://www.antwerpen.be/nl/info/5e9d5a6cd93901b20b3a2b82/cookiebeleid' target='_blank'>Cookieverklaring</a>. Antwerpen.be waardeert uw vertrouwen en wenst u een verrijkende surfervaring toe!",
  "nonBlocking": false,
	"cookieConfig": [
		{
			"name": "Noodzakelijk",
			"showSwitch": false,
			"enabled": true,
			"description": "Noodzakelijke cookies zijn cookies die ervoor zorgen dat alle onderdelen van de website goed werken.",
			"open": false,
			"cookies": [
				{
					"cookie": "AOS",
					"type": "Eerste partij",
					"duration": "sessie",
					"description": "AOS of het Antwerp Operating System plaatst sessiegebaseerde cookies op uw computer waarmee gebruikers die terugkeren naar antwerpen.be kunnen geïdentificeerd worden. Dit verhoogt het gebruiksgemak: de gebruiker blijft aangemeld en moet per app niet opnieuw aanmelden (Single Sign On)."
				},
				{
					"cookie": "eidToken",
					"type": "Eerste partij",
					"duration": "30 minuten",
					"description": "Het eidToken plaatst sessiegebonden cookies op uw computer waarmee gebruikers die terugkeren naar antwerpen.be kunnen geïdentificeerd worden. Dit verhoogt het gebruiksgemak en zorgt er voor dat de gebruiker bepaalde gegevens niet opnieuw moet ingeven."
				},
				{
					"cookie": "authsessionid",
					"type": "Eerste partij",
					"duration": "sessie",
					"description": "Deze cookie wordt gebruikt om de gebruiker op de huidige webpagina te kunnen identificeren."
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
			"name": "Analytisch",
			"showSwitch": true,
			"enabled": false,
			"description": "Analytische cookies meten het websitebezoek. Deze gegevens laten ons toe om de structuur, navigatie en inhoud van onze website te verbeteren.",
			"open": false,
			"cookies": [
				{
					"cookie": "Google analytics",
					"type": "Derde partij",
					"duration": "1 minuut tot 2 jaar",
					"description": "Analytische cookies meten het websitebezoek. Deze gegevens laten ons toe om de structuur, navigatie en inhoud van onze website te verbeteren.",
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
							"duration": "sessie"
						},
						{
							"name": "_hjAbsoluteSessionInProgress",
							"duration": "30 minuten"
						}
					]
				}
			]
		},
		{
			"name": "Marketing",
			"showSwitch": true,
			"enabled": false,
			"description": "U dient marketing cookies in te schakelen om op de website inhoud te tonen die afkomstig is van derde partijen zoals Youtube, Soundcloud of Twitter.",
			"open": false,
			"cookies": [
				{
					"cookie": "Youtube VISITOR_INFO1_LIVE",
					"type": "Derde partij",
					"duration": "5 maanden",
					"description": "Via de dienst YouTube kan u video’s bekijken die we op antwerpen.be plaatsen. YouTube zet mogelijk één of meerdere cookies op uw computer om uw surfgedrag te registreren en om voor u relevante video’s te kunnen suggereren. Deze cookie wordt gezet door Youtube en is noodzakelijk voor het gebruik van deze functionaliteit."
				},
				{
					"cookie": "Youtube YSC",
					"type": "Derde partij",
					"duration": "sessie",
					"description": "Via de dienst YouTube kan u video’s bekijken die we op antwerpen.be plaatsen. YouTube zet mogelijk één of meerdere cookies op uw computer om uw surfgedrag te registreren en om voor u relevante video’s te kunnen suggereren. Deze cookie wordt gezet door Youtube en is noodzakelijk voor het gebruik van deze functionaliteit."
				},
				{
					"cookie": "Youtube GPS",
					"type": "Derde partij",
					"duration": "30 minuten",
					"description": "Via de dienst YouTube kan u video’s bekijken die we op antwerpen.be plaatsen. YouTube zet mogelijk één of meerdere cookies op uw computer om uw surfgedrag te registreren en om voor u relevante video’s te kunnen suggereren. Deze cookie wordt gezet door Youtube en is noodzakelijk voor het gebruik van deze functionaliteit."
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
					"description": "De dienst Soundcloud biedt originele audiofragmenten aan. Ook antwerpen.be maakt hiervan gebruik. Soundcloud plaatst cookies op uw computer om de gebruikerservaring te verbeteren. Deze cookie wordt gezet door Soundcloud en is noodzakelijk voor het gebruik van deze functionaliteit."
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
				}
			]
		}
	]
}
