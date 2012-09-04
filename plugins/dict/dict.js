// "use strict";
XML.ignoreWhitespace = false;
XML.prettyPrinting = false;

var SPACE = ' ';

var STYLE = <style type="text/css">
<![CDATA[
body { white-space:normal;}
* {line-height:24px;}
th, dt { font-weight:bolder; }
dt { list-style-type: disc; }
dd { margin:0.1em 0 0.2em; }
.title { text-indent: 14px; }
.title > span { margin-left: 0.8em; }
p > span, li > a { margin-right: 1em; }
span > b { margin-right: 0.4em; }
.basic dt + span { margin-right: 0.4em; }
p,dd,dt,h1,h2,h3,h4,h5,h6,h7,li,td,th {white-space:normal; word-wrap: break-word;}
.dict_block>table {width:800px;}
/* youdao */
#dict_js_y p > span, #dict_js_y li > a {margin-right: 0;}
#dict_js_y .example-via a:nth-child(2) {display:none;}
#dict_js_y .video {
	position:relative;
}
#dict_js_y .video .play {
	display:inline-block;
	position:relative;
}
#dict_js_y .video .playicon {
	cursor: pointer;
	height: 30px;
	left: 50%;
	margin-left: -15px;
	margin-top: -15px;
	position: absolute;
	top: 50%;
	width: 30px;
}

.ciyf-cn01 strong, .block-1 strong {
	float:left;
}
#dict_js_d em.hot {
	font-weight:bolder;
	font-style:normal;
}

.dict_block {
	width:600px;
	margin-left:1em;
	font-size:110%;
}

#dict_js_d .fold, #dict_js_d .unfold, #dict_js_d .folds, #dict_js_d .cont-one .choose {
	display:none;
}

#dict_js_z * {background-image:none;}
#dict_js_z .notice {clear:both;overflow:hidden;}
#dict_js_z .dicpy {font-weight: bolder;}
/*#dict_js_z .diczy {color: #000099;}*/
#dict_js_z .info{color:#999;font-size:14px;margin-right:5px;padding-left:10px;}
#dict_js_z .mut_jies{padding:10px 20px 20px 20px;font-size:14px;}
#dict_js_z .yf_all{padding:3px 4px 4px 4px;}
#dict_js_z .if_all{font-weight:bolder;padding:3px 4px 4px 6px;}
#dict_js_z .mut_lvs{font-weight:bolder;font-weight:bolder;}
#dict_js_z .mut_ol{margin:10px 6px 10px 35px;}
#dict_js_z .mut_ol li{list-style-position:outside;list-style-type:decimal;}
#dict_js_z .mut_ol .ty{font-weight:bolder;}
#dict_js_z .mut_ol .ty a{font-weight:bolder;}
#dict_js_z .mut_h3s{font-weight:bolder;font-weight:bolder;padding:10px 20px 0 15px;}
#dict_js_z .jiaru_s{margin:10px 0;text-align:center;}
#dict_js_z .more{margin:10px 10px 10px 15px;font-size:13px;}
#dict_js_z .mutti_pp{padding:10px;}
#dict_js_z .diczx1, #dict_js_z .diczx2,#dict_js_z .diczx3,#dict_js_z .diczx4 {background-color:#9999FF;color:#000;}
#dict_js_z #z_i_1,#z_i_2{font-size:16px;line-height:20px;}
#dict_js_z #z_i_1 a{color:#900;text-decoration:underline;}
#dict_js_z #zil2,#zir2{height:100px;}
#dict_js_z #ziip{height:30px;line-height:30px;}
#dict_js_z #zil2{margin:0;padding:0;background:url("http://www.zdic.net/images/z_100.gif") no-repeat center;height:100px;width:100px;}
#dict_js_z #pytab{text-align:right;}
#dict_js_z #ztdg{width:38px;text-align:left;}
#dict_js_z #jbs{text-indent:40px;background:url("http://www.zdic.net/images/z_i_jb.gif") no-repeat;margin:2px 0 5px 0;}
#dict_js_z #bs{text-indent:40px;background:url("http://www.zdic.net/images/z_i_bs.gif") no-repeat;margin:2px 0 5px 0;}
#dict_js_z #fbs{text-indent:40px;background:url("http://www.zdic.net/images/z_i_fb.gif") no-repeat;margin:5px 0 5px 0;}
#dict_js_z #bis{text-indent:40px;background:url("http://www.zdic.net/images/z_i_bis.gif") no-repeat;margin:5px 0 5px 0;}
#dict_js_z #jt{text-indent:40px;background:url("http://www.zdic.net/images/z_i_jt.gif") no-repeat;margin:5px 15px 2px 0;float:left;}
#dict_js_z #ft{text-indent:40px;background:url("http://www.zdic.net/images/z_i_ft.gif") no-repeat;margin:5px 0 2px 0;float:left;}
#dict_js_z #uinfo{text-indent:40px;background:url("http://www.zdic.net/images/z_i_bm.gif") no-repeat;margin:0 15px 0 0;float: left;}
#dict_js_z #wb{text-indent:40px;background:url("http://www.zdic.net/images/z_i_wb.gif") no-repeat;margin:0 15px 0 0;float: left;}
#dict_js_z #cj{text-indent:40px;background:url("http://www.zdic.net/images/z_i_cj.gif") no-repeat;margin:0 15px 0 0;float: left;}
#dict_js_z #zm{text-indent:40px;background:url("http://www.zdic.net/images/z_i_zm.gif") no-repeat;margin:0 15px 0 0;float: left;}
#dict_js_z #fc{text-indent:40px;background:url("http://www.zdic.net/images/z_i_fc.gif") no-repeat;margin:0 15px 0 0;float: left;}
]]>
</style>;

var DICT_LANGUAGE = window.navigator.language;

var tr = {
	"en-US": {
		1:  "Description",
		2:  "From ",
		3:  " to ",
		4:  "Lookup: ",
		5:  "Details",
		6:  "In Progressing...",
		7:  "Google Translate: ",
		8:  "Define",
		9:  "Related phrases",
		10: "Synonyms: ",
		11: "Antonyms: ",
		12: "Thesaurus",
		13: "Inflected",
		14: "Original Text",
		15: "Translation",
		16: "Langpair",
		17: "Source language and destination language",
		18: "Examples",
		19: "Not found: ",
		21: "Audio support",
		22: "Simple output",
		23: "Dictionary engine",
		24: "Dict.cn",
		25: "QQ Dictionary",
		26: "Show result",
		27: "Statusline",
		28: "Alert",
		29: "Desktop notification",
		30: "Enable double click",
		31: "Dict lookup",
		32: "View translation for mouse selection or clipboard (*nix only)",
		33: "View details for mouse selection or clipboard (*nix only)",
		34: "Google Translate",
		35: "Youdao Dictionary",
		36: "Chinese ↔ English",
		37: "Chinese ↔ French",
		38: "Chinese ↔ Korean",
		39: "Chinese ↔ Japanese",
		40: "Open result in current tab!",
		41: "Han Dian",
		42: "Wikipedia",
		43: "Net Sentences",
		44: "Situational Dialogues",
		45: "The 21st Century Unabridged English-Chinese Dictionary",
		46: "Collins",
		47: "Word Usage",
		48: "Dictionary"
	},
	"zh-CN": {
		1:  "描述",
		2:  "从 ",
		3:  " 到 ",
		4:  "查找：",
		5:  "详情",
		6:  "查询进行中...",
		7:  "谷歌翻译：",
		8:  "解释",
		9:  "相关词组",
		10: "同近义词：",
		11: "反义词：",
		12: "同反义词",
		13: "词形变化",
		14: "原文",
		15: "翻译",
		16: "语言对",
		17: "来源语言和目标语言",
		18: "例句",
		19: "未找到：",
		21: "支持声音",
		22: "简洁输出",
		23: "词典引擎",
		24: "海词",
		25: "QQ 词典",
		26: "显示结果方式",
		27: "状态栏",
		28: "提醒",
		29: "桌面通知",
		30: "双击取词",
		31: "词典查找",
		32: "查看选区或者剪贴板（非视窗平台）的翻译",
		33: "查看选区或者剪贴板（非视窗平台）的翻译详情",
		34: "谷歌翻译",
		35: "有道词典",
		36: "汉英互译",
		37: "汉法互译",
		38: "汉韩互译",
		39: "汉日互译",
		40: "在当前标签页中打开结果！",
		41: "汉典",
		42: "维基百科",
		43: "网络例句",
		44: "情景对话",
		45: "21世纪大英汉词典",
		46: "柯林斯高级英汉双解词典",
		47: "词语用法",
		48: "英英解释"
	}
};

function T(i) {
	if (DICT_LANGUAGE == "zh-CN")
		return tr["zh-CN"][i];
	return tr["en-US"][i];
}

