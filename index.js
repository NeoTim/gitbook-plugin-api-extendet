'use strict'

const document = require('html-element').document


function element(tag, options, container) {
    options = options || {}
    const cls = options.class
    const text = options.text
    const html = options.html

    const el = document.createElement(tag)
    el.classList.add(cls)
    if (container != null) {
        container.appendChild(el)
    }
    if (text != null) {
        el.textContent = text
    }
    if (html != null) {
        el.innerHTML = html
    }
    return el
}


module.exports = {
    book: {
        assets: './assets',
        css: [
            'api.css',
            'codetabs.css'
        ],
        js: [
            'api.js',
            'codetabs.js'
        ]
    },

    blocks: {
        api: {
            process(block) {
                return this.book.renderBlock('markdown', block.body).then(function (body) {
                    // Create container
                    const container = element('div', {class: 'api-container'});

                    // Create header
                    const header = element('div', {class: 'api-header'}, container);
                    if (block.kwargs.method) {
                        element('small', {text: block.kwargs.method, class: block.kwargs.method.toLowerCase()}, header)
                    }
                    element('h2', {text: block.args[0]}, header);
                    if (block.kwargs.url) {
                        element('span', {text: block.kwargs.url}, header)
                    }

                    // Create content section
                    const content = element('div', {class: 'api-content'}, container);
                    element('div', {class: 'api-description', html: body}, content);
                    return container.outerHTML
                })
            }
        },
        codetabs: {
            blocks: ['language'],
            process: function(parentBlock) {
                var blocks = [parentBlock].concat(parentBlock.blocks);
                var tabsContent = '';
                var tabsHeader = '';

                blocks.forEach(function(block, i) {
                    var isActive = (i == 0);

                    if (!block.kwargs.name) {
                        throw new Error('Code tab requires a "name" property');
                    }

                    tabsHeader += createTab(block, i, isActive);
                    tabsContent += createTabBody(block, i, isActive);
                });


                return '<div class="codetabs">' +
                    '<div class="codetabs-header">' + tabsHeader + '</div>' +
                    '<div class="codetabs-body">' + tabsContent + '</div>' +
                    '</div>';
            }
        }
    }
};