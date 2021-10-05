//const componentGenerator = require('./plop/component/component-generator.js');
const partialGenerator = require('./plop/page/partial-generator');
const componentGenerator = require('./plop/component/component-generator');
const pageGenerator = require('./plop/page/page-generator.js');

module.exports = function (plop) {
    Object.keys(handlers).forEach((functionName) => {
        plop.setHelper(functionName, handlers[functionName]);
    });
    pageGenerator(plop);
    partialGenerator(plop);
    componentGenerator(plop);
};

const handlers = {
    getPath(folder, name) {
        let path = '';
        if (folder) {
            path += `${folder.toLowerCase()}/`;
        }
        path += `${name.toLowerCase()}`;
        return path;
    },
    createFilename(componentName) {
        return componentName
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .toLowerCase()
            .split(' ')
            .join('-');
    },
};