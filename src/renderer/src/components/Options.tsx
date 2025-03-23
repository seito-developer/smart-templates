import { cn } from '@/lib/utils'
import { useDigitKeySelect } from '@/hooks/useDigitKeySelect';

export default function Options({ id, options, onChange }: { id: string; options: string[], onChange: (id: string, value: string) => void }) {
  const [selectedIndex, setSelectedIndex] = useDigitKeySelect<string>(
    options,
    (val) => {
      onChange(id, val) // 親へ"どれを選んだか"を伝える
    },
    0 // 初期選択インデックス
  )

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-4">
        {options.map((opt, index) => {
          const checked = index === selectedIndex
          const handleRadioSelect = () => setSelectedIndex(index)
          return (
            <div className="flex items-start space-x-3 space-y-0" key={`${id}-${index}`}>
              <div
                className="flex items-center justify-center mt-1"
                onClick={handleRadioSelect}
              >
                <div className="relative w-5 h-5 cursor-pointer">
                  <div
                    className={cn(
                      'absolute inset-0 rounded-full border-2 border-primary',
                      checked ? 'border-primary' : 'border-muted-foreground'
                    )}
                  />
                  {checked && (
                    <div className="absolute inset-[4px] rounded-full bg-primary" />
                  )}
                  <input
                    type="radio"
                    id={`${id}-${index}`}
                    name={id}
                    value={opt}
                    checked={checked}
                    onChange={handleRadioSelect}
                    className="sr-only"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor={`${id}-${index}`} className="font-medium cursor-pointer">
                {index + 1} : {opt}
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
