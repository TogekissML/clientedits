(async () => {
    await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
map=Deobfuscator.object(ig.game,'queuePerformDelayMs',true);
cplace=Deobfuscator.function(ig.game[map], "pta", true);
pl1=Deobfuscator.object(ig.game, "addForumThreadAndFirstComment_P", true);
pl2=Deobfuscator.function(ig.game[pl1], "/j/u/p/", true);
getwebsocket=Deobfuscator.function(ig.game.websocket, "c,d)", true);
awebsocket=Deobfuscator.object(ig.game, "binary", true);
bdwebsocket=Deobfuscator.function(ig.game.websocket, ",\nt", true);
xaplayer=Deobfuscator.object(ig.game, "screenName", true);
xxid=Deobfuscator.keyBetween(ig.game.player.draw, "=this.", ")s");
eval("ig.game.websocket."+getwebsocket+"="+ig.game.websocket[getwebsocket].toString().replaceAll("c,d){", "c,d){if(b.m=='od'){placeblock(b)};"));

placeblock = function(b) {
        b.data.pack[2].id!=null?setmap2(b.data.pack[2].x, b.data.pack[2].y, {tid: b.data.pack[2].id, rotation: b.data.pack[1]-1, flip: b.data.pack[0]-1}, !0):ig.game[map].delete2(b.data.pack[2].x, b.data.pack[2].y)
};

ig.game[pl1][pl2]=function() {};
if (ig.game[pl1][pl2].toString()=='function() {}') {
    ig.game.isEditorHere=true
};
eval("setmap2="+ig.game[map].setMap.toString().replaceAll("ig.game."+awebsocket+"."+bdwebsocket+"({x:a,y:b,def:c,rId:ig.game."+xaplayer+"."+xxid+"})","ig.game"))
eval("ig.game[map].setMap="+ig.game[map].setMap.toString().replaceAll("ig.game."+awebsocket+"."+bdwebsocket+"({x:a,y:b,def:c,rId:ig.game."+xaplayer+"."+xxid+"})",'c!=null?ig.game.websocket.wssend(ig.game.websocket.ws, "od", {rid: ig.game.player.id, pack:[c.flip+1, c.rotation+1, {id: c.tid, x: a, y: b}]}):undefined'));
ig.game[map].delete2=ig.game[map].deleteThingAt;
eval("ig.game[map].deleteThingAt="+ig.game[map].deleteThingAt.toString().replaceAll("c,d,e){",'c,d,e){c!=null?ig.game.websocket.wssend(ig.game.websocket.ws, "od", {rid: ig.game.player.id, pack:[1, 1, {id: null, x: a, y: b}]}):undefined;'))
})();
//fiiiinally this took me forever xp
