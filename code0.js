gdjs.Ana_32SahneCode = {};
gdjs.Ana_32SahneCode.localVariables = [];
gdjs.Ana_32SahneCode.GDAnasayfaObjects1= [];
gdjs.Ana_32SahneCode.GDAnasayfaObjects2= [];
gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1= [];
gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects2= [];
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1= [];
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects2= [];


gdjs.Ana_32SahneCode.mapOfGDgdjs_9546Ana_959532SahneCode_9546GDoyna_95959595butonuObjects1Objects = Hashtable.newFrom({"oyna_butonu": gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1});
gdjs.Ana_32SahneCode.mapOfGDgdjs_9546Ana_959532SahneCode_9546GDoyna_95959595butonuObjects1Objects = Hashtable.newFrom({"oyna_butonu": gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1});
gdjs.Ana_32SahneCode.mapOfGDgdjs_9546Ana_959532SahneCode_9546GDoyna_95959595butonuObjects1Objects = Hashtable.newFrom({"oyna_butonu": gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1});
gdjs.Ana_32SahneCode.mapOfGDgdjs_9546Ana_959532SahneCode_9546GDoyna_95959595butonuObjects1Objects = Hashtable.newFrom({"oyna_butonu": gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1});
gdjs.Ana_32SahneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("oyna_butonu"), gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Ana_32SahneCode.mapOfGDgdjs_9546Ana_959532SahneCode_9546GDoyna_95959595butonuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1 */
{for(var i = 0, len = gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1.length ;i < len;++i) {
    gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1[i].setColor("223;238;226");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("oyna_butonu"), gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Ana_32SahneCode.mapOfGDgdjs_9546Ana_959532SahneCode_9546GDoyna_95959595butonuObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1 */
{for(var i = 0, len = gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1.length ;i < len;++i) {
    gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("oyna_butonu"), gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1.length;i<l;++i) {
    if ( gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1[k] = gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1[i];
        ++k;
    }
}
gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne1", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("oyna_butonu"), gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Ana_32SahneCode.mapOfGDgdjs_9546Ana_959532SahneCode_9546GDoyna_95959595butonuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1 */
{for(var i = 0, len = gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1.length ;i < len;++i) {
    gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1[i].getBehavior("Scale").setScale(0.45);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("oyna_butonu"), gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Ana_32SahneCode.mapOfGDgdjs_9546Ana_959532SahneCode_9546GDoyna_95959595butonuObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1 */
{for(var i = 0, len = gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1.length ;i < len;++i) {
    gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "skesdner_muzik.mp3", 100, true, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 10, 0);
}}

}


};

gdjs.Ana_32SahneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Ana_32SahneCode.GDAnasayfaObjects1.length = 0;
gdjs.Ana_32SahneCode.GDAnasayfaObjects2.length = 0;
gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1.length = 0;
gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects2.length = 0;
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;

gdjs.Ana_32SahneCode.eventsList0(runtimeScene);
gdjs.Ana_32SahneCode.GDAnasayfaObjects1.length = 0;
gdjs.Ana_32SahneCode.GDAnasayfaObjects2.length = 0;
gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects1.length = 0;
gdjs.Ana_32SahneCode.GDoyna_9595butonuObjects2.length = 0;
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Ana_32SahneCode.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;


return;

}

gdjs['Ana_32SahneCode'] = gdjs.Ana_32SahneCode;