let wikipedia = {
	name: T(42),
	keyword: "",
	args: {lang:''},
	logo: "", // TODO: dynamic
	favicon: "", // TODO: dynamic
	init: function(keyword, args) {
		var req = new XMLHttpRequest();
		dict.req = req;
		req.open("GET", options["dictw-api"] + "?action=parse&format=json&page="+encodeURIComponent(args[0]));
		req.onreadystatechange = function(ev) {
			if (req.readyState == 4) {
				if (req.status == 200) {
					wikipedia.process(req.responseText);
				} else
					dict.error(req.status); // @TODO:
			}
		}
		req.send(null);
		return req;
	},

	href: function(params) {
		let keyword = encodeURIComponent(params["keyword"]);
		let site = "zh";
		// let site = params["sites"] || options["dict-Langpair"]["w"] || options.get("dict-langpair").defaultValue["w"] || "zh";
		return "http://"+site+".wikipedia.org/wiki/"+keyword;
	},

	process: function(text) {
		var result = JSON.parse(text).parse;
		let ret = {
			notfound: false,
			pron: false,
			def: result.displaytitle || decodeURIComponent(dict.keyword),
			simple: result.displaytitle || decodeURIComponent(dict.keyword),
			full: result.text || "",
			audio: false
		};
		if (options["dict-hasaudio"])
			ex.speak((result.displaytitle || decodeURIComponent(dict.keyword)).replace(" ", "\\ "));
		let output = <div><style tyle="text/css">
			<![CDATA[
				#wikipedia-output {background-color:#FFF;color:#000;padding:1em 2em;white-space:normal;}
				.editsection {display:none !important;}
				html,body {background-color:#FFF !important;}
#interwiki-completelist{font-weight:bold}body.ns-4.page-Wikipedia_首页 #deleteconfirm,body.ns-4.page-Wikipedia_首页 #t-cite,body.ns-4.page-Wikipedia_首页 #lastmod,body.ns-4.page-Wikipedia_首页 #siteSub,body.ns-4.page-Wikipedia_首页 #contentSub,body.ns-4.page-Wikipedia_首页 h1.firstHeading,body.ns-4.page-Wikipedia_首页 #catlinks{display:none !important}body.ns-4.page-Wikipedia_首页 #content,body.ns-4.page-Wikipedia_首页 #mytabs li,body.ns-4.page-Wikipedia_首页 #mytabs li a,body.ns-4.page-Wikipedia_首页 #p-cactions li.selected a,body.ns-4.page-Wikipedia_首页 #p-cactions li a:hover,body.ns-4.page-Wikipedia_首页 #content div.thumb{background-color:white}body.ns-4.page-Wikipedia_首页 #p-cactions li a{background-color:#fbfbfb} body.ns-4.page-Wikipedia_頁面存廢討論_疑似侵權 #wpSummaryLabel,body.ns-4.page-Wikipedia_頁面存廢討論_疑似侵權 #wpSummary,body.ns-4.page-Wikipedia_关注度_提报 #wpSummaryLabel,body.ns-4.page-Wikipedia_关注度_提报 #wpSummary{display:none !important}  ol.references{font-size:100%}.references-small{font-size:90%}sup.reference{white-space:nowrap}    .references-2column{font-size:90%;-moz-column-count:2;column-count:2}.same-bg{background:none }ol.references > li:target,sup.reference:target,cite:target{background-color:#DDEEFF}  .notice{text-align:justify;margin:1em;padding:0.2em}#disambig{border-top:3px double #cccccc;border-bottom:3px double #cccccc}#spoiler{border-top:2px solid #ddd;border-bottom:2px solid #ddd} .Talk-Notice{border:1px solid #C0C090;background-color:#F8EABA;margin-bottom:3px;width:80%;border-spacing:3px;margin-left:auto;margin-right:auto}.Talk-Notice:after{content:"The CSS for this template should be changed. See [[Wikipedia:Template Standardisation]]."} .Talk-Notice td{background:inherit} li#ca-0,li#ca-1,li#ca-2,li#ca-varlang-0,li#ca-varlang-1,li#ca-varlang-2{display:none}li#ca-varlang-3{margin-left:1.6em}  .allpagesredirect{font-style:italic}  .Use_Default_Date_Convention{display:inline}.Use_AD_and_BC{display:none}.Use_BCE_and_CE{display:none}     .audiolink a{background:url("http://upload.wikimedia.org/wikipedia/commons/f/f7/Loudspeaker.png") center left no-repeat !important;padding-left:16px !important;padding-right:0 !important} div.listenlist{background:url("http://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Gnome-speakernotes.png/30px-Gnome-speakernotes.png");padding-left:40px}div.videolist{background:url("http://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Video.svg/40px-Video.svg.png");padding-left:50px}div.multivideolist{background:url("http://upload.wikimedia.org/wikipedia/en/thumb/7/7a/FilmRoll-small.png/40px-FilmRoll-small.png");padding-left:50px} div.medialist{min-height:50px;margin:1em;background-position:top left;background-repeat:no-repeat}div.medialist ul{list-style-type:none;list-style-image:none;margin:0}div.medialist ul li{padding-bottom:0.5em}div.medialist ul li li{font-size:91%;padding-bottom:0} .plainlinksneverexpand{background:none ! important;padding:0 ! important}.plainlinksneverexpand .urlexpansion{display:none ! important} .plainlinksneverexpand a{background:none !important;padding:0 !important} .plainlinksneverexpand a.external.text:after{display:none !important}.plainlinksneverexpand a.external.autonumber:after{display:none !important} .infobox{border:1px solid #aaaaaa;background-color:#f9f9f9;color:black;margin-bottom:0.5em;margin-left:1em;padding:0.2em;float:right;clear:right}.infobox td,.infobox th{vertical-align:top}.infobox caption{font-size:larger}.infobox.bordered{border-collapse:collapse}.infobox.bordered td,.infobox.bordered th{border:1px solid #aaaaaa}.infobox.bordered .borderless td,.infobox.bordered .borderless th{border:0}.infobox.sisterproject{width:20em;font-size:90%} .infobox.bordered .mergedtoprow td,.infobox.bordered .mergedtoprow th{border:0;border-top:1px solid #aaaaaa;border-right:1px solid #aaaaaa}.infobox.bordered .mergedrow td,.infobox.bordered .mergedrow th{border:0;border-right:1px solid #aaaaaa} .infobox.geography{text-align:left;border-collapse:collapse;line-height:1.2em;font-size:90%}.infobox.geography td,.infobox.geography th{border-top:solid 1px #aaaaaa;padding:0.4em 0.6em 0.4em 0.6em}.infobox.geography .mergedtoprow td,.infobox.geography .mergedtoprow th{border-top:solid 1px #aaaaaa;padding:0.4em 0.6em 0.2em 0.6em}.infobox.geography .mergedrow td,.infobox.geography .mergedrow th{border:0;padding:0 0.6em 0.2em 0.6em}.infobox.geography .mergedbottomrow td,.infobox.geography .mergedbottomrow th{border-top:0;border-bottom:solid 1px #aaaaaa;padding:0 0.6em 0.4em 0.6em}.infobox.geography .maptable td,.infobox.geography .maptable th{border:0;padding:0} .IPA{font-family:"Segoe UI","Chrysanthi Unicode","Doulos SIL","Gentium","GentiumAlt","Code2000","TITUS Cyberbit Basic","DejaVu Sans","Bitstream Cyberbit","Arial Unicode MS","Lucida Sans Unicode","Hiragino Kaku Gothic Pro","Matrix Unicode"}.Unicode{font-family:"Segoe UI","TITUS Cyberbit Basic","Code2000","Doulos SIL","Chrysanthi Unicode","Bitstream Cyberbit","Bitstream CyberBase","Thryomanes","Gentium","GentiumAlt","Visual Geez Unicode","Lucida Grande","Arial Unicode MS","Microsoft Sans Serif","Lucida Sans Unicode"}.latinx{font-family:"TITUS Cyberbit Basic","Code2000","Microsoft Sans Serif"}.polytonic,.interwiki-el a{font-family:"Athena","Gentium","Palatino Linotype","Segoe UI","Arial Unicode MS","Lucida Sans Unicode","Lucida Grande","Code2000"}.mufi{font-family:"Alphabetum","Cardo","LeedsUni","Junicode","TITUS Cyberbit Basic","ALPHA-Demo"}.interwiki-ja a{font-family:"Meiryo","MS PMincho","MS Mincho","MS PGothic","MS Gothic","Arial Unicode MS"}.interwiki-ko a{font-family:"Malgun Gothic","Gulim","Dotum","Arial Unicode MS"}.interwiki-ru a,.interwiki-uk a,.interwiki-be a,.interwiki-bg a,.interwiki-sr a,.interwiki-mk a,.interwiki-os a,.interwiki-tg a,.interwiki-mo a,.interwiki-kk a,.interwiki-ky a,.interwiki-tt a,.interwiki-ba a,.interwiki-cv a,.interwiki-mn a,.interwiki-xal a,.interwiki-udm a,.interwiki-ab a,.interwiki-av a,.interwiki-ce a{ font-family:"Times CY","Times New Roman",Times,serif}.interwiki-ar a,.interwiki-fa a,.interwiki-ur a,.interwiki-ug a{ font-family:"Arial Unicode MS","Microsoft Sans Serif","Times New Roman",Times,serif;direction:rtl}.interwiki-he a,.interwiki-yi a{ font-family:Cardo,"Arial Unicode MS",Code2000,David,"Times New Roman",Times,serif;direction:rtl}.interwiki-af a,.interwiki-als a,.interwiki-an a,.interwiki-ang a,.interwiki-ast a,.interwiki-az a,.interwiki-ba a,.interwiki-bat-smg a,.interwiki-bm a,.interwiki-br a,.interwiki-bs a,.interwiki-ca a,.interwiki-ceb a,.interwiki-co a,.interwiki-cs a,.interwiki-csb a,.interwiki-cy a,.interwiki-da a,.interwiki-de a,.interwiki-en a,.interwiki-eo a,.interwiki-es a,.interwiki-et a,.interwiki-eu a,.interwiki-ff a,.interwiki-fi a,.interwiki-fiu-vro a,.interwiki-fo a,.interwiki-fr a,.interwiki-frp a,.interwiki-fur a,.interwiki-fy a,.interwiki-ga a,.interwiki-gd a,.interwiki-gl a,.interwiki-gv a,.interwiki-ha a,.interwiki-hr a,.interwiki-ht a,.interwiki-hu a,.interwiki-ia a,.interwiki-id a,.interwiki-ie a,.interwiki-ilo a,.interwiki-io a,.interwiki-is a,.interwiki-it a,.interwiki-jbo a,.interwiki-jv a,.interwiki-kg a,.interwiki-ksh a,.interwiki-ku a,.interwiki-kw a,.interwiki-la a,.interwiki-lad a,.interwiki-lb a,.interwiki-li a,.interwiki-lij a,.interwiki-lmo a,.interwiki-ln a,.interwiki-lt a,.interwiki-lv a,.interwiki-map-bms a,.interwiki-mi a,.interwiki-ms a,.interwiki-na a,.interwiki-nap a,.interwiki-nds a,.interwiki-nl a,.interwiki-nn a,.interwiki-no a,.interwiki-nrm a,.interwiki-oc a,.interwiki-om a,.interwiki-os a,.interwiki-pam a,.interwiki-pl a,.interwiki-pms a,.interwiki-pt a,.interwiki-rm a,.interwiki-ro a,.interwiki-sc a,.interwiki-scn a,.interwiki-sco a,.interwiki-se a,.interwiki-simple a,.interwiki-sk a,.interwiki-sl a,.interwiki-so a,.interwiki-sq a,.interwiki-su a,.interwiki-sv a,.interwiki-sw a,.interwiki-tet a,.interwiki-tpi a,.interwiki-tk a,.interwiki-tl a,.interwiki-tw a,.interwiki-tr a,.interwiki-uz a,.interwiki-vec a,.interwiki-vi a,.interwiki-wa a,.interwiki-war a,.interwiki-wo a,.interwiki-yo a,.interwiki-cdo a,.interwiki-zh-min-nan a{font-family:"Times New Roman",Times,serif}#wpSave{font-weight:bold} .hiddenStructure{display:none;speak:none} .nounderlines a{text-decoration:none} #EnWpMainPage{width:100%;margin-top:1em}#EnWpMainPage h2{font-size:130%;font-weight:bold;margin:0;padding:0;border:0}#EnWpMpMargin{margin-right:13.8em}#EnWpMpCol1{float:left;clear:left;width:50%}#EnWpMpCol2{width:49.9%;float:left}#EnWpMpBrowse{background:#f8fcff url(http://upload.wikimedia.org/wikipedia/en/9/9f/MP-three-books.png) no-repeat 180% 9%;border:1px solid #c7c7c7}#EnWpMpBrowseCats li{font-size:85%;margin-left:1em;line-height:1.5}#EnWpMpBrowseCats h3{font-size:120%;margin:.2em 0 .1em -.8em;padding:0;font-weight:normal}#EnWpMpBrowseCats h3 a{font-weight:bold}#EnWpMpBook{background-image:url(http://upload.wikimedia.org/wikipedia/en/7/7e/MP-open-book.png)}#EnWpMpFeaturedPic{text-align:center;margin:0 0 .5em;font-size:85%;font-weight:bold}#EnWpMpFeaturedPic h2{font-size:145%;text-align:left}.EnWpMpBrowseRight{float:right;width:12.7em}.EnWpMpBrowseBottom{margin:1em 0}.EnWpMpBrowseBottom #EnWpMpBrowseCats li,.EnWpMpBrowseBottom #EnWpMpUsefulLinks,.EnWpMpBrowseBottom #EnWpMpFeaturedPic{float:left;width:24%;margin:0;line-height:normal}.EnWpMpBrowseBottom #EnWpMpBrowseCats h3{margin-left:0}#EnWpMpUsefulLinks{clear:left}#EnWpMpSearch{background:url(http://upload.wikimedia.org/wikipedia/en/a/ae/MP-magnifying-glass.png) no-repeat top right}#EnWpMpSearch input{vertical-align:middle}#EnWpMpSearchInner{float:right;width:20em;text-align:center}#bodySearchMP{margin:0;padding:0}#bodySearchMP .bodySearchWrap{float:right;width:17.5em;text-align:left;padding:.8em 0}#bodySearchMP label{display:block;font-size:95%;font-weight:bold;margin-bottom:-.2em}#bodySearchMP .bodySearchBtnGo{font-weight:bold;padding-left:.3em;padding-right:.3em;margin-left:.5em}.EnWpMpContentBox{border:1px solid;margin-bottom:.9em}#EnWpMpCol2 .EnWpMpContentBox{margin-left:.9em}.EnWpMpImage{float:right;margin:0 0 .2em .2em}.EnWpMpImage img{position:relative;z-index:3}#EnWpMpSisterProjects{float:left;width:49%}.EnWpMpSisterProject{float:left;width:17em;margin:0;height:5.5em;margin:0}.EnWpMpSisterImg{float:left;width:40px;height:100%}#EnWpMpOtherLangs{margin-left:50%}#EnWpMainPageNoCSS{display:none}#EnWpMpBook2{background-image:url(http://upload.wikimedia.org/wikipedia/commons/8/8e/MP-open-book2.png)}#EnWpMpSearch2{background:url(http://upload.wikimedia.org/wikipedia/en/3/3a/MP-magnifying-glass2.png) no-repeat top right} .charboxblack a:link,.charboxblack a:hover,.charboxblack a:visited,.charboxblack a:active{color:black}.charboxsilver a:link,.charboxsilver a:hover,.charboxsilver a:visited,.charboxsilver a:active{color:silver}.charboxgray a:link,.charboxgray a:hover,.charboxgray a:visited,.charboxgray a:active{color:gray}.charboxwhite a:link,.charboxwhite a:hover,.charboxwhite a:visited,.charboxwhite a:active{color:white}.charboxmaroon a:link,.charboxmaroon a:hover,.charboxmaroon a:visited,.charboxmaroon a:active{color:maroon}.charboxred a:link,.charboxred a:hover,.charboxred a:visited,.charboxred a:active{color:red}.charboxpurple a:link,.charboxpurple a:hover,.charboxpurple a:visited,.charboxpurple a:active{color:purple}.charboxfuchsia a:link,.charboxfuchsia a:hover,.charboxfuchsia a:visited,.charboxfuchsia a:active{color:fuchsia}.charboxgreen a:link,.charboxgreen a:hover,.charboxgreen a:visited,.charboxgreen a:active{color:green}.charboxlime a:link,.charboxlime a:hover,.charboxlime a:visited,.charboxlime a:active{color:lime}.charboxolive a:link,.charboxolive a:hover,.charboxolive a:visited,.charboxolive a:active{color:olive}.charboxyellow a:link,.charboxyellow a:hover,.charboxyellow a:visited,.charboxyellow a:active{color:yellow}.charboxnavy a:link,.charboxnavy a:hover,.charboxnavy a:visited,.charboxnavy a:active{color:navy}.charboxblue a:link,.charboxblue a:hover,.charboxblue a:visited,.charboxblue a:active{color:blue}.charboxteal a:link,.charboxteal a:hover,.charboxteal a:visited,.charboxteal a:active{color:teal}.charboxaqua a:link,.charboxaqua a:hover,.charboxaqua a:visited,.charboxaqua a:active{color:aqua} .allpagesredirect a:link{color:#0066ff}  .tickerDiffLink{} .tickerMiscLink{}  .tickerList ul,.tickerList ul li{list-style:none;text-indent:-2em;margin-left:2em;text-align:left}.tickerList ul ul,.tickerList ul ul li{list-style:none;text-indent:0;margin-left:1.5em;text-align:left} .tickerEntry_deleted{} .tickerEntry_replaced{} .tickerEntry_tagged{} .tickerEntry_redir{} .tickerEntry_recat{} .tickerEntry_notify{} .tickerEntry_changed{}  .tickerAction_deleted:before{content:"(×)";color:#FF0000;font-family:monospace;font-weight:bold;font-size:100%;background:pink}.tickerAction_replaced:before{content:" REPL ";color:#CC88FF;font-family:monospace;font-weight:bold;font-size:100%}.tickerAction_addedBad:before{content:" +VfD ";color:#FF8800;font-family:monospace;font-weight:bold;font-size:100%}.tickerAction_removedBad:before{content:" -VfD ";color:#00BB00;font-family:monospace;font-weight:bold;font-size:100%}.tickerAction_addedGood:before{content:" +OK ";color:#00BB00;font-family:monospace;font-weight:bold;font-size:100%}.tickerAction_removedGood:before{content:" -OK ";color:#FF8800;font-family:monospace;font-weight:bold;font-size:100%} .tickerUsage{font-size:80%} .tickerTemplateEntry{font-weight:bold} .tickerSubEntry{} .tickerMinorEntry{color:#666} .tickerMinorEntry a,.tickerMinorEntry a:link,.tickerMinorEntry a:visited{color:#669}#bodyContent .tickerMinorEntry a.extiw,#bodyContent .tickerMinorEntry a.extiw:link,#bodyContent .tickerMinorEntry a.extiw:visited{color:#669}   .toccolours{border:1px solid #aaaaaa;background-color:#f9f9f9;padding:5px;font-size:95%} #bodyContent .plainlinks a{padding:0 !important}#p-nav h5{display:none}.portlet a{text-decoration:none}.portlet a:hover{text-decoration:underline}#p-nav .pBody{padding-right:0}#p-nav a{display:block;width:100%} #editpage-specialchars a{text-decoration:none}#editpage-specialchars a:hover{text-decoration:underline}     div.thumb div a img{background-color:#f9f9f9} #file img{background:url("http://upload.wikimedia.org/wikipedia/commons/5/5d/Checker-16x16.png") repeat} #spoken{position:absolute;float:right;text-align:right;font-size:90%;right:0;z-index:1;background:none;border-bottom-style:none;top:-2.2em;display:block !important} .plainlinksneverexpand a.external.text:after{display:none !important }  div.Boxmerge,div.NavFrame{margin:0px;padding:2px;border:1px solid #aaaaaa;border-collapse:collapse;font-size:95%}div.Boxmerge div.NavFrame{border-style:none;border-style:hidden}div.NavFrame + div.NavFrame,div.NavFrame + table.collapsible,table.collapsible + div.NavFrame,table.collapsible + table.collapsible{border-top-style:none;border-top-style:hidden}div.NavPic{background-color:#ffffff;margin:0px;padding:2px;float:left}div.NavFrame div.NavHead{min-height:1.6em;font-weight:bold;font-size:100%;text-align:center;background-color:#efefef;cursor:pointer}div.NavFrame p{font-size:100%}div.NavFrame div.NavContent{font-size:100%}div.NavFrame div.NavContent p{font-size:100%}div.NavEnd{margin:0px;padding:0px;line-height:1px;clear:both}span.NavToggle{float:right;display:none; text-align:right;font-weight:normal;font-size:smaller} .geo-default,.geo-dms,.geo-dec{display:inline}.geo-nondefault,.geo-multi-punct{display:none}.longitude,.latitude{white-space:nowrap}      #catlinks{border:1px solid #aaa;background-color:#f9f9f9;padding:5px;margin-top:1em;clear:both}  table.navbox{ border:1px solid #aaa;width:100%;margin:auto;clear:both;font-size:88%;text-align:center;padding:1px}table.navbox + table.navbox{ margin-top:-1px; }.navbox-title,.navbox-abovebelow,table.navbox th{text-align:center; padding-left:1em;padding-right:1em}.navbox-group{ white-space:nowrap;text-align:right;font-weight:bold;padding-left:1em;padding-right:1em}.navbox,.navbox-subgroup{background:#fdfdfd; }.navbox-list{border-color:#fdfdfd; }.navbox-title,table.navbox th{background:#ccccff; }.navbox-abovebelow,.navbox-group,.navbox-subgroup .navbox-title{background:#ddddff; }.navbox-subgroup .navbox-group,.navbox-subgroup .navbox-abovebelow{background:#e6e6ff; }.navbox-even{background:#f7f7f7; }.navbox-odd{background:transparent; }.collapseButton{ float:right; font-weight:normal; text-align:right; width:auto}.navbox .collapseButton{ width:6em; }  .editsection{font-weight:normal !important;margin-left:1em} .noedit{padding-top:1px}.noedit .editsection{display:none} .messagebox{border:1px solid #aaa;background-color:#f9f9f9;width:80%;margin:0 auto 1em auto;padding:.2em}.messagebox.merge{border:1px solid #c0b8cc;background-color:#f0e5ff;text-align:center}.messagebox.cleanup{border:1px solid #9f9fff;background-color:#efefff;text-align:center}.messagebox.standard-talk{border:1px solid #c0c090;background-color:#f8eaba}.messagebox.nested-talk{border:1px solid #c0c090;background-color:#f8eaba;width:100%;margin:2px 4px 2px 4px}.messagebox.small{width:238px;font-size:85%;float:right;clear:both;margin:0 0 1em 1em;line-height:1.25em}.messagebox.small-talk{width:238px;font-size:85%;float:right;clear:both;margin:0 0 1em 1em;line-height:1.25em;background:#F8EABA} .template-documentation{clear:both;margin:1em 0 0 0;border:1px solid #aaa;background-color:#ecfcf4;padding:5px} #bodyContent a[href$=".pdf"].external,#bodyContent a[href*=".pdf?"].external,#bodyContent a[href*=".pdf#"].external,#bodyContent a[href$=".PDF"].external,#bodyContent a[href*=".PDF?"].external,#bodyContent a[href*=".PDF#"].external{background:url(http://upload.wikimedia.org/wikipedia/commons/2/23/Icons-mini-file_acrobat.gif) center right no-repeat;padding-right:16px}  span.PDFlink a{background:url(http://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Icons-mini-file_acrobat.gif/15px-Icons-mini-file_acrobat.gif) center right no-repeat !important;padding-right:17px !important}span.geolink a{background:url(http://upload.wikimedia.org/wikipedia/en/a/a7/Monobook-globe.png) center right no-repeat !important;padding-right:11px !important} .ILHClickButton_tip{border:1px solid #8888aa;background:#f7f8ff;padding:0.5em} span.lanLabel{color:#777777;padding-left:0.5em}tt span.minor{margin:0 -2px 0 -3px;font-size:12px}tt span.newpage{margin:0 1px 0 -6px;font-size:12px}tt span.bot{margin:0 -6px 0 1px;font-size:12px}  div.user-block{padding:5px;border:1px solid #A9A9A9;background-color:#FFEFD5} @media screen,handheld,projection{cite *.printonly{display:none}}   .mcBoto{background-color:#d0b0ff; border:0.15em solid #000000;border-color:#f0d0ff #b090e0 #9070c0 #f0d0ff; border-radius-topleft:.5em;border-radius-topright:.5em;-moz-border-radius:.5em .5em 0em 0em;cursor:pointer;display:inline;margin-right:0.1em;padding:0.2em 0.3em 0.2em 0.3em;position:relative}.mcBoto a,.mcBoto strong{background:none !important;color:#7050a0 !important; font-size:90%;font-weight:bold;padding:0 !important;text-decoration:none !important}.mcBoto a:hover,.mcBoto strong:hover{color:black !important;text-decoration:underline !important}.mcBotoSel{background-color:#9070c0; border:0.15em solid #000000;border-color:#b090e0 #7050a0 #9070c0 #b090e0; border-radius-topleft:.5em;border-radius-topright:.5em;-moz-border-radius:.5em .5em 0em 0em;cursor:default;display:inline;margin-right:0.1em;padding:0.2em 0.3em 0.2em 0.3em;position:relative;color:white}.mcBotoSel a{background:none !important;color:white !important;cursor:default;font-size:90%;font-weight:bold;padding:0 !important;text-decoration:none !important}.mcContingut{background-color:#f8f8ff;border:0.2em solid #9070c0; border-color:#9070c0 #7050a0 #7050a0 #9070c0 ; -moz-border-radius:0em .5em .5em 0em;border-radius-topright:.5em;border-radius-bottomright:.5em;padding:1em;position:static}.mcPestanya{background-color:#f8f8ff;border-color:#7050a0 #b090e0 #b090e0 #7050a0; width:100%} .mcVerd .mcBoto{background-color:#a5e085; border-color:#c0f090 #90d060 #75c045 #c0f090}.mcVerd .mcBoto a,.mcVerd .mcBoto strong{color:#60b030 !important; font-size:90%}.mcVerd .mcBoto a:hover,.mcVerd .mcBoto strong:hover{color:black !important;text-decoration:underline}.mcVerd .mcBotoSel{background-color:#75c045; border-color:#90d060 #60b030 #75c045 #90d060}.mcVerd .mcContingut{background-color:#f5fffa;border-color:#75c045 #60b030 #60b030 #75c045 }.mcVerd .mcPestanya{background-color:#f5fffa;border-color:#60b030 #90d060 #90d060 #60b030} .mcVermell .mcBoto{background-color:#FFAAAA; border-color:#FFCCCC #FF8888 #FF0000 #FFCCCC}.mcVermell .mcBoto a,.mcVermell .mcBoto strong{color:#CC0000 !important; font-size:90%}.mcVermell .mcBoto a:hover .mcVermell .mcBoto strong:hover{color:black !important;text-decoration:underline}.mcVermell .mcBotoSel{background-color:#FF0000; border-color:#FF8888 #CC0000 #FF0000 #FF8888}.mcVermell .mcContingut{background-color:#fffafa;border-color:#FF0000 #CC0000 #CC0000 #FF0000}.mcVermell .mcPestanya{background-color:#fffafa;border-color:#CC0000 #FF0000 #FF0000 #CC0000} .mcBlau .mcBoto{background-color:#a7c1e6; border-color:#c8d6e9 #88abde #5b8dd6 #c8d6e9}.mcBlau .mcBoto a,.mcBlau .mcBoto strong{color:#3379de !important; font-size:90%}.mcBlau .mcBoto a:hover .mcBlau .mcBoto strong:hover{color:black !important;text-decoration:underline}.mcBlau .mcBotoSel{background-color:#5b8dd6; border-color:#88abde #3379de #5b8dd6 #88abde}.mcBlau .mcContingut{background-color:#f0f8ff;border-color:#5b8dd6 #3379de #3379de #5b8dd6}.mcBlau .mcPestanya{background-color:#f0f8ff;border-color:#3379de #88abde #88abde #3379de} .mcGroc .mcBoto{background-color:#fff1a4; border-color:#fef4bc #ffe977 #ffe147 #fef4bc}.mcGroc .mcBoto a,.mcGroc .mcBoto strong{color:#ffd813 !important; font-size:90%}.mcGroc .mcBoto a:hover .mcGroc .mcBoto strong:hover{color:black !important;text-decoration:underline}.mcGroc .mcBotoSel{background-color:#ffe147; border-color:#ffe977 #ffd813 #ffe147 #ffe977}.mcGroc .mcContingut{background-color:#fffce8;border-color:#ffe147 #ffd813 #ffd813 #ffe147}.mcGroc .mcPestanya{background-color:#fffce8;border-color:#ffd813 #88abde #88abde #ffd813} .mcTaronja .mcBoto{background-color:#ffbd7f; border-color:#ffd0a4 #ffac5d #ff9d42 #ffd0a4}.mcTaronja .mcBoto a,.mcTaronja .mcBoto strong{color:#ff820e !important; font-size:90%}.mcTaronja .mcBoto a:hover .mcTaronja .mcBoto strong:hover{color:black !important;text-decoration:underline}.mcTaronja .mcBotoSel{background-color:#ff9d42; border-color:#ffac5d #ff820e #ff9d42 #ffac5d}.mcTaronja .mcContingut{background-color:#ffeedd; border-color:#ff9d42 #ff820e #ff820e #ff9d42}.mcTaronja .mcPestanya{background-color:#ffeedd; border-color:#ff820e #ffac5d #ffac5d #ff820e}   strong.mw-plusminus-neg{color:#c00}.mw-plusminus-pos{color:#060}.mw-plusminus-neg{color:#900} .topicon{margin-right:0 !important}  th.mbox-text,td.mbox-text{ border:none;padding:0.25em 0.9em; width:100%; }td.mbox-image{ border:none;padding:2px 0 2px 0.9em; text-align:center}td.mbox-imageright{ border:none;padding:2px 0.9em 2px 0; text-align:center}td.mbox-empty-cell{ border:none;padding:0px;width:1px} table.ambox{margin:0px 10%; border:1px solid #aaa;border-left:10px solid #1e90ff; background:#fbfbfb}table.ambox + table.ambox{ margin-top:-1px}.ambox th.mbox-text,.ambox td.mbox-text{ padding:0.25em 0.5em; }.ambox td.mbox-image{ padding:2px 0 2px 0.5em; }.ambox td.mbox-imageright{ padding:2px 0.5em 2px 0; }table.ambox-notice{border-left:10px solid #1e90ff; }table.ambox-speedy{border-left:10px solid #FF0000; }table.ambox-delete{border-left:10px solid #b22222; }table.ambox-content{border-left:10px solid #f28500; }table.ambox-style{border-left:10px solid #f4c430; }table.ambox-move{border-left:10px solid #9932cc; }table.ambox-protection{border-left:10px solid #bba; } table.imbox{margin:4px 10%;border-collapse:collapse;border:3px solid #1e90ff; background:#fbfbfb}.imbox .mbox-text .imbox{ margin:0 -0.5em; }.mbox-inside .imbox{ margin:4px}table.imbox-notice{border:3px solid #1e90ff; }table.imbox-speedy{border:3px solid #b22222; background:#fee; }table.imbox-delete{border:3px solid #b22222; }table.imbox-content{border:3px solid #f28500; }table.imbox-style{border:3px solid #f4c430; }table.imbox-move{border:3px solid #9932cc; }table.imbox-protection{border:3px solid #bba; }table.imbox-license{border:3px solid #88a; background:#f7f8ff; }table.imbox-featured{border:3px solid #cba135; } table.cmbox{margin:3px 10%;border-collapse:collapse;border:1px solid #aaa;background:#DFE8FF; }table.cmbox-notice{background:#D8E8FF; }table.cmbox-speedy{margin-top:4px;margin-bottom:4px;border:4px solid #b22222; background:#FFDBDB; }table.cmbox-delete{background:#FFDBDB; }table.cmbox-content{background:#FFE7CE; }table.cmbox-style{background:#FFF9DB; }table.cmbox-move{background:#E4D8FF; }table.cmbox-protection{background:#EFEFE1; } table.ombox{margin:4px 10%;border-collapse:collapse;border:1px solid #aaa; background:#f9f9f9}table.ombox-notice{border:1px solid #aaa; }table.ombox-speedy{border:2px solid #b22222; background:#fee; }table.ombox-delete{border:2px solid #b22222; }table.ombox-content{border:1px solid #f28500; }table.ombox-style{border:1px solid #f4c430; }table.ombox-move{border:1px solid #9932cc; }table.ombox-protection{border:2px solid #bba; } table.tmbox{margin:4px 10%;border-collapse:collapse;border:1px solid #c0c090; background:#f8eaba}.mediawiki .mbox-inside .tmbox{ margin:2px 0; width:100%;  }.mbox-inside .tmbox.mbox-small{ line-height:1.5em; font-size:100%; }table.tmbox-speedy{border:2px solid #b22222; background:#fee; }table.tmbox-delete{border:2px solid #b22222; }table.tmbox-content{border:2px solid #f28500; }table.tmbox-style{border:2px solid #f4c430; }table.tmbox-move{border:2px solid #9932cc; }table.tmbox-protection,table.tmbox-notice{border:1px solid #c0c090; } table.dmbox{clear:both;margin:0.9em 1em;border-top:1px solid #ccc;border-bottom:1px solid #ccc;background:transparent;font-size:small} table.fmbox{clear:both;margin:0.2em 0;width:100%;border:1px solid #aaa;background:#f9f9f9; }table.fmbox-system{background:#f9f9f9}table.fmbox-warning{border:1px solid #bb7070; background:#ffdbdb; }table.fmbox-editnotice{background:transparent} div.mw-warning-with-logexcerpt,div.mw-lag-warn-high,div.mw-cascadeprotectedwarning,div#mw-protect-cascadeon{clear:both;margin:0.2em 0;border:1px solid #bb7070;background:#ffdbdb;padding:0.25em 0.9em} div.mw-lag-warn-normal,div.noarticletext,div.fmbox-system{clear:both;margin:0.2em 0;border:1px solid #aaa;background:#f9f9f9;padding:0.25em 0.9em} body.mediawiki table.mbox-small{ clear:right;float:right;margin:4px 0 4px 1em;width:238px;font-size:88%;line-height:1.25em}body.mediawiki table.mbox-small-left{ margin:4px 1em 4px 0;width:238px;border-collapse:collapse;font-size:88%;line-height:1.25em}#siteNotice div{margin:0}#mw-dismissable-notice{background:transparent}#wpSummary,#wpSummaryLabel{margin-bottom:0} .nonumtoc .tocnumber{display:none}.nonumtoc #toc ul,.nonumtoc .toc ul{line-height:1.5em;list-style:none;margin:.3em 0 0;padding:0}.nonumtoc #toc ul ul,.nonumtoc .toc ul ul{margin:0 0 0 2em} .toclimit-2 .toclevel-2,.toclimit-3 .toclevel-3,.toclimit-4 .toclevel-4,.toclimit-5 .toclevel-5,.toclimit-6 .toclevel-6,.toclimit-7 .toclevel-7{display:none} .copyvio-title{font-family:Microsoft Yahei,微软雅黑,Microsoft Jhenghei,微軟正黑體,Arial Unicode MS,黑体;text-align:center;font-size:150%;font-weight:bold}.copyvio-titlebox{border-bottom:2px solid #003153;color:white;background:#999999;padding:0.5em;height:3em;-moz-border-radius:5px 5px 0 0}.copyvio-box{width:95%;border:3px solid #003153;background:white;margin:.5em auto;font-size:90%;-o-border-radius:8px;-icab-border-radius:8px;-khtml-border-radius:8px;-moz-border-radius:8px;-webkit-border-radius:8px;-o-box-shadow:10px 10px 5px #888;-icab-box-shadow:10px 10px 5px #888;-khtml-box-shadow:10px 10px 5px #888;-moz-box-shadow:10px 10px 5px #888;-webkit-box-shadow:10px 10px 5px #888;box-shadow:10px 10px 5px #888} .dablink > div{padding-left:32px;background:url(http://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Disambig_gray.svg/26px-Disambig_gray.svg.png) no-repeat} div.title-bar-vigar{width:100%;max-width:100%;height:31px;overflow:hidden;background:url(http://upload.wikimedia.org/wikipedia/commons/b/ba/Vigar-zh-wikipedia-2010-new-design-short.png) repeat-x} cite{font-style:normal} .template-kai{font-family:楷体,楷体_GB2312,KaiTi,KaiTi_GB2312,华文楷体,STKaiti,'AR PL UKai CN',標楷體,DFKai-SB,'AR PL UKai HK','AR PL UKai TW',全字庫正楷體,TW-Kai,EUDCKAI}.template-kai:lang(zh-hant),.template-kai:lang(zh-hk),.template-kai:lang(zh-mo),.template-kai:lang(zh-tw){font-family:標楷體,DFKai-SB,'AR PL UKai HK','AR PL UKai TW',全字庫正楷體,TW-Kai,楷体,楷体_GB2312,KaiTi,KaiTi_GB2312,华文楷体,STKaiti,'AR PL UKai CN',EUDCKAI}.template-sep{display:inline-block;overflow:hidden;width:0px;max-width:0px;margin:0 0.2em} h1,h2,h3,h4,h5,h6{overflow:hidden}#p-logo a:lang(zh-hans),#p-logo a:lang(zh-cn),#p-logo a:lang(zh-my),#p-logo a:lang(zh-sg){background-image:url(http://upload.wikimedia.org/wikipedia/zh/6/62/Wiki_zh-hans.png) !important} div.mw-geshi div,div.mw-geshi div pre,span.mw-geshi,pre.source-css,pre.source-javascript{font-family:monospace,"Courier New" !important}   #mw-panel div.portal div.body ul li.GA{background:url("http://upload.wikimedia.org/wikipedia/commons/4/42/Monobook-bullet-ga.png") no-repeat 0% 0%;margin-left:-10px;padding-left:10px} #mw-panel div.portal div.body ul li.FA{background:url("http://upload.wikimedia.org/wikipedia/commons/d/d4/Monobook-bullet-star.png") no-repeat 0% 0%;margin-left:-10px;padding-left:10px} #bodyContent{font-size:92%} body.ns-0 #siteSub,body.ns-1 #siteSub{display:inline;font-size:92%;font-weight:normal} div#content,div#p-cactions li a:hover,div#p-cactions li.selected a,div#content div.thumb{ background-color:#F8FCFF; }div#p-cactions li a{background-color:#F7F9FB; }.ns-0 div#content,.ns-0 div#p-cactions li a:hover,.ns-0 div#p-cactions li.selected a,.ns-0 div#content div.thumb{background-color:white; }.ns-0 div#p-cactions li a{background-color:#FBFBFB; }@media print{div#content{background:white} }div.vectorTabs li.selected{ background-image:url(data:image/png;base64,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)}.ns-0 div.vectorTabs li.selected{background-image:url(http://zh.wikipedia.org/skins-1.5/vector/images/tab-current-fade.png)} #mw-subcategories table,#mw-pages table,table.diff,td.diff-otitle,td.diff-ntitle{background-color:transparent}   #siteNotice div{margin:0}#siteNotice div.expanded table.siteNoticeUser{margin-bottom:1em}  .vectorMenu .menu{z-index:2}@media print{  .ns-0 .ambox,.ns-0 .navbox,.ns-0 .infobox.sisterproject,.ns-0 .dablink,.ns-0 .metadata,#privacy,#about,#disclaimer,.editlink,span.collapseButton,a.NavToggle,.noprint{display:none} #content cite a.external.text:after,.nourlexpansion a.external.text:after,.nourlexpansion a.external.autonumber:after{display:none !important} table.collapsible tr,div.NavPic,div.NavContent{display:block !important}table.collapsible tr{display:table-row !important} .skin-simple div#column-one,.skin-simple div#f-poweredbyico,.skin-simple div#f-copyrightico,.skin-simple .editsection{display:none}  @import "/w/index.php?title=MediaWiki:Gadget-fontsize.css&action=raw&ctype=text/css"; @import "/wikipedia/zh/w/index.php?title=MediaWiki:Gadget-fontsize.css&action=raw&ctype=text/css"; .NavToggle{display:none !important}}@media handheld{   span.collapseButton,a.NavToggle,.nohandheld{display:none} table.collapsible tr,div.NavPic,div.NavContent{display:block !important}table.collapsible tr{display:table-row !important}}

/* cache key: zhwiki:resourceloader:filter:minify-css:5:0908c775fd478f72a4acb7ceefcbeb63 */
				@media print{  a.stub,a.new{color:#ba0000;text-decoration:none}#toc{border:1px solid #aaaaaa;background-color:#f9f9f9;padding:5px}.tocindent{margin-left:2em}.tocline{margin-bottom:0px} div.floatright{float:right;clear:right;position:relative;margin:0.5em 0 0.8em 1.4em}div.floatright p{font-style:italic}div.floatleft{float:left;clear:left;position:relative;margin:0.5em 1.4em 0.8em 0}div.floatleft p{font-style:italic}div.center{text-align:center} div.thumb{border:none;width:auto;margin-top:0.5em;margin-bottom:0.8em;background-color:transparent}div.thumbinner{border:1px solid #cccccc;padding:3px !important;background-color:White;font-size:94%;text-align:center;overflow:hidden}html .thumbimage{border:1px solid #cccccc}html .thumbcaption{border:none;text-align:left;line-height:1.4em;padding:3px !important;font-size:94%}div.magnify{display:none}div.tright{float:right;clear:right;margin:0.5em 0 0.8em 1.4em}div.tleft{float:left;clear:left;margin:0.5em 1.4em 0.8em 0}img.thumbborder{border:1px solid #dddddd} table.rimage{float:right;width:1pt;position:relative;margin-left:1em;margin-bottom:1em;text-align:center}body{background:White; color:Black;margin:0;padding:0}.noprint,div#jump-to-nav,div.top,div#column-one,#colophon,.editsection,.toctoggle,.tochidden,div#f-poweredbyico,div#f-copyrightico,li#viewcount,li#about,li#disclaimer,li#privacy,#footer-places,#mw-hidden-catlinks{ display:none}ul{list-style-type:square}#content{background:none;border:none ! important;padding:0 ! important;margin:0 ! important}#footer{background :white;color :black;border-top:1px solid black}h1,h2,h3,h4,h5,h6{font-weight:bold}p,.documentDescription{margin:1em 0 ! important;line-height:1.2em}.tocindent p{margin:0 0 0 0 ! important}pre{border:1pt dashed black;white-space:pre;font-size:8pt;overflow:auto;padding:1em 0;background:white;color:black}table.listing,table.listing td{border:1pt solid black;border-collapse:collapse}a{color:Black !important;background:none !important;padding:0 !important}a:link,a:visited{color:#520;background:transparent;text-decoration:underline}#content a.external.text:after,#content a.external.autonumber:after{ content:" (" attr(href) ") "}#globalWrapper{width:100% !important;min-width:0 !important}#content{background:white;color:black}#column-content{margin:0 !important}#column-content #content{padding:1em;margin:0 !important} a,a.external,a.new,a.stub{color:black ! important;text-decoration:none ! important} a,a.external,a.new,a.stub{color:inherit ! important;text-decoration:inherit ! important}img{border:none;vertical-align:middle} span.texhtml{font-family:serif}#siteNotice{display:none} li.gallerybox{vertical-align:top;background-color:#f9f9f9;border:solid 2px white;display:-moz-inline-box;display:inline-block}ul.gallery,li.gallerybox{zoom:1;*display:inline}ul.gallery{margin:2px;padding:2px;display:block}li.gallerycaption{font-weight:bold;text-align:center;display:block;word-wrap:break-word}li.gallerybox div.thumb{text-align:center;border:1px solid #ccc;margin:2px}div.gallerytext{overflow:hidden;font-size:94%;padding:2px 4px;word-wrap:break-word} table.diff{background:white}td.diff-otitle{background:#ffffff}td.diff-ntitle{background:#ffffff}td.diff-addedline{background:#ccffcc;font-size:smaller;border:solid 2px black}td.diff-deletedline{background:#ffffaa;font-size:smaller;border:dotted 2px black}td.diff-context{background:#eeeeee;font-size:smaller}.diffchange{color:silver;font-weight:bold;text-decoration:underline} table.wikitable{margin:1em 1em 1em 0;border:1px #aaa solid;background:white;border-collapse:collapse}.wikitable th,.wikitable td{border:1px #aaa solid;padding:0.2em}.wikitable th{text-align:center;background:white;font-weight:bold}.wikitable caption{font-weight:bold}a.sortheader{margin:0px 0.3em} .wikitable,.thumb,img{page-break-inside:avoid}h2,h3,h4,h5,h6,h7{page-break-after:avoid}p{widows:3;orphans:3}}@media screen{  .mw-plusminus-pos{color:#006400} .mw-plusminus-neg{color:#8b0000} .mw-plusminus-null{color:#aaa}  .allpagesredirect,.redirect-in-category,.watchlistredir{font-style:italic} span.comment{font-style:italic}span.changedby{font-size:95%} .texvc{direction:ltr;unicode-bidi:embed}img.tex{vertical-align:middle}span.texhtml{font-family:serif}  #wikiPreview.ontop{margin-bottom:1em} #editform,#toolbar,#wpTextbox1{clear:both}div#mw-js-message{margin:1em 5%;padding:0.5em 2.5%;border:solid 1px #ddd;background-color:#fcfcfc} .editsection{float:right;margin-left:5px} h2#filehistory{clear:both}table.filehistory th,table.filehistory td{vertical-align:top}table.filehistory th{text-align:left}table.filehistory td.mw-imagepage-filesize,table.filehistory th.mw-imagepage-filesize{white-space:nowrap}table.filehistory td.filehistory-selected{font-weight:bold} li span.deleted,span.history-deleted{text-decoration:line-through;color:#888;font-style:italic} .not-patrolled{background-color:#ffa}.unpatrolled{font-weight:bold;color:red}div.patrollink{font-size:75%;text-align:right} td.mw-label{text-align:right}td.mw-input{text-align:left}td.mw-submit{text-align:left}td.mw-label{vertical-align:top}.prefsection td.mw-label{width:20%}.prefsection table{width:100%}td.mw-submit{white-space:nowrap}table.mw-htmlform-nolabel td.mw-label{width:0 !important}tr.mw-htmlform-vertical-label td.mw-label{text-align:left !important}input#wpSummary{width:80%} .thumbcaption{text-align:left}.magnify{float:right} .mw-hidden-cats-hidden{display:none}.catlinks-allhidden{display:none} p.mw-ipb-conveniencelinks,p.mw-protect-editreasons,p.mw-filedelete-editreasons,p.mw-delete-editreasons,p.mw-revdel-editreasons{font-size:90%;float:right} .searchresults{}.searchresults p{margin-left:0.4em;margin-top:1em;margin-bottom:1.2em}div.searchresult{font-size:95%;width:38em}.mw-search-results{margin-left:0.4em}.mw-search-results li{padding-bottom:1em;list-style:none;list-style-image:none}.mw-search-results li a{font-size:108%}.mw-search-result-data{color:green;font-size:97%}.mw-search-formheader{background-color:#f3f3f3;margin-top:1em;border:1px solid silver}.mw-search-formheader div.search-types{float:left;padding-left:0.25em}.mw-search-formheader div.search-types ul{margin:0 !important;padding:0 !important;list-style:none !important}.mw-search-formheader div.search-types ul li{float:left;margin:0;padding:0}.mw-search-formheader div.search-types ul li a{display:block;padding:0.5em}.mw-search-formheader div.search-types ul li.current a{color:#333333;cursor:default}.mw-search-formheader div.search-types ul li.current a:hover{text-decoration:none}.mw-search-formheader div.results-info{float:right;padding:0.5em;padding-right:0.75em}.mw-search-formheader div.results-info ul{margin:0 !important;padding:0 !important;list-style:none !important}.mw-search-formheader div.results-info ul li{float:right;margin:0;padding:0}fieldset#mw-searchoptions{margin:0;padding-left:0.75em !important;padding-right:0.75em !important;padding-bottom:0.5em !important;padding-top:0.5em !important;border:none;background-color:#f9f9f9;border:1px solid silver !important;border-top-width:0 !important}fieldset#mw-searchoptions legend{display:none}fieldset#mw-searchoptions h4{padding:0;margin:0;float:left}fieldset#mw-searchoptions div#mw-search-togglebox{float:right}fieldset#mw-searchoptions div#mw-search-togglebox label{margin-right:0.25em}fieldset#mw-searchoptions div#mw-search-togglebox input{margin-left:0.25em}fieldset#mw-searchoptions table{float:left;margin-right:3em}fieldset#mw-searchoptions table td{padding-right:1em}fieldset#mw-searchoptions div.divider{clear:both;border-bottom:1px solid #DDDDDD;padding-top:0.5em;margin-bottom:0.5em}td#mw-search-menu{padding-left:6em;font-size:85%}div#mw-search-interwiki{float:right;width:18em;border-style:solid;border-color:#AAAAAA;border-width:1px;margin-top:2ex}div#mw-search-interwiki li{font-size:95%}.mw-search-interwiki-more{float:right;font-size:90%}div#mw-search-interwiki-caption{text-align:center;font-weight:bold;font-size:95%}.mw-search-interwiki-project{font-size:97%;text-align:left;padding-left:0.2em;padding-right:0.15em;padding-bottom:0.2em;padding-top:0.15em;background-color:#ececec;border-top:1px solid #BBBBBB}span.searchalttitle{font-size:95%}div.searchdidyoumean{font-size:127%;margin-top:0.8em; color:#c00}div.searchdidyoumean em{font-weight:bold}.searchmatch{font-weight:bold} td#mw-search-togglebox{text-align:right}table#mw-search-powertable{width:100%}form#powersearch{clear:both} .mw-userrights-disabled{color:#888}table.mw-userrights-groups * td,table.mw-userrights-groups * th{padding-right:1.5em} .os-suggest{overflow:auto;overflow-x:hidden;position:absolute;top:0px;left:0px;width:0px;background-color:white;background-color:Window;border-style:solid;border-color:#AAAAAA;border-width:1px;z-index:99;font-size:95%}table.os-suggest-results{font-size:95%;cursor:pointer;border:0;border-collapse:collapse;width:100%}.os-suggest-result,.os-suggest-result-hl{white-space:nowrap;background-color:white;background-color:Window;color:black;color:WindowText;padding:2px}.os-suggest-result-hl,.os-suggest-result-hl-webkit{background-color:#4C59A6;color:white}.os-suggest-result-hl{ background-color:Highlight;color:HighlightText}.os-suggest-toggle{position:relative;left:1ex;font-size:65%}.os-suggest-toggle-def{position:absolute;top:0px;left:0px;font-size:65%;visibility:hidden}  .autocomment{color:gray}#pagehistory .history-user{margin-left:0.4em;margin-right:0.2em}#pagehistory span.minor{font-weight:bold}#pagehistory li{border:1px solid white}#pagehistory li.selected{background-color:#f9f9f9;border:1px dashed #aaa} .newpage,.minor,.bot{font-weight:bold} .mw-uctop{font-weight:bold} table.mw-listgrouprights-table tr{vertical-align:top}.listgrouprights-revoked{text-decoration:line-through} td.mw-statistics-numbers{text-align:right} h4.mw-specialpagesgroup{background-color:#dcdcdc;padding:2px;margin:.3em 0em 0em 0em}.mw-specialpagerestricted{font-weight:bold}#shared-image-dup,#shared-image-conflict{font-style:italic} table.mw-emailuser-table{width:98%}td#mw-emailuser-sender,td#mw-emailuser-recipient{font-weight:bold} table.mw-allpages-table-form,table.mw-allpages-table-chunk{width:100%}td.mw-allpages-alphaindexline{text-align:right}td.mw-allpages-nav,p.mw-allpages-nav{text-align:right;font-size:smaller;margin-bottom:1em}table.mw-allpages-table-form tr{vertical-align:top} table#mw-prefixindex-list-table,table#mw-prefixindex-nav-table{width:98%}td#mw-prefixindex-nav-form{font-size:smaller;margin-bottom:1em;text-align:right;vertical-align:top} div.mw-warning-with-logexcerpt{padding:3px;margin-bottom:3px;border:2px solid #2F6FAB;clear:both}div.mw-warning-with-logexcerpt ul li{font-size:90%} span.mw-revdelundel-link,strong.mw-revdelundel-link{font-size:90%}span.mw-revdelundel-hidden,input.mw-revdelundel-hidden{visibility:hidden}td.mw-revdel-checkbox,th.mw-revdel-checkbox{padding-right:10px;text-align:center} a.feedlink{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH2AkOCjkSL9xYhAAAAc9JREFUKJE90LFrU1EYQPHzffe+l/iSVkXTmNiANBU7iE5OLrbSVYKIiy5dnARB3FwEB5dOOhQKuthJEEHRsUXBoosO0lKKEYRa29LWQk3S5L53r0PVv+D8OPJlolrrr1ZmI7F1BFEjqBXECGJAjSBCaLddc7u5Mmb7q5U5007rWh5E9rYR/xsTBBXBWMVEglqRpGiGhcE5G6kdyugxcGsGyRdJ15ZwC29IF55jNEWt8K+aFOMhc+dC7Z6SITjC7ga2MkI8cpH41Dhh7RPa20Gt4toZac+IqhFMTpG0hVt8RetJg967SaTvGLnGNKZ0EtfOcB1P5jyqVjCRkIzfpnjtMYXrT2FrCff6JqhFRx/gnCXtZHgXUFHQSGg/u4Gbf4T2lYkvTaFGce8fIgePY09fwXU8Pg3sk2JFu5v4lQ+4FxPge+j5u3Q+v8TvrBKfbZB1PT4LqJh9Uv7yFLmrM2i+gPs4jRyqIaUz7C2+xZZOEA4cJaSgaAhqhbC1DK0N3K9NusvzAHB4GLf+HQBJBsiCD7J6/9zXI2VbVyv/b6Sdv1e6nrTryboB7wVbyjXt1rcfo0Frs4UkqvtUJHMBjyVEAcSjFiQJwRvf3F3/OfYH/dDFWrCooaIAAAAASUVORK5CYII=) center left no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/common/images/feed-icon.png?2011-02-12T21:25:00Z) center left no-repeat!ie;padding-left:16px} .plainlinks a{background:none !important;padding:0 !important} table.wikitable{margin:1em 1em 1em 0;background:#f9f9f9;border:1px #aaa solid;border-collapse:collapse;color:black}.wikitable th,.wikitable td{border:1px #aaa solid;padding:0.2em}.wikitable th{background:#f2f2f2;text-align:center}.wikitable caption{font-weight:bold} table.collapsed tr.collapsable{display:none} .success{color:green;font-size:larger}.error{color:red;font-size:larger}.errorbox,.successbox{font-size:larger;border:2px solid;padding:.5em 1em;float:left;margin-bottom:2em;color:#000}.errorbox{border-color:red;background-color:#fff2f2}.successbox{border-color:green;background-color:#dfd}.errorbox h2,.successbox h2{font-size:1em;font-weight:bold;display:inline;margin:0 .5em 0 0;border:none} .previewnote{color:#c00;margin-bottom:1em}.previewnote p{text-indent:3em;margin:0.8em 0}.visualClear{clear:both}#mw_trackbacks{border:solid 1px #bbbbff;background-color:#eeeeff;padding:0.2em} .TablePager{min-width:80%;border-collapse:collapse}.TablePager_nav a{text-decoration:none}.TablePager,.TablePager td,.TablePager th{border:1px solid #aaaaaa;padding:0 0.15em 0 0.15em}.TablePager th{background-color:#eeeeff}.TablePager td{background-color:#ffffff}.TablePager tr:hover td{background-color:#eeeeff}.imagelist td,.imagelist th{white-space:nowrap}.imagelist .TablePager_col_links{background-color:#eeeeff}.imagelist .TablePager_col_img_description{white-space:normal}.imagelist th.TablePager_sort{background-color:#ccccff} #mw-allmessagestable .allmessages-customised td.am_default{background-color:#fcffc4}#mw-allmessagestable tr.allmessages-customised:hover td.am_default{background-color:#faff90}#mw-allmessagestable td.am_actual{background-color:#e2ffe2}#mw-allmessagestable tr.allmessages-customised:hover + tr.allmessages-customised td.am_actual{background-color:#b1ffb1} ul#filetoc{text-align:center;border:1px solid #aaaaaa;background-color:#f9f9f9;padding:5px;font-size:95%;margin-bottom:0.5em;margin-left:0;margin-right:0}#filetoc li{display:inline;list-style-type:none;padding-right:2em} table.mw_metadata{font-size:0.8em;margin-left:0.5em;margin-bottom:0.5em;width:300px}table.mw_metadata caption{font-weight:bold}table.mw_metadata th{font-weight:normal}table.mw_metadata td{padding:0.1em}table.mw_metadata{border:none;border-collapse:collapse}table.mw_metadata td,table.mw_metadata th{text-align:center;border:1px solid #aaaaaa;padding-left:0.1em;padding-right:0.1em}table.mw_metadata th{background-color:#f9f9f9}table.mw_metadata td{background-color:#fcfcfc}   li.gallerybox{vertical-align:top;background-color:#f9f9f9;border:solid 2px white;display:-moz-inline-box}ul.gallery,li.gallerybox{display:inline-block;zoom:1;*display:inline}ul.gallery{margin:2px;padding:2px;display:block}li.gallerycaption{font-weight:bold;text-align:center;display:block;word-wrap:break-word}li.gallerybox div.thumb{text-align:center;border:1px solid #ccc;margin:2px}li.gallerybox div.thumb img{display:block;margin:0 auto}div.gallerytext{overflow:hidden;font-size:94%;padding:2px 4px;word-wrap:break-word}table.mw-enhanced-rc{border:0;border-spacing:0}td.mw-enhanced-rc{white-space:nowrap;padding:0;vertical-align:top;font-family:monospace }#mw-addcategory-prompt{display:inline;margin-left:1em}#mw-addcategory-prompt input{margin-left:0.5em;margin-right:0.5em}.mw-remove-category{padding:8px;background-image:url(data:image/png;base64,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);background-image:url(http://bits.wikimedia.org/skins-1.17/common/images/remove.png?2011-02-12T21:25:00Z)!ie;background-position:center center;background-repeat:no-repeat}.mw-ajax-addcategory{padding-left:20px;background-image:url(data:image/png;base64,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);background-image:url(http://bits.wikimedia.org/skins-1.17/common/images/add.png?2011-02-12T21:25:00Z)!ie;background-position:left center;background-repeat:no-repeat}.mw-ajax-loader{background-image:url(data:image/gif;base64,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);background-image:url(http://bits.wikimedia.org/skins-1.17/common/images/ajax-loader.gif?2011-02-12T21:25:00Z)!ie;background-position:center center;background-repeat:no-repeat;padding:16px;position:relative;top:-16px}.mw-small-spinner{padding:10px !important;margin-right:0.6em;background-image:url(data:image/gif;base64,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);background-image:url(http://bits.wikimedia.org/skins-1.17/common/images/spinner.gif?2011-02-12T21:25:00Z)!ie;background-position:center center;background-repeat:no-repeat} a.sortheader{margin:0 0.3em} ol:lang(bcc) li,ol:lang(bqi) li,ol:lang(fa) li,ol:lang(glk) li,ol:lang(kk-arab) li,ol:lang(mzn) li{list-style-type:-moz-persian;list-style-type:persian}ol:lang(ckb) li{list-style-type:-moz-arabic-indic;list-style-type:arabic-indic}ol:lang(bn) li{list-style-type:-moz-bengali;list-style-type:bengali}ol:lang(or) li{list-style-type:-moz-oriya;list-style-type:oriya} .mw-help-field-hint{display:none;padding:0px;padding-left:15px;margin-left:2px;margin-bottom:-8px;background-image:url(data:image/gif;base64,R0lGODlhCwALALMAAP///01NTZOTk1lZWefn57i4uJSUlPPz82VlZdDQ0HFxcaysrNvb28TExAAAAAAAACH5BAAAAAAALAAAAAALAAsAAAQrUIRJqQQ455nNNBgHJANBDAwgZsVwqIG2IEQYYwXy2lq/Kg3NqqeSVCqCCAA7);background-image:url(http://bits.wikimedia.org/skins-1.17/common/images/help-question.gif?2011-02-12T21:25:00Z)!ie;background-position:left center;background-repeat:no-repeat;color:#0645ad;text-decoration:underline;cursor:pointer;font-size:.8em}.mw-help-field-hint:hover{background-image:url(data:image/gif;base64,R0lGODlhCwALALMAAAtop+7z+GCWwpW51oStz8rb6yZzrafF3bnR5Nzn8QBcoD91oABQmf///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE5NkQ0QUQzRjI0NzRCNUQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJBN0FFQTQwQjlGQzExREY5RDlBQTRBODQyMkJCMkFDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJBN0FFQTNGQjlGQzExREY5RDlBQTRBODQyMkJCMkFDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkM3RjExNzQwNzIwNjgxMTk1RkVBQ0ZBOEQxNTU5MkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMTk2RDRBRDNGMjQ3NEI1RDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAACwALAAAEK3CxSalsOOeZxRQY1yBKkihFI2aDEqiMRgBJGGMD8NpavxoHzaqnklQqiwgAOw==);background-image:url(http://bits.wikimedia.org/skins-1.17/common/images/help-question-hover.gif?2011-02-12T21:25:00Z)!ie}.mw-help-field-data{display:block;background-color:#d6f3ff;padding:5px 8px 4px 8px;border:1px solid #5dc9f4;margin-left:20px}.tipsy{padding:5px 5px 10px;font-size:12px;position:absolute;z-index:100000;overflow:visible}.tipsy-inner{padding:5px 8px 4px 8px;background-color:#d6f3ff;color:black;border:1px solid #5dc9f4;max-width:300px;text-align:left}.tipsy-arrow{position:absolute;background:url(data:image/gif;base64,R0lGODlhDQANAMQAAPf399bz/9vu9m/O9NXy/8Pm9svp9pfd+YLW943X9LTn++z093XQ9WnM9OLw9p/c9YTU9InY9/T292DK9Jre+afj+rvq/Nzv9rjk9brl9cPt/ZLb+GbL9MLs/ZHb+KLh+iH5BAAAAAAALAAAAAANAA0AAAVK4BGMZBkcg2WW1lBEKxkVAFTFFQQAwkSYhIlgB3hQTJQHEbBodEiaxmIJyHhIGwwVIGEoAgqGZAswIAIIA3mX+CTWOwfHAd9dtiEAOw==) no-repeat top left;background:url(http://bits.wikimedia.org/skins-1.17/common/images/tipsy-arrow.gif?2011-02-12T21:25:00Z) no-repeat top left!ie;width:13px;height:13px}.tipsy-se .tipsy-arrow{bottom:-2px;right:10px;background-position:0% 100%}}@media screen{  html,body{margin:0;padding:0;font-family:sans-serif;font-size:1em}body{background-color:#f3f3f3;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABRJREFUeF4FwTEBAAAAwJD1D+weGQD4APc0a6VeAAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/page-base.png?2011-02-12T21:25:00Z)!ie} div#content{margin-left:10em;padding:1em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeF4FwTEBAAAAgjD7FzESWfjYdgwEoAJ4lTsaxgAAAABJRU5ErkJggg==);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/border.png?2011-02-12T21:25:00Z)!ie;background-position:top left;background-repeat:repeat-y;background-color:white;color:black;direction:ltr} #mw-page-base{height:5em;background-color:white;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAIAAAArRUU2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADpJREFUeF5VjUkOAEAIwoD//7lzGJd4MJHGSoBImkFETP67CdLldUd7KC6f8fv3+psd8znbtU5x354HaWQjOx76v7MAAAAASUVORK5CYII=);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/page-fade.png?2011-02-12T21:25:00Z)!ie;background-position:bottom left;background-repeat:repeat-x}#mw-head-base{margin-top:-5em;margin-left:10em;height:5em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeF4FwTEBAAAAgjD7FzESWfjYdgwEoAJ4lTsaxgAAAABJRU5ErkJggg==);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/border.png?2011-02-12T21:25:00Z)!ie;background-position:bottom left;background-repeat:repeat-x}div#mw-head{position:absolute;top:0;right:0;width:100%}div#mw-head h5{margin:0;padding:0} div.emptyPortlet{display:none} #p-personal{position:absolute;top:0;right:0.75em}#p-personal h5{display:none}#p-personal ul{list-style:none;margin:0;padding-left:10em; } #p-personal li{line-height:1.125em;float:left} #p-personal li{margin-left:0.75em;margin-top:0.5em;font-size:0.75em;white-space:nowrap} #left-navigation{position:absolute;left:10em;top:2.5em}#right-navigation{float:right;margin-top:2.5em} div.vectorTabs h5,div.vectorMenu h5 span{display:none}  div.vectorTabs{float:left;height:2.5em}div.vectorTabs{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAERJREFUeF5lTtEKgEAMMv//j/O0IxlH9CA6N2WURAA/OHl5GeWAwUUHBcKV795FtTePxpmV3t9uv8Z3/cmvM88vzbbrAV/dQdX+eas3AAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/tab-break.png?2011-02-12T21:25:00Z)!ie;background-position:bottom left;background-repeat:no-repeat;padding-left:1px} div.vectorTabs ul{float:left}div.vectorTabs ul{height:100%;list-style:none;margin:0;padding:0} div.vectorTabs ul li{float:left} div.vectorTabs ul li{line-height:1.125em;display:inline-block;height:100%;margin:0;padding:0;background-color:#f3f3f3;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAIAAADITs03AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADxJREFUeF7litsRACAMwrD77+Q0rtGoV98r+MEFchhgkr4NnZyb3bk/LM/yMCjiH4wots/++hYR3iXLJVWUBS1AtOi2fwAAAABJRU5ErkJggg==);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/tab-normal-fade.png?2011-02-12T21:25:00Z)!ie;background-position:bottom left;background-repeat:repeat-x;white-space:nowrap} div.vectorTabs ul > li{display:block}div.vectorTabs li.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkAQAAAABvV2fNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVJREFUeF7dwQEBAAAAQCDTTfdD4WOJ5TIB3ib9EgAAAABJRU5ErkJggg==);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/tab-current-fade.png?2011-02-12T21:25:00Z)!ie} div.vectorTabs li a{display:inline-block;height:1.9em;padding-left:0.5em;padding-right:0.5em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAERJREFUeF5lTtEKgEAMMv//j/O0IxlH9CA6N2WURAA/OHl5GeWAwUUHBcKV795FtTePxpmV3t9uv8Z3/cmvM88vzbbrAV/dQdX+eas3AAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/tab-break.png?2011-02-12T21:25:00Z)!ie;background-position:bottom right;background-repeat:no-repeat;color:#0645ad;cursor:pointer;font-size:0.8em} div.vectorTabs li > a{display:block} div.vectorTabs span a{display:inline-block;padding-top:1.25em}  div.vectorTabs span > a{float:left;display:block}div.vectorTabs li.selected a,div.vectorTabs li.selected a:visited{color:#333333;text-decoration:none}div.vectorTabs li.new a,div.vectorTabs li.new a:visited{color:#a55858}  div.vectorMenu{direction:ltr;float:left;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAMAAAAlM38UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9QTFRFsbGxmpqa3d3deXl58/n79CzHcQAAAAV0Uk5T/////wD7tg5TAAAAMklEQVR42mJgwQoYBkqYiZEZAhiZUFRDxWGicEPA4nBRhNlAcYQokpVMDEwD6kuAAAMAyGMFQVv5ldcAAAAASUVORK5CYII=);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/arrow-down-icon.png?2011-02-12T21:25:00Z)!ie;background-position:100% 60%;background-repeat:no-repeat;cursor:pointer} body.rtl div.vectorMenu{direction:rtl}  div#mw-head div.vectorMenu h5{float:left;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAERJREFUeF5lTtEKgEAMMv//j/O0IxlH9CA6N2WURAA/OHl5GeWAwUUHBcKV795FtTePxpmV3t9uv8Z3/cmvM88vzbbrAV/dQdX+eas3AAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/tab-break.png?2011-02-12T21:25:00Z)!ie;background-repeat:no-repeat} div#mw-head div.vectorMenu h5{background-position:bottom left;margin-left:-1px} div#mw-head div.vectorMenu > h5{background-image:none}div#mw-head div.vectorMenu h4{display:inline-block;float:left;font-size:0.8em;padding-left:0.5em;padding-top:1.375em;font-weight:normal;border:none}  div.vectorMenu h5 a{display:inline-block;width:24px;height:2.5em;text-decoration:none;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAERJREFUeF5lTtEKgEAMMv//j/O0IxlH9CA6N2WURAA/OHl5GeWAwUUHBcKV795FtTePxpmV3t9uv8Z3/cmvM88vzbbrAV/dQdX+eas3AAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/tab-break.png?2011-02-12T21:25:00Z)!ie;background-repeat:no-repeat} div.vectorMenu h5 a{background-position:bottom right} div.vectorMenu h5 > a{display:block}div.vectorMenu div.menu{position:relative;display:none;clear:both;text-align:left}  body.rtl div.vectorMenu div.menu{margin-left:24px}  body.rtl div.vectorMenu > div.menu{margin-left:auto}   body.rtl div.vectorMenu > div.menu,x:-moz-any-link{margin-left:23px}div.vectorMenu:hover div.menu{display:block}div.vectorMenu ul{position:absolute;background-color:white;border:solid 1px silver;border-top-width:0;list-style:none;list-style-image:none;list-style-type:none;padding:0;margin:0;margin-left:-1px;text-align:left} div.vectorMenu ul,x:-moz-any-link{min-width:5em} div.vectorMenu ul,x:-moz-any-link,x:default{min-width:0}div.vectorMenu li{padding:0;margin:0;text-align:left;line-height:1em} div.vectorMenu li a{display:inline-block;padding:0.5em;white-space:nowrap;color:#0645ad;cursor:pointer;font-size:0.8em} div.vectorMenu li > a{display:block}div.vectorMenu li.selected a,div.vectorMenu li.selected a:visited{color:#333333;text-decoration:none} #p-search h5{display:none} #p-search{float:left}#p-search{margin-right:0.5em;margin-left:0.5em}#p-search form,#p-search input{margin:0;margin-top:0.4em}div#simpleSearch{display:block;width:14em;height:1.4em;margin-top:0.65em;position:relative;min-height:1px; border:solid 1px #AAAAAA;color:black;background-color:white;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAQCAIAAABY/YLgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACZJREFUeF5diqERACAQgID95/3s+cFg4CDQzASkXl4jidvrCPzfA7puAx52W1pnAAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/search-fade.png?2011-02-12T21:25:00Z)!ie;background-position:top left;background-repeat:repeat-x}div#simpleSearch label{ font-size:13px;top:0.25em;direction:ltr}div#simpleSearch input{color:black;direction:ltr}div#simpleSearch input:focus{outline:none}div#simpleSearch input.placeholder{color:#999999}div#simpleSearch input::-webkit-input-placeholder{color:#999999}div#simpleSearch input#searchInput{position:absolute;top:0;left:0;width:90%;margin:0;padding:0;padding-left:0.2em;padding-top:0.2em;padding-bottom:0.2em;outline:none;border:none; font-size:13px;background-color:transparent;direction:ltr}div#simpleSearch button#searchButton{position:absolute;width:10%;right:0;top:0;padding:0;padding-top:0.2em;padding-bottom:0.2em;padding-right:0.4em;margin:0;border:none;cursor:pointer;background-color:transparent} div#simpleSearch button#searchButton img{border:none;margin:0;margin-top:-3px;padding:0} div#simpleSearch button#searchButton > img{margin:0} div#mw-panel{position:absolute;top:160px;padding-top:1em;width:10em;left:0}div#mw-panel div.portal{padding-bottom:1.5em;direction:ltr}div#mw-panel div.portal h5{font-weight:normal;color:#444444;padding:0.25em;padding-top:0;padding-left:1.75em;cursor:default;border:none;font-size:0.75em}div#mw-panel div.portal div.body{margin:0;padding-top:0.5em;margin-left:1.25em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAABCAAAAAAphRnkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAClJREFUeF61yMEJACAQxMCN/Xfr/yIsaAfOJxC2UTPWS6f5gABhUTedBz7fGPSonIP/AAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/portal-break.png?2011-02-12T21:25:00Z)!ie;background-repeat:no-repeat;background-position:top left}div#mw-panel div.portal div.body ul{list-style:none;list-style-image:none;list-style-type:none;padding:0;margin:0}div#mw-panel div.portal div.body ul li{line-height:1.125em;padding:0;padding-bottom:0.5em;margin:0;overflow:hidden;font-size:0.75em}div#mw-panel div.portal div.body ul li a{color:#0645ad}div#mw-panel div.portal div.body ul li a:visited{color:#0b0080} div#footer{margin-left:10em;margin-top:0;padding:0.75em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeF4FwTEBAAAAgjD7FzESWfjYdgwEoAJ4lTsaxgAAAABJRU5ErkJggg==);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/border.png?2011-02-12T21:25:00Z)!ie;background-position:top left;background-repeat:repeat-x;direction:ltr}div#footer ul{list-style:none;list-style-image:none;list-style-type:none;margin:0;padding:0}div#footer ul li{margin:0;padding:0;padding-top:0.5em;padding-bottom:0.5em;color:#333333;font-size:0.7em}div#footer #footer-icons{float:right} body.ltr div#footer #footer-places{float:left}div#footer #footer-info li{line-height:1.4em}div#footer #footer-icons li{float:left;margin-left:0.5em;line-height:2em}div#footer #footer-places li{float:left;margin-right:1em;line-height:2em} #p-logo{position:absolute;top:-160px;left:0;width:10em;height:160px}#p-logo a{display:block;width:10em;height:160px;background-repeat:no-repeat;background-position:center center;text-decoration:none}  #preftoc{ width:100%;float:left;clear:both;margin:0 !important;padding:0 !important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAhCAQAAACysAk0AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAABAAAAIQBSEXtPAAAAAmJLR0QA/vCI/CkAAAAmSURBVAjXY2BgYPj3n+k/AwL9g5Fwxl8GJgYGpr+ogmgITQuSgQA1QiAL/go8LAAAACV0RVh0Y3JlYXRlLWRhdGUAMjAwOS0wOC0wOVQxOTowNTo0MSswMDowMCYO2tEAAAAldEVYdG1vZGlmeS1kYXRlADIwMDktMDgtMDlUMTk6MDU6NDErMDA6MDB5v6zlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/preferences-break.png?2011-02-12T21:25:00Z)!ie;background-position:bottom left;background-repeat:no-repeat}#preftoc li{ float:left;margin:0;padding:0;padding-right:1px;height:2.25em;white-space:nowrap;list-style-type:none;list-style-image:none;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAhCAQAAACysAk0AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAABAAAAIQBSEXtPAAAAAmJLR0QA/vCI/CkAAAAmSURBVAjXY2BgYPj3n+k/AwL9g5Fwxl8GJgYGpr+ogmgITQuSgQA1QiAL/go8LAAAACV0RVh0Y3JlYXRlLWRhdGUAMjAwOS0wOC0wOVQxOTowNTo0MSswMDowMCYO2tEAAAAldEVYdG1vZGlmeS1kYXRlADIwMDktMDgtMDlUMTk6MDU6NDErMDA6MDB5v6zlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/preferences-break.png?2011-02-12T21:25:00Z)!ie;background-position:bottom right;background-repeat:no-repeat} #preftoc li:first-child{margin-left:1px}#preftoc a,#preftoc a:active{display:inline-block;position:relative;color:#0645ad;padding:0.5em;text-decoration:none;background-image:none;font-size:0.9em}#preftoc a:hover,#preftoc a:focus{text-decoration:underline}#preftoc li.selected a{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAhCAQAAACysAk0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeF5twskJAAAMAjD3H7mXfYogCQiQeun68Z2WPk0SQHDa/pxXAAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/preferences-fade.png?2011-02-12T21:25:00Z)!ie;background-position:bottom;background-repeat:repeat-x;color:#333333;text-decoration:none}#preferences{float:left;width:100%;margin:0;margin-top:-2px;clear:both;border:solid 1px #cccccc;background-color:#f9f9f9;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABRJREFUeF4FwTEBAAAAwJD1j+waGQD8APvyfoZlAAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/preferences-base.png?2011-02-12T21:25:00Z)!ie}#preferences fieldset.prefsection{border:none;padding:0;margin:1em}#preferences fieldset.prefsection fieldset{border:none;border-top:solid 1px #cccccc}#preferences legend{color:#666666}#preferences fieldset.prefsection legend.mainLegend{display:none}#preferences td{padding-left:0.5em;padding-right:0.5em}#preferences td.htmlform-tip{font-size:x-small;padding:.2em 2em;color:#666666}#preferences div.mw-prefs-buttons{padding:1em}#preferences div.mw-prefs-buttons input{margin-right:0.25em} #userlogin,#userloginForm{border:solid 1px #cccccc;padding:1.2em;margin:.5em;float:left}#userlogin{min-width:20em;max-width:90%;width:40em} div#content{line-height:1.5em}#bodyContent{font-size:0.8em} a{text-decoration:none;color:#0645ad;background:none}a:visited{color:#0b0080}a:active{color:#faa700}a:hover,a:focus{text-decoration:underline}a.stub{color:#772233}a.new,#p-personal a.new{color:#ba0000}a.new:visited,#p-personal a.new:visited{color:#a55858} img{border:none;vertical-align:middle}hr{height:1px;color:#aaa;background-color:#aaa;border:0;margin:.2em 0 .2em 0} h1,h2,h3,h4,h5,h6{color:black;background:none;font-weight:normal;margin:0;overflow:hidden;padding-top:.5em;padding-bottom:.17em;border-bottom:1px solid #aaa;width:auto}h1{font-size:188%}h1 .editsection{font-size:53%}h2{font-size:150%}h2 .editsection{font-size:67%}h3,h4,h5,h6{border-bottom:none;font-weight:bold}h3{font-size:132%}h3 .editsection{font-size:76%;font-weight:normal}h4{font-size:116%}h4 .editsection{font-size:86%;font-weight:normal}h5{font-size:100%}h5 .editsection{font-weight:normal}h6{font-size:80%}h6 .editsection{font-size:125%;font-weight:normal}.editsection{float:right}p{margin:.4em 0 .5em 0;line-height:1.5em}p img{margin:0}abbr,acronym,.explain{border-bottom:1px dotted black;color:black;background:none;cursor:help}q{font-family:Times,"Times New Roman",serif;font-style:italic} pre,code,tt,kbd,samp{ font-family:monospace,"Courier New"}code{background-color:#f9f9f9}pre{padding:1em;border:1px dashed #2f6fab;color:black;background-color:#f9f9f9;line-height:1.1em}ul{line-height:1.5em;list-style-type:square;margin:.3em 0 0 1.5em;padding:0;list-style-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAANCAYAAABhPKSIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACtJREFUeF7NjbEJAAAIw7zRu/w5ouBUBEeHDM2QGiA8kObBULuFcJbSXN8T78SqnpKltAIAAAAASUVORK5CYII=);list-style-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/bullet-icon.png?2011-02-12T21:25:00Z)!ie}ol{line-height:1.5em;margin:.3em 0 0 3.2em;padding:0;list-style-image:none}li{margin-bottom:.1em}dt{font-weight:bold;margin-bottom:.1em}dl{margin-top:.2em;margin-bottom:.5em}dd{line-height:1.5em;margin-left:2em;margin-bottom:.1em} table{font-size:100%} fieldset{border:1px solid #2f6fab;margin:1em 0 1em 0;padding:0 1em 1em;line-height:1.5em}fieldset.nested{margin:0 0 0.5em 0;padding:0 0.5em 0.5em}legend{padding:.5em;font-size:95%}form{border:none;margin:0}textarea{width:100%;padding:.1em}select{vertical-align:top} #toc,.toc,.mw-warning{border:1px solid #aaa;background-color:#f9f9f9;padding:5px;font-size:95%}#toc h2,.toc h2{display:inline;border:none;padding:0;font-size:100%;font-weight:bold}#toc #toctitle,.toc #toctitle,#toc .toctitle,.toc .toctitle{text-align:center}#toc ul,.toc ul{list-style-type:none;list-style-image:none;margin-left:0;padding-left:0;text-align:left}#toc ul ul,.toc ul ul{margin:0 0 0 2em}#toc .toctoggle,.toc .toctoggle{font-size:94%} div.floatright,table.floatright{clear:right;float:right;position:relative;margin:0 0 .5em .5em;border:0}div.floatright p{font-style:italic}div.floatleft,table.floatleft{float:left;clear:left;position:relative;margin:0 .5em .5em 0;border:0}div.floatleft p{font-style:italic} div.thumb{margin-bottom:.5em;width:auto;background-color:transparent}div.thumbinner{border:1px solid #ccc;padding:3px !important;background-color:#f9f9f9;font-size:94%;text-align:center;overflow:hidden}html .thumbimage{border:1px solid #ccc}html .thumbcaption{border:none;text-align:left;line-height:1.4em;padding:3px !important;font-size:94%}div.magnify{float:right;border:none !important;background:none !important}div.magnify a,div.magnify img{display:block;border:none !important;background:none !important} div.tright{clear:right;float:right;margin:.5em 0 1.3em 1.4em} div.tleft{float:left;clear:left;margin:.5em 1.4em 1.3em 0}img.thumbborder{border:1px solid #dddddd}.hiddenStructure{display:none} .mw-warning{margin-left:50px;margin-right:50px;text-align:center} .usermessage{background-color:#ffce7b;border:1px solid #ffa500;color:black;font-weight:bold;margin:2em 0 1em;padding:.5em 1em;vertical-align:middle} #siteNotice{position:relative;text-align:center;font-size:0.8em;margin:0}#localNotice{margin-bottom:0.9em} .catlinks{border:1px solid #aaa;background-color:#f9f9f9;padding:5px;margin-top:1em;clear:both} #siteSub{display:none}#jump-to-nav{display:none}#contentSub,#contentSub2{font-size:84%;line-height:1.2em;margin:0 0 1.4em 1em;color:#7d7d7d;width:auto}span.subpages{display:block} .center{width:100%;text-align:center}*.center *{margin-left:auto;margin-right:auto} .small,.small *{font-size:94%}table.small{font-size:100%} h1,h2{margin-bottom:.6em}h3,h4,h5{margin-bottom:.3em}#firstHeading{padding-top:0;margin-top:0;padding-top:0;margin-bottom:0.1em;line-height:1.2em;font-size:1.6em;padding-bottom:0}div#content a.external,div#content a[href ^="gopher://"]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFZJREFUeF59z4EJADEIQ1F36k7u5E7ZKXeUQPACJ3wK7UNokVxVk9kHnQH7bY9hbDyDhNXgjpRLqFlo4M2GgfyJHhjq8V4agfrgPQX3JtJQGbofmCHgA/nAKks+JAjFAAAAAElFTkSuQmCC) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/external-link-ltr-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px}div#content a[href ^="https://"],.link-https{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeF6tjzsKg0AQhi09mimsFJLCzpNYCGKbK3gAtfUIljaCoKCCZIs8MMV2v+yCg8siWlh8zOtjhjEAEFmeIopDQtTrTJNEZIxhWysiNfULJFJjDzGnba/aBt4+wAuBzD+tg6a8SVkXf4GET96xmDxNzP39IvE/PPDtXIyVpYinv14A5F0laJ8oYFgAAAAASUVORK5CYII=) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/lock-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px}div#content a[href ^="mailto:"],.link-mailto{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF////////iIqF9vb26urpycfDvb275eXj2djV+/v4srKy6efio6GcqKejsa6q8fDtVM9qIQAAAAF0Uk5TAEDm2GYAAABOSURBVHheBcExDkAwGIDRL43NpJOt6a9hMdVilP8gklqsHMJmt4qeyeI03oNSNkCrAIU/7YTWbwp0zz4rTXZHxF/9YA15HTG4+4NFRNofUBMMOBBNZngAAAAASUVORK5CYII=) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/mail-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px}div#content a[href ^="news://"]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHtJREFUeF6NkEEKgCAQRT2w1wiiUxgk0SKiTe6i9oKeQXDhKSZmYAJRKeHh4j//DIp+6OAPJH6cXJRSZqSUQClViBjUKER8zXAbUhev+6Q7hMA0G1msNtIo5zxhrX3xzlNG4ravYMwBMUZsKsBsXjQIABCTHlsfTXuj8wCN3T2QBjtcwQAAAABJRU5ErkJggg==) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/news-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px}div#content a[href ^="ftp://"],.link-ftp{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAExJREFUeF5VyEEKwCAMAMH83o/0LT6kFHqQYqkevG1jIITs3kaQgn+A7A29ujnw5NKrsaPCrTegBBrRMzYeXkbGzsdkZRwsPWMUmEd+CkSgVeVp2OkAAAAASUVORK5CYII=) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/file-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px}div#content a[href ^="irc://"],div#content a.extiw[href ^="irc://"],.link-irc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHRJREFUeF590E0KgCAQBWAvH0TXigI3ZccQ/8H91ExqKNrAW8j7kFG27SvMyzQM9s8whuBnENdQSllFKdWFWFC01pQQwhASMMaAtXYIMQScc/0dxSXyIaPq1ZzzF6JOsKBTHOC9hxgjoQLbf2tRgekWKka5AShBSepvauUSAAAAAElFTkSuQmCC) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/talk-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px}div#content a.external[href $=".ogg"],div#content a.external[href $=".OGG"],div#content a.external[href $=".mid"],div#content a.external[href $=".MID"],div#content a.external[href $=".midi"],div#content a.external[href $=".MIDI"],div#content a.external[href $=".mp3"],div#content a.external[href $=".MP3"],div#content a.external[href $=".wav"],div#content a.external[href $=".WAV"],div#content a.external[href $=".wma"],div#content a.external[href $=".WMA"],.link-audio{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF////dX8qyNF7eYMzwsxrsr9G8PHrm6Jrt7uakJVmn6OB1duat8NQi5YzhI4ykZR07gQraQAAAAF0Uk5TAEDm2GYAAABJSURBVHheNcSxDUBQFIbR727glxvKl3dHsIHCGESrNIIR7KE1hQ1MoDSCiMhJDixSDWVEhuZbei/sf/Jqbdn28+jxYe4u7CaND+p5C05J6bE1AAAAAElFTkSuQmCC) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/audio-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px}div#content a.external[href $=".ogm"],div#content a.external[href $=".OGM"],div#content a.external[href $=".avi"],div#content a.external[href $=".AVI"],div#content a.external[href $=".mpeg"],div#content a.external[href $=".MPEG"],div#content a.external[href $=".mpg"],div#content a.external[href $=".MPG"],.link-video{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAP9bkSK1AAAAXElEQVR4Xi2NMQoFMQgFvbpgHUj5LvF6K7sFQXKFsOew2G/xuylmGPn62Wb76U+ayHsTbDnrQMNrHdkZRChyi730KvK1QUWVD47gzoCOMBkXPSZrIuumseW/iKU/eKdG9xXBa10AAAAASUVORK5CYII=) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/video-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px}div#content a.external[href $=".pdf"],div#content a.external[href $=".PDF"],div#content a.external[href *=".pdf#"],div#content a.external[href *=".PDF#"],div#content a.external[href *=".pdf?"],div#content a.external[href *=".PDF?"],.link-document{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUeF5lykEKgDAMBdF/+17Es/QkiosiCBURXIzJooZohmweX6gwmkCeI+Oqc2C1FnvnF2ejlQYU0tLK2NjY6f/l8V12Ti7uhFFgDj19b58EwXuqkAAAAABJRU5ErkJggg==) center right no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/document-icon.png?2011-02-12T21:25:00Z) center right no-repeat!ie;padding-right:13px} div#content a.extiw,div#content a.extiw:active{color:#36b;background:none;padding:0}div#content a.external{color:#36b}div#content .printfooter{display:none} #pt-userpage,#pt-anonuserpage,#pt-login{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAMAAABxsOwqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGBQTFRF////R2uZMmGd5rp2boqvMFyS9unUTXWr5KQ/N2mn/Pr42Jg14Zstl6a80K93XXiVooVQ57VnpLnW4a1a36ZMr7Cwgpm5PXGw78mO+O/g1t7n5Orxk6zMvMne7/Dw6+zt5K6gdAAAAAF0Uk5TAEDm2GYAAABdSURBVHheHcpFAgMxEANBDZhhmQP//2Uc90V1EICrLuti0YqnyORrbLSrWPHJ/ukn8bkzbrnVD/MwpjQOb+B2hyvbQe7BTiG8ZmYqUOLglA0rCrcJxpiCz049/f4A9ZID96SyhDEAAAAASUVORK5CYII=) left top no-repeat;background:url(http://bits.wikimedia.org/skins-1.17/vector/images/user-icon.png?2011-02-12T21:25:00Z) left top no-repeat!ie;padding-left:15px !important;text-transform:none}.toccolours{border:1px solid #aaa;background-color:#f9f9f9;padding:5px;font-size:95%}#bodyContent{position:relative;width:100%}#mw-js-message{font-size:0.8em}div#bodyContent{line-height:1.5em} #ca-unwatch.icon,#ca-watch.icon{margin-right:1px}#ca-unwatch.icon a,#ca-watch.icon a{margin:0;padding:0;outline:none;display:block;width:26px; padding-top:3.1em;margin-top:0; margin-top:-0.8em !ie;height:0;overflow:hidden;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAMAAAClQEgHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFoNb/+vr52tXLdcP/ltL/ysKt39rPrdz/xtDT8vLwwrJxodr/vqxjzdnr8v7+ntb/uuX/i87/ytTV9fb3zuz+8eOU+fr8zvH/wuX/ecT/hbrnj7XBltb/m9T/h8z/jtH+c8H/vq53lL/Ovq109vb1/v7rx8CuhcT0xLJlot3/2PL/kc//59N3s9//v7KGbL7/mNf//v395NSLmdr//Pz7ccT/wbOIZ7v/ybZk6OzzpNf/icPu0cm2g8n/p9n/9fTzva1ouuL/samQwu3/scfhfrbj8e/q4+bnyLJQ6u3tqtr/irbG7PH5fcz/0d7ww+r/zcuL6Obh9f7/hsv/s8+r+e2rw7J2rb3C+fj2icTy1O7/jrvO1s++vMyUz8zGocna6+rn8vDtlLK8aL3/d8X///vV7fz/vraklMr039nMtNjqp97/o9362ejN4vb/zcN7sN3/vfP/bsD/1dLNhK2+yLeIkrri28drz7tp5N7TiK26grXi3trTccP/vub/rd//+v//qM7fyeHMztmq5PT8u6t0/f3+/P39ksDwk8HQtMTH3fn/kdH/ltLpxb5o0dzsnND6ssXbzun5rdru2+Dh5+vsz9nadrrx1eLz+fLM7/z/w71z//zPgMz/8eWrwtKT9vn8jbPCf7vs1N3pua1terXo1O3tqtfWwOX51cV5dMH/vtmy28p8fLXR4efx9emq///8z9TbzrxowLOP5ea57///nq2xy7xo///5frrnwrSP9PX2+vv7ztzwvd3P2vH5r9z/8/X4nMrlsN//qLq9wa5zh7fikdf/tuL9zbpo3tnQ1u/kx8rL+/z8kq+6+vLGkqKq6f//oMrfxuf8xbVwqLvSh7vq8PP3ltD6d8P/v7Ngx7dqwbFt/PGyk8jv9vf3zLhofqy/wdPqyeTc0vH9//3kxun5i7O/x87X09mr1sRzmK3C3dnQz9XXmLvg///6uc7ozLpq7O7u//zc7evoyfT/+/z+mtf/9e25zcJt7ezowMXGu8nM+Pn5////8/n77InDmQAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAJbSURBVHjaYvgPAb+3/ccK4tKxi7+4SkA9A5SWnuyJVSGXDidWcSnN6/jVQw0+s//fBWzqin9scMImvtF/62us6rfwOaEYXPLvXyM2pzn8+7dGBYt4dZ5WhjA29d3i+Sowg/d4TjuX9+9fQwnH1L8oqhIrN5//909VOdPNBEXcZ8Y7CQlHEam9Pt/Q1O/KrXNcdhSsnuFIZ3zWpLR/QMAnkhWvJA1TxVqx0mheKkj883qjVx9LYeIukRkT2P3rCtgPCGTfiLTuQKjPD3iZK1DAzv64OWD27VIG9+h/SOASB0xhwklk8XImmLilOp+IhK6XFQODrCyD+D1euPoHF50FDoPFZWQKfzIx/N/9PAiuP3oKwmOMYU9hwu8tAhHiYteidO34WbRtFZg1d65DVn+6HiJem3MrEBTGZ6taIPqDvN1RwkxxJkRcVeMLivixEwwsgpLmRfKulqjqm/jB4r08vyCp4tMhiAFPOFCj2L4cIh7KhCp+UJ1bjjlZ/6Y8L5r6PmOQuGkIEzS5vV0BMWBWOKrCGlGIeCorqvhieTlm5pRVkgYuaOpj5zLXmiqkLGeFGhwOTBRRl4EmJKEqVJsDdC3Q8B16qOITs4MNegS/B3OXoanf53s8JNbYN0cPanDSPy3vP0JVz/4tRFVo9u+uRcwbZdF/d1DFy8S5Fz3qr5ZxdkVT/3W1Rsyp1vmFS6AGP1TqAolzSK+9j6KQZ5MNiGK64sGIIr7U+gOI4pWaLoaqfjtEPRdIPdDgdiFY5hRCyaWGbDDz2CKQxdv8YOb5LcCtnuE/jQBAgAEAQlFsBT+lqfQAAAAASUVORK5CYII=);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/watch-icons.png?2011-02-12T21:25:00Z)!ie}#ca-unwatch.icon a{background-position:-43px 60%}#ca-watch.icon a{background-position:5px 60%}#ca-unwatch.icon a:hover,#ca-unwatch.icon a:focus{background-position:-67px 60%}#ca-watch.icon a:hover,#ca-watch.icon a:focus{background-position:-19px 60%}#ca-unwatch.icon a.loading,#ca-watch.icon a.loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAMQfANra2uLi4vDw8PLy8ujo6Ozs7NbW1vj4+Pb29s7Oztzc3NTU1O7u7uDg4NHR0erq6v39/d7e3vz8/Pv7+/7+/tPT09jY2Pr6+tnZ2efn5/X19eXl5ebm5vT09P///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAwAfACwAAAAAEAAQAAAFa+Anjl9QkShacVqabp2XuKjjecHhStrjHDdIgtORiCyWSEZwud0mg0zEUhkYnNhsY/O5OCRZrEEwgvzCkgqZhGiEB1wUgRGeAFKApqcjcJ5QCx4aFQEECX1/JAlJJBsVFRMkEBkXLhyVNJkhACH5BAkDAB8ALAAAAAAQABAAAAV74CeO4hUQZEoGhqGqWzQtEnlYRCYMGSB5BkTKQCgUOBGPkjBIdQDKqBLhaJI4D6l0gylMRg6IVkmhNBIjxWBM8XAwHNFAIdYWDA0SRhNtKy0CJAUVEAcRAQJkFikZDg4EBB0RDR4dGCkIEhAjFBsBDwovKo0BoioFQiMhACH5BAkDAB8ALAAAAAAQABAAAAWB4CeO5HeU33OVl5IIpYEFh/QR1rYNZSMUAYVBwfBYbKRJwwPxFDxQjAbloECvHgMEBUBgPZTApjSxeL+eQGDUsQwkaGhBcUBYinGI5GBIEBwEGhxwVwwLFgoRHQwECgIADRFXBgUfEygfEBEDTmuYIxAJFAYwnyMFABVbpiMYGSghACH5BAkDAB8ALAAAAAAQABAAAAV+4CdKjWieKOJs6De1U5Zhg4YcmaG0kXcElQDtEWkZPMgMBGlofQDIqK9pmhAADClSEDBtAICJROvR7EQGx5LsgQAOogKm0LhQ2IDRQRJRFKIHAh4XAXknEw5REQsRBgAOEigRFBQEERofAgJiKBoZAgsXTicUDgYDoygNXU4hACH5BAUDAB8ALAAAAAAQABAAAAV54Cd+EFBNY6p+hgCssOERGwSP3eZBgUIEG0xhdGFpPMjChjNoRD6XIGBDQVo9FIcogZnsrlbLQNRQfMEewVN0ERAaaE9AoDoECGj76lBBTxQwDlYBEQweGwwqEDIHCwIbBgAAFioUBgUOdCIaBRwrBhUHNykQY6MfIQA7);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/watch-icon-loading.gif?2011-02-12T21:25:00Z)!ie;background-position:5px 60%}#ca-unwatch.icon a span,#ca-watch.icon a span{display:none}div.vectorTabs ul{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAuCAIAAABmjeQ9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAERJREFUeF5lTtEKgEAMMv//j/O0IxlH9CA6N2WURAA/OHl5GeWAwUUHBcKV795FtTePxpmV3t9uv8Z3/cmvM88vzbbrAV/dQdX+eas3AAAAAElFTkSuQmCC);background-image:url(http://bits.wikimedia.org/skins-1.17/vector/images/tab-break.png?2011-02-12T21:25:00Z)!ie;background-position:right bottom;background-repeat:no-repeat} p.mw-ipb-conveniencelinks,p.mw-protect-editreasons,p.mw-filedelete-editreasons,p.mw-delete-editreasons{float:right} .tipsy{font-size:0.8em}}

/* cache key: zhwiki:resourceloader:filter:minify-css:5:dad3a59b796e0a1722878d4063e1f018 */
			]]>
			</style>
			<p class="title">
				<a href={wikipedia.href({keyword: ret.def})} target="_blank" highlight="URL">{ret.def}</a></p></div>;
		output += new XML(dict.tidyStr(ret.full['*'], "article"));
		dactyl.echo(<div id="wikipedia-output">{output}</div>);
	},

	generate: function(context, args) {
		var req = new XMLHttpRequest();
		if (dict.suggestReq)
			dict.suggestReq.abort();
		dict.suggestReq = req;
		req.open("GET", options["dictw-api"] + "?action=opensearch&format=json&limit=100&search="+encodeURIComponent(args[0]));
		var suggestions = [];
		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					var result_arr = JSON.parse(req.responseText)[1];
					result_arr.forEach(function(word) {
							let r = {};
							r["g"] = word;
							r["e"] = word;
							r["url"] = wikipedia.href({keyword: word});
							suggestions.push(r);
					});
					context.incomplete = false;
					if (suggestions.length == 0 && args[0].trim().length > 0) // TODO
						context.completions = [{url:wikipedia.href({keyword:args[0]}), g:args[0], e:"自动补全查询结束, 无返回结果"}];
					else
						context.completions = suggestions;
				}
			}

		};
		req.send(null);
	},
};

