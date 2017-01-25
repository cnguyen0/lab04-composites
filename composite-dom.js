var DomElement = (function () {
    function DomElement(element) {
        this.element = element;
    }
    DomElement.prototype.print = function () {
        console.log(this.element.print);
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode() {
    }
    TextNode.prototype.print = function () {
        console.log(this.print);
    };
    return TextNode;
}());
