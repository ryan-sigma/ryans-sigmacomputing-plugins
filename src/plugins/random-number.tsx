import { useEditorPanelConfig } from "@sigmacomputing/plugin";

import {
  pluginContainerStyles,
  pluginHeaderStyles,
  pluginTitleStyles,
  pluginContentStyles,
  pluginStatusItemStyles,
  pluginLabelStyles,
  pluginValueStyles,
} from "../styles/pluginStyles";

function RandomNumber() {
  useEditorPanelConfig([]);

  // Generate a new random number (1-10,000) on every render
  const randomNumber = Math.floor(Math.random() * 10000) + 1;

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>🎲 Random Number Plugin</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Random Number:</span>
          <span style={pluginValueStyles} data-testid="random-number-value">
            {randomNumber}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RandomNumber;
