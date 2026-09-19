
if (typeof gdjs.evtsExt__Clock__TwelveHour !== "undefined") {
  gdjs.evtsExt__Clock__TwelveHour.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Clock__TwelveHour = {};
gdjs.evtsExt__Clock__TwelveHour.idToCallbackMap = new Map();


gdjs.evtsExt__Clock__TwelveHour.userFunc0x93a438 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const d = new Date();
var hour = d.getHours();

if (hour > 12){
    hour -= 12
};

eventsFunctionContext.returnValue = hour
};
gdjs.evtsExt__Clock__TwelveHour.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


const objects = [];
gdjs.evtsExt__Clock__TwelveHour.userFunc0x93a438(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__Clock__TwelveHour.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Clock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Clock"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Clock__TwelveHour.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Clock__TwelveHour.registeredGdjsCallbacks = [];