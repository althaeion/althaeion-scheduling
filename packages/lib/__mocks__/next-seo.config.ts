vi.mock("@calcom/lib/next-seo.config", () => ({
  default: {
    headSeo: {
      siteName: "Althaeion",
    },
    defaultNextSeo: {
      title: "Althaeion",
      description: "Scheduling infrastructure for everyone.",
    },
  },
  seoConfig: {
    headSeo: {
      siteName: "Althaeion",
    },
  },
  buildSeoMeta: vi.fn().mockReturnValue({}),
}));
