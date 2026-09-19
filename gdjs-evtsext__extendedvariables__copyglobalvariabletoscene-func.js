
if (typeof gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene = {};
gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene.idToCallbackMap = new Map();


gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene.userFunc0x1f4bdf0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const globalVariable = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("globalVariableName"));
const sceneVariable = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("sceneVariableName"));
const isExactCopy = eventsFunctionContext.getArgument("isExactCopy");

gdjs.Variable.copy(globalVariable, sceneVariable, isExactCopy);

};
gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene.userFunc0x1f4bdf0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene.func = function(runtimeScene, globalVariableName, sceneVariableName, isExactCopy, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "globalVariableName") return globalVariableName;
if (argName === "sceneVariableName") return sceneVariableName;
if (argName === "isExactCopy") return isExactCopy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ExtendedVariables__CopyGlobalVariableToScene.registeredGdjsCallbacks = [];