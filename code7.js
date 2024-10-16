gdjs.Sahne7Code = {};
gdjs.Sahne7Code.localVariables = [];
gdjs.Sahne7Code.GDVerargu1Objects1= [];
gdjs.Sahne7Code.GDVerargu1Objects2= [];
gdjs.Sahne7Code.GDVerargu2Objects1= [];
gdjs.Sahne7Code.GDVerargu2Objects2= [];
gdjs.Sahne7Code.GDYesil_9595VerarguObjects1= [];
gdjs.Sahne7Code.GDYesil_9595VerarguObjects2= [];
gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects1= [];
gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects2= [];
gdjs.Sahne7Code.GDzernos1Objects1= [];
gdjs.Sahne7Code.GDzernos1Objects2= [];
gdjs.Sahne7Code.GDzernos2Objects1= [];
gdjs.Sahne7Code.GDzernos2Objects2= [];
gdjs.Sahne7Code.GDzernos_9595yesilObjects1= [];
gdjs.Sahne7Code.GDzernos_9595yesilObjects2= [];
gdjs.Sahne7Code.GDzernos_9595kirimiziObjects1= [];
gdjs.Sahne7Code.GDzernos_9595kirimiziObjects2= [];
gdjs.Sahne7Code.GDVerarguObjects1= [];
gdjs.Sahne7Code.GDVerarguObjects2= [];
gdjs.Sahne7Code.GDZernosObjects1= [];
gdjs.Sahne7Code.GDZernosObjects2= [];
gdjs.Sahne7Code.GDPurteSabig1Objects1= [];
gdjs.Sahne7Code.GDPurteSabig1Objects2= [];
gdjs.Sahne7Code.GDPurteSabig2Objects1= [];
gdjs.Sahne7Code.GDPurteSabig2Objects2= [];
gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects1= [];
gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects2= [];
gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects1= [];
gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects2= [];
gdjs.Sahne7Code.GDNewSpriteObjects1= [];
gdjs.Sahne7Code.GDNewSpriteObjects2= [];
gdjs.Sahne7Code.GDpohgap1Objects1= [];
gdjs.Sahne7Code.GDpohgap1Objects2= [];
gdjs.Sahne7Code.GDpohgap2Objects1= [];
gdjs.Sahne7Code.GDpohgap2Objects2= [];
gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects1= [];
gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects2= [];
gdjs.Sahne7Code.GDpohgap_9595yesilObjects1= [];
gdjs.Sahne7Code.GDpohgap_9595yesilObjects2= [];
gdjs.Sahne7Code.GDNewSprite2Objects1= [];
gdjs.Sahne7Code.GDNewSprite2Objects2= [];
gdjs.Sahne7Code.GDmucak1Objects1= [];
gdjs.Sahne7Code.GDmucak1Objects2= [];
gdjs.Sahne7Code.GDmucak2Objects1= [];
gdjs.Sahne7Code.GDmucak2Objects2= [];
gdjs.Sahne7Code.GDmucak_9595yesilObjects1= [];
gdjs.Sahne7Code.GDmucak_9595yesilObjects2= [];
gdjs.Sahne7Code.GDmucak_9595kirmiziObjects1= [];
gdjs.Sahne7Code.GDmucak_9595kirmiziObjects2= [];
gdjs.Sahne7Code.GDNewSprite3Objects1= [];
gdjs.Sahne7Code.GDNewSprite3Objects2= [];
gdjs.Sahne7Code.GDdapad1Objects1= [];
gdjs.Sahne7Code.GDdapad1Objects2= [];
gdjs.Sahne7Code.GDdapad2Objects1= [];
gdjs.Sahne7Code.GDdapad2Objects2= [];
gdjs.Sahne7Code.GDdapad_9595yesilObjects1= [];
gdjs.Sahne7Code.GDdapad_9595yesilObjects2= [];
gdjs.Sahne7Code.GDdapad_9595kirmiziObjects1= [];
gdjs.Sahne7Code.GDdapad_9595kirmiziObjects2= [];
gdjs.Sahne7Code.GDNewSprite4Objects1= [];
gdjs.Sahne7Code.GDNewSprite4Objects2= [];
gdjs.Sahne7Code.GDArka_9595PlanObjects1= [];
gdjs.Sahne7Code.GDArka_9595PlanObjects2= [];
gdjs.Sahne7Code.GDSag_9595OkObjects1= [];
gdjs.Sahne7Code.GDSag_9595OkObjects2= [];
gdjs.Sahne7Code.GDSol_9595OkObjects1= [];
gdjs.Sahne7Code.GDSol_9595OkObjects2= [];
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1= [];
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects2= [];


