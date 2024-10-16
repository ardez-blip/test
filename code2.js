gdjs.Sahne2Code = {};
gdjs.Sahne2Code.localVariables = [];
gdjs.Sahne2Code.GDmuygTextInputObjects1= [];
gdjs.Sahne2Code.GDmuygTextInputObjects2= [];
gdjs.Sahne2Code.GDmuygObjects1= [];
gdjs.Sahne2Code.GDmuygObjects2= [];
gdjs.Sahne2Code.GDNewPanelSpriteObjects1= [];
gdjs.Sahne2Code.GDNewPanelSpriteObjects2= [];
gdjs.Sahne2Code.GDmuygtikObjects1= [];
gdjs.Sahne2Code.GDmuygtikObjects2= [];
gdjs.Sahne2Code.GDdapadtikObjects1= [];
gdjs.Sahne2Code.GDdapadtikObjects2= [];
gdjs.Sahne2Code.GDklhargtikObjects1= [];
gdjs.Sahne2Code.GDklhargtikObjects2= [];
gdjs.Sahne2Code.GDvznostikObjects1= [];
gdjs.Sahne2Code.GDvznostikObjects2= [];
gdjs.Sahne2Code.GDzernostikObjects1= [];
gdjs.Sahne2Code.GDzernostikObjects2= [];
gdjs.Sahne2Code.GDdapadObjects1= [];
gdjs.Sahne2Code.GDdapadObjects2= [];
gdjs.Sahne2Code.GDdapadTextInputObjects1= [];
gdjs.Sahne2Code.GDdapadTextInputObjects2= [];
gdjs.Sahne2Code.GDklhargObjects1= [];
gdjs.Sahne2Code.GDklhargObjects2= [];
gdjs.Sahne2Code.GDklhargTextInputObjects1= [];
gdjs.Sahne2Code.GDklhargTextInputObjects2= [];
gdjs.Sahne2Code.GDvznosTextInputObjects1= [];
gdjs.Sahne2Code.GDvznosTextInputObjects2= [];
gdjs.Sahne2Code.GDvznosObjects1= [];
gdjs.Sahne2Code.GDvznosObjects2= [];
gdjs.Sahne2Code.GDzernosObjects1= [];
gdjs.Sahne2Code.GDzernosObjects2= [];
gdjs.Sahne2Code.GDzernosTextInputObjects1= [];
gdjs.Sahne2Code.GDzernosTextInputObjects2= [];
gdjs.Sahne2Code.GDSagOkObjects1= [];
gdjs.Sahne2Code.GDSagOkObjects2= [];
gdjs.Sahne2Code.GDSolOkObjects1= [];
gdjs.Sahne2Code.GDSolOkObjects2= [];
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1= [];
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects2= [];


