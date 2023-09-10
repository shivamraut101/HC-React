function customRender(reactElement, mainContainer) {
  const ele = document.createElement(reactElement.type);

  for (const key in reactElement.props) {
    
    ele.setAttribute(key, reactElement.props[key]);
    }
  
  
  ele.innerHTML = reactElement.children;

  mainContainer.appendChild(ele);
}

const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to go to Google",
};

customRender(reactElement, mainContainer);
