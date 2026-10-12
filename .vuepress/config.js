const {
    description
} = require('../package')

module.exports = {
    title: '1401 Definitive Guide:tm:',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#b98aff'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/1401-Driver-Guide/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/fleurstie/1401-install-guide',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        logo: '/homepage.png',
        nav: [{
            text: 'Related Websites',
            items: [{
                text: 'Home Site',
                link: 'https://nullmothsystems.com/'
            },
            {
                text: 'Original Dortania OpenCore Guide',
                link: 'https://dortania.github.io/OpenCore-Install-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introduction',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'prerequisites',
                'macos-limits',
            ]
        },
        {
            title: 'Installation',
            collapsable: false,
            sidebarDepth: 2,
            children: [{
                title: 'Installing the Thing',
                collapsable: true,
                path: '/installer-guide/',
                sidebarDepth: 1,
                children: [
                    '/installer-guide/windows-install',
                    '/installer-guide/mac-install',
                ],
            },
            ]
        },
{
    title: 'Troubleshooting',
    collapsable: false,
    sidebarDepth: 0,
    children: [
        {
            title: 'General Troubleshooting',
            collapsable: false,
            path: '/troubleshooting/troubleshooting',
            sidebarDepth: 0,
            children: [
                '/troubleshooting/extended/opencore-issues',
                '/troubleshooting/extended/kernel-issues',
                '/troubleshooting/extended/userspace-issues',
                '/troubleshooting/extended/post-issues',
                '/troubleshooting/extended/misc-issues',
            ]
        },
        '/troubleshooting/debug',
    ]
},
        {
            title: 'OS Specific',
            collapsable: false,
            children: [
                '/extras/tahoe',
            ]
        },
        {
            title: 'Misc',
            collapsable: false,
            children: [
                'CONTRIBUTING',
                '/misc/credit',
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-fulltext-search',
        ['@vuepress/medium-zoom',
            {
                selector: ".theme-succinct-content :not(a) > img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}