gdjs.Sahne1Code = {};
gdjs.Sahne1Code.localVariables = [];
gdjs.Sahne1Code.GDseffafklhargObjects1= [];
gdjs.Sahne1Code.GDseffafklhargObjects2= [];
gdjs.Sahne1Code.GDklhargObjects1= [];
gdjs.Sahne1Code.GDklhargObjects2= [];
gdjs.Sahne1Code.GDNewPanelSpriteObjects1= [];
gdjs.Sahne1Code.GDNewPanelSpriteObjects2= [];
gdjs.Sahne1Code.GDseffafdapadObjects1= [];
gdjs.Sahne1Code.GDseffafdapadObjects2= [];
gdjs.Sahne1Code.GDdapadObjects1= [];
gdjs.Sahne1Code.GDdapadObjects2= [];
gdjs.Sahne1Code.GDzernosObjects1= [];
gdjs.Sahne1Code.GDzernosObjects2= [];
gdjs.Sahne1Code.GDseffafzernosObjects1= [];
gdjs.Sahne1Code.GDseffafzernosObjects2= [];
gdjs.Sahne1Code.GDmuygObjects1= [];
gdjs.Sahne1Code.GDmuygObjects2= [];
gdjs.Sahne1Code.GDseffafmuygObjects1= [];
gdjs.Sahne1Code.GDseffafmuygObjects2= [];
gdjs.Sahne1Code.GDvznosObjects1= [];
gdjs.Sahne1Code.GDvznosObjects2= [];
gdjs.Sahne1Code.GDseffafvznosObjects1= [];
gdjs.Sahne1Code.GDseffafvznosObjects2= [];
gdjs.Sahne1Code.GDSag_9595OkObjects1= [];
gdjs.Sahne1Code.GDSag_9595OkObjects2= [];
gdjs.Sahne1Code.GDSol_9595OkObjects1= [];
gdjs.Sahne1Code.GDSol_9595OkObjects2= [];
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1= [];
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects2= [];


gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDSag_95959595OkObjects1Objects = Hashtable.newFrom({"Sag_Ok": gdjs.Sahne1Code.GDSag_9595OkObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDSag_95959595OkObjects1Objects = Hashtable.newFrom({"Sag_Ok": gdjs.Sahne1Code.GDSag_9595OkObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDklhargObjects1Objects = Hashtable.newFrom({"klharg": gdjs.Sahne1Code.GDklhargObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDklhargObjects1Objects = Hashtable.newFrom({"klharg": gdjs.Sahne1Code.GDklhargObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDklhargObjects1Objects = Hashtable.newFrom({"klharg": gdjs.Sahne1Code.GDklhargObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafklhargObjects1Objects = Hashtable.newFrom({"seffafklharg": gdjs.Sahne1Code.GDseffafklhargObjects1});
gdjs.Sahne1Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne1Code.GDklhargObjects1 */
gdjs.copyArray(runtimeScene.getObjects("seffafklharg"), gdjs.Sahne1Code.GDseffafklhargObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDklhargObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafklhargObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDklhargObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDklhargObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDklhargObjects1[i].setPosition(916,392);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDklhargObjects1Objects = Hashtable.newFrom({"klharg": gdjs.Sahne1Code.GDklhargObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafklhargObjects1Objects = Hashtable.newFrom({"seffafklharg": gdjs.Sahne1Code.GDseffafklhargObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDdapadObjects1Objects = Hashtable.newFrom({"dapad": gdjs.Sahne1Code.GDdapadObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDdapadObjects1Objects = Hashtable.newFrom({"dapad": gdjs.Sahne1Code.GDdapadObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDdapadObjects1Objects = Hashtable.newFrom({"dapad": gdjs.Sahne1Code.GDdapadObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafdapadObjects1Objects = Hashtable.newFrom({"seffafdapad": gdjs.Sahne1Code.GDseffafdapadObjects1});
gdjs.Sahne1Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne1Code.GDdapadObjects1 */
gdjs.copyArray(runtimeScene.getObjects("seffafdapad"), gdjs.Sahne1Code.GDseffafdapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDdapadObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafdapadObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDdapadObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDdapadObjects1[i].setPosition(69,154);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDdapadObjects1Objects = Hashtable.newFrom({"dapad": gdjs.Sahne1Code.GDdapadObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafdapadObjects1Objects = Hashtable.newFrom({"seffafdapad": gdjs.Sahne1Code.GDseffafdapadObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDzernosObjects1Objects = Hashtable.newFrom({"zernos": gdjs.Sahne1Code.GDzernosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDzernosObjects1Objects = Hashtable.newFrom({"zernos": gdjs.Sahne1Code.GDzernosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDzernosObjects1Objects = Hashtable.newFrom({"zernos": gdjs.Sahne1Code.GDzernosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafzernosObjects1Objects = Hashtable.newFrom({"seffafzernos": gdjs.Sahne1Code.GDseffafzernosObjects1});
gdjs.Sahne1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("seffafzernos"), gdjs.Sahne1Code.GDseffafzernosObjects1);
/* Reuse gdjs.Sahne1Code.GDzernosObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDzernosObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafzernosObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDzernosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDzernosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDzernosObjects1[i].setPosition(1078,133);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDzernosObjects1Objects = Hashtable.newFrom({"zernos": gdjs.Sahne1Code.GDzernosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafzernosObjects1Objects = Hashtable.newFrom({"seffafzernos": gdjs.Sahne1Code.GDseffafzernosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDmuygObjects1Objects = Hashtable.newFrom({"muyg": gdjs.Sahne1Code.GDmuygObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDmuygObjects1Objects = Hashtable.newFrom({"muyg": gdjs.Sahne1Code.GDmuygObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDmuygObjects1Objects = Hashtable.newFrom({"muyg": gdjs.Sahne1Code.GDmuygObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafmuygObjects1Objects = Hashtable.newFrom({"seffafmuyg": gdjs.Sahne1Code.GDseffafmuygObjects1});
gdjs.Sahne1Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne1Code.GDmuygObjects1 */
gdjs.copyArray(runtimeScene.getObjects("seffafmuyg"), gdjs.Sahne1Code.GDseffafmuygObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDmuygObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafmuygObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDmuygObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDmuygObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDmuygObjects1[i].setPosition(145,354);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDmuygObjects1Objects = Hashtable.newFrom({"muyg": gdjs.Sahne1Code.GDmuygObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafmuygObjects1Objects = Hashtable.newFrom({"seffafmuyg": gdjs.Sahne1Code.GDseffafmuygObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDvznosObjects1Objects = Hashtable.newFrom({"vznos": gdjs.Sahne1Code.GDvznosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDvznosObjects1Objects = Hashtable.newFrom({"vznos": gdjs.Sahne1Code.GDvznosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDvznosObjects1Objects = Hashtable.newFrom({"vznos": gdjs.Sahne1Code.GDvznosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafvznosObjects1Objects = Hashtable.newFrom({"seffafvznos": gdjs.Sahne1Code.GDseffafvznosObjects1});
gdjs.Sahne1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("seffafvznos"), gdjs.Sahne1Code.GDseffafvznosObjects1);
/* Reuse gdjs.Sahne1Code.GDvznosObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDvznosObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafvznosObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDvznosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDvznosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDvznosObjects1[i].setPosition(1118,306);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDvznosObjects1Objects = Hashtable.newFrom({"vznos": gdjs.Sahne1Code.GDvznosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafvznosObjects1Objects = Hashtable.newFrom({"seffafvznos": gdjs.Sahne1Code.GDseffafvznosObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDSol_95959595OkObjects1Objects = Hashtable.newFrom({"Sol_Ok": gdjs.Sahne1Code.GDSol_9595OkObjects1});
gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDSol_95959595OkObjects1Objects = Hashtable.newFrom({"Sol_Ok": gdjs.Sahne1Code.GDSol_9595OkObjects1});
gdjs.Sahne1Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne1Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDSag_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDSag_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDSag_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDSag_9595OkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne1Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDSag_95959595OkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDSag_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDSag_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDSag_9595OkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne1Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDSag_9595OkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDSag_9595OkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDSag_9595OkObjects1[k] = gdjs.Sahne1Code.GDSag_9595OkObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDSag_9595OkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("klharg"), gdjs.Sahne1Code.GDklhargObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDklhargObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDklhargObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDklhargObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDklhargObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("klharg"), gdjs.Sahne1Code.GDklhargObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDklhargObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDklhargObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDklhargObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDklhargObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("klharg"), gdjs.Sahne1Code.GDklhargObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDklhargObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDklhargObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDklhargObjects1[k] = gdjs.Sahne1Code.GDklhargObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDklhargObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDklhargObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDklhargObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDklhargObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("klharg"), gdjs.Sahne1Code.GDklhargObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDklhargObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDklhargObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDklhargObjects1[k] = gdjs.Sahne1Code.GDklhargObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDklhargObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDklhargObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDklhargObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDklhargObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{ //Subevents
gdjs.Sahne1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("klharg"), gdjs.Sahne1Code.GDklhargObjects1);
gdjs.copyArray(runtimeScene.getObjects("seffafklharg"), gdjs.Sahne1Code.GDseffafklhargObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDklhargObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafklhargObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDklhargObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDklhargObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDklhargObjects1[k] = gdjs.Sahne1Code.GDklhargObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDklhargObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDklhargObjects1 */
/* Reuse gdjs.Sahne1Code.GDseffafklhargObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDseffafklhargObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDseffafklhargObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Sahne1Code.GDklhargObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDklhargObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dapad"), gdjs.Sahne1Code.GDdapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDdapadObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDdapadObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDdapadObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dapad"), gdjs.Sahne1Code.GDdapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDdapadObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDdapadObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDdapadObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dapad"), gdjs.Sahne1Code.GDdapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDdapadObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDdapadObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDdapadObjects1[k] = gdjs.Sahne1Code.GDdapadObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDdapadObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDdapadObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDdapadObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dapad"), gdjs.Sahne1Code.GDdapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDdapadObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDdapadObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDdapadObjects1[k] = gdjs.Sahne1Code.GDdapadObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDdapadObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDdapadObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDdapadObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{ //Subevents
gdjs.Sahne1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dapad"), gdjs.Sahne1Code.GDdapadObjects1);
gdjs.copyArray(runtimeScene.getObjects("seffafdapad"), gdjs.Sahne1Code.GDseffafdapadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDdapadObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafdapadObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDdapadObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDdapadObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDdapadObjects1[k] = gdjs.Sahne1Code.GDdapadObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDdapadObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDdapadObjects1 */
/* Reuse gdjs.Sahne1Code.GDseffafdapadObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDdapadObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne1Code.GDseffafdapadObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDseffafdapadObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zernos"), gdjs.Sahne1Code.GDzernosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDzernosObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDzernosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDzernosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDzernosObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zernos"), gdjs.Sahne1Code.GDzernosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDzernosObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDzernosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDzernosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDzernosObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zernos"), gdjs.Sahne1Code.GDzernosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDzernosObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDzernosObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDzernosObjects1[k] = gdjs.Sahne1Code.GDzernosObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDzernosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDzernosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDzernosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDzernosObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zernos"), gdjs.Sahne1Code.GDzernosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDzernosObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDzernosObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDzernosObjects1[k] = gdjs.Sahne1Code.GDzernosObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDzernosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDzernosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDzernosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDzernosObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{ //Subevents
gdjs.Sahne1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("seffafzernos"), gdjs.Sahne1Code.GDseffafzernosObjects1);
gdjs.copyArray(runtimeScene.getObjects("zernos"), gdjs.Sahne1Code.GDzernosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDzernosObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafzernosObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDzernosObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDzernosObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDzernosObjects1[k] = gdjs.Sahne1Code.GDzernosObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDzernosObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDseffafzernosObjects1 */
/* Reuse gdjs.Sahne1Code.GDzernosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDzernosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDzernosObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne1Code.GDseffafzernosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDseffafzernosObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("muyg"), gdjs.Sahne1Code.GDmuygObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDmuygObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDmuygObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDmuygObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDmuygObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("muyg"), gdjs.Sahne1Code.GDmuygObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDmuygObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDmuygObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDmuygObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDmuygObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("muyg"), gdjs.Sahne1Code.GDmuygObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDmuygObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDmuygObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDmuygObjects1[k] = gdjs.Sahne1Code.GDmuygObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDmuygObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDmuygObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDmuygObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDmuygObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("muyg"), gdjs.Sahne1Code.GDmuygObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDmuygObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDmuygObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDmuygObjects1[k] = gdjs.Sahne1Code.GDmuygObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDmuygObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDmuygObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDmuygObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDmuygObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
{ //Subevents
gdjs.Sahne1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("muyg"), gdjs.Sahne1Code.GDmuygObjects1);
gdjs.copyArray(runtimeScene.getObjects("seffafmuyg"), gdjs.Sahne1Code.GDseffafmuygObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDmuygObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafmuygObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDmuygObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDmuygObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDmuygObjects1[k] = gdjs.Sahne1Code.GDmuygObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDmuygObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDmuygObjects1 */
/* Reuse gdjs.Sahne1Code.GDseffafmuygObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDmuygObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDmuygObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne1Code.GDseffafmuygObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDseffafmuygObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vznos"), gdjs.Sahne1Code.GDvznosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDvznosObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDvznosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDvznosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDvznosObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vznos"), gdjs.Sahne1Code.GDvznosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDvznosObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDvznosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDvznosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDvznosObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vznos"), gdjs.Sahne1Code.GDvznosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDvznosObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDvznosObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDvznosObjects1[k] = gdjs.Sahne1Code.GDvznosObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDvznosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDvznosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDvznosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDvznosObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vznos"), gdjs.Sahne1Code.GDvznosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDvznosObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDvznosObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDvznosObjects1[k] = gdjs.Sahne1Code.GDvznosObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDvznosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDvznosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDvznosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDvznosObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
{ //Subevents
gdjs.Sahne1Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("seffafvznos"), gdjs.Sahne1Code.GDseffafvznosObjects1);
gdjs.copyArray(runtimeScene.getObjects("vznos"), gdjs.Sahne1Code.GDvznosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDvznosObjects1Objects, gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDseffafvznosObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDvznosObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDvznosObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDvznosObjects1[k] = gdjs.Sahne1Code.GDvznosObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDvznosObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDseffafvznosObjects1 */
/* Reuse gdjs.Sahne1Code.GDvznosObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDvznosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDvznosObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Sahne1Code.GDseffafvznosObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDseffafvznosObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne1Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDSol_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDSol_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDSol_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDSol_9595OkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne1Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne1Code.mapOfGDgdjs_9546Sahne1Code_9546GDSol_95959595OkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDSol_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDSol_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDSol_9595OkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne1Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDSol_9595OkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDSol_9595OkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDSol_9595OkObjects1[k] = gdjs.Sahne1Code.GDSol_9595OkObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDSol_9595OkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ana Sahne", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 10, 0);
}}

}


};

gdjs.Sahne1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sahne1Code.GDseffafklhargObjects1.length = 0;
gdjs.Sahne1Code.GDseffafklhargObjects2.length = 0;
gdjs.Sahne1Code.GDklhargObjects1.length = 0;
gdjs.Sahne1Code.GDklhargObjects2.length = 0;
gdjs.Sahne1Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne1Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne1Code.GDseffafdapadObjects1.length = 0;
gdjs.Sahne1Code.GDseffafdapadObjects2.length = 0;
gdjs.Sahne1Code.GDdapadObjects1.length = 0;
gdjs.Sahne1Code.GDdapadObjects2.length = 0;
gdjs.Sahne1Code.GDzernosObjects1.length = 0;
gdjs.Sahne1Code.GDzernosObjects2.length = 0;
gdjs.Sahne1Code.GDseffafzernosObjects1.length = 0;
gdjs.Sahne1Code.GDseffafzernosObjects2.length = 0;
gdjs.Sahne1Code.GDmuygObjects1.length = 0;
gdjs.Sahne1Code.GDmuygObjects2.length = 0;
gdjs.Sahne1Code.GDseffafmuygObjects1.length = 0;
gdjs.Sahne1Code.GDseffafmuygObjects2.length = 0;
gdjs.Sahne1Code.GDvznosObjects1.length = 0;
gdjs.Sahne1Code.GDvznosObjects2.length = 0;
gdjs.Sahne1Code.GDseffafvznosObjects1.length = 0;
gdjs.Sahne1Code.GDseffafvznosObjects2.length = 0;
gdjs.Sahne1Code.GDSag_9595OkObjects1.length = 0;
gdjs.Sahne1Code.GDSag_9595OkObjects2.length = 0;
gdjs.Sahne1Code.GDSol_9595OkObjects1.length = 0;
gdjs.Sahne1Code.GDSol_9595OkObjects2.length = 0;
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;

gdjs.Sahne1Code.eventsList5(runtimeScene);
gdjs.Sahne1Code.GDseffafklhargObjects1.length = 0;
gdjs.Sahne1Code.GDseffafklhargObjects2.length = 0;
gdjs.Sahne1Code.GDklhargObjects1.length = 0;
gdjs.Sahne1Code.GDklhargObjects2.length = 0;
gdjs.Sahne1Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne1Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne1Code.GDseffafdapadObjects1.length = 0;
gdjs.Sahne1Code.GDseffafdapadObjects2.length = 0;
gdjs.Sahne1Code.GDdapadObjects1.length = 0;
gdjs.Sahne1Code.GDdapadObjects2.length = 0;
gdjs.Sahne1Code.GDzernosObjects1.length = 0;
gdjs.Sahne1Code.GDzernosObjects2.length = 0;
gdjs.Sahne1Code.GDseffafzernosObjects1.length = 0;
gdjs.Sahne1Code.GDseffafzernosObjects2.length = 0;
gdjs.Sahne1Code.GDmuygObjects1.length = 0;
gdjs.Sahne1Code.GDmuygObjects2.length = 0;
gdjs.Sahne1Code.GDseffafmuygObjects1.length = 0;
gdjs.Sahne1Code.GDseffafmuygObjects2.length = 0;
gdjs.Sahne1Code.GDvznosObjects1.length = 0;
gdjs.Sahne1Code.GDvznosObjects2.length = 0;
gdjs.Sahne1Code.GDseffafvznosObjects1.length = 0;
gdjs.Sahne1Code.GDseffafvznosObjects2.length = 0;
gdjs.Sahne1Code.GDSag_9595OkObjects1.length = 0;
gdjs.Sahne1Code.GDSag_9595OkObjects2.length = 0;
gdjs.Sahne1Code.GDSol_9595OkObjects1.length = 0;
gdjs.Sahne1Code.GDSol_9595OkObjects2.length = 0;
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne1Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;


return;

}

gdjs['Sahne1Code'] = gdjs.Sahne1Code;
