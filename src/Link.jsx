import { BUTTON, EVENTS } from "./consts";

export function navigate(href) {
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}


export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    console.log('button', event.button)
    const isMainEvent = event.button === BUTTON.PRIMARY // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey // modified click
    const isManageableEvent = target === undefined || target === '_self'
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  }
  return <a onClick={handleClick} href={to} target={target} {...props} />
}