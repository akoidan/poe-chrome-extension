function nodeScriptReplace(node: HTMLElement) {
  if (nodeScriptIs(node)) {
    (node.parentNode as HTMLElement).replaceChild(nodeScriptClone(node), node);
  } else {
    let i = 0;
    const children = node.childNodes;
    while (i < children.length) {
      nodeScriptReplace(children[i++] as HTMLElement);
    }
  }

  return node;
}
function nodeScriptIs(node: HTMLElement) {
  return node.tagName === "SCRIPT";
}
function nodeScriptClone(node: HTMLElement) {
  const script = document.createElement("script");
  script.text = node.innerHTML;
  for (let i = node.attributes.length - 1; i >= 0; i--) {
    script.setAttribute(node.attributes[i].name, node.attributes[i].value);
  }
  return script;
}

export {nodeScriptIs, nodeScriptReplace, nodeScriptClone};
