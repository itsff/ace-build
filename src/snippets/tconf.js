define("ace/snippets/tconf",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "#########################################\n\
# TConf snippets - for TConf, see below #\n\
#########################################\n\
\n\
snippet if\n\
	if ${1:condition} then\n\
		${2}\n\
	endif\n\
snippet if-else\n\
	if ${1:condition} then\n\
		${2}\n\
	else\n\
		${3}\n\
	endif\n\
snippet if-elseif-else\n\
	if ${1:condition} then\n\
		${2}\n\
	elseif ${3:condition} then\n\
		${4}\n\
	else\n\
		${5}\n\
	endif\n\
#snippet ife\n\
#	if ${1:condition} then\n\
#		${2}\n\
#	else\n\
#		${3}\n\
#	endif\n\
#snippet elsif\n\
#	elsif ${1:condition} then\n\
#		${2}\n\
snippet in\n\
	in [${1:value1}, ${2:value2} ]\n\
snippet find\n\
	find(${1:value1}, ${2:value2} )\n\
snippet copy\n\
	copy(${1:pub.fid1}, [${2:pub.fid2}, ${3:pub.fid3}] )\n\
snippet exists\n\
	exists(${1:src.FID}) == ${2:#true}\n\
snippet strtime\n\
	strtime(${1:\"2116-12-20 22:00:00.000\"})\n\
snippet map\n\
	map(${1:src.trd_prc_1}, {${2:key1}\\:${3:value1},${4:key2}\\:${5:value2}})\n\
snippet convert_date\n\
	convert_date(time_service, ${1:#GMTDATE}, ${2:#GMTTIME}, ${3:\"MUT\\%DST\"})\n\
snippet get_prev_exch_trading_day\n\
	get_prev_exch_trading_day(time_service, ${1:#GMTDATE}, ${2:#GMTTIME},${3:\"MUT\\%DST\"},${4:\"MUT\\%FD01\"}, ${5:\"MUT\\%HOL1\"})\n\
snippet rescale\n\
	rescale(${1: veh.nav_netchn/ veh.navalue * 100}, ${2:-6} )\n\
#snippet pub\n\
#	pub.FID // e.g. pub.trdprc_1\n\
#snippet pub.\n\
#	FID // e.g. trdprc_1\n\
#snippet src\n\
#	src.FID // e.g. src.trdc_1\n\
#snippet src.\n\
#	FID // e.g. trdprc_1\n\
#snippet veh\n\
#	veh.FID // e.g. veh.trdprc_1\n\
#snippet veh.\n\
#	FID // e.g. trdprc_1\n\
";
exports.scope = "tconf";

});
