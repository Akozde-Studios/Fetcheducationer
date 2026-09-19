
if (typeof gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable = {};
gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable.idToCallbackMap = new Map();


gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable.userFunc0x1f3d0d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene.getVariables().remove(eventsFunctionContext.getArgument("SceneVariableName"));
};
gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable.userFunc0x1f3d0d0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable.func = function(runtimeScene, SceneVariableName, parentEventsFunctionContext) {
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
if (argName === "SceneVariableName") return SceneVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ExtendedVariables__DeleteSceneVariable.registeredGdjsCallbacks = [];