let zdic = {
	name: T(41),
	keyword: "",
	logo: "http://www.zdic.net/images/logo.gif",
	favicon: "http://www.zdic.net/favicon.ico",
	init: function(keyword, args) {
		zdic.keyword = keyword;
		let type = args["-l"] || options["dict-langpair"]["z"] || options.get("dict-langpair").defaultValue["z"];
		let pairs = [
			["lb_a", "hp"],
			["lb_b", "mh"],
			["lb_c", "mh"],
			["tp", "tp1"],
			["q", keyword]
		];
		let tp = type.slice(0, 1);
		let lb = type.slice(1);
		if (tp >=2)
			pairs[tp - 2] = [pairs[tp - 2][0], lb];
		pairs[3] = ["tp", "tp" + tp];
		let pieces = [];
		pairs.forEach(function (pair) {
			pieces.push(pair.join("="));
		});

		var req = new XMLHttpRequest();
		dict.req = req;
		req.open("POST", "http://www.zdic.net/sousuo/");
		req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		req.onreadystatechange = function (ev) {
			dict.ready(zdic, req);
		};
		req.send(pieces.join("&"));
		return req;
	},

	href: function (params) {
		// return "http://zdic.net/search?c=3&q=" + encodeURIComponent(params["keyword"]);
		let keyword = encodeURIComponent(params["keyword"]);
		let type = params["type"] || options["dict-langpair"]["z"] || options.get("dict-langpair").defaultValue["z"];
		let pairs = [
			["lb_a", "hp"],
			["lb_b", "mh"],
			["lb_c", "mh"],
			["tp", "tp1"],
			["q", keyword]
		];
		let tp = type.slice(0, 1);
		let lb = type.slice(1);
		if (tp >=2)
			pairs[tp - 2] = [pairs[tp - 2][0], lb];
		pairs[3] = ["tp", "tp" + tp];
		let pieces = [];
		pairs.forEach(function (pair) {
			pieces.push(pair.join("="));
		});
		return "http://www.zdic.net/sousuo/?"+pieces.join("&");
	},

	process: function(text) {
		let ret = {
			notfound: false,
			pron: false,
			def: false,
			simple: false,
			full: false,
			audio: false
		};
		
		// 移除隐藏的网站宣传
		let style_pattern = /<style type="text\/css">[\s\S]*(zdct[0-9]+)[\s\S]*<\/style>/i;
		let classname = (style_pattern.test(text) && text.match(style_pattern)[1]) || false;
		if (classname) {
			let clearpattern = RegExp("<p class=\""+classname+"\">.*?<\\\/p>", "ig");
			text = text.replace(clearpattern, "");
		}

		let doc = dict.htmlToDom(text, "http://www.zdic.net/", true);

		// 移除添加到备忘录, 网友讨论
		var rems = doc.querySelectorAll(".badd,.bwladd,#wy,.secpan,.gdym,.annu_div,.ga,ga+div");
		if (rems.length) {
			Array.forEach(rems, function (i) {
				i.parentNode.removeChild(i);
			});
		}
		// TODO: 移除 comments, stylesheets, objects, javascripts
		var nodes = doc.getElementsByTagName("*");
		Array.forEach(nodes, function(node) {
			if (node && node.nodeType == Node.COMMENT_NODE || node.nodeName == "SCRIPT" || node.nodeName == "STYLE" || node.nodeName == "LINK" || node.nodeName == "IFRAME") {
				node.parentNode.removeChild(node);
			}
		});

		var _ret = zdic._simple(doc);
		ret["audio"] = _ret["audio"] ? _ret["audio"] : ret["audio"];
		ret["pron"] = _ret["pron"] ? _ret["pron"] : ret["pron"];
		ret["def"] = _ret["def"] ? _ret["def"] : ret["def"];
		ret["notfound"] = !ret["def"];
		ret["simple"] = ret["def"].replace(/\n|\r/g, " ").replace(/\s\s+/g, " ").slice(0, 200);
		ret["keyword"] = zdic.keyword;
		ret["full"] = zdic._full(doc);
		return ret;
	},

	_full: function(doc) {
		var full = {title: "", sub: {}};
		var simp = zdic._simple(doc);
		var keyword_url = zdic.href({keyword: simp["word"]});
		if (simp["pron"]) {
			full["title"] = <p class="title">
			<a href={keyword_url} target="_new" highlight="URL">{simp["word"]}</a>
				<span>[{simp["pron"]}]</span>
				</p>.toXMLString();
		} else {
			full["title"] = <p class="title">
				<a href={keyword_url} target="_blank" highlight="URL">{simp["word"]}</a>
			</p>.toXMLString();
		}

		var explain = doc.querySelector("div#wrapper div#container div#content");
		if (explain)
			full["sub"][T(8)] = dict.tidy(explain);
		return full;
	},

	_simple: function(doc) {
		var simp = {};
		simp["word"] = decodeURIComponent(zdic.keyword);
		simp["pron"] = false; // TODO
		simp["audio"] = false; // TODO
		var def = doc.querySelector("#content");
		simp["def"] = def ? def.textContent.trim() : "";
		return simp;
	},

	generate: function(context, args) { // TODO 检查"日"字, <li><a href="/zd/zi3/ZdicF0ZdicA8Zdic96ZdicB9.htm" class="usual">　<img src="http://www.zdic.net/zd/3s/285B9.gif" width="20"  height="20"> <span class='ef'>rì</span></a></li>
		let type = args["-l"] || options["dict-langpair"]["z"] || options.get("dict-langpair").defaultValue["z"];
		let pairs = [
			["lb", "hp"],
			["tp", "tp1"],
			["q", encodeURIComponent(args[0])]
		];
		let tp = type.slice(0, 1);
		let lb = type.slice(1);
		if (tp >=2)
			pairs[0] = [pairs[0][0], lb];
		pairs[1] = ["tp", "tp" + tp];
		let pieces = [];
		pairs.forEach(function (pair) {
				pieces.push(pair.join("="));
		});

		var req = new XMLHttpRequest();
		if (dict.suggestReq)
			dict.suggestReq.abort();
		dict.suggestReq = req;
		req.open("GET",
			"http://www.zdic.net/sousuo/ac/?"+pieces.join("&")
		);
		req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		req.setRequestHeader("Referer", "http://www.zdic.net/cy/ch/ZdicE9Zdic94ZdicA610728.htm");
		req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		req.setRequestHeader("X-Prototype-Version", "1.5.0");
		var suggestions = [];
		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					var body = dict.htmlToDom(req.responseText);
					var lis = body.querySelectorAll(".accy li");
					if (lis.length) {
						Array.forEach(lis, function (li) {
								var r = {};
								var href = li.getElementsByTagName("a")[0];
								var span = href.getElementsByTagName("span")[0];
								if (span) {
									r["e"] = span.textContent.trim();
									href.removeChild(span);
								}
								r["url"] = href.getAttribute("href");
								r["g"] = href.textContent.trim();
								r["e"] = r["e"] || r["g"];
								suggestions.push(r); // trim blank chars
						});
					}
					context.incomplete = false;
					if (suggestions.length == 0 && args[0].trim().length > 0) // TODO
						context.completions = [{url:zdic.href({keyword:args[0], type:args["-l"]}), g:args[0], e:"自动补全查询结束, 无返回结果"}];
					else
						context.completions = suggestions;
				}
			}
		};
		req.send(null);

	}

};

