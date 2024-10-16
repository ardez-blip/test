gdjs.Sahne4Code = {};
gdjs.Sahne4Code.localVariables = [];
gdjs.Sahne4Code.GDNewPanelSpriteObjects1= [];
gdjs.Sahne4Code.GDNewPanelSpriteObjects2= [];
gdjs.Sahne4Code.GDSagOkObjects1= [];
gdjs.Sahne4Code.GDSagOkObjects2= [];
gdjs.Sahne4Code.GDSolOkObjects1= [];
gdjs.Sahne4Code.GDSolOkObjects2= [];
gdjs.Sahne4Code.GDvernasabigObjects1= [];
gdjs.Sahne4Code.GDvernasabigObjects2= [];
gdjs.Sahne4Code.GDzovakesdObjects1= [];
gdjs.Sahne4Code.GDzovakesdObjects2= [];
gdjs.Sahne4Code.GDmucagObjects1= [];
gdjs.Sahne4Code.GDmucagObjects2= [];
gdjs.Sahne4Code.GDgarcdapadObjects1= [];
gdjs.Sahne4Code.GDgarcdapadObjects2= [];
gdjs.Sahne4Code.GDhakusdObjects1= [];
gdjs.Sahne4Code.GDhakusdObjects2= [];
gdjs.Sahne4Code.GDvernasabigTextInputObjects1= [];
gdjs.Sahne4Code.GDvernasabigTextInputObjects2= [];
gdjs.Sahne4Code.GDzovaskesdTextInputObjects1= [];
gdjs.Sahne4Code.GDzovaskesdTextInputObjects2= [];
gdjs.Sahne4Code.GDmucagTextInputObjects1= [];
gdjs.Sahne4Code.GDmucagTextInputObjects2= [];
gdjs.Sahne4Code.GDgarcdapadTextInputObjects1= [];
gdjs.Sahne4Code.GDgarcdapadTextInputObjects2= [];
gdjs.Sahne4Code.GDhakusdTextInputObjects1= [];
gdjs.Sahne4Code.GDhakusdTextInputObjects2= [];
gdjs.Sahne4Code.GDvernasabig3Objects1= [];
gdjs.Sahne4Code.GDvernasabig3Objects2= [];
gdjs.Sahne4Code.GDmucag2Objects1= [];
gdjs.Sahne4Code.GDmucag2Objects2= [];
gdjs.Sahne4Code.GDhakusd2Objects1= [];
gdjs.Sahne4Code.GDhakusd2Objects2= [];
gdjs.Sahne4Code.GDgarcdapad3Objects1= [];
gdjs.Sahne4Code.GDgarcdapad3Objects2= [];
gdjs.Sahne4Code.GDzovaskesd2Objects1= [];
gdjs.Sahne4Code.GDzovaskesd2Objects2= [];
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1= [];
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects2= [];


