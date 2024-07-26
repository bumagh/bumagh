import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Buma blog",
  description: "A VitePress Site",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs',
      // scanStartPath: null,
      // resolvePath: null,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // useTitleFromFileHeading: true,
      // useTitleFromFrontmatter: true,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      collapsed: true,
      // collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusOrderByDescending: false,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      // excludeFiles: ['first.md', 'secret.md'],
      // excludeFolders: ['secret-folder'],
      // includeDotFiles: false,
      includeRootIndexFile: false,
      includeFolderIndexFile: true,
      includeEmptyFolder: true
      // convertSameNameSubFileToGroupIndexPage: false,
      // useIndexFileForFolderMenuInfo: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: false,
    }),

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