let youdao = {
	name: T(35),
	keyword: "",
	logo: "http://shared.ydstatic.com/r/1.0/p/dict-logo-s.png",
	favicon: "http://shared.ydstatic.com/images/favicon.ico",
	init: function(keyword, args) {
		youdao.keyword = keyword;
		var req = new XMLHttpRequest();
		dict.req = req;
		req.open("GET", youdao.href({keyword: decodeURIComponent(keyword), le: args["-l"]}));
		req.onreadystatechange = function (ev) {
			dict.ready(youdao, req);
		};
		req.send(null);
		return req;
	},
	href: function (params) {
		let keyword = encodeURIComponent(params["keyword"]);
		let le = params["le"] || options["dict-langpair"]["y"] || options.get("dict-langpair").defaultValue["y"];
		return "http://dict.youdao.com/search?q=" +
				keyword + "&le=" + le + "&tab=chn";
	},
	html: "",
	process: function(text) {
		let ret = {
			notfound: false,
			pron: false,
			def: false,
			simple: false,
			full: false,
			audio: false
		};
		let doc = dict.htmlToDom(text, "http://dict.youdao.com", true);
		let _ret = youdao._simple(doc);
		ret["audio"] = _ret["audio"] ? _ret["audio"] : ret["audio"];
		ret["pron"] = _ret["pron"] ? _ret["pron"] : ret["pron"];
		ret["def"] = _ret["def"] ? _ret["def"] : ret["def"];
		ret["notfound"] = !ret["def"];
		if (ret["pron"])
			ret["simple"] = _ret["word"] + " [" + ret["pron"] + "] " + ret["def"];
		else
			ret["simple"] = _ret["word"] + " " + ret["def"];
		ret["full"] = youdao._full(doc);
        ret["keyword"] = _ret["word"];
		return ret;
	},

	_simple: function (document) {
		var pron = document.querySelectorAll("#results .phonetic");
		var simple = {};
		simple["word"] = decodeURIComponent(youdao.keyword);
		simple["pron"] = pron.length ? pron[0].textContent.trim().replace(/^\[,?|\]$/g, "").replace(/, ,/g, ", ") : false; // @TODO: pron[0]
		var audio = document.querySelectorAll("#results .phonetic+a");
		simple["audio"] = false;
		if (audio.length) {
			let datarel = audio[0].getAttribute("data-rel"); // @TODO: audio[0]
			simple["audio"] = "http://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(datarel) + "&le=" + (dict.args["-l"] || options["dict-langpair"]["y"] || options.get("dict-langpair").defaultValue["y"]);
		}
		var def = Array.map(Array.slice(document.querySelectorAll("#phrsListTab .trans-container>ul, #results-contents #jcTrans+.trans-container, #results-contents #wordGroup>ul")), function(node) node.textContent.trim().replace(/\s*\n+\s*/g, " ")).join(' | ');
		simple["def"] = def.length ? def : false;
		return simple;
	},

	_full: function (document) {
		var full = {title: "", sub: {}};
		var simple = youdao._simple(document);
		var keyword_url = youdao.href({keyword: simple["word"], le: dict.args["-l"]});
		if (simple["pron"]) {
			full["title"] = "" + <p class="title">
			<a href={keyword_url} target="_new" highlight="URL">{simple["word"]}</a>
				<span>[{simple["pron"]}]</span>
			</p>;
		} else {
			full["title"] = "" + <p class="title">
				<a href={keyword_url} target="_blank" highlight="URL">{simple["word"]}</a>
			</p>;
		}

		var def = document.querySelectorAll("#phrsListTab .trans-container>ul, #results-contents #jcTrans+.trans-container, #results-contents #wordGroup>ul");
		if (def.length)
			full["sub"][T(8)] = dict.tidyNodes(def, "div");

		var collins = document.querySelector("#collins");
		if (collins)
			full["sub"][T(46)] = dict.tidy(collins);

		var twenty1st = document.querySelector("#tfdict");
		if (twenty1st)
			full["sub"][T(45)] = dict.tidy(twenty1st);

		var ph = document.querySelector("#wordGroup");
		if (ph)
			full["sub"][T(9)] = dict.tidy(ph);

		var syn = document.querySelector("#Synonyms");
		if (syn)
			full["sub"][T(10)] = dict.tidy(syn);

		var ex = document.querySelector("#examples");
		if (ex)
			full["sub"][T(18)] = dict.tidy(ex);

		var mor = document.querySelectorAll("#phrsListTab p");
		if (mor.length)
			full["sub"][T(13)] = dict.tidyNodes(mor, "div");

		return full;
	},

	generate: function(context, args) {
		var req = new XMLHttpRequest();
		if (dict.suggestReq)
			dict.suggestReq.abort();
		dict.suggestReq = req;
		req.open("GET",
			"http://dsuggest.ydstatic.com/suggest/suggest.s?query=" + encodeURIComponent(args[0])
		);
		var suggestions = [];
		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					var text = unescape(req.responseText);
					var result_arr = text.match(/this.txtBox.value=.+?">/g) || [];
					result_arr = result_arr.map(function(str) {
							return str.replace(/^this.txtBox.value=/, "").replace(/">$/, "");
					});
					result_arr.forEach(function(word) {
							let r = {};
							r["g"] = word;
							r["e"] = word;
							r["url"] = youdao.href({keyword: word, le: args["-l"]});
							suggestions.push(r);
					});
					context.incomplete = false;
					if (suggestions.length == 0 && args[0].trim().length > 0) // TODO
						context.completions = [{url:youdao.href({keyword:args[0], le:args["-l"]}), g:args[0], e:"自动补全查询结束, 无返回结果"}];
					else
						context.completions = suggestions;
				}
			}
		};
		req.send(null);
	}
};

