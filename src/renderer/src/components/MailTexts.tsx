import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TextContentArea({textContent}: {textContent: string}) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="relative bg-zinc-900 text-white rounded-xl p-6 shadow-lg">
        <div className="absolute top-4 right-4">
          <button
            onClick={copyToClipboard}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Copy to clipboard"
          >
            {copied ? <Check className="h-6 w-6" /> : <Copy className="h-6 w-6" />}
          </button>
        </div>
        <div className="whitespace-pre-line text-lg">{textContent}</div>
      </div>

      {/* Feedback message */}
      <div
        className={cn(
          "fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md transition-opacity duration-300",
          copied ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        Copied to clipboard!
      </div>
    </div>
  )
}

