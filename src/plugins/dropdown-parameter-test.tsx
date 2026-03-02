import { useConfig, useEditorPanelConfig } from "@sigmacomputing/plugin";

import {
  pluginContainerStyles,
  pluginHeaderStyles,
  pluginTitleStyles,
  pluginLabelStyles,
  pluginValueStyles,
  pluginStatusItemStyles,
  pluginContentStyles,
} from "../styles/pluginStyles";


function DropdownParameterTest() {
  useEditorPanelConfig([
      {
        type: "dropdown",
        name: "dropdownParameter1",
        label: "This is the first dropdown parameter",
        values: ["value1", "value2", "value3"],
        defaultValue: "value1",
      },
      {
        type: "dropdown",
        name: "dropdownParameter2",
        label: "This is the second dropdown parameter",
        values: ["value1", "value2", "value3"],
        defaultValue: "value2",
      },
      {
        type: "dropdown",
        name: "dropdownParameter3",
        label: "This is the third dropdown parameter. Only one option!",
        values: ["value1"],
        defaultValue: "value1",
      },
      {
        type: "dropdown",
        name: "dropdownParameter4",
        label: "This is the fourth dropdown parameter. Only one option!",
        values: ["value1"],
        defaultValue: "value1",
      },
      {
        type: "dropdown",
        name: "dropdownParameter5",
        label: "This is the fifth dropdown parameter. No options!",
        values: [],
        defaultValue: "",
      }
  ]);

  const config = useConfig() as {
    dropdownParameter1?: string;
    dropdownParameter2?: string;
  };

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>Dropdown Parameter Tester</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>parameter1 selected:</span>
          <pre style={pluginValueStyles}>
            {JSON.stringify(config.dropdownParameter1, undefined, 2)}
          </pre>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>parameter2 selected:</span>
          <pre style={pluginValueStyles}>
            {JSON.stringify(config.dropdownParameter2, undefined, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default DropdownParameterTest;
