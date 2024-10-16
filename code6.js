gdjs.Sahne6Code = {};
gdjs.Sahne6Code.localVariables = [];
gdjs.Sahne6Code.GDNewPanelSpriteObjects1= [];
gdjs.Sahne6Code.GDNewPanelSpriteObjects2= [];
gdjs.Sahne6Code.GDSag_9595OkObjects1= [];
gdjs.Sahne6Code.GDSag_9595OkObjects2= [];
gdjs.Sahne6Code.GDSol_9595OkObjects1= [];
gdjs.Sahne6Code.GDSol_9595OkObjects2= [];
gdjs.Sahne6Code.GDsabigObjects1= [];
gdjs.Sahne6Code.GDsabigObjects2= [];
gdjs.Sahne6Code.GDpesObjects1= [];
gdjs.Sahne6Code.GDpesObjects2= [];
gdjs.Sahne6Code.GDpacgonObjects1= [];
gdjs.Sahne6Code.GDpacgonObjects2= [];
gdjs.Sahne6Code.GDpohgapObjects1= [];
gdjs.Sahne6Code.GDpohgapObjects2= [];
gdjs.Sahne6Code.GDgosigObjects1= [];
gdjs.Sahne6Code.GDgosigObjects2= [];
gdjs.Sahne6Code.GDgosig2Objects1= [];
gdjs.Sahne6Code.GDgosig2Objects2= [];
gdjs.Sahne6Code.GDpohgap2Objects1= [];
gdjs.Sahne6Code.GDpohgap2Objects2= [];
gdjs.Sahne6Code.GDpacgon2Objects1= [];
gdjs.Sahne6Code.GDpacgon2Objects2= [];
gdjs.Sahne6Code.GDpes2Objects1= [];
gdjs.Sahne6Code.GDpes2Objects2= [];
gdjs.Sahne6Code.GDsabig2Objects1= [];
gdjs.Sahne6Code.GDsabig2Objects2= [];
gdjs.Sahne6Code.GDsabigTextInputObjects1= [];
gdjs.Sahne6Code.GDsabigTextInputObjects2= [];
gdjs.Sahne6Code.GDpesTextInputObjects1= [];
gdjs.Sahne6Code.GDpesTextInputObjects2= [];
gdjs.Sahne6Code.GDpacgonTextInputObjects1= [];
gdjs.Sahne6Code.GDpacgonTextInputObjects2= [];
gdjs.Sahne6Code.GDpohgapTextInputObjects1= [];
gdjs.Sahne6Code.GDpohgapTextInputObjects2= [];
gdjs.Sahne6Code.GDgosigTextInputObjects1= [];
gdjs.Sahne6Code.GDgosigTextInputObjects2= [];
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1= [];
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects2= [];


