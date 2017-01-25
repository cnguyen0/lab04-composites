interface IDomElement {
  print();
}

class DomElement implements IDomElement {
	private element:DomElement;

	constructor(element:DomElement){
		this.element = element;
	}
	print() {
		console.log(this.element.print);
	}
}

class TextNode implements IDomElement {
	print() {
		console.log(this.print);
	}
}

