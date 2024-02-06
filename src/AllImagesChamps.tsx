/**
 * File TypeScript usato per contenere
 *  Oggetto che contiene tutti i require necessari per reinderizzare le immagini corrispondenti ai Campioni
 *
 * @author Giarolo Mattia, Tinazzi Camillo
 * @version 1.0.0
 */

/**Costante del percorso alle immagini*/
const URL_IMAGES = "assets/images/";
/**Costante del percorso alle immagini dei campioni*/
const URL_champsImg = URL_IMAGES+"champions/";
/**Costante del percorso alle immagini delle icone dei campioni*/
const URL_champsIcon = URL_champsImg+"icone/";
/**Costante del percorso alle immagini delle abilità dei campioni*/
const URL_champsSpells = URL_champsImg+"spells/";
/**Costante del percorso alle immagini delle skin dei campioni*/
const URL_champsSkins = URL_champsImg+"skins/";
/**
 * Oggetto che contiene tutti i require alle immagini dei campioni
 * 
 * Con struttura del tipo:
 *  Campione.id: {
 *      icon: require(PathImgIcona),
 *      skins: [require(PathImgSkin[0]), ...],
 *      ability: [require(PathImgAbility[0]), ...],
 *  }
 */
const AllImages = {
	Aatrox: {
        icon: require("../"+URL_champsIcon+"Aatrox.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Aatrox_0.webp"),
			require("../"+URL_champsSkins+"Aatrox_1.webp"),
			require("../"+URL_champsSkins+"Aatrox_2.webp"),
			require("../"+URL_champsSkins+"Aatrox_3.webp"),
			require("../"+URL_champsSkins+"Aatrox_7.webp"),
			require("../"+URL_champsSkins+"Aatrox_8.webp"),
			require("../"+URL_champsSkins+"Aatrox_9.webp"),
			require("../"+URL_champsSkins+"Aatrox_11.webp"),
			require("../"+URL_champsSkins+"Aatrox_20.webp")
        ],
        abilities: {
            "Posizione del Messaggero della morte": require("../"+URL_champsSpells+"Aatrox_Passive.webp"),
			"La lama dei Darkin": require("../"+URL_champsSpells+"AatroxQ.webp"),
			"Catene infernali": require("../"+URL_champsSpells+"AatroxW.webp"),
			"Scatto dell'ombra": require("../"+URL_champsSpells+"AatroxE.webp"),
			"Sterminatore di Mondi": require("../"+URL_champsSpells+"AatroxR.webp")
        },
    },
	Ahri: {
        icon: require("../"+URL_champsIcon+"Ahri.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Ahri_0.webp"),
			require("../"+URL_champsSkins+"Ahri_1.webp"),
			require("../"+URL_champsSkins+"Ahri_2.webp"),
			require("../"+URL_champsSkins+"Ahri_3.webp"),
			require("../"+URL_champsSkins+"Ahri_4.webp"),
			require("../"+URL_champsSkins+"Ahri_5.webp"),
			require("../"+URL_champsSkins+"Ahri_6.webp"),
			require("../"+URL_champsSkins+"Ahri_7.webp"),
			require("../"+URL_champsSkins+"Ahri_14.webp"),
			require("../"+URL_champsSkins+"Ahri_15.webp"),
			require("../"+URL_champsSkins+"Ahri_16.webp"),
			require("../"+URL_champsSkins+"Ahri_17.webp"),
			require("../"+URL_champsSkins+"Ahri_27.webp"),
			require("../"+URL_champsSkins+"Ahri_28.webp"),
			require("../"+URL_champsSkins+"Ahri_42.webp"),
			require("../"+URL_champsSkins+"Ahri_65.webp")
        ],
        abilities: {
            "Furto d'essenza": require("../"+URL_champsSpells+"Ahri_SoulEater2.webp"),
			"Globo dell'inganno": require("../"+URL_champsSpells+"AhriOrbofDeception.webp"),
			"Volpe di fuoco": require("../"+URL_champsSpells+"AhriFoxFire.webp"),
			"Malìa amorosa": require("../"+URL_champsSpells+"AhriSeduce.webp"),
			"Assalto spirituale": require("../"+URL_champsSpells+"AhriTumble.webp")
        },
    },
	Akali: {
        icon: require("../"+URL_champsIcon+"Akali.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Akali_0.webp"),
			require("../"+URL_champsSkins+"Akali_1.webp"),
			require("../"+URL_champsSkins+"Akali_2.webp"),
			require("../"+URL_champsSkins+"Akali_3.webp"),
			require("../"+URL_champsSkins+"Akali_4.webp"),
			require("../"+URL_champsSkins+"Akali_5.webp"),
			require("../"+URL_champsSkins+"Akali_6.webp"),
			require("../"+URL_champsSkins+"Akali_7.webp"),
			require("../"+URL_champsSkins+"Akali_8.webp"),
			require("../"+URL_champsSkins+"Akali_9.webp"),
			require("../"+URL_champsSkins+"Akali_13.webp"),
			require("../"+URL_champsSkins+"Akali_14.webp"),
			require("../"+URL_champsSkins+"Akali_15.webp"),
			require("../"+URL_champsSkins+"Akali_32.webp"),
			require("../"+URL_champsSkins+"Akali_50.webp"),
			require("../"+URL_champsSkins+"Akali_60.webp")
        ],
        abilities: {
            "Marchio dell'assassino": require("../"+URL_champsSpells+"Akali_P.webp"),
			"Attacco a cinque punte": require("../"+URL_champsSpells+"AkaliQ.webp"),
			"Velo di penombra": require("../"+URL_champsSpells+"AkaliW.webp"),
			"Capriola shuriken": require("../"+URL_champsSpells+"AkaliE.webp"),
			"Esecuzione perfetta": require("../"+URL_champsSpells+"AkaliR.webp")
        },
    },
	Akshan: {
        icon: require("../"+URL_champsIcon+"Akshan.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Akshan_0.webp"),
			require("../"+URL_champsSkins+"Akshan_1.webp"),
			require("../"+URL_champsSkins+"Akshan_10.webp")
        ],
        abilities: {
            "Combattimento sporco": require("../"+URL_champsSpells+"akshan_p.webp"),
			"Vendettarang": require("../"+URL_champsSpells+"AkshanQ.webp"),
			"Spirito ribelle": require("../"+URL_champsSpells+"AkshanW.webp"),
			"Intervento eroico": require("../"+URL_champsSpells+"AkshanE.webp"),
			"Condanna inesorabile": require("../"+URL_champsSpells+"AkshanR.webp")
        },
    },
	Alistar: {
        icon: require("../"+URL_champsIcon+"Alistar.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Alistar_0.webp"),
			require("../"+URL_champsSkins+"Alistar_1.webp"),
			require("../"+URL_champsSkins+"Alistar_2.webp"),
			require("../"+URL_champsSkins+"Alistar_3.webp"),
			require("../"+URL_champsSkins+"Alistar_4.webp"),
			require("../"+URL_champsSkins+"Alistar_5.webp"),
			require("../"+URL_champsSkins+"Alistar_6.webp"),
			require("../"+URL_champsSkins+"Alistar_7.webp"),
			require("../"+URL_champsSkins+"Alistar_8.webp"),
			require("../"+URL_champsSkins+"Alistar_9.webp"),
			require("../"+URL_champsSkins+"Alistar_10.webp"),
			require("../"+URL_champsSkins+"Alistar_19.webp"),
			require("../"+URL_champsSkins+"Alistar_20.webp"),
			require("../"+URL_champsSkins+"Alistar_22.webp"),
			require("../"+URL_champsSkins+"Alistar_29.webp")
        ],
        abilities: {
            "Ruggito trionfante": require("../"+URL_champsSpells+"Alistar_E.webp"),
			"Polverizzare": require("../"+URL_champsSpells+"Pulverize.webp"),
			"Testata": require("../"+URL_champsSpells+"Headbutt.webp"),
			"Travolgere": require("../"+URL_champsSpells+"AlistarE.webp"),
			"Volontà indistruttibile": require("../"+URL_champsSpells+"FerociousHowl.webp")
        },
    },
	Amumu: {
        icon: require("../"+URL_champsIcon+"Amumu.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Amumu_0.webp"),
			require("../"+URL_champsSkins+"Amumu_1.webp"),
			require("../"+URL_champsSkins+"Amumu_2.webp"),
			require("../"+URL_champsSkins+"Amumu_3.webp"),
			require("../"+URL_champsSkins+"Amumu_4.webp"),
			require("../"+URL_champsSkins+"Amumu_5.webp"),
			require("../"+URL_champsSkins+"Amumu_6.webp"),
			require("../"+URL_champsSkins+"Amumu_7.webp"),
			require("../"+URL_champsSkins+"Amumu_8.webp"),
			require("../"+URL_champsSkins+"Amumu_17.webp"),
			require("../"+URL_champsSkins+"Amumu_23.webp"),
			require("../"+URL_champsSkins+"Amumu_24.webp"),
			require("../"+URL_champsSkins+"Amumu_34.webp")
        ],
        abilities: {
            "Tocco maledetto": require("../"+URL_champsSpells+"Amumu_Passive.webp"),
			"Lancio della bendatura": require("../"+URL_champsSpells+"BandageToss.webp"),
			"Disperazione": require("../"+URL_champsSpells+"AuraofDespair.webp"),
			"Collera": require("../"+URL_champsSpells+"Tantrum.webp"),
			"Maledizione della mummia triste": require("../"+URL_champsSpells+"CurseoftheSadMummy.webp")
        },
    },
	Anivia: {
        icon: require("../"+URL_champsIcon+"Anivia.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Anivia_0.webp"),
			require("../"+URL_champsSkins+"Anivia_1.webp"),
			require("../"+URL_champsSkins+"Anivia_2.webp"),
			require("../"+URL_champsSkins+"Anivia_3.webp"),
			require("../"+URL_champsSkins+"Anivia_4.webp"),
			require("../"+URL_champsSkins+"Anivia_5.webp"),
			require("../"+URL_champsSkins+"Anivia_6.webp"),
			require("../"+URL_champsSkins+"Anivia_7.webp"),
			require("../"+URL_champsSkins+"Anivia_8.webp"),
			require("../"+URL_champsSkins+"Anivia_17.webp"),
			require("../"+URL_champsSkins+"Anivia_27.webp")
        ],
        abilities: {
            "Rinascita": require("../"+URL_champsSpells+"Anivia_P.webp"),
			"Sfera glaciale": require("../"+URL_champsSpells+"FlashFrost.webp"),
			"Cristallizzazione": require("../"+URL_champsSpells+"Crystallize.webp"),
			"Morso glaciale": require("../"+URL_champsSpells+"Frostbite.webp"),
			"Tempesta glaciale": require("../"+URL_champsSpells+"GlacialStorm.webp")
        },
    },
	Annie: {
        icon: require("../"+URL_champsIcon+"Annie.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Annie_0.webp"),
			require("../"+URL_champsSkins+"Annie_1.webp"),
			require("../"+URL_champsSkins+"Annie_2.webp"),
			require("../"+URL_champsSkins+"Annie_3.webp"),
			require("../"+URL_champsSkins+"Annie_4.webp"),
			require("../"+URL_champsSkins+"Annie_5.webp"),
			require("../"+URL_champsSkins+"Annie_6.webp"),
			require("../"+URL_champsSkins+"Annie_7.webp"),
			require("../"+URL_champsSkins+"Annie_8.webp"),
			require("../"+URL_champsSkins+"Annie_9.webp"),
			require("../"+URL_champsSkins+"Annie_10.webp"),
			require("../"+URL_champsSkins+"Annie_11.webp"),
			require("../"+URL_champsSkins+"Annie_12.webp"),
			require("../"+URL_champsSkins+"Annie_13.webp"),
			require("../"+URL_champsSkins+"Annie_22.webp")
        ],
        abilities: {
            "Piromania": require("../"+URL_champsSpells+"Annie_Passive.webp"),
			"Disintegrazione": require("../"+URL_champsSpells+"AnnieQ.webp"),
			"Incenerimento": require("../"+URL_champsSpells+"AnnieW.webp"),
			"Scudo pirico": require("../"+URL_champsSpells+"AnnieE.webp"),
			"Evocazione: Tibbers": require("../"+URL_champsSpells+"AnnieR.webp")
        },
    },
	Aphelios: {
        icon: require("../"+URL_champsIcon+"Aphelios.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Aphelios_0.webp"),
			require("../"+URL_champsSkins+"Aphelios_1.webp"),
			require("../"+URL_champsSkins+"Aphelios_9.webp")
        ],
        abilities: {
            "Impulso e Ragione": require("../"+URL_champsSpells+"ApheliosP.webp"),
			"Abilità armi": require("../"+URL_champsSpells+"ApheliosQ_ClientTooltipWrapper.webp"),
			"Fase": require("../"+URL_champsSpells+"ApheliosW.webp"),
			"Sistema coda armi": require("../"+URL_champsSpells+"ApheliosE_ClientTooltipWrapper.webp"),
			"Veglia lunare": require("../"+URL_champsSpells+"ApheliosR.webp")
        },
    },
	Ashe: {
        icon: require("../"+URL_champsIcon+"Ashe.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Ashe_0.webp"),
			require("../"+URL_champsSkins+"Ashe_1.webp"),
			require("../"+URL_champsSkins+"Ashe_2.webp"),
			require("../"+URL_champsSkins+"Ashe_3.webp"),
			require("../"+URL_champsSkins+"Ashe_4.webp"),
			require("../"+URL_champsSkins+"Ashe_5.webp"),
			require("../"+URL_champsSkins+"Ashe_6.webp"),
			require("../"+URL_champsSkins+"Ashe_7.webp"),
			require("../"+URL_champsSkins+"Ashe_8.webp"),
			require("../"+URL_champsSkins+"Ashe_9.webp"),
			require("../"+URL_champsSkins+"Ashe_11.webp"),
			require("../"+URL_champsSkins+"Ashe_17.webp"),
			require("../"+URL_champsSkins+"Ashe_23.webp"),
			require("../"+URL_champsSkins+"Ashe_32.webp")
        ],
        abilities: {
            "Colpo di ghiaccio": require("../"+URL_champsSpells+"Ashe_P.webp"),
			"Concentrazione dell'esploratrice": require("../"+URL_champsSpells+"AsheQ.webp"),
			"Raffica di frecce": require("../"+URL_champsSpells+"Volley.webp"),
			"Colpo del falco": require("../"+URL_champsSpells+"AsheSpiritOfTheHawk.webp"),
			"Freccia di cristallo incantata": require("../"+URL_champsSpells+"EnchantedCrystalArrow.webp")
        },
    },
	AurelionSol: {
        icon: require("../"+URL_champsIcon+"AurelionSol.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"AurelionSol_0.webp"),
			require("../"+URL_champsSkins+"AurelionSol_1.webp"),
			require("../"+URL_champsSkins+"AurelionSol_2.webp"),
			require("../"+URL_champsSkins+"AurelionSol_11.webp")
        ],
        abilities: {
            "Centro dell'universo": require("../"+URL_champsSpells+"AurelionSol_Passive.webp"),
			"Supernova": require("../"+URL_champsSpells+"AurelionSolQ.webp"),
			"Espansione celestiale": require("../"+URL_champsSpells+"AurelionSolW.webp"),
			"Cometa leggendaria": require("../"+URL_champsSpells+"AurelionSolE.webp"),
			"Soffio galattico": require("../"+URL_champsSpells+"AurelionSolR.webp")
        },
    },
	Azir: {
        icon: require("../"+URL_champsIcon+"Azir.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Azir_0.webp"),
			require("../"+URL_champsSkins+"Azir_1.webp"),
			require("../"+URL_champsSkins+"Azir_2.webp"),
			require("../"+URL_champsSkins+"Azir_3.webp"),
			require("../"+URL_champsSkins+"Azir_4.webp"),
			require("../"+URL_champsSkins+"Azir_5.webp")
        ],
        abilities: {
            "Eredità di Shurima": require("../"+URL_champsSpells+"Azir_Passive.webp"),
			"Tumulto delle sabbie": require("../"+URL_champsSpells+"AzirQWrapper.webp"),
			"Sorgi!": require("../"+URL_champsSpells+"AzirW.webp"),
			"Sabbie mobili": require("../"+URL_champsSpells+"AzirEWrapper.webp"),
			"Scorta imperiale": require("../"+URL_champsSpells+"AzirR.webp")
        },
    },
	Bard: {
        icon: require("../"+URL_champsIcon+"Bard.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Bard_0.webp"),
			require("../"+URL_champsSkins+"Bard_1.webp"),
			require("../"+URL_champsSkins+"Bard_5.webp"),
			require("../"+URL_champsSkins+"Bard_6.webp"),
			require("../"+URL_champsSkins+"Bard_8.webp"),
			require("../"+URL_champsSkins+"Bard_17.webp")
        ],
        abilities: {
            "Chiamata del viandante": require("../"+URL_champsSpells+"Bard_Passive.webp"),
			"Legame cosmico": require("../"+URL_champsSpells+"BardQ.webp"),
			"Altare del custode": require("../"+URL_champsSpells+"BardW.webp"),
			"Viaggio magico": require("../"+URL_champsSpells+"BardE.webp"),
			"Destino immobile": require("../"+URL_champsSpells+"BardR.webp")
        },
    },
	Blitzcrank: {
        icon: require("../"+URL_champsIcon+"Blitzcrank.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Blitzcrank_0.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_1.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_2.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_3.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_4.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_5.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_6.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_7.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_11.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_20.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_21.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_22.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_29.webp"),
			require("../"+URL_champsSkins+"Blitzcrank_36.webp")
        ],
        abilities: {
            "Barriera di mana": require("../"+URL_champsSpells+"Blitzcrank_ManaBarrier.webp"),
			"Presa razzo": require("../"+URL_champsSpells+"RocketGrab.webp"),
			"Ipervelocità": require("../"+URL_champsSpells+"Overdrive.webp"),
			"Superpugno": require("../"+URL_champsSpells+"PowerFist.webp"),
			"Campo statico": require("../"+URL_champsSpells+"StaticField.webp")
        },
    },
	Brand: {
        icon: require("../"+URL_champsIcon+"Brand.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Brand_0.webp"),
			require("../"+URL_champsSkins+"Brand_1.webp"),
			require("../"+URL_champsSkins+"Brand_2.webp"),
			require("../"+URL_champsSkins+"Brand_3.webp"),
			require("../"+URL_champsSkins+"Brand_4.webp"),
			require("../"+URL_champsSkins+"Brand_5.webp"),
			require("../"+URL_champsSkins+"Brand_6.webp"),
			require("../"+URL_champsSkins+"Brand_7.webp"),
			require("../"+URL_champsSkins+"Brand_8.webp"),
			require("../"+URL_champsSkins+"Brand_21.webp"),
			require("../"+URL_champsSkins+"Brand_22.webp")
        ],
        abilities: {
            "Fiammata": require("../"+URL_champsSpells+"BrandP.webp"),
			"Fuoco ardente": require("../"+URL_champsSpells+"BrandQ.webp"),
			"Pilastro di fiamme": require("../"+URL_champsSpells+"BrandW.webp"),
			"Conflagrazione": require("../"+URL_champsSpells+"BrandE.webp"),
			"Cataclisma di fuoco": require("../"+URL_champsSpells+"BrandR.webp")
        },
    },
	Braum: {
        icon: require("../"+URL_champsIcon+"Braum.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Braum_0.webp"),
			require("../"+URL_champsSkins+"Braum_1.webp"),
			require("../"+URL_champsSkins+"Braum_2.webp"),
			require("../"+URL_champsSkins+"Braum_3.webp"),
			require("../"+URL_champsSkins+"Braum_10.webp"),
			require("../"+URL_champsSkins+"Braum_11.webp"),
			require("../"+URL_champsSkins+"Braum_24.webp"),
			require("../"+URL_champsSkins+"Braum_33.webp")
        ],
        abilities: {
            "Colpi stordenti": require("../"+URL_champsSpells+"Braum_Passive.webp"),
			"Morsi del freddo": require("../"+URL_champsSpells+"BraumQ.webp"),
			"Dietro di me": require("../"+URL_champsSpells+"BraumW.webp"),
			"Indistruttibile": require("../"+URL_champsSpells+"BraumE.webp"),
			"Frattura glaciale": require("../"+URL_champsSpells+"BraumRWrapper.webp")
        },
    },
	Caitlyn: {
        icon: require("../"+URL_champsIcon+"Caitlyn.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Caitlyn_0.webp"),
			require("../"+URL_champsSkins+"Caitlyn_1.webp"),
			require("../"+URL_champsSkins+"Caitlyn_2.webp"),
			require("../"+URL_champsSkins+"Caitlyn_3.webp"),
			require("../"+URL_champsSkins+"Caitlyn_4.webp"),
			require("../"+URL_champsSkins+"Caitlyn_5.webp"),
			require("../"+URL_champsSkins+"Caitlyn_6.webp"),
			require("../"+URL_champsSkins+"Caitlyn_10.webp"),
			require("../"+URL_champsSkins+"Caitlyn_11.webp"),
			require("../"+URL_champsSkins+"Caitlyn_13.webp"),
			require("../"+URL_champsSkins+"Caitlyn_19.webp"),
			require("../"+URL_champsSkins+"Caitlyn_20.webp"),
			require("../"+URL_champsSkins+"Caitlyn_22.webp"),
			require("../"+URL_champsSkins+"Caitlyn_28.webp"),
			require("../"+URL_champsSkins+"Caitlyn_29.webp")
        ],
        abilities: {
            "Colpo alla testa": require("../"+URL_champsSpells+"Caitlyn_Headshot.webp"),
			"Pacificatore di Piltover": require("../"+URL_champsSpells+"CaitlynQ.webp"),
			"Trappola per Yordle": require("../"+URL_champsSpells+"CaitlynW.webp"),
			"Rete calibro 90": require("../"+URL_champsSpells+"CaitlynE.webp"),
			"Colpo perfetto": require("../"+URL_champsSpells+"CaitlynR.webp")
        },
    },
	Camille: {
        icon: require("../"+URL_champsIcon+"Camille.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Camille_0.webp"),
			require("../"+URL_champsSkins+"Camille_1.webp"),
			require("../"+URL_champsSkins+"Camille_2.webp"),
			require("../"+URL_champsSkins+"Camille_10.webp"),
			require("../"+URL_champsSkins+"Camille_11.webp")
        ],
        abilities: {
            "Difese adattive": require("../"+URL_champsSpells+"Camille_Passive.webp"),
			"Protocollo di precisione": require("../"+URL_champsSpells+"CamilleQ.webp"),
			"Falciata tattica": require("../"+URL_champsSpells+"CamilleW.webp"),
			"Rampino": require("../"+URL_champsSpells+"CamilleE.webp"),
			"Ultimatum hextech": require("../"+URL_champsSpells+"CamilleR.webp")
        },
    },
	Cassiopeia: {
        icon: require("../"+URL_champsIcon+"Cassiopeia.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Cassiopeia_0.webp"),
			require("../"+URL_champsSkins+"Cassiopeia_1.webp"),
			require("../"+URL_champsSkins+"Cassiopeia_2.webp"),
			require("../"+URL_champsSkins+"Cassiopeia_3.webp"),
			require("../"+URL_champsSkins+"Cassiopeia_4.webp"),
			require("../"+URL_champsSkins+"Cassiopeia_8.webp"),
			require("../"+URL_champsSkins+"Cassiopeia_9.webp"),
			require("../"+URL_champsSkins+"Cassiopeia_18.webp")
        ],
        abilities: {
            "Grazia serpentina": require("../"+URL_champsSpells+"Cassiopeia_Passive.webp"),
			"Esplosione tossica": require("../"+URL_champsSpells+"CassiopeiaQ.webp"),
			"Miasma": require("../"+URL_champsSpells+"CassiopeiaW.webp"),
			"Zanne gemelle": require("../"+URL_champsSpells+"CassiopeiaE.webp"),
			"Sguardo pietrificante": require("../"+URL_champsSpells+"CassiopeiaR.webp")
        },
    },
	Chogath: {
        icon: require("../"+URL_champsIcon+"Chogath.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Chogath_0.webp"),
			require("../"+URL_champsSkins+"Chogath_1.webp"),
			require("../"+URL_champsSkins+"Chogath_2.webp"),
			require("../"+URL_champsSkins+"Chogath_3.webp"),
			require("../"+URL_champsSkins+"Chogath_4.webp"),
			require("../"+URL_champsSkins+"Chogath_5.webp"),
			require("../"+URL_champsSkins+"Chogath_6.webp"),
			require("../"+URL_champsSkins+"Chogath_7.webp"),
			require("../"+URL_champsSkins+"Chogath_14.webp")
        ],
        abilities: {
            "Carnivoro": require("../"+URL_champsSpells+"GreenTerror_TailSpike.webp"),
			"Spaccatura": require("../"+URL_champsSpells+"Rupture.webp"),
			"Urlo bestiale": require("../"+URL_champsSpells+"FeralScream.webp"),
			"Spine vorpal": require("../"+URL_champsSpells+"VorpalSpikes.webp"),
			"Banchetto": require("../"+URL_champsSpells+"Feast.webp")
        },
    },
	Corki: {
        icon: require("../"+URL_champsIcon+"Corki.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Corki_0.webp"),
			require("../"+URL_champsSkins+"Corki_1.webp"),
			require("../"+URL_champsSkins+"Corki_2.webp"),
			require("../"+URL_champsSkins+"Corki_3.webp"),
			require("../"+URL_champsSkins+"Corki_4.webp"),
			require("../"+URL_champsSkins+"Corki_5.webp"),
			require("../"+URL_champsSkins+"Corki_6.webp"),
			require("../"+URL_champsSkins+"Corki_7.webp"),
			require("../"+URL_champsSkins+"Corki_8.webp"),
			require("../"+URL_champsSkins+"Corki_18.webp"),
			require("../"+URL_champsSkins+"Corki_26.webp")
        ],
        abilities: {
            "Munizioni hextech": require("../"+URL_champsSpells+"Corki_RapidReload.webp"),
			"Bomba al fosforo": require("../"+URL_champsSpells+"PhosphorusBomb.webp"),
			"Valchiria": require("../"+URL_champsSpells+"CarpetBomb.webp"),
			"Mitragliatrice Gatling": require("../"+URL_champsSpells+"GGun.webp"),
			"Fuoco di sbarramento": require("../"+URL_champsSpells+"MissileBarrage.webp")
        },
    },
	Darius: {
        icon: require("../"+URL_champsIcon+"Darius.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Darius_0.webp"),
			require("../"+URL_champsSkins+"Darius_1.webp"),
			require("../"+URL_champsSkins+"Darius_2.webp"),
			require("../"+URL_champsSkins+"Darius_3.webp"),
			require("../"+URL_champsSkins+"Darius_4.webp"),
			require("../"+URL_champsSkins+"Darius_8.webp"),
			require("../"+URL_champsSkins+"Darius_14.webp"),
			require("../"+URL_champsSkins+"Darius_15.webp"),
			require("../"+URL_champsSkins+"Darius_16.webp"),
			require("../"+URL_champsSkins+"Darius_24.webp"),
			require("../"+URL_champsSkins+"Darius_33.webp")
        ],
        abilities: {
            "Emorragia": require("../"+URL_champsSpells+"Darius_Icon_Hemorrhage.webp"),
			"Decimare": require("../"+URL_champsSpells+"DariusCleave.webp"),
			"Colpo mutilante": require("../"+URL_champsSpells+"DariusNoxianTacticsONH.webp"),
			"Arresto": require("../"+URL_champsSpells+"DariusAxeGrabCone.webp"),
			"Ghigliottina di Noxus": require("../"+URL_champsSpells+"DariusExecute.webp")
        },
    },
	Diana: {
        icon: require("../"+URL_champsIcon+"Diana.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Diana_0.webp"),
			require("../"+URL_champsSkins+"Diana_1.webp"),
			require("../"+URL_champsSkins+"Diana_2.webp"),
			require("../"+URL_champsSkins+"Diana_3.webp"),
			require("../"+URL_champsSkins+"Diana_11.webp"),
			require("../"+URL_champsSkins+"Diana_12.webp"),
			require("../"+URL_champsSkins+"Diana_18.webp"),
			require("../"+URL_champsSkins+"Diana_25.webp"),
			require("../"+URL_champsSkins+"Diana_26.webp"),
			require("../"+URL_champsSkins+"Diana_27.webp"),
			require("../"+URL_champsSkins+"Diana_37.webp")
        ],
        abilities: {
            "Lama lunargento": require("../"+URL_champsSpells+"Diana_Passive_LunarBlade.webp"),
			"Falce crescente": require("../"+URL_champsSpells+"DianaQ.webp"),
			"Cascata cerulea": require("../"+URL_champsSpells+"DianaOrbs.webp"),
			"Scatto lunare": require("../"+URL_champsSpells+"DianaTeleport.webp"),
			"Attrazione lunare": require("../"+URL_champsSpells+"DianaR.webp")
        },
    },
	Draven: {
        icon: require("../"+URL_champsIcon+"Draven.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Draven_0.webp"),
			require("../"+URL_champsSkins+"Draven_1.webp"),
			require("../"+URL_champsSkins+"Draven_2.webp"),
			require("../"+URL_champsSkins+"Draven_3.webp"),
			require("../"+URL_champsSkins+"Draven_4.webp"),
			require("../"+URL_champsSkins+"Draven_5.webp"),
			require("../"+URL_champsSkins+"Draven_6.webp"),
			require("../"+URL_champsSkins+"Draven_12.webp"),
			require("../"+URL_champsSkins+"Draven_13.webp"),
			require("../"+URL_champsSkins+"Draven_20.webp"),
			require("../"+URL_champsSkins+"Draven_29.webp")
        ],
        abilities: {
            "League of Draven": require("../"+URL_champsSpells+"Draven_passive.webp"),
			"Ascia rotante": require("../"+URL_champsSpells+"DravenSpinning.webp"),
			"Scatto sanguigno": require("../"+URL_champsSpells+"DravenFury.webp"),
			"Fatti da parte": require("../"+URL_champsSpells+"DravenDoubleShot.webp"),
			"Morte turbinante": require("../"+URL_champsSpells+"DravenRCast.webp")
        },
    },
	DrMundo: {
        icon: require("../"+URL_champsIcon+"DrMundo.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"DrMundo_0.webp"),
			require("../"+URL_champsSkins+"DrMundo_1.webp"),
			require("../"+URL_champsSkins+"DrMundo_2.webp"),
			require("../"+URL_champsSkins+"DrMundo_3.webp"),
			require("../"+URL_champsSkins+"DrMundo_4.webp"),
			require("../"+URL_champsSkins+"DrMundo_5.webp"),
			require("../"+URL_champsSkins+"DrMundo_6.webp"),
			require("../"+URL_champsSkins+"DrMundo_7.webp"),
			require("../"+URL_champsSkins+"DrMundo_8.webp"),
			require("../"+URL_champsSkins+"DrMundo_9.webp"),
			require("../"+URL_champsSkins+"DrMundo_10.webp")
        ],
        abilities: {
            "Va dove vuole": require("../"+URL_champsSpells+"DrMundo_P.webp"),
			"Segaossa infetta": require("../"+URL_champsSpells+"DrMundoQ.webp"),
			"Defibrillatore": require("../"+URL_champsSpells+"DrMundoW.webp"),
			"Trauma cranico": require("../"+URL_champsSpells+"DrMundoE.webp"),
			"Dosaggio massimo": require("../"+URL_champsSpells+"DrMundoR.webp")
        },
    },
	Ekko: {
        icon: require("../"+URL_champsIcon+"Ekko.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Ekko_0.webp"),
			require("../"+URL_champsSkins+"Ekko_1.webp"),
			require("../"+URL_champsSkins+"Ekko_2.webp"),
			require("../"+URL_champsSkins+"Ekko_3.webp"),
			require("../"+URL_champsSkins+"Ekko_11.webp"),
			require("../"+URL_champsSkins+"Ekko_12.webp"),
			require("../"+URL_champsSkins+"Ekko_19.webp"),
			require("../"+URL_champsSkins+"Ekko_28.webp"),
			require("../"+URL_champsSkins+"Ekko_36.webp")
        ],
        abilities: {
            "Risonanza del Motore-Z": require("../"+URL_champsSpells+"Ekko_P.webp"),
			"Cronodisco": require("../"+URL_champsSpells+"EkkoQ.webp"),
			"Convergenza parallela": require("../"+URL_champsSpells+"EkkoW.webp"),
			"Salto fasico": require("../"+URL_champsSpells+"EkkoE.webp"),
			"Frattura temporale": require("../"+URL_champsSpells+"EkkoR.webp")
        },
    },
	Elise: {
        icon: require("../"+URL_champsIcon+"Elise.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Elise_0.webp"),
			require("../"+URL_champsSkins+"Elise_1.webp"),
			require("../"+URL_champsSkins+"Elise_2.webp"),
			require("../"+URL_champsSkins+"Elise_3.webp"),
			require("../"+URL_champsSkins+"Elise_4.webp"),
			require("../"+URL_champsSkins+"Elise_5.webp"),
			require("../"+URL_champsSkins+"Elise_6.webp"),
			require("../"+URL_champsSkins+"Elise_15.webp")
        ],
        abilities: {
            "Regina dei ragni": require("../"+URL_champsSpells+"ElisePassive.webp"),
			"Neurotossina/morso velenoso": require("../"+URL_champsSpells+"EliseHumanQ.webp"),
			"Larva instabile/furia chitinosa": require("../"+URL_champsSpells+"EliseHumanW.webp"),
			"Bozzolo/calata": require("../"+URL_champsSpells+"EliseHumanE.webp"),
			"Forma aracnide": require("../"+URL_champsSpells+"EliseR.webp")
        },
    },
	Evelynn: {
        icon: require("../"+URL_champsIcon+"Evelynn.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Evelynn_0.webp"),
			require("../"+URL_champsSkins+"Evelynn_1.webp"),
			require("../"+URL_champsSkins+"Evelynn_2.webp"),
			require("../"+URL_champsSkins+"Evelynn_3.webp"),
			require("../"+URL_champsSkins+"Evelynn_4.webp"),
			require("../"+URL_champsSkins+"Evelynn_5.webp"),
			require("../"+URL_champsSkins+"Evelynn_6.webp"),
			require("../"+URL_champsSkins+"Evelynn_7.webp"),
			require("../"+URL_champsSkins+"Evelynn_8.webp"),
			require("../"+URL_champsSkins+"Evelynn_15.webp"),
			require("../"+URL_champsSkins+"Evelynn_24.webp"),
			require("../"+URL_champsSkins+"Evelynn_31.webp")
        ],
        abilities: {
            "Ombra del demone": require("../"+URL_champsSpells+"Evelynn_Passive.webp"),
			"Aculeo dell'odio": require("../"+URL_champsSpells+"EvelynnQ.webp"),
			"Fascino": require("../"+URL_champsSpells+"EvelynnW.webp"),
			"Sferzata": require("../"+URL_champsSpells+"EvelynnE.webp"),
			"Ultima carezza": require("../"+URL_champsSpells+"EvelynnR.webp")
        },
    },
	Ezreal: {
        icon: require("../"+URL_champsIcon+"Ezreal.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Ezreal_0.webp"),
			require("../"+URL_champsSkins+"Ezreal_1.webp"),
			require("../"+URL_champsSkins+"Ezreal_2.webp"),
			require("../"+URL_champsSkins+"Ezreal_3.webp"),
			require("../"+URL_champsSkins+"Ezreal_4.webp"),
			require("../"+URL_champsSkins+"Ezreal_5.webp"),
			require("../"+URL_champsSkins+"Ezreal_6.webp"),
			require("../"+URL_champsSkins+"Ezreal_7.webp"),
			require("../"+URL_champsSkins+"Ezreal_8.webp"),
			require("../"+URL_champsSkins+"Ezreal_9.webp"),
			require("../"+URL_champsSkins+"Ezreal_18.webp"),
			require("../"+URL_champsSkins+"Ezreal_19.webp"),
			require("../"+URL_champsSkins+"Ezreal_20.webp"),
			require("../"+URL_champsSkins+"Ezreal_21.webp"),
			require("../"+URL_champsSkins+"Ezreal_22.webp"),
			require("../"+URL_champsSkins+"Ezreal_23.webp"),
			require("../"+URL_champsSkins+"Ezreal_25.webp")
        ],
        abilities: {
            "Forza dell'incantesimo nascente": require("../"+URL_champsSpells+"Ezreal_RisingSpellForce.webp"),
			"Colpo mistico": require("../"+URL_champsSpells+"EzrealQ.webp"),
			"Flusso essenziale": require("../"+URL_champsSpells+"EzrealW.webp"),
			"Spostamento arcano": require("../"+URL_champsSpells+"EzrealE.webp"),
			"Sbarramento energetico": require("../"+URL_champsSpells+"EzrealR.webp")
        },
    },
	Fiddlesticks: {
        icon: require("../"+URL_champsIcon+"FiddleSticks.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"FiddleSticks_0.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_1.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_2.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_3.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_4.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_5.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_6.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_7.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_8.webp"),
			require("../"+URL_champsSkins+"FiddleSticks_9.webp")
        ],
        abilities: {
            "Un innocuo spaventapasseri": require("../"+URL_champsSpells+"FiddleSticks_Passive.webp"),
			"Terrore": require("../"+URL_champsSpells+"FiddleSticksQ.webp"),
			"Raccolto abbondante": require("../"+URL_champsSpells+"FiddleSticksW.webp"),
			"Mietitura": require("../"+URL_champsSpells+"FiddleSticksE.webp"),
			"Tempesta di corvi": require("../"+URL_champsSpells+"FiddleSticksR.webp")
        },
    },
	Fiora: {
        icon: require("../"+URL_champsIcon+"Fiora.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Fiora_0.webp"),
			require("../"+URL_champsSkins+"Fiora_1.webp"),
			require("../"+URL_champsSkins+"Fiora_2.webp"),
			require("../"+URL_champsSkins+"Fiora_3.webp"),
			require("../"+URL_champsSkins+"Fiora_4.webp"),
			require("../"+URL_champsSkins+"Fiora_5.webp"),
			require("../"+URL_champsSkins+"Fiora_22.webp"),
			require("../"+URL_champsSkins+"Fiora_23.webp"),
			require("../"+URL_champsSkins+"Fiora_31.webp"),
			require("../"+URL_champsSkins+"Fiora_41.webp"),
			require("../"+URL_champsSkins+"Fiora_50.webp"),
			require("../"+URL_champsSkins+"Fiora_51.webp"),
			require("../"+URL_champsSkins+"Fiora_60.webp")
        ],
        abilities: {
            "Danza del duello": require("../"+URL_champsSpells+"Fiora_P.webp"),
			"Attacco repentino": require("../"+URL_champsSpells+"FioraQ.webp"),
			"Contrattacco": require("../"+URL_champsSpells+"FioraW.webp"),
			"Gioco di lama": require("../"+URL_champsSpells+"FioraE.webp"),
			"Sfida mirabolante": require("../"+URL_champsSpells+"FioraR.webp")
        },
    },
	Fizz: {
        icon: require("../"+URL_champsIcon+"Fizz.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Fizz_0.webp"),
			require("../"+URL_champsSkins+"Fizz_1.webp"),
			require("../"+URL_champsSkins+"Fizz_2.webp"),
			require("../"+URL_champsSkins+"Fizz_3.webp"),
			require("../"+URL_champsSkins+"Fizz_4.webp"),
			require("../"+URL_champsSkins+"Fizz_8.webp"),
			require("../"+URL_champsSkins+"Fizz_9.webp"),
			require("../"+URL_champsSkins+"Fizz_10.webp"),
			require("../"+URL_champsSkins+"Fizz_14.webp"),
			require("../"+URL_champsSkins+"Fizz_15.webp"),
			require("../"+URL_champsSkins+"Fizz_16.webp"),
			require("../"+URL_champsSkins+"Fizz_25.webp")
        ],
        abilities: {
            "Agile combattente": require("../"+URL_champsSpells+"Fizz_P.webp"),
			"Colpo degli aculei": require("../"+URL_champsSpells+"FizzQ.webp"),
			"Tridente della pietra di mare": require("../"+URL_champsSpells+"FizzW.webp"),
			"Giocoso/Ingannatore": require("../"+URL_champsSpells+"FizzE.webp"),
			"Evocazione acquatica": require("../"+URL_champsSpells+"FizzR.webp")
        },
    },
	Galio: {
        icon: require("../"+URL_champsIcon+"Galio.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Galio_0.webp"),
			require("../"+URL_champsSkins+"Galio_1.webp"),
			require("../"+URL_champsSkins+"Galio_2.webp"),
			require("../"+URL_champsSkins+"Galio_3.webp"),
			require("../"+URL_champsSkins+"Galio_4.webp"),
			require("../"+URL_champsSkins+"Galio_5.webp"),
			require("../"+URL_champsSkins+"Galio_6.webp"),
			require("../"+URL_champsSkins+"Galio_13.webp"),
			require("../"+URL_champsSkins+"Galio_19.webp")
        ],
        abilities: {
            "Distruzione del colosso": require("../"+URL_champsSpells+"Galio_Passive.webp"),
			"Venti di guerra": require("../"+URL_champsSpells+"GalioQ.webp"),
			"Scudo di Durand": require("../"+URL_champsSpells+"GalioW.webp"),
			"Pugno della giustizia": require("../"+URL_champsSpells+"GalioE.webp"),
			"Entrata dell'eroe": require("../"+URL_champsSpells+"GalioR.webp")
        },
    },
	Gangplank: {
        icon: require("../"+URL_champsIcon+"Gangplank.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Gangplank_0.webp"),
			require("../"+URL_champsSkins+"Gangplank_1.webp"),
			require("../"+URL_champsSkins+"Gangplank_2.webp"),
			require("../"+URL_champsSkins+"Gangplank_3.webp"),
			require("../"+URL_champsSkins+"Gangplank_4.webp"),
			require("../"+URL_champsSkins+"Gangplank_5.webp"),
			require("../"+URL_champsSkins+"Gangplank_6.webp"),
			require("../"+URL_champsSkins+"Gangplank_7.webp"),
			require("../"+URL_champsSkins+"Gangplank_8.webp"),
			require("../"+URL_champsSkins+"Gangplank_14.webp"),
			require("../"+URL_champsSkins+"Gangplank_21.webp")
        ],
        abilities: {
            "Prova del fuoco": require("../"+URL_champsSpells+"Gangplank_Passive.webp"),
			"Parrrlé": require("../"+URL_champsSpells+"GangplankQWrapper.webp"),
			"Rimuovi scorbuto": require("../"+URL_champsSpells+"GangplankW.webp"),
			"Barile di polvere da sparo": require("../"+URL_champsSpells+"GangplankE.webp"),
			"Sbarramento d'artiglieria": require("../"+URL_champsSpells+"GangplankR.webp")
        },
    },
	Garen: {
        icon: require("../"+URL_champsIcon+"Garen.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Garen_0.webp"),
			require("../"+URL_champsSkins+"Garen_1.webp"),
			require("../"+URL_champsSkins+"Garen_2.webp"),
			require("../"+URL_champsSkins+"Garen_3.webp"),
			require("../"+URL_champsSkins+"Garen_4.webp"),
			require("../"+URL_champsSkins+"Garen_5.webp"),
			require("../"+URL_champsSkins+"Garen_6.webp"),
			require("../"+URL_champsSkins+"Garen_10.webp"),
			require("../"+URL_champsSkins+"Garen_11.webp"),
			require("../"+URL_champsSkins+"Garen_13.webp"),
			require("../"+URL_champsSkins+"Garen_14.webp"),
			require("../"+URL_champsSkins+"Garen_22.webp"),
			require("../"+URL_champsSkins+"Garen_23.webp"),
			require("../"+URL_champsSkins+"Garen_24.webp")
        ],
        abilities: {
            "Perseveranza": require("../"+URL_champsSpells+"Garen_Passive.webp"),
			"Colpo decisivo": require("../"+URL_champsSpells+"GarenQ.webp"),
			"Coraggio": require("../"+URL_champsSpells+"GarenW.webp"),
			"Giudizio": require("../"+URL_champsSpells+"GarenE.webp"),
			"Giustizia di Demacia": require("../"+URL_champsSpells+"GarenR.webp")
        },
    },
	Gnar: {
        icon: require("../"+URL_champsIcon+"Gnar.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Gnar_0.webp"),
			require("../"+URL_champsSkins+"Gnar_1.webp"),
			require("../"+URL_champsSkins+"Gnar_2.webp"),
			require("../"+URL_champsSkins+"Gnar_3.webp"),
			require("../"+URL_champsSkins+"Gnar_4.webp"),
			require("../"+URL_champsSkins+"Gnar_13.webp"),
			require("../"+URL_champsSkins+"Gnar_14.webp"),
			require("../"+URL_champsSkins+"Gnar_15.webp"),
			require("../"+URL_champsSkins+"Gnar_22.webp")
        ],
        abilities: {
            "Gene della rabbia": require("../"+URL_champsSpells+"Gnar_Passive.webp"),
			"Lancio del boomerang/SPLAT!": require("../"+URL_champsSpells+"GnarQ.webp"),
			"Iperattività/BAM!": require("../"+URL_champsSpells+"GnarW.webp"),
			"Hop!/CRASH!": require("../"+URL_champsSpells+"GnarE.webp"),
			"GNAR!": require("../"+URL_champsSpells+"GnarR.webp")
        },
    },
	Gragas: {
        icon: require("../"+URL_champsIcon+"Gragas.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Gragas_0.webp"),
			require("../"+URL_champsSkins+"Gragas_1.webp"),
			require("../"+URL_champsSkins+"Gragas_2.webp"),
			require("../"+URL_champsSkins+"Gragas_3.webp"),
			require("../"+URL_champsSkins+"Gragas_4.webp"),
			require("../"+URL_champsSkins+"Gragas_5.webp"),
			require("../"+URL_champsSkins+"Gragas_6.webp"),
			require("../"+URL_champsSkins+"Gragas_7.webp"),
			require("../"+URL_champsSkins+"Gragas_8.webp"),
			require("../"+URL_champsSkins+"Gragas_9.webp"),
			require("../"+URL_champsSkins+"Gragas_10.webp"),
			require("../"+URL_champsSkins+"Gragas_11.webp")
        ],
        abilities: {
            "Happy Hour": require("../"+URL_champsSpells+"GragasPassiveHeal.webp"),
			"Barile rotolante": require("../"+URL_champsSpells+"GragasQ.webp"),
			"Furia alcolica": require("../"+URL_champsSpells+"GragasW.webp"),
			"Urto devastante": require("../"+URL_champsSpells+"GragasE.webp"),
			"Barile esplosivo": require("../"+URL_champsSpells+"GragasR.webp")
        },
    },
	Graves: {
        icon: require("../"+URL_champsIcon+"Graves.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Graves_0.webp"),
			require("../"+URL_champsSkins+"Graves_1.webp"),
			require("../"+URL_champsSkins+"Graves_2.webp"),
			require("../"+URL_champsSkins+"Graves_3.webp"),
			require("../"+URL_champsSkins+"Graves_4.webp"),
			require("../"+URL_champsSkins+"Graves_5.webp"),
			require("../"+URL_champsSkins+"Graves_6.webp"),
			require("../"+URL_champsSkins+"Graves_7.webp"),
			require("../"+URL_champsSkins+"Graves_14.webp"),
			require("../"+URL_champsSkins+"Graves_18.webp"),
			require("../"+URL_champsSkins+"Graves_25.webp"),
			require("../"+URL_champsSkins+"Graves_35.webp")
        ],
        abilities: {
            "Destino ignoto": require("../"+URL_champsSpells+"GravesTrueGrit.webp"),
			"Fine della corsa": require("../"+URL_champsSpells+"GravesQLineSpell.webp"),
			"Cortina fumogena": require("../"+URL_champsSpells+"GravesSmokeGrenade.webp"),
			"Attacco impetuoso": require("../"+URL_champsSpells+"GravesMove.webp"),
			"Danni collaterali": require("../"+URL_champsSpells+"GravesChargeShot.webp")
        },
    },
	Gwen: {
        icon: require("../"+URL_champsIcon+"Gwen.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Gwen_0.webp"),
			require("../"+URL_champsSkins+"Gwen_1.webp"),
			require("../"+URL_champsSkins+"Gwen_11.webp")
        ],
        abilities: {
            "Dono tagliente": require("../"+URL_champsSpells+"Gwen_Passive.webp"),
			"Zac, zac!": require("../"+URL_champsSpells+"GwenQ.webp"),
			"Sacra Nebbia": require("../"+URL_champsSpells+"GwenW.webp"),
			"Drittofilo": require("../"+URL_champsSpells+"GwenE.webp"),
			"Ricamo fatale": require("../"+URL_champsSpells+"GwenR.webp")
        },
    },
	Hecarim: {
        icon: require("../"+URL_champsIcon+"Hecarim.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Hecarim_0.webp"),
			require("../"+URL_champsSkins+"Hecarim_1.webp"),
			require("../"+URL_champsSkins+"Hecarim_2.webp"),
			require("../"+URL_champsSkins+"Hecarim_3.webp"),
			require("../"+URL_champsSkins+"Hecarim_4.webp"),
			require("../"+URL_champsSkins+"Hecarim_5.webp"),
			require("../"+URL_champsSkins+"Hecarim_6.webp"),
			require("../"+URL_champsSkins+"Hecarim_7.webp"),
			require("../"+URL_champsSkins+"Hecarim_8.webp"),
			require("../"+URL_champsSkins+"Hecarim_14.webp")
        ],
        abilities: {
            "Sentiero di guerra": require("../"+URL_champsSpells+"Hecarim_Passive.webp"),
			"Furia scatenata": require("../"+URL_champsSpells+"HecarimRapidSlash.webp"),
			"Spirito del terrore": require("../"+URL_champsSpells+"HecarimW.webp"),
			"Carica devastante": require("../"+URL_champsSpells+"HecarimRamp.webp"),
			"Massacro di ombre": require("../"+URL_champsSpells+"HecarimUlt.webp")
        },
    },
	Heimerdinger: {
        icon: require("../"+URL_champsIcon+"Heimerdinger.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Heimerdinger_0.webp"),
			require("../"+URL_champsSkins+"Heimerdinger_1.webp"),
			require("../"+URL_champsSkins+"Heimerdinger_2.webp"),
			require("../"+URL_champsSkins+"Heimerdinger_3.webp"),
			require("../"+URL_champsSkins+"Heimerdinger_4.webp"),
			require("../"+URL_champsSkins+"Heimerdinger_5.webp"),
			require("../"+URL_champsSkins+"Heimerdinger_6.webp"),
			require("../"+URL_champsSkins+"Heimerdinger_15.webp"),
			require("../"+URL_champsSkins+"Heimerdinger_24.webp")
        ],
        abilities: {
            "Affinità Hextech": require("../"+URL_champsSpells+"Heimerdinger_Passive.webp"),
			"Torretta H-28G avanzata": require("../"+URL_champsSpells+"HeimerdingerQ.webp"),
			"Micro-razzo hextech": require("../"+URL_champsSpells+"HeimerdingerW.webp"),
			"Granata electrotempesta CH-2": require("../"+URL_champsSpells+"HeimerdingerE.webp"),
			"POTENZIAMENTO!!!": require("../"+URL_champsSpells+"HeimerdingerR.webp")
        },
    },
	Illaoi: {
        icon: require("../"+URL_champsIcon+"Illaoi.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Illaoi_0.webp"),
			require("../"+URL_champsSkins+"Illaoi_1.webp"),
			require("../"+URL_champsSkins+"Illaoi_2.webp"),
			require("../"+URL_champsSkins+"Illaoi_10.webp")
        ],
        abilities: {
            "Profetessa di un'antica divinità": require("../"+URL_champsSpells+"Illaoi_P.webp"),
			"Colpo del tentacolo": require("../"+URL_champsSpells+"IllaoiQ.webp"),
			"Dura lezione": require("../"+URL_champsSpells+"IllaoiW.webp"),
			"Prova dello spirito": require("../"+URL_champsSpells+"IllaoiE.webp"),
			"Salto della fede": require("../"+URL_champsSpells+"IllaoiR.webp")
        },
    },
	Irelia: {
        icon: require("../"+URL_champsIcon+"Irelia.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Irelia_0.webp"),
			require("../"+URL_champsSkins+"Irelia_1.webp"),
			require("../"+URL_champsSkins+"Irelia_2.webp"),
			require("../"+URL_champsSkins+"Irelia_3.webp"),
			require("../"+URL_champsSkins+"Irelia_4.webp"),
			require("../"+URL_champsSkins+"Irelia_5.webp"),
			require("../"+URL_champsSkins+"Irelia_6.webp"),
			require("../"+URL_champsSkins+"Irelia_15.webp"),
			require("../"+URL_champsSkins+"Irelia_16.webp"),
			require("../"+URL_champsSkins+"Irelia_17.webp"),
			require("../"+URL_champsSkins+"Irelia_18.webp"),
			require("../"+URL_champsSkins+"Irelia_26.webp"),
			require("../"+URL_champsSkins+"Irelia_36.webp")
        ],
        abilities: {
            "Fervore di Ionia": require("../"+URL_champsSpells+"Irelia_Passive.webp"),
			"Impeto della lama": require("../"+URL_champsSpells+"IreliaQ.webp"),
			"Danza sprezzante": require("../"+URL_champsSpells+"IreliaW.webp"),
			"Duetto impeccabile": require("../"+URL_champsSpells+"IreliaE.webp"),
			"Lama dell'avanguardia": require("../"+URL_champsSpells+"IreliaR.webp")
        },
    },
	Ivern: {
        icon: require("../"+URL_champsIcon+"Ivern.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Ivern_0.webp"),
			require("../"+URL_champsSkins+"Ivern_1.webp"),
			require("../"+URL_champsSkins+"Ivern_2.webp"),
			require("../"+URL_champsSkins+"Ivern_11.webp")
        ],
        abilities: {
            "Amico della foresta": require("../"+URL_champsSpells+"IvernP.webp"),
			"Capturadix": require("../"+URL_champsSpells+"IvernQ.webp"),
			"Silvaflorida": require("../"+URL_champsSpells+"IvernW.webp"),
			"Seminascudum": require("../"+URL_champsSpells+"IvernE.webp"),
			"Daisy!": require("../"+URL_champsSpells+"IvernR.webp")
        },
    },
	Janna: {
        icon: require("../"+URL_champsIcon+"Janna.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Janna_0.webp"),
			require("../"+URL_champsSkins+"Janna_1.webp"),
			require("../"+URL_champsSkins+"Janna_2.webp"),
			require("../"+URL_champsSkins+"Janna_3.webp"),
			require("../"+URL_champsSkins+"Janna_4.webp"),
			require("../"+URL_champsSkins+"Janna_5.webp"),
			require("../"+URL_champsSkins+"Janna_6.webp"),
			require("../"+URL_champsSkins+"Janna_7.webp"),
			require("../"+URL_champsSkins+"Janna_8.webp"),
			require("../"+URL_champsSkins+"Janna_13.webp"),
			require("../"+URL_champsSkins+"Janna_20.webp"),
			require("../"+URL_champsSkins+"Janna_27.webp"),
			require("../"+URL_champsSkins+"Janna_36.webp")
        ],
        abilities: {
            "Vento in poppa": require("../"+URL_champsSpells+"Janna_Tailwind.webp"),
			"Tempesta ululante": require("../"+URL_champsSpells+"HowlingGale.webp"),
			"Zefiro": require("../"+URL_champsSpells+"SowTheWind.webp"),
			"Occhio del ciclone": require("../"+URL_champsSpells+"EyeOfTheStorm.webp"),
			"Monsone": require("../"+URL_champsSpells+"ReapTheWhirlwind.webp")
        },
    },
	JarvanIV: {
        icon: require("../"+URL_champsIcon+"JarvanIV.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"JarvanIV_0.webp"),
			require("../"+URL_champsSkins+"JarvanIV_1.webp"),
			require("../"+URL_champsSkins+"JarvanIV_2.webp"),
			require("../"+URL_champsSkins+"JarvanIV_3.webp"),
			require("../"+URL_champsSkins+"JarvanIV_4.webp"),
			require("../"+URL_champsSkins+"JarvanIV_5.webp"),
			require("../"+URL_champsSkins+"JarvanIV_6.webp"),
			require("../"+URL_champsSkins+"JarvanIV_7.webp"),
			require("../"+URL_champsSkins+"JarvanIV_8.webp"),
			require("../"+URL_champsSkins+"JarvanIV_9.webp"),
			require("../"+URL_champsSkins+"JarvanIV_11.webp"),
			require("../"+URL_champsSkins+"JarvanIV_21.webp"),
			require("../"+URL_champsSkins+"JarvanIV_30.webp")
        ],
        abilities: {
            "Cadenza marziale": require("../"+URL_champsSpells+"JarvanIV_MartialCadence.webp"),
			"Colpo del drago": require("../"+URL_champsSpells+"JarvanIVDragonStrike.webp"),
			"Spirito di Demacia": require("../"+URL_champsSpells+"JarvanIVGoldenAegis.webp"),
			"Stendardo di Demacia": require("../"+URL_champsSpells+"JarvanIVDemacianStandard.webp"),
			"Cataclisma": require("../"+URL_champsSpells+"JarvanIVCataclysm.webp")
        },
    },
	Jax: {
        icon: require("../"+URL_champsIcon+"Jax.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Jax_0.webp"),
			require("../"+URL_champsSkins+"Jax_1.webp"),
			require("../"+URL_champsSkins+"Jax_2.webp"),
			require("../"+URL_champsSkins+"Jax_3.webp"),
			require("../"+URL_champsSkins+"Jax_4.webp"),
			require("../"+URL_champsSkins+"Jax_5.webp"),
			require("../"+URL_champsSkins+"Jax_6.webp"),
			require("../"+URL_champsSkins+"Jax_7.webp"),
			require("../"+URL_champsSkins+"Jax_8.webp"),
			require("../"+URL_champsSkins+"Jax_12.webp"),
			require("../"+URL_champsSkins+"Jax_13.webp"),
			require("../"+URL_champsSkins+"Jax_14.webp"),
			require("../"+URL_champsSkins+"Jax_20.webp"),
			require("../"+URL_champsSkins+"Jax_21.webp")
        ],
        abilities: {
            "Assalto implacabile": require("../"+URL_champsSpells+"Armsmaster_MasterOfArms.webp"),
			"Balzo mistico": require("../"+URL_champsSpells+"JaxLeapStrike.webp"),
			"Caricamento energetico": require("../"+URL_champsSpells+"JaxEmpowerTwo.webp"),
			"Contrattacco stordente": require("../"+URL_champsSpells+"JaxCounterStrike.webp"),
			"Assalto del gran maestro": require("../"+URL_champsSpells+"JaxRelentlessAssault.webp")
        },
    },
	Jayce: {
        icon: require("../"+URL_champsIcon+"Jayce.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Jayce_0.webp"),
			require("../"+URL_champsSkins+"Jayce_1.webp"),
			require("../"+URL_champsSkins+"Jayce_2.webp"),
			require("../"+URL_champsSkins+"Jayce_3.webp"),
			require("../"+URL_champsSkins+"Jayce_4.webp"),
			require("../"+URL_champsSkins+"Jayce_5.webp"),
			require("../"+URL_champsSkins+"Jayce_15.webp"),
			require("../"+URL_champsSkins+"Jayce_24.webp")
        ],
        abilities: {
            "Condensatore hextech": require("../"+URL_champsSpells+"Jayce_Passive.webp"),
			"Verso l'infinito!/Esplosione shock": require("../"+URL_champsSpells+"JayceToTheSkies.webp"),
			"Campo di fulmini/Carica iperattiva": require("../"+URL_champsSpells+"JayceStaticField.webp"),
			"Colpo tonante/Portale acceleratore": require("../"+URL_champsSpells+"JayceThunderingBlow.webp"),
			"Cannone di mercurio/Martello di mercurio": require("../"+URL_champsSpells+"JayceStanceHtG.webp")
        },
    },
	Jhin: {
        icon: require("../"+URL_champsIcon+"Jhin.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Jhin_0.webp"),
			require("../"+URL_champsSkins+"Jhin_1.webp"),
			require("../"+URL_champsSkins+"Jhin_2.webp"),
			require("../"+URL_champsSkins+"Jhin_3.webp"),
			require("../"+URL_champsSkins+"Jhin_4.webp"),
			require("../"+URL_champsSkins+"Jhin_5.webp"),
			require("../"+URL_champsSkins+"Jhin_14.webp"),
			require("../"+URL_champsSkins+"Jhin_23.webp")
        ],
        abilities: {
            "Morte in quattro atti": require("../"+URL_champsSpells+"Jhin_P.webp"),
			"Ispirazione improvvisa": require("../"+URL_champsSpells+"JhinQ.webp"),
			"Florilegio letale": require("../"+URL_champsSpells+"JhinW.webp"),
			"Catturare il pubblico": require("../"+URL_champsSpells+"JhinE.webp"),
			"Chiamata alla ribalta": require("../"+URL_champsSpells+"JhinR.webp")
        },
    },
	Jinx: {
        icon: require("../"+URL_champsIcon+"Jinx.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Jinx_0.webp"),
			require("../"+URL_champsSkins+"Jinx_1.webp"),
			require("../"+URL_champsSkins+"Jinx_2.webp"),
			require("../"+URL_champsSkins+"Jinx_3.webp"),
			require("../"+URL_champsSkins+"Jinx_4.webp"),
			require("../"+URL_champsSkins+"Jinx_12.webp"),
			require("../"+URL_champsSkins+"Jinx_13.webp"),
			require("../"+URL_champsSkins+"Jinx_20.webp"),
			require("../"+URL_champsSkins+"Jinx_29.webp"),
			require("../"+URL_champsSkins+"Jinx_37.webp"),
			require("../"+URL_champsSkins+"Jinx_38.webp"),
			require("../"+URL_champsSkins+"Jinx_40.webp")
        ],
        abilities: {
            "Che emozione!": require("../"+URL_champsSpells+"Jinx_Passive.webp"),
			"Caaambio!": require("../"+URL_champsSpells+"JinxQ.webp"),
			"Zap!": require("../"+URL_champsSpells+"JinxW.webp"),
			"Fuochino fuochino!": require("../"+URL_champsSpells+"JinxE.webp"),
			"Super mega razzo della morte!": require("../"+URL_champsSpells+"JinxR.webp")
        },
    },
	Kaisa: {
        icon: require("../"+URL_champsIcon+"Kaisa.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Kaisa_0.webp"),
			require("../"+URL_champsSkins+"Kaisa_1.webp"),
			require("../"+URL_champsSkins+"Kaisa_14.webp"),
			require("../"+URL_champsSkins+"Kaisa_15.webp"),
			require("../"+URL_champsSkins+"Kaisa_16.webp"),
			require("../"+URL_champsSkins+"Kaisa_17.webp"),
			require("../"+URL_champsSkins+"Kaisa_26.webp"),
			require("../"+URL_champsSkins+"Kaisa_27.webp"),
			require("../"+URL_champsSkins+"Kaisa_29.webp"),
			require("../"+URL_champsSkins+"Kaisa_39.webp")
        ],
        abilities: {
            "Seconda pelle": require("../"+URL_champsSpells+"Kaisa_Passive.webp"),
			"Pioggia di Icathia": require("../"+URL_champsSpells+"KaisaQ.webp"),
			"Cercatore del Vuoto": require("../"+URL_champsSpells+"KaisaW.webp"),
			"Sovraccarico": require("../"+URL_champsSpells+"KaisaE.webp"),
			"Istinto omicida": require("../"+URL_champsSpells+"KaisaR.webp")
        },
    },
	Kalista: {
        icon: require("../"+URL_champsIcon+"Kalista.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Kalista_0.webp"),
			require("../"+URL_champsSkins+"Kalista_1.webp"),
			require("../"+URL_champsSkins+"Kalista_2.webp"),
			require("../"+URL_champsSkins+"Kalista_3.webp"),
			require("../"+URL_champsSkins+"Kalista_5.webp")
        ],
        abilities: {
            "Postura marziale": require("../"+URL_champsSpells+"Kalista_Passive.webp"),
			"Perforazione": require("../"+URL_champsSpells+"KalistaMysticShot.webp"),
			"Sentinella": require("../"+URL_champsSpells+"KalistaW.webp"),
			"Lacerazione": require("../"+URL_champsSpells+"KalistaExpungeWrapper.webp"),
			"Chiamata del fato": require("../"+URL_champsSpells+"KalistaRx.webp")
        },
    },
	Karma: {
        icon: require("../"+URL_champsIcon+"Karma.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Karma_0.webp"),
			require("../"+URL_champsSkins+"Karma_1.webp"),
			require("../"+URL_champsSkins+"Karma_2.webp"),
			require("../"+URL_champsSkins+"Karma_3.webp"),
			require("../"+URL_champsSkins+"Karma_4.webp"),
			require("../"+URL_champsSkins+"Karma_5.webp"),
			require("../"+URL_champsSkins+"Karma_6.webp"),
			require("../"+URL_champsSkins+"Karma_7.webp"),
			require("../"+URL_champsSkins+"Karma_8.webp"),
			require("../"+URL_champsSkins+"Karma_19.webp"),
			require("../"+URL_champsSkins+"Karma_26.webp"),
			require("../"+URL_champsSkins+"Karma_27.webp"),
			require("../"+URL_champsSkins+"Karma_44.webp")
        ],
        abilities: {
            "Falò": require("../"+URL_champsSpells+"Karma_Passive.webp"),
			"Fuoco interiore": require("../"+URL_champsSpells+"KarmaQ.webp"),
			"Volontà di ferro": require("../"+URL_champsSpells+"KarmaSpiritBind.webp"),
			"Ispirazione": require("../"+URL_champsSpells+"KarmaSolKimShield.webp"),
			"Mantra": require("../"+URL_champsSpells+"KarmaMantra.webp")
        },
    },
	Karthus: {
        icon: require("../"+URL_champsIcon+"Karthus.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Karthus_0.webp"),
			require("../"+URL_champsSkins+"Karthus_1.webp"),
			require("../"+URL_champsSkins+"Karthus_2.webp"),
			require("../"+URL_champsSkins+"Karthus_3.webp"),
			require("../"+URL_champsSkins+"Karthus_4.webp"),
			require("../"+URL_champsSkins+"Karthus_5.webp"),
			require("../"+URL_champsSkins+"Karthus_9.webp"),
			require("../"+URL_champsSkins+"Karthus_10.webp"),
			require("../"+URL_champsSkins+"Karthus_17.webp")
        ],
        abilities: {
            "Inganno alla morte": require("../"+URL_champsSpells+"Karthus_Passive.webp"),
			"Devastazione": require("../"+URL_champsSpells+"KarthusLayWasteA1.webp"),
			"Muro del dolore": require("../"+URL_champsSpells+"KarthusWallOfPain.webp"),
			"Profanare": require("../"+URL_champsSpells+"KarthusDefile.webp"),
			"Requiem": require("../"+URL_champsSpells+"KarthusFallenOne.webp")
        },
    },
	Kassadin: {
        icon: require("../"+URL_champsIcon+"Kassadin.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Kassadin_0.webp"),
			require("../"+URL_champsSkins+"Kassadin_1.webp"),
			require("../"+URL_champsSkins+"Kassadin_2.webp"),
			require("../"+URL_champsSkins+"Kassadin_3.webp"),
			require("../"+URL_champsSkins+"Kassadin_4.webp"),
			require("../"+URL_champsSkins+"Kassadin_5.webp"),
			require("../"+URL_champsSkins+"Kassadin_6.webp"),
			require("../"+URL_champsSkins+"Kassadin_14.webp"),
			require("../"+URL_champsSkins+"Kassadin_15.webp")
        ],
        abilities: {
            "Pietra del nulla": require("../"+URL_champsSpells+"Kassadin_Passive.webp"),
			"Sfera del nulla": require("../"+URL_champsSpells+"NullLance.webp"),
			"Lama degli inferi": require("../"+URL_champsSpells+"NetherBlade.webp"),
			"Pulsar della forza": require("../"+URL_champsSpells+"ForcePulse.webp"),
			"Frattura spazio temporale": require("../"+URL_champsSpells+"RiftWalk.webp")
        },
    },
	Katarina: {
        icon: require("../"+URL_champsIcon+"Katarina.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Katarina_0.webp"),
			require("../"+URL_champsSkins+"Katarina_1.webp"),
			require("../"+URL_champsSkins+"Katarina_2.webp"),
			require("../"+URL_champsSkins+"Katarina_3.webp"),
			require("../"+URL_champsSkins+"Katarina_4.webp"),
			require("../"+URL_champsSkins+"Katarina_5.webp"),
			require("../"+URL_champsSkins+"Katarina_6.webp"),
			require("../"+URL_champsSkins+"Katarina_7.webp"),
			require("../"+URL_champsSkins+"Katarina_8.webp"),
			require("../"+URL_champsSkins+"Katarina_9.webp"),
			require("../"+URL_champsSkins+"Katarina_10.webp"),
			require("../"+URL_champsSkins+"Katarina_12.webp"),
			require("../"+URL_champsSkins+"Katarina_21.webp"),
			require("../"+URL_champsSkins+"Katarina_29.webp")
        ],
        abilities: {
            "Voracità": require("../"+URL_champsSpells+"Katarina_Passive.webp"),
			"Lame danzanti": require("../"+URL_champsSpells+"KatarinaQ.webp"),
			"Preparazione": require("../"+URL_champsSpells+"KatarinaW.webp"),
			"Shunpo": require("../"+URL_champsSpells+"KatarinaEWrapper.webp"),
			"Loto mortale": require("../"+URL_champsSpells+"KatarinaR.webp")
        },
    },
	Kayle: {
        icon: require("../"+URL_champsIcon+"Kayle.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Kayle_0.webp"),
			require("../"+URL_champsSkins+"Kayle_1.webp"),
			require("../"+URL_champsSkins+"Kayle_2.webp"),
			require("../"+URL_champsSkins+"Kayle_3.webp"),
			require("../"+URL_champsSkins+"Kayle_4.webp"),
			require("../"+URL_champsSkins+"Kayle_5.webp"),
			require("../"+URL_champsSkins+"Kayle_6.webp"),
			require("../"+URL_champsSkins+"Kayle_7.webp"),
			require("../"+URL_champsSkins+"Kayle_8.webp"),
			require("../"+URL_champsSkins+"Kayle_9.webp"),
			require("../"+URL_champsSkins+"Kayle_15.webp"),
			require("../"+URL_champsSkins+"Kayle_24.webp"),
			require("../"+URL_champsSkins+"Kayle_33.webp")
        ],
        abilities: {
            "Ascesa divina": require("../"+URL_champsSpells+"Kayle_P.webp"),
			"Luce incandescente": require("../"+URL_champsSpells+"KayleQ.webp"),
			"Benedizione celestiale": require("../"+URL_champsSpells+"KayleW.webp"),
			"Lama di fuoco stellare": require("../"+URL_champsSpells+"KayleE.webp"),
			"Giudizio divino": require("../"+URL_champsSpells+"KayleR.webp")
        },
    },
	Kayn: {
        icon: require("../"+URL_champsIcon+"Kayn.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Kayn_0.webp"),
			require("../"+URL_champsSkins+"Kayn_1.webp"),
			require("../"+URL_champsSkins+"Kayn_2.webp"),
			require("../"+URL_champsSkins+"Kayn_8.webp"),
			require("../"+URL_champsSkins+"Kayn_9.webp")
        ],
        abilities: {
            "Falce darkin": require("../"+URL_champsSpells+"Kayn_Passive_Primary.webp"),
			"Mietitura": require("../"+URL_champsSpells+"KaynQ.webp"),
			"Squarcio": require("../"+URL_champsSpells+"KaynW.webp"),
			"Passo d'ombra": require("../"+URL_champsSpells+"KaynE.webp"),
			"Predatore oscuro": require("../"+URL_champsSpells+"KaynR.webp")
        },
    },
	Kennen: {
        icon: require("../"+URL_champsIcon+"Kennen.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Kennen_0.webp"),
			require("../"+URL_champsSkins+"Kennen_1.webp"),
			require("../"+URL_champsSkins+"Kennen_2.webp"),
			require("../"+URL_champsSkins+"Kennen_3.webp"),
			require("../"+URL_champsSkins+"Kennen_4.webp"),
			require("../"+URL_champsSkins+"Kennen_5.webp"),
			require("../"+URL_champsSkins+"Kennen_6.webp"),
			require("../"+URL_champsSkins+"Kennen_7.webp"),
			require("../"+URL_champsSkins+"Kennen_8.webp"),
			require("../"+URL_champsSkins+"Kennen_23.webp")
        ],
        abilities: {
            "Marchio della tempesta": require("../"+URL_champsSpells+"Kennen_Passive.webp"),
			"Shuriken tonante": require("../"+URL_champsSpells+"KennenShurikenHurlMissile1.webp"),
			"Sovraccarico elettrico": require("../"+URL_champsSpells+"KennenBringTheLight.webp"),
			"Furia elettrica": require("../"+URL_champsSpells+"KennenLightningRush.webp"),
			"Turbinio elettrizzante": require("../"+URL_champsSpells+"KennenShurikenStorm.webp")
        },
    },
	Khazix: {
        icon: require("../"+URL_champsIcon+"Khazix.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Khazix_0.webp"),
			require("../"+URL_champsSkins+"Khazix_1.webp"),
			require("../"+URL_champsSkins+"Khazix_2.webp"),
			require("../"+URL_champsSkins+"Khazix_3.webp"),
			require("../"+URL_champsSkins+"Khazix_4.webp"),
			require("../"+URL_champsSkins+"Khazix_11.webp"),
			require("../"+URL_champsSkins+"Khazix_60.webp")
        ],
        abilities: {
            "Minaccia celata": require("../"+URL_champsSpells+"Khazix_P.webp"),
			"Il sapore della paura": require("../"+URL_champsSpells+"KhazixQ.webp"),
			"Spina del Vuoto": require("../"+URL_champsSpells+"KhazixW.webp"),
			"Balzo": require("../"+URL_champsSpells+"KhazixE.webp"),
			"Assalto del Vuoto": require("../"+URL_champsSpells+"KhazixR.webp")
        },
    },
	Kindred: {
        icon: require("../"+URL_champsIcon+"Kindred.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Kindred_0.webp"),
			require("../"+URL_champsSkins+"Kindred_1.webp"),
			require("../"+URL_champsSkins+"Kindred_2.webp"),
			require("../"+URL_champsSkins+"Kindred_3.webp"),
			require("../"+URL_champsSkins+"Kindred_12.webp")
        ],
        abilities: {
            "Marchio dei cacciatori": require("../"+URL_champsSpells+"Kindred_Passive.webp"),
			"Danza delle frecce": require("../"+URL_champsSpells+"KindredQ.webp"),
			"Frenesia del Lupo": require("../"+URL_champsSpells+"KindredW.webp"),
			"Timore incombente": require("../"+URL_champsSpells+"KindredEWrapper.webp"),
			"Riposo dell'Agnella": require("../"+URL_champsSpells+"KindredR.webp")
        },
    },
	Kled: {
        icon: require("../"+URL_champsIcon+"Kled.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Kled_0.webp"),
			require("../"+URL_champsSkins+"Kled_1.webp"),
			require("../"+URL_champsSkins+"Kled_2.webp"),
			require("../"+URL_champsSkins+"Kled_9.webp")
        ],
        abilities: {
            "Skaarl, la lucertola codarda": require("../"+URL_champsSpells+"Kled_P.webp"),
			"Tagliola con corda": require("../"+URL_champsSpells+"KledQ.webp"),
			"Tendenze omicide": require("../"+URL_champsSpells+"KledW.webp"),
			"Giostrare": require("../"+URL_champsSpells+"KledE.webp"),
			"Caricaaaaaaaa!!!": require("../"+URL_champsSpells+"KledR.webp")
        },
    },
	KogMaw: {
        icon: require("../"+URL_champsIcon+"KogMaw.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"KogMaw_0.webp"),
			require("../"+URL_champsSkins+"KogMaw_1.webp"),
			require("../"+URL_champsSkins+"KogMaw_2.webp"),
			require("../"+URL_champsSkins+"KogMaw_3.webp"),
			require("../"+URL_champsSkins+"KogMaw_4.webp"),
			require("../"+URL_champsSkins+"KogMaw_5.webp"),
			require("../"+URL_champsSkins+"KogMaw_6.webp"),
			require("../"+URL_champsSkins+"KogMaw_7.webp"),
			require("../"+URL_champsSkins+"KogMaw_8.webp"),
			require("../"+URL_champsSkins+"KogMaw_9.webp"),
			require("../"+URL_champsSkins+"KogMaw_10.webp"),
			require("../"+URL_champsSkins+"KogMaw_19.webp"),
			require("../"+URL_champsSkins+"KogMaw_28.webp")
        ],
        abilities: {
            "Sorpresa di Icathia": require("../"+URL_champsSpells+"KogMaw_IcathianSurprise.webp"),
			"Sputo corrosivo": require("../"+URL_champsSpells+"KogMawQ.webp"),
			"Sbarramento bioarcano": require("../"+URL_champsSpells+"KogMawBioArcaneBarrage.webp"),
			"Melma del Vuoto": require("../"+URL_champsSpells+"KogMawVoidOoze.webp"),
			"Artiglieria vivente": require("../"+URL_champsSpells+"KogMawLivingArtillery.webp")
        },
    },
	Leblanc: {
        icon: require("../"+URL_champsIcon+"Leblanc.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Leblanc_0.webp"),
			require("../"+URL_champsSkins+"Leblanc_1.webp"),
			require("../"+URL_champsSkins+"Leblanc_2.webp"),
			require("../"+URL_champsSkins+"Leblanc_3.webp"),
			require("../"+URL_champsSkins+"Leblanc_4.webp"),
			require("../"+URL_champsSkins+"Leblanc_5.webp"),
			require("../"+URL_champsSkins+"Leblanc_12.webp"),
			require("../"+URL_champsSkins+"Leblanc_19.webp"),
			require("../"+URL_champsSkins+"Leblanc_20.webp"),
			require("../"+URL_champsSkins+"Leblanc_29.webp"),
			require("../"+URL_champsSkins+"Leblanc_33.webp"),
			require("../"+URL_champsSkins+"Leblanc_35.webp")
        ],
        abilities: {
            "Immagine riflessa": require("../"+URL_champsSpells+"LeBlancP.webp"),
			"Sigillo della malvagità": require("../"+URL_champsSpells+"LeblancQ.webp"),
			"Distorsione spaziale": require("../"+URL_champsSpells+"LeblancW.webp"),
			"Catene eteree": require("../"+URL_champsSpells+"LeblancE.webp"),
			"Simulacro": require("../"+URL_champsSpells+"LeblancR.webp")
        },
    },
	LeeSin: {
        icon: require("../"+URL_champsIcon+"LeeSin.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"LeeSin_0.webp"),
			require("../"+URL_champsSkins+"LeeSin_1.webp"),
			require("../"+URL_champsSkins+"LeeSin_2.webp"),
			require("../"+URL_champsSkins+"LeeSin_3.webp"),
			require("../"+URL_champsSkins+"LeeSin_4.webp"),
			require("../"+URL_champsSkins+"LeeSin_5.webp"),
			require("../"+URL_champsSkins+"LeeSin_6.webp"),
			require("../"+URL_champsSkins+"LeeSin_10.webp"),
			require("../"+URL_champsSkins+"LeeSin_11.webp"),
			require("../"+URL_champsSkins+"LeeSin_12.webp"),
			require("../"+URL_champsSkins+"LeeSin_27.webp"),
			require("../"+URL_champsSkins+"LeeSin_28.webp"),
			require("../"+URL_champsSkins+"LeeSin_29.webp"),
			require("../"+URL_champsSkins+"LeeSin_31.webp"),
			require("../"+URL_champsSkins+"LeeSin_39.webp")
        ],
        abilities: {
            "Millemani": require("../"+URL_champsSpells+"LeeSinPassive.webp"),
			"Onda sonica/Colpo risonante": require("../"+URL_champsSpells+"BlindMonkQOne.webp"),
			"Salvaguardia/Volontà di ferro": require("../"+URL_champsSpells+"BlindMonkWOne.webp"),
			"Tempesta/Menomazione": require("../"+URL_champsSpells+"BlindMonkEOne.webp"),
			"Furia del dragone": require("../"+URL_champsSpells+"BlindMonkRKick.webp")
        },
    },
	Leona: {
        icon: require("../"+URL_champsIcon+"Leona.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Leona_0.webp"),
			require("../"+URL_champsSkins+"Leona_1.webp"),
			require("../"+URL_champsSkins+"Leona_2.webp"),
			require("../"+URL_champsSkins+"Leona_3.webp"),
			require("../"+URL_champsSkins+"Leona_4.webp"),
			require("../"+URL_champsSkins+"Leona_8.webp"),
			require("../"+URL_champsSkins+"Leona_9.webp"),
			require("../"+URL_champsSkins+"Leona_10.webp"),
			require("../"+URL_champsSkins+"Leona_11.webp"),
			require("../"+URL_champsSkins+"Leona_12.webp"),
			require("../"+URL_champsSkins+"Leona_21.webp"),
			require("../"+URL_champsSkins+"Leona_22.webp"),
			require("../"+URL_champsSkins+"Leona_23.webp"),
			require("../"+URL_champsSkins+"Leona_33.webp")
        ],
        abilities: {
            "Luce del sole": require("../"+URL_champsSpells+"LeonaSunlight.webp"),
			"Scudo dell'alba": require("../"+URL_champsSpells+"LeonaShieldOfDaybreak.webp"),
			"Eclissi": require("../"+URL_champsSpells+"LeonaSolarBarrier.webp"),
			"Lama dello zenith": require("../"+URL_champsSpells+"LeonaZenithBlade.webp"),
			"Fiamma solare": require("../"+URL_champsSpells+"LeonaSolarFlare.webp")
        },
    },
	Lillia: {
        icon: require("../"+URL_champsIcon+"Lillia.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Lillia_0.webp"),
			require("../"+URL_champsSkins+"Lillia_1.webp"),
			require("../"+URL_champsSkins+"Lillia_10.webp")
        ],
        abilities: {
            "Bastone dei sogni": require("../"+URL_champsSpells+"Lillia_Icon_Passive.webp"),
			"Colpi in fiore": require("../"+URL_champsSpells+"LilliaQ.webp"),
			"Attenzione! Scusa!": require("../"+URL_champsSpells+"LilliaW.webp"),
			"Seme turbinante": require("../"+URL_champsSpells+"LilliaE.webp"),
			"Ninnananna melodica": require("../"+URL_champsSpells+"LilliaR.webp")
        },
    },
	Lissandra: {
        icon: require("../"+URL_champsIcon+"Lissandra.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Lissandra_0.webp"),
			require("../"+URL_champsSkins+"Lissandra_1.webp"),
			require("../"+URL_champsSkins+"Lissandra_2.webp"),
			require("../"+URL_champsSkins+"Lissandra_3.webp"),
			require("../"+URL_champsSkins+"Lissandra_4.webp"),
			require("../"+URL_champsSkins+"Lissandra_12.webp"),
			require("../"+URL_champsSkins+"Lissandra_23.webp")
        ],
        abilities: {
            "Sottomissione alla Figlia del gelo": require("../"+URL_champsSpells+"Lissandra_Passive.webp"),
			"Scheggia glaciale": require("../"+URL_champsSpells+"LissandraQ.webp"),
			"Circolo polare": require("../"+URL_champsSpells+"LissandraW.webp"),
			"Sentiero glaciale": require("../"+URL_champsSpells+"LissandraE.webp"),
			"Tomba di ghiaccio": require("../"+URL_champsSpells+"LissandraR.webp")
        },
    },
	Lucian: {
        icon: require("../"+URL_champsIcon+"Lucian.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Lucian_0.webp"),
			require("../"+URL_champsSkins+"Lucian_1.webp"),
			require("../"+URL_champsSkins+"Lucian_2.webp"),
			require("../"+URL_champsSkins+"Lucian_6.webp"),
			require("../"+URL_champsSkins+"Lucian_7.webp"),
			require("../"+URL_champsSkins+"Lucian_8.webp"),
			require("../"+URL_champsSkins+"Lucian_9.webp"),
			require("../"+URL_champsSkins+"Lucian_18.webp"),
			require("../"+URL_champsSkins+"Lucian_19.webp"),
			require("../"+URL_champsSkins+"Lucian_25.webp"),
			require("../"+URL_champsSkins+"Lucian_31.webp")
        ],
        abilities: {
            "Pistolero illuminato": require("../"+URL_champsSpells+"Lucian_Passive.webp"),
			"Luce perforante": require("../"+URL_champsSpells+"LucianQ.webp"),
			"Bagliore ardente": require("../"+URL_champsSpells+"LucianW.webp"),
			"Determinazione": require("../"+URL_champsSpells+"LucianE.webp"),
			"Sterminio": require("../"+URL_champsSpells+"LucianR.webp")
        },
    },
	Lulu: {
        icon: require("../"+URL_champsIcon+"Lulu.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Lulu_0.webp"),
			require("../"+URL_champsSkins+"Lulu_1.webp"),
			require("../"+URL_champsSkins+"Lulu_2.webp"),
			require("../"+URL_champsSkins+"Lulu_3.webp"),
			require("../"+URL_champsSkins+"Lulu_4.webp"),
			require("../"+URL_champsSkins+"Lulu_5.webp"),
			require("../"+URL_champsSkins+"Lulu_6.webp"),
			require("../"+URL_champsSkins+"Lulu_14.webp"),
			require("../"+URL_champsSkins+"Lulu_15.webp"),
			require("../"+URL_champsSkins+"Lulu_26.webp"),
			require("../"+URL_champsSkins+"Lulu_27.webp")
        ],
        abilities: {
            "Pix, compagna fatata": require("../"+URL_champsSpells+"Lulu_PixFaerieCompanion.webp"),
			"Lancia luccicante": require("../"+URL_champsSpells+"LuluQ.webp"),
			"Metamorfosi": require("../"+URL_champsSpells+"LuluW.webp"),
			"Aiuto, Pix!": require("../"+URL_champsSpells+"LuluE.webp"),
			"Crescita selvaggia": require("../"+URL_champsSpells+"LuluR.webp")
        },
    },
	Lux: {
        icon: require("../"+URL_champsIcon+"Lux.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Lux_0.webp"),
			require("../"+URL_champsSkins+"Lux_1.webp"),
			require("../"+URL_champsSkins+"Lux_2.webp"),
			require("../"+URL_champsSkins+"Lux_3.webp"),
			require("../"+URL_champsSkins+"Lux_4.webp"),
			require("../"+URL_champsSkins+"Lux_5.webp"),
			require("../"+URL_champsSkins+"Lux_6.webp"),
			require("../"+URL_champsSkins+"Lux_7.webp"),
			require("../"+URL_champsSkins+"Lux_8.webp"),
			require("../"+URL_champsSkins+"Lux_14.webp"),
			require("../"+URL_champsSkins+"Lux_15.webp"),
			require("../"+URL_champsSkins+"Lux_16.webp"),
			require("../"+URL_champsSkins+"Lux_17.webp"),
			require("../"+URL_champsSkins+"Lux_18.webp"),
			require("../"+URL_champsSkins+"Lux_19.webp"),
			require("../"+URL_champsSkins+"Lux_29.webp"),
			require("../"+URL_champsSkins+"Lux_39.webp"),
			require("../"+URL_champsSkins+"Lux_40.webp")
        ],
        abilities: {
            "Illuminazione": require("../"+URL_champsSpells+"LuxIlluminatingFraulein.webp"),
			"Prigione luminosa": require("../"+URL_champsSpells+"LuxLightBinding.webp"),
			"Barriera prismatica": require("../"+URL_champsSpells+"LuxPrismaticWave.webp"),
			"Singolarità lucente": require("../"+URL_champsSpells+"LuxLightStrikeKugel.webp"),
			"Scintilla finale": require("../"+URL_champsSpells+"LuxR.webp")
        },
    },
	Malphite: {
        icon: require("../"+URL_champsIcon+"Malphite.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Malphite_0.webp"),
			require("../"+URL_champsSkins+"Malphite_1.webp"),
			require("../"+URL_champsSkins+"Malphite_2.webp"),
			require("../"+URL_champsSkins+"Malphite_3.webp"),
			require("../"+URL_champsSkins+"Malphite_4.webp"),
			require("../"+URL_champsSkins+"Malphite_5.webp"),
			require("../"+URL_champsSkins+"Malphite_6.webp"),
			require("../"+URL_champsSkins+"Malphite_7.webp"),
			require("../"+URL_champsSkins+"Malphite_16.webp"),
			require("../"+URL_champsSkins+"Malphite_23.webp"),
			require("../"+URL_champsSkins+"Malphite_24.webp"),
			require("../"+URL_champsSkins+"Malphite_25.webp"),
			require("../"+URL_champsSkins+"Malphite_27.webp")
        ],
        abilities: {
            "Scudo granitico": require("../"+URL_champsSpells+"Malphite_GraniteShield.webp"),
			"Scheggia sismica": require("../"+URL_champsSpells+"SeismicShard.webp"),
			"Ruggito del tuono": require("../"+URL_champsSpells+"Obduracy.webp"),
			"Onda d'urto": require("../"+URL_champsSpells+"Landslide.webp"),
			"Forza inarrestabile": require("../"+URL_champsSpells+"UFSlash.webp")
        },
    },
	Malzahar: {
        icon: require("../"+URL_champsIcon+"Malzahar.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Malzahar_0.webp"),
			require("../"+URL_champsSkins+"Malzahar_1.webp"),
			require("../"+URL_champsSkins+"Malzahar_2.webp"),
			require("../"+URL_champsSkins+"Malzahar_3.webp"),
			require("../"+URL_champsSkins+"Malzahar_4.webp"),
			require("../"+URL_champsSkins+"Malzahar_5.webp"),
			require("../"+URL_champsSkins+"Malzahar_6.webp"),
			require("../"+URL_champsSkins+"Malzahar_7.webp"),
			require("../"+URL_champsSkins+"Malzahar_9.webp"),
			require("../"+URL_champsSkins+"Malzahar_18.webp"),
			require("../"+URL_champsSkins+"Malzahar_28.webp")
        ],
        abilities: {
            "Spostamento del Vuoto": require("../"+URL_champsSpells+"Malzahar_Passive.webp"),
			"Portali del Vuoto": require("../"+URL_champsSpells+"MalzaharQ.webp"),
			"Sciame del Vuoto": require("../"+URL_champsSpells+"MalzaharW.webp"),
			"Visioni malefiche": require("../"+URL_champsSpells+"MalzaharE.webp"),
			"Presa infernale": require("../"+URL_champsSpells+"MalzaharR.webp")
        },
    },
	Maokai: {
        icon: require("../"+URL_champsIcon+"Maokai.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Maokai_0.webp"),
			require("../"+URL_champsSkins+"Maokai_1.webp"),
			require("../"+URL_champsSkins+"Maokai_2.webp"),
			require("../"+URL_champsSkins+"Maokai_3.webp"),
			require("../"+URL_champsSkins+"Maokai_4.webp"),
			require("../"+URL_champsSkins+"Maokai_5.webp"),
			require("../"+URL_champsSkins+"Maokai_6.webp"),
			require("../"+URL_champsSkins+"Maokai_7.webp"),
			require("../"+URL_champsSkins+"Maokai_16.webp"),
			require("../"+URL_champsSkins+"Maokai_24.webp")
        ],
        abilities: {
            "Assorbi magia": require("../"+URL_champsSpells+"Maokai_Passive.webp"),
			"Legnata": require("../"+URL_champsSpells+"MaokaiQ.webp"),
			"Avanzata turbinante": require("../"+URL_champsSpells+"MaokaiW.webp"),
			"Lancio verde": require("../"+URL_champsSpells+"MaokaiE.webp"),
			"Presa della natura": require("../"+URL_champsSpells+"MaokaiR.webp")
        },
    },
	MasterYi: {
        icon: require("../"+URL_champsIcon+"MasterYi.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"MasterYi_0.webp"),
			require("../"+URL_champsSkins+"MasterYi_1.webp"),
			require("../"+URL_champsSkins+"MasterYi_2.webp"),
			require("../"+URL_champsSkins+"MasterYi_3.webp"),
			require("../"+URL_champsSkins+"MasterYi_4.webp"),
			require("../"+URL_champsSkins+"MasterYi_5.webp"),
			require("../"+URL_champsSkins+"MasterYi_9.webp"),
			require("../"+URL_champsSkins+"MasterYi_10.webp"),
			require("../"+URL_champsSkins+"MasterYi_11.webp"),
			require("../"+URL_champsSkins+"MasterYi_17.webp"),
			require("../"+URL_champsSkins+"MasterYi_24.webp"),
			require("../"+URL_champsSkins+"MasterYi_33.webp"),
			require("../"+URL_champsSkins+"MasterYi_42.webp")
        ],
        abilities: {
            "Doppio colpo": require("../"+URL_champsSpells+"MasterYi_Passive1.webp"),
			"Colpo alfa": require("../"+URL_champsSpells+"AlphaStrike.webp"),
			"Meditazione": require("../"+URL_champsSpells+"Meditate.webp"),
			"Stile Wuju": require("../"+URL_champsSpells+"WujuStyle.webp"),
			"Agilità superiore": require("../"+URL_champsSpells+"Highlander.webp")
        },
    },
	MissFortune: {
        icon: require("../"+URL_champsIcon+"MissFortune.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"MissFortune_0.webp"),
			require("../"+URL_champsSkins+"MissFortune_1.webp"),
			require("../"+URL_champsSkins+"MissFortune_2.webp"),
			require("../"+URL_champsSkins+"MissFortune_3.webp"),
			require("../"+URL_champsSkins+"MissFortune_4.webp"),
			require("../"+URL_champsSkins+"MissFortune_5.webp"),
			require("../"+URL_champsSkins+"MissFortune_6.webp"),
			require("../"+URL_champsSkins+"MissFortune_7.webp"),
			require("../"+URL_champsSkins+"MissFortune_8.webp"),
			require("../"+URL_champsSkins+"MissFortune_9.webp"),
			require("../"+URL_champsSkins+"MissFortune_15.webp"),
			require("../"+URL_champsSkins+"MissFortune_16.webp"),
			require("../"+URL_champsSkins+"MissFortune_17.webp"),
			require("../"+URL_champsSkins+"MissFortune_18.webp"),
			require("../"+URL_champsSkins+"MissFortune_20.webp"),
			require("../"+URL_champsSkins+"MissFortune_21.webp"),
			require("../"+URL_champsSkins+"MissFortune_31.webp"),
			require("../"+URL_champsSkins+"MissFortune_33.webp")
        ],
        abilities: {
            "Un colpo e via": require("../"+URL_champsSpells+"MissFortune_W.webp"),
			"Doppio colpo": require("../"+URL_champsSpells+"MissFortuneRicochetShot.webp"),
			"Andatura": require("../"+URL_champsSpells+"MissFortuneViciousStrikes.webp"),
			"Pioggia di piombo": require("../"+URL_champsSpells+"MissFortuneScattershot.webp"),
			"Tempesta di proiettili": require("../"+URL_champsSpells+"MissFortuneBulletTime.webp")
        },
    },
	MonkeyKing: {
        icon: require("../"+URL_champsIcon+"MonkeyKing.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"MonkeyKing_0.webp"),
			require("../"+URL_champsSkins+"MonkeyKing_1.webp"),
			require("../"+URL_champsSkins+"MonkeyKing_2.webp"),
			require("../"+URL_champsSkins+"MonkeyKing_3.webp"),
			require("../"+URL_champsSkins+"MonkeyKing_4.webp"),
			require("../"+URL_champsSkins+"MonkeyKing_5.webp"),
			require("../"+URL_champsSkins+"MonkeyKing_6.webp"),
			require("../"+URL_champsSkins+"MonkeyKing_7.webp")
        ],
        abilities: {
            "Pelle di pietra": require("../"+URL_champsSpells+"MonkeyKingStoneSkin.webp"),
			"Colpo devastante": require("../"+URL_champsSpells+"MonkeyKingDoubleAttack.webp"),
			"Guerriero insidioso": require("../"+URL_champsSpells+"MonkeyKingDecoy.webp"),
			"Colpo della nuvola": require("../"+URL_champsSpells+"MonkeyKingNimbus.webp"),
			"Ciclone": require("../"+URL_champsSpells+"MonkeyKingSpinToWin.webp")
        },
    },
	Mordekaiser: {
        icon: require("../"+URL_champsIcon+"Mordekaiser.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Mordekaiser_0.webp"),
			require("../"+URL_champsSkins+"Mordekaiser_1.webp"),
			require("../"+URL_champsSkins+"Mordekaiser_2.webp"),
			require("../"+URL_champsSkins+"Mordekaiser_3.webp"),
			require("../"+URL_champsSkins+"Mordekaiser_4.webp"),
			require("../"+URL_champsSkins+"Mordekaiser_5.webp"),
			require("../"+URL_champsSkins+"Mordekaiser_6.webp"),
			require("../"+URL_champsSkins+"Mordekaiser_13.webp"),
			require("../"+URL_champsSkins+"Mordekaiser_23.webp")
        ],
        abilities: {
            "Ascesa delle Tenebre": require("../"+URL_champsSpells+"MordekaiserPassive.webp"),
			"Annientamento": require("../"+URL_champsSpells+"MordekaiserQ.webp"),
			"Incrollabile": require("../"+URL_champsSpells+"MordekaiserW.webp"),
			"Stretta mortale": require("../"+URL_champsSpells+"MordekaiserE.webp"),
			"Regno della Morte": require("../"+URL_champsSpells+"MordekaiserR.webp")
        },
    },
	Morgana: {
        icon: require("../"+URL_champsIcon+"Morgana.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Morgana_0.webp"),
			require("../"+URL_champsSkins+"Morgana_1.webp"),
			require("../"+URL_champsSkins+"Morgana_2.webp"),
			require("../"+URL_champsSkins+"Morgana_3.webp"),
			require("../"+URL_champsSkins+"Morgana_4.webp"),
			require("../"+URL_champsSkins+"Morgana_5.webp"),
			require("../"+URL_champsSkins+"Morgana_6.webp"),
			require("../"+URL_champsSkins+"Morgana_10.webp"),
			require("../"+URL_champsSkins+"Morgana_11.webp"),
			require("../"+URL_champsSkins+"Morgana_17.webp"),
			require("../"+URL_champsSkins+"Morgana_26.webp"),
			require("../"+URL_champsSkins+"Morgana_39.webp"),
			require("../"+URL_champsSkins+"Morgana_41.webp")
        ],
        abilities: {
            "Risucchio spirituale": require("../"+URL_champsSpells+"FallenAngel_Empathize.webp"),
			"Legame oscuro": require("../"+URL_champsSpells+"MorganaQ.webp"),
			"Ombra tormentata": require("../"+URL_champsSpells+"MorganaW.webp"),
			"Scudo nero": require("../"+URL_champsSpells+"MorganaE.webp"),
			"Catene spirituali": require("../"+URL_champsSpells+"MorganaR.webp")
        },
    },
	Nami: {
        icon: require("../"+URL_champsIcon+"Nami.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Nami_0.webp"),
			require("../"+URL_champsSkins+"Nami_1.webp"),
			require("../"+URL_champsSkins+"Nami_2.webp"),
			require("../"+URL_champsSkins+"Nami_3.webp"),
			require("../"+URL_champsSkins+"Nami_7.webp"),
			require("../"+URL_champsSkins+"Nami_8.webp"),
			require("../"+URL_champsSkins+"Nami_9.webp"),
			require("../"+URL_champsSkins+"Nami_15.webp"),
			require("../"+URL_champsSkins+"Nami_24.webp"),
			require("../"+URL_champsSkins+"Nami_32.webp")
        ],
        abilities: {
            "Maree dirompenti": require("../"+URL_champsSpells+"NamiPassive.webp"),
			"Prigione acquatica": require("../"+URL_champsSpells+"NamiQ.webp"),
			"Flusso e riflusso": require("../"+URL_champsSpells+"NamiW.webp"),
			"Benedizione delle maree": require("../"+URL_champsSpells+"NamiE.webp"),
			"Mareggiata": require("../"+URL_champsSpells+"NamiR.webp")
        },
    },
	Nasus: {
        icon: require("../"+URL_champsIcon+"Nasus.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Nasus_0.webp"),
			require("../"+URL_champsSkins+"Nasus_1.webp"),
			require("../"+URL_champsSkins+"Nasus_2.webp"),
			require("../"+URL_champsSkins+"Nasus_3.webp"),
			require("../"+URL_champsSkins+"Nasus_4.webp"),
			require("../"+URL_champsSkins+"Nasus_5.webp"),
			require("../"+URL_champsSkins+"Nasus_6.webp"),
			require("../"+URL_champsSkins+"Nasus_10.webp"),
			require("../"+URL_champsSkins+"Nasus_11.webp"),
			require("../"+URL_champsSkins+"Nasus_16.webp"),
			require("../"+URL_champsSkins+"Nasus_25.webp")
        ],
        abilities: {
            "Divora anime": require("../"+URL_champsSpells+"Nasus_Passive.webp"),
			"Attacco incrementale": require("../"+URL_champsSpells+"NasusQ.webp"),
			"Deperimento": require("../"+URL_champsSpells+"NasusW.webp"),
			"Fuoco dello spirito": require("../"+URL_champsSpells+"NasusE.webp"),
			"Furia della sabbia": require("../"+URL_champsSpells+"NasusR.webp")
        },
    },
	Nautilus: {
        icon: require("../"+URL_champsIcon+"Nautilus.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Nautilus_0.webp"),
			require("../"+URL_champsSkins+"Nautilus_1.webp"),
			require("../"+URL_champsSkins+"Nautilus_2.webp"),
			require("../"+URL_champsSkins+"Nautilus_3.webp"),
			require("../"+URL_champsSkins+"Nautilus_4.webp"),
			require("../"+URL_champsSkins+"Nautilus_5.webp"),
			require("../"+URL_champsSkins+"Nautilus_6.webp"),
			require("../"+URL_champsSkins+"Nautilus_9.webp")
        ],
        abilities: {
            "Colpo travolgente": require("../"+URL_champsSpells+"Nautilus_StaggeringBlow.webp"),
			"Ancora del terrore": require("../"+URL_champsSpells+"NautilusAnchorDrag.webp"),
			"Furia del Titano": require("../"+URL_champsSpells+"NautilusPiercingGaze.webp"),
			"Frantumazione terrena": require("../"+URL_champsSpells+"NautilusSplashZone.webp"),
			"Carica di profondità": require("../"+URL_champsSpells+"NautilusGrandLine.webp")
        },
    },
	Neeko: {
        icon: require("../"+URL_champsIcon+"Neeko.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Neeko_0.webp"),
			require("../"+URL_champsSkins+"Neeko_1.webp"),
			require("../"+URL_champsSkins+"Neeko_10.webp"),
			require("../"+URL_champsSkins+"Neeko_11.webp"),
			require("../"+URL_champsSkins+"Neeko_12.webp"),
			require("../"+URL_champsSkins+"Neeko_21.webp")
        ],
        abilities: {
            "Stile innato": require("../"+URL_champsSpells+"Neeko_P.webp"),
			"Bocciolo esplosivo": require("../"+URL_champsSpells+"NeekoQ.webp"),
			"Sdoppiaforma": require("../"+URL_champsSpells+"NeekoW.webp"),
			"Groviglio": require("../"+URL_champsSpells+"NeekoE.webp"),
			"Furia florida": require("../"+URL_champsSpells+"NeekoR.webp")
        },
    },
	Nidalee: {
        icon: require("../"+URL_champsIcon+"Nidalee.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Nidalee_0.webp"),
			require("../"+URL_champsSkins+"Nidalee_1.webp"),
			require("../"+URL_champsSkins+"Nidalee_2.webp"),
			require("../"+URL_champsSkins+"Nidalee_3.webp"),
			require("../"+URL_champsSkins+"Nidalee_4.webp"),
			require("../"+URL_champsSkins+"Nidalee_5.webp"),
			require("../"+URL_champsSkins+"Nidalee_6.webp"),
			require("../"+URL_champsSkins+"Nidalee_7.webp"),
			require("../"+URL_champsSkins+"Nidalee_8.webp"),
			require("../"+URL_champsSkins+"Nidalee_9.webp"),
			require("../"+URL_champsSkins+"Nidalee_11.webp"),
			require("../"+URL_champsSkins+"Nidalee_18.webp"),
			require("../"+URL_champsSkins+"Nidalee_27.webp")
        ],
        abilities: {
            "A caccia": require("../"+URL_champsSpells+"Nidalee_Passive.webp"),
			"Lancio del giavellotto / Colpo fatale": require("../"+URL_champsSpells+"JavelinToss.webp"),
			"Trappola dannosa / Balzo": require("../"+URL_champsSpells+"Bushwhack.webp"),
			"Spirito primitivo / Artiglio": require("../"+URL_champsSpells+"PrimalSurge.webp"),
			"Aspetto del puma": require("../"+URL_champsSpells+"AspectOfTheCougar.webp")
        },
    },
	Nocturne: {
        icon: require("../"+URL_champsIcon+"Nocturne.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Nocturne_0.webp"),
			require("../"+URL_champsSkins+"Nocturne_1.webp"),
			require("../"+URL_champsSkins+"Nocturne_2.webp"),
			require("../"+URL_champsSkins+"Nocturne_3.webp"),
			require("../"+URL_champsSkins+"Nocturne_4.webp"),
			require("../"+URL_champsSkins+"Nocturne_5.webp"),
			require("../"+URL_champsSkins+"Nocturne_6.webp"),
			require("../"+URL_champsSkins+"Nocturne_7.webp"),
			require("../"+URL_champsSkins+"Nocturne_16.webp")
        ],
        abilities: {
            "Lame dell'ombra": require("../"+URL_champsSpells+"Nocturne_UmbraBlades.webp"),
			"Portatore del crepuscolo": require("../"+URL_champsSpells+"NocturneDuskbringer.webp"),
			"Veste delle tenebre": require("../"+URL_champsSpells+"NocturneShroudofDarkness.webp"),
			"Orrore inenarrabile": require("../"+URL_champsSpells+"NocturneUnspeakableHorror.webp"),
			"Paranoia": require("../"+URL_champsSpells+"NocturneParanoia.webp")
        },
    },
	Nunu: {
        icon: require("../"+URL_champsIcon+"Nunu.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Nunu_0.webp"),
			require("../"+URL_champsSkins+"Nunu_1.webp"),
			require("../"+URL_champsSkins+"Nunu_2.webp"),
			require("../"+URL_champsSkins+"Nunu_3.webp"),
			require("../"+URL_champsSkins+"Nunu_4.webp"),
			require("../"+URL_champsSkins+"Nunu_5.webp"),
			require("../"+URL_champsSkins+"Nunu_6.webp"),
			require("../"+URL_champsSkins+"Nunu_7.webp"),
			require("../"+URL_champsSkins+"Nunu_8.webp"),
			require("../"+URL_champsSkins+"Nunu_16.webp"),
			require("../"+URL_champsSkins+"Nunu_26.webp")
        ],
        abilities: {
            "Chiamata del Freljord": require("../"+URL_champsSpells+"NunuPassive.webp"),
			"Consumazione": require("../"+URL_champsSpells+"NunuQ.webp"),
			"La palla di neve più grande di sempre!": require("../"+URL_champsSpells+"NunuW.webp"),
			"Raffica di palle di neve": require("../"+URL_champsSpells+"NunuE.webp"),
			"Zero Assoluto": require("../"+URL_champsSpells+"NunuR.webp")
        },
    },
	Olaf: {
        icon: require("../"+URL_champsIcon+"Olaf.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Olaf_0.webp"),
			require("../"+URL_champsSkins+"Olaf_1.webp"),
			require("../"+URL_champsSkins+"Olaf_2.webp"),
			require("../"+URL_champsSkins+"Olaf_3.webp"),
			require("../"+URL_champsSkins+"Olaf_4.webp"),
			require("../"+URL_champsSkins+"Olaf_5.webp"),
			require("../"+URL_champsSkins+"Olaf_6.webp"),
			require("../"+URL_champsSkins+"Olaf_15.webp"),
			require("../"+URL_champsSkins+"Olaf_16.webp"),
			require("../"+URL_champsSkins+"Olaf_25.webp"),
			require("../"+URL_champsSkins+"Olaf_35.webp")
        ],
        abilities: {
            "Rabbia del berserker": require("../"+URL_champsSpells+"Olaf_Passive.webp"),
			"Ascia turbinante": require("../"+URL_champsSpells+"OlafAxeThrowCast.webp"),
			"Colpi feroci": require("../"+URL_champsSpells+"OlafFrenziedStrikes.webp"),
			"Attacco temerario": require("../"+URL_champsSpells+"OlafRecklessStrike.webp"),
			"Ragnarok": require("../"+URL_champsSpells+"OlafRagnarok.webp")
        },
    },
	Orianna: {
        icon: require("../"+URL_champsIcon+"Orianna.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Orianna_0.webp"),
			require("../"+URL_champsSkins+"Orianna_1.webp"),
			require("../"+URL_champsSkins+"Orianna_2.webp"),
			require("../"+URL_champsSkins+"Orianna_3.webp"),
			require("../"+URL_champsSkins+"Orianna_4.webp"),
			require("../"+URL_champsSkins+"Orianna_5.webp"),
			require("../"+URL_champsSkins+"Orianna_6.webp"),
			require("../"+URL_champsSkins+"Orianna_7.webp"),
			require("../"+URL_champsSkins+"Orianna_8.webp"),
			require("../"+URL_champsSkins+"Orianna_11.webp"),
			require("../"+URL_champsSkins+"Orianna_20.webp")
        ],
        abilities: {
            "Movimento meccanico": require("../"+URL_champsSpells+"OriannaPassive.webp"),
			"Comando: attacco": require("../"+URL_champsSpells+"OrianaIzunaCommand.webp"),
			"Comando: Dissonanza": require("../"+URL_champsSpells+"OrianaDissonanceCommand.webp"),
			"Comando: protezione": require("../"+URL_champsSpells+"OrianaRedactCommand.webp"),
			"Comando: onda d'urto": require("../"+URL_champsSpells+"OrianaDetonateCommand.webp")
        },
    },
	Ornn: {
        icon: require("../"+URL_champsIcon+"Ornn.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Ornn_0.webp"),
			require("../"+URL_champsSkins+"Ornn_1.webp"),
			require("../"+URL_champsSkins+"Ornn_2.webp")
        ],
        abilities: {
            "Forgia incarnata": require("../"+URL_champsSpells+"OrnnP.webp"),
			"Fenditura vulcanica": require("../"+URL_champsSpells+"OrnnQ.webp"),
			"Soffio del mantice": require("../"+URL_champsSpells+"OrnnW.webp"),
			"Carica ardente": require("../"+URL_champsSpells+"OrnnE.webp"),
			"Richiamo del dio della forgia": require("../"+URL_champsSpells+"OrnnR.webp")
        },
    },
	Pantheon: {
        icon: require("../"+URL_champsIcon+"Pantheon.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Pantheon_0.webp"),
			require("../"+URL_champsSkins+"Pantheon_1.webp"),
			require("../"+URL_champsSkins+"Pantheon_2.webp"),
			require("../"+URL_champsSkins+"Pantheon_3.webp"),
			require("../"+URL_champsSkins+"Pantheon_4.webp"),
			require("../"+URL_champsSkins+"Pantheon_5.webp"),
			require("../"+URL_champsSkins+"Pantheon_6.webp"),
			require("../"+URL_champsSkins+"Pantheon_7.webp"),
			require("../"+URL_champsSkins+"Pantheon_8.webp"),
			require("../"+URL_champsSkins+"Pantheon_16.webp"),
			require("../"+URL_champsSkins+"Pantheon_25.webp"),
			require("../"+URL_champsSkins+"Pantheon_26.webp")
        ],
        abilities: {
            "Volontà dei mortali": require("../"+URL_champsSpells+"Pantheon_Passive.webp"),
			"Lancia astrale": require("../"+URL_champsSpells+"PantheonQ.webp"),
			"Slancio dello scudo": require("../"+URL_champsSpells+"PantheonW.webp"),
			"Egida devastante": require("../"+URL_champsSpells+"PantheonE.webp"),
			"Gran cometa": require("../"+URL_champsSpells+"PantheonR.webp")
        },
    },
	Poppy: {
        icon: require("../"+URL_champsIcon+"Poppy.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Poppy_0.webp"),
			require("../"+URL_champsSkins+"Poppy_1.webp"),
			require("../"+URL_champsSkins+"Poppy_2.webp"),
			require("../"+URL_champsSkins+"Poppy_3.webp"),
			require("../"+URL_champsSkins+"Poppy_4.webp"),
			require("../"+URL_champsSkins+"Poppy_5.webp"),
			require("../"+URL_champsSkins+"Poppy_6.webp"),
			require("../"+URL_champsSkins+"Poppy_7.webp"),
			require("../"+URL_champsSkins+"Poppy_14.webp"),
			require("../"+URL_champsSkins+"Poppy_15.webp"),
			require("../"+URL_champsSkins+"Poppy_16.webp"),
			require("../"+URL_champsSkins+"Poppy_24.webp")
        ],
        abilities: {
            "Ambasciatrice di ferro": require("../"+URL_champsSpells+"Poppy_Passive.webp"),
			"Shock martellante": require("../"+URL_champsSpells+"PoppyQ.webp"),
			"Presenza ferrea": require("../"+URL_champsSpells+"PoppyW.webp"),
			"Carica eroica": require("../"+URL_champsSpells+"PoppyE.webp"),
			"Verdetto del custode": require("../"+URL_champsSpells+"PoppyR.webp")
        },
    },
	Pyke: {
        icon: require("../"+URL_champsIcon+"Pyke.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Pyke_0.webp"),
			require("../"+URL_champsSkins+"Pyke_1.webp"),
			require("../"+URL_champsSkins+"Pyke_9.webp"),
			require("../"+URL_champsSkins+"Pyke_16.webp"),
			require("../"+URL_champsSkins+"Pyke_25.webp"),
			require("../"+URL_champsSkins+"Pyke_34.webp"),
			require("../"+URL_champsSkins+"Pyke_44.webp")
        ],
        abilities: {
            "Dono degli affogati": require("../"+URL_champsSpells+"PykePassive.webp"),
			"Arpionaggio": require("../"+URL_champsSpells+"PykeQ.webp"),
			"Immersione spettrale": require("../"+URL_champsSpells+"PykeW.webp"),
			"Risacca fantasma": require("../"+URL_champsSpells+"PykeE.webp"),
			"Morte dagli abissi": require("../"+URL_champsSpells+"PykeR.webp")
        },
    },
	Qiyana: {
        icon: require("../"+URL_champsIcon+"Qiyana.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Qiyana_0.webp"),
			require("../"+URL_champsSkins+"Qiyana_1.webp"),
			require("../"+URL_champsSkins+"Qiyana_2.webp"),
			require("../"+URL_champsSkins+"Qiyana_10.webp"),
			require("../"+URL_champsSkins+"Qiyana_11.webp"),
			require("../"+URL_champsSkins+"Qiyana_20.webp"),
			require("../"+URL_champsSkins+"Qiyana_21.webp")
        ],
        abilities: {
            "Privilegio regale": require("../"+URL_champsSpells+"Qiyana_Passive.webp"),
			"Furia elementale/Lama di Ixtal": require("../"+URL_champsSpells+"QiyanaQ.webp"),
			"Terraformazione": require("../"+URL_champsSpells+"QiyanaW.webp"),
			"Sfrontatezza": require("../"+URL_champsSpells+"QiyanaE.webp"),
			"Sommo Talento": require("../"+URL_champsSpells+"QiyanaR.webp")
        },
    },
	Quinn: {
        icon: require("../"+URL_champsIcon+"Quinn.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Quinn_0.webp"),
			require("../"+URL_champsSkins+"Quinn_1.webp"),
			require("../"+URL_champsSkins+"Quinn_2.webp"),
			require("../"+URL_champsSkins+"Quinn_3.webp"),
			require("../"+URL_champsSkins+"Quinn_4.webp"),
			require("../"+URL_champsSkins+"Quinn_5.webp")
        ],
        abilities: {
            "Rapace": require("../"+URL_champsSpells+"Quinn_Passive.webp"),
			"Assalto accecante": require("../"+URL_champsSpells+"QuinnQ.webp"),
			"Sensi affinati": require("../"+URL_champsSpells+"QuinnW.webp"),
			"Colpo acrobatico": require("../"+URL_champsSpells+"QuinnE.webp"),
			"Dietro le linee nemiche": require("../"+URL_champsSpells+"QuinnR.webp")
        },
    },
	Rakan: {
        icon: require("../"+URL_champsIcon+"Rakan.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Rakan_0.webp"),
			require("../"+URL_champsSkins+"Rakan_1.webp"),
			require("../"+URL_champsSkins+"Rakan_2.webp"),
			require("../"+URL_champsSkins+"Rakan_3.webp"),
			require("../"+URL_champsSkins+"Rakan_4.webp"),
			require("../"+URL_champsSkins+"Rakan_5.webp"),
			require("../"+URL_champsSkins+"Rakan_9.webp")
        ],
        abilities: {
            "Manto piumato": require("../"+URL_champsSpells+"Rakan_P.webp"),
			"Piuma incantata": require("../"+URL_champsSpells+"RakanQ.webp"),
			"Ingresso trionfale": require("../"+URL_champsSpells+"RakanW.webp"),
			"Danza di guerra": require("../"+URL_champsSpells+"RakanE.webp"),
			"Toccata e fuga": require("../"+URL_champsSpells+"RakanR.webp")
        },
    },
	Rammus: {
        icon: require("../"+URL_champsIcon+"Rammus.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Rammus_0.webp"),
			require("../"+URL_champsSkins+"Rammus_1.webp"),
			require("../"+URL_champsSkins+"Rammus_2.webp"),
			require("../"+URL_champsSkins+"Rammus_3.webp"),
			require("../"+URL_champsSkins+"Rammus_4.webp"),
			require("../"+URL_champsSkins+"Rammus_5.webp"),
			require("../"+URL_champsSkins+"Rammus_6.webp"),
			require("../"+URL_champsSkins+"Rammus_7.webp"),
			require("../"+URL_champsSkins+"Rammus_8.webp"),
			require("../"+URL_champsSkins+"Rammus_16.webp"),
			require("../"+URL_champsSkins+"Rammus_17.webp")
        ],
        abilities: {
            "Guscio spinato": require("../"+URL_champsSpells+"Armordillo_ScavengeArmor.webp"),
			"Ruota della distruzione": require("../"+URL_champsSpells+"PowerBall.webp"),
			"Posizione difensiva a riccio": require("../"+URL_champsSpells+"DefensiveBallCurl.webp"),
			"Provocazione furiosa": require("../"+URL_champsSpells+"PuncturingTaunt.webp"),
			"Schianto ascendente": require("../"+URL_champsSpells+"Tremors2.webp")
        },
    },
	RekSai: {
        icon: require("../"+URL_champsIcon+"RekSai.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"RekSai_0.webp"),
			require("../"+URL_champsSkins+"RekSai_1.webp"),
			require("../"+URL_champsSkins+"RekSai_2.webp"),
			require("../"+URL_champsSkins+"RekSai_9.webp"),
			require("../"+URL_champsSkins+"RekSai_17.webp")
        ],
        abilities: {
            "Furia degli Xer'Sai": require("../"+URL_champsSpells+"RekSai_Passive.webp"),
			"Ira della regina / Colpo tracciante": require("../"+URL_champsSpells+"RekSaiQ.webp"),
			"Immersione / Emersione": require("../"+URL_champsSpells+"RekSaiW.webp"),
			"Morso furioso / Galleria": require("../"+URL_champsSpells+"RekSaiE.webp"),
			"Velocità del Vuoto": require("../"+URL_champsSpells+"RekSaiRWrapper.webp")
        },
    },
	Rell: {
        icon: require("../"+URL_champsIcon+"Rell.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Rell_0.webp"),
			require("../"+URL_champsSkins+"Rell_1.webp")
        ],
        abilities: {
            "Rompere gli schemi": require("../"+URL_champsSpells+"RellP.webp"),
			"Colpo frantumante": require("../"+URL_champsSpells+"RellQ.webp"),
			"Ferromanzia: Schianto": require("../"+URL_champsSpells+"RellW_Dismount.webp"),
			"Attira e respingi": require("../"+URL_champsSpells+"RellE.webp"),
			"Tempesta magnetica": require("../"+URL_champsSpells+"RellR.webp")
        },
    },
	Renata: {
        icon: require("../"+URL_champsIcon+"Renata.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Renata_0.webp"),
			require("../"+URL_champsSkins+"Renata_1.webp")
        ],
        abilities: {
            "Influenza": require("../"+URL_champsSpells+"Renata_P.webp"),
			"Stretta di mano": require("../"+URL_champsSpells+"RenataQ.webp"),
			"Salvataggio": require("../"+URL_champsSpells+"RenataW.webp"),
			"Programma di fedeltà": require("../"+URL_champsSpells+"RenataE.webp"),
			"Acquisizione forzata": require("../"+URL_champsSpells+"RenataR.webp")
        },
    },
	Renekton: {
        icon: require("../"+URL_champsIcon+"Renekton.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Renekton_0.webp"),
			require("../"+URL_champsSkins+"Renekton_1.webp"),
			require("../"+URL_champsSkins+"Renekton_2.webp"),
			require("../"+URL_champsSkins+"Renekton_3.webp"),
			require("../"+URL_champsSkins+"Renekton_4.webp"),
			require("../"+URL_champsSkins+"Renekton_5.webp"),
			require("../"+URL_champsSkins+"Renekton_6.webp"),
			require("../"+URL_champsSkins+"Renekton_7.webp"),
			require("../"+URL_champsSkins+"Renekton_8.webp"),
			require("../"+URL_champsSkins+"Renekton_9.webp"),
			require("../"+URL_champsSkins+"Renekton_17.webp"),
			require("../"+URL_champsSkins+"Renekton_18.webp"),
			require("../"+URL_champsSkins+"Renekton_26.webp")
        ],
        abilities: {
            "Regno della rabbia": require("../"+URL_champsSpells+"Renekton_Passive.webp"),
			"Elimina i deboli": require("../"+URL_champsSpells+"RenektonCleave.webp"),
			"Predatore spietato": require("../"+URL_champsSpells+"RenektonPreExecute.webp"),
			"Taglia e affetta": require("../"+URL_champsSpells+"RenektonSliceAndDice.webp"),
			"Dominus": require("../"+URL_champsSpells+"RenektonReignOfTheTyrant.webp")
        },
    },
	Rengar: {
        icon: require("../"+URL_champsIcon+"Rengar.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Rengar_0.webp"),
			require("../"+URL_champsSkins+"Rengar_1.webp"),
			require("../"+URL_champsSkins+"Rengar_2.webp"),
			require("../"+URL_champsSkins+"Rengar_3.webp"),
			require("../"+URL_champsSkins+"Rengar_8.webp"),
			require("../"+URL_champsSkins+"Rengar_15.webp"),
			require("../"+URL_champsSkins+"Rengar_23.webp"),
			require("../"+URL_champsSkins+"Rengar_30.webp")
        ],
        abilities: {
            "Predatore elusivo": require("../"+URL_champsSpells+"Rengar_P.webp"),
			"Barbarie": require("../"+URL_champsSpells+"RengarQ.webp"),
			"Ruggito di battaglia": require("../"+URL_champsSpells+"RengarW.webp"),
			"Colpo di bola": require("../"+URL_champsSpells+"RengarE.webp"),
			"Brivido della caccia": require("../"+URL_champsSpells+"RengarR.webp")
        },
    },
	Riven: {
        icon: require("../"+URL_champsIcon+"Riven.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Riven_0.webp"),
			require("../"+URL_champsSkins+"Riven_1.webp"),
			require("../"+URL_champsSkins+"Riven_2.webp"),
			require("../"+URL_champsSkins+"Riven_3.webp"),
			require("../"+URL_champsSkins+"Riven_4.webp"),
			require("../"+URL_champsSkins+"Riven_5.webp"),
			require("../"+URL_champsSkins+"Riven_6.webp"),
			require("../"+URL_champsSkins+"Riven_7.webp"),
			require("../"+URL_champsSkins+"Riven_16.webp"),
			require("../"+URL_champsSkins+"Riven_18.webp"),
			require("../"+URL_champsSkins+"Riven_20.webp"),
			require("../"+URL_champsSkins+"Riven_22.webp"),
			require("../"+URL_champsSkins+"Riven_23.webp"),
			require("../"+URL_champsSkins+"Riven_34.webp"),
			require("../"+URL_champsSkins+"Riven_44.webp"),
			require("../"+URL_champsSkins+"Riven_45.webp")
        ],
        abilities: {
            "Lama runica": require("../"+URL_champsSpells+"RivenRunicBlades.webp"),
			"Ali spezzate": require("../"+URL_champsSpells+"RivenTriCleave.webp"),
			"Esplosione del Ki": require("../"+URL_champsSpells+"RivenMartyr.webp"),
			"Valore": require("../"+URL_champsSpells+"RivenFeint.webp"),
			"Lama dell'esiliato": require("../"+URL_champsSpells+"RivenFengShuiEngine.webp")
        },
    },
	Rumble: {
        icon: require("../"+URL_champsIcon+"Rumble.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Rumble_0.webp"),
			require("../"+URL_champsSkins+"Rumble_1.webp"),
			require("../"+URL_champsSkins+"Rumble_2.webp"),
			require("../"+URL_champsSkins+"Rumble_3.webp"),
			require("../"+URL_champsSkins+"Rumble_4.webp"),
			require("../"+URL_champsSkins+"Rumble_13.webp")
        ],
        abilities: {
            "Titano della discarica": require("../"+URL_champsSpells+"Rumble_JunkyardTitan1.webp"),
			"Sputafuoco": require("../"+URL_champsSpells+"RumbleFlameThrower.webp"),
			"Scudo di rottami": require("../"+URL_champsSpells+"RumbleShield.webp"),
			"Arpione elettrico": require("../"+URL_champsSpells+"RumbleGrenade.webp"),
			"Livellatore missilistico": require("../"+URL_champsSpells+"RumbleCarpetBomb.webp")
        },
    },
	Ryze: {
        icon: require("../"+URL_champsIcon+"Ryze.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Ryze_0.webp"),
			require("../"+URL_champsSkins+"Ryze_1.webp"),
			require("../"+URL_champsSkins+"Ryze_2.webp"),
			require("../"+URL_champsSkins+"Ryze_3.webp"),
			require("../"+URL_champsSkins+"Ryze_4.webp"),
			require("../"+URL_champsSkins+"Ryze_5.webp"),
			require("../"+URL_champsSkins+"Ryze_6.webp"),
			require("../"+URL_champsSkins+"Ryze_7.webp"),
			require("../"+URL_champsSkins+"Ryze_8.webp"),
			require("../"+URL_champsSkins+"Ryze_9.webp"),
			require("../"+URL_champsSkins+"Ryze_10.webp"),
			require("../"+URL_champsSkins+"Ryze_11.webp"),
			require("../"+URL_champsSkins+"Ryze_13.webp")
        ],
        abilities: {
            "Padronanza arcana": require("../"+URL_champsSpells+"Ryze_P.webp"),
			"Sovraccarico": require("../"+URL_champsSpells+"RyzeQWrapper.webp"),
			"Prigione runica": require("../"+URL_champsSpells+"RyzeW.webp"),
			"Flusso incantato": require("../"+URL_champsSpells+"RyzeE.webp"),
			"Portale dei reami": require("../"+URL_champsSpells+"RyzeR.webp")
        },
    },
	Samira: {
        icon: require("../"+URL_champsIcon+"Samira.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Samira_0.webp"),
			require("../"+URL_champsSkins+"Samira_1.webp"),
			require("../"+URL_champsSkins+"Samira_10.webp")
        ],
        abilities: {
            "Impulso temerario": require("../"+URL_champsSpells+"SamiraP.webp"),
			"Dono naturale": require("../"+URL_champsSpells+"SamiraQ.webp"),
			"Lama turbinante": require("../"+URL_champsSpells+"SamiraW.webp"),
			"Scatto selvaggio": require("../"+URL_champsSpells+"SamiraE.webp"),
			"Grilletto infernale": require("../"+URL_champsSpells+"SamiraR.webp")
        },
    },
	Sejuani: {
        icon: require("../"+URL_champsIcon+"Sejuani.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Sejuani_0.webp"),
			require("../"+URL_champsSkins+"Sejuani_1.webp"),
			require("../"+URL_champsSkins+"Sejuani_2.webp"),
			require("../"+URL_champsSkins+"Sejuani_3.webp"),
			require("../"+URL_champsSkins+"Sejuani_4.webp"),
			require("../"+URL_champsSkins+"Sejuani_5.webp"),
			require("../"+URL_champsSkins+"Sejuani_6.webp"),
			require("../"+URL_champsSkins+"Sejuani_7.webp"),
			require("../"+URL_champsSkins+"Sejuani_8.webp"),
			require("../"+URL_champsSkins+"Sejuani_15.webp"),
			require("../"+URL_champsSkins+"Sejuani_16.webp")
        ],
        abilities: {
            "Furia del nord": require("../"+URL_champsSpells+"Sejuani_passive.webp"),
			"Assalto artico": require("../"+URL_champsSpells+"SejuaniQ.webp"),
			"Rabbia dell'inverno": require("../"+URL_champsSpells+"SejuaniW.webp"),
			"Permafrost": require("../"+URL_champsSpells+"SejuaniE.webp"),
			"Prigione glaciale": require("../"+URL_champsSpells+"SejuaniR.webp")
        },
    },
	Senna: {
        icon: require("../"+URL_champsIcon+"Senna.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Senna_0.webp"),
			require("../"+URL_champsSkins+"Senna_1.webp"),
			require("../"+URL_champsSkins+"Senna_9.webp"),
			require("../"+URL_champsSkins+"Senna_10.webp"),
			require("../"+URL_champsSkins+"Senna_16.webp")
        ],
        abilities: {
            "Assoluzione": require("../"+URL_champsSpells+"Senna_Passive.webp"),
			"Oscurità perforante": require("../"+URL_champsSpells+"SennaQ.webp"),
			"Ultimo abbraccio": require("../"+URL_champsSpells+"SennaW.webp"),
			"Anatema della Nebbia Oscura": require("../"+URL_champsSpells+"SennaE.webp"),
			"Tenebre dell'Alba": require("../"+URL_champsSpells+"SennaR.webp")
        },
    },
	Seraphine: {
        icon: require("../"+URL_champsIcon+"Seraphine.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Seraphine_0.webp"),
			require("../"+URL_champsSkins+"Seraphine_1.webp"),
			require("../"+URL_champsSkins+"Seraphine_2.webp"),
			require("../"+URL_champsSkins+"Seraphine_3.webp"),
			require("../"+URL_champsSkins+"Seraphine_4.webp")
        ],
        abilities: {
            "Presenza scenica": require("../"+URL_champsSpells+"Seraphine_Passive.webp"),
			"Nota acuta": require("../"+URL_champsSpells+"SeraphineQ.webp"),
			"Surround": require("../"+URL_champsSpells+"SeraphineW.webp"),
			"Cambio di ritmo": require("../"+URL_champsSpells+"SeraphineE.webp"),
			"Bis!": require("../"+URL_champsSpells+"SeraphineR.webp")
        },
    },
	Sett: {
        icon: require("../"+URL_champsIcon+"Sett.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Sett_0.webp"),
			require("../"+URL_champsSkins+"Sett_1.webp"),
			require("../"+URL_champsSkins+"Sett_8.webp"),
			require("../"+URL_champsSkins+"Sett_9.webp"),
			require("../"+URL_champsSkins+"Sett_10.webp"),
			require("../"+URL_champsSkins+"Sett_19.webp")
        ],
        abilities: {
            "Determinazione della fossa": require("../"+URL_champsSpells+"Sett_P.webp"),
			"Diamoci dentro": require("../"+URL_champsSpells+"SettQ.webp"),
			"Pugni nelle mani": require("../"+URL_champsSpells+"SettW.webp"),
			"Faccia sfasciata": require("../"+URL_champsSpells+"SettE.webp"),
			"Il pezzo forte": require("../"+URL_champsSpells+"SettR.webp")
        },
    },
	Shaco: {
        icon: require("../"+URL_champsIcon+"Shaco.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Shaco_0.webp"),
			require("../"+URL_champsSkins+"Shaco_1.webp"),
			require("../"+URL_champsSkins+"Shaco_2.webp"),
			require("../"+URL_champsSkins+"Shaco_3.webp"),
			require("../"+URL_champsSkins+"Shaco_4.webp"),
			require("../"+URL_champsSkins+"Shaco_5.webp"),
			require("../"+URL_champsSkins+"Shaco_6.webp"),
			require("../"+URL_champsSkins+"Shaco_7.webp"),
			require("../"+URL_champsSkins+"Shaco_8.webp"),
			require("../"+URL_champsSkins+"Shaco_15.webp"),
			require("../"+URL_champsSkins+"Shaco_23.webp")
        ],
        abilities: {
            "Tradimento": require("../"+URL_champsSpells+"Jester_CarefulStrikes.webp"),
			"Inganno": require("../"+URL_champsSpells+"Deceive.webp"),
			"Scatola Joker a molla": require("../"+URL_champsSpells+"JackInTheBox.webp"),
			"Due lame del veleno": require("../"+URL_champsSpells+"TwoShivPoison.webp"),
			"Allucinazione": require("../"+URL_champsSpells+"HallucinateFull.webp")
        },
    },
	Shen: {
        icon: require("../"+URL_champsIcon+"Shen.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Shen_0.webp"),
			require("../"+URL_champsSkins+"Shen_1.webp"),
			require("../"+URL_champsSkins+"Shen_2.webp"),
			require("../"+URL_champsSkins+"Shen_3.webp"),
			require("../"+URL_champsSkins+"Shen_4.webp"),
			require("../"+URL_champsSkins+"Shen_5.webp"),
			require("../"+URL_champsSkins+"Shen_6.webp"),
			require("../"+URL_champsSkins+"Shen_15.webp"),
			require("../"+URL_champsSkins+"Shen_16.webp"),
			require("../"+URL_champsSkins+"Shen_22.webp"),
			require("../"+URL_champsSkins+"Shen_40.webp")
        ],
        abilities: {
            "Barriera di Ki": require("../"+URL_champsSpells+"Shen_Passive.webp"),
			"Assalto crepuscolare": require("../"+URL_champsSpells+"ShenQ.webp"),
			"Rifugio spirituale": require("../"+URL_champsSpells+"ShenW.webp"),
			"Impeto dell'ombra": require("../"+URL_champsSpells+"ShenE.webp"),
			"Uniti nelle difficoltà": require("../"+URL_champsSpells+"ShenR.webp")
        },
    },
	Shyvana: {
        icon: require("../"+URL_champsIcon+"Shyvana.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Shyvana_0.webp"),
			require("../"+URL_champsSkins+"Shyvana_1.webp"),
			require("../"+URL_champsSkins+"Shyvana_2.webp"),
			require("../"+URL_champsSkins+"Shyvana_3.webp"),
			require("../"+URL_champsSkins+"Shyvana_4.webp"),
			require("../"+URL_champsSkins+"Shyvana_5.webp"),
			require("../"+URL_champsSkins+"Shyvana_6.webp"),
			require("../"+URL_champsSkins+"Shyvana_8.webp")
        ],
        abilities: {
            "Furia del dragonide": require("../"+URL_champsSpells+"ShyvanaReinforcedScales.webp"),
			"Doppio morso": require("../"+URL_champsSpells+"ShyvanaDoubleAttack.webp"),
			"Ciclone incendiario": require("../"+URL_champsSpells+"ShyvanaImmolationAura.webp"),
			"Alito di fuoco": require("../"+URL_champsSpells+"ShyvanaFireball.webp"),
			"Discesa del dragone": require("../"+URL_champsSpells+"ShyvanaTransformCast.webp")
        },
    },
	Singed: {
        icon: require("../"+URL_champsIcon+"Singed.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Singed_0.webp"),
			require("../"+URL_champsSkins+"Singed_1.webp"),
			require("../"+URL_champsSkins+"Singed_2.webp"),
			require("../"+URL_champsSkins+"Singed_3.webp"),
			require("../"+URL_champsSkins+"Singed_4.webp"),
			require("../"+URL_champsSkins+"Singed_5.webp"),
			require("../"+URL_champsSkins+"Singed_6.webp"),
			require("../"+URL_champsSkins+"Singed_7.webp"),
			require("../"+URL_champsSkins+"Singed_8.webp"),
			require("../"+URL_champsSkins+"Singed_9.webp"),
			require("../"+URL_champsSkins+"Singed_10.webp")
        ],
        abilities: {
            "Scia tossica": require("../"+URL_champsSpells+"Singed_Passive.webp"),
			"Scia velenosa": require("../"+URL_champsSpells+"PoisonTrail.webp"),
			"Mega adesivo": require("../"+URL_champsSpells+"MegaAdhesive.webp"),
			"Scagliamento": require("../"+URL_champsSpells+"Fling.webp"),
			"Pozione della pazzia": require("../"+URL_champsSpells+"InsanityPotion.webp")
        },
    },
	Sion: {
        icon: require("../"+URL_champsIcon+"Sion.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Sion_0.webp"),
			require("../"+URL_champsSkins+"Sion_1.webp"),
			require("../"+URL_champsSkins+"Sion_2.webp"),
			require("../"+URL_champsSkins+"Sion_3.webp"),
			require("../"+URL_champsSkins+"Sion_4.webp"),
			require("../"+URL_champsSkins+"Sion_5.webp"),
			require("../"+URL_champsSkins+"Sion_14.webp"),
			require("../"+URL_champsSkins+"Sion_22.webp")
        ],
        abilities: {
            "Gloria nella morte": require("../"+URL_champsSpells+"Sion_Passive1.webp"),
			"Decimare": require("../"+URL_champsSpells+"SionQ.webp"),
			"Fornace delle anime": require("../"+URL_champsSpells+"SionW.webp"),
			"Urlo del massacratore": require("../"+URL_champsSpells+"SionE.webp"),
			"Carica inarrestabile": require("../"+URL_champsSpells+"SionR.webp")
        },
    },
	Sivir: {
        icon: require("../"+URL_champsIcon+"Sivir.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Sivir_0.webp"),
			require("../"+URL_champsSkins+"Sivir_1.webp"),
			require("../"+URL_champsSkins+"Sivir_2.webp"),
			require("../"+URL_champsSkins+"Sivir_3.webp"),
			require("../"+URL_champsSkins+"Sivir_4.webp"),
			require("../"+URL_champsSkins+"Sivir_5.webp"),
			require("../"+URL_champsSkins+"Sivir_6.webp"),
			require("../"+URL_champsSkins+"Sivir_7.webp"),
			require("../"+URL_champsSkins+"Sivir_8.webp"),
			require("../"+URL_champsSkins+"Sivir_9.webp"),
			require("../"+URL_champsSkins+"Sivir_10.webp"),
			require("../"+URL_champsSkins+"Sivir_16.webp"),
			require("../"+URL_champsSkins+"Sivir_25.webp"),
			require("../"+URL_champsSkins+"Sivir_34.webp")
        ],
        abilities: {
            "Gioco di gambe": require("../"+URL_champsSpells+"Sivir_Passive.webp"),
			"Lama boomerang": require("../"+URL_champsSpells+"SivirQ.webp"),
			"Colpo di rimbalzo": require("../"+URL_champsSpells+"SivirW.webp"),
			"Scudo incantato": require("../"+URL_champsSpells+"SivirE.webp"),
			"Caccia grossa": require("../"+URL_champsSpells+"SivirR.webp")
        },
    },
	Skarner: {
        icon: require("../"+URL_champsIcon+"Skarner.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Skarner_0.webp"),
			require("../"+URL_champsSkins+"Skarner_1.webp"),
			require("../"+URL_champsSkins+"Skarner_2.webp"),
			require("../"+URL_champsSkins+"Skarner_3.webp"),
			require("../"+URL_champsSkins+"Skarner_4.webp"),
			require("../"+URL_champsSkins+"Skarner_5.webp")
        ],
        abilities: {
            "Guglie di cristallo": require("../"+URL_champsSpells+"Skarner_Passive.webp"),
			"Taglio del cristallo": require("../"+URL_champsSpells+"SkarnerVirulentSlash.webp"),
			"Esoscheletro cristallino": require("../"+URL_champsSpells+"SkarnerExoskeleton.webp"),
			"Frattura del cristallo": require("../"+URL_champsSpells+"SkarnerFracture.webp"),
			"Impalamento": require("../"+URL_champsSpells+"SkarnerImpale.webp")
        },
    },
	Sona: {
        icon: require("../"+URL_champsIcon+"Sona.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Sona_0.webp"),
			require("../"+URL_champsSkins+"Sona_1.webp"),
			require("../"+URL_champsSkins+"Sona_2.webp"),
			require("../"+URL_champsSkins+"Sona_3.webp"),
			require("../"+URL_champsSkins+"Sona_4.webp"),
			require("../"+URL_champsSkins+"Sona_5.webp"),
			require("../"+URL_champsSkins+"Sona_6.webp"),
			require("../"+URL_champsSkins+"Sona_7.webp"),
			require("../"+URL_champsSkins+"Sona_9.webp"),
			require("../"+URL_champsSkins+"Sona_17.webp"),
			require("../"+URL_champsSkins+"Sona_26.webp")
        ],
        abilities: {
            "Accordo di potenza": require("../"+URL_champsSpells+"Sona_Passive_Charged.webp"),
			"Inno al valore": require("../"+URL_champsSpells+"SonaQ.webp"),
			"Aria della perseveranza": require("../"+URL_champsSpells+"SonaW.webp"),
			"Ode alla celerità": require("../"+URL_champsSpells+"SonaE.webp"),
			"Crescendo": require("../"+URL_champsSpells+"SonaR.webp")
        },
    },
	Soraka: {
        icon: require("../"+URL_champsIcon+"Soraka.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Soraka_0.webp"),
			require("../"+URL_champsSkins+"Soraka_1.webp"),
			require("../"+URL_champsSkins+"Soraka_2.webp"),
			require("../"+URL_champsSkins+"Soraka_3.webp"),
			require("../"+URL_champsSkins+"Soraka_4.webp"),
			require("../"+URL_champsSkins+"Soraka_5.webp"),
			require("../"+URL_champsSkins+"Soraka_6.webp"),
			require("../"+URL_champsSkins+"Soraka_7.webp"),
			require("../"+URL_champsSkins+"Soraka_8.webp"),
			require("../"+URL_champsSkins+"Soraka_9.webp"),
			require("../"+URL_champsSkins+"Soraka_15.webp"),
			require("../"+URL_champsSkins+"Soraka_16.webp"),
			require("../"+URL_champsSkins+"Soraka_17.webp"),
			require("../"+URL_champsSkins+"Soraka_18.webp")
        ],
        abilities: {
            "Salvezza": require("../"+URL_champsSpells+"Soraka_Passive.webp"),
			"Tempesta stellare": require("../"+URL_champsSpells+"SorakaQ.webp"),
			"Infusione astrale": require("../"+URL_champsSpells+"SorakaW.webp"),
			"Equinozio": require("../"+URL_champsSpells+"SorakaE.webp"),
			"Desiderio": require("../"+URL_champsSpells+"SorakaR.webp")
        },
    },
	Swain: {
        icon: require("../"+URL_champsIcon+"Swain.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Swain_0.webp"),
			require("../"+URL_champsSkins+"Swain_1.webp"),
			require("../"+URL_champsSkins+"Swain_2.webp"),
			require("../"+URL_champsSkins+"Swain_3.webp"),
			require("../"+URL_champsSkins+"Swain_4.webp"),
			require("../"+URL_champsSkins+"Swain_11.webp"),
			require("../"+URL_champsSkins+"Swain_12.webp")
        ],
        abilities: {
            "Stormo famelico": require("../"+URL_champsSpells+"Swain_P.webp"),
			"Mano della morte": require("../"+URL_champsSpells+"SwainQ.webp"),
			"Visione dell'impero": require("../"+URL_champsSpells+"SwainW.webp"),
			"Preghiera maledetta": require("../"+URL_champsSpells+"SwainE.webp"),
			"Ascensione demoniaca": require("../"+URL_champsSpells+"SwainR.webp")
        },
    },
	Sylas: {
        icon: require("../"+URL_champsIcon+"Sylas.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Sylas_0.webp"),
			require("../"+URL_champsSkins+"Sylas_1.webp"),
			require("../"+URL_champsSkins+"Sylas_8.webp"),
			require("../"+URL_champsSkins+"Sylas_13.webp"),
			require("../"+URL_champsSkins+"Sylas_14.webp"),
			require("../"+URL_champsSkins+"Sylas_24.webp")
        ],
        abilities: {
            "Raffica di petricite": require("../"+URL_champsSpells+"SylasP.webp"),
			"Catene a frusta": require("../"+URL_champsSpells+"SylasQ.webp"),
			"Regicidio": require("../"+URL_champsSpells+"SylasW.webp"),
			"Latitanza/Rapimento": require("../"+URL_champsSpells+"SylasE.webp"),
			"Violazione": require("../"+URL_champsSpells+"SylasR.webp")
        },
    },
	Syndra: {
        icon: require("../"+URL_champsIcon+"Syndra.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Syndra_0.webp"),
			require("../"+URL_champsSkins+"Syndra_1.webp"),
			require("../"+URL_champsSkins+"Syndra_2.webp"),
			require("../"+URL_champsSkins+"Syndra_3.webp"),
			require("../"+URL_champsSkins+"Syndra_4.webp"),
			require("../"+URL_champsSkins+"Syndra_5.webp"),
			require("../"+URL_champsSkins+"Syndra_6.webp"),
			require("../"+URL_champsSkins+"Syndra_7.webp"),
			require("../"+URL_champsSkins+"Syndra_16.webp"),
			require("../"+URL_champsSkins+"Syndra_25.webp")
        ],
        abilities: {
            "Trascendente": require("../"+URL_champsSpells+"SyndraPassive.webp"),
			"Sfera oscura": require("../"+URL_champsSpells+"SyndraQ.webp"),
			"Forza di volontà": require("../"+URL_champsSpells+"SyndraW.webp"),
			"Disperdi il debole": require("../"+URL_champsSpells+"SyndraE.webp"),
			"Potere senza limiti": require("../"+URL_champsSpells+"SyndraR.webp")
        },
    },
	TahmKench: {
        icon: require("../"+URL_champsIcon+"TahmKench.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"TahmKench_0.webp"),
			require("../"+URL_champsSkins+"TahmKench_1.webp"),
			require("../"+URL_champsSkins+"TahmKench_2.webp"),
			require("../"+URL_champsSkins+"TahmKench_3.webp"),
			require("../"+URL_champsSkins+"TahmKench_11.webp")
        ],
        abilities: {
            "Gusto acquisito": require("../"+URL_champsSpells+"TahmKenchP.webp"),
			"Lingua a frusta": require("../"+URL_champsSpells+"TahmKenchQ.webp"),
			"Tuffo nell'abisso": require("../"+URL_champsSpells+"TahmKenchW.webp"),
			"Pelle coriacea": require("../"+URL_champsSpells+"TahmKenchE.webp"),
			"Divorare": require("../"+URL_champsSpells+"TahmKenchRWrapper.webp")
        },
    },
	Taliyah: {
        icon: require("../"+URL_champsIcon+"Taliyah.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Taliyah_0.webp"),
			require("../"+URL_champsSkins+"Taliyah_1.webp"),
			require("../"+URL_champsSkins+"Taliyah_2.webp"),
			require("../"+URL_champsSkins+"Taliyah_3.webp")
        ],
        abilities: {
            "Navetta rocciosa": require("../"+URL_champsSpells+"Taliyah_Passive.webp"),
			"Raffica filettata": require("../"+URL_champsSpells+"TaliyahQ.webp"),
			"Spinta sismica": require("../"+URL_champsSpells+"TaliyahWVC.webp"),
			"Disfare il terreno": require("../"+URL_champsSpells+"TaliyahE.webp"),
			"Muro della tessitrice": require("../"+URL_champsSpells+"TaliyahR.webp")
        },
    },
	Talon: {
        icon: require("../"+URL_champsIcon+"Talon.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Talon_0.webp"),
			require("../"+URL_champsSkins+"Talon_1.webp"),
			require("../"+URL_champsSkins+"Talon_2.webp"),
			require("../"+URL_champsSkins+"Talon_3.webp"),
			require("../"+URL_champsSkins+"Talon_4.webp"),
			require("../"+URL_champsSkins+"Talon_5.webp"),
			require("../"+URL_champsSkins+"Talon_12.webp"),
			require("../"+URL_champsSkins+"Talon_20.webp"),
			require("../"+URL_champsSkins+"Talon_29.webp")
        ],
        abilities: {
            "Punta di lama": require("../"+URL_champsSpells+"TalonP.webp"),
			"Diplomazia di Noxus": require("../"+URL_champsSpells+"TalonQ.webp"),
			"Lame rotanti": require("../"+URL_champsSpells+"TalonW.webp"),
			"Via dell'assassino": require("../"+URL_champsSpells+"TalonE.webp"),
			"Assalto delle ombre": require("../"+URL_champsSpells+"TalonR.webp")
        },
    },
	Taric: {
        icon: require("../"+URL_champsIcon+"Taric.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Taric_0.webp"),
			require("../"+URL_champsSkins+"Taric_1.webp"),
			require("../"+URL_champsSkins+"Taric_2.webp"),
			require("../"+URL_champsSkins+"Taric_3.webp"),
			require("../"+URL_champsSkins+"Taric_4.webp"),
			require("../"+URL_champsSkins+"Taric_9.webp")
        ],
        abilities: {
            "Spavalderia": require("../"+URL_champsSpells+"Taric_Passive.webp"),
			"Tocco delle stelle": require("../"+URL_champsSpells+"TaricQ.webp"),
			"Bastione": require("../"+URL_champsSpells+"TaricW.webp"),
			"Luce abbagliante": require("../"+URL_champsSpells+"TaricE.webp"),
			"Splendore cosmico": require("../"+URL_champsSpells+"TaricR.webp")
        },
    },
	Teemo: {
        icon: require("../"+URL_champsIcon+"Teemo.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Teemo_0.webp"),
			require("../"+URL_champsSkins+"Teemo_1.webp"),
			require("../"+URL_champsSkins+"Teemo_2.webp"),
			require("../"+URL_champsSkins+"Teemo_3.webp"),
			require("../"+URL_champsSkins+"Teemo_4.webp"),
			require("../"+URL_champsSkins+"Teemo_5.webp"),
			require("../"+URL_champsSkins+"Teemo_6.webp"),
			require("../"+URL_champsSkins+"Teemo_7.webp"),
			require("../"+URL_champsSkins+"Teemo_8.webp"),
			require("../"+URL_champsSkins+"Teemo_14.webp"),
			require("../"+URL_champsSkins+"Teemo_18.webp"),
			require("../"+URL_champsSkins+"Teemo_25.webp"),
			require("../"+URL_champsSkins+"Teemo_27.webp"),
			require("../"+URL_champsSkins+"Teemo_37.webp")
        ],
        abilities: {
            "Guerriglia": require("../"+URL_champsSpells+"Teemo_P.webp"),
			"Dardo accecante": require("../"+URL_champsSpells+"BlindingDart.webp"),
			"Rapidità": require("../"+URL_champsSpells+"MoveQuick.webp"),
			"Colpo tossico": require("../"+URL_champsSpells+"ToxicShot.webp"),
			"Trappola tossica": require("../"+URL_champsSpells+"TeemoRCast.webp")
        },
    },
	Thresh: {
        icon: require("../"+URL_champsIcon+"Thresh.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Thresh_0.webp"),
			require("../"+URL_champsSkins+"Thresh_1.webp"),
			require("../"+URL_champsSkins+"Thresh_2.webp"),
			require("../"+URL_champsSkins+"Thresh_3.webp"),
			require("../"+URL_champsSkins+"Thresh_4.webp"),
			require("../"+URL_champsSkins+"Thresh_5.webp"),
			require("../"+URL_champsSkins+"Thresh_6.webp"),
			require("../"+URL_champsSkins+"Thresh_13.webp"),
			require("../"+URL_champsSkins+"Thresh_14.webp"),
			require("../"+URL_champsSkins+"Thresh_15.webp"),
			require("../"+URL_champsSkins+"Thresh_17.webp"),
			require("../"+URL_champsSkins+"Thresh_27.webp"),
			require("../"+URL_champsSkins+"Thresh_28.webp"),
			require("../"+URL_champsSkins+"Thresh_38.webp")
        ],
        abilities: {
            "Dannazione": require("../"+URL_champsSpells+"Thresh_Passive.webp"),
			"Condanna a morte": require("../"+URL_champsSpells+"ThreshQ.webp"),
			"Passaggio oscuro": require("../"+URL_champsSpells+"ThreshW.webp"),
			"Sferzata": require("../"+URL_champsSpells+"ThreshE.webp"),
			"La scatola": require("../"+URL_champsSpells+"ThreshRPenta.webp")
        },
    },
	Tristana: {
        icon: require("../"+URL_champsIcon+"Tristana.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Tristana_0.webp"),
			require("../"+URL_champsSkins+"Tristana_1.webp"),
			require("../"+URL_champsSkins+"Tristana_2.webp"),
			require("../"+URL_champsSkins+"Tristana_3.webp"),
			require("../"+URL_champsSkins+"Tristana_4.webp"),
			require("../"+URL_champsSkins+"Tristana_5.webp"),
			require("../"+URL_champsSkins+"Tristana_6.webp"),
			require("../"+URL_champsSkins+"Tristana_10.webp"),
			require("../"+URL_champsSkins+"Tristana_11.webp"),
			require("../"+URL_champsSkins+"Tristana_12.webp"),
			require("../"+URL_champsSkins+"Tristana_24.webp"),
			require("../"+URL_champsSkins+"Tristana_33.webp"),
			require("../"+URL_champsSkins+"Tristana_40.webp"),
			require("../"+URL_champsSkins+"Tristana_41.webp")
        ],
        abilities: {
            "Supermira": require("../"+URL_champsSpells+"Tristana_Passive.webp"),
			"Fuoco rapido": require("../"+URL_champsSpells+"TristanaQ.webp"),
			"Salto del razzo": require("../"+URL_champsSpells+"TristanaW.webp"),
			"Carica esplosiva": require("../"+URL_champsSpells+"TristanaE.webp"),
			"Palla di cannone": require("../"+URL_champsSpells+"TristanaR.webp")
        },
    },
	Trundle: {
        icon: require("../"+URL_champsIcon+"Trundle.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Trundle_0.webp"),
			require("../"+URL_champsSkins+"Trundle_1.webp"),
			require("../"+URL_champsSkins+"Trundle_2.webp"),
			require("../"+URL_champsSkins+"Trundle_3.webp"),
			require("../"+URL_champsSkins+"Trundle_4.webp"),
			require("../"+URL_champsSkins+"Trundle_5.webp"),
			require("../"+URL_champsSkins+"Trundle_6.webp")
        ],
        abilities: {
            "Tributo al re": require("../"+URL_champsSpells+"Trundle_Passive.webp"),
			"Morso": require("../"+URL_champsSpells+"TrundleTrollSmash.webp"),
			"Regno di ghiaccio": require("../"+URL_champsSpells+"trundledesecrate.webp"),
			"Pilastro di ghiaccio": require("../"+URL_champsSpells+"TrundleCircle.webp"),
			"Sottometti": require("../"+URL_champsSpells+"TrundlePain.webp")
        },
    },
	Tryndamere: {
        icon: require("../"+URL_champsIcon+"Tryndamere.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Tryndamere_0.webp"),
			require("../"+URL_champsSkins+"Tryndamere_1.webp"),
			require("../"+URL_champsSkins+"Tryndamere_2.webp"),
			require("../"+URL_champsSkins+"Tryndamere_3.webp"),
			require("../"+URL_champsSkins+"Tryndamere_4.webp"),
			require("../"+URL_champsSkins+"Tryndamere_5.webp"),
			require("../"+URL_champsSkins+"Tryndamere_6.webp"),
			require("../"+URL_champsSkins+"Tryndamere_7.webp"),
			require("../"+URL_champsSkins+"Tryndamere_8.webp"),
			require("../"+URL_champsSkins+"Tryndamere_9.webp"),
			require("../"+URL_champsSkins+"Tryndamere_10.webp"),
			require("../"+URL_champsSkins+"Tryndamere_18.webp")
        ],
        abilities: {
            "Furia guerriera": require("../"+URL_champsSpells+"Tryndamere_Passive.webp"),
			"Sete di sangue": require("../"+URL_champsSpells+"TryndamereQ.webp"),
			"Urlo della distruzione": require("../"+URL_champsSpells+"TryndamereW.webp"),
			"Attacco del turbine": require("../"+URL_champsSpells+"TryndamereE.webp"),
			"Furore immortale": require("../"+URL_champsSpells+"UndyingRage.webp")
        },
    },
	TwistedFate: {
        icon: require("../"+URL_champsIcon+"TwistedFate.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"TwistedFate_0.webp"),
			require("../"+URL_champsSkins+"TwistedFate_1.webp"),
			require("../"+URL_champsSkins+"TwistedFate_2.webp"),
			require("../"+URL_champsSkins+"TwistedFate_3.webp"),
			require("../"+URL_champsSkins+"TwistedFate_4.webp"),
			require("../"+URL_champsSkins+"TwistedFate_5.webp"),
			require("../"+URL_champsSkins+"TwistedFate_6.webp"),
			require("../"+URL_champsSkins+"TwistedFate_7.webp"),
			require("../"+URL_champsSkins+"TwistedFate_8.webp"),
			require("../"+URL_champsSkins+"TwistedFate_9.webp"),
			require("../"+URL_champsSkins+"TwistedFate_10.webp"),
			require("../"+URL_champsSkins+"TwistedFate_11.webp"),
			require("../"+URL_champsSkins+"TwistedFate_13.webp"),
			require("../"+URL_champsSkins+"TwistedFate_23.webp"),
			require("../"+URL_champsSkins+"TwistedFate_25.webp")
        ],
        abilities: {
            "Dadi truccati": require("../"+URL_champsSpells+"Cardmaster_SealFate.webp"),
			"Carte letali": require("../"+URL_champsSpells+"WildCards.webp"),
			"Scegli una carta": require("../"+URL_champsSpells+"PickACard.webp"),
			"Mazzi esplosivi": require("../"+URL_champsSpells+"CardmasterStack.webp"),
			"Destino": require("../"+URL_champsSpells+"Destiny.webp")
        },
    },
	Twitch: {
        icon: require("../"+URL_champsIcon+"Twitch.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Twitch_0.webp"),
			require("../"+URL_champsSkins+"Twitch_1.webp"),
			require("../"+URL_champsSkins+"Twitch_2.webp"),
			require("../"+URL_champsSkins+"Twitch_3.webp"),
			require("../"+URL_champsSkins+"Twitch_4.webp"),
			require("../"+URL_champsSkins+"Twitch_5.webp"),
			require("../"+URL_champsSkins+"Twitch_6.webp"),
			require("../"+URL_champsSkins+"Twitch_7.webp"),
			require("../"+URL_champsSkins+"Twitch_8.webp"),
			require("../"+URL_champsSkins+"Twitch_12.webp"),
			require("../"+URL_champsSkins+"Twitch_27.webp"),
			require("../"+URL_champsSkins+"Twitch_36.webp")
        ],
        abilities: {
            "Veleno mortale": require("../"+URL_champsSpells+"Twitch_Passive.webp"),
			"Imboscata": require("../"+URL_champsSpells+"TwitchHideInShadows.webp"),
			"Barile di veleno": require("../"+URL_champsSpells+"TwitchVenomCask.webp"),
			"Contaminazione": require("../"+URL_champsSpells+"TwitchExpunge.webp"),
			"Spara e prega": require("../"+URL_champsSpells+"TwitchFullAutomatic.webp")
        },
    },
	Udyr: {
        icon: require("../"+URL_champsIcon+"Udyr.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Udyr_0.webp"),
			require("../"+URL_champsSkins+"Udyr_1.webp"),
			require("../"+URL_champsSkins+"Udyr_2.webp"),
			require("../"+URL_champsSkins+"Udyr_3.webp"),
			require("../"+URL_champsSkins+"Udyr_4.webp"),
			require("../"+URL_champsSkins+"Udyr_5.webp")
        ],
        abilities: {
            "Agilità della scimmia": require("../"+URL_champsSpells+"Udyr_MonkeysAgility.webp"),
			"Posizione della tigre": require("../"+URL_champsSpells+"UdyrTigerStance.webp"),
			"Posizione della tartaruga": require("../"+URL_champsSpells+"UdyrTurtleStance.webp"),
			"Posizione dell'orso": require("../"+URL_champsSpells+"UdyrBearStance.webp"),
			"Posizione della fenice": require("../"+URL_champsSpells+"UdyrPhoenixStance.webp")
        },
    },
	Urgot: {
        icon: require("../"+URL_champsIcon+"Urgot.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Urgot_0.webp"),
			require("../"+URL_champsSkins+"Urgot_1.webp"),
			require("../"+URL_champsSkins+"Urgot_2.webp"),
			require("../"+URL_champsSkins+"Urgot_3.webp"),
			require("../"+URL_champsSkins+"Urgot_9.webp"),
			require("../"+URL_champsSkins+"Urgot_15.webp")
        ],
        abilities: {
            "Fiamme echeggianti": require("../"+URL_champsSpells+"Urgot_Passive.webp"),
			"Carica corrosiva": require("../"+URL_champsSpells+"UrgotQ.webp"),
			"Epurazione": require("../"+URL_champsSpells+"UrgotW.webp"),
			"Sdegno": require("../"+URL_champsSpells+"UrgotE.webp"),
			"Tanatofobia": require("../"+URL_champsSpells+"UrgotR.webp")
        },
    },
	Varus: {
        icon: require("../"+URL_champsIcon+"Varus.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Varus_0.webp"),
			require("../"+URL_champsSkins+"Varus_1.webp"),
			require("../"+URL_champsSkins+"Varus_2.webp"),
			require("../"+URL_champsSkins+"Varus_3.webp"),
			require("../"+URL_champsSkins+"Varus_4.webp"),
			require("../"+URL_champsSkins+"Varus_5.webp"),
			require("../"+URL_champsSkins+"Varus_6.webp"),
			require("../"+URL_champsSkins+"Varus_7.webp"),
			require("../"+URL_champsSkins+"Varus_9.webp"),
			require("../"+URL_champsSkins+"Varus_16.webp"),
			require("../"+URL_champsSkins+"Varus_17.webp")
        ],
        abilities: {
            "Vendetta vivente": require("../"+URL_champsSpells+"VarusPassive.webp"),
			"Freccia penetrante": require("../"+URL_champsSpells+"VarusQ.webp"),
			"Faretra del flagello": require("../"+URL_champsSpells+"VarusW.webp"),
			"Pioggia di frecce": require("../"+URL_champsSpells+"VarusE.webp"),
			"Catena della corruzione": require("../"+URL_champsSpells+"VarusR.webp")
        },
    },
	Vayne: {
        icon: require("../"+URL_champsIcon+"Vayne.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Vayne_0.webp"),
			require("../"+URL_champsSkins+"Vayne_1.webp"),
			require("../"+URL_champsSkins+"Vayne_2.webp"),
			require("../"+URL_champsSkins+"Vayne_3.webp"),
			require("../"+URL_champsSkins+"Vayne_4.webp"),
			require("../"+URL_champsSkins+"Vayne_5.webp"),
			require("../"+URL_champsSkins+"Vayne_6.webp"),
			require("../"+URL_champsSkins+"Vayne_10.webp"),
			require("../"+URL_champsSkins+"Vayne_11.webp"),
			require("../"+URL_champsSkins+"Vayne_12.webp"),
			require("../"+URL_champsSkins+"Vayne_13.webp"),
			require("../"+URL_champsSkins+"Vayne_14.webp"),
			require("../"+URL_champsSkins+"Vayne_15.webp"),
			require("../"+URL_champsSkins+"Vayne_25.webp"),
			require("../"+URL_champsSkins+"Vayne_32.webp"),
			require("../"+URL_champsSkins+"Vayne_33.webp")
        ],
        abilities: {
            "Cacciatrice notturna": require("../"+URL_champsSpells+"Vayne_NightHunter.webp"),
			"Capriola": require("../"+URL_champsSpells+"VayneTumble.webp"),
			"Dardi d'argento": require("../"+URL_champsSpells+"VayneSilveredBolts.webp"),
			"Condanna": require("../"+URL_champsSpells+"VayneCondemn.webp"),
			"Ora finale": require("../"+URL_champsSpells+"VayneInquisition.webp")
        },
    },
	Veigar: {
        icon: require("../"+URL_champsIcon+"Veigar.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Veigar_0.webp"),
			require("../"+URL_champsSkins+"Veigar_1.webp"),
			require("../"+URL_champsSkins+"Veigar_2.webp"),
			require("../"+URL_champsSkins+"Veigar_3.webp"),
			require("../"+URL_champsSkins+"Veigar_4.webp"),
			require("../"+URL_champsSkins+"Veigar_5.webp"),
			require("../"+URL_champsSkins+"Veigar_6.webp"),
			require("../"+URL_champsSkins+"Veigar_7.webp"),
			require("../"+URL_champsSkins+"Veigar_8.webp"),
			require("../"+URL_champsSkins+"Veigar_9.webp"),
			require("../"+URL_champsSkins+"Veigar_13.webp"),
			require("../"+URL_champsSkins+"Veigar_23.webp"),
			require("../"+URL_champsSkins+"Veigar_32.webp")
        ],
        abilities: {
            "Potere malefico fenomenale": require("../"+URL_champsSpells+"VeigarEntropy.webp"),
			"Colpo distruttivo": require("../"+URL_champsSpells+"VeigarBalefulStrike.webp"),
			"Materia oscura": require("../"+URL_champsSpells+"VeigarDarkMatter.webp"),
			"Punto di non ritorno": require("../"+URL_champsSpells+"VeigarEventHorizon.webp"),
			"Esplosione primordiale": require("../"+URL_champsSpells+"VeigarR.webp")
        },
    },
	Velkoz: {
        icon: require("../"+URL_champsIcon+"Velkoz.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Velkoz_0.webp"),
			require("../"+URL_champsSkins+"Velkoz_1.webp"),
			require("../"+URL_champsSkins+"Velkoz_2.webp"),
			require("../"+URL_champsSkins+"Velkoz_3.webp"),
			require("../"+URL_champsSkins+"Velkoz_4.webp"),
			require("../"+URL_champsSkins+"Velkoz_11.webp")
        ],
        abilities: {
            "Scomposizione organica": require("../"+URL_champsSpells+"VelKoz_Passive.webp"),
			"Fissione al plasma": require("../"+URL_champsSpells+"VelkozQ.webp"),
			"Frattura sul Vuoto": require("../"+URL_champsSpells+"VelkozW.webp"),
			"Distruzione tettonica": require("../"+URL_champsSpells+"VelkozE.webp"),
			"Raggio disintegratore": require("../"+URL_champsSpells+"VelkozR.webp")
        },
    },
	Vex: {
        icon: require("../"+URL_champsIcon+"Vex.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Vex_0.webp"),
			require("../"+URL_champsSkins+"Vex_1.webp")
        ],
        abilities: {
            "Noia e Dolore": require("../"+URL_champsSpells+"Icons_Vex_Passive.webp"),
			"Spettropulsar": require("../"+URL_champsSpells+"VexQ.webp"),
			"Spazio personale": require("../"+URL_champsSpells+"VexW.webp"),
			"Nero potere": require("../"+URL_champsSpells+"VexE.webp"),
			"Cucitura d'Ombra": require("../"+URL_champsSpells+"VexR.webp")
        },
    },
	Vi: {
        icon: require("../"+URL_champsIcon+"Vi.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Vi_0.webp"),
			require("../"+URL_champsSkins+"Vi_1.webp"),
			require("../"+URL_champsSkins+"Vi_2.webp"),
			require("../"+URL_champsSkins+"Vi_3.webp"),
			require("../"+URL_champsSkins+"Vi_4.webp"),
			require("../"+URL_champsSkins+"Vi_5.webp"),
			require("../"+URL_champsSkins+"Vi_11.webp"),
			require("../"+URL_champsSkins+"Vi_12.webp"),
			require("../"+URL_champsSkins+"Vi_20.webp"),
			require("../"+URL_champsSkins+"Vi_29.webp")
        ],
        abilities: {
            "Scudo energetico": require("../"+URL_champsSpells+"ViPassive.webp"),
			"Spaccaferro": require("../"+URL_champsSpells+"ViQ.webp"),
			"Colpi ammaccanti": require("../"+URL_champsSpells+"ViW.webp"),
			"Forza implacabile": require("../"+URL_champsSpells+"ViE.webp"),
			"Fermati e arrenditi": require("../"+URL_champsSpells+"ViR.webp")
        },
    },
	Viego: {
        icon: require("../"+URL_champsIcon+"Viego.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Viego_0.webp"),
			require("../"+URL_champsSkins+"Viego_1.webp"),
			require("../"+URL_champsSkins+"Viego_10.webp")
        ],
        abilities: {
            "Dominio spirituale": require("../"+URL_champsSpells+"Viego_Passive.webp"),
			"Lama del re in rovina": require("../"+URL_champsSpells+"ViegoQ.webp"),
			"Fauci spettrali": require("../"+URL_champsSpells+"ViegoW.webp"),
			"Sentiero della mietitura": require("../"+URL_champsSpells+"ViegoE.webp"),
			"Vendetta lacerante": require("../"+URL_champsSpells+"ViegoR.webp")
        },
    },
	Viktor: {
        icon: require("../"+URL_champsIcon+"Viktor.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Viktor_0.webp"),
			require("../"+URL_champsSkins+"Viktor_1.webp"),
			require("../"+URL_champsSkins+"Viktor_2.webp"),
			require("../"+URL_champsSkins+"Viktor_3.webp"),
			require("../"+URL_champsSkins+"Viktor_4.webp"),
			require("../"+URL_champsSkins+"Viktor_5.webp")
        ],
        abilities: {
            "Gloriosa Evoluzione": require("../"+URL_champsSpells+"Viktor_Passive.webp"),
			"Trasferimento energetico": require("../"+URL_champsSpells+"ViktorPowerTransfer.webp"),
			"Campo gravitazionale": require("../"+URL_champsSpells+"ViktorGravitonField.webp"),
			"Raggio della morte": require("../"+URL_champsSpells+"ViktorDeathRay.webp"),
			"Tempesta del caos": require("../"+URL_champsSpells+"ViktorChaosStorm.webp")
        },
    },
	Vladimir: {
        icon: require("../"+URL_champsIcon+"Vladimir.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Vladimir_0.webp"),
			require("../"+URL_champsSkins+"Vladimir_1.webp"),
			require("../"+URL_champsSkins+"Vladimir_2.webp"),
			require("../"+URL_champsSkins+"Vladimir_3.webp"),
			require("../"+URL_champsSkins+"Vladimir_4.webp"),
			require("../"+URL_champsSkins+"Vladimir_5.webp"),
			require("../"+URL_champsSkins+"Vladimir_6.webp"),
			require("../"+URL_champsSkins+"Vladimir_7.webp"),
			require("../"+URL_champsSkins+"Vladimir_8.webp"),
			require("../"+URL_champsSkins+"Vladimir_14.webp"),
			require("../"+URL_champsSkins+"Vladimir_21.webp"),
			require("../"+URL_champsSkins+"Vladimir_30.webp")
        ],
        abilities: {
            "Patto cremisi": require("../"+URL_champsSpells+"VladimirP.webp"),
			"Trasfusione": require("../"+URL_champsSpells+"VladimirQ.webp"),
			"Lago di sangue": require("../"+URL_champsSpells+"VladimirSanguinePool.webp"),
			"Maree di sangue": require("../"+URL_champsSpells+"VladimirE.webp"),
			"Emopiaga": require("../"+URL_champsSpells+"VladimirHemoplague.webp")
        },
    },
	Volibear: {
        icon: require("../"+URL_champsIcon+"Volibear.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Volibear_0.webp"),
			require("../"+URL_champsSkins+"Volibear_1.webp"),
			require("../"+URL_champsSkins+"Volibear_2.webp"),
			require("../"+URL_champsSkins+"Volibear_3.webp"),
			require("../"+URL_champsSkins+"Volibear_4.webp"),
			require("../"+URL_champsSkins+"Volibear_5.webp"),
			require("../"+URL_champsSkins+"Volibear_6.webp"),
			require("../"+URL_champsSkins+"Volibear_7.webp"),
			require("../"+URL_champsSkins+"Volibear_9.webp")
        ],
        abilities: {
            "La Tempesta implacabile": require("../"+URL_champsSpells+"Volibear_Icon_P.webp"),
			"Schianto tonante": require("../"+URL_champsSpells+"VolibearQ.webp"),
			"Furia dilaniante": require("../"+URL_champsSpells+"VolibearW.webp"),
			"Spaccacielo": require("../"+URL_champsSpells+"VolibearE.webp"),
			"Incarna della tempesta": require("../"+URL_champsSpells+"VolibearR.webp")
        },
    },
	Warwick: {
        icon: require("../"+URL_champsIcon+"Warwick.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Warwick_0.webp"),
			require("../"+URL_champsSkins+"Warwick_1.webp"),
			require("../"+URL_champsSkins+"Warwick_2.webp"),
			require("../"+URL_champsSkins+"Warwick_3.webp"),
			require("../"+URL_champsSkins+"Warwick_4.webp"),
			require("../"+URL_champsSkins+"Warwick_5.webp"),
			require("../"+URL_champsSkins+"Warwick_6.webp"),
			require("../"+URL_champsSkins+"Warwick_7.webp"),
			require("../"+URL_champsSkins+"Warwick_8.webp"),
			require("../"+URL_champsSkins+"Warwick_9.webp"),
			require("../"+URL_champsSkins+"Warwick_10.webp"),
			require("../"+URL_champsSkins+"Warwick_16.webp"),
			require("../"+URL_champsSkins+"Warwick_35.webp")
        ],
        abilities: {
            "Sete eterna": require("../"+URL_champsSpells+"WarwickP.webp"),
			"Fauci della bestia": require("../"+URL_champsSpells+"WarwickQ.webp"),
			"Caccia di sangue": require("../"+URL_champsSpells+"WarwickW.webp"),
			"Ululato primordiale": require("../"+URL_champsSpells+"WarwickE.webp"),
			"Balzo dell'infinito": require("../"+URL_champsSpells+"WarwickR.webp")
        },
    },
	Xayah: {
        icon: require("../"+URL_champsIcon+"Xayah.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Xayah_0.webp"),
			require("../"+URL_champsSkins+"Xayah_1.webp"),
			require("../"+URL_champsSkins+"Xayah_2.webp"),
			require("../"+URL_champsSkins+"Xayah_3.webp"),
			require("../"+URL_champsSkins+"Xayah_4.webp"),
			require("../"+URL_champsSkins+"Xayah_8.webp"),
			require("../"+URL_champsSkins+"Xayah_17.webp"),
			require("../"+URL_champsSkins+"Xayah_26.webp")
        ],
        abilities: {
            "Tagli netti": require("../"+URL_champsSpells+"XayahPassive.webp"),
			"Doppia daga": require("../"+URL_champsSpells+"XayahQ.webp"),
			"Piumaggio letale": require("../"+URL_champsSpells+"XayahW.webp"),
			"Incantalame": require("../"+URL_champsSpells+"XayahE.webp"),
			"Tumulto di piume": require("../"+URL_champsSpells+"XayahR.webp")
        },
    },
	Xerath: {
        icon: require("../"+URL_champsIcon+"Xerath.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Xerath_0.webp"),
			require("../"+URL_champsSkins+"Xerath_1.webp"),
			require("../"+URL_champsSkins+"Xerath_2.webp"),
			require("../"+URL_champsSkins+"Xerath_3.webp"),
			require("../"+URL_champsSkins+"Xerath_4.webp"),
			require("../"+URL_champsSkins+"Xerath_5.webp"),
			require("../"+URL_champsSkins+"Xerath_12.webp")
        ],
        abilities: {
            "Ondata di mana": require("../"+URL_champsSpells+"Xerath_Passive1.webp"),
			"Impulso arcano": require("../"+URL_champsSpells+"XerathArcanopulseChargeUp.webp"),
			"Occhio della distruzione": require("../"+URL_champsSpells+"XerathArcaneBarrage2.webp"),
			"Sfera dello shock": require("../"+URL_champsSpells+"XerathMageSpear.webp"),
			"Rito arcano": require("../"+URL_champsSpells+"XerathLocusOfPower2.webp")
        },
    },
	XinZhao: {
        icon: require("../"+URL_champsIcon+"XinZhao.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"XinZhao_0.webp"),
			require("../"+URL_champsSkins+"XinZhao_1.webp"),
			require("../"+URL_champsSkins+"XinZhao_2.webp"),
			require("../"+URL_champsSkins+"XinZhao_3.webp"),
			require("../"+URL_champsSkins+"XinZhao_4.webp"),
			require("../"+URL_champsSkins+"XinZhao_5.webp"),
			require("../"+URL_champsSkins+"XinZhao_6.webp"),
			require("../"+URL_champsSkins+"XinZhao_13.webp"),
			require("../"+URL_champsSkins+"XinZhao_20.webp"),
			require("../"+URL_champsSkins+"XinZhao_27.webp"),
			require("../"+URL_champsSkins+"XinZhao_36.webp")
        ],
        abilities: {
            "Determinazione": require("../"+URL_champsSpells+"XinZhaoP.webp"),
			"Triplo colpo dell'artiglio": require("../"+URL_champsSpells+"XinZhaoQ.webp"),
			"Il vento diventa fulmine": require("../"+URL_champsSpells+"XinZhaoW.webp"),
			"Carica dell'audace": require("../"+URL_champsSpells+"XinZhaoE.webp"),
			"Mezzaluna difensiva": require("../"+URL_champsSpells+"XinZhaoR.webp")
        },
    },
	Yasuo: {
        icon: require("../"+URL_champsIcon+"Yasuo.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Yasuo_0.webp"),
			require("../"+URL_champsSkins+"Yasuo_1.webp"),
			require("../"+URL_champsSkins+"Yasuo_2.webp"),
			require("../"+URL_champsSkins+"Yasuo_3.webp"),
			require("../"+URL_champsSkins+"Yasuo_9.webp"),
			require("../"+URL_champsSkins+"Yasuo_10.webp"),
			require("../"+URL_champsSkins+"Yasuo_17.webp"),
			require("../"+URL_champsSkins+"Yasuo_18.webp"),
			require("../"+URL_champsSkins+"Yasuo_35.webp"),
			require("../"+URL_champsSkins+"Yasuo_36.webp"),
			require("../"+URL_champsSkins+"Yasuo_54.webp"),
			require("../"+URL_champsSkins+"Yasuo_55.webp")
        ],
        abilities: {
            "Via del vagabondo": require("../"+URL_champsSpells+"Yasuo_Passive.webp"),
			"Tempesta d'acciaio": require("../"+URL_champsSpells+"YasuoQ1Wrapper.webp"),
			"Muro di vento": require("../"+URL_champsSpells+"YasuoW.webp"),
			"Colpo di taglio": require("../"+URL_champsSpells+"YasuoE.webp"),
			"Ultimo respiro": require("../"+URL_champsSpells+"YasuoR.webp")
        },
    },
	Yone: {
        icon: require("../"+URL_champsIcon+"Yone.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Yone_0.webp"),
			require("../"+URL_champsSkins+"Yone_1.webp"),
			require("../"+URL_champsSkins+"Yone_10.webp"),
			require("../"+URL_champsSkins+"Yone_19.webp")
        ],
        abilities: {
            "Via dello Shinigami": require("../"+URL_champsSpells+"YonePassive.webp"),
			"Furia d'acciaio": require("../"+URL_champsSpells+"YoneQ.webp"),
			"Fendente Reiatsu": require("../"+URL_champsSpells+"YoneW.webp"),
			"Scissione spirituale": require("../"+URL_champsSpells+"YoneE.webp"),
			"Rashomon": require("../"+URL_champsSpells+"YoneR.webp")
        },
    },
	Yorick: {
        icon: require("../"+URL_champsIcon+"Yorick.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Yorick_0.webp"),
			require("../"+URL_champsSkins+"Yorick_1.webp"),
			require("../"+URL_champsSkins+"Yorick_2.webp"),
			require("../"+URL_champsSkins+"Yorick_3.webp"),
			require("../"+URL_champsSkins+"Yorick_4.webp"),
			require("../"+URL_champsSkins+"Yorick_12.webp"),
			require("../"+URL_champsSkins+"Yorick_21.webp")
        ],
        abilities: {
            "Pastore delle anime": require("../"+URL_champsSpells+"Yorick_P.webp"),
			"Estrema Unzione": require("../"+URL_champsSpells+"YorickQ.webp"),
			"Sinodo oscuro": require("../"+URL_champsSpells+"YorickW.webp"),
			"Nebbia funerea": require("../"+URL_champsSpells+"YorickE.webp"),
			"Epitaffio delle Isole": require("../"+URL_champsSpells+"YorickR.webp")
        },
    },
	Yuumi: {
        icon: require("../"+URL_champsIcon+"Yuumi.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Yuumi_0.webp"),
			require("../"+URL_champsSkins+"Yuumi_1.webp"),
			require("../"+URL_champsSkins+"Yuumi_11.webp"),
			require("../"+URL_champsSkins+"Yuumi_19.webp"),
			require("../"+URL_champsSkins+"Yuumi_28.webp")
        ],
        abilities: {
            "Protego": require("../"+URL_champsSpells+"YuumiP.webp"),
			"Proiettile stregatto": require("../"+URL_champsSpells+"YuumiQ.webp"),
			"Vicini vicini!": require("../"+URL_champsSpells+"YuumiW.webp"),
			"Tiragraffi": require("../"+URL_champsSpells+"YuumiE.webp"),
			"Epilogo": require("../"+URL_champsSpells+"YuumiR.webp")
        },
    },
	Zac: {
        icon: require("../"+URL_champsIcon+"Zac.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Zac_0.webp"),
			require("../"+URL_champsSkins+"Zac_1.webp"),
			require("../"+URL_champsSkins+"Zac_2.webp"),
			require("../"+URL_champsSkins+"Zac_6.webp"),
			require("../"+URL_champsSkins+"Zac_7.webp")
        ],
        abilities: {
            "Divisione cellulare": require("../"+URL_champsSpells+"ZacPassive.webp"),
			"Colpi allungati": require("../"+URL_champsSpells+"ZacQ.webp"),
			"Materia instabile": require("../"+URL_champsSpells+"ZacW.webp"),
			"Catapulta elastica": require("../"+URL_champsSpells+"ZacE.webp"),
			"Boing!": require("../"+URL_champsSpells+"ZacR.webp")
        },
    },
	Zed: {
        icon: require("../"+URL_champsIcon+"Zed.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Zed_0.webp"),
			require("../"+URL_champsSkins+"Zed_1.webp"),
			require("../"+URL_champsSkins+"Zed_2.webp"),
			require("../"+URL_champsSkins+"Zed_3.webp"),
			require("../"+URL_champsSkins+"Zed_10.webp"),
			require("../"+URL_champsSkins+"Zed_11.webp"),
			require("../"+URL_champsSkins+"Zed_13.webp"),
			require("../"+URL_champsSkins+"Zed_15.webp"),
			require("../"+URL_champsSkins+"Zed_30.webp"),
			require("../"+URL_champsSkins+"Zed_31.webp")
        ],
        abilities: {
            "Disprezzo per i deboli": require("../"+URL_champsSpells+"shadowninja_P.webp"),
			"Shuriken rasoio": require("../"+URL_champsSpells+"ZedQ.webp"),
			"Ombra vivente": require("../"+URL_champsSpells+"ZedW.webp"),
			"Artiglio dell'ombra": require("../"+URL_champsSpells+"ZedE.webp"),
			"Marchio della morte": require("../"+URL_champsSpells+"ZedR.webp")
        },
    },
	Zeri: {
        icon: require("../"+URL_champsIcon+"Zeri.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Zeri_0.webp"),
			require("../"+URL_champsSkins+"Zeri_1.webp")
        ],
        abilities: {
            "Dinamo": require("../"+URL_champsSpells+"ZeriP.webp"),
			"Fuoco a raffica": require("../"+URL_champsSpells+"ZeriQ.webp"),
			"Laser ultrashock": require("../"+URL_champsSpells+"ZeriW.webp"),
			"Scarica di scintille": require("../"+URL_champsSpells+"ZeriE.webp"),
			"Schianto elettrico": require("../"+URL_champsSpells+"ZeriR.webp")
        },
    },
	Ziggs: {
        icon: require("../"+URL_champsIcon+"Ziggs.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Ziggs_0.webp"),
			require("../"+URL_champsSkins+"Ziggs_1.webp"),
			require("../"+URL_champsSkins+"Ziggs_2.webp"),
			require("../"+URL_champsSkins+"Ziggs_3.webp"),
			require("../"+URL_champsSkins+"Ziggs_4.webp"),
			require("../"+URL_champsSkins+"Ziggs_5.webp"),
			require("../"+URL_champsSkins+"Ziggs_6.webp"),
			require("../"+URL_champsSkins+"Ziggs_7.webp"),
			require("../"+URL_champsSkins+"Ziggs_14.webp"),
			require("../"+URL_champsSkins+"Ziggs_23.webp"),
			require("../"+URL_champsSkins+"Ziggs_24.webp")
        ],
        abilities: {
            "Miccia corta": require("../"+URL_champsSpells+"ZiggsPassiveReady.webp"),
			"Ordigno rotolante": require("../"+URL_champsSpells+"ZiggsQ.webp"),
			"Carica satchel": require("../"+URL_champsSpells+"ZiggsW.webp"),
			"Campo minato hexplosivo": require("../"+URL_champsSpells+"ZiggsE.webp"),
			"Mega bomba infernale": require("../"+URL_champsSpells+"ZiggsR.webp")
        },
    },
	Zilean: {
        icon: require("../"+URL_champsIcon+"Zilean.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Zilean_0.webp"),
			require("../"+URL_champsSkins+"Zilean_1.webp"),
			require("../"+URL_champsSkins+"Zilean_2.webp"),
			require("../"+URL_champsSkins+"Zilean_3.webp"),
			require("../"+URL_champsSkins+"Zilean_4.webp"),
			require("../"+URL_champsSkins+"Zilean_5.webp"),
			require("../"+URL_champsSkins+"Zilean_6.webp")
        ],
        abilities: {
            "Tempo in bottiglia": require("../"+URL_champsSpells+"Zilean_Passive.webp"),
			"Bomba temporale": require("../"+URL_champsSpells+"ZileanQ.webp"),
			"Ricarica accelerata": require("../"+URL_champsSpells+"ZileanW.webp"),
			"Incantesimo temporale": require("../"+URL_champsSpells+"TimeWarp.webp"),
			"Spostamento temporale": require("../"+URL_champsSpells+"ChronoShift.webp")
        },
    },
	Zoe: {
        icon: require("../"+URL_champsIcon+"Zoe.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Zoe_0.webp"),
			require("../"+URL_champsSkins+"Zoe_1.webp"),
			require("../"+URL_champsSkins+"Zoe_2.webp"),
			require("../"+URL_champsSkins+"Zoe_9.webp"),
			require("../"+URL_champsSkins+"Zoe_18.webp"),
			require("../"+URL_champsSkins+"Zoe_19.webp")
        ],
        abilities: {
            "Più scintille!": require("../"+URL_champsSpells+"Zoe_P.webp"),
			"Stella vagante!": require("../"+URL_champsSpells+"ZoeQ.webp"),
			"Furto magico": require("../"+URL_champsSpells+"ZoeW.webp"),
			"Bolla della nanna": require("../"+URL_champsSpells+"ZoeE.webp"),
			"Tuffo nel portale": require("../"+URL_champsSpells+"ZoeR.webp")
        },
    },
	Zyra: {
        icon: require("../"+URL_champsIcon+"Zyra.webp"),
        skins: [ 
            require("../"+URL_champsSkins+"Zyra_0.webp"),
			require("../"+URL_champsSkins+"Zyra_1.webp"),
			require("../"+URL_champsSkins+"Zyra_2.webp"),
			require("../"+URL_champsSkins+"Zyra_3.webp"),
			require("../"+URL_champsSkins+"Zyra_4.webp"),
			require("../"+URL_champsSkins+"Zyra_5.webp"),
			require("../"+URL_champsSkins+"Zyra_6.webp"),
			require("../"+URL_champsSkins+"Zyra_7.webp"),
			require("../"+URL_champsSkins+"Zyra_16.webp")
        ],
        abilities: {
            "Giardino di spine": require("../"+URL_champsSpells+"ZyraP.webp"),
			"Spine letali": require("../"+URL_champsSpells+"ZyraQ.webp"),
			"Crescita rigogliosa": require("../"+URL_champsSpells+"ZyraW.webp"),
			"Radici stringenti": require("../"+URL_champsSpells+"ZyraE.webp"),
			"Rovi strangolanti": require("../"+URL_champsSpells+"ZyraR.webp")
        },
    },
};

export {AllImages};