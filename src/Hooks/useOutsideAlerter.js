import { useEffect } from "react"

function useOutsideAlerter(ref, expand, setExpand) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (expand && ref.current && !ref.current.contains(event.target)) {
        setExpand(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, expand, setExpand]);
}

export default useOutsideAlerter