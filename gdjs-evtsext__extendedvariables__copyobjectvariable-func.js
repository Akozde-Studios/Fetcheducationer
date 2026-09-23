
if (typeof gdjs.evtsExt__ExtendedVariables__CopyObjectVariable !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__CopyObjectVariable = {};
gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.idToCallbackMap = new Map();
gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.GDSourceObjectObjects1= [];
gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.GDTargetObjectObjects1= [];


gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.userFunc0x1f53358 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const sourceObject = eventsFunctionContext.getObjects("SourceObject")[0];
const targetObject = eventsFunctionContext.getObjects("TargetObject")[0];
const sourceVariableName = eventsFunctionContext.getArgument("SourceVariableName");
const targetVariableName = eventsFunctionContext.getArgument("TargetVariableName");
const isExactCopy = eventsFunctionContext.getArgument("isExactCopy");

const sourceVariables = sourceObject.getVariables();
const targetVariables = targetObject.getVariables();

if (sourceVariables.has(sourceVariableName))
{
    gdjs.Variable.copy
    (
        sourceVariables.get(sourceVariableName),
        targetVariables.get(targetVariableName),
        isExactCopy
    );
}
};
gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.userFunc0x1f53358(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.func = function(runtimeScene, SourceObject, SourceVariableName, TargetObject, TargetVariableName, isExactCopy, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"SourceObject": SourceObject
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"SourceObject": gdjs.objectsListsToArray(SourceObject)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
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
if (argName === "SourceVariableName") return SourceVariableName;
if (argName === "TargetVariableName") return TargetVariableName;
if (argName === "isExactCopy") return isExactCopy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.GDSourceObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.GDSourceObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.GDTargetObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.registeredGdjsCallbacks = [];