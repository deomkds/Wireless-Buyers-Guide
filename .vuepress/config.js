const {
    description
} = require('../package')

module.exports = {
    title: 'Guia de Compra de Wi-Fi',
    description: description,
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
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
    base: '/Wireless-Buyers-Guide/',
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/deomkds/Wireless-Buyers-Guide',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        logo: '/homepage.png',
        nav: [{
            text: 'Outros Guias',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Site Original (em inglês)',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Primeiros Passos com a ACPI',
                link: 'https://deomkds.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'Guia de Instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'Pós-instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Multiboot com o OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Multiboot/'
            },            
            {
                text: 'Guia de Compra de GPUs',
                link: 'https://deomkds.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra Anti-Hackintosh',
                link: 'https://deomkds.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        }
        ],
        sidebar: [{
            title: 'Introdução',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
				        ['unsupported', 'Suporte de Chipsets'],
				        ['Kext', 'Kexts Necessárias'],
				        ['Airport', 'Adaptadores AirPort']
            ]
        },
        {
            title: 'Tipos de Placas Wi-Fi',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['/types-of-wireless-card/pcie', 'PCIe'],
				        ['/types-of-wireless-card/mpcie', 'Mini PCIe'],
				        ['/types-of-wireless-card/m2', 'M.2'],
				        ['/types-of-wireless-card/Express', 'Express Cards'],
				        ['/types-of-wireless-card/usb', 'USB']
            ]
        },
        {
            title: 'Outros',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['/misc/bluetooth', 'Suporte de Bluetooth'],
				        ['/misc/intel', 'Placas Wi-Fi Intel'],
				        ['/misc/credit', 'Créditos']
            ]
        },
    ],
},
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
