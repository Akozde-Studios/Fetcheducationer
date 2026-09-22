
if (typeof gdjs.evtsExt__ExtendedVariables__ObjectVariableExist !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist = {};
gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.idToCallbackMap = new Map();
gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1= [];


gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.userFunc0x1f250d8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let returnValue = true;
if (!objects.length) {
    returnValue = false;
} else {
    const objectVariableName = eventsFunctionContext.getArgument("ObjectVariableName");
    for (let i = 0; i < objects.length; i++) {
        if (!objects[i].hasVariable(objectVariableName)) {
            // If any object does NOT have the variable, return false.
            returnValue = false;
            break;
        }
    }
}

eventsFunctionContext.returnValue = returnValue;
};
gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToCheck"), gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1);

const objects = gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1;
gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.userFunc0x1f250d8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.func = function(runtimeScene, ObjectToCheck, ObjectVariableName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"ObjectToCheck": ObjectToCheck
},
  _objectArraysMap: {
"ObjectToCheck": gdjs.objectsListsToArray(ObjectToCheck)
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
if (argName === "ObjectVariableName") return ObjectVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1.length = 0;

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.registeredGdjsCallbacks = [];