gdjs.Sahne4Code.mapOfGDgdjs_9546Sahne4Code_9546GDSagOkObjects1Objects = Hashtable.newFrom({"SagOk": gdjs.Sahne4Code.GDSagOkObjects1});
gdjs.Sahne4Code.mapOfGDgdjs_9546Sahne4Code_9546GDSagOkObjects1Objects = Hashtable.newFrom({"SagOk": gdjs.Sahne4Code.GDSagOkObjects1});
gdjs.Sahne4Code.mapOfGDgdjs_9546Sahne4Code_9546GDSolOkObjects1Objects = Hashtable.newFrom({"SolOk": gdjs.Sahne4Code.GDSolOkObjects1});
gdjs.Sahne4Code.mapOfGDgdjs_9546Sahne4Code_9546GDSolOkObjects1Objects = Hashtable.newFrom({"SolOk": gdjs.Sahne4Code.GDSolOkObjects1});
gdjs.Sahne4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("vernasabigTextInput"), gdjs.Sahne4Code.GDvernasabigTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDvernasabigTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDvernasabigTextInputObjects1[i].getBehavior("Text").getText() == "վերնաշապիկ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDvernasabigTextInputObjects1[k] = gdjs.Sahne4Code.GDvernasabigTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDvernasabigTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vernasabig"), gdjs.Sahne4Code.GDvernasabigObjects1);
gdjs.copyArray(runtimeScene.getObjects("vernasabig3"), gdjs.Sahne4Code.GDvernasabig3Objects1);
/* Reuse gdjs.Sahne4Code.GDvernasabigTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDvernasabigTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDvernasabigTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne4Code.GDvernasabigObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDvernasabigObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne4Code.GDvernasabig3Objects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDvernasabig3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zovaskesdTextInput"), gdjs.Sahne4Code.GDzovaskesdTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDzovaskesdTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDzovaskesdTextInputObjects1[i].getBehavior("Text").getText() == "ծովազգեստ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDzovaskesdTextInputObjects1[k] = gdjs.Sahne4Code.GDzovaskesdTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDzovaskesdTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("zovakesd"), gdjs.Sahne4Code.GDzovakesdObjects1);
gdjs.copyArray(runtimeScene.getObjects("zovaskesd2"), gdjs.Sahne4Code.GDzovaskesd2Objects1);
/* Reuse gdjs.Sahne4Code.GDzovaskesdTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDzovaskesdTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDzovaskesdTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne4Code.GDzovakesdObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDzovakesdObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne4Code.GDzovaskesd2Objects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDzovaskesd2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mucagTextInput"), gdjs.Sahne4Code.GDmucagTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDmucagTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDmucagTextInputObjects1[i].getBehavior("Text").getText() == "մուճակ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDmucagTextInputObjects1[k] = gdjs.Sahne4Code.GDmucagTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDmucagTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("mucag"), gdjs.Sahne4Code.GDmucagObjects1);
gdjs.copyArray(runtimeScene.getObjects("mucag2"), gdjs.Sahne4Code.GDmucag2Objects1);
/* Reuse gdjs.Sahne4Code.GDmucagTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDmucagTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDmucagTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne4Code.GDmucagObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDmucagObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne4Code.GDmucag2Objects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDmucag2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("garcdapadTextInput"), gdjs.Sahne4Code.GDgarcdapadTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDgarcdapadTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDgarcdapadTextInputObjects1[i].getBehavior("Text").getText() == "կարճ տաբատ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDgarcdapadTextInputObjects1[k] = gdjs.Sahne4Code.GDgarcdapadTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDgarcdapadTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("garcdapad"), gdjs.Sahne4Code.GDgarcdapadObjects1);
gdjs.copyArray(runtimeScene.getObjects("garcdapad3"), gdjs.Sahne4Code.GDgarcdapad3Objects1);
/* Reuse gdjs.Sahne4Code.GDgarcdapadTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDgarcdapadTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDgarcdapadTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne4Code.GDgarcdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDgarcdapadObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne4Code.GDgarcdapad3Objects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDgarcdapad3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hakusdTextInput"), gdjs.Sahne4Code.GDhakusdTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDhakusdTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDhakusdTextInputObjects1[i].getBehavior("Text").getText() == "հագուստ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDhakusdTextInputObjects1[k] = gdjs.Sahne4Code.GDhakusdTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDhakusdTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hakusd"), gdjs.Sahne4Code.GDhakusdObjects1);
gdjs.copyArray(runtimeScene.getObjects("hakusd2"), gdjs.Sahne4Code.GDhakusd2Objects1);
/* Reuse gdjs.Sahne4Code.GDhakusdTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDhakusdTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDhakusdTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne4Code.GDhakusdObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDhakusdObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne4Code.GDhakusd2Objects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDhakusd2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne4Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne4Code.mapOfGDgdjs_9546Sahne4Code_9546GDSagOkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne4Code.GDSagOkObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDSagOkObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDSagOkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne4Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne4Code.mapOfGDgdjs_9546Sahne4Code_9546GDSagOkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne4Code.GDSagOkObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDSagOkObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDSagOkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne4Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDSagOkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDSagOkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDSagOkObjects1[k] = gdjs.Sahne4Code.GDSagOkObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDSagOkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne5", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne4Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne4Code.mapOfGDgdjs_9546Sahne4Code_9546GDSolOkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne4Code.GDSolOkObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDSolOkObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDSolOkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne4Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne4Code.mapOfGDgdjs_9546Sahne4Code_9546GDSolOkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne4Code.GDSolOkObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDSolOkObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDSolOkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne4Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDSolOkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDSolOkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDSolOkObjects1[k] = gdjs.Sahne4Code.GDSolOkObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDSolOkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne3", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 10, 0);
}}

}


};

gdjs.Sahne4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sahne4Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne4Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne4Code.GDSagOkObjects1.length = 0;
gdjs.Sahne4Code.GDSagOkObjects2.length = 0;
gdjs.Sahne4Code.GDSolOkObjects1.length = 0;
gdjs.Sahne4Code.GDSolOkObjects2.length = 0;
gdjs.Sahne4Code.GDvernasabigObjects1.length = 0;
gdjs.Sahne4Code.GDvernasabigObjects2.length = 0;
gdjs.Sahne4Code.GDzovakesdObjects1.length = 0;
gdjs.Sahne4Code.GDzovakesdObjects2.length = 0;
gdjs.Sahne4Code.GDmucagObjects1.length = 0;
gdjs.Sahne4Code.GDmucagObjects2.length = 0;
gdjs.Sahne4Code.GDgarcdapadObjects1.length = 0;
gdjs.Sahne4Code.GDgarcdapadObjects2.length = 0;
gdjs.Sahne4Code.GDhakusdObjects1.length = 0;
gdjs.Sahne4Code.GDhakusdObjects2.length = 0;
gdjs.Sahne4Code.GDvernasabigTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDvernasabigTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDzovaskesdTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDzovaskesdTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDmucagTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDmucagTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDgarcdapadTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDgarcdapadTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDhakusdTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDhakusdTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDvernasabig3Objects1.length = 0;
gdjs.Sahne4Code.GDvernasabig3Objects2.length = 0;
gdjs.Sahne4Code.GDmucag2Objects1.length = 0;
gdjs.Sahne4Code.GDmucag2Objects2.length = 0;
gdjs.Sahne4Code.GDhakusd2Objects1.length = 0;
gdjs.Sahne4Code.GDhakusd2Objects2.length = 0;
gdjs.Sahne4Code.GDgarcdapad3Objects1.length = 0;
gdjs.Sahne4Code.GDgarcdapad3Objects2.length = 0;
gdjs.Sahne4Code.GDzovaskesd2Objects1.length = 0;
gdjs.Sahne4Code.GDzovaskesd2Objects2.length = 0;
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;

gdjs.Sahne4Code.eventsList0(runtimeScene);
gdjs.Sahne4Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne4Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne4Code.GDSagOkObjects1.length = 0;
gdjs.Sahne4Code.GDSagOkObjects2.length = 0;
gdjs.Sahne4Code.GDSolOkObjects1.length = 0;
gdjs.Sahne4Code.GDSolOkObjects2.length = 0;
gdjs.Sahne4Code.GDvernasabigObjects1.length = 0;
gdjs.Sahne4Code.GDvernasabigObjects2.length = 0;
gdjs.Sahne4Code.GDzovakesdObjects1.length = 0;
gdjs.Sahne4Code.GDzovakesdObjects2.length = 0;
gdjs.Sahne4Code.GDmucagObjects1.length = 0;
gdjs.Sahne4Code.GDmucagObjects2.length = 0;
gdjs.Sahne4Code.GDgarcdapadObjects1.length = 0;
gdjs.Sahne4Code.GDgarcdapadObjects2.length = 0;
gdjs.Sahne4Code.GDhakusdObjects1.length = 0;
gdjs.Sahne4Code.GDhakusdObjects2.length = 0;
gdjs.Sahne4Code.GDvernasabigTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDvernasabigTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDzovaskesdTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDzovaskesdTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDmucagTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDmucagTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDgarcdapadTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDgarcdapadTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDhakusdTextInputObjects1.length = 0;
gdjs.Sahne4Code.GDhakusdTextInputObjects2.length = 0;
gdjs.Sahne4Code.GDvernasabig3Objects1.length = 0;
gdjs.Sahne4Code.GDvernasabig3Objects2.length = 0;
gdjs.Sahne4Code.GDmucag2Objects1.length = 0;
gdjs.Sahne4Code.GDmucag2Objects2.length = 0;
gdjs.Sahne4Code.GDhakusd2Objects1.length = 0;
gdjs.Sahne4Code.GDhakusd2Objects2.length = 0;
gdjs.Sahne4Code.GDgarcdapad3Objects1.length = 0;
gdjs.Sahne4Code.GDgarcdapad3Objects2.length = 0;
gdjs.Sahne4Code.GDzovaskesd2Objects1.length = 0;
gdjs.Sahne4Code.GDzovaskesd2Objects2.length = 0;
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne4Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;


return;

}

gdjs['Sahne4Code'] = gdjs.Sahne4Code;
