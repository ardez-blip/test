gdjs.Sahne5Code = {};
gdjs.Sahne5Code.localVariables = [];
gdjs.Sahne5Code.GDNewPanelSpriteObjects1= [];
gdjs.Sahne5Code.GDNewPanelSpriteObjects2= [];
gdjs.Sahne5Code.GDSag_9595OkObjects1= [];
gdjs.Sahne5Code.GDSag_9595OkObjects2= [];
gdjs.Sahne5Code.GDSol_9595OkObjects1= [];
gdjs.Sahne5Code.GDSol_9595OkObjects2= [];
gdjs.Sahne5Code.GDPesObjects1= [];
gdjs.Sahne5Code.GDPesObjects2= [];
gdjs.Sahne5Code.GDPes_9595SeffafObjects1= [];
gdjs.Sahne5Code.GDPes_9595SeffafObjects2= [];
gdjs.Sahne5Code.GDGosigObjects1= [];
gdjs.Sahne5Code.GDGosigObjects2= [];
gdjs.Sahne5Code.GDGosig_9595SeffafObjects1= [];
gdjs.Sahne5Code.GDGosig_9595SeffafObjects2= [];
gdjs.Sahne5Code.GDPacgonObjects1= [];
gdjs.Sahne5Code.GDPacgonObjects2= [];
gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1= [];
gdjs.Sahne5Code.GDPacgon_9595SeffafObjects2= [];
gdjs.Sahne5Code.GDPohgapObjects1= [];
gdjs.Sahne5Code.GDPohgapObjects2= [];
gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1= [];
gdjs.Sahne5Code.GDPohgap_9595SeffafObjects2= [];
gdjs.Sahne5Code.GDSabigObjects1= [];
gdjs.Sahne5Code.GDSabigObjects2= [];
gdjs.Sahne5Code.GDSabig_9595SeffafObjects1= [];
gdjs.Sahne5Code.GDSabig_9595SeffafObjects2= [];
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1= [];
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects2= [];


gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSag_95959595OkObjects1Objects = Hashtable.newFrom({"Sag_Ok": gdjs.Sahne5Code.GDSag_9595OkObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSag_95959595OkObjects1Objects = Hashtable.newFrom({"Sag_Ok": gdjs.Sahne5Code.GDSag_9595OkObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSol_95959595OkObjects1Objects = Hashtable.newFrom({"Sol_Ok": gdjs.Sahne5Code.GDSol_9595OkObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSol_95959595OkObjects1Objects = Hashtable.newFrom({"Sol_Ok": gdjs.Sahne5Code.GDSol_9595OkObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPesObjects1Objects = Hashtable.newFrom({"Pes": gdjs.Sahne5Code.GDPesObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPesObjects1Objects = Hashtable.newFrom({"Pes": gdjs.Sahne5Code.GDPesObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPesObjects1Objects = Hashtable.newFrom({"Pes": gdjs.Sahne5Code.GDPesObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPes_95959595SeffafObjects1Objects = Hashtable.newFrom({"Pes_Seffaf": gdjs.Sahne5Code.GDPes_9595SeffafObjects1});
gdjs.Sahne5Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne5Code.GDPesObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Pes_Seffaf"), gdjs.Sahne5Code.GDPes_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPesObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPes_95959595SeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPesObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPesObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPesObjects1[i].setPosition(1102,94);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPesObjects1Objects = Hashtable.newFrom({"Pes": gdjs.Sahne5Code.GDPesObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPes_95959595SeffafObjects1Objects = Hashtable.newFrom({"Pes_Seffaf": gdjs.Sahne5Code.GDPes_9595SeffafObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosigObjects1Objects = Hashtable.newFrom({"Gosig": gdjs.Sahne5Code.GDGosigObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosigObjects1Objects = Hashtable.newFrom({"Gosig": gdjs.Sahne5Code.GDGosigObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosigObjects1Objects = Hashtable.newFrom({"Gosig": gdjs.Sahne5Code.GDGosigObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosig_95959595SeffafObjects1Objects = Hashtable.newFrom({"Gosig_Seffaf": gdjs.Sahne5Code.GDGosig_9595SeffafObjects1});
gdjs.Sahne5Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne5Code.GDGosigObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Gosig_Seffaf"), gdjs.Sahne5Code.GDGosig_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosigObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosig_95959595SeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDGosigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDGosigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDGosigObjects1[i].setPosition(24,205);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosigObjects1Objects = Hashtable.newFrom({"Gosig": gdjs.Sahne5Code.GDGosigObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosig_95959595SeffafObjects1Objects = Hashtable.newFrom({"Gosig_Seffaf": gdjs.Sahne5Code.GDGosig_9595SeffafObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgonObjects1Objects = Hashtable.newFrom({"Pacgon": gdjs.Sahne5Code.GDPacgonObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgonObjects1Objects = Hashtable.newFrom({"Pacgon": gdjs.Sahne5Code.GDPacgonObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgonObjects1Objects = Hashtable.newFrom({"Pacgon": gdjs.Sahne5Code.GDPacgonObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgon_95959595SeffafObjects1Objects = Hashtable.newFrom({"Pacgon_Seffaf": gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1});
gdjs.Sahne5Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne5Code.GDPacgonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Pacgon_Seffaf"), gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgonObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgon_95959595SeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPacgonObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPacgonObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPacgonObjects1[i].setPosition(1115,287);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgonObjects1Objects = Hashtable.newFrom({"Pacgon": gdjs.Sahne5Code.GDPacgonObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgon_95959595SeffafObjects1Objects = Hashtable.newFrom({"Pacgon_Seffaf": gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgapObjects1Objects = Hashtable.newFrom({"Pohgap": gdjs.Sahne5Code.GDPohgapObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgapObjects1Objects = Hashtable.newFrom({"Pohgap": gdjs.Sahne5Code.GDPohgapObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgapObjects1Objects = Hashtable.newFrom({"Pohgap": gdjs.Sahne5Code.GDPohgapObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgap_95959595SeffafObjects1Objects = Hashtable.newFrom({"Pohgap_Seffaf": gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1});
gdjs.Sahne5Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne5Code.GDPohgapObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Pohgap_Seffaf"), gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgapObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgap_95959595SeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPohgapObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPohgapObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPohgapObjects1[i].setPosition(959,371);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgapObjects1Objects = Hashtable.newFrom({"Pohgap": gdjs.Sahne5Code.GDPohgapObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgap_95959595SeffafObjects1Objects = Hashtable.newFrom({"Pohgap_Seffaf": gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabigObjects1Objects = Hashtable.newFrom({"Sabig": gdjs.Sahne5Code.GDSabigObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabigObjects1Objects = Hashtable.newFrom({"Sabig": gdjs.Sahne5Code.GDSabigObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabigObjects1Objects = Hashtable.newFrom({"Sabig": gdjs.Sahne5Code.GDSabigObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabig_95959595SeffafObjects1Objects = Hashtable.newFrom({"Sabig_Seffaf": gdjs.Sahne5Code.GDSabig_9595SeffafObjects1});
gdjs.Sahne5Code.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Sahne5Code.GDSabigObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Sabig_Seffaf"), gdjs.Sahne5Code.GDSabig_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabigObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabig_95959595SeffafObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSabigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSabigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSabigObjects1[i].setPosition(71,327);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}}

}


};gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabigObjects1Objects = Hashtable.newFrom({"Sabig": gdjs.Sahne5Code.GDSabigObjects1});
gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabig_95959595SeffafObjects1Objects = Hashtable.newFrom({"Sabig_Seffaf": gdjs.Sahne5Code.GDSabig_9595SeffafObjects1});
gdjs.Sahne5Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne5Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSag_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSag_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSag_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSag_9595OkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne5Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSag_95959595OkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSag_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSag_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSag_9595OkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne5Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDSag_9595OkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDSag_9595OkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDSag_9595OkObjects1[k] = gdjs.Sahne5Code.GDSag_9595OkObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDSag_9595OkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne6", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne5Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSol_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSol_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSol_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSol_9595OkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne5Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSol_95959595OkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSol_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSol_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSol_9595OkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne5Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDSol_9595OkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDSol_9595OkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDSol_9595OkObjects1[k] = gdjs.Sahne5Code.GDSol_9595OkObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDSol_9595OkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne4", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pes"), gdjs.Sahne5Code.GDPesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPesObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPesObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPesObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pes"), gdjs.Sahne5Code.GDPesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPesObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPesObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPesObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPesObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pes"), gdjs.Sahne5Code.GDPesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPesObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPesObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPesObjects1[k] = gdjs.Sahne5Code.GDPesObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPesObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPesObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPesObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pes"), gdjs.Sahne5Code.GDPesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPesObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPesObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPesObjects1[k] = gdjs.Sahne5Code.GDPesObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPesObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPesObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPesObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPesObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
{ //Subevents
gdjs.Sahne5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pes"), gdjs.Sahne5Code.GDPesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pes_Seffaf"), gdjs.Sahne5Code.GDPes_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPesObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPes_95959595SeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPesObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPesObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPesObjects1[k] = gdjs.Sahne5Code.GDPesObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPesObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPesObjects1 */
/* Reuse gdjs.Sahne5Code.GDPes_9595SeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPes_9595SeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPes_9595SeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Sahne5Code.GDPesObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPesObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gosig"), gdjs.Sahne5Code.GDGosigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosigObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDGosigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDGosigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDGosigObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gosig"), gdjs.Sahne5Code.GDGosigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosigObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDGosigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDGosigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDGosigObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gosig"), gdjs.Sahne5Code.GDGosigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDGosigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDGosigObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDGosigObjects1[k] = gdjs.Sahne5Code.GDGosigObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDGosigObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDGosigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDGosigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDGosigObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gosig"), gdjs.Sahne5Code.GDGosigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDGosigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDGosigObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDGosigObjects1[k] = gdjs.Sahne5Code.GDGosigObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDGosigObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDGosigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDGosigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDGosigObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{ //Subevents
gdjs.Sahne5Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gosig"), gdjs.Sahne5Code.GDGosigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gosig_Seffaf"), gdjs.Sahne5Code.GDGosig_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosigObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDGosig_95959595SeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDGosigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDGosigObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDGosigObjects1[k] = gdjs.Sahne5Code.GDGosigObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDGosigObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDGosigObjects1 */
/* Reuse gdjs.Sahne5Code.GDGosig_9595SeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDGosig_9595SeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDGosig_9595SeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Sahne5Code.GDGosigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDGosigObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pacgon"), gdjs.Sahne5Code.GDPacgonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPacgonObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPacgonObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPacgonObjects1[i].getBehavior("Scale").setScale(0.8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pacgon"), gdjs.Sahne5Code.GDPacgonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPacgonObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPacgonObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPacgonObjects1[i].getBehavior("Scale").setScale(0.7);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pacgon"), gdjs.Sahne5Code.GDPacgonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPacgonObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPacgonObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPacgonObjects1[k] = gdjs.Sahne5Code.GDPacgonObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPacgonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPacgonObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPacgonObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPacgonObjects1[i].getBehavior("Scale").setScale(0.8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pacgon"), gdjs.Sahne5Code.GDPacgonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPacgonObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPacgonObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPacgonObjects1[k] = gdjs.Sahne5Code.GDPacgonObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPacgonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPacgonObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPacgonObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPacgonObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{ //Subevents
gdjs.Sahne5Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pacgon"), gdjs.Sahne5Code.GDPacgonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pacgon_Seffaf"), gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgonObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPacgon_95959595SeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPacgonObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPacgonObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPacgonObjects1[k] = gdjs.Sahne5Code.GDPacgonObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPacgonObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPacgonObjects1 */
/* Reuse gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Sahne5Code.GDPacgonObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPacgonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pohgap"), gdjs.Sahne5Code.GDPohgapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgapObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPohgapObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPohgapObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPohgapObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pohgap"), gdjs.Sahne5Code.GDPohgapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgapObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPohgapObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPohgapObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPohgapObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pohgap"), gdjs.Sahne5Code.GDPohgapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPohgapObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPohgapObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPohgapObjects1[k] = gdjs.Sahne5Code.GDPohgapObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPohgapObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPohgapObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPohgapObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPohgapObjects1[i].getBehavior("Scale").setScale(0.6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pohgap"), gdjs.Sahne5Code.GDPohgapObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPohgapObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPohgapObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPohgapObjects1[k] = gdjs.Sahne5Code.GDPohgapObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPohgapObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPohgapObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPohgapObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPohgapObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{ //Subevents
gdjs.Sahne5Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pohgap"), gdjs.Sahne5Code.GDPohgapObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pohgap_Seffaf"), gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgapObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDPohgap_95959595SeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDPohgapObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDPohgapObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDPohgapObjects1[k] = gdjs.Sahne5Code.GDPohgapObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDPohgapObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDPohgapObjects1 */
/* Reuse gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Sahne5Code.GDPohgapObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDPohgapObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sabig"), gdjs.Sahne5Code.GDSabigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabigObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSabigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSabigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSabigObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sabig"), gdjs.Sahne5Code.GDSabigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabigObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSabigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSabigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSabigObjects1[i].getBehavior("Scale").setScale(0.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sabig"), gdjs.Sahne5Code.GDSabigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDSabigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDSabigObjects1[i].getBehavior("Sürüklenebilir").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDSabigObjects1[k] = gdjs.Sahne5Code.GDSabigObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDSabigObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSabigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSabigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSabigObjects1[i].getBehavior("Scale").setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sabig"), gdjs.Sahne5Code.GDSabigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDSabigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDSabigObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDSabigObjects1[k] = gdjs.Sahne5Code.GDSabigObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDSabigObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSabigObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSabigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSabigObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
{ //Subevents
gdjs.Sahne5Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sabig"), gdjs.Sahne5Code.GDSabigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sabig_Seffaf"), gdjs.Sahne5Code.GDSabig_9595SeffafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabigObjects1Objects, gdjs.Sahne5Code.mapOfGDgdjs_9546Sahne5Code_9546GDSabig_95959595SeffafObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDSabigObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDSabigObjects1[i].getBehavior("Sürüklenebilir").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDSabigObjects1[k] = gdjs.Sahne5Code.GDSabigObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDSabigObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDSabigObjects1 */
/* Reuse gdjs.Sahne5Code.GDSabig_9595SeffafObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDSabig_9595SeffafObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSabig_9595SeffafObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Sahne5Code.GDSabigObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDSabigObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 10, 0);
}}

}


};

gdjs.Sahne5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sahne5Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne5Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne5Code.GDSag_9595OkObjects1.length = 0;
gdjs.Sahne5Code.GDSag_9595OkObjects2.length = 0;
gdjs.Sahne5Code.GDSol_9595OkObjects1.length = 0;
gdjs.Sahne5Code.GDSol_9595OkObjects2.length = 0;
gdjs.Sahne5Code.GDPesObjects1.length = 0;
gdjs.Sahne5Code.GDPesObjects2.length = 0;
gdjs.Sahne5Code.GDPes_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDPes_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDGosigObjects1.length = 0;
gdjs.Sahne5Code.GDGosigObjects2.length = 0;
gdjs.Sahne5Code.GDGosig_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDGosig_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDPacgonObjects1.length = 0;
gdjs.Sahne5Code.GDPacgonObjects2.length = 0;
gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDPacgon_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDPohgapObjects1.length = 0;
gdjs.Sahne5Code.GDPohgapObjects2.length = 0;
gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDPohgap_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDSabigObjects1.length = 0;
gdjs.Sahne5Code.GDSabigObjects2.length = 0;
gdjs.Sahne5Code.GDSabig_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDSabig_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;

gdjs.Sahne5Code.eventsList5(runtimeScene);
gdjs.Sahne5Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Sahne5Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Sahne5Code.GDSag_9595OkObjects1.length = 0;
gdjs.Sahne5Code.GDSag_9595OkObjects2.length = 0;
gdjs.Sahne5Code.GDSol_9595OkObjects1.length = 0;
gdjs.Sahne5Code.GDSol_9595OkObjects2.length = 0;
gdjs.Sahne5Code.GDPesObjects1.length = 0;
gdjs.Sahne5Code.GDPesObjects2.length = 0;
gdjs.Sahne5Code.GDPes_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDPes_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDGosigObjects1.length = 0;
gdjs.Sahne5Code.GDGosigObjects2.length = 0;
gdjs.Sahne5Code.GDGosig_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDGosig_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDPacgonObjects1.length = 0;
gdjs.Sahne5Code.GDPacgonObjects2.length = 0;
gdjs.Sahne5Code.GDPacgon_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDPacgon_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDPohgapObjects1.length = 0;
gdjs.Sahne5Code.GDPohgapObjects2.length = 0;
gdjs.Sahne5Code.GDPohgap_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDPohgap_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDSabigObjects1.length = 0;
gdjs.Sahne5Code.GDSabigObjects2.length = 0;
gdjs.Sahne5Code.GDSabig_9595SeffafObjects1.length = 0;
gdjs.Sahne5Code.GDSabig_9595SeffafObjects2.length = 0;
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne5Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;


return;

}

gdjs['Sahne5Code'] = gdjs.Sahne5Code;