gdjs.Sahne7Code.mapOfGDgdjs_9546Sahne7Code_9546GDSag_95959595OkObjects1Objects = Hashtable.newFrom({"Sag_Ok": gdjs.Sahne7Code.GDSag_9595OkObjects1});
gdjs.Sahne7Code.mapOfGDgdjs_9546Sahne7Code_9546GDSag_95959595OkObjects1Objects = Hashtable.newFrom({"Sag_Ok": gdjs.Sahne7Code.GDSag_9595OkObjects1});
gdjs.Sahne7Code.mapOfGDgdjs_9546Sahne7Code_9546GDSol_95959595OkObjects1Objects = Hashtable.newFrom({"Sol_Ok": gdjs.Sahne7Code.GDSol_9595OkObjects1});
gdjs.Sahne7Code.mapOfGDgdjs_9546Sahne7Code_9546GDSol_95959595OkObjects1Objects = Hashtable.newFrom({"Sol_Ok": gdjs.Sahne7Code.GDSol_9595OkObjects1});
gdjs.Sahne7Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Verargu1"), gdjs.Sahne7Code.GDVerargu1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDVerargu1Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDVerargu1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDVerargu1Objects1[k] = gdjs.Sahne7Code.GDVerargu1Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDVerargu1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDVerargu1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Yesil_Verargu"), gdjs.Sahne7Code.GDYesil_9595VerarguObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDYesil_9595VerarguObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDYesil_9595VerarguObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDVerargu1Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDVerargu1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Verargu2"), gdjs.Sahne7Code.GDVerargu2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDVerargu2Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDVerargu2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDVerargu2Objects1[k] = gdjs.Sahne7Code.GDVerargu2Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDVerargu2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kirmizi_Verargu"), gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects1);
/* Reuse gdjs.Sahne7Code.GDVerargu2Objects1 */
{for(var i = 0, len = gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDVerargu2Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDVerargu2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zernos1"), gdjs.Sahne7Code.GDzernos1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDzernos1Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDzernos1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDzernos1Objects1[k] = gdjs.Sahne7Code.GDzernos1Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDzernos1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDzernos1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("zernos_yesil"), gdjs.Sahne7Code.GDzernos_9595yesilObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDzernos_9595yesilObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDzernos_9595yesilObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDzernos1Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDzernos1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("zernos2"), gdjs.Sahne7Code.GDzernos2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDzernos2Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDzernos2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDzernos2Objects1[k] = gdjs.Sahne7Code.GDzernos2Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDzernos2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDzernos2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("zernos_kirimizi"), gdjs.Sahne7Code.GDzernos_9595kirimiziObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDzernos_9595kirimiziObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDzernos_9595kirimiziObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDzernos2Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDzernos2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurteSabig1"), gdjs.Sahne7Code.GDPurteSabig1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDPurteSabig1Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDPurteSabig1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDPurteSabig1Objects1[k] = gdjs.Sahne7Code.GDPurteSabig1Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDPurteSabig1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDPurteSabig1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("PurteSabig_Kirmizi"), gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDPurteSabig1Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDPurteSabig1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurteSabig2"), gdjs.Sahne7Code.GDPurteSabig2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDPurteSabig2Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDPurteSabig2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDPurteSabig2Objects1[k] = gdjs.Sahne7Code.GDPurteSabig2Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDPurteSabig2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDPurteSabig2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("PurteSabig_Yesil"), gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDPurteSabig2Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDPurteSabig2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pohgap1"), gdjs.Sahne7Code.GDpohgap1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDpohgap1Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDpohgap1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDpohgap1Objects1[k] = gdjs.Sahne7Code.GDpohgap1Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDpohgap1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDpohgap1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("pohgap_kirmizi"), gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDpohgap1Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDpohgap1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pohgap2"), gdjs.Sahne7Code.GDpohgap2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDpohgap2Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDpohgap2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDpohgap2Objects1[k] = gdjs.Sahne7Code.GDpohgap2Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDpohgap2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDpohgap2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("pohgap_yesil"), gdjs.Sahne7Code.GDpohgap_9595yesilObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDpohgap_9595yesilObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDpohgap_9595yesilObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDpohgap2Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDpohgap2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mucak1"), gdjs.Sahne7Code.GDmucak1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDmucak1Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDmucak1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDmucak1Objects1[k] = gdjs.Sahne7Code.GDmucak1Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDmucak1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDmucak1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("mucak_yesil"), gdjs.Sahne7Code.GDmucak_9595yesilObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDmucak_9595yesilObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDmucak_9595yesilObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDmucak1Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDmucak1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mucak2"), gdjs.Sahne7Code.GDmucak2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDmucak2Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDmucak2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDmucak2Objects1[k] = gdjs.Sahne7Code.GDmucak2Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDmucak2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDmucak2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("mucak_kirmizi"), gdjs.Sahne7Code.GDmucak_9595kirmiziObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDmucak_9595kirmiziObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDmucak_9595kirmiziObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDmucak2Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDmucak2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dapad1"), gdjs.Sahne7Code.GDdapad1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDdapad1Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDdapad1Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDdapad1Objects1[k] = gdjs.Sahne7Code.GDdapad1Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDdapad1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDdapad1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("dapad_yesil"), gdjs.Sahne7Code.GDdapad_9595yesilObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDdapad_9595yesilObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDdapad_9595yesilObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "554055__gronkjaer__rightanswer.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDdapad1Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDdapad1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dapad2"), gdjs.Sahne7Code.GDdapad2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDdapad2Objects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDdapad2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDdapad2Objects1[k] = gdjs.Sahne7Code.GDdapad2Objects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDdapad2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDdapad2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("dapad_kirmizi"), gdjs.Sahne7Code.GDdapad_9595kirmiziObjects1);
{for(var i = 0, len = gdjs.Sahne7Code.GDdapad_9595kirmiziObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDdapad_9595kirmiziObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "558121__abdrtar__wrong.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Sahne7Code.GDdapad2Objects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDdapad2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne7Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne7Code.mapOfGDgdjs_9546Sahne7Code_9546GDSag_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDSag_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne7Code.GDSag_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDSag_9595OkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne7Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne7Code.mapOfGDgdjs_9546Sahne7Code_9546GDSag_95959595OkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDSag_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne7Code.GDSag_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDSag_9595OkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sag_Ok"), gdjs.Sahne7Code.GDSag_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDSag_9595OkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDSag_9595OkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDSag_9595OkObjects1[k] = gdjs.Sahne7Code.GDSag_9595OkObjects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDSag_9595OkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne8", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne7Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne7Code.mapOfGDgdjs_9546Sahne7Code_9546GDSol_95959595OkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDSol_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne7Code.GDSol_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDSol_9595OkObjects1[i].setColor("0;255;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne7Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sahne7Code.mapOfGDgdjs_9546Sahne7Code_9546GDSol_95959595OkObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDSol_9595OkObjects1 */
{for(var i = 0, len = gdjs.Sahne7Code.GDSol_9595OkObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDSol_9595OkObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sol_Ok"), gdjs.Sahne7Code.GDSol_9595OkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDSol_9595OkObjects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDSol_9595OkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDSol_9595OkObjects1[k] = gdjs.Sahne7Code.GDSol_9595OkObjects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDSol_9595OkObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sahne6", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "506053__mellau__button-click-2.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muzik_Acma_Kapama"), gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length;i<l;++i) {
    if ( gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[k] = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i];
        ++k;
    }
}
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1 */
{for(var i = 0, len = gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length ;i < len;++i) {
    gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 100, 10, 0);
}}

}


};

