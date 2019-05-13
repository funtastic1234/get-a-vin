module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/vins.js":
/*!**********************!*\
  !*** ./data/vins.js ***!
  \**********************/
/*! exports provided: vins, getRandomVin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vins", function() { return vins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomVin", function() { return getRandomVin; });
var vins = ["1J4PP2GK1AW132691", "WDBFA76F2VF143787", "KMHTC6AD4DU114344", "2HGFB2F52CH563104", "1GTR1TEH8FZ193779", "1GTEC19Z16E176006", "1GCEC14T75Z176831", "1NXBR32E17Z783711", "1FMZU83P9YUA52049", "2HGFB2F58DH602814", "KMHCT4AEXDU431266", "1GNEC13V43R306054", "1N4AL3AP3FN319953", "KL5JD56Z77K524522", "1FUYYCYB6HP317134", "1FTRX17L83NA32971", "1FMCU9GX5EUA42703", "1GTHK231X3F144301", "1FMJU1J54CEF17278", "1M2N136Y7BA006792", "1FTNE2429XHC32395", "KL8CC6S93DC560501", "1GBHC29U43E217798", "1GYS4CKJ2FR299624", "1C4BJWEG1EL245541", "WDDHF5KB8EA880692", "1BAAGCSA1MF039491", "1FADP5BU0EL505090", "4S4BRBLC2B3334804", "KNDJT2A59C7477751", "2C4RC1BG9ER126627", "3D4PG4FB4AT195814", "JF2GPAGC4D2889316", "5TFBT54187X008221", "2FWYGDYB6XAA51645", "3VWAL7AJ0AM026752", "1GNET16S866168669", "KMHHU6KH8BU054652", "5FNRL5H60FB045275", "5GZER13728J306552", "JTHBK1GG9E2149173", "1GYFK43579R134526", "1J4RR4GG9BC736745", "1GKLVNED2AJ190293", "1C4PJLAK7CW126595", "1GNDS13S052146545", "5GAKRBKD0FJ103482", "1FTPW145X4FA30697", "5YFBURHE6EP123025", "JTJZK1BA5D2007210", "2GCEC19M1T1128569", "5J6RE4H70BL111807", "19UUA66256A058412", "1N4AL3AP7FC146529", "1N6BD06T26C472168", "1B3CB4HA1AD663813", "1G8ZV57B89F121604", "WVWPD63B94P101666", "W04GR5EC9B1111870", "1N4AL2AP8AC192812", "1FT8X3B68FEA25662", "1GBHC34J5LE164743", "1FTSW21R09EA67651", "5J6RM4H78EL055221", "3GCPKTE77CG175166", "1N4AL2AP0CN468892", "1FTNX21L14EB57003", "5XYZK3AB7BG089842", "1GYFK66827R197631", "3GNEC16T91G171399", "3C4PDCABXET308291", "3FA6P0HDXER342906", "1C4HJWDG3EL165475", "1GNSCBE07ER249202", "5N1AT2MT6FC753045", "JHMGE8H5XDC066735", "KM8SR4HF1FU091842", "1P4GP44G8XB537170", "1HGCP36768A017911", "WVGAV7AX8CW606797", "JF2SJGMC2EH538177", "1C4HJWDG3CL214249", "1J4HR58285C523083", "1FTRF12247KD47579", "2FMDK4KC7EBA11962", "1N4AA5AP4AC864405", "4T1FA38P66U100563", "1GNDV23127D138782", "1D7HA16D65J606006", "3GTU2UEC9EG542321", "1FADP3F26DL302068", "JTDZN3EU7D3208225", "4S4BRBCC8D3315094", "JTLZE4FE0A1109819", "1G2NW52E7XM861208", "1YVHP80C555M75557", "3N1CE2CPXEL393487", "4T1BE46K97U096316", "1GC1KXE81EF158681", "1G1ND52J516142932", "2HGFG126X6H570266", "2CTALUEC0B6476060", "1C3CDZAB1DN645209", "1HGCM56756A134669", "5J6YH28644L039253", "1C4RDHDG4EC508253", "3GNBABFW7BS517005", "2HNYD18211H523067", "3VWJP7AT2CM623314", "1D7RE3GK6BS520976", "1GKS2CKJ0FR552522", "1G3WS52H4XF365051", "2T3ZFREVXEW081896", "KNAGM4A73B5143825", "1FTFW1EV4AFD21766", "5UXWX9C52F0D47079", "JN1CV6AR9DM760539", "KNDJT2A53C7417058", "1HTSHAAR4RH580052", "3GNFK16R7XG215940", "JN8AS5MV0BW315029", "WBA1J7C50EVX33643", "3GCUKSEC8EG122246", "3GYFNBEY2BS527582", "4USFE83577LY63771", "1Z7HC28K66S581999", "WBA1J7C58FV253741", "3VWSE69M84M071921", "2T1BURHE8EC136827", "1J4FA54187L129095", "1FMEU73E67UB53877", "1FTPW14505KB45138", "4S4BP62C377338679", "2C3AK53G95H671887", "1ZVHT88S775367955", "JM1BL1SF8A1127629", "1J4GR48K96C277880", "1C4PJLAB7FW554235", "5TEWN72N13Z189470", "VNKKTUD34EA007215", "5NPEB4AC0CH449511", "1GNDT33S792107353", "4T1BD1FK3FU152802", "KNDJN2A2XF7766254", "1N6AD0ER7BC429523", "2A4GP54L87R156535", "1G4CU541324196718", "1B3HB48B38D724149", "1FTRX17L5YNB43517", "3FADP4AJ8DM108743", "2B3HD56M83H541930", "1GTZGGBA7A1108015", "1FTRW08L92KA41318", "1HD1BZB1X6Y079646", "1Y1SK5388RZ017389", "1Y1SK526XTZ042558", "WMWRE33505TD99614", "YV4902DZ4C2292415", "JT2AT00N8R0023734", "1GCFG29T451133702", "1GCDC14K2RZ182822", "4S3BE645516202124", "1N4AA5AP5EC473396", "2C8GP74L11R294361", "3GCUKTEC0EG436012", "1GNSCJE05BR359185", "KL1TJ62674B227833", "1G1PA5SH6D7192638", "1FAFP55U4YA219408", "1C4RJFDJ3FC632573", "1FTFX1EF0DKD15402", "1FTEW1EF7FFA01997", "2FMDK36C87BA45934", "JM1BL1L77D1791237", "WDBUF56J36A829398", "5NPEB4AC3CH345806", "WAUFFAFL6BN025584", "2C4RDGCG7CR154227", "1HGCS1B83CA002857", "3GYFNEE35ES664073", "2GCEK13MX71629140", "3N1AB7AP6EY230497", "1G1JC5SB9C4202476", "2T3BFREV2DW071007", "1FMRU17L42LA16085", "1FADP3K24DL345054", "2C4RDGCG7ER123028", "2G1WT55K469340526", "JM1BJ245321598539", "2FMZA5143YBC10231", "1YVHZ8CB5A5M11834", "4T1BE46K49U400929", "1FM5K8GT4EGB37824", "5N1AL0MM5FC509917", "YV1CZ592751152647", "1G4PP5SK3C4226743", "JT2AW15C3H0101470", "1D4GP45R56B674508", "1C3CDZAB5DN519225", "1GTHK23638F114429", "1B3HB48B17D146406", "JN8AS5MV0BW683565", "KMHDH4AH4FU250683", "1J4RS4GG6BC533901", "1HGCP2F85AA038497", "2GTEK13T861169580", "1FUYSSEB9WP890221", "1G4HD57MX9U121519", "1N6DD26T44C410188", "1GKDT13S942112404", "1FUYDZYB6VP752570", "4V4M19GFX2N335306", "5TFUY5F16CX252385", "1D7HU18227J638117", "3FA6P0H96ER152595", "4T1BG22K1WU381403", "2G4WS52M0W1571319", "5FYD4FV178B034026", "5YFBURHE8FP247136", "1G6KD54YXXU738288", "WDBUF56X89B437293", "1FTFW1EF4CFB28559", "1G2ZM551964265466", "1C6RR7GT5ES280023", "1C4RDHAG7EC445945", "JTJBC1BA7D2063728", "WVWNM7AJ6DW126957", "3GCEC13C09G176483", "WA1KK78R39A039164", "YV4902BZ4B1105925", "1N6BD0CT5BC450583", "1FTRW08L22KE28437", "JM1BK32F791252163", "1B3EL36X84N389273", "WMWZG3C50ETY33375", "4T3BK3BB6BU063556", "3FA6P0K95DR222885", "1HGCP2F65BA060483", "4T1BF3EK9AU096901", "1GNDV23L65D272984", "1G1ZU648X4F160140", "1G6KD57Y28U130407", "JNKCA21A9XT755801", "1C4BJWDG7CL184176", "JT8BH68X6Y0022018", "3VWRL7AJXAM091952", "1J4AA2D19BL569294", "WBAVC53578FZ82679", "JHMZE2H53BS003856", "5LMJJ3JT5FEJ05374", "1FM5K7F89DGA20424", "YV1TS91D921260773", "1XP7D49X4AD793726", "4S6CM58W8X4415094", "3C63RRGL4DG533484", "JN1CV6AP7BM500281", "1C4BJWEG5DL674874", "KMHTC6ADXDU155349", "1FUJBBAV33LJ88822", "5XXGN4A71FG426273", "4T1BG22K31U088448", "5GAKVBKD5EJ280619", "1LNHM86S03Y681034", "2FMDK4KC8DBC30783", "1FMFU17506LA40717", "4T1SK12E6SU636396", "1D7HU18298J149943", "1FTMF1CF4DFE09370", "1G11E5SA4DF333824", "5N1ED28Y11C520672", "JM1BL1TG4D1745977", "NM0LS7E71E1135699", "3FA6P0H70ER373592", "KNAGD128445343380", "1G1PC5SB5E7158312", "1GTJK33D77F111151", "KNDJD733945206630", "1J4FT48S2YL172114", "1FAFP53245A139846", "1B7GG12XX2S523480", "5Y2SL62893Z464541", "1G1PF5SC1C7307702", "5GRGN23U23H114483", "1C4BJWDG2CL289921", "1G2ZG57BX84188476", "1C3CCBCB2CN278021", "1FTRW12W07FA10810", "YV1672MC3BJ109226", "1C3CDZAG8EN154097", "1FDXB80C1TVA08970", "1FMCU9H93DUC56829", "1N4AL2AP6BN502266", "2GKFLXE32D6321732", "1D7HU182X6S552224", "1J8FF47W37D140890", "1FAFP40491F164271", "5FNRL5H94DB080232", "1FTNX21L92EC07546", "1C3BC1FB9BN576338", "5NPDH4AE1DH289121", "3VW217AU6FM011233", "1FADP3F24DL292012", "3GTU2UEC5EG266753", "4T3ZK3BB0DU060475", "JTHCE96S570008342", "19XFB4F2XDE000556", "JTEGF21A910005159", "YV1CZ852951216663", "3GNMCFE07BG272703", "1GCDC14K8KZ116135", "1GNKRGKD0EJ125161", "5N1AZ2MH6FN202242", "1N4AA5AP8DC839527", "5XXGM4A75CG043354", "1GBE5C1265F528286", "1GKDT13S922295817", "3GCPCREA5BG371052", "WAUVGAFH2BN005708", "JN8AE2KP7C9043752", "1G8ZS57N37F210450", "2FMDK4KC4DBC53316", "1FT8W3BT7EEB02321", "2C3CDYAG5CH124815", "JF2SJGWC0FH544767", "5N1AN08U76C535567", "JS2YB5A37A6302568", "WAUVGAFH3BN000954", "1G2AL18F787208376", "JT6HF10U5X0027819", "1N4AB41D6WC728877", "3GCDA15D68S520854", "2FMZA52225BA76692", "WMWSV3C57DT479960", "1G2JB5244Y7345647", "JA4JZ4AX9FZ001899", "WVWFD7AJ9CW288021", "1FAFP36N26W243511", "2V4RW3DG3BR766978", "1FAHP3K21CL476197", "KMHCT4AE9CU194431", "3GNEC16R7XG243276", "YV1CZ852951195264", "1LNHM94RX9G626546", "2GTEK13V961305801", "1HGCT1B81FA001692", "1FMFU17539EA64289", "1HTMKAAM22H371865", "5S3ET13S652801229", "1FTFW1CT0EKF55045", "3FADP4EJ7EM234698", "5XXGR4A66FG368009", "5NPDH4AE4DH345195", "1FAHP3M21CL416451", "1B3HB48B48D678993", "4T1BF3EK3AU088633", "KMHDH4AH4EU171349", "JT3GN86R910186244", "1G11B5SL5FF248780", "1G11B5SA6DF270489", "1FMCU0EG6CKA70842", "1M2AV02C99M004661", "JTHBK1EG3B2469443", "2HGFG12629H523754", "1GNDT13WXW2279489", "JHLRD1867WC071944", "1FMRU17L7XLC50339", "1HGCT2B80FA002824", "3TMLU4EN4EM137587", "2G1FA1E38D9158817", "1J4GS48K15C553942", "1C3CCBCG5EN198484", "5TDKK3DC0BS097483", "1G4HR54K82U201475", "JN8AF5MR3ET359460", "JF1GG68606G807419", "WDBJF55F8VA403298", "1GKFK66U65J164909", "1FAHP3FN7AW265991", "5N1AT2MV5FC761039", "1G4PR5SKXD4186155", "3D4PH5FV7AT196372", "JTDKDTB35E1565187", "WVWBW7AH7CV007202", "1N4AL3AP5FN352341", "2HGEJ1220SH570734", "2CNDL63F666023368", "1J4GA59148L608662", "2T1BU4EE0AC335565", "4JGBB72E18A410022", "KMHHU6KJ4FU123572", "1FTFX1EF6DFC86111", "1FMZU62K73UB94564", "JA4LS31HXYP813372", "1GKS2HE32BR154992", "1FTSW21506EC43901", "5TDDK3DC5CS034292", "JTEZU5JRXB5032588", "1YVHP80C075M24647", "5TDZK3EH7AS023999", "5FNYF4H5XDB054096", "2M2P267Y4MC009883", "1FMYU02Z77KB69672", "1HGCR2F5XEA036489", "1FMCU9G96DUA13985", "2C3LA43R68H160567", "1HVBBABP81H400811", "KNAGM4A70C5279685", "19XFB2F9XDE264863", "1N6SD11S0LC413300", "JA4LS21H02J067227", "1FMJK1H58EEF28847", "KMHDN46D15U008544", "JTDDY38TX20053978", "1FMCU9H97DUD42256", "5FNRL5H65FB011106", "1FTNE2EL5EDA02784", "1FA6P0HD8F5105500", "1D7RV1CT8BS561919", "3N1BC1AP2BL447892", "1GCKTBD96A8144286", "1GDER16K2MF527322", "1J8GN28K98W157271", "1FTEW1E84AFB62687", "2T1BU4EE1AC469582", "1FAHP38Z05W153927", "1GKS1HKC5FR547186", "1FTFX1EF2FFA38599", "3C3CFFAR4DT677996", "1J4GA2D14AL130075", "1FASP11J5SW296446", "1GNSCKE08DR320681", "1FVACXBS59HAD5136", "5UXWX9C56E0D30199", "1ZVBP8CH3A5164283", "2G1FP22KX22110953", "2G1WF52E459359985", "1C3BC1FB4BN569135", "1G1JC524827441628", "1FMCU9EG5CKA39621", "1GNEC13T85R195154", "4T1BE30KX2U633948", "2C4RC1BG8ER342789", "JA32U2FU1DU020628", "WP0CA29843S620082", "1G8AF52F95Z100872", "1G3WS52K5WF365960", "1LNHL9FT7CG801418", "1D7RV1GT9BS565715", "2T3DFREVXFW242064", "JF1ZCAB12E9601736", "3D7JB1EP0BG534825", "1FMCU9EG7CKA77495", "ZAM45KLA9C0061818", "5NPEB4AC2DH728038", "JNKCV54E05M410216", "1FTFW1ET0DKE44488", "1NXBR32EX7Z928292", "JTEBU4BF3DK173054", "JTHCL5EF8D5019322", "WA1LFAFP8EA083131", "5FNYF18417B028206", "WMWMF73578TV36015", "1FTFW1EF3EKF15369", "2GKFLVEK5F6166091", "1G11C5SLXEF250309", "2HGFB2F56CH516125", "1G4HG5EM7AU113747", "1G2JB54H8R7599668", "1FTPW14V78KB17955", "1XP5DU9X6YD479108", "2B4GH25K4PR389493", "3GTP1VE01DG134387", "ZFBCFAAHXEZ017108", "1N4BA41E67C860619", "1N4BA41E96C865134", "3D7MS48C05G787347", "1FAFP34N95W263711", "2HGFA1F5XAH307447", "1G2ZG57BX84104057", "1J8FF48W18D775400", "WDDGF8AB2DR253839", "2FMZA52295BA30289", "JN8AE2KP3E9103481", "3GYT4NEFXDG305187", "2C3KA53G46H387561", "SAJDA42C932A33833", "KMHDH4AE2FU222368", "KMHTC6ADXFU223376", "WAUAFAFH0BN015431", "KNDJF724467164640", "4T1BE32K96U684070", "1FT7W2BTXFEC31144", "1GYEE637070154084", "5NPE24AF0FH057014", "3VWDZ7AJ8BM320011", "1G1ZC5E08AF189430", "2GKALMEK8E6134206", "3GNFC16FXXG116273", "5N1AL0MM3FC502741", "3G5DB03E32S593553", "JF1GR8H65BL812591", "JNRAS08W98X203351", "3N1AB7AP9EL609104", "1GBFG15W1Y1208987", "1M1AA13Y11W138640", "JF2GPACC5E8264802", "SALME15489A300132", "JN8AS5MV1DW108314", "2G4WB55K3Y1328889", "KMHFH4JGXEA420478", "1G1ZE5EU9BF246278", "3N1AB6AP3BL677842", "1FTRF14V57KC72589", "2G4WS52J531158507", "5N1AR18W85C732113", "JM1BL1K30B1355311", "3C4PDCGGXFT529698", "1G6DN56S850180671", "WBANB535X6CP02108", "JTDKN3DU4F0415873", "1GCDT136958183499", "2B3HD46R02H108333", "2G1WC5E30D1112544", "1GNFK16357J192247", "5TDDK3DC1BS009050", "3N1BC1CP9BL374968", "5Y2SP6E82AZ406882", "1GTG6BE38F1124354", "1FDWE30F6XHB99239", "KNDJT2A5XD7510225", "1B3LC46B79N556635", "3C8FY68B12T282343", "1N4BA41E74C877747", "2T2ZK1BA0AC021642", "2HKYF18433H519842", "3TMJU62N18M066439", "4S3BP626566314578", "JM3KE4DY8E0319503", "3GNEC16R4XG211661", "1FTDF15N7JNA94666", "JTDKN3DU2F1899374"];
var getRandomVin = function getRandomVin() {
  return vins[Math.floor(Math.random() * vins.length)];
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! copy-to-clipboard */ "copy-to-clipboard");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_vins_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/vins.js */ "./data/vins.js");







var _jsxFileName = "/Users/brendanquinn/Documents/Development/vin/pages/index.jsx";




var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      vin: "1J4PP2GK1AW132691"
    });

    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.copyVin = _this.copyVin.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var vin = Object(_data_vins_js__WEBPACK_IMPORTED_MODULE_9__["getRandomVin"])();
      this.setState({
        vin: vin
      });
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default()(vin);
    }
  }, {
    key: "copyVin",
    value: function copyVin() {
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_8___default()(this.state.vin);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Generate a ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "Vehicle Identification Number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "VIN")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "A dynamic flexible form for accessibly generating ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "Vehicle Identification Numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "VINs")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Get and Copy new VIN")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        "aria-live": "polite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Result: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.vin)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        onClick: this.copyVin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Copy to Clipboard")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brendanquinn/Documents/Development/vin/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "copy-to-clipboard":
/*!************************************!*\
  !*** external "copy-to-clipboard" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map