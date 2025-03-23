import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Options({ id, options, onChange }: { id: string; options: string[], onChange: (id: string, value: string) => void }) {
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleChange = (value: string) => {
    setSelectedPlan(value)
    onChange(id, value)
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-4">
        {options.map((opt, index) => {
          return (
            <div className="flex items-start space-x-3 space-y-0" key={`${id}-${index}`}>
              <div
                className="flex items-center justify-center mt-1"
                onClick={() => handleChange(opt)}
              >
                <div className="relative w-5 h-5 cursor-pointer">
                  <div
                    className={cn(
                      'absolute inset-0 rounded-full border-2 border-primary',
                      selectedPlan === opt ? 'border-primary' : 'border-muted-foreground'
                    )}
                  />
                  {selectedPlan === opt && (
                    <div className="absolute inset-[4px] rounded-full bg-primary" />
                  )}
                  <input
                    type="radio"
                    id={`${id}-${index}`}
                    name={id}
                    value={opt}
                    checked={selectedPlan === opt}
                    onChange={() => handleChange(opt)}
                    className="sr-only"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor={`${id}-${index}`} className="font-medium cursor-pointer">
                  {opt}
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