gdjs.Sahne7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sahne7Code.GDVerargu1Objects1.length = 0;
gdjs.Sahne7Code.GDVerargu1Objects2.length = 0;
gdjs.Sahne7Code.GDVerargu2Objects1.length = 0;
gdjs.Sahne7Code.GDVerargu2Objects2.length = 0;
gdjs.Sahne7Code.GDYesil_9595VerarguObjects1.length = 0;
gdjs.Sahne7Code.GDYesil_9595VerarguObjects2.length = 0;
gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects1.length = 0;
gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects2.length = 0;
gdjs.Sahne7Code.GDzernos1Objects1.length = 0;
gdjs.Sahne7Code.GDzernos1Objects2.length = 0;
gdjs.Sahne7Code.GDzernos2Objects1.length = 0;
gdjs.Sahne7Code.GDzernos2Objects2.length = 0;
gdjs.Sahne7Code.GDzernos_9595yesilObjects1.length = 0;
gdjs.Sahne7Code.GDzernos_9595yesilObjects2.length = 0;
gdjs.Sahne7Code.GDzernos_9595kirimiziObjects1.length = 0;
gdjs.Sahne7Code.GDzernos_9595kirimiziObjects2.length = 0;
gdjs.Sahne7Code.GDVerarguObjects1.length = 0;
gdjs.Sahne7Code.GDVerarguObjects2.length = 0;
gdjs.Sahne7Code.GDZernosObjects1.length = 0;
gdjs.Sahne7Code.GDZernosObjects2.length = 0;
gdjs.Sahne7Code.GDPurteSabig1Objects1.length = 0;
gdjs.Sahne7Code.GDPurteSabig1Objects2.length = 0;
gdjs.Sahne7Code.GDPurteSabig2Objects1.length = 0;
gdjs.Sahne7Code.GDPurteSabig2Objects2.length = 0;
gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects1.length = 0;
gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects2.length = 0;
gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects1.length = 0;
gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects2.length = 0;
gdjs.Sahne7Code.GDNewSpriteObjects1.length = 0;
gdjs.Sahne7Code.GDNewSpriteObjects2.length = 0;
gdjs.Sahne7Code.GDpohgap1Objects1.length = 0;
gdjs.Sahne7Code.GDpohgap1Objects2.length = 0;
gdjs.Sahne7Code.GDpohgap2Objects1.length = 0;
gdjs.Sahne7Code.GDpohgap2Objects2.length = 0;
gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects1.length = 0;
gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects2.length = 0;
gdjs.Sahne7Code.GDpohgap_9595yesilObjects1.length = 0;
gdjs.Sahne7Code.GDpohgap_9595yesilObjects2.length = 0;
gdjs.Sahne7Code.GDNewSprite2Objects1.length = 0;
gdjs.Sahne7Code.GDNewSprite2Objects2.length = 0;
gdjs.Sahne7Code.GDmucak1Objects1.length = 0;
gdjs.Sahne7Code.GDmucak1Objects2.length = 0;
gdjs.Sahne7Code.GDmucak2Objects1.length = 0;
gdjs.Sahne7Code.GDmucak2Objects2.length = 0;
gdjs.Sahne7Code.GDmucak_9595yesilObjects1.length = 0;
gdjs.Sahne7Code.GDmucak_9595yesilObjects2.length = 0;
gdjs.Sahne7Code.GDmucak_9595kirmiziObjects1.length = 0;
gdjs.Sahne7Code.GDmucak_9595kirmiziObjects2.length = 0;
gdjs.Sahne7Code.GDNewSprite3Objects1.length = 0;
gdjs.Sahne7Code.GDNewSprite3Objects2.length = 0;
gdjs.Sahne7Code.GDdapad1Objects1.length = 0;
gdjs.Sahne7Code.GDdapad1Objects2.length = 0;
gdjs.Sahne7Code.GDdapad2Objects1.length = 0;
gdjs.Sahne7Code.GDdapad2Objects2.length = 0;
gdjs.Sahne7Code.GDdapad_9595yesilObjects1.length = 0;
gdjs.Sahne7Code.GDdapad_9595yesilObjects2.length = 0;
gdjs.Sahne7Code.GDdapad_9595kirmiziObjects1.length = 0;
gdjs.Sahne7Code.GDdapad_9595kirmiziObjects2.length = 0;
gdjs.Sahne7Code.GDNewSprite4Objects1.length = 0;
gdjs.Sahne7Code.GDNewSprite4Objects2.length = 0;
gdjs.Sahne7Code.GDArka_9595PlanObjects1.length = 0;
gdjs.Sahne7Code.GDArka_9595PlanObjects2.length = 0;
gdjs.Sahne7Code.GDSag_9595OkObjects1.length = 0;
gdjs.Sahne7Code.GDSag_9595OkObjects2.length = 0;
gdjs.Sahne7Code.GDSol_9595OkObjects1.length = 0;
gdjs.Sahne7Code.GDSol_9595OkObjects2.length = 0;
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;

