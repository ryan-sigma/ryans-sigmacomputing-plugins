import { useEffect, useMemo } from "react";
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
  useActionEffect,
  useVariable,
} from "@sigmacomputing/plugin";

import type { ActualVariable } from "../types";
import {
  pluginContainerStyles,
  pluginHeaderStyles,
  pluginTitleStyles,
  pluginContentStyles,
  pluginStatusItemStyles,
  pluginLabelStyles,
  pluginValueStyles,
  statusColors,
} from "../styles/pluginStyles";

interface ForEachConfig_t {
    index: string;
    endIndex: string;
    isDisabled: string;
    doOneLoop: string;
    runNextLoop: string;
}

function ForEach() {
  useEditorPanelConfig([
    {
      type: "variable",
      name: "index",
      label: "Current index we are looping over",
      allowedTypes: ["number"],
    },
    {
      type: "variable",
      name: "endIndex",
      label: "Index to end at",
      allowedTypes: ["number"],
    },
    {
      type: "variable",
      name: "isDisabled",
      label: "Is Disabled?",
      allowedTypes: ["boolean"],
    },
    { type: "action-effect", name: "doOneLoop", label: "Do One Loop" },
    { type: "action-trigger", name: "runNextLoop", label: "Run next loop" },
  ]);

  const config: ForEachConfig_t = useConfig() as ForEachConfig_t;

  // Extract the variables from config panel
  const [indexVar] = useVariable(config.index);
  const [endIndexVar] = useVariable(config.endIndex);
  const [isDisabledVar] = useVariable(config.isDisabled);


  const index = useMemo(() => {
    const value = indexVar?.defaultValue as ActualVariable | undefined;
    return value?.type === "number" && value.value !== null
      ? value.value
      : 0;
  }, [indexVar]);

  const endIndex = useMemo(() => {
    const value = endIndexVar?.defaultValue as ActualVariable | undefined;
    return value?.type === "number" && value.value !== null
      ? value.value
      : 0;
  }, [endIndexVar]);

  const isDisabled = useMemo(() => {
    const value = isDisabledVar?.defaultValue as ActualVariable | undefined;
    return value?.type === "boolean" && value.value !== null
      ? value.value
      : true;
  }, [isDisabledVar]);

  // Set up action trigger (sending data out)
  const runNextLoop = useActionTrigger(config.runNextLoop);
  // On receiving effect (input to plugin), do the trigger (output from plugin)
  useActionEffect(config.doOneLoop, () => {
    runNextLoop();
  });

  // Set up the interval
  useEffect(() => {
    if (isDisabled) {
      return;
    }
    if (index >= endIndex) {
      return;
    }
    runNextLoop();
  }, [isDisabled, runNextLoop, index, endIndex]);

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>ForEach Plugin</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Status:</span>
          <span
            style={{
              ...pluginValueStyles,
              color: isDisabled ? statusColors.stopped : statusColors.running,
            }}
          >
            {isDisabled ? "Disabled" : "Running"}
          </span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Current Index:</span>
          <span style={pluginValueStyles}>{index}</span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>End Index:</span>
          <span style={pluginValueStyles}>{endIndex}</span>
        </div>
      </div>
    </div>
  );
}

export default ForEach;
