export class SkriptInjector {
    static injectScript(path) {
        const node = document.createElement('script');
        node.src = path;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
//# sourceMappingURL=loader.js.map