gdjs.Sahne7Code.eventsList0(runtimeScene);
gdjs.Sahne7Code.GDVerargu1Objects1.length = 0;
gdjs.Sahne7Code.GDVerargu1Objects2.length = 0;
gdjs.Sahne7Code.GDVerargu2Objects1.length = 0;
gdjs.Sahne7Code.GDVerargu2Objects2.length = 0;
gdjs.Sahne7Code.GDYesil_9595VerarguObjects1.length = 0;
gdjs.Sahne7Code.GDYesil_9595VerarguObjects2.length = 0;
gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects1.length = 0;
gdjs.Sahne7Code.GDKirmizi_9595VerarguObjects2.length = 0;
gdjs.Sahne7Code.GDzernos1Objects1.length = 0;
gdjs.Sahne7Code.GDzernos1Objects2.length = 0;
gdjs.Sahne7Code.GDzernos2Objects1.length = 0;
gdjs.Sahne7Code.GDzernos2Objects2.length = 0;
gdjs.Sahne7Code.GDzernos_9595yesilObjects1.length = 0;
gdjs.Sahne7Code.GDzernos_9595yesilObjects2.length = 0;
gdjs.Sahne7Code.GDzernos_9595kirimiziObjects1.length = 0;
gdjs.Sahne7Code.GDzernos_9595kirimiziObjects2.length = 0;
gdjs.Sahne7Code.GDVerarguObjects1.length = 0;
gdjs.Sahne7Code.GDVerarguObjects2.length = 0;
gdjs.Sahne7Code.GDZernosObjects1.length = 0;
gdjs.Sahne7Code.GDZernosObjects2.length = 0;
gdjs.Sahne7Code.GDPurteSabig1Objects1.length = 0;
gdjs.Sahne7Code.GDPurteSabig1Objects2.length = 0;
gdjs.Sahne7Code.GDPurteSabig2Objects1.length = 0;
gdjs.Sahne7Code.GDPurteSabig2Objects2.length = 0;
gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects1.length = 0;
gdjs.Sahne7Code.GDPurteSabig_9595KirmiziObjects2.length = 0;
gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects1.length = 0;
gdjs.Sahne7Code.GDPurteSabig_9595YesilObjects2.length = 0;
gdjs.Sahne7Code.GDNewSpriteObjects1.length = 0;
gdjs.Sahne7Code.GDNewSpriteObjects2.length = 0;
gdjs.Sahne7Code.GDpohgap1Objects1.length = 0;
gdjs.Sahne7Code.GDpohgap1Objects2.length = 0;
gdjs.Sahne7Code.GDpohgap2Objects1.length = 0;
gdjs.Sahne7Code.GDpohgap2Objects2.length = 0;
gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects1.length = 0;
gdjs.Sahne7Code.GDpohgap_9595kirmiziObjects2.length = 0;
gdjs.Sahne7Code.GDpohgap_9595yesilObjects1.length = 0;
gdjs.Sahne7Code.GDpohgap_9595yesilObjects2.length = 0;
gdjs.Sahne7Code.GDNewSprite2Objects1.length = 0;
gdjs.Sahne7Code.GDNewSprite2Objects2.length = 0;
gdjs.Sahne7Code.GDmucak1Objects1.length = 0;
gdjs.Sahne7Code.GDmucak1Objects2.length = 0;
gdjs.Sahne7Code.GDmucak2Objects1.length = 0;
gdjs.Sahne7Code.GDmucak2Objects2.length = 0;
gdjs.Sahne7Code.GDmucak_9595yesilObjects1.length = 0;
gdjs.Sahne7Code.GDmucak_9595yesilObjects2.length = 0;
gdjs.Sahne7Code.GDmucak_9595kirmiziObjects1.length = 0;
gdjs.Sahne7Code.GDmucak_9595kirmiziObjects2.length = 0;
gdjs.Sahne7Code.GDNewSprite3Objects1.length = 0;
gdjs.Sahne7Code.GDNewSprite3Objects2.length = 0;
gdjs.Sahne7Code.GDdapad1Objects1.length = 0;
gdjs.Sahne7Code.GDdapad1Objects2.length = 0;
gdjs.Sahne7Code.GDdapad2Objects1.length = 0;
gdjs.Sahne7Code.GDdapad2Objects2.length = 0;
gdjs.Sahne7Code.GDdapad_9595yesilObjects1.length = 0;
gdjs.Sahne7Code.GDdapad_9595yesilObjects2.length = 0;
gdjs.Sahne7Code.GDdapad_9595kirmiziObjects1.length = 0;
gdjs.Sahne7Code.GDdapad_9595kirmiziObjects2.length = 0;
gdjs.Sahne7Code.GDNewSprite4Objects1.length = 0;
gdjs.Sahne7Code.GDNewSprite4Objects2.length = 0;
gdjs.Sahne7Code.GDArka_9595PlanObjects1.length = 0;
gdjs.Sahne7Code.GDArka_9595PlanObjects2.length = 0;
gdjs.Sahne7Code.GDSag_9595OkObjects1.length = 0;
gdjs.Sahne7Code.GDSag_9595OkObjects2.length = 0;
gdjs.Sahne7Code.GDSol_9595OkObjects1.length = 0;
gdjs.Sahne7Code.GDSol_9595OkObjects2.length = 0;
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects1.length = 0;
gdjs.Sahne7Code.GDMuzik_9595Acma_9595KapamaObjects2.length = 0;


return;

}

gdjs['Sahne7Code'] = gdjs.Sahne7Code;
