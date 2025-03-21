import {IndexPageData, SponsorCategory} from "./models";

export function getIndexData(): IndexPageData {
  return {
    previousConferences: {
      sectionTitle: "Korábbi Konferenciák",
      conferences: [
        {
          title: "XI. Simonyi Konferencia",
          priority: 2014,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/142_1T3L11CK7LF47.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/140_S915Y02SOPM6.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/143_DNBSIBRMP9DZ.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/144_BJ3HBV3GOWMH.jpg"]
        },
        {
          title: "XII. Simonyi Konferencia",
          priority: 2015,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/151_SQ9A8QWTXWQN.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/152_1Q7KK5KX4YBIV.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/153_9FU519W7TH8F.jpg"]
        },
        {
          title: "XX. Simonyi Konferencia",
          priority: 2023,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/235_18Z1VYJ0CXVS6.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/230_X3MJ12QB10GZ.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/231_6ZIWQ82Z1F53.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/232_RSQC4L4K073C.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/233_4INJ96IS3FN0.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/234_YNHGOQTAPU06.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/235_18Z1VYJ0CXVS6.jpg"]
        },
        {
          title: "XIX. Simonyi Konferencia",
          priority: 2022,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/220_M07533I9BQ1O.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/221_1BA52QSCQYU5L.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/222_DGBBP06MYQWH.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/223_13DNNGFCAYSHN.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/224_12RHWT9ZH5XOE.jpg"]
        },
        {
          title: "XVIII. Simonyi Konferencia",
          priority: 2021,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/210_1XZ7VBT5IX86F.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/211_1OSAHMCXDUJSV.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/212_2IAQW3MBBHJD.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/213_7XBGP1T8NDY1.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/214_1NSR45D6BGO14.jpg"]
        },
        {
          title: "XVI. Simonyi Konferencia",
          priority: 2019,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/190_1RP1NSFPRPPSZ.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/191_1JLGE6D4YFUUU.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/192_9GZX87PZLSZM.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/193_MR97TO016PRC.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/194_ND4453NJ74JE.jpg"]
        },
        {
          title: "XV. Simonyi Konferencia",
          priority: 2018,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/180_MA647JLAC951.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/181_1QSSOBJO45RGH.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/182_N7NXOKGLTUQP.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/183_KVB2CSBG8JXZ.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/184_17JE7AX35XQ2S.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/185_TC20N8JWJTZ5.jpg"]
        },
        {
          title: "XIV. Simonyi Konferencia",
          priority: 2017,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/170_17YZN0T8W8O6Y.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/171_1F1O03S5T9593.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/172_1BCALSLXIVAKY.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/173_1F03OAFE8YUR1.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/174_L4E25F0S1QI9.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/175_EUBMAK7ALI9I.jpg"]
        },
        {
          title: "XIII. Simonyi Konferencia",
          priority: 2016,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/160_1JX0198DV07MH.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/161_SYM47ZLR8GGE.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/162_11XWZ4FNQ9DBP.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/163_1QL08QI599C1J.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/164_3O8JG2TPMLDL.jpg"]
        },
        {
          title: "XXI. Simonyi Konferencia",
          priority: 2024,
          imageUrls: ["https://xxii.konferencia.simonyi.bme.hu/img/240_1EQ2KN5MOKWY6.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/241_6C4W0WB0USPI.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/242_PKP2IMBT97O5.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/243_1BQABVYNDF2E.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/244_1U1EU9RVSRCCH.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/245_1903MXIPSAJ5U.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/246_Z23469O5J61R.jpg", "https://xxii.konferencia.simonyi.bme.hu/img/247_GA0P2ROIWQY4.jpg"]
        }
      ]
    },
    registration: {buttonText: "Regisztráció", cooltixEventId: "https://url.com/"},
    mobilApp: {
      description: "Maradj naprakész a KonferenciApp segítségével!            Légy mindig képben a programtervvel, kapj valós idejű híreket,             navigálj könnyedén interaktív térképek segítségével, és fedezd fel             az egyéb izgalmas funkciókat, hogy még jobb legyen a konferencia             élményed.",
      androidUrl: "https://play.google.com/store/apps/details?id=com.kirdev.konferenciapp&hl=hu",
      iosUrl: "https://apps.apple.com/hu/app/konferenciapp/id6478986330?platform=iphone"
    },
    giveaway: {
      sectionTitle: "Nyereményjáték",
      description: "",
      pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/SWITCH_XZ82DGVEXP42.png",
      rules: "# Nyereményjáték-\r\n# szabályzat\r\n\r\nA **Nyereményjáték-szabályzat** (a továbbiakban: **Szabályzat**) vonatkozik a **Simonyi Károly Szakkollégium** (továbbiakban: **Szakkollégium**) által szervezett **XXII. Simonyi Konferencia** (továbbiakban: **Esemény**) során folyó nyereményjátékokra (továbbiakban: **Játék**).\r\n\r\n## A Szakkollégium elérhetőségei:\r\n\r\n- **Cím:** 1117 Budapest, Irinyi József utca 42. Schönherz Kollégium 1320-as szoba  \r\n- **E-mail:** [info@simonyi.bme.hu](mailto:info@simonyi.bme.hu)\r\n\r\n## Az Esemény helyszíne:\r\n\r\n- **Budapesti Műszaki és Gazdaságtudományi Egyetem** Villamosmérnöki és Informatikai Karának **I épülete**  \r\n- **Cím:** 1117 Budapest, Magyar Tudósok Körútja 2. (továbbiakban: **Egyetem**)\r\n\r\n## 1. A Játékban részt vevő személyek\r\n\r\nA Játékban részt vehet minden természetes személy, aki regisztrált az Eseményre a konferencia Cooltix oldalán.\r\n\r\n**A Játékban NEM vehetnek részt az alábbi személyek:**\r\n\r\n- A Szakkollégium Elnökségének, Szervezeti Bizottságának és Felügyelő Bizottságának tagjai.\r\n- A rendezvény alatt munkát végző technikai stáb tagjai, vagy lebonyolításban segédkező személyek.\r\n- Az Esemény szervezői, meghívott előadói és standolói; egyéb, a lebonyolításban közvetlenül közreműködő cégek tulajdonosai, vezető tisztségviselői, munkavállalói, megbízottjai, valamint azok közeli hozzátartozói.\r\n\r\n## 2. A Játék leírása\r\n\r\nAz Eseményhez köthető általános nyereményjáték során a Játékos érvényes regisztrációval rendelkezik és leadta jelentkezését az Esemény regisztrációs pultjánál.\r\n\r\n## 3. A Játék időtartama\r\n\r\nA Játék 2025. március 18. 09:30 és 2025. március 18. 17:00 között tart.\r\n\r\n## 4. Jelentkezés a Játékra\r\n\r\nA Játékra jelentkezni 2025. március 18. 09:30 és 17:00 között van lehetőség a Konferencia regisztrációs pultjánál.\r\n\r\nEgy Játékos mind az összes nyereményjátékban csak egyszer vehet részt.\r\n\r\n*A nyeremények átvételéhez szükséges lehet a pontos név, személyi igazolvány szám és lakcím megadása.*\r\n\r\nA Játékos a nyereményjátékban való részvételével elfogadja a Nyereményjáték-szabályzatot és a szabályzatban foglaltak szerint hozzájárult személyes adatai kezeléséhez.\r\n\r\n## 5. Nyeremény\r\n\r\nAmennyiben a nyeremény átvételének időpontjában nem áll rendelkezésre a megjelölt termék, akkor ahhoz értékben hasonló ajándéktárgy kerül átadásra.\r\n\r\n**A nyeremények más részére át nem ruházhatók és pénzre át nem válthatók.**\r\n\r\nA Szakkollégium vállalja, hogy kifizeti a nyereményre esetlegesen közvetlenül alkalmazandó személyi jövedelemadót, illetve vállalja a nyereményekkel kapcsolatban közvetlenül felmerülő további adó vagy egyéb esetleges járulék megfizetését.\r\n\r\n## 6. Sorsolás\r\n\r\nA videó felvétellel rögzített sorsolásra 2025. év március hó 18. napján 18:45-kor kerül sor az Egyetem IB028-as előadótermében.\r\n\r\nAz Esemény során történő nyereményjáték sorsolását az Esemény szervezőiből álló sorsolási bizottság végzi.\r\n\r\n## 7. A sorsolás lebonyolítása\r\n\r\nA sorsolás kamera előtt, videofelvétel rögzítésével történik.\r\n\r\nMinden nyereményt kizárólag különböző játékos nyerhet meg, ezért a sorsolások folyamán a már kisorsolt játékosok a sorsolás további részében nem sorsolhatók ki újra.\r\n\r\nAmennyiben a nyertes nem tartózkodik a helyszínen (IB028-as előadó) a neve kihúzásakor, úgy új nyertes kerül kisorsolásra.\r\n\r\nA sorsolás addig tart, amíg a nyeremények nyertesei kisorsolásra kerülnek, és ennek megfelelően a sorsolás egyfordulós.\r\n\r\n## 8. A nyeremények átvétele\r\n\r\nA nyerteseket minden esetben személyesen értesítjük 2025. 03. 18. 18:45 és 19:00 között az Egyetem IB028-as előadójában.\r\n\r\nA nyereménytárgyak átvételére kizárólag az Eseményen van lehetőség 2025. 03. 18. 18:45 és 19:00 között.\r\n\r\nAz átvétellel kapcsolatos reklamáció kizárólag a Szakkollégiumnál tehető meg.\r\n\r\nA Játékosok kötelesek együttműködni a nyeremények átvétele/igénybevétele érdekében. Amennyiben ennek nem tesznek eleget, és a nyeremény átvétele meghiúsul, a nyeremény a továbbiakban nem vehető át, illetve nem vehető igénybe. A Szakkollégiumot semmilyen felelősség nem terheli.\r\n\r\n## 9. Adatkezelés\r\n\r\nA Játékosok a Játékban való részvétellel automatikusan hozzájárulnak ahhoz, hogy:\r\n\r\n- A megadott adataik (név, lakcím, személyi igazolvány szám) a Szakkollégium adatbázisába kerüljenek.\r\n- Az adatokat a Szakkollégium a nyeremények kisorsolása, értesítés és reklamációkezelés céljából **legfeljebb 6 hónapig** kezelje.\r\n\r\nA Játékosokat megilleti a személyes adatok védelméről szóló törvényben meghatározott valamennyi jogosultság.\r\n\r\n## 10. Felelősségkizárás\r\n\r\n- A pályázatok hiányosságaiért (pl. névelírás) és értesítési vagy átvételi késedelemért a Szakkollégium nem vállal felelősséget.\r\n- A Játékosok saját felelősségükre adják meg adataikat.\r\n- A Szakkollégium nem ellenőrzi a megadott adatok helyességét.\r\n\r\n## 11. Egyéb\r\n\r\n- A Játékos a részvétellel automatikusan elfogadja a **Szabályzatot**.\r\n- Nyertesség esetén a Játékos neve és fényképe a Konferencia weboldalán, Facebook- és Instagram-oldalán **6 hónapig** nyilvánosságra kerülhet.\r\n- A Játékos szavatolja, hogy a fényképen szereplő harmadik személyek hozzájárultak a közzétételhez.\r\n- A Játékos kijelenti, hogy a regisztrációs adatai megfelelnek a valóságnak.\r\n"
    },
    promoVideo: {
      sectionTitle: "Mi is az a Simonyi Konferencia?",
      youtubeUrl: "https://www.youtube.com/embed/lrLbijl4pqY",
      description: "A Simonyi Károly Szakkollégium évente megrendezésre kerülő nagyrendezvénye. A konferencia izgalmas pillanatokat kínál mindazoknak, akik érdeklődnek a mérnöki és informatikai területek legfrissebb fejlesztései iránt. Szánj egy pillantást korábbi rendezvényeink hangulatára, és tekintsd át az előző konferenciák életképeit és tarts velünk 2025-ben is!"
    },
    sponsors: {
      sectionTitle: "Támogatóink",
      companies: [
        {
          name: "Sicontact",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/_1XXESIXIBAZJ3.svg",
          url: "https://www.eset.com/hu/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "One Broadcasr",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/ONE_BROADCAST_MSH5EAUYXJS.png",
          url: "",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "4iG Group",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/4IG_GHDVXETF14HC.svg",
          url: "https://www.4ig.hu/nyito",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Nokia",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/NOKIA_1F7BT6NWYMO2T.svg",
          url: "https://www.facebook.com/nokiahungary/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "WorldQuant",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/WORLDQUANT_B0932L7EI83J.jpg",
          url: "https://www.worldquant.com/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "KUKA",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/KUKA_1F0QYBHBUGU46.svg",
          url: "https://www.kuka.com/hu-hu",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "Schönherz",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/SCHONHERZ_JRA3EBF8UA0V.png",
          url: "",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "SVK",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/SVK_1JOQGL6V8CL4I.png",
          url: "https://www.linkedin.com/company/sch%C3%B6nherz-corporate-relations/",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "VIK",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/VIK_CCWO10RA2DAC.png",
          url: "https://vik.bme.hu/",
          category: SponsorCategory.SPONSOR
        },
        {
          name: "Robert Bosch",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/BOSCHNEW_19N8HKQY5K9I6.png",
          url: "https://www.bosch.hu/karrier/",
          category: SponsorCategory.MAIN_SPONSOR
        },
        {
          name: "Barré Technologies",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/BARRE_DRZHJKJF52MI.svg",
          url: "https://barre.hu/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Nova Services ",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/NOVA_1B8G5PM07QTMF.png",
          url: "https://www.novaservices.hu/karrier",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Silicon Labs",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/SL_8H1UDZ14S65C.svg",
          url: "https://www.silabs.com/about-us/careers",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: " OTP Bank",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/OTP_GKXUXSIXPPLW.svg",
          url: "https://karrier.otpbank.hu/",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "ICF Tech",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/ICF_JB92WG6ZHHQF.png",
          url: "https://careers.icftech.hu",
          category: SponsorCategory.FEATURED_SPONSOR
        },
        {
          name: "Schönherz Iskolaszövetkezet",
          logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/SCHIS_XB6VK534KMB8.png",
          url: "",
          category: SponsorCategory.SPONSOR
        }
      ]
    },
    organisers: [
      {
        name: "Arbel Dániel",
        rank: "főrendező",
        emailAddress: "arbel.daniel@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810daniel_arbel.jpeg",
        priority: 20
      },
      {
        name: "Sulc Dominika",
        rank: "PR- és sajtófelelős",
        emailAddress: "sulc.dominika@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810dominika_sulc.jpeg",
        priority: 19
      },
      {
        name: "Mester Gyöngyvér",
        rank: "Szakkollégium elnöke",
        emailAddress: "mester.gyongyver@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810gyongyver_mester.jpeg",
        priority: 18
      },
      {
        name: "Serban Andrada Alexia",
        rank: "előadói csapatvezető",
        emailAddress: "serban.andrada.alexia@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810andrada-serban.jpeg",
        priority: 17
      },
      {
        name: "Déri Gergely",
        rank: "arculati felelős",
        emailAddress: "deri.gergely@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810gergely_deri.jpeg",
        priority: 16
      },
      {
        name: "Bujdosó Gergő",
        rank: "webfelelős",
        emailAddress: "bujdoso.gergo@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810gergo_bujdoso.jpeg",
        priority: 15
      },
      {
        name: "Iván András",
        rank: "helyszínfelelős",
        emailAddress: "ivan.andras @simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250213082356avatar.png",
        priority: 13
      },
      {
        name: "Vizi Kristóf Levente",
        rank: "technikusok összefogója",
        emailAddress: "vizi.kristof.levente@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810kristof_vizi.jpeg",
        priority: 11
      },
      {
        name: "Hübler Henrik",
        rank: "közvetítés összefogója",
        emailAddress: "hubler.henrik@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810henrik_hubler.jpeg",
        priority: 10
      },
      {
        name: "Jász Kende András",
        rank: "rendezvényfotózás összefogója",
        emailAddress: "jasz.kende.andras@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810andras_jasz.jpeg",
        priority: 9
      },
      {
        name: "Mozsár Máté",
        rank: "logisztika felelős",
        emailAddress: "mozsar.mate@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810mate_mozsar.jpeg",
        priority: 8
      },
      {
        name: "Tóth Gergő",
        rank: "vezető vállalati kapcsolattartó",
        emailAddress: "toth.gergo@sch.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810gergo_toth.jpeg",
        priority: 12
      },
      {
        name: "Danka Marcell",
        rank: "expo felelős",
        emailAddress: "danka.marcell@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810marcell_danka.jpeg",
        priority: 7
      },
      {
        name: "Lipták Péter",
        rank: "expo felelős",
        emailAddress: "liptak.peter@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810peter_liptak.jpeg",
        priority: 6
      },
      {
        name: "Zombori Péter",
        rank: "gazdasági felelős",
        emailAddress: "zombori.peter@simonyi.bme.hu",
        pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250218154810peter_zombori.jpeg",
        priority: 14
      }
    ],
    featuredPresentation: {sectionTitle: "Promóciós Videó", description: "Promóciós Videó leírása ide jön"},
    presentations: [
      {
        slug: "robotkontrollerek-es-robotrendszerek-hardveres-architekturaja",
        title: "Ipari robotrendszerek hardver architektúrája",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T17:45:00+01:00",
        endTime: "2025-03-18T18:15:00+01:00",
        description: "Az ipari automatizálás napjainkban egyre nagyobb teret nyer a robotika fejlődésével. A korszerű robotkarok akár több száz kilogrammot képesek megmozgatni, pár század milliméter ismétlési pontossággal. Ennek megvalósításához a vezérlőben több, komplex elektronikai egység tökéletes együttműködése szükséges. Nyissunk fel képzeletben egy ilyen robotvezérlőt, és tekintsük át, milyen funkcionális elemek hajtják végre az egyes részfeladatait. Az előadás során megismerjük a vezérlő processzorait, FPGA moduljait, beszélünk a teljesítményelektronikáról, jelfeldolgozásról, feltárul előttünk hogy milyen kreatív megoldások kellenek egy robot teljesen megbízható, biztonságos működéséhez. A prezentáció végén szó lesz arról, hogy a jövőben merre haladhat az ipari robotika hardverfejlesztése, milyen lehetséges irányok vannak előttünk. A cél, hogy mindenki számára testközelbe hozzuk a robotok világát.",
        questionsUrl: "",
        presenter: {
          name: "Ivanics Dániel",
          rank: "Test Engineer Team Supervisor",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instakuka.png",
          company: {
            name: "KUKA",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/KUKA_1F0QYBHBUGU46.svg",
            url: "https://www.kuka.com/hu-hu",
            category: SponsorCategory.SPONSOR
          }
        }
      },
      {
        slug: "prompt-injection-tamadasok-nagy-nyelvi-modellek-ellen",
        title: "Prompt injection támadások Nagy nyelvi modellek ellen",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T16:15:00+01:00",
        endTime: "2025-03-18T16:45:00+01:00",
        description: "A nagy nyelvi modelleket (LLM) egyre szélesebb körben alkalmazzák a gyakorlatban, elsősorban kiváló utasításkövető képességeik miatt. Ugyanakkor számos sebezhetőségük ismert, amelyek közül a prompt injection támadás kiemelkedik, és az OWASP fenyegetettségi listáján az első helyen áll. Ez annak köszönhető, hogy a támadó viszonylag egyszerűen ráveheti a modellt arra, hogy végrehajtsa az adatok közé ágyazott utasításokat, mivel a modell nem tudja megkülönböztetni az utasításokat a tényleges adattól. Az előadásban bemutatok néhány jól ismert prompt injection támadást, valamint a nagy nyelvi modellek elleni védekezési lehetőségeket.",
        questionsUrl: "",
        presenter: {
          name: "Ács Gergely",
          rank: "Docens, Crysys Lab",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502insta.png"
        }
      },
      {
        slug: "ai-jaj-tanuljunk-e-meg-fejleszteni",
        title: "AI-jaj. Tanuljunk-e még fejleszteni?",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T17:15:00+01:00",
        endTime: "2025-03-18T17:45:00+01:00",
        description: "Ha már egy prompt segítségével is képesek vagyunk működő Python programot írni, akkor mi értelme még szoftverfejlesztést tanulni? Van-e garancia arra, hogy a programozás még érték lesz 5, 10, 40 év múlva is? Egyes CEO-k már most azt mondják, hogy hamarosan nem lesz szükség fejlesztőkre. Mindeközben mások ezzel határozottan nem értenek egyet, és azon az állásponton vannak, hogy a gépi tanulás és generatív mesterséges intelligencia önmagában nem lesz képes egy triviálisnál összetettebb szoftver előállítására. Hol van az igazság? Hogyan használja jelenleg a szoftverfejlesztő világ az AI-t? Van-e még értelme tanulni, és ha van, akkor hol, hogyan és mit? Ezekre a kérdésekre fogjuk keresni a választ összekapcsolva a neurológia, a pszichológia és a számítástudomány állításait valamint jelenkorunk IT szektorának valóságát.",
        questionsUrl: "",
        presenter: {
          name: "Blaskovics Viktor",
          rank: "Cross-functional team lead",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instablaskovics.png"
        }
      },
      {
        slug: "valosag-vs-elkepzeles-mit-varhatsz-egy-it-cegtol-es-mit-var-toled-egy-it-ceg",
        title: "Valóság vs. Elképzelés: Mit várhatsz egy IT cégtől – és mit vár tőled egy IT cég?",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T12:15:00+01:00",
        endTime: "2025-03-18T12:45:00+01:00",
        description: "Szoftverfejlesztőként képzeled el a jövődet? Hallottál már a tech cégekről, de nem tudod, mi vár rád valójában? Előadásunk segít eloszlatni a tévhiteket és megmutatni a valóságot: milyen a kiválasztási folyamat, hogyan zajlik egy interjú, és mit várunk egy pályakezdőtől?\r\nBeszélünk arról is, hogy a Z generáció számára mi tesz egy munkahelyet vonzóvá, és mitől lehetnek ők is értékesek egy munkáltató szemében. De nem csak az előnyökről lesz szó – bemutatjuk a kihívásokat és az árnyoldalakat is, hogy reális képet kapj arról, milyen egy IT cég belülről.\r\nHa érdekel, hogyan készülj fel a karriered első lépéseire, és milyen valós elvárásokkal érdemes érkezned, találkozzunk az előadáson!",
        questionsUrl: "",
        presenter: {
          name: "Herczog András, Kmoskó Judit",
          rank: "Lead Software Engineer, Head of HR",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250309162457instaicf.png",
          company: {
            name: "ICF Tech",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/ICF_JB92WG6ZHHQF.png",
            url: "https://careers.icftech.hu",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        slug: "az-agyagtablaktol-az-ai-ig-a-kvantitativ-elemzes-tortenete",
        title: "Az agyagtábláktól az AI-ig - A kvantitatív elemzés története",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T12:45:00+01:00",
        endTime: "2025-03-18T13:15:00+01:00",
        description: "Fedezzük fel, hogyan alakította át a kvantitatív elemzés a pénzügy világát - az ősi agyagtábláktól a modern mesterséges intelligenciáig! Ismerjük meg a legújabb technológiák szerepét és a mérnöki karrierlehetőségeket ezen az izgalmas és dinamikusan fejlődő területen.",
        questionsUrl: "",
        presenter: {
          name: "Kerecsen Tamás",
          rank: "Vice President",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instakercsen.png",
          company: {
            name: "WorldQuant",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/WORLDQUANT_B0932L7EI83J.jpg",
            url: "https://www.worldquant.com/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        slug: "amikor-mar-nem-eleg-hogy-mukodik-elet-a-nagyvallalati-frontendek-vilagaban",
        title: "Amikor már nem elég, hogy működik – élet a nagyvállalati frontendek világában",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T12:45:00+01:00",
        endTime: "2025-03-18T13:15:00+01:00",
        description: "Egyetemistaként amikor egy házi feladaton, laboron vagy szakdolgozaton dolgozol, akkor minden a te kezedben van. A céges világba kilépve aztán találkozol a fejlesztői csapatok és vállalatok módszertanaival és már nem csak az számít, hogy jól működjön az alkalmazásod, hanem hogy egységes és fenntartható is legyen.\r\nDe hogyan alakulnak ki ezek a szabályok? Mikor érdemes újrahasznosítani a kódot, és mikor jobb az elejéről kezdeni? Hogyan lehet egy frontend alkalmazást úgy megtervezni, hogy évekkel később is skálázható és fenntartható maradjon?\r\nElőadásomban végigvezetlek egy fejlesztő karrierjén az egyetemi projekttől a nagyvállalati kihívásokig. Az Angular példáján keresztül bemutatok olyan döntéseket, amelyek hosszú távon hatással vannak egy alkalmazás jövőjére – legyen szó komponensek újrahasznosításáról, library-k készítéséről vagy microfrontend architektúráról.\r\nHa érdekel, hogyan gondolkodj stratégiailag a frontend fejlesztésben, és szeretnéd elkerülni a tipikus buktatókat, gyere el, és beszélgessünk róla!",
        questionsUrl: "",
        presenter: {
          name: "Kiss Dávid",
          rank: "Technical Lead",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250309162457instanova.png",
          company: {
            name: "Nova Services ",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/NOVA_1B8G5PM07QTMF.png",
            url: "https://www.novaservices.hu/karrier",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        slug: "hany-kattintasra-vagy-eleted-elso-iot-projektjetol",
        title: "Hány kattintásra vagy életed első IoT projektjétől?",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T14:15:00+01:00",
        endTime: "2025-03-18T14:45:00+01:00",
        description: "Azt már tudjuk, hogy az AI segítségével manapság gombnyomásra lehet programozni, házi feladatot generálni, de vajon hány kattintásra vagyunk életünk első IoT projektjétől? Erre a kérdésre keressük a választ ebben a rövid előadásban, ami idén is elkalauzol benneteket az IoT világába, bemutatja a legfrissebb IoT trendeket, de a tavalyi évekhez képest most egy kicsit más szemszögből mutatjuk be az IoT-t, a fejlesztők szemszögéből.\r\nMegtudhatjuk majd, hogyan lehet egyszerűen, mégis hatékonyan IoT okoseszközöket fejleszteni, és hogy miért kulcsfontosságú a felhasználói élmény. Visszatekintünk a múltba, és előre pillantunk a jövőbe, ahol az AI és a legújabb trendek várnak ránk.",
        questionsUrl: "",
        presenter: {
          name: "Maksay Gergely",
          rank: " Software Engineering Manager",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instamaksay.png",
          company: {
            name: "Silicon Labs",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/SL_8H1UDZ14S65C.svg",
            url: "https://www.silabs.com/about-us/careers",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        slug: "tech-ma-insights-milyen-egy-startup-exit-a-felvasarlo-szemszogebol",
        title: "Tech M&A insights - milyen egy startup exit, a felvásárló szemszögéből",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T12:15:00+01:00",
        endTime: "2025-03-18T12:45:00+01:00",
        description: "Technológiai startupokról egyre több szó esik, hogy kell elindítani, hogyan kell felderíteni a piacot, hogyan lehet tőkét bevonni. De mi történik 5-10-20 évvel az alapítás után, amikor a céget eladják? Milyen egy exit? És mi zajlik a felvásárló oldalán? Mi alapján döntenek hogy valamiért mennyit fizetnek, más céget meg sem néznek? Az előadás egy szemszögből, személyes történeten keresztül mutatja be ezt a világot. Az előadó BMEs mérnökinformatikusként tanult, diplomamunkájából több társával megalapította a Tresoritot. Az előadó 12 évig a Tresorit vezérigazgatója volt, egészen felvásárlást követően 2 évig.  Ezt követően a felvásárló cégcsoporton belül egy másik pozícióra váltott, ahol európai technológiai scaleupok felvásárlásával foglalkozott. A saját tapasztalatát keresztül mutatja be az M&A világ egy arcát. ",
        questionsUrl: "",
        presenter: {
          name: "Lám István",
          rank: "",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instalam.png"
        }
      },
      {
        slug: "autonom-rendszerek",
        title: "Autonóm rendszerek",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T13:15:00+01:00",
        endTime: "2025-03-18T13:45:00+01:00",
        description: "A telefon 1876-os feltalálása óta a telekommunikáció egyre inkább az emberi élet része vált, mára gyakorlatilag alapszükséglet lett. Ezzel párhuzamosan az információs technológia elmúlt évtizedekbeli rohamos fejlődése által a digitalizáció az élet szinte minden területén megjelent. Ma már szinte bármikor, bárhol és bármivel lehetséges kommunikálni, az okos kütyüinktől kezdve az autóinkon át a legkülönfélébb eszközökig egyre több és több dolog csatlakozik a hálózatokra - egy nagy globális, virtuális hálózatként létrehozva a világ digitális verzióját, a metaverzumot. Ez már egy annyira komplexxé váló rendszer, amelynek működtetéséhez paradigmaváltásra van szükség a hálózatok működése és menedzselése terén. Milyen építőkövekkel érhető el ez a váltás? Hogyan hozhatóak létre az autonóm, önprogramozó és önmenedzselő hálózatok? Hallgasd meg az előadást és válaszokat kapsz rá!",
        questionsUrl: "",
        presenter: {
          name: "Dr. Vincze Zoltán",
          rank: "Senior kutatómérnök",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instavincze.png",
          company: {
            name: "Nokia",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/NOKIA_1F7BT6NWYMO2T.svg",
            url: "https://www.facebook.com/nokiahungary/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        slug: "a-vallalkozoi-siker-titka",
        title: "A vállalkozói siker titka",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T13:15:00+01:00",
        endTime: "2025-03-18T13:45:00+01:00",
        description: "Az előadó az általa alapított Graphisoft világpiaci sikereinek és időnkénti kudarcainak példáival mutatja be a sikeres vállalkozásának titkait és emellett a hallgatók egyéni ambícióihoz és adottságaikhoz legjobban illeszkedő karrier pályák között segít választani. Mivel a Szilícium Völgy legsikeresebb IT vállalkozóinak többsége – ha valamilyen – akkor nem üzleti-, hanem sokkal inkább informatikai végzettséggel rendelkezett, ezért az előadó vállalkozói tapasztalatainak megosztásával segíti a következő mérnök-generációt. Ez a cél vezette az AIT-Budapest nevű felsőoktatási vállalkozás 18 évvel ezelőtti megalapításához, melynek vállalt missziója a tudomány és a vállalkozói világ közötti szakadék áthidalása. A BME kihelyezett tagozataként magánfinanszírozásban működő speciális program elősorban az Egyesült Államok legrangosabb egyetemiről egy-szemeszteres képzésre érkező diákok számára fejlesztett angol nyelvű kurzuskínálat a számítástudomány matematikai alapjait azok gyakorlati alkalmazásaival, majd üzleti-vállalkozói ismeretekkel egészíti ki. Az amerikai diákok számára 20 ezer dolláros tandíjért kínált képzés a BME hallgatói részére díjmentesen érhető el. Emellett a világ legrangosabb egyetemeiről érkező diákokkal kialakítható barátság a magyar diákok későbbi pályája során különösen értékes kapcsolati tőkét jelenthet.",
        questionsUrl: "",
        presenter: {
          name: "Bojár Gábor",
          rank: "informatikai vállalkozó, a Graphisoft és az AIT-Budapest alapítója",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instabojar.png"
        }
      },
      {
        slug: "magyar-jatekfejlesztes-fejlodese-es-lehetosegei",
        title: "Magyar játékfejlesztés fejlődése és lehetőségei",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T14:45:00+01:00",
        endTime: "2025-03-18T15:15:00+01:00",
        description: "Milyen karrierlehetőségek vannak a játékfejlesztésben itthon és külföldön egy pályakezdő számára? Az előadás erre az átfogó kérdésre keresi a választ az elmúlt évek példáin keresztül miközben természetesen kitér a jelenlegi trendekre és a hazai iparág előtt álló lehetőségekre.\r\n\r\n\r\nBalló Dávid lassan 15 éve foglalkozik játékfejlesztéssel ezalatt számtalan indie projektben vett részt, olyan cégekkel dolgozott együtt mint a Disney vagy a Unity és jelenleg a Zenimax Online Hungary csapatát erősíti mint UI designer. Az elmúlt években, a Magyar Játékfejlesztő Egyesület tagjaként számos iparági konferenciát és fejlesztői versenyt szervezett.",
        questionsUrl: "",
        presenter: {
          name: "Balló Dávid",
          rank: "Elnök, Magyar Játékfejlesztő Egyesület",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instaballo.png"
        }
      },
      {
        slug: "grafadatbazisok-ahol-az-elmelet-es-a-gyakorlat-talalkozik",
        title: "Gráfadatbázisok: Ahol az elmélet és a gyakorlat találkozik",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T14:45:00+01:00",
        endTime: "2025-03-18T15:15:00+01:00",
        description: "Az elmúlt évtizedben népszerűvé váltak az olyan adatbáziskezelő rendszerek, amelyeket specializált adattípusok tárolására és feldolgozására optimalizáltak: ilyenek többek között a vektor- és a gráfadatbázisok. Előadásomban utóbbiak világát mutatom be, különös hangsúlyt fektetve az ezekben alkalmazható új elméleti eredményekre. Elsőként a többirányú illesztés (multi-way join) algoritmusokat ismertetem, melyek elmélete az egykor a BME CS tanszéken is oktató Marx Dániel munkájában gyökerezik. Másodszor pedig az ún. \"faktorizáció\" technikáját tárgyalom. Bár mindkét algoritmuscsalád kiterjedt és bonyolult szakirodalommal rendelkezik, alapötleteik szemléletesen illusztrálhatók és betekintést nyújtanak abba, hogy hogyan jut el egy ötlet az elméleti publikációkból a gyakorlatban használt rendszerekbe. Az algoritmusok tárgyalása utána kitérek a gráfadatbázisok világának szervezeti kérdéseire is: arra, hogy hogyan lehet az adatbázisokat fejlesztő cégeket versenyre kényszeríteni és hogy hogyan zajlik a terület szabványosítása.",
        questionsUrl: "",
        presenter: {
          name: "Szárnyas Gábor",
          rank: "Benchmark szakértő",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instaszarnyas.png"
        }
      },
      {
        slug: "from-what-if-to-fun-playable-experiences-the-essential-role-of-game-designers",
        title: "From 'What If...?' to Fun, Playable Experiences: The Essential Role of Game Designers",
        room: "IB028",
        language: "en",
        startTime: "2025-03-18T15:15:00+01:00",
        endTime: "2025-03-18T15:45:00+01:00",
        description: "From games on your mom's phone about matching pieces of candy, to indie titles developed by a single person, and all the way to AAA open-world games with multi-million-dollar budgets, video games have become one of the major entertainment mediums.\r\n\r\nMany people can guess that game development teams include artists to make everything look amazing, and programmers to create the code that will bring the game to life. But who thinks and works on what the game should be about? Who decides how high you jump? How many bullets are in your gun? How much time does it take to harvest your turnips? These tasks usually fall onto the head of the game designer: A figure that ensures that the whole experience and the work of everyone fits together and delivers the intended experience.\r\n\r\nThis talk will delve into how video games are made, from the very first ideas until the final release and beyond. From there, I’ll explain with more detail the position of the game designer inside a game development team, and how we work with the other departments to arrive at the common goal: making cool games.",
        questionsUrl: "",
        presenter: {
          name: "Nicolas Tornatti",
          rank: "Game designer",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instanico.png"
        }
      },
      {
        slug: "vizszimatolas-a-holdon-beszamolo-a-puli-plws-im-2-es-kuldeteserol",
        title: "Vízszimatolás a Holdon – beszámoló a Puli PLWS IM-2-es küldetéséről",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T15:15:00+01:00",
        endTime: "2025-03-18T15:45:00+01:00",
        description: "A holdi víz az egyik legértékesebb nyersanyag lehet a közeli jövőben, amely fontos szerepet játszhat a jövőbeli küldetéseknél, a holdi tartós emberi jelenlét támogatásában és a földi gazdaság fejlesztésében is. Ezért elengedhetetlen, hogy lehetséges előfordulását és minőségét, hasonlóan több más lehetséges erőforráshoz, karakterizáljuk és feltérképezzük. \r\nAz előadásban bemutatjuk az Intuitive Machines houstoni cég második holdi küldetését (“IM-2”) (tervezett indulás várhatóan 2025 február végén), fedélzetén a Puli Space Technologies NASA-díjjal elismert miniatűr neutron spektrométere, a Puli Lunar Water Snooper (PLWS). A készülék alkalmas a Hold déli sarkvidéki területén vízjégre vonatkozó adatok gyűjtésére. Az Intuitive Machines rakétameghajtású drónján, a Micro Nova Hopper-en elhelyezett PLWS többek között egy „Permanently Shadowed Crater” (állandóan árnyékos kráter) területéről is minden idők első közvetlen felszíni mérési adatait szolgáltathatja. Az Európai Űrügynökség (ESA) és a Puli Space történelmet írt, amikor aláírta az első adatvásárlási szerződést egy kereskedelmi mélyűri küldetéshez kapcsolódva.\r\nA konferencián várhatóan beszámolunk a küldetés lefolyásáról és első eredményeiről.",
        questionsUrl: "",
        presenter: {
          name: "Dr. Pacher Tibor",
          rank: "alapító-ügyvezető igazgató, Puli Space",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instapuli.png"
        }
      },
      {
        slug: "megtortent-esetek-a-viruslaborbol",
        title: "Megtörtént ESETek a víruslaborból!",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T16:15:00+01:00",
        endTime: "2025-03-18T16:45:00+01:00",
        description: "Az utóbbi időben egyre többet olvashattunk, hallhattunk a mesterséges intelligencia kiberbiztonságra gyakorolt hatásáról, és arról, hogy hogyan változtathatja meg azt a közeli vagy távoli jövőben. Az elmúlt években megismert támadások nem tűntek el, továbbra is szembe kell néznünk a zsarolókártevőkkel vagy akár olyan támadásokkal is, melyek például az UEFI-t támadják. Az előadás célja, hogy sorra vegyük, milyen támadásokkal találkozunk jelenleg és mi várhat ránk a következő hónapokban.",
        questionsUrl: "",
        presenter: {
          name: "Béres Péter",
          rank: "IT vezető",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instaberes.png",
          company: {
            name: "Sicontact",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/_1XXESIXIBAZJ3.svg",
            url: "https://www.eset.com/hu/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        slug: "mi-van-a-budapestgo-mogott-kozlekedesinformatika-es-utastajekoztatas",
        title: "Mi van a BudapestGO mögött? Közlekedésinformatika és utastájékoztatás",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T16:45:00+01:00",
        endTime: "2025-03-18T17:15:00+01:00",
        description: "A közösségi közlekedés szervezése sokrétű és komplex feladat, amit lépten-nyomon informatikai rendszerek támogatnak. Ezen rendszereknek köszönhető, hogy a menetrendek böngészése helyett, elegendő megadni a kiindulási pontunkat és az úticélunkat és a BudapestGO nem csak háztól házig navigál minket, hanem a közlekedési hálózat aktuális állapotához alkalmazkodva teszi ezt. Ismeri az aktuális forgalmi zavarokat, késéseket, illetve akár azt is, hogy egy lezárt Lánchídon gyalog sem lehet éppen közlekedni.\r\n\r\nAz előadáson szó lesz arról, hogy hogyan szolgálja ki a BudapestGO ezeket az útvonaltervezési igényeket, milyen algoritmusokat használ a háttérben, illetve Magyarországon hol találkozhatunk hasonló rendszerrel. Ismertetésre kerül a használt technológiai stack, illetve az is, hogy milyen kihívásai vannak ennek az IT területnek.",
        questionsUrl: "",
        presenter: {
          name: "Jámbor Dominik",
          rank: "Senior Software Engineer",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instabpgo.png"
        }
      },
      {
        slug: "bank-biztonsagi-kihivasok-az-otp-nel-2025-ben",
        title: "Bank biztonsági kihívások az OTP-nél 2025-ben",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T16:45:00+01:00",
        endTime: "2025-03-18T17:15:00+01:00",
        description: "A bankok elleni támadások és biztonsági kihívások különböznek a többi nagyvállalattól? A pénzügyi szektor különösen vonzó célpont a kiberbűnözők számára, hiszen itt nemcsak pénzügyi, hanem érzékeny ügyféladatok is nagy számban találhatók. Az előadás célja, hogy átfogó képet nyújtson a pénzügyi szervezeteket érintő legfontosabb kiberbiztonsági kihívásokról. A résztvevők megismerkedhetnek a szektor ellen irányuló legjelentősebb fenyegetésekkel, kockázatokkal, és betekintést nyerhetnek az OTP Bank biztonsági területeinek működésébe és feladataiba.\r\n \r\nKiemelt figyelmet fordítunk az OTP-ELTE KIBERLAB ipari kutatólabor működésére, ahol bemutatjuk az aktuális kutatási témákat és az eddig elért publikusan ismertethető eredményeket. A KIBERLAB-ban folyó kutatások célja, hogy folyamatosan fejlesszék és tökéletesítsék a kiberbiztonsági technológiákat, amelyekkel az OTP Bank ügyféladatait védik.\r\n \r\nEz az előadás nemcsak a szakemberek számára nyújt értékes információkat, hanem minden érdeklődő számára betekintést enged a kiberbiztonság izgalmas és folyamatosan fejlődő világába.",
        questionsUrl: "",
        presenter: {
          name: "Pataki Máté",
          rank: "IT Biztonsági Architect - Kiberbiztonsági Irányítási Osztály",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250309162457otp.png",
          company: {
            name: " OTP Bank",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/OTP_GKXUXSIXPPLW.svg",
            url: "https://karrier.otpbank.hu/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        slug: "storyboard-tortenetmeseles-kepekkel",
        title: "Storyboard, történetmesélés képekkel",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T17:15:00+01:00",
        endTime: "2025-03-18T17:45:00+01:00",
        description: "Előadásomban részletezem a keretezés és a fontosabb képi komponálás alapjait, a plánok használatát. Kifejtem, hogyan irányítja a figyelmet a rendező és az operatőr a kameramozgással, a vágások alkalmazásával és az idő manipulálásával. Beszélek arról, mit jelent a montázs, hogy három képkocka együtt, miért több, mint három képkocka összege. Példákkal bemutatom a storyboard készítésének folyamatát, jelrendszereinek\r\nhasználatát. Összevetem hogyan viszonyul egymáshoz a film, a storyboard, a képregény, az animáció és a számítógépes játék.",
        questionsUrl: "",
        presenter: {
          name: "Dr. Haragos Péter",
          rank: "Tervezőgrafikus, látványtervező, képzőművész",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250309162457instaharagospeter.png"
        }
      },
      {
        slug: "hatekony-modszerek-karakteranimaciokra",
        title: "Hatékony módszerek karakteranimációkra",
        room: "IB028",
        language: "hu",
        startTime: "2025-03-18T14:15:00+01:00",
        endTime: "2025-03-18T14:45:00+01:00",
        description: "A karakteranimáció célja az élethű és természetes mozgások létrehozása, amelyhez a csontváz-alapú animáció és különböző skinning technikák nyújtanak megoldást. A Linear Blend Skinning egyszerűsége miatt népszerű, de torzulásokat okozhat, míg a Dual Quaternion Skinning hatékonyan csökkenti ezeket. A Delta Mush technika finomabb deformációkat biztosít, különösen komplex mozgások esetén. Kutatásom a Delta Mush továbbfejlesztésére irányult az önmetszési problémák kiküszöbölése érdekében, lehetővé téve a háló precízebb és természetesebb deformációját. Ezek a technikák együttesen szebb és élethűbb animációkat eredményeznek.",
        questionsUrl: "",
        presenter: {
          name: "Haragos Gergő Viktor",
          rank: "MSc mérnökinformatikus hallgató, szakkollégista",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250309162457instaharagosgergo.png"
        }
      },
      {
        slug: "kapcsolodj-be",
        title: "Kapcsolódj be! - A folyamatosan bővülő energetikai hálózatok mögött rejlő analitikai lehetőségekről",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T11:20:00+01:00",
        endTime: "2025-03-18T11:50:00+01:00",
        description: "Sokszor belegondolni is félelmetes, hogy mennyi külső tényező szükséges ahhoz, hogy a világ, amiben élünk (látszólag) gördülékenyen működjön. Persze mi, műegyetemi diákok tudjuk, hogy a legtöbb ilyen tényező kivétel nélkül képzett mérnökök precíz munkájára vezethető vissza. És persze azt is tudjuk, hogy sokszor nem elég azt mondani hogy tudjuk, hanem be is kell bizonyítanunk...\r\n \r\nA 20 perces bizonyítás során egy régiós okoseszköz-hálózatot üzemeltető projekten keresztül próbáljuk meg informatikus szemmel megvizsgálni, hogy az elméleti tudásunk hogyan önt formát a gyakorlatban, és hogy mennyire szerteágazó azon informatikai ismeretek halmaza, amelyek a teljes fejlesztési folyamat során nélkülözhetetlennek bizonyulnak. Ehhez megnézzük, hogy honnan hová tart az energetikai ágazat, majd ebből kiindulva végigvesszük, hogy az okosmérők által pumpált nagymennyiségű adat feldolgozásának és tárolásának milyen lehetőségei és konkrét Big Data megoldásai vannak. A lehetséges megvalósítások részletezése után zárszóként pedig betekintenünk abba, hogy a mesterséges intelligencia segítségével milyen további kiaknázatlan technológiai innovációk és iparági igények kapcsolódhatnak még ehhez a szektorhoz a jövőben.\r\n",
        questionsUrl: "",
        presenter: {
          name: "Mózsa Ábel",
          rank: "Szoftverfejlesztő",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250309162457instabarre.png",
          company: {
            name: "Barré Technologies",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/BARRE_DRZHJKJF52MI.svg",
            url: "https://barre.hu/",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      },
      {
        slug: "hova-tart-az-emobilitas",
        title: "Hová tart az eMobilitás? - A jelen realitásai, valamint a jövő technológiai lehetőségei. ",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T10:20:00+01:00",
        endTime: "2025-03-18T11:20:00+01:00",
        description: "Az elektromobilitás rohamos fejlődése nemcsak a közlekedést, hanem az energiagazdálkodást és az ipari beszállítói láncokat is alapjaiban alakítja át. Az előadás középpontjában a villamos hajtásláncok jelenlegi technológiai státusza és a jövőbeli fejlődési irányok állnak.\r\n \r\nAz előadás első felében áttekintésre kerülnek az elektromobilitás jelenlegi műszaki megoldásai, különös tekintettel a szinkron motorokra, valamint azok hatásfokára és költséghatékonyságára. Ezt követően említésre kerülnek az alapanyaglánc ellátási kihívásai, különös tekintettel a ritkaföldfémek és egyéb kulcsfontosságú anyagok elérhetősége, amelyek jelentősen befolyásolják az iparág jövőjét.\r\n \r\nA prezentáció második részében feltörekvő technológiák kerülnek fókuszba, mint az axiális fluxusú, reluktancia, illetve mágnesmentes motorok. Az axiális fluxusú gépek kompaktabb felépítésük és nagyobb teljesítménysűrűségük révén új lehetőségeket nyitnak meg a villamos járművek tervezésében, míg a reluktancia gépek ritkaföldfém-mentes kialakításukkal csökkenthetik a nyersanyag-függőséget.\r\n \r\nAz előadás célja, hogy a résztvevők átfogó képet kapjanak az eMobilitás jelenéről és jövőjéről, valamint az iparág előtt álló technológiai és gazdasági kihívásokról.",
        questionsUrl: "",
        presenter: {
          name: "Sára Bálint",
          rank: "Hajtáslánc koncepcióért felelős rendszermérnök",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250302215502instasarabalint.png",
          company: {
            name: "Robert Bosch",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/BOSCHNEW_19N8HKQY5K9I6.png",
            url: "https://www.bosch.hu/karrier/",
            category: SponsorCategory.MAIN_SPONSOR
          }
        }
      },
      {
        slug: "ai-a-gyakorlatban",
        title: "AI a gyakorlatban – Valós use case-ek és tanulságok a fejlesztésekből",
        room: "IB025",
        language: "hu",
        startTime: "2025-03-18T17:45:00+01:00",
        endTime: "2025-03-18T18:15:00+01:00",
        description: "Az előadás célja, hogy valós példákon keresztül mutassa be a mesterséges intelligencia fejlesztések során szerzett gyakorlati tapasztalatokat, és hasznos tanácsokat adjon a jövőbeni projektek sikerességéhez. Konkrét vállalati use case-eket elemezve kiemeljük azokat a tényezőket, amelyek meghatározzák egy AI-projekt sikerét: az üzleti célokhoz való illeszkedést, a stakeholder-bevonást, valamint a tudatos, agilis projektmenedzsmentet. Kiemelten foglalkozunk az AI projektekhez szükséges szakértelem szerepével, és gyakorlati példákon keresztül bemutatjuk, hogyan segítheti a vállalaton belüli tudásmegosztás és a tudatos kapacitástervezés az AI-projektek sikeres megvalósítását. Végül kitérünk az AI fejlesztések projektmenedzsment-kihívásaira, beleértve az iteratív fejlesztési folyamatok, adatminőségi problémák és tervezési nehézségek gyakorlati megoldásait. A résztvevők gyakorlati útmutatást kapnak arról, hogyan építsenek fenntartható, sikeres és üzleti értéket teremtő AI-projekteket, valamint betekintést nyernek abba, hogyan lehet áthidalni a szaktudásbeli különbségeket, elősegítve ezáltal a szervezet digitális fejlődését.",
        questionsUrl: "",
        presenter: {
          name: "Dalos-Kovács Gabriella Tímea, Nagy István",
          rank: "Csoport AI officer & strategist",
          pictureUrl: "https://xxii.konferencia.simonyi.bme.hu/img/20250315212520web4ig.png",
          company: {
            name: "4iG Group",
            logoUrl: "https://xxii.konferencia.simonyi.bme.hu/img/4IG_GHDVXETF14HC.svg",
            url: "https://www.4ig.hu/nyito",
            category: SponsorCategory.FEATURED_SPONSOR
          }
        }
      }
    ]
  }
}