gdjs.Sahne6Code.mapOfGDgdjs_9546Sahne6Code_9546GDSag_95959595OkObjects1Objects = Hashtable.newFrom({"Sag_Ok": gdjs.Sahne6Code.GDSag_9595OkObjects1});
gdjs.Sahne6Code.mapOfGDgdjs_9546Sahne6Code_9546GDSag_95959595OkObjects1Objects = Hashtable.newFrom({"Sag_Ok": gdjs.Sahne6Code.GDSag_9595OkObjects1});
gdjs.Sahne6Code.mapOfGDgdjs_9546Sahne6Code_9546GDSol_95959595OkObjects1Objects = Hashtable.newFrom({"Sol_Ok": gdjs.Sahne6Code.GDSol_9595OkObjects1});
gdjs.Sahne6Code.mapOfGDgdjs_9546Sahne6Code_9546GDSol_95959595OkObjects1Objects = Hashtable.newFrom({"Sol_Ok": gdjs.Sahne6Code.GDSol_9595OkObjects1});
gdjs.Sahne6Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("sabigTextInput"), gdjs.Sahne6Code.GDsabigTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDsabigTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDsabigTextInputObjects1[i].getBehavior("Text").getText() == "շապիկ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDsabigTextInputObjects1[k] = gdjs.Sahne6Code.GDsabigTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDsabigTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sabig"), gdjs.Sahne6Code.GDsabigObjects1);
gdjs.copyArray(runtimeScene.getObjects("sabig2"), gdjs.Sahne6Code.GDsabig2Objects1);
/* Reuse gdjs.Sahne6Code.GDsabigTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDsabigTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDsabigTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne6Code.GDsabig2Objects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDsabig2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne6Code.GDsabigObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDsabigObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pesTextInput"), gdjs.Sahne6Code.GDpesTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDpesTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDpesTextInputObjects1[i].getBehavior("Text").getText() == "փէշ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDpesTextInputObjects1[k] = gdjs.Sahne6Code.GDpesTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDpesTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pes"), gdjs.Sahne6Code.GDpesObjects1);
gdjs.copyArray(runtimeScene.getObjects("pes2"), gdjs.Sahne6Code.GDpes2Objects1);
/* Reuse gdjs.Sahne6Code.GDpesTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDpesTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpesTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne6Code.GDpes2Objects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpes2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne6Code.GDpesObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpesObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pacgonTextInput"), gdjs.Sahne6Code.GDpacgonTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDpacgonTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDpacgonTextInputObjects1[i].getBehavior("Text").getText() == "բաճկոն" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDpacgonTextInputObjects1[k] = gdjs.Sahne6Code.GDpacgonTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDpacgonTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pacgon"), gdjs.Sahne6Code.GDpacgonObjects1);
gdjs.copyArray(runtimeScene.getObjects("pacgon2"), gdjs.Sahne6Code.GDpacgon2Objects1);
/* Reuse gdjs.Sahne6Code.GDpacgonTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDpacgonTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpacgonTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne6Code.GDpacgon2Objects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpacgon2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne6Code.GDpacgonObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpacgonObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pohgapTextInput"), gdjs.Sahne6Code.GDpohgapTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDpohgapTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDpohgapTextInputObjects1[i].getBehavior("Text").getText() == "փողկապ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDpohgapTextInputObjects1[k] = gdjs.Sahne6Code.GDpohgapTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDpohgapTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pohgap"), gdjs.Sahne6Code.GDpohgapObjects1);
gdjs.copyArray(runtimeScene.getObjects("pohgap2"), gdjs.Sahne6Code.GDpohgap2Objects1);
/* Reuse gdjs.Sahne6Code.GDpohgapTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDpohgapTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpohgapTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne6Code.GDpohgap2Objects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpohgap2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne6Code.GDpohgapObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDpohgapObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gosigTextInput"), gdjs.Sahne6Code.GDgosigTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDgosigTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDgosigTextInputObjects1[i].getBehavior("Text").getText() == "կօշիկ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDgosigTextInputObjects1[k] = gdjs.Sahne6Code.GDgosigTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDgosigTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gosig"), gdjs.Sahne6Code.GDgosigObjects1);
gdjs.copyArray(runtimeScene.getObjects("gosig2"), gdjs.Sahne6Code.GDgosig2Objects1);
/* Reuse gdjs.Sahne6Code.GDgosigTextInputObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDgosigTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDgosigTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne6Code.GDgosig2Objects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDgosig2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne6Code.GDgosigObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDgosigObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne6Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne6Code.mapOfGDgdjs_9546Sahne6Code_9546GDSag_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne6Code.GDSag_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDSag_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDSag_9595OkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne6Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne6Code.mapOfGDgdjs_9546Sahne6Code_9546GDSag_95959595OkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne6Code.GDSag_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDSag_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDSag_9595OkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne6Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDSag_9595OkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDSag_9595OkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDSag_9595OkObjects1[k] = gdjs.Sahne6Code.GDSag_9595OkObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDSag_9595OkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne7", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne6Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne6Code.mapOfGDgdjs_9546Sahne6Code_9546GDSol_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne6Code.GDSol_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDSol_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDSol_9595OkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne6Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne6Code.mapOfGDgdjs_9546Sahne6Code_9546GDSol_95959595OkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne6Code.GDSol_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDSol_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDSol_9595OkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne6Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDSol_9595OkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDSol_9595OkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDSol_9595OkObjects1[k] = gdjs.Sahne6Code.GDSol_9595OkObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDSol_9595OkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne5", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 10, 0);
}}

}


};

gdjs.Sahne6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sahne6Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne6Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne6Code.GDSag_9595OkObjects1.length = 0;
gdjs.Sahne6Code.GDSag_9595OkObjects2.length = 0;
gdjs.Sahne6Code.GDSol_9595OkObjects1.length = 0;
gdjs.Sahne6Code.GDSol_9595OkObjects2.length = 0;
gdjs.Sahne6Code.GDsabigObjects1.length = 0;
gdjs.Sahne6Code.GDsabigObjects2.length = 0;
gdjs.Sahne6Code.GDpesObjects1.length = 0;
gdjs.Sahne6Code.GDpesObjects2.length = 0;
gdjs.Sahne6Code.GDpacgonObjects1.length = 0;
gdjs.Sahne6Code.GDpacgonObjects2.length = 0;
gdjs.Sahne6Code.GDpohgapObjects1.length = 0;
gdjs.Sahne6Code.GDpohgapObjects2.length = 0;
gdjs.Sahne6Code.GDgosigObjects1.length = 0;
gdjs.Sahne6Code.GDgosigObjects2.length = 0;
gdjs.Sahne6Code.GDgosig2Objects1.length = 0;
gdjs.Sahne6Code.GDgosig2Objects2.length = 0;
gdjs.Sahne6Code.GDpohgap2Objects1.length = 0;
gdjs.Sahne6Code.GDpohgap2Objects2.length = 0;
gdjs.Sahne6Code.GDpacgon2Objects1.length = 0;
gdjs.Sahne6Code.GDpacgon2Objects2.length = 0;
gdjs.Sahne6Code.GDpes2Objects1.length = 0;
gdjs.Sahne6Code.GDpes2Objects2.length = 0;
gdjs.Sahne6Code.GDsabig2Objects1.length = 0;
gdjs.Sahne6Code.GDsabig2Objects2.length = 0;
gdjs.Sahne6Code.GDsabigTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDsabigTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDpesTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDpesTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDpacgonTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDpacgonTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDpohgapTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDpohgapTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDgosigTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDgosigTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;

gdjs.Sahne6Code.eventsList0(runtimeScene);
gdjs.Sahne6Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne6Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne6Code.GDSag_9595OkObjects1.length = 0;
gdjs.Sahne6Code.GDSag_9595OkObjects2.length = 0;
gdjs.Sahne6Code.GDSol_9595OkObjects1.length = 0;
gdjs.Sahne6Code.GDSol_9595OkObjects2.length = 0;
gdjs.Sahne6Code.GDsabigObjects1.length = 0;
gdjs.Sahne6Code.GDsabigObjects2.length = 0;
gdjs.Sahne6Code.GDpesObjects1.length = 0;
gdjs.Sahne6Code.GDpesObjects2.length = 0;
gdjs.Sahne6Code.GDpacgonObjects1.length = 0;
gdjs.Sahne6Code.GDpacgonObjects2.length = 0;
gdjs.Sahne6Code.GDpohgapObjects1.length = 0;
gdjs.Sahne6Code.GDpohgapObjects2.length = 0;
gdjs.Sahne6Code.GDgosigObjects1.length = 0;
gdjs.Sahne6Code.GDgosigObjects2.length = 0;
gdjs.Sahne6Code.GDgosig2Objects1.length = 0;
gdjs.Sahne6Code.GDgosig2Objects2.length = 0;
gdjs.Sahne6Code.GDpohgap2Objects1.length = 0;
gdjs.Sahne6Code.GDpohgap2Objects2.length = 0;
gdjs.Sahne6Code.GDpacgon2Objects1.length = 0;
gdjs.Sahne6Code.GDpacgon2Objects2.length = 0;
gdjs.Sahne6Code.GDpes2Objects1.length = 0;
gdjs.Sahne6Code.GDpes2Objects2.length = 0;
gdjs.Sahne6Code.GDsabig2Objects1.length = 0;
gdjs.Sahne6Code.GDsabig2Objects2.length = 0;
gdjs.Sahne6Code.GDsabigTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDsabigTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDpesTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDpesTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDpacgonTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDpacgonTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDpohgapTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDpohgapTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDgosigTextInputObjects1.length = 0;
gdjs.Sahne6Code.GDgosigTextInputObjects2.length = 0;
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne6Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;


return;

}

gdjs['Sahne6Code'] = gdjs.Sahne6Code;
