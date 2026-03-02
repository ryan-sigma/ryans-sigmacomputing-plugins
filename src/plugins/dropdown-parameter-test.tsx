import { useConfig, useEditorPanelConfig, type CustomPluginConfigOptions } from "@sigmacomputing/plugin";

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
  const config = useConfig() as {
    dropdownParameter1?: string;
    dropdownParameter2?: string;
    dropdownParameter3?: string;
    dropdownParameter4?: string;
  };

  const pluginConfig: CustomPluginConfigOptions[] = [
    {
      type: "dropdown",
      name: "dropdownParameter1",
      label: "This is the first dropdown parameter, pick value1 to enable dropdownParameter2",
      values: ["value1", "value2", "value3"],
      defaultValue: "value1",
    },
  ];

  if (config.dropdownParameter1 === 'value1') {
    pluginConfig.push({
      type: "dropdown",
      name: "dropdownParameter2",
      label: "This is the second dropdown parameter, pick value2 to enable dropdownParameter3",
      values: ["value1", "value2", "value3"],
      defaultValue: "value2",
    })
  }

  if (config.dropdownParameter2 === 'value1') {
    pluginConfig.push({
      type: "dropdown",
      name: "dropdownParameter3",
      label: "This is the third dropdown parameter. Only one option!",
      values: ["value1"],
      defaultValue: "value1",
    })
    pluginConfig.push({
      type: "dropdown",
      name: "dropdownParameter4",
      label: "This is the fourth dropdown parameter. Only one option!",
      values: ["value1"],
      defaultValue: "value1",
    })
  }

  useEditorPanelConfig(pluginConfig);

  const parameters = [
    { key: "dropdownParameter1", label: "parameter1" },
    { key: "dropdownParameter2", label: "parameter2" },
    { key: "dropdownParameter3", label: "parameter3" },
    { key: "dropdownParameter4", label: "parameter4" },
  ] as const;

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>Dropdown Parameter Tester</h2>
      </div>
      <div style={pluginContentStyles}>
        {parameters.map(({ key, label }) => (
          <div key={key} style={pluginStatusItemStyles}>
            <span style={pluginLabelStyles}>{label} selected:</span>
            <pre style={pluginValueStyles}>
              {JSON.stringify(config[key], undefined, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownParameterTest;
