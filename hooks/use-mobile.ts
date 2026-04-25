import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Initial check without immediate setState in the top-level body
    const checkIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
    
    // Set initial value inside rAF avoiding synchronous setState warning
    requestAnimationFrame(() => {
      setIsMobile(checkIsMobile())
    });

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