let qq = {
	name: T(25),
	keyword: "",
	logo: "http://im-img.qq.com/inc/images/new_header2/logo.gif",
	favicon: "http://dict.qq.com/favicon.ico",
	init: function(keyword, args) {
		var req = new XMLHttpRequest();
		dict.req = req;
		req.open("GET", "http://dict.qq.com/dict?f=web&q="+keyword);
		req.setRequestHeader("Referer", "http://dict.qq.com/");
		req.send(null);
		req.onreadystatechange = function(ev) {
			dict.ready(qq, req);
		};
		return req;
	},

	href: function (params) {
		const QQ_PREFIX = "http://dict.qq.com/dict?f=cloudmore&q=";
		let keyword = encodeURIComponent(params['keyword']);
		return QQ_PREFIX + keyword;
	},

	process: function(text) {
		let j = JSON.parse(text);
		let ret = {
			notfound: false,
			pron: false,
			def: false,
			simple: false,
			full: false,
			audio: false
		};
		if (j["local"]) {
			let _ret = qq._simple(j);
			ret["audio"] = _ret["audio"] ? _ret["audio"] : ret["audio"];
			ret["pron"] = _ret["pron"] ? _ret["pron"] : ret["pron"];
			ret["def"] = _ret["def"] ? _ret["def"] : ret["def"];
			if (ret["pron"])
				ret["simple"] = _ret["word"] + " [" + ret["pron"] + "] " + ret["def"];
			else
				ret["simple"] = _ret["word"] + " " + ret["def"];
            ret["keyword"] = _ret["word"];
			ret["full"] = qq._full(j);
		} else
			ret["notfound"] = true;
		return ret;
	},

	_full: function(e) {
		let local = e['local'];
		let t = local[0];
		let full = {title: "", sub: {}};
		let _simple = qq._simple(e);
		let keyword_url = qq.href({"keyword":_simple["word"]});
		if (_simple["pron"]) {
			full["title"] = "" + <p class="title">
			<a href={keyword_url} target="_new" highlight="URL">{_simple["word"]}</a>
				<span>[{_simple["pron"]}]</span>
			</p>;
		} else {
			full["title"] = "" + <p class="title">
				<a href={keyword_url} target="_blank" highlight="URL">{_simple["word"]}</a>
			</p>;
		}
		if (t.des) { // Define
			let des = "";
			let gsen = [];
			if (t.sen)
				gsen = t.sen;
			t.des.forEach(function(item) {
				if (typeof item === "string") {
					let dt = "<dt><span>"+item+"</span></dt>";
					des += "<dl>"+dt+"</dl>";
				} else {
					if (item["p"]) {
						let pos = item["p"];
						let sen = qq._digIntoSen(pos, gsen);
						let dt = "<dt><span>"+item["p"]+"</span><span>"+item["d"]+"</span></dt>";
						let dds = "";
						if (sen) {
							sen.s.forEach(function(single) {
									let es = single["es"];
									let cs = single["cs"];
									dds += "<dd>"+es+"</dd>";
									dds += "<dd>"+cs+"</dd>";
							});
						}
						des += "<dl>"+dt+dds+"</dl>";
					} else {
						let dt = "<dt><span>"+item["d"]+"</span></dt>";
						des += "<dl>"+dt+"</dl>";
					}
				}
			});
			full["sub"][T(8)] = '<div class="basic">' + dict.tidyStr(des) + "</div>";
		}

		if (e.netsen) {
			let o = "";
			Array.forEach(e.netsen, function(s) {
				o += "<dl><dt>" + s.es + "</dt>" +
				 "<dd><a href=\"" + s.url + "\" highlight=\"URL\">" + s.cs + "</a></dd></dl>";
			});
			full["sub"][T(43)] = dict.tidyStr(o, "div");
		}

		if (e.dlg) {
			let o = "";
			e.dlg.forEach(function (play, idx) {
				o += "<dl><b>" + (idx + 1) + "." + play.t + play.s + "</b><dt>";
				o += "<dd style=\"padding-left:2em;\">";
				play.c.forEach(function (sen) {
					o += "<p>" + sen.n + ": " + sen.es + "</p>";
					o += "<p>&nbsp;&nbsp;&nbsp;" + sen.cs + "</p>";
				});
				o += "</dd></dl>";
			});
			full["sub"][T(44)] = dict.tidyStr(o, "div");
		}

		if (t.ph) { // Related phrases
			let ph = "";
			t.ph.forEach(function(item) {
				let href = qq.href({"keyword": item["phs"]});
				let phs = item["phs"];
				ph += "<li><a href=\"" + href + "\" highlight=\"URL\">" + phs + "</a> " + item["phd"] + "</li>";
			});
			full["sub"][T(9)] = dict.tidyStr(ph, "ol");
		}

		if (t.syn) { // Synonyms
			let syn = <></>;
			t.syn.forEach(function(item) {
				let syn_item = <></>;
				item.c.forEach(function(single) {
					let href = qq.href({"keyword": single});
					syn_item += <><a href={href} highlight="URL">{single}</a>{SPACE}</>;
				});
				syn += <>{syn_item}</>;
			});
			full["sub"][T(12)] = <p>{T(10)}{syn}</p>.toXMLString();
		}
		if (t.ant) { // Antonyms
			let ant = <></>;
			t.ant.forEach(function(item) {
				let ant_item = <></>;
				item.c.forEach(function(single) {
					let href = qq.href({"keyword": single});
					ant_item += <><a href={href} highlight="URL">{single}</a> </>;
				});
				ant += <>{ant_item}</>;
			});
			if (full["sub"][T(12)])
				full["sub"][T(12)] += <p>{T(11)}{ant}</p>;
			else
				full["sub"][T(12)] = <p>{T(11)}{ant}</p>;
		}
		if (t.mor) { // Inflected
			let mor = <></>;
			t.mor.forEach(function(item) {
                item["m"] = dict.htmlToDom(item["m"]).textContent.trim();
				let href = qq.href({"keyword": item["m"]});
				mor += <><span><b>{item["c"]}</b><a href={href} highlight="URL">{item["m"]}</a></span></>;
			});
			full["sub"][T(13)] = <p>{mor}</p>.toXMLString();
		}
		return full;
	},
	
	_simple: function(e) {
		let local = e["local"];
		let t = local[0];
		let _ret = {};
        _ret["word"] = dict.htmlToDom(t.word).textContent.trim();
        _ret["audio"] = "http://dict.youdao.com/dictvoice?audio="+encodeURIComponent(_ret["word"]);
		if (t.pho)
			_ret["pron"] = dict.htmlToDom(t.pho.join(", ")).textContent.trim();
		if (t.des) {
			_ret["def"] = [];
			t.des.forEach(function(item) {
					if (typeof(item) !== "string") {
						if (item["p"])
							_ret["def"].push(item["p"] + " " + item["d"]);
						else
							_ret["def"].push(item["d"]);
					} else {
						_ret["def"].push(item);
					}
			});
			_ret["def"] = dict.htmlToDom(_ret["def"].join(" | ")).textContent.trim();
		}
		return _ret;
	},

	_audioUri: function(str) {
		let prefix = "http://speech.dict.qq.com/audio/";
		let uri = prefix + str[0] + "/" + str[1] + "/"  +str[2] + "/" + str + ".mp3";
		return uri;
	},

	_digIntoSen: function(pos, sen) {
		for (var i = 0; i < sen.length; i++) {
			if (sen[i]["p"] == pos)
				return sen[i];
		}
		return false;
	},

	generate: function(context, args) {
		var req = new XMLHttpRequest();
		if (dict.suggestReq)
			dict.suggestReq.abort();
		dict.suggestReq = req;
		req.open("GET",
			"http://dict.qq.com/sug?" + encodeURIComponent(args[0])
		);
		req.setRequestHeader("Referer", "http://dict.qq.com/");
		var suggestions = [];
		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					var text = req.responseText.trim();
					var result_arr = text.split("\n");
					result_arr.forEach(function(line) {
							if (line.trim().length == 0)
								return false;
							let pair = line.split("\t");
							let r = {};
							r["g"] = pair[0].trim();
							r["e"] = pair[1].trim();
							r["url"] = qq.href({"keyword": pair[0].trim()});
							suggestions.push(r);
					});
					context.incomplete = false;
					if (suggestions.length == 0 && args[0].trim().length > 0)
						context.completions = [{url:qq.href({keyword:args[0]}), g:args[0], e:"自动补全查询结束, 无返回结果"}];
					else
						context.completions = suggestions;
				}
			}
		};
		req.send(null);
	},

};

