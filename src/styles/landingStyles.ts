import {
  colors,
  spacing,
  typography,
  borderRadius,
  transitions,
  shadows,
} from "./theme";

// Landing page palette - light, readable, cohesive
const landing = {
  bg: "#f8f9fc",
  cardBg: "#ffffff",
  cardBorder: "#e2e6ee",
  cardHoverBorder: "#c5cbd9",
  text: "#2d3748",
  textMuted: "#5a6578",
  heading: "#1a202c",
  accent: colors.primary,
  accentMuted: "rgba(100, 108, 255, 0.12)",
  codeBg: "#f1f3f6",
  codeText: "#4a5568",
  link: "#4f6af5",
  linkHover: "#3d5ae8",
};

export const landingStyles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100vh",
    background: landing.bg,
    color: landing.text,
  },

  header: {
    textAlign: "center" as const,
    padding: `${spacing.xxl} ${spacing.lg}`,
    borderBottom: `1px solid ${landing.cardBorder}`,
    background: landing.cardBg,
  },

  headerTitle: {
    margin: 0,
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.semibold,
    color: landing.heading,
  },

  subtitle: {
    margin: 0,
    marginTop: spacing.sm,
    color: landing.textMuted,
    lineHeight: 1.6,
  },

  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },

  pluginsSection: {
    width: "100%",
    maxWidth: "900px",
  },

  pluginsSectionTitle: {
    textAlign: "center" as const,
    marginBottom: spacing.lg,
    color: landing.heading,
    fontSize: typography.fontSize.xl,
  },

  pluginCard: {
    background: landing.cardBg,
    border: `1px solid ${landing.cardBorder}`,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    transition: transitions.normal,
    cursor: "default",
    boxShadow: shadows.sm,

    "&:hover": {
      borderColor: landing.cardHoverBorder,
      boxShadow: shadows.md,
    },
  },

  pluginCardTitle: {
    marginTop: 0,
    marginBottom: spacing.md,
    color: landing.heading,
    fontSize: typography.fontSize.lg,
  },

  pluginCardParagraph: {
    margin: `${spacing.sm} 0`,
    lineHeight: 1.6,
  },

  pluginDescription: {
    fontSize: typography.fontSize.sm,
    color: landing.text,
    marginBottom: `${spacing.md} !important`,
    lineHeight: 1.6,
  },

  pluginFeatures: {
    fontSize: typography.fontSize.sm,
    color: landing.text,
    marginBottom: `${spacing.md} !important`,
    padding: spacing.md,
    background: landing.accentMuted,
    borderLeft: `4px solid ${landing.accent}`,
    borderRadius: borderRadius.sm,
    lineHeight: 1.5,
  },

  pluginCode: {
    background: landing.codeBg,
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.sm,
    fontFamily: typography.fontFamilyMono,
    color: landing.codeText,
    fontSize: "0.8em",
  },

  urlContainer: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    flexWrap: "wrap" as const,
    marginTop: spacing.md,
    color: landing.text,
  },

  copyButton: {
    background: landing.cardBg,
    border: `1px solid ${landing.cardBorder}`,
    color: landing.accent,
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.sm,
    cursor: "pointer",
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    transition: transitions.fast,

    "&:hover": {
      background: landing.accentMuted,
      borderColor: landing.accent,
    },

    "&:active": {
      transform: "scale(0.98)",
    },
  },

  footer: {
    textAlign: "center" as const,
    padding: spacing.lg,
    borderTop: `1px solid ${landing.cardBorder}`,
    background: landing.cardBg,
    fontSize: typography.fontSize.sm,
    color: landing.textMuted,
  },

  link: {
    color: landing.link,
    textDecoration: "none" as const,
  },
};
