import { useCallback, useState, useEffect } from 'react'

interface Size {
  width: number
  height: number
}

export default function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Size,
] {
  const [ref, setRef] = useState<T | null>(null)
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth])

  useEffect(() => {
    handleSize()
  }, [ref?.offsetHeight, ref?.offsetWidth, handleSize])

  useEffect(() => {
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize    )
  }, [handleSize])

  return [setRef, size]
}