let google = {
	name: T(34),
	favicon: "http://translate.google.com/favicon.ico",
	logo: "http://www.gstatic.com/translate/intl/en/logo.png",
	keyword: "",
	langpairs: "",
	_langpairs: function(langpair) {
		let langpairs = langpair.split("|");
		if (langpairs.length == 1) {
			langpairs[1] = langpairs[0] || 'auto';
			langpairs[0] = 'auto';
		} else {
			langpairs[0] = langpairs[0] || 'auto';
			langpairs[1] = langpairs[1] || 'auto';
		}
		return langpairs;
	},
	init: function(keyword, args) {
		let langpair = args["-l"] || options["dict-langpair"]["g"] || options.get("dict-langpair").defaultValue["g"];
		let langpairs = google._langpairs(langpair);
		google.langpairs = langpairs;
		var req = new XMLHttpRequest();
		dict.req = req;
		req.open("GET",
			'http://translate.google.com/translate_a/t?client=t&hl=auto&sl='+langpairs[0]+'&tl='+langpairs[1]+'&text=' + keyword
		);
		req.onreadystatechange = function(ev) {
			dict.google(req);
		};
		req.send(null);
		return req;
	},
	href: function (params) {
		let langpair = params["le"] || options["dict-langpair"]["g"] ||
			options.get("dict-langpair").defaultValue["g"];
		let langpairs = google._langpairs(langpair);
		let pairs = langpairs.concat([encodeURIComponent(params['keyword'])]);
		return "http://translate.google.cn/#" + pairs.join("|");
	},
	genSimpleOutput: function (result) {
		let desc = result[0];
		let output = '';
		var values = [];
		if (desc) {
			desc.forEach(function (parag, i) {
				values[i] = parag[0];
			});
		}
		output = values.join('\n');
		let explain = result[1];
		if (explain) {
			explain.forEach(function (kind) {
				output += '\n';
				output += kind[0] + '. ';
				let es = kind[1].filter(function(i) i.trim().length);
				output += es.join("; ");
			});
		}
		return output;
	},
	genOutput: function(result) {
		let output = "";
		let desc = result[0];
		let pairs = google.langpairs.concat([dict.keyword]);
		pairs = pairs.join("|");
		var values = [];
		if (desc) {
			desc.forEach(function (parag, i) {
				parag.forEach(function (value, j) {
						value = value.trim();
						if (!value.length)
							return false;
						if (values[j])
							values[j].push(value);
						else
							values[j] = [value];
				});
			});
			values.forEach(function (row) {
				output += "<p>" + row.join("<br/>") + "</p>";
			})
			output += '<a href="http://translate.google.com/#' + pairs + '" highlight="URL" target="_blank">...</a>';
			output = '<div style="line-height:36px;font-size:18px;">' + output + '</div>';
		}
		let explain = result[1];
		if (explain) {
			explain.forEach(function (kind) {
				output += '<p>' + kind[0] + '. ';
				let es = kind[1].filter(function(i) i.trim().length);
				output += es.join("; ");
				output += '</p>';
			});
		}

		let words = result[5];

		if (words) {
			let assoc = "";
			words.forEach(function (word) {
					// "<span highlight="Link">TEXT<span highlight="LinkInfo">TIPS</span></span>"
				if (word[2]) {
					assoc += '<span class="LinkWord" highlight="Link">'+word[2][0][0]+'<span style="white-space:nowrap;top:-1.6em;" highlight="LinkInfo">';
					assoc += word[0] + ": ";
					assoc += word[2].map(function(i) i[0]).join("; ") + "<br/>";
					assoc += '</span></span>';
				}
			});

			output += "<p>" + assoc + "</p>";
			output += '<style type="text/css">' +
					 '.LinkWord {padding:0.4em 0.2em;font-size:18px;}' +
					 '.LinkWord:hover {background-color:blue;border-radius:1ex;}' +
					 '</style>';
		}
		output = '<div style="padding:40px;line-height:24px;width:600px;white-space:normal;">' + output + '</div>';
		return output;
	}
};

let dict_cn = {
	// http://dict.cn/tools.html
	name: T(24),
	keyword: "",
	url: "",
	template: "",
	favicon: "http://dict.cn/favicon.ico",
	logo: "http://dict.cn/imgs/logo_b.png",
	init: function(keyword, args) {
		var req = new XMLHttpRequest();
		dict.req = req;
		dict_cn.keyword = keyword;
		dict_cn.url = dict_cn.href({keyword: decodeURIComponent(keyword)});
		req.open("GET",
			"http://dict.cn/"+keyword
		);
		req.onreadystatechange = function(ev) {
			dict.ready(dict_cn, req);
		};
		req.send(null);
		return req;
	},

	href: function (params) {
		const DICT_CN_PREFIX = "http://dict.cn/";
		let keyword = encodeURIComponent(params["keyword"].replace('.', '_2E'));
		return DICT_CN_PREFIX + keyword;
	},

	process: function(text) { // FIXME: kiss
		let ret = {
			notfound: true,
			pron: false,
			def: '',
			simple: false,
			full: false,
			audio: false // http://audio.dict.cn/mp3.php?q=YWVyP
		};
		let doc = dict.htmlToDom(text, 'http://dict.cn', true);
		let noword = doc.querySelectorAll('.no-word');

		if (true) {
			let _ret = dict_cn._simple(doc);
			if (_ret["pron"])
				_ret["simple"] = _ret["keyword"] + " " + _ret["pron"] + " " + _ret["def"];
			else
				_ret["simple"] = _ret["keyword"] + " " + _ret["def"];
			_ret["full"] = dict_cn._full(doc);
			_ret['notfound'] = false;
			ret = update(ret, _ret);
		}
		return ret;
	},

	_simple: function(document) {
		let simple = {pron: '', keyword: decodeURIComponent(dict_cn.keyword), audio: false, def: ''}; // @TODO: audio
		let prons = document.querySelectorAll('.yinbiao');
		if (prons.length) {
			var pron_raws = [];
			Array.forEach(prons, function(pron) {
				pron_raws.push(pron.textContent.trim());
			});
			simple['pron'] = pron_raws.join(' ');
		}

		let def = document.querySelector('.cont-one:first-of-type');
		if (def) {
			simple['def'] = def.textContent.trim();
		}
		return simple;
	},

	// 解析单词词形变化
	_word_transform: function(document) {
		let transforms = document.querySelectorAll('#word-transform .w-change a');
		if (transforms.length) {
			let output = "<p class=\"title\">";
			output += T(13) + " :";
			Array.forEach(transforms, function(t) {
					output += "<span><span>" + t.getAttribute('desc') + "</span> <span><a href=\"" + dict_cn.href({keyword: t.textContent}) + "\">" + t.textContent + "</a></span></span>";
			});
			output +="</p>";
			return output;
		} else {
			let word_change = document.querySelector('#word-transform .w-change');
			if (word_change) {
				let wc = word_change.textContent.trim();
				if (wc)
					return "<p class=\"title\">" + wc + "</p>";
			}
			return '';
		}
	},

	_full: function(document) {
		var full = {title: "", sub: {}};
		var simple = dict_cn._simple(document);
		var keyword_url = dict_cn.href({keyword: simple["keyword"]});
		if (simple["pron"]) {
			full["title"] = "" + <p class="title">
			<a href={keyword_url} target="_new" highlight="URL">{simple["keyword"]}</a>
				<span>{simple["pron"]}</span><span>{simple["def"]}</span>
			</p>;
		} else {
			full["title"] = "" + <p class="title">
				<a href={keyword_url} target="_blank" highlight="URL">{simple["keyword"]}</a>
				<span>{simple["def"]}</span>
				</p>;
		}

		let transforms = dict_cn._word_transform(document);
		if (transforms) {
			full["title"] += transforms;
			full["title"] = "<div>" + dict.tidyStr(full["title"]) + "</div>";
		}

		let titles = document.querySelectorAll('.tab h6 span');
		let contents = document.querySelectorAll('.tab .tabcontent');

		Array.forEach(titles, function(title, idx) {
			if (contents[idx]) {
				let pieces = contents[idx].querySelectorAll('.cont-one');
				if (pieces.length) {
					let t = title.textContent.trim();
					full["sub"][t] = dict.tidyNodes(pieces, 'div');
				}
			}
		});
		return full;
	},

	generate: function(context, args) {
		let req = new XMLHttpRequest();
		if (dict.suggestReq)
			dict.suggestReq.abort();
		dict.suggestReq = req;
		req.open("GET",
			"http://dict.cn/apis/suggestion.php?callback=hook&dict=dict&q=" + encodeURIComponent(args[0])
		);
		let suggestions = [];
		req.onreadystatechange = function () {
			if (req.readyState == 4) {
				if (req.status == 200) {
					try {
						let sb = new Components.utils.Sandbox("http://www.example.com/");
						sb.hook = function() arguments[0];
						let result_arr = Components.utils.evalInSandbox(req.responseText, sb);
						result_arr["s"].forEach(function (r) {
							r["e"] = dict.htmlToDom(r["e"].trim()).textContent;
							r["g"] = r["g"].trim();
							r["url"] = dict_cn.href({keyword: r["g"]});
							suggestions.push(r);
						});
					} finally {
						context.incomplete = false;
						if (suggestions.length == 0 && args[0].trim().length > 0) // TODO
							context.completions = [{url:dict_cn.href({keyword:args[0]}), g:args[0], e:"自动补全查询结束, 无返回结果"}];
						else
							context.completions = suggestions;
					}
				} else {
					if (req.status == 404) {
						// 辞海的自动补全需要 cookie
						// 因此我们对dict.cn请求一次
						var xhr = new XMLHttpRequest();
						xhr.open("GET", "http://en.dict.cn/api/article/hotwords");
						xhr.onreadystatechange = function () {
							if (xhr.readyState == 4) {
								if (xhr.status !== 200)
									dict_cn._fix();
								dict_cn.generate(context, args);
							}
						};
						xhr.send(null);
					}
				}
			}
		};
		req.send(null);
	},

	_fix: function () {
		var cookieUri = services.io.newURI("http://dict.cn", null, null);

		// check 'dictsid' cookie whether exists
		var cookie = services.cookies.getCookieString(cookieUri, null) || "";

		var hasDictsid = cookie.split("; ").some(function (item) {
			var parts = item.split("=");

			if (parts.length == 2 && parts[0] == "dictsid")
				return true;

			return false;
		});

		// if not exists, then create it
		if (!hasDictsid) {
			var expireDate = new Date();
			expireDate.setMonth(expireDate.getMonth() + 1);
			var cookieString = "dictsid=0;domain=.dict.cn;expires=" + expireDate.toUTCString();
			services.cookies.setCookieString(cookieUri, null, cookieString, null);
		}
	}
}

