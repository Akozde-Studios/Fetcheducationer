
if (typeof gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable = {};
gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.idToCallbackMap = new Map();
gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.GDObjectObjects1= [];


gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.userFunc0x1f5b6e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const object = eventsFunctionContext.getObjects("Object")[0];
const objectVariables = object.getVariables();

objectVariables.remove(eventsFunctionContext.getArgument("VariableName"));
};
gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.userFunc0x1f5b6e8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.func = function(runtimeScene, Object, VariableName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ExtendedVariables"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ExtendedVariables"),
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
if (argName === "VariableName") return VariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.GDObjectObjects1.length = 0;

gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__ExtendedVariables__DeleteObjectVariable.registeredGdjsCallbacks = [];