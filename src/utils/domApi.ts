function nodeScriptReplace(node: HTMLElement) {
  if ( nodeScriptIs(node) === true ) {
    (node.parentNode as HTMLElement).replaceChild( nodeScriptClone(node) , node );
  }
  else {
    var i        = 0;
    var children = node.childNodes;
    while ( i < children.length ) {
      nodeScriptReplace( children[i++] as HTMLElement );
    }
  }

  return node;
}
function nodeScriptIs(node: HTMLElement) {
  return node.tagName === 'SCRIPT';
}
function nodeScriptClone(node: HTMLElement){
  var script  = document.createElement("script");
  script.text = node.innerHTML;
  for( var i = node.attributes.length-1; i >= 0; i-- ) {
    script.setAttribute( node.attributes[i].name, node.attributes[i].value );
  }
  return script;
}

export {nodeScriptIs, nodeScriptReplace, nodeScriptClone}
