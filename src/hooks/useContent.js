import { useState, useEffect } from 'react'

/**
 * useContent — fetches a JSON file from /content/{name}.json
 *
 * In development: reads from /public/content/ (Vite serves this)
 * In production:  reads from the same path on your deployed site
 *                 (GitHub Pages, Vercel, Netlify, etc.)
 *
 * To update content WITHOUT redeploying:
 *   1. Edit the JSON file in /public/content/
 *   2. Commit & push to GitHub
 *   3. The live site fetches fresh data on every page load
 *
 * Usage:
 *   const { data, loading, error } = useContent('news')
 */
export function useContent(name) {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        // Cache-bust with a 5-minute window so editors see updates quickly
        const cb  = Math.floor(Date.now() / 300_000)
        const res = await fetch(`/content/${name}.json?v=${cb}`)
        if (!res.ok) throw new Error(`Failed to load ${name}.json (${res.status})`)
        const json = await res.json()
        if (!cancelled) setData(json)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [name])

  return { data, loading, error }
}
