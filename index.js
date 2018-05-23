'use strict'

const document = require('html-element').document

var escape = require('escape-html');

/*
    Generate HTML for the tab in the header
    @param {Block}
    @param {Boolean}
    @return {String}
*/
function createTab(block, i, isActive) {
    return '<div class="tab' + (isActive? ' active' : '') + '" data-codetab="' + i + '">' + block.kwargs.name + '</div>';
}

/*
    Generate HTML for the tab's content
    @param {Block}
    @param {Boolean}
    @return {String}
*/
function createTabBody(block, i, isActive) {
    return '<div class="tab' + (isActive? ' active' : '') + '" data-codetab="' + i + '"><pre><code class="lang-' + (block.kwargs.type || block.kwargs.name) + '">'
        + escape(block.body) +
    '</code></pre></div>';
}


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

function codeTabs(parentBlock) {
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

function apiBlock(book, parentBlock) {
    return book.renderBlock('markdown', parentBlock.body).then(function (body) {
        // Create container
        const container = element('div', {class: 'api-container'});

        // Create header
        const header = element('div', {class: 'api-header'}, container);
        if (parentBlock.kwargs.method) {
            element('small', {text: parentBlock.kwargs.method, class: parentBlock.kwargs.method.toLowerCase()}, header)
        }
        element('h2', {text: parentBlock.args[0]}, header);
        if (parentBlock.kwargs.url) {
            element('span', {text: parentBlock.kwargs.url}, header)
        }

        // Create content section
        const content = element('div', {class: 'api-content'}, container);
        element('div', {class: 'api-description', html: body}, content);
        return container.outerHTML;
    });
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
            blocks: ['language'],
            process(parentBlock) {
                return apiBlock(this.book, parentBlock) + codeTabs(parentBlock);
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
