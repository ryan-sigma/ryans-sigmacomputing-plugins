import {
  useConfig,
  useEditorPanelConfig,
  useVariable,
  useUrlParameter,
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
} from "../styles/pluginStyles";
import { useCallback, useState } from "react";

interface ForEachConfig_t {
    testVariable: string;
    urlParamToRead: string;
    effect1: string;
    trigger1: string;
}

function ForEach() {
  useEditorPanelConfig([
    {
      type: "variable",
      name: "testVariable",
      label: "Test Variable",
      allowedTypes: ["number", "text"],
    },
    {
      type: "variable",
      name: "urlParamToRead",
      label: "URL Param to Read",
      allowedTypes: ["text"],
    },
    { type: "action-effect", name: "effect1", label: "Action Effect 1" },
    { type: "action-trigger", name: "trigger1", label: "Action Trigger 1" },
  ]);

  const config: ForEachConfig_t = useConfig() as ForEachConfig_t;

  const [index, setIndex] = useState(1);

  // Extract the variables from config panel
  const [testVariableValue] = useVariable(config.testVariable);
  const [urlParamToReadValue] = useVariable(config.urlParamToRead);

  const value = urlParamToReadValue?.defaultValue as ActualVariable | undefined;
  const urlParamToRead =
    value?.type === "text" && value.value != null ? value.value : "";
  const [urlParameter, setUrlParameter] = useUrlParameter(urlParamToRead);

  const updateUrlParameter = useCallback(() => {
    setUrlParameter(`test-${urlParamToRead}-${index}`);
    setIndex(index + 1);
  }, [index, urlParamToRead]);

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>Debug Plugin</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Config:</span>
          <pre
            style={{
              ...pluginValueStyles,
            }}
          >
            {JSON.stringify(config, undefined, 2)}
          </pre>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>URL Param to Read:</span>
          <pre
            style={{
              ...pluginValueStyles,
            }}
          >
            {JSON.stringify(urlParamToReadValue, undefined, 2)}
          </pre>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>URL Param Value:</span>
          <pre
            style={{
              ...pluginValueStyles,
            }}
          >
            {JSON.stringify(urlParameter, undefined, 2)}
            <button onClick={updateUrlParameter}>Set URL Param to 'test-{urlParamToRead}-{index}'</button>
          </pre>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Test Variable:</span>
          <pre
            style={{
              ...pluginValueStyles,
            }}
          >
            {JSON.stringify(testVariableValue, undefined, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ForEach;
