import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact, ContactList } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  data = [{
    id: 'b0f3d6f4-20ed-4cd9-9a16-7666827a702c',
    firstName: 'Sandro',
    lastName: 'Causnett',
    email: 'scausnett0@cbslocal.com',
    picture: 'https://robohash.org/consequaturdolorumsed.jpg?size=50x50&set=set1'
  }, {
    id: '6fca7feb-868d-4dfc-ad76-895f0171eb1f',
    firstName: 'Celeste',
    lastName: 'Thorndale',
    email: 'cthorndale1@discovery.com',
    picture: 'https://robohash.org/occaecatiautnostrum.bmp?size=50x50&set=set1'
  }, {
    id: '4b0be1ab-bdf4-40da-a7fe-4ba77bd518fe',
    firstName: 'Thedric',
    lastName: 'MacBean',
    email: 'tmacbean2@businessweek.com',
    picture: 'https://robohash.org/odiototampariatur.jpg?size=50x50&set=set1'
  }, {
    id: '377dbbc1-9b5e-4b52-8bc3-1acd22a2cd76',
    firstName: 'Silvia',
    lastName: 'Padbury',
    email: 'spadbury3@usatoday.com',
    picture: 'https://robohash.org/corruptidoloremqueea.jpg?size=50x50&set=set1'
  }, {
    id: 'a4997197-0ca6-407d-af46-24d38ef5d4b2',
    firstName: 'Markus',
    lastName: 'Cecchetelli',
    email: 'mcecchetelli4@alexa.com',
    picture: 'https://robohash.org/quiquibusdamquis.jpg?size=50x50&set=set1'
  }, {
    id: 'ab4e3de7-d059-4cf1-b5da-1e29337f921f',
    firstName: 'Marcile',
    lastName: 'Aish',
    email: 'maish5@people.com.cn',
    picture: 'https://robohash.org/impeditautemqui.png?size=50x50&set=set1'
  }, {
    id: '08460254-ae77-44cb-8c81-df76c3436b3b',
    firstName: 'Gwenni',
    lastName: 'Haxby',
    email: 'ghaxby6@about.com',
    picture: 'https://robohash.org/liberoquidolor.png?size=50x50&set=set1'
  }, {
    id: '186d735f-99bc-4994-904e-f69289ffdc34',
    firstName: 'Bobby',
    lastName: 'McCalum',
    email: 'bmccalum7@google.de',
    picture: 'https://robohash.org/sedaccusamussint.bmp?size=50x50&set=set1'
  }, {
    id: 'e27315a5-7bfb-4822-b35f-ac10a9cc96f6',
    firstName: 'Prent',
    lastName: 'Rogerson',
    email: 'progerson8@reddit.com',
    picture: 'https://robohash.org/beataesimiliquecupiditate.bmp?size=50x50&set=set1'
  }, {
    id: 'b0c775e8-0f2b-4649-95ae-aa958b5fcab2',
    firstName: 'Lurleen',
    lastName: 'Janssens',
    email: 'ljanssens9@ezinearticles.com',
    picture: 'https://robohash.org/sedrecusandaequo.jpg?size=50x50&set=set1'
  }, {
    id: '58d91238-f399-441a-a853-41f56c381975',
    firstName: 'Winifield',
    lastName: 'Sparkwill',
    email: 'wsparkwilla@go.com',
    picture: 'https://robohash.org/quasiimpediteaque.png?size=50x50&set=set1'
  }, {
    id: '42449f14-c4b7-449b-bf2e-2607c4f1717c',
    firstName: 'Justin',
    lastName: 'Caveau',
    email: 'jcaveaub@squarespace.com',
    picture: 'https://robohash.org/etvoluptatumid.jpg?size=50x50&set=set1'
  }, {
    id: '9a336c59-d76c-4ed9-abf1-0957c643372a',
    firstName: 'Marc',
    lastName: 'Oglethorpe',
    email: 'moglethorpec@census.gov',
    picture: 'https://robohash.org/perferendissolutafugiat.jpg?size=50x50&set=set1'
  }, {
    id: 'e09930e9-6f93-41b5-a50f-c003fb82c0de',
    firstName: 'Milzie',
    lastName: 'Bothe',
    email: 'mbothed@independent.co.uk',
    picture: 'https://robohash.org/aliasnecessitatibusad.bmp?size=50x50&set=set1'
  }, {
    id: '30ff7fa3-6766-4a9a-b03e-de0367a7fa58',
    firstName: 'Chrysa',
    lastName: 'Cadney',
    email: 'ccadneye@hhs.gov',
    picture: 'https://robohash.org/estaliquidrecusandae.png?size=50x50&set=set1'
  }, {
    id: 'b4cfe7f6-85d9-4b5a-8b1d-992ba5cf05a8',
    firstName: 'Mallory',
    lastName: 'Scriven',
    email: 'mscrivenf@rediff.com',
    picture: 'https://robohash.org/nihileosmolestiae.jpg?size=50x50&set=set1'
  }, {
    id: '0ea5d72f-445c-48ae-9889-876f03451734',
    firstName: 'Zak',
    lastName: 'Lauret',
    email: 'zlauretg@jimdo.com',
    picture: 'https://robohash.org/eumdebitisunde.bmp?size=50x50&set=set1'
  }, {
    id: '37c8c208-35ce-4dc3-a552-0218f2221f64',
    firstName: 'Layla',
    lastName: 'Launder',
    email: 'llaunderh@angelfire.com',
    picture: 'https://robohash.org/innonvelit.bmp?size=50x50&set=set1'
  }, {
    id: 'c5725d17-58d4-4b5a-90f9-3aff734a54b8',
    firstName: 'Mame',
    lastName: 'Legion',
    email: 'mlegioni@ocn.ne.jp',
    picture: 'https://robohash.org/veritatissuntqui.jpg?size=50x50&set=set1'
  }, {
    id: '4cb16c9c-9486-487d-b911-996355b656b6',
    firstName: 'Nannie',
    lastName: 'Malone',
    email: 'nmalonej@who.int',
    picture: 'https://robohash.org/sequicorruptiet.png?size=50x50&set=set1'
  }, {
    id: 'c5674119-439a-4444-9ae4-c15a4d51d7ac',
    firstName: 'Britte',
    lastName: 'Valett',
    email: 'bvalettk@washingtonpost.com',
    picture: 'https://robohash.org/eligendieiusut.png?size=50x50&set=set1'
  }, {
    id: 'd9c08d7d-454c-4118-8c1b-65d37d54effc',
    firstName: 'Ruperta',
    lastName: 'Foggo',
    email: 'rfoggol@pcworld.com',
    picture: 'https://robohash.org/aperiamrepudiandaevero.jpg?size=50x50&set=set1'
  }, {
    id: '1e277117-8708-44b5-9610-58d4583c6d51',
    firstName: 'Stefano',
    lastName: 'Hannigan',
    email: 'shanniganm@acquirethisname.com',
    picture: 'https://robohash.org/voluptasaccusantiumexplicabo.bmp?size=50x50&set=set1'
  }, {
    id: '8e2d3dec-b8a5-40b9-a3e4-10e743697fc3',
    firstName: 'Cyrus',
    lastName: 'Blackie',
    email: 'cblackien@si.edu',
    picture: 'https://robohash.org/mollitiaquiaarchitecto.jpg?size=50x50&set=set1'
  }, {
    id: '3269f6f7-8182-4d09-a549-1d06e72497ca',
    firstName: 'Noby',
    lastName: 'Cavozzi',
    email: 'ncavozzio@a8.net',
    picture: 'https://robohash.org/dolorsedlaborum.bmp?size=50x50&set=set1'
  }, {
    id: '511943d0-5a8e-4dff-9ff7-0f110c16b95c',
    firstName: 'Katya',
    lastName: 'Atte-Stone',
    email: 'kattestonep@engadget.com',
    picture: 'https://robohash.org/estdignissimosquaerat.jpg?size=50x50&set=set1'
  }, {
    id: 'dc7d82b0-48ce-4130-8275-13a31425db96',
    firstName: 'Seamus',
    lastName: 'Moneti',
    email: 'smonetiq@tuttocitta.it',
    picture: 'https://robohash.org/quiducimusasperiores.bmp?size=50x50&set=set1'
  }, {
    id: '56ec9ab0-f33f-4a54-b303-7fce1546b832',
    firstName: 'Annemarie',
    lastName: 'Dionsetti',
    email: 'adionsettir@wunderground.com',
    picture: 'https://robohash.org/consequaturasperioressed.png?size=50x50&set=set1'
  }, {
    id: 'd09b687e-5315-4466-9af0-0335fa0bd7b0',
    firstName: 'Lillis',
    lastName: 'Badland',
    email: 'lbadlands@mlb.com',
    picture: 'https://robohash.org/recusandaeearumatque.png?size=50x50&set=set1'
  }, {
    id: '787ba017-fa89-46a7-b2dc-9c3aac1a8d9e',
    firstName: 'Karlotte',
    lastName: 'Brentnall',
    email: 'kbrentnallt@slashdot.org',
    picture: 'https://robohash.org/nihilliberout.png?size=50x50&set=set1'
  }, {
    id: 'd04791ba-b25d-4f17-b86e-690241f06c60',
    firstName: 'Antonietta',
    lastName: 'Bielefeld',
    email: 'abielefeldu@mtv.com',
    picture: 'https://robohash.org/doloreetquis.png?size=50x50&set=set1'
  }, {
    id: '5666b50d-248c-48a8-aedc-842a15c3b15d',
    firstName: 'Adi',
    lastName: 'Cadigan',
    email: 'acadiganv@blogs.com',
    picture: 'https://robohash.org/velearuminventore.jpg?size=50x50&set=set1'
  }, {
    id: '64b29c7a-a690-4fd0-aa13-528deb93b874',
    firstName: 'Rozelle',
    lastName: 'Cesaric',
    email: 'rcesaricw@wsj.com',
    picture: 'https://robohash.org/idprovidentexcepturi.png?size=50x50&set=set1'
  }, {
    id: 'f23d2edf-320b-4edd-9093-46db6ce2cd9d',
    firstName: 'Wilmar',
    lastName: 'Runacres',
    email: 'wrunacresx@dell.com',
    picture: 'https://robohash.org/remetfacere.jpg?size=50x50&set=set1'
  }, {
    id: '09e2213d-14d7-4bfb-a16d-7d0af9615efd',
    firstName: 'Fay',
    lastName: 'Rodenburgh',
    email: 'frodenburghy@vistaprint.com',
    picture: 'https://robohash.org/estodiorem.jpg?size=50x50&set=set1'
  }, {
    id: '03dabebb-bea8-48ff-8c82-ba2429a59843',
    firstName: 'Alvy',
    lastName: 'Cayton',
    email: 'acaytonz@patch.com',
    picture: 'https://robohash.org/vitaedoloremqueanimi.png?size=50x50&set=set1'
  }, {
    id: '885fab7e-9092-49dc-a7ce-70d7daedf712',
    firstName: 'Jeanna',
    lastName: 'Maypole',
    email: 'jmaypole10@sina.com.cn',
    picture: 'https://robohash.org/fugiatilloeum.png?size=50x50&set=set1'
  }, {
    id: 'ab683ead-2d02-46c7-9d1d-28f4394a6a55',
    firstName: 'Noni',
    lastName: 'Pearcy',
    email: 'npearcy11@nba.com',
    picture: 'https://robohash.org/consequaturquasodit.bmp?size=50x50&set=set1'
  }, {
    id: '08524186-a760-403d-a0db-786a428799be',
    firstName: 'Danny',
    lastName: 'Kenealy',
    email: 'dkenealy12@guardian.co.uk',
    picture: 'https://robohash.org/istevoluptatesomnis.png?size=50x50&set=set1'
  }, {
    id: '9bdf325c-b639-4c04-b664-95969ef20449',
    firstName: 'Tomasina',
    lastName: 'Showt',
    email: 'tshowt13@nba.com',
    picture: 'https://robohash.org/quiseaquedoloribus.bmp?size=50x50&set=set1'
  }, {
    id: '6ec585a1-46da-4311-8b75-dcaf7aa4594e',
    firstName: 'Uri',
    lastName: 'Ipsly',
    email: 'uipsly14@cdbaby.com',
    picture: 'https://robohash.org/voluptasquoqui.png?size=50x50&set=set1'
  }, {
    id: '30fc3401-3bf2-4c87-bd4d-24c79cef2a56',
    firstName: 'Bradley',
    lastName: 'Maldin',
    email: 'bmaldin15@sphinn.com',
    picture: 'https://robohash.org/etessemolestiae.png?size=50x50&set=set1'
  }, {
    id: 'dbdc95f4-917f-455a-a1cb-1cef52f0bc47',
    firstName: 'Elsworth',
    lastName: 'Ridolfi',
    email: 'eridolfi16@spiegel.de',
    picture: 'https://robohash.org/amagnamautem.png?size=50x50&set=set1'
  }, {
    id: '6cb3eece-bb7d-4936-8069-c564ffd786bc',
    firstName: 'Bryn',
    lastName: 'McFade',
    email: 'bmcfade17@g.co',
    picture: 'https://robohash.org/providentvoluptatemconsequatur.jpg?size=50x50&set=set1'
  }, {
    id: '7d8c7f64-6487-4797-94b0-a918b7931a88',
    firstName: 'Orin',
    lastName: 'Masham',
    email: 'omasham18@state.tx.us',
    picture: 'https://robohash.org/sitenimnon.jpg?size=50x50&set=set1'
  }, {
    id: '6332117c-1c24-4737-8081-b3df6d9bbf49',
    firstName: 'Marni',
    lastName: 'Brilleman',
    email: 'mbrilleman19@omniture.com',
    picture: 'https://robohash.org/facilisdoloribusreprehenderit.jpg?size=50x50&set=set1'
  }, {
    id: '6676dbd7-3974-40ed-8873-be5e788a727d',
    firstName: 'Salomone',
    lastName: 'Ameer-Beg',
    email: 'sameerbeg1a@yellowpages.com',
    picture: 'https://robohash.org/distinctionamcupiditate.png?size=50x50&set=set1'
  }, {
    id: '8f1b1635-8ab5-4ebc-81ec-c8dcb2eaa9d2',
    firstName: 'Dacey',
    lastName: 'Kuhnel',
    email: 'dkuhnel1b@patch.com',
    picture: 'https://robohash.org/consequaturquiaullam.jpg?size=50x50&set=set1'
  }, {
    id: 'bb65207e-95a2-49f0-89d0-b80b7ff663a8',
    firstName: 'Abigale',
    lastName: 'Skilling',
    email: 'askilling1c@twitpic.com',
    picture: 'https://robohash.org/abilloenim.jpg?size=50x50&set=set1'
  }, {
    id: 'b8291829-305b-44f5-bb2e-05bc7f9ed780',
    firstName: 'Blake',
    lastName: 'Ubsdell',
    email: 'bubsdell1d@ibm.com',
    picture: 'https://robohash.org/repudiandaevoluptatemporro.png?size=50x50&set=set1'
  }, {
    id: 'fe8dce78-ff72-4458-ad52-e5f3e36354fd',
    firstName: 'Bayard',
    lastName: 'Kaplan',
    email: 'bkaplan1e@barnesandnoble.com',
    picture: 'https://robohash.org/ducimuslaboriosamsit.bmp?size=50x50&set=set1'
  }, {
    id: 'f6413c12-2d20-4e58-be33-ad61be091d81',
    firstName: 'Kane',
    lastName: 'Gahan',
    email: 'kgahan1f@edublogs.org',
    picture: 'https://robohash.org/quirerumplaceat.jpg?size=50x50&set=set1'
  }, {
    id: 'ed78a77a-8ff3-4b1d-9ff0-678befa8d0e6',
    firstName: 'Arin',
    lastName: 'Abry',
    email: 'aabry1g@cpanel.net',
    picture: 'https://robohash.org/cumutofficiis.png?size=50x50&set=set1'
  }, {
    id: '7dfb9493-868e-4f48-80e1-4be39ac41a72',
    firstName: 'Margi',
    lastName: 'Haygreen',
    email: 'mhaygreen1h@smh.com.au',
    picture: 'https://robohash.org/iustoeligendisit.png?size=50x50&set=set1'
  }, {
    id: '679e1fe6-c899-46d1-ad78-be4b282bdea0',
    firstName: 'Terri',
    lastName: 'Dinsdale',
    email: 'tdinsdale1i@senate.gov',
    picture: 'https://robohash.org/aliasaccusantiumperferendis.bmp?size=50x50&set=set1'
  }, {
    id: 'ef5eaef8-eed4-44e1-a14f-142b8335d095',
    firstName: 'Earl',
    lastName: 'McKomb',
    email: 'emckomb1j@princeton.edu',
    picture: 'https://robohash.org/evenietplaceatqui.png?size=50x50&set=set1'
  }, {
    id: '9809b5f3-b80d-459a-9470-e9a886e6a314',
    firstName: 'Vanny',
    lastName: 'Chin',
    email: 'vchin1k@wikia.com',
    picture: 'https://robohash.org/nihilevenietreprehenderit.jpg?size=50x50&set=set1'
  }, {
    id: '1c697ae1-fc38-49c6-9a38-76120bf8020e',
    firstName: 'Celesta',
    lastName: 'Berzins',
    email: 'cberzins1l@ftc.gov',
    picture: 'https://robohash.org/repudiandaeautquia.bmp?size=50x50&set=set1'
  }, {
    id: '958b17a3-9057-4b59-8801-7f0280c96241',
    firstName: 'Virge',
    lastName: 'Wrightem',
    email: 'vwrightem1m@comsenz.com',
    picture: 'https://robohash.org/culpaeiusa.jpg?size=50x50&set=set1'
  }, {
    id: 'bb673bbd-22e1-4679-9d50-4a63dc1fd940',
    firstName: 'Jasen',
    lastName: 'Jirzik',
    email: 'jjirzik1n@ebay.com',
    picture: 'https://robohash.org/sitfugaqui.png?size=50x50&set=set1'
  }, {
    id: '3bc4a0aa-eadd-4b78-9976-53b5f661b638',
    firstName: 'Boycie',
    lastName: 'Aisbett',
    email: 'baisbett1o@addthis.com',
    picture: 'https://robohash.org/ipsaadipisciillo.bmp?size=50x50&set=set1'
  }, {
    id: 'b3f3b4fe-6e3e-4819-8482-d4ae69595c76',
    firstName: 'Ginny',
    lastName: 'Beddard',
    email: 'gbeddard1p@ning.com',
    picture: 'https://robohash.org/voluptasquivel.png?size=50x50&set=set1'
  }, {
    id: '8245612e-4be3-430d-ba02-f16cb540b6b2',
    firstName: 'Amii',
    lastName: 'Luis',
    email: 'aluis1q@imdb.com',
    picture: 'https://robohash.org/perferendisofficiaoptio.png?size=50x50&set=set1'
  }, {
    id: '17e5aa72-5e3b-42f6-a58e-33ecc1da4188',
    firstName: 'Ericha',
    lastName: 'Blackston',
    email: 'eblackston1r@japanpost.jp',
    picture: 'https://robohash.org/fugaminusharum.bmp?size=50x50&set=set1'
  }, {
    id: '94eb7d23-8973-436e-8519-d65279f76649',
    firstName: 'Kerk',
    lastName: 'Wackley',
    email: 'kwackley1s@diigo.com',
    picture: 'https://robohash.org/temporaautemipsum.bmp?size=50x50&set=set1'
  }, {
    id: 'e7332663-e443-4844-921f-a9252b6717fe',
    firstName: 'Carlina',
    lastName: 'Gilcrist',
    email: 'cgilcrist1t@chronoengine.com',
    picture: 'https://robohash.org/nequequamincidunt.png?size=50x50&set=set1'
  }, {
    id: '21db261d-ac2d-4745-af11-7ea4a44f4ffe',
    firstName: 'Margy',
    lastName: 'Filshin',
    email: 'mfilshin1u@blinklist.com',
    picture: 'https://robohash.org/corporisdebitisid.png?size=50x50&set=set1'
  }, {
    id: 'b8c17b58-6c9a-4388-a3b0-422b7b70c88a',
    firstName: 'Derron',
    lastName: 'Pluck',
    email: 'dpluck1v@usgs.gov',
    picture: 'https://robohash.org/autemcorporisomnis.png?size=50x50&set=set1'
  }, {
    id: 'dc1781a3-a467-49d9-a0be-75231eaa61ba',
    firstName: 'Adrian',
    lastName: 'Boustead',
    email: 'aboustead1w@mail.ru',
    picture: 'https://robohash.org/nullaconsequunturest.bmp?size=50x50&set=set1'
  }, {
    id: 'bc98a9ff-a43a-46c1-8336-3a85b8962065',
    firstName: 'Bren',
    lastName: 'Seargeant',
    email: 'bseargeant1x@theatlantic.com',
    picture: 'https://robohash.org/ataest.bmp?size=50x50&set=set1'
  }, {
    id: 'e9fea3c2-2521-4472-a2a8-104df95456ab',
    firstName: 'Barbara',
    lastName: 'Disbury',
    email: 'bdisbury1y@imageshack.us',
    picture: 'https://robohash.org/autaddolor.bmp?size=50x50&set=set1'
  }, {
    id: '1743265f-a00e-4f28-aaf8-550a8b179ad5',
    firstName: 'Ki',
    lastName: 'Kearford',
    email: 'kkearford1z@mediafire.com',
    picture: 'https://robohash.org/voluptatumanimiut.bmp?size=50x50&set=set1'
  }, {
    id: '069cfbd1-66d4-40ff-9ebb-a8e4966bd309',
    firstName: 'Heda',
    lastName: 'Stickens',
    email: 'hstickens20@adobe.com',
    picture: 'https://robohash.org/quisquameaquenulla.bmp?size=50x50&set=set1'
  }, {
    id: 'b6336747-1a33-461e-9fc4-0c5362b74a01',
    firstName: 'Cassie',
    lastName: 'Colam',
    email: 'ccolam21@goo.gl',
    picture: 'https://robohash.org/quiamolestiasdolore.jpg?size=50x50&set=set1'
  }, {
    id: '6b2886e2-3e66-4215-a887-5ab64b27b646',
    firstName: 'Dene',
    lastName: 'Bywater',
    email: 'dbywater22@acquirethisname.com',
    picture: 'https://robohash.org/quodquisquibusdam.bmp?size=50x50&set=set1'
  }, {
    id: 'ee1d1df8-e673-48cf-9a34-4f411a902677',
    firstName: 'Julita',
    lastName: 'Bastard',
    email: 'jbastard23@chicagotribune.com',
    picture: 'https://robohash.org/quamvoluptatesnisi.bmp?size=50x50&set=set1'
  }, {
    id: 'a8e5bce8-2afa-418f-b314-be44a00a4ca0',
    firstName: 'Wallace',
    lastName: 'Huggons',
    email: 'whuggons24@wikia.com',
    picture: 'https://robohash.org/repudiandaeidiure.jpg?size=50x50&set=set1'
  }, {
    id: 'b5a8e0da-8e92-407e-ba27-5fb172c41406',
    firstName: 'Husain',
    lastName: 'Bernardotte',
    email: 'hbernardotte25@paypal.com',
    picture: 'https://robohash.org/dolorumducimusplaceat.jpg?size=50x50&set=set1'
  }, {
    id: 'ce63eb88-b639-4c63-9149-531c7b1f06ed',
    firstName: 'Doralynn',
    lastName: 'Dunsmore',
    email: 'ddunsmore26@slashdot.org',
    picture: 'https://robohash.org/teneturquiaalias.jpg?size=50x50&set=set1'
  }, {
    id: '28d386d1-efbe-490c-908b-f4d716b02aff',
    firstName: 'Berti',
    lastName: 'Binion',
    email: 'bbinion27@dyndns.org',
    picture: 'https://robohash.org/rerumaporro.bmp?size=50x50&set=set1'
  }, {
    id: 'cc030c6f-727c-4fe4-b09b-08fd655781ba',
    firstName: 'Frederick',
    lastName: 'Dunbabin',
    email: 'fdunbabin28@microsoft.com',
    picture: 'https://robohash.org/necessitatibusoptiototam.jpg?size=50x50&set=set1'
  }, {
    id: 'db3618a8-e096-4a98-9752-7251db2c9b83',
    firstName: 'Aloysia',
    lastName: 'Russam',
    email: 'arussam29@hhs.gov',
    picture: 'https://robohash.org/etetnostrum.bmp?size=50x50&set=set1'
  }, {
    id: '7df3f8d2-8d65-4a38-a6e1-9f497b304754',
    firstName: 'Celinka',
    lastName: 'Spadaro',
    email: 'cspadaro2a@dion.ne.jp',
    picture: 'https://robohash.org/laborumsimiliquequo.jpg?size=50x50&set=set1'
  }, {
    id: '3271f5c5-9b50-466c-91d9-b3c59811a711',
    firstName: 'Louisette',
    lastName: 'Warton',
    email: 'lwarton2b@technorati.com',
    picture: 'https://robohash.org/perferendisofficiislaudantium.bmp?size=50x50&set=set1'
  }, {
    id: '9281f47a-9e8d-4255-898a-7a233790dc26',
    firstName: 'Burr',
    lastName: 'Duer',
    email: 'bduer2c@hao123.com',
    picture: 'https://robohash.org/velpariaturut.png?size=50x50&set=set1'
  }, {
    id: '1c0c6771-6a24-42c7-8e60-b6c68db77416',
    firstName: 'Broderick',
    lastName: 'Blythin',
    email: 'bblythin2d@reverbnation.com',
    picture: 'https://robohash.org/etetaccusantium.jpg?size=50x50&set=set1'
  }, {
    id: '5a7ced78-6b4b-483f-9331-d180d7ea0a0b',
    firstName: 'Pierce',
    lastName: 'Vlach',
    email: 'pvlach2e@reference.com',
    picture: 'https://robohash.org/estetdignissimos.png?size=50x50&set=set1'
  }, {
    id: '2ef2700a-0924-4543-b4ba-fe5100ef280d',
    firstName: 'Mischa',
    lastName: 'Pietasch',
    email: 'mpietasch2f@usa.gov',
    picture: 'https://robohash.org/iureitaquequi.png?size=50x50&set=set1'
  }, {
    id: 'ad8291c1-4ff0-4afb-ba05-f9226f078cf2',
    firstName: 'Patten',
    lastName: 'Marsland',
    email: 'pmarsland2g@seesaa.net',
    picture: 'https://robohash.org/iustosedpossimus.bmp?size=50x50&set=set1'
  }, {
    id: 'e801d9ba-0272-4749-89e2-5fa97d36a58c',
    firstName: 'Archambault',
    lastName: 'Triggel',
    email: 'atriggel2h@marriott.com',
    picture: 'https://robohash.org/delenitisintquibusdam.bmp?size=50x50&set=set1'
  }, {
    id: '5c50bb3b-fe85-48f8-9155-53924dffb739',
    firstName: 'Jennie',
    lastName: 'McMennum',
    email: 'jmcmennum2i@shinystat.com',
    picture: 'https://robohash.org/aliquametenim.png?size=50x50&set=set1'
  }, {
    id: 'adce3828-bc04-4c0c-9101-14daab4f5d4d',
    firstName: 'Skylar',
    lastName: 'Speedin',
    email: 'sspeedin2j@stumbleupon.com',
    picture: 'https://robohash.org/mollitiadoloromnis.jpg?size=50x50&set=set1'
  }, {
    id: '87ecf500-5cb8-4346-8370-4f214b504850',
    firstName: 'Matthieu',
    lastName: 'Pitrasso',
    email: 'mpitrasso2k@uol.com.br',
    picture: 'https://robohash.org/aliquidsimiliqueut.jpg?size=50x50&set=set1'
  }, {
    id: 'e120bef9-f9cb-4997-8cab-d753b514b942',
    firstName: 'Hewitt',
    lastName: 'Lant',
    email: 'hlant2l@hhs.gov',
    picture: 'https://robohash.org/autquisvoluptatem.bmp?size=50x50&set=set1'
  }, {
    id: '22fa4037-7975-47f7-be47-b2a6e21a6b43',
    firstName: 'Letitia',
    lastName: 'Dominichelli',
    email: 'ldominichelli2m@google.de',
    picture: 'https://robohash.org/veritatismodiunde.png?size=50x50&set=set1'
  }, {
    id: 'b7176e03-1c2b-44bd-a70c-68e5eb9a1f23',
    firstName: 'Revkah',
    lastName: 'Shepton',
    email: 'rshepton2n@chicagotribune.com',
    picture: 'https://robohash.org/quiiustofuga.jpg?size=50x50&set=set1'
  }, {
    id: 'be7e35d2-2ab5-42c8-8db5-f617cf4e3fc4',
    firstName: 'Jillie',
    lastName: 'Willingale',
    email: 'jwillingale2o@163.com',
    picture: 'https://robohash.org/autautemconsequatur.bmp?size=50x50&set=set1'
  }, {
    id: 'a6240c93-78ee-4e34-9bae-cbfeb57767fd',
    firstName: 'Gaspar',
    lastName: 'O\'Dowling',
    email: 'godowling2p@google.it',
    picture: 'https://robohash.org/cumqueexcepturiest.jpg?size=50x50&set=set1'
  }, {
    id: '8c5d624f-76e8-42ff-8c9a-f36bdf5c730b',
    firstName: 'Stanly',
    lastName: 'Ivins',
    email: 'sivins2q@fastcompany.com',
    picture: 'https://robohash.org/facilisquisqui.jpg?size=50x50&set=set1'
  }, {
    id: 'af19065c-614a-4110-814d-3613e5005aff',
    firstName: 'Giavani',
    lastName: 'Dobbin',
    email: 'gdobbin2r@blinklist.com',
    picture: 'https://robohash.org/culpanonplaceat.jpg?size=50x50&set=set1'
  }];

  async get(): Promise<Contact> {
    return {
      id: 'b0f3d6f4-20ed-4cd9-9a16-7666827a702c',
      firstName: 'Sandro',
      lastName: 'Causnett',
      email: 'scausnett0@cbslocal.com',
      picture: 'https://robohash.org/consequaturdolorumsed.jpg?size=50x50&set=set1'
    };
  }

  async list(pageIndex: number, pageSize: number): Promise<ContactList> {
    return {
      contacts: this.data.slice(pageIndex, pageIndex + pageSize),
      pageIndex,
      pageSize,
      totalCount: this.data.length,
    };
  }

  async create(contact: Contact): Promise<Contact> {
    this.data.push(contact);
    return contact;
  }

  async update(update: Contact): Promise<Contact> {
    this.data = this.data.map(it => it.id === update.id ? update : it);
    return update;
  }

  async delete(id: string): Promise<Contact> {
    const removed = this.data.find(it => it.id === id);
    if (removed) {
      this.data = this.data.filter(it => it.id !== id);
      return removed;
    }
  }

}
