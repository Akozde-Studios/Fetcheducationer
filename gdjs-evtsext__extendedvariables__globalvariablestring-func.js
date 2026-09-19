
if (typeof gdjs.evtsExt__ExtendedVariables__GlobalVariableString !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__GlobalVariableString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__GlobalVariableString = {};
gdjs.evtsExt__ExtendedVariables__GlobalVariableString.idToCallbackMap = new Map();


gdjs.evtsExt__ExtendedVariables__GlobalVariableString.userFunc0x1f44ff0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const globalVariables = runtimeScene.getGame().getVariables();
const variableExist = globalVariables.has(eventsFunctionContext.getArgument("GlobalVariableName"));

if (variableExist) {
    eventsFunctionContext.returnValue = globalVariables.get(eventsFunctionContext.getArgument("GlobalVariableName")).getAsString();
}
};
gdjs.evtsExt__ExtendedVariables__GlobalVariableString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__GlobalVariableString.userFunc0x1f44ff0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ExtendedVariables__GlobalVariableString.func = function(runtimeScene, GlobalVariableName, parentEventsFunctionContext) {
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
if (argName === "GlobalVariableName") return GlobalVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedVariables__GlobalVariableString.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ExtendedVariables__GlobalVariableString.registeredGdjsCallbacks = [];