let dict = {
	engines: {"d" : dict_cn, "g" : google, "q": qq, "y": youdao, "z": zdic, "w": wikipedia},
	get DBConn() {
		if (dict._DBConn)
			return dict._DBConn;
		// https://developer.mozilla.org/En/Storage
		Components.utils.import("resource://gre/modules/Services.jsm");
		Components.utils.import("resource://gre/modules/FileUtils.jsm");

		let file = FileUtils.getFile("ProfD", ["dict.js.sqlite"]);
		let DBConn = Services.storage.openDatabase(file); // Will also create the file
		//
		// id, key, engine, word, lp, simple, all, create_time, frequency
		let dict_js = "id            INTEGER PRIMARY KEY, " +
					  "key           TEXT NOT NULL DEFAULT '{}', " +
					  "engine        TEXT NOT NULL DEFAULT 'd', " +
					  "word          TEXT NOT NULL DEFAULT '', " +
					  "lp            TEXT DEFAULT '', " +
					  "simple        TEXT DEFAULT '', " +
					  "ret           TEXT DEFAULT '', " +
					  "create_time   INTEGER DEFAULT 0, " +
					  "frequency     INTEGER DEFAULT 1";
		try {
			DBConn.createTable("dict_js", dict_js);
			DBConn.executeSimpleSQL('CREATE  INDEX "main"."search" ON "dict_js" ("key" ASC, "engine" ASC, "word" ASC, "lp" ASC)');
			dict._DBConn = DBConn;
			return dict._DBConn;
		} catch (e) { // Table already exists or the requested table couldn't be created.
			// dactyl.echoerr(e.message); // do nth
		}
		dict._DBConn = DBConn;
		return dict._DBConn;
	},
	fl: [ // From:
		["auto", "Auto Detect language"],
		["en", "English"],
		["zh", "Chinese"],
		["zh-CN", "Chinese (Simplified)"],
		["zh-TW", "Chinese (Traditional)"],
		["ja", "Japanese"],
		["ko", "Korean"],
		["af", "Afrikaans"],
		["sq", "Albanian"],
		["ar", "Arabic"],
		["hy", "Armenian"],
		["az", "Azerbaijani"],
		["eu", "Basque"],
		["be", "Belarusian"],
		["bn", "Bengali"],
		["bg", "Bulgarian"],
		["ca", "Catalan"],
		["hr", "Croatian"],
		["cs", "Czech"],
		["da", "Danish"],
		["nl", "Dutch"],
		["eo", "Esperanto"],
		["et", "Estonian"],
		["tl", "Filipino"],
		["fi", "Finnish"],
		["fr", "French"],
		["gl", "Galician"],
		["ka", "Georgian"],
		["de", "German"],
		["el", "Greek"],
		["gu", "Gujarati"],
		["ht", "Haitian Creole"],
		["iw", "Hebrew"],
		["hi", "Hindi"],
		["hu", "Hungarian"],
		["is", "Icelandic"],
		["id", "Indonesian"],
		["ga", "Irish"],
		["it", "Italian"],
		["kn", "Kannada"],
		["la", "Latin"],
		["lv", "Latvian"],
		["lt", "Lithuanian"],
		["mk", "Macedonian"],
		["ms", "Malay"],
		["mt", "Maltese"],
		["no", "Norwegian"],
		["fa", "Persian"],
		["pl", "Polish"],
		["pt", "Portuguese"],
		["ro", "Romanian"],
		["ru", "Russian"],
		["sr", "Serbian"],
		["sk", "Slovak"],
		["sl", "Slovenian"],
		["es", "Spanish"],
		["sw", "Swahili"],
		["sv", "Swedish"],
		["ta", "Tamil"],
		["te", "Telugu"],
		["th", "Thai"],
		["tr", "Turkish"],
		["uk", "Ukrainian"],
		["ur", "Urdu"],
		["vi", "Vietnamese"],
		["cy", "Welsh"],
		["yi", "Yiddish"]
	],
	tl: [ // To:
		["en", "English"],
		["zh", "Chinese"],
		["zh-CN", "Chinese (Simplified)"],
		["zh-TW", "Chinese (Traditional)"],
		["ja", "Japanese"],
		["ko", "Korean"],
		["af", "Afrikaans"],
		["sq", "Albanian"],
		["ar", "Arabic"],
		["hy", "Armenian"],
		["az", "Azerbaijani"],
		["eu", "Basque"],
		["be", "Belarusian"],
		["bn", "Bengali"],
		["bg", "Bulgarian"],
		["ca", "Catalan"],
		["hr", "Croatian"],
		["cs", "Czech"],
		["da", "Danish"],
		["nl", "Dutch"],
		["eo", "Esperanto"],
		["et", "Estonian"],
		["tl", "Filipino"],
		["fi", "Finnish"],
		["fr", "French"],
		["gl", "Galician"],
		["ka", "Georgian"],
		["de", "German"],
		["el", "Greek"],
		["gu", "Gujarati"],
		["ht", "Haitian Creole"],
		["iw", "Hebrew"],
		["hi", "Hindi"],
		["hu", "Hungarian"],
		["is", "Icelandic"],
		["id", "Indonesian"],
		["ga", "Irish"],
		["it", "Italian"],
		["kn", "Kannada"],
		["la", "Latin"],
		["lv", "Latvian"],
		["lt", "Lithuanian"],
		["mk", "Macedonian"],
		["ms", "Malay"],
		["mt", "Maltese"],
		["no", "Norwegian"],
		["fa", "Persian"],
		["pl", "Polish"],
		["pt", "Portuguese"],
		["ro", "Romanian"],
		["ru", "Russian"],
		["sr", "Serbian"],
		["sk", "Slovak"],
		["sl", "Slovenian"],
		["es", "Spanish"],
		["sw", "Swahili"],
		["sv", "Swedish"],
		["ta", "Tamil"],
		["te", "Telugu"],
		["th", "Thai"],
		["tr", "Turkish"],
		["uk", "Ukrainian"],
		["ur", "Urdu"],
		["vi", "Vietnamese"],
		["cy", "Welsh"],
		["yi", "Yiddish"]
	],
	languages: [
		["zh", "Chinese"],
		["zh-CN", "Chinese Simplified"],
		["zh-TW", "Chinese Traditional"],
		["ja", "Japanese"],
		["ko", "Korean"],
		["en", "English"],
		["af", "Afrikaans"],
		["sq", "Albanian"],
		["am", "Amharic"],
		["ar", "Arabic"],
		["hy", "Armenian"],
		["az", "Azerbaijani"],
		["eu", "Basque"],
		["be", "Belarusian"],
		["bn", "Bengali"],
		["bh", "Bihari"],
		["br", "Breton"],
		["bg", "Bulgarian"],
		["my", "Burmese"],
		["ca", "Catalan"],
		["chr", "Cherokee"],
		["co", "Corsican"],
		["hr", "Croatian"],
		["cs", "Czech"],
		["da", "Danish"],
		["dv", "Dhivehi"],
		["nl", "Dutch"],
		["eo", "Esperanto"],
		["et", "Estonian"],
		["fo", "Faroese"],
		["tl", "Filipino"],
		["fi", "Finnish"],
		["fr", "French"],
		["fy", "Frisian"],
		["gl", "Galician"],
		["ka", "Georgian"],
		["de", "German"],
		["el", "Greek"],
		["gu", "Gujarati"],
		["ht", "Haitian Creole"],
		["iw", "Hebrew"],
		["hi", "Hindi"],
		["hu", "Hungarian"],
		["is", "Icelandic"],
		["id", "Indonesian"],
		["iu", "Inuktitut"],
		["ga", "Irish"],
		["it", "Italian"],
		["jw", "Javanese"],
		["kn", "Kannada"],
		["kk", "Kazakh"],
		["km", "Khmer"],
		["ku", "Kurdish"],
		["ky", "Kyrgyz"],
		["lo", "Lao"],
		["la", "Latin"],
		["lv", "Latvian"],
		["lt", "Lithuanian"],
		["lb", "Luxembourgish"],
		["mk", "Macedonian"],
		["ms", "Malay"],
		["ml", "Malayalam"],
		["mt", "Maltese"],
		["mi", "Maori"],
		["mr", "Marathi"],
		["mn", "Mongolian"],
		["ne", "Nepali"],
		["no", "Norwegian"],
		["oc", "Occitan"],
		["or", "Oriya"],
		["ps", "Pashto"],
		["fa", "Persian"],
		["pl", "Polish"],
		["pt", "Portuguese"],
		["pt-PT", "Portuguese Portugal"],
		["pa", "Ppnjabi"],
		["qu", "Qpechua"],
		["ro", "Rpmanian"],
		["ru", "Rpssian"],
		["sa", "Sanskrit"],
		["gd", "Scots Gaelic"],
		["sr", "Serbian"],
		["sd", "Sindhi"],
		["si", "Sinhalese"],
		["sk", "Slovak"],
		["sl", "Slovenian"],
		["es", "Spanish"],
		["su", "Sundanese"],
		["sw", "Swahili"],
		["sv", "Swedish"],
		["syr", "Syriac"],
		["tg", "Tajik"],
		["ta", "Tamil"],
		["tt", "Tatar"],
		["te", "Telugu"],
		["th", "Thai"],
		["bo", "Tibetan"],
		["to", "Tonga"],
		["tr", "Turkish"],
		["uk", "Ukrainian"],
		["ur", "Urdu"],
		["uz", "Uzbek"],
		["ug", "Uighur"],
		["vi", "Vietnamese"],
		["cy", "Welsh"],
		["yi", "Yiddish"],
		["yo", "Yoruba"],
		["", "Unknown"]
	],
	get req() dict._req || null,
	set req(req) {
		if (dict.req)
			dict.req.abort();
		dict._req = req;

		// show progressing
		var self = this;
		var p = document.getElementById('statusbar-display');
		req.addEventListener('loadstart', function(evt) {
			if (self.timeoutid) {
				window.clearTimeout(self.timeoutid);
				delete self.timeoutid;
			}
			self.timeoutid = window.setTimeout(function() {
					p.label = T(6);
					self.intervalid = window.setInterval(function() {p.label = T(6);}, 400);
					delete self.timeoutid;
				},
				400);
		},
		false);
		["load", "error", "abort"].forEach(function(st) { // loadend
			req.addEventListener(st, function(evt) {
				if (self.timeoutid) {
					window.clearTimeout(self.timeoutid);
					delete self.timeoutid;
				} else {
					p.label = "";
					window.clearInterval(self.intervalid);
					delete self.intervalid;
				}
			},
			false);
		});
	},
	get langpairs()  {
		if (!dict._langpairs) {
			let cpt = [];
			for (let [, [inabbr, inlang]] in Iterator(dict.tl))
				cpt.push([inabbr, T(2) + dict.fl[0][1] + T(3) + inlang]);
			for (let [, [abbr, lang]] in Iterator(dict.fl)) {
				for (let [, [inabbr, inlang]] in Iterator(dict.tl)) {
					if (abbr == inabbr)
						continue;
					cpt.push([abbr+"|"+inabbr, T(2) + lang + T(3) + inlang]);
				}
			}
			for (let [, [inabbr, inlang]] in Iterator(dict.tl))
				cpt.push(["|" + inabbr, T(2) + dict.fl[0][1] + T(3) + inlang]);
			dict._langpairs = cpt;
		}
		return dict._langpairs;
	},
	set langpairs(langpairs) {
		dict._langpairs = langpairs;
	},
	get keyword() dict._keyword,
	set keyword(keyword) {
		dict._keyword = encodeURIComponent(keyword.trim());
	},

	get timeout() dict._timeout || null,
	set timeout(timeout) {
		if (dict.timeout)
			dict.timeout.cancel();
		dict._timeout = timeout;
	},

	get engine() dict.engines[dict._route(dict.args)],
	args: {},
	init: function(args) {
		if (args["-h"] && args["-h"]=="clear") {
			let clearWord = args[0] || "";
			if (clearWord.trim().length == 0) {
				commandline.input("你确定要删除所有记录吗 (y/n) ? : ", function (word) {
					if (word == "y" || word == "Y")
						dict.clearCache(args);
				})
			} else
				dict.clearCache(args);
			return true;
		}
		dict.args = args;
		let keyword = args[0] || "";
		keyword = keyword.trim();
		if (keyword.length == 0)
			keyword = dict._selection() || "";
		keyword = keyword.trim();
		let engine = dict._route();
		let lp = args["-l"] || options["dict-langpair"][engine] || options.get("dict-langpair").defaultValue[engine] || "";

		let opener = false;
		if (args["-t"])
			opener = {where:dactyl.CURRENT_TAB};
		if (dactyl.forceTarget)
			opener = {where:dactyl.forceTarget};
		if (dactyl.forceBackground)
			opener = {background:true, where:dactyl.NEW_TAB};
		if (keyword.length == 0) {
			CommandPromptMode(T(4), update({onSubmit: function(keyword) {
					var keyword = keyword.trim();
					if (!keyword)
						return false;
					dict.keyword = keyword;
					if (opener)
						return dactyl.open(dict.engine.href({keyword:decodeURIComponent(dict.keyword), le: args["-l"], type: args["-l"]}), opener);

					let key = dict.generateKey(keyword, engine, lp || "");
					let ret = dict.getCache(key);
					if (ret)
						dict.process(ret);
					else {
						dict.cacheKey = key;
						dict.engine.init(dict.keyword, args);
					}
				}},
				{
					completer: function (context/*, args*/) { // todo
						args[0] = commandline.command;
						if (args[0] && args[0] !== "-")
							dict.suggest(context, args);
						context.fork("words_history", 0, this, function (context) dict.cacheSuggest(context, args));
					},
					historyKey: 'dict.js'
				}
			)).open(options["dict-clipboard"] ? dactyl.clipboardRead() : "");
		} else {
			dict.keyword = keyword;
			if (opener)
				return dactyl.open(dict.engine.href({keyword:decodeURIComponent(dict.keyword), le: args["-l"], type: args["-l"]}), opener);
			let key = dict.generateKey(keyword, engine, lp||"");
			let ret = dict.getCache(key);
			if (ret)
				dict.process(ret);
			else {
				dict.cacheKey = key;
				dict.engine.init(dict.keyword, args);
			}
		}
	},

	getCache: function (key) { // 保存声音?
		var updateStatement = dict.DBConn.createStatement("UPDATE dict_js SET frequency=frequency+1 WHERE KEY = :key");
		updateStatement.params.key = key;
		updateStatement.execute();
		let statement = dict.DBConn.createStatement("SELECT ret FROM dict_js WHERE key = :key ORDER BY frequency DESC, create_time DESC");
		statement.params.key = key;
		var ret = false
		while (statement.executeStep())
			ret = JSON.parse(statement.row.ret);
		return ret;
	},

	storeCache: function(ret) {
		let _arguments = JSON.parse(dict.cacheKey);
		let create_time = (new Date()).getTime();
		let _ret = JSON.stringify(ret);
		var statement = dict.DBConn.createStatement(
			"INSERT INTO dict_JS " +
			"(key, word, engine, lp, simple, ret, create_time) " +
			"VALUES (:key, :word, :engine, :lp, :simple, :ret, :create_time)"
		);
		statement.params.key = dict.cacheKey;
		statement.params.word = _arguments[0];
		statement.params.engine = _arguments[1];
		statement.params.lp = _arguments[2];
		statement.params.simple = ret["simple"];
		statement.params.ret = _ret;
		statement.params.create_time = create_time;

		statement.execute();
	},

	clearCache: function(/*args*/) {
		let args = arguments[0];
		let word = args[0] || "";
		if (word.length == 0) {
			dict.DBConn.executeSimpleSQL("DELETE FROM dict_js");
			dactyl.echo("All words has been clear out!");
		} else {
			let engine = args["-e"] || options["dict-engine"] || options.get("dict-engine").defaultValue;
			let lp = args["-l"] || options["dict-langpair"][engine] || options.get("dict-langpair").defaultValue[engine] || "";
			var statement = dict.DBConn.createStatement(
				"DELETE FROM dict_JS " +
				"WHERE word = :word AND engine = :engine AND lp = :lp"
			);
			statement.params.word = word;
			statement.params.engine = engine;
			statement.params.lp = lp;
			statement.executeAsync({
					handleResult: function(aResultSet) {
						; // do nth
					},

					handleError: function(aError) {
						print("Error: " + aError.message);
					},

					handleCompletion: function(aReason) {
						if (aReason != Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED)
							print("Query canceled or aborted!");
						else
							dactyl.echo('"' + word + "\" has been removed!");
					}
			});

		}
	},

	cacheSuggest: function (context, args) {
		// TODO item.command/item.id ??? invalid???
		var url = function(item, text)
		<a xmlns:dactyl={NS} identifier={item.id || ""} dactyl:command={item.command || ""}
		href={item.item.url} highlight="URL">{text || ""}</a>;
		context.title = ["Words from history!"];
		context.keys = {"text":"word", "description":"desc"};
		context.process[1] = url;
		context.filterFunc = null;
		context.filter = (args[0] || "").trim();
		context.compare = null;
		context.key = encodeURIComponent((args[0]||"_NULL").trim());
		if (!context.itemCache[context.key]) {
			context.updateAsync = true;
			context.incomplete = true;
			context.regenerate = true;
		}
		context.generate = function () {
			let e = dict._route(args);
			let lp = args["-l"] || options["dict-langpair"][e] || options.get("dict-langpair").defaultValue[e] || "";
			dict.cacheGenerate((args[0] || "").trim(), e, lp, context);
		};
	},

	cacheGenerate: function(word, engine, lp, context) {
		var engineObj = dict.engines[engine];
		var statement = dict.DBConn.createStatement("SELECT word,simple FROM dict_js WHERE engine = :engine AND lp = :lp AND word LIKE :word ORDER BY frequency DESC, create_time DESC LIMIT 15");
		statement.params.engine=engine;
		statement.params.lp=lp;
		statement.params.word = word+"%";
		var completions = [];
		statement.executeAsync({
				handleResult: function(aResultSet) {
					for (let row = aResultSet.getNextRow();
						row;
						row = aResultSet.getNextRow()) {
						let word = row.getResultByName('word');
						let url = engineObj.href({keyword:word, le: lp, type: lp})
						let desc = row.getResultByName('simple');
						if (desc.trim().length==0)
							continue;
						completions.push({word:word, desc:desc, url:url});
					}
				},

				handleError: function(aError) {
					print("Error: " + aError.message);
				},

				handleCompletion: function(aReason) {
					if (aReason != Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED)
						print("Query canceled or aborted!");
					context.incomplete = false;
					context.completions = completions;
					context.regenerate = false;
				}
		});
	},

	process: function(ret) {
		// audio
		if (ret["audio"])
			dict._play(ret["audio"]);
		else {
			if (/^[\u0001-\u00ff']+$/.test(decodeURIComponent(dict.keyword))) { // 0-255, 全半角标点?
				// var uri = "http://translate.google.com/translate_tts?q=" + dict.keyword; // FIXME: 当keyword过长时，应该分词
				// http://dict.youdao.com/dictvoice?audio=you_are_welcome&le=en
				var uri = "http://dict.youdao.com/dictvoice?audio=" + dict.keyword; // TODO: support langpair
				dict._play(uri);
			} else {
				var req = new XMLHttpRequest();
				req.open("GET",
					'http://translate.google.com/translate_a/t?client=t&hl=auto&sl=auto&tl=en&text=' + dict.keyword
				);
				req.onreadystatechange = function (ev) {
					if (req.readyState == 4) {
						if (req.status == 200) {
							let sb = new Components.utils.Sandbox("http://www.example.com/");
							let g = Components.utils.evalInSandbox(req.responseText, sb);
							let le = g[8][0][0];
							dict.speak(dict.getSoundUriByLocaleKeyword(le, decodeURIComponent(dict.keyword)));
						}
					}
				};
				req.send(null);
			}
		}

		if (ret["notfound"]) {
			dactyl.echo(T(19) + decodeURIComponent(dict.keyword), commandline.FORCE_SINGLELINE);
			dict.timeout = dactyl.timeout(ex.redraw, 3000);
		} else {
			var show = options.get("dict-show").value;
			if (dict.args["-o"])
				show = dict.args["-o"];
			switch ( show ) {
				case "s" :
				var invert = options.get("dict-simple").value;
				if (dict.args.bang)
					invert = !invert;
				if (invert) {
					dactyl.echomsg(ret["simple"], 0, commandline.FORCE_SINGLELINE);
					dict.timeout = dactyl.timeout(ex.redraw, 15000); // TODO: clickable, styling
				} else {
					ret["full"]["title"] = new XML(ret["full"]["title"]);
					for (var prop in ret["full"]["sub"]) {
						ret["full"]["sub"][prop] = new XML("<r>"+ret["full"]["sub"][prop]+"</r>");
					}

					var list = dict.details(ret);
					dactyl.echo(<>{STYLE}<div class="dict_block" id={"dict_js_"+(dict.args["-e"] || options["dict-engine"] || options.get("dict-engine").defaultValue)}>{list}</div></>, commandline.FORCE_MULTILINE);
					// dactyl.echomsg(ret["full"]); // commandline.FORCE_MULTILINE
				}
				break;

				case "a":
				dict._alert(ret);
				break;

				case "n":
				dict._notification(ret);
				break;

				default:
				break;
			}
		}
	},

	details: function(ret) {
		let sub = ret["full"]["sub"];
		let title = ret["full"]["title"];
		let items = <><div class="title">{title}</div></>;
		let first = true;
		for ( var prop in sub ) {
			var e = sub[prop];
			items += <><div><h4 style="margin-left:1em;">{prop}</h4><div style="margin-left:3em;">{sub[prop]}</div></div></>;
		}
		return <div>{items}</div>;
	},

	ready: function(worker, req) {
		if (req.readyState == 4) {
			let ret = {};
			if (req.status == 200) {
				ret = worker.process(req.responseText);
				if (!ret.notfound)
					dict.storeCache(ret);
				dict.process(ret);
			} else
				dict.error(req.status);
			req.onreadystatechange = function() {};
		}
	},

	google: function(req) {
		if (req.readyState == 4) {
			if (req.status == 200) {
				let sb = new Components.utils.Sandbox("http://www.example.com/");
				let g = Components.utils.evalInSandbox(req.responseText, sb);
				let show = options.get("dict-show").value || options.get("dict-show").defaultValue;
				if (dict.args["-o"])
					show = dict.args["-o"];

				let pairs = google.langpairs.concat([dict.keyword]);
				pairs = pairs.join("|");

				switch (show) {
					case "s":
					dactyl.echo(new XML(google.genOutput(g)));
					if (!mow.visible)
						dict.timeout = dactyl.timeout(ex.redraw, 10000);
					break;

					case "a":
					PopupNotifications.show(gBrowser.selectedBrowser, "dict-popup",
						google.genSimpleOutput(g),
						"dict-popup-anchor", /* anchor ID */
						{
							label: T(5),
							accessKey: "S",
							callback: function() {
								dactyl.open("http://translate.google.com/#" + pairs , {background:false, where:dactyl.NEW_TAB});
							}
						},
						null,  /* secondary action */
						{
							timeout: Date.now() + 15000
						}
					);
					ex.style('chrome://* .popup-notification-icon[popupid="dict-popup"] { background:transparent url("'+dict.engine.logo+'") no-repeat left top;background-size:contain contain;}');
					break;

					case "n":
					let notify = Components.classes['@mozilla.org/alerts-service;1'].getService(Components.interfaces.nsIAlertsService);
					let listener = {
						observe: function(subject, topic, data) {
							if (topic == "alertclickcallback")
								dactyl.open(data, {background:true, where:dactyl.NEW_TAB});
						}
					};
					let title = T(34);
					notify.showAlertNotification(null, title, google.genSimpleOutput(g), true, 'http://translate.google.com/#' + pairs, listener, "dict-js-popup");
					break;

					default:
					break;
				}
				// tts
				if (/^[\u0001-\u00ff']+$/.test(decodeURIComponent(dict.keyword))) { // 0-255
					var uri = "http://dict.youdao.com/dictvoice?audio=" + dict.keyword; // TODO: support langpair
					dict._play(uri);
				} else {
					let le = g[8][0][0];
					var uri = "";
					if (["en", "fr", "ko", "ja"].indexOf(le) + 1) {
						le = ["eng","fr", "ko", "jap"][["en", "fr", "ko", "ja"].indexOf(le)];
						uri = "http://dict.youdao.com/dictvoice?audio="+dict.keyword+"&le="+le;
					} else
						uri = "http://translate.google.com/translate_tts?ie=UTF-8&q="+dict.keyword+"&tl="+le+"&prev=input";
					dict._play(uri);
				}
			} else
				dict.error(req.status);
			req.onreadystatechange = function() {};
		}
	},

	suggest: function(context, args) {
		let engine = dict.engines[dict._route(args)];

		var url = function(item, text)
		<a xmlns:dactyl={NS} title={text||""} identifier={item.id || ""} dactyl:command={item.command || ""}
		href={item.item.url} highlight="URL">{text || ""}</a>;

		context.title = [T(14) + " - " + engine.name,T(15)];
		context.keys = {"text":"g", "description":"e"};
		context.compare = null;
		context.filterFunc = null;
		context.process[1] = url;
		let dash_e = args["-e"] || options.get("dict-engine").value || options.get("dict-engine").defaultValue;
		let dash_l = "1024"; // 没实际用处,降低 context.key 意外相等的可能性
		if ("yz".indexOf(dash_e) + 1)
			dash_l += args["-l"] || options["dict-langpair"][dash_e] || options.get("dict-langpair").defaultValue[dash_e];
		context.key = encodeURIComponent(dash_e+dash_l+args[0].trim()); // TODO
		if (!context.itemCache[context.key] || context.itemCache[context.key].length == 0) {
			context.updateAsync = true;
			context.incomplete = true;
			context.regenerate = true;
		}

		if (!engine.generate)
			engine = dict_cn;
		context.generate = function () engine.generate(context, args);

		/*context.fork("words_buffer", 0, this, function (context) {
				 var keyword = args.join(" ").trim();
				 if (keyword.length < 3)
					 return;
				 var words = content.document.body.textContent.split(/\:|\"|\[|\]|\.|,|\s|\t|\n/).filter(function(i) {
						 return i.length >= 3 && /^[\-\.a-zA-Z]+$/.test(i);
				 }).map(function(i) {
						 return i.toLowerCase().replace(/^\.|\.$/g, "");
				 }).filter(function(i, index, allwords) {
						 return (allwords.indexOf(i) == index) && (i.indexOf(keyword.toLowerCase()) > -1);
				 });
				 var completions = [];
				 words.forEach(function(r) {
						 completions.push([r]);
				 });
				 context.title = ["Words from current buffer!"];
				 context.completions = completions;
		});*/
	},

	generateKey: function () JSON.stringify(Array.slice(arguments)), // keyword, engine, langpair

	optsCompleter: function(context, extra) {
		context.quote = ["", util.identity, ""];
		context.compare = null;
		let youdao_completions = [
			['eng', T(36)],
			['jap', T(39)],
			['ko', T(38)],
			['fr', T(37)]
		];
		let zdic_completions = [
			["1hp", '条目 - 请直接输入汉字或词语进行查询，支持拼音查询，例：“han”;“han4”;“han yu”;“han4 yu3”'],
			["2hp", "字典 - 汉字或拼音 - 康 => 康 | xing => 星,形,醒幸"],
			["2bis", "字典 - 笔顺    - 12345 =>李,札,权,杨"],
			["2wb86", "字典 - 五笔86编码 - iwz => 举,兴"],
			["2cj", "字典 - 仓颉编码 - aa => 昌,晶"],
			["2fc", "字典 - 四角号码 - 1010 => 三,丕,二,互"],
			["2uno", "字典 - unicode - 4e0 => 一,丁,七"],
			["3mh", "词典 - 模糊搜索 中? => 中文,中秋节,中华人民共和国"],
			["3jq", "词典 - 精确搜索 中? => 中庸,中学,中央"],
			["4mh", "成语 - 模糊搜索 ?月 => 月朗星稀 月下老人"],
			["4jq", "成语 - 精确搜索 ?一?二 => 一石二鸟 独一无二"]
		];
		switch (extra.key) {
			case 'y':
			context.fork("youdao_le", 0, this, function(context) {
					context.title = [T(16) + " - " + T(35), T(1)];
					context.completions = youdao_completions;
			});
			break;

			case 'd':
			case 'q':
			case 'w':
			context.completions = [];
			break;

			case 'g':
			context.fork("dict_langpairs", 0, this, function (context) {
					context.title = [T(16) + " - " + T(34), T(1)];
					context.completions = dict.langpairs;
			});
			break;

			case 'z':
			context.fork("zdic_type", 0, this, function (context) {
					context.title = [T(16) + " - " + T(41), T(1)];
					context.completions = zdic_completions;
			});
			break;

			default :
			context.fork("youdao_le", 0, this, function(context) {
					context.title = [T(16) + " - " + T(35), T(1)];
					context.completions = youdao_completions;
			});
			context.fork("zdic_type", 0, this, function (context) {
					context.title = [T(16) + " - " + T(41), T(1)];
					context.completions = zdic_completions;
			});
			context.fork("dict_langpairs", 0, this, function (context) {
					context.title = [T(16) + " - " + T(34), T(1)];
					context.completions = dict.langpairs;
			});
			context.completions = [];
			break;
		}
	},

	error: function (code) {

	},

	_route: function (/*args*/) {
		let args = arguments[0] || dict.args;
		let lang = args["-l"] || "";
		let engine = args["-e"] || options["dict-engine"] || options.get("dict-engine").defaultValue;
		switch (lang) {
			case "jap":
			case "eng":
			case "fr":
			case "ko":
			engine = "y"; // youdao
			break;

			case "1hp":
			case "2hp":
			case "2bis":
			case "2wb86":
			case "2cj":
			case "2fc":
			case "2uno":
			case "3mh":
			case "3jq":
			case "4mh":
			case "4jq":
			engine = "z";
			break;

			case "":
			break;

			default:
			engine = "g";
			break;
		}
		return engine;
	},

	speak: function(uri) {
		if (config.OS.isWindows) {
			var dict_sound = document.getElementById("dict-sound");
			if (!dict_sound) {
				var dict_sound = util.xmlToDom(<embed id="dict-sound" src="" autostart="false" type="application/x-mplayer2" hidden="true" height="0" width="0" enablejavascript="true" xmlns={XHTML}/>, document);
				var addonbar = document.getElementById("addon-bar");
				addonbar.appendChild(dict_sound);
			}
			dict_sound.setAttribute("src", uri);
			dict_sound.setAttribute("src", uri);
			if (dict_sound.Play)
				dict_sound.Play();
			else {
				setTimeout(function () dict_sound.controls.play(), 1000);
				dict_sound.controls.play();
			}
			
		} else {
			var value= "http://www.strangecube.com/audioplay/online/audioplay.swf?file="+encodeURIComponent(uri)+"&auto=yes&sendstop=yes&repeat=1&buttondir=http://www.strangecube.com/audioplay/online/alpha_buttons/negative&bgcolor=0xffffff&mode=playstop";

			var dict_sound = document.getElementById("dict-sound");
			if (!dict_sound) {
				dict_sound = util.xmlToDom(<embed id="dict-sound" src={value} quality="high" wmode="transparent" width="0" height="0" align="" hidden="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" allowScriptAccess="always" xmlns={XHTML}/>, document);
				var addonbar = document.getElementById("addon-bar");
				addonbar.appendChild(dict_sound);
			}
			dict_sound.setAttribute("src", value);
			setTimeout(function () dict_sound.playMusic(), 1000);
		}
	},

	_play: function(uri) {
		if (!options["dict-hasaudio"])
			return false;
		dict.speak(uri);
	},

	_eolToSpace: function(str) {
		return str.replace(/\n/g, " | ").replace(/\s+/g, " ");
	},

	_pipelineToBr: function(str) {
		return str.replace(/\s\|\s/g, "\n");
	},

	_notification: function(ret/*, url*/) {
		// https://developer.mozilla.org/en/XPCOM_Interface_Reference/nsIAlertsService
		let notify = Components.classes['@mozilla.org/alerts-service;1'].getService(Components.interfaces.nsIAlertsService)
		let listener = {
			observe: function(subject, topic, data) {
				if (topic == "alertclickcallback")
					dactyl.open(data, {background:true, where:dactyl.NEW_TAB});
			}
		}
		let title = ret["keyword"];
		if (ret["pron"])
			title += ": [" + ret["pron"] + "]";
		let def = dict._pipelineToBr(ret["def"]);
		// @FIXME: 当图标为远程资源时，不工作
		notify.showAlertNotification(null, title, def, true, dict.engine.href({"keyword":ret["keyword"]}), listener, "dict-js-popup");
	},

	_alert: function(ret) {
		// https://developer.mozilla.org/en/Using_popup_notifications
		// check firefox version, enable on firefox 4.0 or above.
		PopupNotifications.show(gBrowser.selectedBrowser, "dict-popup",
			dict._pipelineToBr(ret["simple"]),
			"dict-popup-anchor", /* anchor ID */
			{
				label: T(5),
				accessKey: "S",
				callback: function() {
					dactyl.open(dict.engine.href({'keyword':ret['keyword']}), {background:false, where:dactyl.NEW_TAB});
				}
			},
			null,  /* secondary action */
			{
				timeout: Date.now() + 15000
			}
		);
		ex.style('chrome://* .popup-notification-icon[popupid="dict-popup"] { background:transparent url("'+dict.engine.logo+'") no-repeat left -8px;}');

	},

	_selection: function() {
		// check focused frame first
		let focusedSel = buffer.focusedFrame.getSelection().toString().trim() || "";
		if (focusedSel != '')
			return focusedSel;
		// now the main window
		let sel = content.window.getSelection().toString().trim() || "";
		if (sel != "")
			return sel;
		let frames = content.parent.frames;
		let i = 0;
		// loop frames
		while ( i < frames.length) {
			var selection = frames[i].getSelection();
			if (selection)
				sel = selection.toString().trim();
			if (sel != "")
				return sel;
			i += 1;
		}

		// now finally, check what mode we are in.
		if (modes.mainMode.name == modes.CARET.name)
			return buffer.currentWord;
		else
			return wordUnderCursor;
	},

	_nl2br: function(str) {
		return str.replace(/\n/g, "<br/>");
	},

	_getFlSl: function() { // get google translate langpairs
		let req = new XMLHttpRequest();
		req.open('GET', 'http://translate.google.cn/?hl=en');

		req.onreadystatechange = function(ev) {
			if (req.readyState == 4) {
				if (req.status == 200) {
					let html = req.responseText;
					let doc = document.implementation.createHTMLDocument('');
					let ret = null;
					ret = doc.documentElement;
					doc.documentElement.setAttribute('xmlns',
						doc.documentElement.namespaceURI);
					ret.innerHTML = html;
					// gt-sl
					let gt_sl = doc.getElementById('gt-sl');
					let options = gt_sl.getElementsByTagName('option');
					let lang = '[';
					Array.forEach(options, function(node, idx) {
							if (idx == options.length - 1)
								lang += '["' + node.value + '", "' + node.innerHTML + '"]]';
							else
								lang += '["' + node.value + '", "' + node.innerHTML + '"],';
							lang += '\n';
					});
					let gt_tl = doc.getElementById('gt-tl');
					options = gt_tl.getElementsByTagName('option');
					lang += '\n[';
					Array.forEach(options, function(node, idx) {
							if (idx == options.length - 1)
								lang += '["' + node.value + '", "' + node.innerHTML + '"]]';
							else
								lang += '["' + node.value + '", "' + node.innerHTML + '"],';
							lang += '\n';
					});
					dactyl.clipboardWrite(lang);
				}
			}
		};
		req.send(null);
	},

	// @TODO: 给超链接加上 highlight 配色属性，值为 "URL"
	// remove comments, scripts, inline styles, stylesheets, unused properties
	tidy: function(node) {
		return (new XMLSerializer).serializeToString(node);
	},

	tidyStr: function(str/*, tagname*/) {
		let body = dict.htmlToDom(str);
		if (arguments[1])
			return dict.tidyNodes(body.childNodes, arguments[1]);
		return dict.tidyNodes(body.childNodes);
	},

	tidyNodes: function (nodes/*, tagname*/) {
		let tagname = arguments[1] || "";
		let nodesPretty = "";
		Array.forEach(nodes, function (node) {
			nodesPretty += dict.tidy(node);
		});
		if (tagname) {
			let parentNode = document.createElementNS(XHTML, tagname);
			parentNode.innerHTML = nodesPretty;
			return dict.tidy(parentNode);
		}
		return nodesPretty;

	},

	/*
	 * @TODO: function document
	 */
	htmlToDom: function(str/*, prefix, isfull*/) {
		let prefix = arguments[1] || false;
		let isfull = arguments[2] || false;
		let doc = document.implementation.createHTMLDocument("");
		let ret = null;
		if (isfull) {
			ret = doc.documentElement;
		} else {
			ret = doc.body;
		}
		doc.documentElement.setAttribute("xmlns", doc.documentElement.namespaceURI);
		ret.innerHTML = str;

		if (prefix)
			dict.resolveRelative(doc, prefix);

		Array.forEach(doc.links, function (link) {
			link.setAttribute("highlight", "URL");
			// @HACK workaround for youdao
			link.removeAttribute(',');
			link.removeAttribute(')');
		});
		return ret;
	},

	resolveRelative: function(node, prefix) {
		// @TODO: #, name anchor
		var protocol = prefix.split(":")[0] || "";
		var pattern = /^((https?|ftps?|file|mailto|javascript):)?\/\//;
		var anchor_pattern = /^#/;
		var links = node.getElementsByTagName("a");
		for (var i = links.length - 1; i >= 0; i--) {
			var link = links[i];
			var href = link.getAttribute("href");
			if (!pattern.test(href) && !anchor_pattern.test(href))
				link.setAttribute("href", prefix+href);
			if (/^\/\//.test(href))
				link.setAttribute("href", protocol + ":" + href);
		}
		var imgs = node.getElementsByTagName("img");
		for (var i = imgs.length - 1; i >= 0; i--) {
			var img = imgs[i];
			var src = img.getAttribute("src");
			if (!pattern.test(src))
				img.setAttribute("src", prefix+src);
			if (/^\/\//.test(src))
				img.setAttribute("src", protocol + ":" + src);
		}
	},

	getSoundUriByLocaleKeyword: function (le, keyword) {
		let isYoudao = ["yeng", "yfr", "yko", "yjap"].some(function(ylang) ylang==le);
		let uri = "";
		if (isYoudao)
			uri = "http://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(keyword) + "&le=" + le.substr(1);
		else if (["en", "fr", "ko", "ja"].indexOf(le) + 1) {
			le = ["eng","fr", "ko", "jap"][["en", "fr", "ko", "ja"].indexOf(le)];
			uri = "http://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(keyword) + "&le=" + le;
		} else
			uri = "http://translate.google.com/translate_tts?ie=UTF-8&q="+encodeURIComponent(keyword)+"&tl="+le; // Limit:
		return uri;
	}
};

// check whether windows media player plugin exists.
group.options.add(["dict-hasaudio", "dich"],
	T(21),
	"boolean",
	true
);

group.options.add(["dict-clipboard", "dicb"],
	"clipboard support", // global or selection or both? TODO
	"boolean",
	false
);

group.options.add(["dict-simple", "dics"],
	T(22),
	"boolean",
	true
);

group.options.add(["dict-engine", "dice"],
	T(23),
	"string",
	"q",
	{
		completer: function(context) [
			["d", T(24)],
			["q", T(25)],
			["g", T(34)],
			["y", T(35)],
			["z", T(41)],
			["w", T(42)]
		]
	}
);

group.options.add(["dictw-api", "dicwa"],
	"自定义的 mediawiki 系统域名",
	"string",
	"http://zh.wikipedia.org/w/api.php"
);

group.options.add(["dict-show", "dico"],
	T(26),
	"string",
	"s",
	{
		completer: function(context) [
			["s", T(27)],
			["a", T(28)],
			["n", T(29)]
		]
	}
);

function dblclick(event) {
	if (event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLInputElement) { // FIXME: contenteditable=true
		return false;
	}
	// let keyword = content.window.getSelection().toString().trim();
	let keyword = dict._selection();
	let re = /^[^_\s]+$/; // ao

	if (event.detail == 2 && keyword.length && re.test(keyword))
		ex.dict();
	else
		ex.redraw();
}

group.options.add(["dict-dblclick", "dicd"],
	T(30),
	"boolean",
	false,
	{
		setter: function(value) {
			if (value) {
				gBrowser.addEventListener("click", dblclick, false);
			} else {
				gBrowser.removeEventListener("click", dblclick, false);
			}
			return value;
		}
	}
);

group.options.add(["dict-langpair", "dicl"], // stringmap google:en|zh-CN,youdao:jap
	T(17),
	"stringmap",
	"g:zh-CN,y:eng,z:1hp",
	{
		completer: function(context, extra) {

			if (extra.value == null)
				return [
					["y", T(35)],
					["g", T(34)],
					["z", T(41)]
				].filter(function (e) !Set.has(extra.values, e[0]));
			else
				dict.optsCompleter(context, extra);
		},
		validator: function(value) {
			return true;
		}
	}
);

group.commands.add(["di[ct]"],
	T(31),
	dict.init,
	{
		argCount: "?", // TODO ?
		// http://stackoverflow.com/questions/1203074/firefox-extension-multiple-xmlhttprequest-calls-per-page/1203155#1203155
		// http://code.google.com/p/dactyl/issues/detail?id=514#c2
		bang: true,
		completer: function (context, args) {
			if (args.length >= 1 && args[0] !== "-" && args[0].length > 0 && !args["-h"])
				dict.suggest(context, args);

			context.fork("words_history", 0, this, function (context) dict.cacheSuggest(context, args));
		},
		literal: 0,
		options: [
			{
				names: ["-e"],
				description: T(23),
				type: CommandOption.STRING,
				completer: [
					["d", T(24)],
					["q", T(25)],
					["g", T(34)],
					["y", T(35)],
					["z", T(41)],
					["w", T(42)]
				]
			},
			{
				names: ["-l"],
				description: T(17),
				type: CommandOption.STRING,
				completer: function(context, args) dict.optsCompleter(context,{key:args["-e"] || ""})
			},
			{
				names: ["-h"],
				description: "History management",
				type: CommandOption.STRING,
				completer: function (context, args) [
					["clear", "Remove all history"]
				]
			},
			{
				names: ["-o"],
				description: T(26),
				type: CommandOption.STRING,
				completer: [
					["s", T(27)],
					["a", T(28)],
					["n", T(29)]
				]
			},
			{
				names: ["-t"],
				description: T(40),
				type: CommandOption.NOARG
			}
		]
	},
	true
);

Array.forEach("dgqyzw", function(char) {
		let extra_options = [];
		if ("gyz".indexOf(char) + 1) {
			extra_options = [
				{
					names: ["-l"],
					description: T(17),
					type: CommandOption.STRING,
					completer: function(context, args) {
						args["-e"] = char;
						dict.optsCompleter(context,{key:char});
					}
				}
			];
		}
		group.commands.add(["dict"+char, "di"+char],
			T(31) + " - " + dict.engines[char].name,
			function (args) {
				args["-e"] = char;
				dict.init(args);
			},
			{
				argCount: "?", // TODO ?
				// http://stackoverflow.com/questions/1203074/firefox-extension-multiple-xmlhttprequest-calls-per-page/1203155#1203155
				// http://code.google.com/p/dactyl/issues/detail?id=514#c2
				bang: true,
				completer: function (context, args) {
					args["-e"] = char;
					if (args.length >= 1 && args[0] !== "-" && args[0].length > 0 && !args["-h"])
						dict.suggest(context, args);

					context.fork("words_history", 0, this, function (context) dict.cacheSuggest(context, args));
				},
				literal: 0,
				options: extra_options.concat([
					{
						names: ["-o"],
						description: T(26),
						type: CommandOption.STRING,
						completer: [
							["s", T(27)],
							["a", T(28)],
							["n", T(29)]
						]
					},
					{
						names: ["-h"],
						description: "History management",
						type: CommandOption.STRING,
						completer: function (context, args) [
							["clear", "Remove all history"]
						]
					},
					{
						names: ["-t"],
						description: T(40),
						type: CommandOption.NOARG
					}
				])
			},
			true
		);
});

group.commands.add(["spe[ak]"],
	"Speak",
	function(args) {
		let words = args[0] || dict._selection();
		if (args.bang || !words) {
			let player = DOM("#dict-sound", document)[0] || false;
			if (player && player.getAttribute("src"))
				try {
					player.controls.play();
				} catch (e if e instanceof TypeError) {
					try {
						player.playMusic();
					} catch (e if e instanceof TypeError) {
						try {
							player.Play();
						} catch (e if e instanceof TypeError) {
							; // do nth
						} catch (e) {
							player.setAttribute("src", player.getAttribute("src"));
						}
					}
				}
			else
				dactyl.echo("重新播放失败，无播放器或者播放链接为空！", commandline.FORCE_SINGLELINE);
			return true;
		}
		let le = args["-l"] || "";
		if (le) {
			dict.speak(dict.getSoundUriByLocaleKeyword(le, words));
		} else {
			// 自动检测语言
			var req = new XMLHttpRequest();
			req.open("GET",
				'http://translate.google.com/translate_a/t?client=t&hl=auto&sl=auto&tl=en&text=' + encodeURIComponent(words)
			);
			req.onreadystatechange = function (ev) {
				if (req.readyState == 4) {
					if (req.status == 200) {
						let sb = new Components.utils.Sandbox("http://www.example.com/");
						let g = Components.utils.evalInSandbox(req.responseText, sb);
						let le = g[8][0][0];
						dict.speak(dict.getSoundUriByLocaleKeyword(le, words));
					}
				}
			};
			req.send(null);
		}
	},
	{
		argCount: "?",
		bang:true,
		literal: 0,
		options: [
			{
				names: ["-l"],
				description: "Language",
				type: CommandOption.STRING,
				completer: function (context) {
					context.completions = [
						["yeng", "Youdao - English"],
						["yfr",  "Youdao - French"],
						["yko",  "Youdao - Korean"],
						["yjap", "Youdao - Japanese"],
					].concat(dict.languages);
					context.filters = [CompletionContext.Filter.textDescription];
					context.compare = null;
				}
			}
		]
	},
	true
);

group.mappings.add(
	[modes.NORMAL, modes.VISUAL],
	['<A-d>'],
	T(32),
	dict.init
);
group.mappings.add(
	[modes.NORMAL, modes.VISUAL],
	['<A-S-d>'],
	T(33),
	function () dict.init({bang:true})
);

var wordUnderCursor = "";
var mousemove = function (e) {
	if(e && e.rangeParent && e.rangeParent.nodeType == e.rangeParent.TEXT_NODE
		&& e.rangeParent.parentNode == e.target)
		; // do nth
	else
		return wordUnderCursor = "";

	var offset = e.rangeOffset;
	var range = e.target.ownerDocument.createRange();
	range.selectNode(e.rangeParent);
	var str = range.toString();
	range.detach();
	var re = new RegExp(options["iskeyword"]+"+", "g");
	if (str.trim() && re.test(str.charAt(offset))) {
		var pieces1 = [];
		var leftPart = str.slice(0, offset);
		var re = new RegExp(options["iskeyword"]+"+", "g"); // dirty hack, bug?
		var hasLeftPart = re.test(str.charAt(offset - 1));
		if (hasLeftPart)
			pieces1 = leftPart.match(re);
		var pieces2 = str.slice(offset).match(re);
		wordUnderCursor = (pieces1.pop() || "") + (pieces2.shift() || "");
	} else {
		wordUnderCursor = "";
	}
};
if (config.OS.isWindows) {
	var removePlayer = function () {
		var dict_sound = document.getElementById("dict-sound");
		if (dict_sound) {
			var addonbar = document.getElementById("addon-bar");
			addonbar.removeChild(dict_sound);
		}
	};
	var fullscreen = function (e) {
		removePlayer();
	};
	window.addEventListener("fullscreen", fullscreen, false);
}
gBrowser.addEventListener("mousemove", mousemove, false);

function onUnload() {
	if (config.OS.isWindows) {
		window.removeEventListener("fullscreen", fullscreen, false);
		removePlayer();
	}
	gBrowser.removeEventListener("mousemove", mousemove, false);
	if (options["dict-dblclick"])
		gBrowser.removeEventListener("click", dblclick, false);
}

var INFO =
<plugin name="dict.js" version="0.9.9"
    href="https://github.com/grassofhust/dict.js"
    summary= "Dict.js - an online dictionary"
    xmlns={NS}>
	<info lang="zh-CN" summary="Dict.js - 在线词典"/>
    <author email="frederick.zou@gmail.com">Yang Zou</author>
    <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
    <project name="Pentadactyl" minVersion="1.0"/>

      <p lang="en-US">Dict.js is an online dictionary plugin for pentadactyl. It supports <link topic="http://dict.qq.com/">QQ</link>, <link topic="http://dict.youdao.com/">Youdao</link>, <link topic="http://dict.cn/">Dict.cn</link>, <link topic="http://www.zdic.net/">Han Dian</link> and <link topic="http://translate.google.com/">Google Translate</link>.</p>
      <p lang="zh-CN">Pentadactyl 的词典插件。dict.js 目前支持 <link topic="http://dict.qq.com/">QQ词典</link>，<link topic="http://dict.youdao.com/">网易有道在线词典</link>，<link topic="http://dict.cn/">海词</link>, <link topic="http://www.zdic.net/">汉典</link> 和 <link topic="http://translate.google.com/">谷歌翻译</link>。</p>

      <item lang="en-US">
        <tags>'dicd' 'dict-dblclick'</tags>
        <spec>'dict-dblclick' 'dicd'</spec>
        <type>boolean</type>
        <default>false</default>
        <description>
          <p>Double click to Automatic translate.</p>
        </description>
      </item>
      <item lang="zh-CN">
        <tags>'dicd' 'dict-dblclick'</tags>
        <spec>'dict-dblclick' 'dicd'</spec>
        <type>boolean</type>
        <default>false</default>
        <description>
          <p>
          双击选定单词时，自动翻译被选定的文字。
          </p>
        </description>
      </item>

      <item lang="en-US">
        <tags>'dice' 'dict-engine'</tags>
        <spec>'dict-engine' 'dice'</spec>
        <type>string</type>
        <default>q</default>
        <description>
			  <p>Sites that dict.js supports:  </p>
			  <dl dt="width: 6em;">
					<dt>d</dt>      <dd><link topic="http://dict.cn/">Dict.cn</link></dd>
					<dt>g</dt>      <dd><link topic="http://translate.google.com">Google Translate</link></dd>
					<dt>q</dt>      <dd><link topic="http://qq.dict.com">QQ</link></dd>
					<dt>y</dt>      <dd><link topic="http://dict.youdao.com">Youdao</link></dd>
					<dt>z</dt>      <dd><link topic="http://www.zdic.net">Han Dian</link></dd>
				</dl>
			<p>dict.js use Dict.cn by default now.</p>
        </description>
      </item>
      <item lang="zh-CN">
        <tags>'dice' 'dict-engine'</tags>
        <spec>'dict-engine' 'dice'</spec>
        <type>string</type>
        <default>q</default>
        <description>
			<p>dict.js 当前支持的网站：</p>
			<dl dt="width: 6em;">
				<dt>d</dt>      <dd><link topic="http://dict.cn/">海词</link></dd>
				<dt>g</dt>      <dd><link topic="http://translate.google.com">谷歌翻译</link></dd>
				<dt>q</dt>      <dd><link topic="http://qq.dict.com">QQ词典</link></dd>
				<dt>y</dt>      <dd><link topic="http://dict.youdao.com">网易有道在线词典</link></dd>
				<dt>z</dt>      <dd><link topic="http://www.zdic.net">汉典</link></dd>
			</dl>
			<p>dict.js 默认使用海词。</p>
        </description>
      </item>

      <item lang="en-US">
        <tags>'dich' 'dict-hasaudio'</tags>
        <spec>'dict-hasaudio' 'dich'</spec>
        <type>boolean</type>
        <default>true</default>
        <description>
			  <p>Enable or disable sound support.</p>
			  <warning>dict.js use Windows Media Player plugin on Microsoft Windows platform and Adobe Flash Player for others. If you have any sound issues, read this first: <link topic="http://support.mozilla.com/en-US/kb/Using%20the%20Windows%20Media%20Player%20plugin%20with%20Firefox">Using the Windows Media Player plugin with Firefox</link></warning>
        </description>
      </item>
      <item lang="zh-CN">
        <tags>'dich' 'dict-hasaudio'</tags>
        <spec>'dict-hasaudio' 'dich'</spec>
        <type>boolean</type>
        <default>true</default>
        <description>
			<p>开启或者关闭声音。</p>
			<warning>在 Windows 平台下，dict.js 使用 Windows Media Player 插件来进行声音输出,其它平台使用 Adobe Flash Player。如果出现了声音方面的问题，请参考：<link topic="http://support.mozilla.com/zh-CN/kb/%E5%9C%A8%20Firefox%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20Windows%20Media%20Player%20%E6%8F%92%E4%BB%B6">在 Firefox 中使用 Windows Media Player 插件</link></warning>
        </description>
      </item>

      <item lang="en-US">
        <tags>'dicl' 'dict-langpair'</tags>
        <spec>'dict-langpair' 'dicl'</spec>
        <type>stringmap</type>
        <default>g:zh-CN,y:eng,z:1hp</default>
        <description>
			<p>This argument supplies the optional source language and required destination language. In order to translate from English to Spanish, specify a value of langpair=en|es.</p>

			<p>To use the auto-detect source feature, leave off the source language and only specify the vertical bar followed by the destination langauge as in: langpair=|es. (vertical bar "|" is optional now.)</p>

			<dl dt="width: 8em;">
				<dt>jap</dt>      <dd>Chinese ↔ Japanese&#160;&#160;&#160;&#160;Youdao</dd>
				<dt>eng</dt>      <dd>Chinese ↔ English&#160;&#160;&#160;&#160;&#160;&#160;&#160;Youdao</dd>
				<dt>ko</dt>      <dd>Chinese ↔ Korean&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Youdao</dd>
				<dt>fr</dt>      <dd>Chinese ↔ French&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Youdao</dd>
				<dt>en|zh-CN</dt>      <dd>From English to Simplified Chinese&#160;&#160;&#160;&#160;&#160;&#160;Google Translate</dd>
				<dt>...|...</dt>      <dd>From ... to ...&#160;&#160;&#160;&#160;&#160;&#160;Google Translate</dd>
			</dl>
        </description>
      </item>
      <item lang="zh-CN">
        <tags>'dicl' 'dict-langpair'</tags>
        <spec>'dict-langpair' 'dicl'</spec>
        <type>stringmap</type>
        <default>g:zh-CN,y:eng,z:1hp</default>
        <description>
			<p>使用谷歌翻译时，从哪种来源语言翻译到指定的目标语言。比如 <str>en|zh-CN</str>，表明从英文翻译到简体中文。</p>
			<note>来源语言可以省略，例如当设置<o>dicl</o>为<str>|zh-CN 或 zh-CN</str>时，表明从任何语言翻译至简体中文。</note>
			<p><link topic="http://code.google.com/apis/language/translate/v1/getting_started.html#translatableLanguages">谷歌翻译所支持的语言及其对应的缩写。</link></p>
			<dl dt="width: 8em;">
				<dt>jap</dt>      <dd>汉日互译&#160;&#160;&#160;&#160;&#160;网易有道</dd>
				<dt>eng</dt>      <dd>汉英互译&#160;&#160;&#160;&#160;&#160;网易有道</dd>
				<dt>ko</dt>      <dd>汉韩互译&#160;&#160;&#160;&#160;&#160;网易有道</dd>
				<dt>fr</dt>      <dd>汉法互译&#160;&#160;&#160;&#160;&#160;网易有道</dd>
				<dt>en|zh-CN</dt>      <dd>从 英文 到 简体中文&#160;&#160;&#160;&#160;&#160;谷歌翻译</dd>
				<dt>...|...</dt>      <dd>从 ... 到 ...&#160;&#160;&#160;&#160;&#160;谷歌翻译</dd>
			</dl>
        </description>
      </item>

      <item lang="en-US">
        <tags>'dico' 'dict-show'</tags>
        <spec>'dict-show' 'dico'</spec>
        <type>string</type>
        <default>'s'</default>
        <description>
			<p>Methods to show result: </p>
			<dl dt="width: 6em;">
				<dt>a</dt>      <dd>Alert</dd>
				<dt>n</dt>      <dd>Desktop notification</dd>
				<dt>s</dt>      <dd>Pentadactyl statusline</dd>
			</dl>
        </description>
      </item>
      <item lang="zh-CN">
		<tags>'dico' 'dict-show'</tags>
		<spec>'dict-show' 'dico'</spec>
		<type>string</type>
		<default>'s'</default>
		<description>
			<p>翻译结果的输出形式：</p>
			<dl dt="width: 6em;">
				<dt>a</dt>      <dd>Firefox 通知窗口</dd>
				<dt>n</dt>      <dd>桌面通知</dd>
				<dt>s</dt>      <dd>Pentadactyl 状态栏</dd>
			</dl>
		</description>
      </item>

      <item lang="en-US">
		  <tags>'dics' 'dict-simple'</tags>
		  <spec>'dics' 'dics'</spec>
		  <type>boolean</type>
		  <default>true</default>
		  <description>
			  <p>Simple output</p>
			  <note>This option only workable when you "set <o>dico=s</o>".</note>
		  </description>
      </item>
      <item lang="zh-CN">
		  <tags>'dics' 'dict-simple'</tags>
		  <spec>'dics' 'dics'</spec>
		  <type>boolean</type>
		  <default>true</default>
		  <description>
			  <p>是否输出单词的详细信息，默认为简洁形式。</p>
			  <note>目前只有当翻译结果输出到状态栏时有效。Firefox 通知窗口、桌面通知均以简洁形式输出。</note>
		  </description>
      </item>

	  <item lang="en-US">
		  <spec>:dict [action] ...</spec>
		  <tags>:dict :di</tags>
		  <description>
			  <p>
			  Get translation for specified word(s)
			  </p>
		  </description>
		  <strut/>
	  </item>
	  <item lang="zh-CN">
		  <spec>:dict [action] ...</spec>
		  <tags>:dict :di</tags>
		  <description>
			  <p>
			  翻译单词或者句子，如果输入的翻译内容为空，将会首先尝试翻译当前页面被选中的文字，其次是剪贴板中的内容，如果这些都为空，则会提供一个输入框来输入想要翻译的内容。
			  </p>
			  <note><em>只在非视窗平台下支持翻译剪贴板中的内容！下面有提到剪贴板的地方也遵循这个规则。</em></note>
		  </description>
		  <strut/>
	  </item>

	  <item lang="en-US">
		  <tags>:dict! :di!</tags>
		  <strut/>
		  <spec>:dict!</spec>
		  <description>
			  <p>Translate words，reverse <o>dics</o> option now.</p>
		  </description>
	  </item>
	  <item lang="zh-CN">
		  <tags>:dict! :di!</tags>
		  <strut/>
		  <spec>:dict!</spec>
		  <description>
			  <p>翻译单词或者句子，此时反转<o>dics</o>的设置。</p>
		  </description>
	  </item>

	  <item lang="en-US">
		  <tags>:dict-options</tags>
		  <strut/>
		  <spec>dict.js commandline options</spec>
		  <description>
			  <p>
			  <ex>:dict</ex> <ex>:dict!</ex> commandline options：
			  </p>
			  <dl dt="width: 6em;">
				  <dt>-e</dt>      <dd>specified dictionary engine <note><o>dice</o></note></dd>
				  <dt>-l</dt>      <dd>specified langpair <note><o>dicl</o></note></dd>
				  <dt>-o</dt>      <dd>specified method to show result <note><o>dico</o></note></dd>
				  <dt>-t</dt>      <dd>open result link in current tab</dd>
			  </dl>
		  </description>
	  </item>
	  <item lang="zh-CN">
		  <tags>:dict-options</tags>
		  <strut/>
		  <spec>dict.js 命令行选项</spec>
		  <description>
			  <p>
			  <ex>:dict</ex> <ex>:dict!</ex>支持的命令行选项：
			  </p>
			  <dl dt="width: 6em;">
				  <dt>-e</dt>      <dd>给定使用的翻译网站 <note><o>dice</o></note></dd>
				  <dt>-l</dt>      <dd>谷歌翻译时的语言设置 <note><o>dicl</o></note></dd>
				  <dt>-o</dt>      <dd>翻译结果的输出设置 <note><o>dico</o></note></dd>
				  <dt>-t</dt>      <dd>在当前标签页打开翻译链接</dd>
			  </dl>
		  </description>
	  </item>

	  <item lang="en-US">
		  <tags>:dict-shortcut</tags>
		  <strut/>
		  <spec>dict.js shortcuts</spec>
		  <description>
			  <p>dict.js use <k name="A-d"/> and <k name="A-S-d"/> to translate word(s) from mouse selection or clipboard.</p>
			  <note>Translate word(s) from clipboard does not support Microsoft Windows.</note>
		  </description>
	  </item>
	  <item lang="zh-CN">
		  <tags>:dict-shortcut</tags>
		  <strut/>
		  <spec>dict.js 快捷键</spec>
		  <description>
			  <p>dict.js 默认使用<k name="A-d"/>和<k name="A-S-d"/>来快速翻译当前选区或者是剪贴板中的内容。如果选区和剪贴板都为空，则会提供一个输入框。</p>
		  </description>
	  </item>

	  <item lang="en-US">
		  <tags><![CDATA[<A-d>]]></tags>
		  <spec><![CDATA[<A-d>]]></spec>
		  <description>
			  <p>View translation for mouse selection or clipboard.</p>
			  <note>Translate word(s) from clipboard does not support on Microsoft Windows.</note>
		  </description>
	  </item>
	  <item lang="zh-CN">
		  <tags><![CDATA[<A-d>]]></tags>
		  <spec><![CDATA[<A-d>]]></spec>
		  <description>
			  <p>翻译当前选区或者是剪贴板中的内容。</p>
		  </description>
	  </item>

	  <item lang="en-US">
		  <tags><![CDATA[<A-S-d>]]></tags>
		  <spec><![CDATA[<A-S-d>]]></spec>
		  <description>
			  <p>View details for mouse selection or clipboard, shortcut for <ex>:dict!&lt;Return&gt;</ex>。</p>
			  <note>Translate word(s) from clipboard does not support on Microsoft Windows.</note>
		  </description>
	  </item>
	  <item lang="zh-CN">
		  <tags><![CDATA[<A-S-d>]]></tags>
		  <spec><![CDATA[<A-S-d>]]></spec>
		  <description>
			  <p>翻译当前选区或者是剪贴板中的内容，实际效果等同于调用<ex>:dict!&lt;Return&gt;</ex>。</p>
		  </description>
	  </item>

	  <item lang="en-US">
		  <tags>dict-show-progress</tags>
		  <spec>dict-show-progress</spec>
		  <description>
			  <p>When you have a very long queue, or your network was not that good, dict.js can show a queue progress.Added the code below to your pentadactyl config.</p>
			  <code>style chrome://browser/content/browser.xul statuspanel#statusbar-display &#123; display:block; visibility: visible }</code>
		  </description>
	  </item>
	  <item lang="zh-CN">
		  <tags>dict-show-progress</tags>
		  <spec>dict-show-progress</spec>
		  <description>
			  <p>当查询很慢，或者你的网络很糟糕时，dict.js会显示查询状态，但你需要用如下代码来显示状态信息：</p>
			  <code>style chrome://browser/content/browser.xul statuspanel#statusbar-display &#123; display:block; visibility: visible }</code>
			  <p>将上面的代码添加到你的pentadactyl配置文件中去即可。</p>
		  </description>
	  </item>
</plugin>;

// dict! dict.cn 的模糊查询　或者是反转google的搜索设定 或者是返回全部的词典信息 ret["full"]
// 返回查询的页面链接，最好可点击
// https://developer.mozilla.org/en/XUL/label#s-text-link
// dactyl.echo(<label class="text-link" xmlns={XUL} href="http://dict.cn/hello" value="hello"/>);
// * http://dict.cn/ws.php?utf8=true&q=%E4%BD%A0%E5%A5%BD rel tags
// * FORCE_SINGLELINE | APPEND_MESSAGES
// * 使用mozilla notification box?
// * clear previous active request
// cache or history
// - sound is broken out? linux/winxp/win7 are okay
// * auto completion doesn't work when you've never open dict.cn web page. --cookie
// * support dblclick?
// www.zdic.net support?
// 当为汉字时，使用www.zdic.net的自动补全和解释
// automatic select proper engine
// x translate.google.com -- doesn't workable, need more test.
// * literal
// 检测命令行参数是否有效，比如 :di -e xxxx
// Unicode Ranges
// history and auto completion from history
// * dict-langpair -> stringmap
// use bytes instead of length
// use soundManager and xul iframe?
// 存入的数据加入版本号,每次检测版本号,　是否需要更新
// * context.cancel 移除异步自动补全调用
//  http://translate.google.com/translate_tts\?ie\=UTF-8\&q\=你好\&tl\=zh-CN\&prev\=input -- 支持非英文的页面发音
//  http://translate.google.com/translate_a/t?client=t&text=%E4%BD%A0%E5%A5%BD&hl=en&sl=auto&tl=en&multires=1&prev=conf&psl=az&ptl=en&otf=1&it=sel.5284%2Csrcd_gms.2521&ssel=4&tsel=6&uptl=en&alttl=zh-CN&sc=1 -- 自动检测语言
//  如果是查询选区或者是光标下的词，可以根据当前页面的编码来猜测语言
// try fanyi.youdao.com
// dictw 无语音输出
// 添加 dictw/-h/:speak 的帮助文档
// 支持命令行下的查词工具，sdcv
