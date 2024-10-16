gdjs.Sahne3Code = {};
gdjs.Sahne3Code.localVariables = [];
gdjs.Sahne3Code.GDNewPanelSpriteObjects1= [];
gdjs.Sahne3Code.GDNewPanelSpriteObjects2= [];
gdjs.Sahne3Code.GDHakusdObjects1= [];
gdjs.Sahne3Code.GDHakusdObjects2= [];
gdjs.Sahne3Code.GDHakusdSeffafObjects1= [];
gdjs.Sahne3Code.GDHakusdSeffafObjects2= [];
gdjs.Sahne3Code.GDGarc_9595DapadObjects1= [];
gdjs.Sahne3Code.GDGarc_9595DapadObjects2= [];
gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1= [];
gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects2= [];
gdjs.Sahne3Code.GDMucagObjects1= [];
gdjs.Sahne3Code.GDMucagObjects2= [];
gdjs.Sahne3Code.GDMucagSeffafObjects1= [];
gdjs.Sahne3Code.GDMucagSeffafObjects2= [];
gdjs.Sahne3Code.GDZovakesdObjects1= [];
gdjs.Sahne3Code.GDZovakesdObjects2= [];
gdjs.Sahne3Code.GDZovakesdSeffafObjects1= [];
gdjs.Sahne3Code.GDZovakesdSeffafObjects2= [];
gdjs.Sahne3Code.GDVernasabigObjects1= [];
gdjs.Sahne3Code.GDVernasabigObjects2= [];
gdjs.Sahne3Code.GDVernasabigSeffafObjects1= [];
gdjs.Sahne3Code.GDVernasabigSeffafObjects2= [];
gdjs.Sahne3Code.GDSagOkObjects1= [];
gdjs.Sahne3Code.GDSagOkObjects2= [];
gdjs.Sahne3Code.GDSolOkObjects1= [];
gdjs.Sahne3Code.GDSolOkObjects2= [];
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1= [];
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects2= [];


gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDSagOkObjects1Objects = Hashtable.newFrom({"SagOk": gdjs.Sahne3Code.GDSagOkObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDSagOkObjects1Objects = Hashtable.newFrom({"SagOk": gdjs.Sahne3Code.GDSagOkObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDSolOkObjects1Objects = Hashtable.newFrom({"SolOk": gdjs.Sahne3Code.GDSolOkObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDSolOkObjects1Objects = Hashtable.newFrom({"SolOk": gdjs.Sahne3Code.GDSolOkObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdObjects1Objects = Hashtable.newFrom({"Hakusd": gdjs.Sahne3Code.GDHakusdObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdObjects1Objects = Hashtable.newFrom({"Hakusd": gdjs.Sahne3Code.GDHakusdObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdObjects1Objects = Hashtable.newFrom({"Hakusd": gdjs.Sahne3Code.GDHakusdObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdSeffafObjects1Objects = Hashtable.newFrom({"HakusdSeffaf": gdjs.Sahne3Code.GDHakusdSeffafObjects1});
gdjs.Sahne3Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne3Code.GDHakusdObjects1 */
gdjs.copyArray(runtimeScene.getObjects("HakusdSeffaf"), gdjs.Sahne3Code.GDHakusdSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdSeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDHakusdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDHakusdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDHakusdObjects1[i].setPosition(1080,99);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdObjects1Objects = Hashtable.newFrom({"Hakusd": gdjs.Sahne3Code.GDHakusdObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdSeffafObjects1Objects = Hashtable.newFrom({"HakusdSeffaf": gdjs.Sahne3Code.GDHakusdSeffafObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadObjects1Objects = Hashtable.newFrom({"Garc_Dapad": gdjs.Sahne3Code.GDGarc_9595DapadObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadObjects1Objects = Hashtable.newFrom({"Garc_Dapad": gdjs.Sahne3Code.GDGarc_9595DapadObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadObjects1Objects = Hashtable.newFrom({"Garc_Dapad": gdjs.Sahne3Code.GDGarc_9595DapadObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadSeffafObjects1Objects = Hashtable.newFrom({"Garc_DapadSeffaf": gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1});
gdjs.Sahne3Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne3Code.GDGarc_9595DapadObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Garc_DapadSeffaf"), gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadSeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDGarc_9595DapadObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].setPosition(49,104);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadObjects1Objects = Hashtable.newFrom({"Garc_Dapad": gdjs.Sahne3Code.GDGarc_9595DapadObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadSeffafObjects1Objects = Hashtable.newFrom({"Garc_DapadSeffaf": gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagObjects1Objects = Hashtable.newFrom({"Mucag": gdjs.Sahne3Code.GDMucagObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagObjects1Objects = Hashtable.newFrom({"Mucag": gdjs.Sahne3Code.GDMucagObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagObjects1Objects = Hashtable.newFrom({"Mucag": gdjs.Sahne3Code.GDMucagObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagSeffafObjects1Objects = Hashtable.newFrom({"MucagSeffaf": gdjs.Sahne3Code.GDMucagSeffafObjects1});
gdjs.Sahne3Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne3Code.GDMucagObjects1 */
gdjs.copyArray(runtimeScene.getObjects("MucagSeffaf"), gdjs.Sahne3Code.GDMucagSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagSeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDMucagObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDMucagObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMucagObjects1[i].setPosition(1128,323);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagObjects1Objects = Hashtable.newFrom({"Mucag": gdjs.Sahne3Code.GDMucagObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagSeffafObjects1Objects = Hashtable.newFrom({"MucagSeffaf": gdjs.Sahne3Code.GDMucagSeffafObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdObjects1Objects = Hashtable.newFrom({"Zovakesd": gdjs.Sahne3Code.GDZovakesdObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdObjects1Objects = Hashtable.newFrom({"Zovakesd": gdjs.Sahne3Code.GDZovakesdObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdObjects1Objects = Hashtable.newFrom({"Zovakesd": gdjs.Sahne3Code.GDZovakesdObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdSeffafObjects1Objects = Hashtable.newFrom({"ZovakesdSeffaf": gdjs.Sahne3Code.GDZovakesdSeffafObjects1});
gdjs.Sahne3Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne3Code.GDZovakesdObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ZovakesdSeffaf"), gdjs.Sahne3Code.GDZovakesdSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdSeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDZovakesdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDZovakesdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDZovakesdObjects1[i].setPosition(-(9),314);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdObjects1Objects = Hashtable.newFrom({"Zovakesd": gdjs.Sahne3Code.GDZovakesdObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdSeffafObjects1Objects = Hashtable.newFrom({"ZovakesdSeffaf": gdjs.Sahne3Code.GDZovakesdSeffafObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigObjects1Objects = Hashtable.newFrom({"Vernasabig": gdjs.Sahne3Code.GDVernasabigObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigObjects1Objects = Hashtable.newFrom({"Vernasabig": gdjs.Sahne3Code.GDVernasabigObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigObjects1Objects = Hashtable.newFrom({"Vernasabig": gdjs.Sahne3Code.GDVernasabigObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigSeffafObjects1Objects = Hashtable.newFrom({"VernasabigSeffaf": gdjs.Sahne3Code.GDVernasabigSeffafObjects1});
gdjs.Sahne3Code.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne3Code.GDVernasabigObjects1 */
gdjs.copyArray(runtimeScene.getObjects("VernasabigSeffaf"), gdjs.Sahne3Code.GDVernasabigSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigSeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDVernasabigObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDVernasabigObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDVernasabigObjects1[i].setPosition(903,418);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigObjects1Objects = Hashtable.newFrom({"Vernasabig": gdjs.Sahne3Code.GDVernasabigObjects1});
gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigSeffafObjects1Objects = Hashtable.newFrom({"VernasabigSeffaf": gdjs.Sahne3Code.GDVernasabigSeffafObjects1});
gdjs.Sahne3Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne3Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDSagOkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDSagOkObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDSagOkObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDSagOkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne3Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDSagOkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDSagOkObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDSagOkObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDSagOkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SagOk"), gdjs.Sahne3Code.GDSagOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDSagOkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDSagOkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDSagOkObjects1[k] = gdjs.Sahne3Code.GDSagOkObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDSagOkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne4", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne3Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDSolOkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDSolOkObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDSolOkObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDSolOkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne3Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDSolOkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDSolOkObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDSolOkObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDSolOkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolOk"), gdjs.Sahne3Code.GDSolOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDSolOkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDSolOkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDSolOkObjects1[k] = gdjs.Sahne3Code.GDSolOkObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDSolOkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hakusd"), gdjs.Sahne3Code.GDHakusdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDHakusdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDHakusdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDHakusdObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hakusd"), gdjs.Sahne3Code.GDHakusdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDHakusdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDHakusdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDHakusdObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hakusd"), gdjs.Sahne3Code.GDHakusdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDHakusdObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDHakusdObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDHakusdObjects1[k] = gdjs.Sahne3Code.GDHakusdObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDHakusdObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDHakusdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDHakusdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDHakusdObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hakusd"), gdjs.Sahne3Code.GDHakusdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDHakusdObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDHakusdObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDHakusdObjects1[k] = gdjs.Sahne3Code.GDHakusdObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDHakusdObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDHakusdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDHakusdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDHakusdObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{ //Subevents
gdjs.Sahne3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hakusd"), gdjs.Sahne3Code.GDHakusdObjects1);
gdjs.copyArray(runtimeScene.getObjects("HakusdSeffaf"), gdjs.Sahne3Code.GDHakusdSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDHakusdSeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDHakusdObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDHakusdObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDHakusdObjects1[k] = gdjs.Sahne3Code.GDHakusdObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDHakusdObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDHakusdObjects1 */
/* Reuse gdjs.Sahne3Code.GDHakusdSeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDHakusdSeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDHakusdSeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Sahne3Code.GDHakusdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDHakusdObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Garc_Dapad"), gdjs.Sahne3Code.GDGarc_9595DapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDGarc_9595DapadObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Garc_Dapad"), gdjs.Sahne3Code.GDGarc_9595DapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDGarc_9595DapadObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Garc_Dapad"), gdjs.Sahne3Code.GDGarc_9595DapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDGarc_9595DapadObjects1[k] = gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDGarc_9595DapadObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Garc_Dapad"), gdjs.Sahne3Code.GDGarc_9595DapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDGarc_9595DapadObjects1[k] = gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDGarc_9595DapadObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
{ //Subevents
gdjs.Sahne3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Garc_Dapad"), gdjs.Sahne3Code.GDGarc_9595DapadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Garc_DapadSeffaf"), gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDGarc_95959595DapadSeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDGarc_9595DapadObjects1[k] = gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDGarc_9595DapadObjects1 */
/* Reuse gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDGarc_9595DapadObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mucag"), gdjs.Sahne3Code.GDMucagObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDMucagObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDMucagObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMucagObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mucag"), gdjs.Sahne3Code.GDMucagObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDMucagObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDMucagObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMucagObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mucag"), gdjs.Sahne3Code.GDMucagObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDMucagObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDMucagObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDMucagObjects1[k] = gdjs.Sahne3Code.GDMucagObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDMucagObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDMucagObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDMucagObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMucagObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mucag"), gdjs.Sahne3Code.GDMucagObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDMucagObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDMucagObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDMucagObjects1[k] = gdjs.Sahne3Code.GDMucagObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDMucagObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDMucagObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDMucagObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMucagObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{ //Subevents
gdjs.Sahne3Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mucag"), gdjs.Sahne3Code.GDMucagObjects1);
gdjs.copyArray(runtimeScene.getObjects("MucagSeffaf"), gdjs.Sahne3Code.GDMucagSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDMucagSeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDMucagObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDMucagObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDMucagObjects1[k] = gdjs.Sahne3Code.GDMucagObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDMucagObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDMucagObjects1 */
/* Reuse gdjs.Sahne3Code.GDMucagSeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDMucagObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMucagObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne3Code.GDMucagSeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMucagSeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zovakesd"), gdjs.Sahne3Code.GDZovakesdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDZovakesdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDZovakesdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDZovakesdObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zovakesd"), gdjs.Sahne3Code.GDZovakesdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDZovakesdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDZovakesdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDZovakesdObjects1[i].getBehavior("Scale").setScale(0.3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zovakesd"), gdjs.Sahne3Code.GDZovakesdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDZovakesdObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDZovakesdObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDZovakesdObjects1[k] = gdjs.Sahne3Code.GDZovakesdObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDZovakesdObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDZovakesdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDZovakesdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDZovakesdObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zovakesd"), gdjs.Sahne3Code.GDZovakesdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDZovakesdObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDZovakesdObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDZovakesdObjects1[k] = gdjs.Sahne3Code.GDZovakesdObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDZovakesdObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDZovakesdObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDZovakesdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDZovakesdObjects1[i].getBehavior("Scale").setScale(0.3);
}
}
{ //Subevents
gdjs.Sahne3Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zovakesd"), gdjs.Sahne3Code.GDZovakesdObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZovakesdSeffaf"), gdjs.Sahne3Code.GDZovakesdSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDZovakesdSeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDZovakesdObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDZovakesdObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDZovakesdObjects1[k] = gdjs.Sahne3Code.GDZovakesdObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDZovakesdObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDZovakesdObjects1 */
/* Reuse gdjs.Sahne3Code.GDZovakesdSeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDZovakesdObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDZovakesdObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne3Code.GDZovakesdSeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDZovakesdSeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vernasabig"), gdjs.Sahne3Code.GDVernasabigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDVernasabigObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDVernasabigObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDVernasabigObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vernasabig"), gdjs.Sahne3Code.GDVernasabigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDVernasabigObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDVernasabigObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDVernasabigObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vernasabig"), gdjs.Sahne3Code.GDVernasabigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDVernasabigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDVernasabigObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDVernasabigObjects1[k] = gdjs.Sahne3Code.GDVernasabigObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDVernasabigObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDVernasabigObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDVernasabigObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDVernasabigObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vernasabig"), gdjs.Sahne3Code.GDVernasabigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDVernasabigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDVernasabigObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDVernasabigObjects1[k] = gdjs.Sahne3Code.GDVernasabigObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDVernasabigObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDVernasabigObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDVernasabigObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDVernasabigObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
{ //Subevents
gdjs.Sahne3Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vernasabig"), gdjs.Sahne3Code.GDVernasabigObjects1);
gdjs.copyArray(runtimeScene.getObjects("VernasabigSeffaf"), gdjs.Sahne3Code.GDVernasabigSeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigObjects1Objects, gdjs.Sahne3Code.mapOfGDgdjs_9546Sahne3Code_9546GDVernasabigSeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDVernasabigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDVernasabigObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDVernasabigObjects1[k] = gdjs.Sahne3Code.GDVernasabigObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDVernasabigObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDVernasabigObjects1 */
/* Reuse gdjs.Sahne3Code.GDVernasabigSeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDVernasabigObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDVernasabigObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne3Code.GDVernasabigSeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDVernasabigSeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 10, 0);
}}

}


};

gdjs.Sahne3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sahne3Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne3Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne3Code.GDHakusdObjects1.length = 0;
gdjs.Sahne3Code.GDHakusdObjects2.length = 0;
gdjs.Sahne3Code.GDHakusdSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDHakusdSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length = 0;
gdjs.Sahne3Code.GDGarc_9595DapadObjects2.length = 0;
gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDMucagObjects1.length = 0;
gdjs.Sahne3Code.GDMucagObjects2.length = 0;
gdjs.Sahne3Code.GDMucagSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDMucagSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDZovakesdObjects1.length = 0;
gdjs.Sahne3Code.GDZovakesdObjects2.length = 0;
gdjs.Sahne3Code.GDZovakesdSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDZovakesdSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDVernasabigObjects1.length = 0;
gdjs.Sahne3Code.GDVernasabigObjects2.length = 0;
gdjs.Sahne3Code.GDVernasabigSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDVernasabigSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDSagOkObjects1.length = 0;
gdjs.Sahne3Code.GDSagOkObjects2.length = 0;
gdjs.Sahne3Code.GDSolOkObjects1.length = 0;
gdjs.Sahne3Code.GDSolOkObjects2.length = 0;
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;

gdjs.Sahne3Code.eventsList5(runtimeScene);
gdjs.Sahne3Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne3Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne3Code.GDHakusdObjects1.length = 0;
gdjs.Sahne3Code.GDHakusdObjects2.length = 0;
gdjs.Sahne3Code.GDHakusdSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDHakusdSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDGarc_9595DapadObjects1.length = 0;
gdjs.Sahne3Code.GDGarc_9595DapadObjects2.length = 0;
gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDGarc_9595DapadSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDMucagObjects1.length = 0;
gdjs.Sahne3Code.GDMucagObjects2.length = 0;
gdjs.Sahne3Code.GDMucagSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDMucagSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDZovakesdObjects1.length = 0;
gdjs.Sahne3Code.GDZovakesdObjects2.length = 0;
gdjs.Sahne3Code.GDZovakesdSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDZovakesdSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDVernasabigObjects1.length = 0;
gdjs.Sahne3Code.GDVernasabigObjects2.length = 0;
gdjs.Sahne3Code.GDVernasabigSeffafObjects1.length = 0;
gdjs.Sahne3Code.GDVernasabigSeffafObjects2.length = 0;
gdjs.Sahne3Code.GDSagOkObjects1.length = 0;
gdjs.Sahne3Code.GDSagOkObjects2.length = 0;
gdjs.Sahne3Code.GDSolOkObjects1.length = 0;
gdjs.Sahne3Code.GDSolOkObjects2.length = 0;
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne3Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;


return;

}

gdjs['Sahne3Code'] = gdjs.Sahne3Code;
