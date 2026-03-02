import { useState } from "react";
import { landingStyles } from "../styles/landingStyles";

export default function Landing() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    void navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => {
      setCopiedUrl(null);
    }, 3000);
  };

  const baseUrl = `${window.location.origin}/ryans-sigmacomputing-plugins`;
  const foreachUrl = `${baseUrl}/foreach`;
  const dropdownParameterTestUrl = `${baseUrl}/dropdown-parameter-test`;

  return (
    <div style={landingStyles.container}>
      <header style={landingStyles.header}>
        <h1 style={landingStyles.headerTitle}>
          Ryan's Sigma Computing Plugins
        </h1>
        <p style={landingStyles.subtitle}>
          This is a Github Pages site for ryan's utility plugins, usually
          focused around action integrations in Sigma. The source code is
          available under an open license on{" "}
          <a
            href="https://github.com/ryansigmacomputing/ryans-sigmacomputing-plugins"
            style={landingStyles.link}
          >
            Github
          </a>
          .
        </p>
      </header>
      <main style={landingStyles.mainContent}>
        <section style={landingStyles.pluginsSection}>
          <h2 style={landingStyles.pluginsSectionTitle}>Available Plugins</h2>

          <div style={landingStyles.pluginCard}>
            <h3 style={landingStyles.pluginCardTitle}>ForEach Plugin</h3>
            <p style={landingStyles.pluginDescription}>
              A timer-based plugin that executes actions at regular intervals.
              Configure the tick rate in milliseconds, control the running
              state, and trigger actions automatically or manually through the
              "Do One Tick" action.
            </p>
            <p style={landingStyles.pluginFeatures}>
              <strong>Features:</strong> Configurable intervals, start/stop
              control, automatic and manual triggering
            </p>
            <div style={landingStyles.urlContainer}>
              <strong>URL:</strong>{" "}
              <code style={landingStyles.pluginCode}>{foreachUrl}</code>
              <button
                style={landingStyles.copyButton}
                onClick={() => {
                  copyToClipboard(foreachUrl);
                }}
                title="Copy URL to clipboard"
              >
                {copiedUrl === foreachUrl ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div style={landingStyles.pluginCard}>
            <h3 style={landingStyles.pluginCardTitle}>Dropdown Parameter Test</h3>
            <p style={landingStyles.pluginDescription}>
              A test plugin for debugging dropdown parameter state. Displays the
              selected values for two dropdown parameters in the editor panel.
            </p>
            <p style={landingStyles.pluginFeatures}>
              <strong>Features:</strong> Debug display for dropdown parameter
              selected state
            </p>
            <div style={landingStyles.urlContainer}>
              <strong>URL:</strong>{" "}
              <code style={landingStyles.pluginCode}>
                {dropdownParameterTestUrl}
              </code>
              <button
                style={landingStyles.copyButton}
                onClick={() => {
                  copyToClipboard(dropdownParameterTestUrl);
                }}
                title="Copy URL to clipboard"
              >
                {copiedUrl === dropdownParameterTestUrl
                  ? "✓ Copied!"
                  : "Copy"}
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer style={landingStyles.footer}>
        <p>&copy; 2025 ryan's Sigma Computing Plugins</p>
      </footer>
    </div>
  );
}