gdjs.Sahne2Code.mapOfGDgdjs_9546Sahne2Code_9546GDSagOkObjects1Objects = Hashtable.newFrom({"SagOk": gdjs.Sahne2Code.GDSagOkObjects1});
gdjs.Sahne2Code.mapOfGDgdjs_9546Sahne2Code_9546GDSagOkObjects1Objects = Hashtable.newFrom({"SagOk": gdjs.Sahne2Code.GDSagOkObjects1});
gdjs.Sahne2Code.mapOfGDgdjs_9546Sahne2Code_9546GDSolOkObjects1Objects = Hashtable.newFrom({"SolOk": gdjs.Sahne2Code.GDSolOkObjects1});
gdjs.Sahne2Code.mapOfGDgdjs_9546Sahne2Code_9546GDSolOkObjects1Objects = Hashtable.newFrom({"SolOk": gdjs.Sahne2Code.GDSolOkObjects1});
gdjs.Sahne2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("muygTextInput"), gdjs.Sahne2Code.GDmuygTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDmuygTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDmuygTextInputObjects1[i].getBehavior("Text").getText() == "մոյկ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDmuygTextInputObjects1[k] = gdjs.Sahne2Code.GDmuygTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDmuygTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("muyg"), gdjs.Sahne2Code.GDmuygObjects1);
/* Reuse gdjs.Sahne2Code.GDmuygTextInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("muygtik"), gdjs.Sahne2Code.GDmuygtikObjects1);
{for(var i = 0, len = gdjs.Sahne2Code.GDmuygTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDmuygTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne2Code.GDmuygObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDmuygObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne2Code.GDmuygtikObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDmuygtikObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dapadTextInput"), gdjs.Sahne2Code.GDdapadTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDdapadTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDdapadTextInputObjects1[i].getBehavior("Text").getText() == "տաբատ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDdapadTextInputObjects1[k] = gdjs.Sahne2Code.GDdapadTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDdapadTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dapad"), gdjs.Sahne2Code.GDdapadObjects1);
/* Reuse gdjs.Sahne2Code.GDdapadTextInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("dapadtik"), gdjs.Sahne2Code.GDdapadtikObjects1);
{for(var i = 0, len = gdjs.Sahne2Code.GDdapadTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDdapadTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne2Code.GDdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDdapadObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne2Code.GDdapadtikObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDdapadtikObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("klhargTextInput"), gdjs.Sahne2Code.GDklhargTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDklhargTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDklhargTextInputObjects1[i].getBehavior("Text").getText() == "գլխարկ" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDklhargTextInputObjects1[k] = gdjs.Sahne2Code.GDklhargTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDklhargTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("klharg"), gdjs.Sahne2Code.GDklhargObjects1);
/* Reuse gdjs.Sahne2Code.GDklhargTextInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("klhargtik"), gdjs.Sahne2Code.GDklhargtikObjects1);
{for(var i = 0, len = gdjs.Sahne2Code.GDklhargTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDklhargTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne2Code.GDklhargObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDklhargObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne2Code.GDklhargtikObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDklhargtikObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vznosTextInput"), gdjs.Sahne2Code.GDvznosTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDvznosTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDvznosTextInputObjects1[i].getBehavior("Text").getText() == "վզնոց" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDvznosTextInputObjects1[k] = gdjs.Sahne2Code.GDvznosTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDvznosTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vznos"), gdjs.Sahne2Code.GDvznosObjects1);
/* Reuse gdjs.Sahne2Code.GDvznosTextInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("vznostik"), gdjs.Sahne2Code.GDvznostikObjects1);
{for(var i = 0, len = gdjs.Sahne2Code.GDvznosTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDvznosTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne2Code.GDvznosObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDvznosObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne2Code.GDvznostikObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDvznostikObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zernosTextInput"), gdjs.Sahne2Code.GDzernosTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDzernosTextInputObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDzernosTextInputObjects1[i].getBehavior("Text").getText() == "ձեռնոց" ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDzernosTextInputObjects1[k] = gdjs.Sahne2Code.GDzernosTextInputObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDzernosTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("zernos"), gdjs.Sahne2Code.GDzernosObjects1);
/* Reuse gdjs.Sahne2Code.GDzernosTextInputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("zernostik"), gdjs.Sahne2Code.GDzernostikObjects1);
{for(var i = 0, len = gdjs.Sahne2Code.GDzernosTextInputObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDzernosTextInputObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne2Code.GDzernosObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDzernosObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne2Code.GDzernostikObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDzernostikObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne2Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne2Code.mapOfGDgdjs_9546Sahne2Code_9546GDSagOkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne2Code.GDSagOkObjects1 */
{for(var i = 0, len = gdjs.Sahne2Code.GDSagOkObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDSagOkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne2Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne2Code.mapOfGDgdjs_9546Sahne2Code_9546GDSagOkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne2Code.GDSagOkObjects1 */
{for(var i = 0, len = gdjs.Sahne2Code.GDSagOkObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDSagOkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne2Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDSagOkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDSagOkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDSagOkObjects1[k] = gdjs.Sahne2Code.GDSagOkObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDSagOkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne3", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne2Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne2Code.mapOfGDgdjs_9546Sahne2Code_9546GDSolOkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne2Code.GDSolOkObjects1 */
{for(var i = 0, len = gdjs.Sahne2Code.GDSolOkObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDSolOkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne2Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne2Code.mapOfGDgdjs_9546Sahne2Code_9546GDSolOkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne2Code.GDSolOkObjects1 */
{for(var i = 0, len = gdjs.Sahne2Code.GDSolOkObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDSolOkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne2Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDSolOkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDSolOkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDSolOkObjects1[k] = gdjs.Sahne2Code.GDSolOkObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDSolOkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 10, 0);
}}

}


};

gdjs.Sahne2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sahne2Code.GDmuygTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDmuygTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDmuygObjects1.length = 0;
gdjs.Sahne2Code.GDmuygObjects2.length = 0;
gdjs.Sahne2Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne2Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne2Code.GDmuygtikObjects1.length = 0;
gdjs.Sahne2Code.GDmuygtikObjects2.length = 0;
gdjs.Sahne2Code.GDdapadtikObjects1.length = 0;
gdjs.Sahne2Code.GDdapadtikObjects2.length = 0;
gdjs.Sahne2Code.GDklhargtikObjects1.length = 0;
gdjs.Sahne2Code.GDklhargtikObjects2.length = 0;
gdjs.Sahne2Code.GDvznostikObjects1.length = 0;
gdjs.Sahne2Code.GDvznostikObjects2.length = 0;
gdjs.Sahne2Code.GDzernostikObjects1.length = 0;
gdjs.Sahne2Code.GDzernostikObjects2.length = 0;
gdjs.Sahne2Code.GDdapadObjects1.length = 0;
gdjs.Sahne2Code.GDdapadObjects2.length = 0;
gdjs.Sahne2Code.GDdapadTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDdapadTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDklhargObjects1.length = 0;
gdjs.Sahne2Code.GDklhargObjects2.length = 0;
gdjs.Sahne2Code.GDklhargTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDklhargTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDvznosTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDvznosTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDvznosObjects1.length = 0;
gdjs.Sahne2Code.GDvznosObjects2.length = 0;
gdjs.Sahne2Code.GDzernosObjects1.length = 0;
gdjs.Sahne2Code.GDzernosObjects2.length = 0;
gdjs.Sahne2Code.GDzernosTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDzernosTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDSagOkObjects1.length = 0;
gdjs.Sahne2Code.GDSagOkObjects2.length = 0;
gdjs.Sahne2Code.GDSolOkObjects1.length = 0;
gdjs.Sahne2Code.GDSolOkObjects2.length = 0;
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;

gdjs.Sahne2Code.eventsList0(runtimeScene);
gdjs.Sahne2Code.GDmuygTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDmuygTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDmuygObjects1.length = 0;
gdjs.Sahne2Code.GDmuygObjects2.length = 0;
gdjs.Sahne2Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne2Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne2Code.GDmuygtikObjects1.length = 0;
gdjs.Sahne2Code.GDmuygtikObjects2.length = 0;
gdjs.Sahne2Code.GDdapadtikObjects1.length = 0;
gdjs.Sahne2Code.GDdapadtikObjects2.length = 0;
gdjs.Sahne2Code.GDklhargtikObjects1.length = 0;
gdjs.Sahne2Code.GDklhargtikObjects2.length = 0;
gdjs.Sahne2Code.GDvznostikObjects1.length = 0;
gdjs.Sahne2Code.GDvznostikObjects2.length = 0;
gdjs.Sahne2Code.GDzernostikObjects1.length = 0;
gdjs.Sahne2Code.GDzernostikObjects2.length = 0;
gdjs.Sahne2Code.GDdapadObjects1.length = 0;
gdjs.Sahne2Code.GDdapadObjects2.length = 0;
gdjs.Sahne2Code.GDdapadTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDdapadTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDklhargObjects1.length = 0;
gdjs.Sahne2Code.GDklhargObjects2.length = 0;
gdjs.Sahne2Code.GDklhargTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDklhargTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDvznosTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDvznosTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDvznosObjects1.length = 0;
gdjs.Sahne2Code.GDvznosObjects2.length = 0;
gdjs.Sahne2Code.GDzernosObjects1.length = 0;
gdjs.Sahne2Code.GDzernosObjects2.length = 0;
gdjs.Sahne2Code.GDzernosTextInputObjects1.length = 0;
gdjs.Sahne2Code.GDzernosTextInputObjects2.length = 0;
gdjs.Sahne2Code.GDSagOkObjects1.length = 0;
gdjs.Sahne2Code.GDSagOkObjects2.length = 0;
gdjs.Sahne2Code.GDSolOkObjects1.length = 0;
gdjs.Sahne2Code.GDSolOkObjects2.length = 0;
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne2Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;


return;

}

gdjs['Sahne2Code'] = gdjs.Sahne2Code;
